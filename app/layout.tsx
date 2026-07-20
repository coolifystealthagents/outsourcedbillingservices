import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourcedbillingservices.com'), title: { default: 'Outsourced Billing Services | Offshore outsourcing guides', template: '%s | Outsourced Billing Services' }, description: 'Stealth Agents-style guides for outsourced billing services: pricing, services, onboarding, and provider questions.', openGraph: { title: 'Outsourced Billing Services', description: 'Practical outsourcing guides for business teams.', url: 'https://outsourcedbillingservices.com', siteName: 'Outsourced Billing Services', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
