const sharp = require("sharp");
const path = require("path");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#25364D"/>
<text x="80" y="108" font-family="Arial,sans-serif" font-size="22" fill="#DAE7F3">EL MEHDI ESSAADI</text>
<text x="80" y="278" font-family="Arial,sans-serif" font-size="76" font-weight="bold" fill="#FFFFFF">Frontend</text>
<text x="80" y="368" font-family="Arial,sans-serif" font-size="76" font-weight="bold" fill="#DAE7F3">engineering.</text>
<text x="83" y="452" font-family="Arial,sans-serif" font-size="28" fill="#DAE7F3">React · Next.js · TypeScript</text>
<path d="M860 164h245v300H860z" fill="none" stroke="#53657B" stroke-width="2"/>
<path d="M888 208h189M888 280h110M888 310h165M888 340h150" stroke="#53657B" stroke-width="3"/>
<rect x="888" y="383" width="114" height="39" rx="5" fill="#DAE7F3"/>
<path d="M80 536h1020" stroke="#53657B"/>
<text x="80" y="580" font-family="Arial,sans-serif" font-size="18" fill="#DAE7F3">mehdiessaadi.com</text>
</svg>`;
sharp(Buffer.from(svg))
  .png()
  .toFile(path.join(__dirname, "../static/images/social-cover.png"))
  .then(() => console.log("Social cover generated."));
