import sharp from "sharp";
import { writeFileSync, readFileSync } from "fs";

const SVG = "public/icon.svg";
const svg = readFileSync(SVG);

async function png(size) {
  return sharp(svg, { density: 384 }).resize(size, size).png().toBuffer();
}

// Raster PNG variants used by browsers / PWAs / iOS.
const jobs = [
  ["public/favicon-32.png", 32],
  ["public/icon-192.png", 192],
  ["public/icon-512.png", 512],
  ["public/apple-icon.png", 180],
  ["public/icon-preview.png", 256],
];
for (const [path, size] of jobs) {
  writeFileSync(path, await png(size));
  console.log("wrote", path, size);
}

// Build a multi-size favicon.ico containing PNG-encoded images (widely supported).
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map((s) => png(s)));
const count = images.length;
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(count, 4);

const dir = Buffer.alloc(16 * count);
let offset = 6 + 16 * count;
images.forEach((buf, i) => {
  const s = sizes[i];
  const b = dir.subarray(i * 16, i * 16 + 16);
  b.writeUInt8(s >= 256 ? 0 : s, 0); // width
  b.writeUInt8(s >= 256 ? 0 : s, 1); // height
  b.writeUInt8(0, 2); // palette
  b.writeUInt8(0, 3); // reserved
  b.writeUInt16LE(1, 4); // planes
  b.writeUInt16LE(32, 6); // bpp
  b.writeUInt32LE(buf.length, 8); // size
  b.writeUInt32LE(offset, 12); // offset
  offset += buf.length;
});

const ico = Buffer.concat([header, dir, ...images]);
writeFileSync("public/favicon.ico", ico);
console.log("wrote public/favicon.ico", ico.length, "bytes");
