import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import ts from 'typescript';
const require = createRequire(import.meta.url);
const { NextRequest } = require('next/server');
const PUBLIC = 'https://outsourcedbillingservices.com';
function load(file, overrides={}) {
  const exports = {};
  const source = ts.transpileModule(readFileSync(file,'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX}}).outputText;
  const context = {exports, require:(name)=>name in overrides?overrides[name]:require(name), Request, Response, Headers, FormData, URLSearchParams, URL, AbortSignal, crypto:globalThis.crypto, console, setTimeout, clearTimeout, process:{env:{NODE_ENV:'production',LEAD_AUTH_TOKEN:'local-test-only'}}, ...overrides.globals};
  vm.runInNewContext(source,context,{filename:String(file)});
  return exports;
}
let sends=0,fallbacks=0,upstream='accepted';
function loadRoute(file=new URL('../app/api/contact/route.ts',import.meta.url)) {
 return load(file,{'../../lib/lead-fallback-mattermost':{sendLeadFallbackToMattermost:async()=>{fallbacks++;}},globals:{fetch:async()=>{sends++;if(upstream==='timeout')throw new Error('mock timeout');if(upstream==='rejected')return Response.json({ok:false},{status:502});return Response.json({ok:true});}}});
}
function request({origin=PUBLIC,accept='application/json',payload='name=Regression+Test&email=regression%40example.com',url='http://0.0.0.0:3000/api/contact',referer=PUBLIC+'/contact-us',headers={}}={}) {
 return new NextRequest(url,{method:'POST',headers:{'content-type':'application/x-www-form-urlencoded','content-length':String(Buffer.byteLength(payload)),...(origin===null?{}:{origin}),referer,accept,'x-forwarded-host':'outsourcedbillingservices.com','x-forwarded-proto':'https',...headers},body:payload});
}
// Reproduce the old deployment's pre-validation rejection behind an HTTP proxy.
const oldFile=process.env.CONTACT_BASELINE;
if(oldFile){const old=loadRoute(new URL('file://'+oldFile));assert.equal((await old.POST(request())).status,400);assert.equal(sends,0);console.log('Baseline reproduced: valid public-origin request rejected before delivery.');}
let route=loadRoute();let response=await route.POST(request());assert.equal(response.status,200);assert.deepEqual(await response.json(),{ok:true,redirect:'/thank-you?lead=accepted'});assert.equal(response.headers.get('location'),null);assert.equal(sends,1);assert.equal(fallbacks,0);
console.log('PASS: proxy-origin submission returns JSON acceptance without following a redirect.');
route=loadRoute();response=await route.POST(request({accept:'text/html'}));assert.equal(response.status,303);assert.equal(response.headers.get('location'),PUBLIC+'/thank-you?lead=accepted');console.log('PASS: native form redirects to canonical HTTPS, never an internal container.');
for(const origin of ['https://attacker.example','null',PUBLIC+'.attacker.example']){const before=sends;response=await route.POST(request({origin}));assert.equal(response.status,400);assert.equal(sends,before);}
response=await route.POST(request({origin:'https://attacker.example',headers:{'x-forwarded-host':'attacker.example'}}));assert.equal(response.status,400);
console.log('PASS: cross-origin and forged forwarded-host requests remain rejected.');
response=await loadRoute().POST(request({origin:null}));assert.equal(response.status,200);
response=await loadRoute().POST(request({payload:'name=&email='}));assert.equal(response.status,422);
response=await loadRoute().POST(request({payload:'name=Test&email=not-an-email'}));assert.equal(response.status,422);
const before=sends;response=await loadRoute().POST(request({payload:'name=Test&email=test%40example.com&website_url=spam'}));assert.equal(response.status,400);assert.equal(sends,before);
console.log('PASS: Referer fallback, blank/email validation, and honeypot protection.');
for(const mode of ['rejected','timeout']){upstream=mode;const before=fallbacks;response=await loadRoute().POST(request());assert.equal(response.status,502);assert.equal(fallbacks,before);}upstream='accepted';
console.log('PASS: genuine delivery rejection/timeouts do not return success.');
// Execute the real React submit handler with injected network/tracker boundaries.
async function clientCase(mode,trackerMode='ok'){
 let states=[],navigations=[],calls=0,tracked=0;
 const react={useEffect:()=>{},useState:(v)=>[v,next=>states.push(next)]};
 const jsx=(type,props)=>({type,props});
 const source=load(new URL('../app/contact-us/StandardContactForm.tsx',import.meta.url),{
 'react':react,'react/jsx-runtime':{jsx,jsxs:jsx},'../lib/wait-for-tracker.mjs':{waitForTracker:async(get)=>{if(trackerMode==='wait-fails')throw new Error('mock tracker getter failure');return get();}},
 globals:{window:{acrTracker:{trackLead:()=>{tracked++;if(trackerMode==='throws')throw new Error('mock tracking failure');}},location:{assign:u=>navigations.push(u)}},FormData:class {constructor(form){return form.data;}},fetch:async(url,options)=>{calls++;assert.equal(options.headers.Accept,'application/json');if(mode==='network')throw new Error('mock network failure');return Response.json(mode==='bad-receipt'?{ok:false}:{ok:true},{status:mode==='rejected'?502:200});},console:{warn:()=>{}}}});
 // Replay the actual hosted SDK's capture listener before React's submit handler.
 let autoCapture, automaticLeads=0;
 vm.runInNewContext(readFileSync(new URL('./fixtures/acr-auto-submit-0.4.19.js',import.meta.url),'utf8'), {
   document:{addEventListener:(name,handler)=>{assert.equal(name,'submit');autoCapture=handler;}},
   _captureFormSnapshot:()=>{}, _scanFormFields:()=>({lead_name:'Regression',lead_email:'regression@example.com',lead_phone:'123',lead_message:'Test'}),
   sessionStorage:{getItem:()=>null}, track:()=>{}, flush:()=>{},
   trackLead:()=>{automaticLeads++;}
 });
 autoCapture({target:{tagName:'FORM',id:'contactPageForm',action:'/api/contact',method:'post',className:'',elements:[],getAttribute:()=>''}});
 const tree=source.default({endpoint:'/api/contact',encoding:'form'});
 function find(node){if(!node||typeof node!=='object')return;if(node?.type==='form')return node;for(const child of [node?.props?.children].flat(Infinity)){const r=find(child);if(r)return r;}}
 const form=find(tree);const data=new Map([['firstName','Regression'],['lastName','Test'],['email','regression@example.com']]);
 await form.props.onSubmit({preventDefault(){},currentTarget:{data}});
 if(mode==='ok')assert.deepEqual(navigations,['/thank-you?lead=accepted']);else {assert.deepEqual(navigations,[]);assert.ok(states.includes('We could not submit your request. Please try again.'));assert.equal(tracked,0);}
 assert.equal(calls,1);assert.equal(tracked,0,'Site submit handler must not duplicate ACR automatic capture');assert.equal(automaticLeads+tracked,1,'One browser submission must emit exactly one ACR lead');
}
await clientCase('ok');await clientCase('ok','throws');await clientCase('ok','wait-fails');await clientCase('rejected');await clientCase('bad-receipt');await clientCase('network');
console.log('PASS: hosted ACR capture plus the real React handler emits exactly one lead; accepted submissions redirect and failures stay on form.');
