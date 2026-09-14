/** @type {import("next").NextConfig} */
const securityHeaders = [
  { key: "Content-Security-Policy-Report-Only", value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://acrtracking.stealthagents.us; font-src 'self' data:; frame-ancestors 'self'; base-uri 'self'; form-action 'self'" },
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
];
const nextConfig = { async headers() { return [{ source: "/:path*", headers: securityHeaders }]; } };
export default nextConfig;
