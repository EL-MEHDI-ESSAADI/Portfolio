// Verify the generated site without depending on a running browser or server.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const root = path.resolve(__dirname, "..");
const output = path.join(root, "public");
const profile = require("../src/data/profile.json");
const pages = [
  { route: "/", file: "index.html" },
  { route: "/work/fifa-world-cup/", file: "work/fifa-world-cup/index.html" },
  { route: "/404/", file: "404/index.html" },
];
function targetFile(url) {
  const route = decodeURIComponent(url.pathname).replace(/^\//, "");
  let target = path.join(output, route);
  if (fs.existsSync(target) && fs.statSync(target).isDirectory())
    target = path.join(target, "index.html");
  return target;
}
let links = 0;
for (const page of pages) {
  const html = fs.readFileSync(path.join(output, page.file), "utf8");
  assert.doesNotMatch(
    html,
    /Casablanca|Morocco/i,
    `${page.route}: personal city and country are omitted`,
  );
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `${page.route}: one primary heading`,
  );
  assert.match(
    html,
    /<html[^>]*lang="en"/,
    `${page.route}: English language attribute`,
  );
  assert.match(html, /id="main"/, `${page.route}: skip link target`);
  assert.ok(
    html.includes(`href="${profile.siteUrl}${page.route}"`),
    `${page.route}: canonical URL`,
  );
  assert.ok(
    html.includes(`${profile.siteUrl}/images/social-cover.png`),
    `${page.route}: absolute social image`,
  );
  assert.match(
    html,
    /application\/ld\+json/,
    `${page.route}: structured identity data`,
  );
  const images = [...html.matchAll(/<img\s[^>]*>/g)].map((m) => m[0]);
  images.forEach((tag) =>
    assert.match(tag, /alt="/, `${page.route}: image alt attribute`),
  );
  for (const match of html.matchAll(/(?:href|src)="([^"<>]+)"/g)) {
    const value = match[1].replace(/&amp;/g, "&");
    if (/^(?:https?:|data:|mailto:|tel:)/.test(value)) continue;
    const url = new URL(value, `https://portfolio.local${page.route}`);
    const file = targetFile(url);
    assert.ok(
      fs.existsSync(file),
      `Missing internal destination: ${page.route} -> ${value}`,
    );
    if (url.hash && file.endsWith(".html")) {
      const linkedHtml = fs.readFileSync(file, "utf8");
      const id = decodeURIComponent(url.hash.substring(1));
      assert.ok(
        linkedHtml.includes(`id="${id}"`),
        `Missing fragment: ${value}`,
      );
    }
    links++;
  }
  if (page.route === "/") {
    for (const name of [
      "Overseas Network",
      "Fanatrips",
      "Overseas Express",
      "Claude Code",
      "OpenAI Codex",
      "ChatGPT",
      "Amazon Web Services",
      "FtFt",
    ]) {
      assert.ok(
        html.includes(name),
        `Missing current profile content: ${name}`,
      );
    }
  }
  if (page.route.includes("fifa"))
    assert.ok(
      html.includes("sample data") &&
        html.includes("Displayed rates and availability are illustrative."),
      "Case study has sample data disclosure",
    );
}
const styles = fs.readFileSync(
  path.join(root, "src/globalStyles/portfolio.css"),
  "utf8",
);
for (const match of styles.matchAll(/url\("(\/fonts\/[^\"]+)"\)/g)) {
  assert.ok(
    fs.existsSync(path.join(output, match[1])),
    `Missing local typeface: ${match[1]}`,
  );
}
const resume = fs.readFileSync(
  path.join(root, "static/documents/el-mehdi-essaadi-resume.pdf"),
);
assert.ok(resume.subarray(0, 5).toString() === "%PDF-", "Résumé is a PDF");
function hash(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}
assert.equal(
  hash(resume),
  hash(
    fs.readFileSync(path.join(output, "documents/el-mehdi-essaadi-resume.pdf")),
  ),
  "Built résumé matches latest source",
);
assert.equal(
  hash(resume),
  hash(fs.readFileSync(path.join(root, "src/assets/documents/resume.pdf"))),
  "Existing résumé source path is current",
);
const social = fs.readFileSync(path.join(output, "images/social-cover.png"));
assert.equal(social.readUInt32BE(16), 1200, "Social cover width");
assert.equal(social.readUInt32BE(20), 630, "Social cover height");
assert.ok(fs.existsSync(path.join(output, "sitemap.xml")), "Sitemap present");
assert.ok(
  fs.existsSync(path.join(output, "robots.txt")),
  "Robots file present",
);
console.log(
  `Verified ${pages.length} pages, ${links} internal destinations, metadata, profile content, image alt text and current résumé downloads.`,
);
