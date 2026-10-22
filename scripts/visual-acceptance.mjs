import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';

const origin = process.env.BASE_URL || 'http://127.0.0.1:3000';
const localOrigin = new URL(origin).origin;
const out = process.env.VISUAL_OUTPUT || '/tmp/obs-visual-acceptance';
await mkdir(out, { recursive: true });
const routes = [
  ['home', '/'],
  ['service', '/services/invoice-preparation'],
  ['subscription-service', '/services/subscription-billing-support'],
  ['payment-service', '/services/payment-posting'],
  ['blog', '/blog/usage-cutoff-late-arrival-reconciliation'],
  ['research', '/research/research-medical-billing-claim-intake-controls'],
  ['comparison', '/blog/top-25-billing-back-office-outsourcing-companies'],
  ['contact', '/contact-us'],
  ['blog-page-2', '/blog/page/2'],
];
const viewports = [
  ['desktop', { width: 1440, height: 1000 }],
  ['mobile', { width: 390, height: 844 }],
];
const launchOptions = {
  headless: true,
  executablePath: process.env.CHROMIUM_PATH || undefined,
};
const report = [];
for (const [viewportName, viewport] of viewports) {
  for (const [name, path] of routes) {
    let browser;
    try {
      browser = await chromium.launch(launchOptions);
      const context = await browser.newContext({ viewport, reducedMotion: 'reduce' });
      const page = await context.newPage();
      await page.route('**/*', async (route) => {
        const url = new URL(route.request().url());
        if (url.protocol.startsWith('http') && url.origin !== localOrigin) return route.abort('blockedbyclient');
        return route.continue();
      });
      const consoleErrors = [];
      page.on('console', (message) => { if (message.type() === 'error' && !message.text().includes('ERR_BLOCKED_BY_CLIENT')) consoleErrors.push(message.text()); });
      const response = await page.goto(`${origin}${path}`, { waitUntil: 'networkidle', timeout: 30000 });
      const responseStatus = response?.status();
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(250);
      const metrics = await page.evaluate(() => {
        const images = [...document.images];
        const navLabels = [...document.querySelectorAll('.fleet-links a')].map((element) => element.textContent?.trim());
        const headerText = document.querySelector('.nav')?.textContent || '';
        const tocLinks = [...document.querySelectorAll('.editorial-toc a, [aria-label="On this page"] a, [aria-label="Comparison article contents"] a')];
        const mobileToc = [...document.querySelectorAll('details')].find((element) => element.querySelector('summary')?.textContent?.includes('On this page'));
        const forms = [...document.forms];
        return {
          title: document.title,
          h1: document.querySelectorAll('h1').length,
          horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
          brokenImages: images.filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.currentSrc || image.src),
          navLabels,
          poweredByVisible: /Powered by\s*StealthAgents/i.test(headerText),
          tocLinks: tocLinks.length,
          mobileToc: Boolean(mobileToc),
          testimonialControls: document.querySelectorAll('[class*="review"] button, [class*="testimonial"] button').length,
          forms: forms.length,
          mainLandmarks: document.querySelectorAll('main').length,
          bodyTextLength: document.body.innerText.length,
        };
      });
      const viewportScreenshot = `${out}/${name}-${viewportName}-viewport.png`;
      const fullScreenshot = `${out}/${name}-${viewportName}-full.png`;
      await page.screenshot({ path: viewportScreenshot });
      await page.screenshot({ path: fullScreenshot, fullPage: true });
      const isArticle = ['blog', 'research', 'comparison'].includes(name);
      const errors = [
        ...(responseStatus !== 200 ? [`status:${responseStatus}`] : []),
        ...(metrics.h1 !== 1 ? [`h1:${metrics.h1}`] : []),
        ...(metrics.mainLandmarks !== 1 ? [`main:${metrics.mainLandmarks}`] : []),
        ...(metrics.horizontalOverflow > 1 ? [`overflow:${metrics.horizontalOverflow}`] : []),
        ...metrics.brokenImages.map((image) => `broken-image:${image}`),
        ...(metrics.navLabels.join('|') !== 'Home|Services|Contact Us' ? [`nav:${metrics.navLabels.join('|')}`] : []),
        ...(!metrics.poweredByVisible ? ['missing-powered-by'] : []),
        ...(metrics.testimonialControls ? [`testimonial-controls:${metrics.testimonialControls}`] : []),
        ...(isArticle && metrics.tocLinks < 2 ? [`toc-links:${metrics.tocLinks}`] : []),
        ...(isArticle && viewportName === 'mobile' && !metrics.mobileToc ? ['missing-mobile-toc'] : []),
        ...consoleErrors.map((error) => `console:${error}`),
      ];
      report.push({ name, path, viewport: viewportName, viewportScreenshot, fullScreenshot, ...metrics, errors });
      await context.close();
    } catch (error) {
      report.push({ name, path, viewport: viewportName, errors: [`runner:${error.message}`] });
    } finally {
      await browser?.close().catch(() => {});
    }
  }
}
await writeFile(`${out}/report.json`, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ screenshots: report.filter((entry) => entry.viewportScreenshot).length * 2, failures: report.filter((entry) => entry.errors.length).map((entry) => ({ page: `${entry.name}-${entry.viewport}`, errors: entry.errors })), output: out }, null, 2));
if (report.some((entry) => entry.errors.length)) process.exitCode = 1;
