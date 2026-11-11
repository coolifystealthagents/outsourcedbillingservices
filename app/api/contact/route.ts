import { NextRequest, NextResponse } from 'next/server';
import { sendLeadFallbackToMattermost } from '../../lib/lead-fallback-mattermost';
// The public origin is fixed: request.nextUrl can contain Coolify's internal HTTP origin.
const PUBLIC_ORIGIN = 'https://outsourcedbillingservices.com';
function acceptedOrigin(request: NextRequest) {
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    let candidate = origin || '';
    if (!origin && referer) {
        try {
            candidate = new URL(referer).origin;
        }
        catch {
            return null;
        }
    }
    if (candidate === PUBLIC_ORIGIN)
        return PUBLIC_ORIGIN;
    // Local development only; never trust arbitrary Host/X-Forwarded-Host in production.
    if (process.env.NODE_ENV !== 'production' &&
        ['localhost', '127.0.0.1', '[::1]'].includes(request.nextUrl.hostname) &&
        candidate === request.nextUrl.origin)
        return candidate;
    return null;
}
const MAX_BODY_BYTES = 64000, MAX_FIELD_LENGTH = 4000, EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WINDOW_MS = 15 * 60000;
const attempts = new Map<string, number[]>();
function text(form: FormData, key: string, max = MAX_FIELD_LENGTH) { const v = form.get(key); return typeof v === 'string' ? v.trim().slice(0, max) : ''; }
function errorPage(status: number) { return new Response('<!doctype html><html lang="en"><meta charset="utf-8"><title>Submission problem</title><main><h1>We could not send your request.</h1><p>Please go back and try again.</p><a href="/contact-us">Return to the contact form</a></main>', { status, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } }); }
function ip(r: NextRequest) { return r.headers.get('cf-connecting-ip') || r.headers.get('x-real-ip') || r.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'; }
function limited(key: string, max: number) { const now = Date.now(), recent = (attempts.get(key) || []).filter(t => now - t < WINDOW_MS); recent.push(now); attempts.set(key, recent); if (attempts.size > 5000)
    for (const [k, v] of attempts)
        if (!v.some(t => now - t < WINDOW_MS))
            attempts.delete(k); return recent.length > max; }
export async function POST(request: NextRequest) {
    const publicOrigin = acceptedOrigin(request);
    const ct = request.headers.get('content-type') || '', length = Number(request.headers.get('content-length') || 0);
    if (!publicOrigin || !Number.isFinite(length) || length <= 0 || length > MAX_BODY_BYTES || (!ct.includes('application/x-www-form-urlencoded') && !ct.includes('multipart/form-data')))
        return errorPage(400);
    if (limited(`ip:${ip(request)}`, 10))
        return errorPage(429);
    let form: FormData;
    try {
        form = await request.formData();
    }
    catch {
        return errorPage(400);
    }
    if (text(form, 'websiteConfirm') || text(form, 'website_confirm') || text(form, 'website_url') || text(form, 'company_homepage'))
        return errorPage(400);
    const first = text(form, 'firstName', 100), last = text(form, 'lastName', 100), name = `${first} ${last}`.trim() || text(form, 'name', 200), email = text(form, 'email', 320).toLowerCase();
    if (!name || !email || !EMAIL_RE.test(email))
        return errorPage(422);
    if (limited(`email:${email}`, 3))
        return errorPage(429);
    const pageUrl = request.headers.get('referer') || new URL('/contact-us', publicOrigin).toString(), phone = text(form, 'phone', 100) || [text(form, 'countryCode', 10), text(form, 'phoneLocal', 100)].filter(Boolean).join(' '), business = text(form, 'company', 300) || text(form, 'companyName', 300), companySize = text(form, 'companySize', 100), positions = text(form, 'positions') || text(form, 'role'), referralChoice = text(form, 'referral', 300) || text(form, 'howTheyHeard', 300), referralSpecify = text(form, 'referralSpecify', 300), referral = referralChoice === 'Other' && referralSpecify ? `Other: ${referralSpecify}` : referralChoice || text(form, 'source', 300), message = [text(form, 'message'), text(form, 'needs'), text(form, 'details'), positions, text(form, 'tier'), companySize, text(form, 'website')].filter(Boolean).join('\n');
    const payload = { full_name: name, email, phone, company_name: business, message, how_they_heard: referral || 'Website contact form', client_event_id: crypto.randomUUID(), attribution: { source_page: pageUrl, landing_page: pageUrl, referrer: request.headers.get('referer') || '', page_journey: ['Contact form'] } };
    const token = process.env.LEAD_AUTH_TOKEN, endpoint = process.env.LEAD_INGEST_URL || 'https://leads.stealthagents.com/api/leads';
    if (!token)
        return errorPage(503);
    try {
        const upstream = await fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json', 'x-lead-token': token }, body: JSON.stringify(payload), cache: 'no-store', signal: AbortSignal.timeout(12000) });
        const result = await upstream.json().catch(() => null) as {
            ok?: boolean;
        } | null;
        if (!upstream.ok || result?.ok !== true)
            return errorPage(502);
    }
    catch {
        return errorPage(502);
    }
    void sendLeadFallbackToMattermost({ name, email, phone, business, message, companySize, positions, referral, pageUrl, userAgent: request.headers.get('user-agent') || '' });
    // Fetch callers receive a receipt, not a redirect that fetch must follow.
    if (request.headers.get('accept')?.includes('application/json'))
        return NextResponse.json({ ok: true, redirect: '/thank-you?lead=accepted' }, { headers: { 'cache-control': 'no-store' } });
    return NextResponse.redirect(new URL('/thank-you?lead=accepted', publicOrigin), 303);
}
