import assert from 'node:assert/strict';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
const origin = 'https://biruk.ethioerp.com';
const preview = 'http://127.0.0.1:3100';
async function walk(directory) {
 const output = [];
 for (const entry of await readdir(directory, { withFileTypes: true })) {
  const file = path.join(directory, entry.name);
  output.push(...(entry.isDirectory() ? await walk(file) : [file]));
 }
 return output;
}
const files = await walk('out');
const urls = new Set(['/']);
const pages = files.filter(file => file.endsWith('.html'));
for (const file of files) {
 const relative = path.relative('out', file).replaceAll('\\', '/');
 assert(!/(^|\/)(node_modules|\.next|\.git|\.env[^/]*)(\/|$)|\.(map|tsx?|mjs)$/.test(relative), `Unexpected upload file: ${relative}`);
 if (/\.(html|xml|txt|json|svg)$/.test(file)) {
  const text = await readFile(file, 'utf8');
  assert(!/https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)([:/]|$)/i.test(text), `Local URL: ${file}`);
  assert(!/Biruk Wondu\b/.test(text), `Old name: ${file}`);
  assert(!/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/.test(text), `Private key: ${file}`);
 }
 urls.add('/' + relative);
}
for (const file of pages) {
 const html = await readFile(file, 'utf8');
 const relative = path.relative('out', file).replaceAll('\\', '/');
 const isError = /(^|\/)(404|_not-found)(\/|\.)/.test(relative);
 const pathname = relative === 'index.html' ? '/' : '/' + relative.replace(/index\.html$/, '');
 const canonical = html.match(/<link rel="canonical" href="([^"]+)"/g) ?? [];
 assert.equal(canonical.length, 1, `Canonical count: ${file}`);
 assert(canonical[0].includes(`href="${origin}${isError ? '/404.html' : pathname}"`), `Canonical URL: ${file}`);
 assert(html.includes(`content="${origin}/social.png"`), `Absolute sharing image: ${file}`);
 if (!isError) {
  assert(html.includes(`property="og:url" content="${origin}${pathname}"`), `Open Graph URL: ${file}`);
  urls.add(pathname);
 }
 for (const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
  const address = match[1].replaceAll('&amp;', '&');
  if (address.startsWith('/') && !address.startsWith('//')) urls.add(address.split('#')[0]);
 }
}
// Fetch the actual files and every local HTML-linked asset, not only metadata.
const addressList = [...urls];
for (let offset = 0; offset < addressList.length; offset += 10) {
 await Promise.all(addressList.slice(offset, offset + 10).map(async pathname => {
  const response = await fetch(preview + pathname, { method: 'HEAD' });
  assert.equal(response.status, 200, `HTTP ${pathname}`);
 }));
}
const missing = await fetch(`${preview}/this-page-does-not-exist/`);
assert.equal(missing.status, 404);
assert((await missing.text()).includes('Let’s get you back.'));
const homepage = await (await fetch(preview + '/')).text();
const projectRoutes = [...homepage.matchAll(/<a[^>]*class="preview-link"[^>]*href="([^"]+)"/g)].map(match => match[1]);
assert.equal(projectRoutes.length, 6);
assert.equal(new Set(projectRoutes).size, 6);
assert(homepage.includes('Chief Software Developer') && homepage.includes('Federal Housing Corporation') && homepage.includes('Present'));
assert(homepage.includes('href="https://wa.me/251938487879"'));
assert(homepage.includes('href="https://t.me/birukwn"'));
assert.equal((homepage.match(/>Hire me on LinkedIn</g) ?? []).length, 2);
assert.equal((homepage.match(/>Download Resume</g) ?? []).length, 2);
assert.equal((homepage.match(/download="Biruk_Wonduwosen_Resume.pdf"/g) ?? []).length, 2);
const resumeResponse = await fetch(preview + '/documents/Biruk_Wonduwosen_Resume.pdf');
assert.equal(resumeResponse.status, 200);
assert(resumeResponse.headers.get('content-type')?.includes('application/pdf'));
assert.equal(Buffer.from(await resumeResponse.arrayBuffer()).subarray(0,5).toString(), '%PDF-');
const sitemap = await (await fetch(preview + '/sitemap.xml')).text();
assert.equal((sitemap.match(/<loc>/g) ?? []).length, 7);
for (const route of ['/', ...projectRoutes]) assert(sitemap.includes(`${origin}${route}</loc>`));
const robots = await (await fetch(preview + '/robots.txt')).text();
assert(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
const pdfResponse = await fetch(preview + '/documents/fhc-hr-payroll-implementation.pdf');
assert(pdfResponse.headers.get('content-type')?.includes('application/pdf'));
const report = { origin, pages: 7, projects: projectRoutes, exportedFiles: files.length, checkedLocalUrls: urls.size, canonicalAndSocialMetadata: 'passed', sitemapAndRobots: 'passed', missingRouteStatus: 404, imagesAndPdf: 'passed', disallowedFilesAndLocalContentUrls: 'none', checkedAt: new Date().toISOString() };
await writeFile('qa/production-validation.json', JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));


