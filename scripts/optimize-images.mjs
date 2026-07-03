import sharp from "sharp";
import { mkdirSync, statSync } from "fs";
import { crops, aiImages } from "./crops.mjs";

const SRC = "../CONTENIDO";
const LOGOS = "../LOGOS";
const OUT = "public/images";
mkdirSync(OUT, { recursive: true });

// Responsive widths for photographic content.
const PHOTO_WIDTHS = [480, 960, 1600];
let totalOut = 0;
const kb = (p) => (statSync(p).size / 1024).toFixed(1) + "kb";

async function emit(pipeline, base, widths) {
  for (const w of widths) {
    const avif = `${OUT}/${base}-${w}.avif`;
    const webp = `${OUT}/${base}-${w}.webp`;
    await pipeline.clone().resize({ width: w }).avif({ quality: 62, effort: 3 }).toFile(avif);
    await pipeline.clone().resize({ width: w }).webp({ quality: 82 }).toFile(webp);
    console.log(`  ${base}-${w}  avif ${kb(avif)}  webp ${kb(webp)}`);
    totalOut += statSync(avif).size + statSync(webp).size;
  }
}

// 1) AI-generated hero / mission / cycle images (full frame, high quality).
for (const [name, file] of Object.entries(aiImages)) {
  const pipe = sharp(file);
  await emit(pipe, name, PHOTO_WIDTHS);
}

// 2) Real testimonial portraits cropped from the designed cards.
for (const [name, c] of Object.entries(crops)) {
  const pipe = sharp(`${SRC}/${c.src}`).extract({
    left: c.left,
    top: c.top,
    width: c.width,
    height: c.height,
  });
  await emit(pipe, name, PHOTO_WIDTHS);
}

// 3) Logos (transparent PNG -> alpha webp/png at 2 sizes).
const logoJobs = [
  { file: "LOGO RESCA TRANSPARENTE PNG.png", base: "logo", widths: [320, 640] },
  { file: "LOGO RESCA TRANSPARENTE NEGATIVO PNG.png", base: "logo-mark", widths: [320, 640] },
];
for (const j of logoJobs) {
  for (const w of j.widths) {
    const webp = `${OUT}/${j.base}-${w}.webp`;
    const png = `${OUT}/${j.base}-${w}.png`;
    await sharp(`${LOGOS}/${j.file}`).resize({ width: w }).webp({ quality: 90 }).toFile(webp);
    await sharp(`${LOGOS}/${j.file}`).resize({ width: w }).png({ compressionLevel: 9 }).toFile(png);
    console.log(`  ${j.base}-${w}  webp ${kb(webp)}  png ${kb(png)}`);
    totalOut += statSync(webp).size + statSync(png).size;
  }
}

// 4) Social / OG share image (1200x630) built from the AI hero + cover crop.
const heroBuf = await sharp(aiImages["hero-field"])
  .resize({ width: 1200, height: 630, fit: "cover", position: "center" })
  .toBuffer();
await sharp(heroBuf).jpeg({ quality: 84 }).toFile(`${OUT}/og.jpg`);
console.log(`  og.jpg  ${kb(`${OUT}/og.jpg`)}`);

console.log(`\nTotal optimized output: ${(totalOut / 1024 / 1024).toFixed(2)} MB`);
