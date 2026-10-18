// Runs after `vite build` and the SSR build. Renders every page in src/seo.ts to static HTML
// and injects it (plus page-specific <head> tags) into dist/, so the content is readable
// without JavaScript by search engines, social previews and AI tools.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dist = path.resolve("dist");
const serverEntry = path.resolve("dist-server/entry-server.js");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const { render, pages } = await import(pathToFileURL(serverEntry).href);

const escape = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const setTag = (html, pattern, replacement, label) => {
  if (!pattern.test(html)) throw new Error(`prerender: could not find ${label} in index.html`);
  return html.replace(pattern, replacement);
};

const setMeta = (html, attr, key, value) =>
  setTag(
    html,
    new RegExp(`<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*/?>`),
    `<meta ${attr}="${key}" content="${escape(value)}" />`,
    `meta ${key}`,
  );

for (const page of pages) {
  const appHtml = render(page.path);
  if (!appHtml || appHtml.length < 200) throw new Error(`prerender: empty render for ${page.path}`);

  let html = setTag(template, /<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`, "#root");
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${escape(page.title)}</title>`, "<title>");
  html = setTag(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${page.canonical}" />`,
    "canonical",
  );
  html = setMeta(html, "name", "description", page.description);
  html = setMeta(html, "name", "robots", page.robots);
  html = setMeta(html, "property", "og:url", page.canonical);
  html = setMeta(html, "property", "og:title", page.title);
  html = setMeta(html, "property", "og:description", page.description);
  html = setMeta(html, "name", "twitter:title", page.title);
  html = setMeta(html, "name", "twitter:description", page.description);

  fs.writeFileSync(path.join(dist, page.file), html);
  console.log(`prerendered ${page.path} -> dist/${page.file} (${(html.length / 1024).toFixed(1)} kB)`);
}

fs.rmSync(path.resolve("dist-server"), { recursive: true, force: true });
