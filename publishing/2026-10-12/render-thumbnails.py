from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
import json
root=Path(__file__).resolve().parents[2];m=json.loads((Path(__file__).parent/'manifest.json').read_text());out=root/'public/oct12-heroes';out.mkdir(parents=True,exist_ok=True)
bold='/System/Library/Fonts/Supplemental/Arial Bold.ttf';regular='/System/Library/Fonts/Supplemental/Arial.ttf';tf=ImageFont.truetype(bold,62);kf=ImageFont.truetype(bold,27);sf=ImageFont.truetype(regular,25)
for i,(kind,item) in enumerate([('BLOG',x) for x in m['blog']]+[('RESEARCH',x) for x in m['research']]):
 im=Image.new('RGB',(1536,1024),(15,30,45));d=ImageDraw.Draw(im);accent=(36,176,170) if kind=='BLOG' else (245,164,52)
 d.rounded_rectangle((70,70,1466,954),radius=42,fill=(22,43,61),outline=accent,width=7);d.rectangle((70,70,100,954),fill=accent);d.text((156,150),f'OUTSOURCED BILLING SERVICES  /  {kind}',font=kf,fill=accent)
 lines=[];line=''
 for w in item['title'].split():
  c=(line+' '+w).strip()
  if d.textlength(c,font=tf)>1160 and line:lines.append(line);line=w
  else:line=c
 lines.append(line);y=270
 for line in lines:d.text((156,y),line,font=tf,fill=(244,249,252));y+=88
 d.line((156,792,1364,792),fill=(88,122,142),width=3);d.text((156,835),'SOURCE EVIDENCE  •  OWNER DECISIONS  •  VERIFIED RELEASE',font=sf,fill=(191,210,220));im.save(out/f"{item['slug']}.png",'PNG',optimize=True)
