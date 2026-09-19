import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import assert from 'node:assert/strict';
const pages = [['/', 'dist/index.html'], ['/privacy', 'dist/privacy/index.html'], ['/support', 'dist/support/index.html']];
const htmls = new Map(pages.map(([route, file]) => [route, readFileSync(file, 'utf8')]));
for (const [route, html] of htmls) {
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route}: one H1`);
  assert(html.includes(`https://vertabyte.tech${route}`), `${route}: canonical`);
  assert(html.includes('name="description"'), `${route}: description`);
  assert(html.includes('property="og:title"'), `${route}: Open Graph`);
  assert(html.includes('name="twitter:card"'), `${route}: social card`);
  assert(html.includes('mailto:info@vertabyte.tech'), `${route}: email`);
  assert(!/<script\b|<iframe\b|<form\b/.test(html), `${route}: no scripts, embeds or forms`);
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (!href.startsWith('/') && !href.startsWith('#')) continue;
    const [target, anchor] = href.split('#');
    const linkedHtml = htmls.get(target || route);
    if (anchor) assert(linkedHtml?.includes(`id="${anchor}"`), `${route}: missing anchor ${href}`);
    else if (!linkedHtml) assert(existsSync(`dist${target}`), `${route}: missing asset ${href}`);
  }
}
assert(existsSync('dist/robots.txt') && existsSync('dist/sitemap.xml'));
const walk = dir => readdirSync(dir).flatMap(name => statSync(`${dir}/${name}`).isDirectory() ? walk(`${dir}/${name}`) : [`${dir}/${name}`]);
const files = walk('dist');
assert(!files.some(f => /\.js$/.test(f)), 'No client JavaScript');
console.log(`Verified ${pages.length} pages, internal links, metadata, static assets and zero client JavaScript. Total output: ${files.reduce((n,f) => n + statSync(f).size, 0)} bytes.`);
