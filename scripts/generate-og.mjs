import sharp from "sharp";

/**
 * Generates the default OpenGraph image (public/og.png, 1200x630) from an
 * inline SVG so the asset is reproducible. Run: node scripts/generate-og.mjs
 */
const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#101116"/>
  <rect x="0" y="0" width="1200" height="4" fill="#e8a33d"/>
  <text x="96" y="180" font-family="monospace" font-size="28" fill="#e8a33d" letter-spacing="4">CHARAN.OS</text>
  <text x="96" y="290" font-family="sans-serif" font-size="64" font-weight="600" fill="#ededeb">I build operating systems</text>
  <text x="96" y="370" font-family="sans-serif" font-size="64" font-weight="600" fill="#ededeb">for intelligence.</text>
  <text x="96" y="470" font-family="sans-serif" font-size="28" fill="#9a9ba3">Charan Kotamraju — Product leader, enterprise AI</text>
  <text x="96" y="545" font-family="monospace" font-size="22" fill="#5c5d66">memory · orchestration · governance</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og.png");
process.stdout.write("public/og.png written\n");
