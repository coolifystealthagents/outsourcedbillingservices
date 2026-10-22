import { NextRequest, NextResponse } from 'next/server';

const canonicalHost = 'outsourcedbillingservices.com';
const recognizedHosts = new Set([canonicalHost, `www.${canonicalHost}`]);

function firstForwarded(value: string | null) {
  return value?.split(',')[0]?.trim().toLowerCase() || '';
}

function normalizedHost(value: string | null) {
  return firstForwarded(value).replace(/:\d+$/, '');
}

function cloudflareVisitorScheme(request: NextRequest) {
  const visitor = request.headers.get('cf-visitor');
  if (!visitor) return undefined;

  try {
    const parsed = JSON.parse(visitor) as { scheme?: unknown };
    return parsed.scheme === 'http' || parsed.scheme === 'https'
      ? parsed.scheme
      : undefined;
  } catch {
    return undefined;
  }
}

export function middleware(request: NextRequest) {
  const host = normalizedHost(request.headers.get('x-forwarded-host'))
    || normalizedHost(request.headers.get('host'));

  // Leave previews and local development hosts untouched.
  if (!recognizedHosts.has(host)) return NextResponse.next();

  const forwardedProto = firstForwarded(request.headers.get('x-forwarded-proto'));
  const visitorScheme = cloudflareVisitorScheme(request);
  const needsHttps = visitorScheme === 'http' || forwardedProto === 'http';
  const needsApex = host === `www.${canonicalHost}`;

  if (!needsHttps && !needsApex) return NextResponse.next();

  // Build from the public origin so proxy-internal hosts and ports cannot leak.
  const destination = new URL(
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
    `https://${canonicalHost}`,
  );
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
