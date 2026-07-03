import sharp from "sharp";
import { mkdirSync } from "fs";

const SRC = "../CONTENIDO";
const OUT = ".cal";
mkdirSync(OUT, { recursive: true });

// Candidate 4:3 landscape crops (2000x2000 space) that should reveal faces.
const cand = {
  "step-1": { src: "HOJA 3.jpg", left: 120, top: 640, width: 720, height: 540 },
  "step-2": { src: "HOJA 4.jpg", left: 120, top: 500, width: 720, height: 540 },
  "step-3": { src: "HOJA 5.jpg", left: 120, top: 640, width: 720, height: 540 },
};

for (const [name, c] of Object.entries(cand)) {
  await sharp(`${SRC}/${c.src}`)
    .extract({ left: c.left, top: c.top, width: c.width, height: c.height })
    .resize({ width: 640 })
    .png()
    .toFile(`${OUT}/${name}.png`);
  console.log("wrote", name);
}
