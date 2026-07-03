import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";

const URL = process.argv[2] || "http://localhost:3123/";
const OUT = ".shots";
mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome-stable",
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
});

async function shoot({ name, width, height, dark, lang, full = true, scrollWait = true }) {
  const page = await browser.newPage();
  await page.evaluateOnNewDocument(
    (t, l) => {
      try {
        localStorage.setItem("theme", t);
        if (l) localStorage.setItem("lang", l);
      } catch {}
    },
    dark ? "dark" : "light",
    lang || ""
  );
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: dark ? "dark" : "light" },
    { name: "prefers-reduced-motion", value: "reduce" },
  ]);
  await page.goto(URL, { waitUntil: "networkidle0" });
  const cls = await page.evaluate(() => document.documentElement.className);
  console.log(`  ${name} htmlClass="${cls}"`);

  if (scrollWait) {
    // Trigger whileInView reveals across the whole page, then settle.
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 600));
    });
  }

  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: full });
  console.log("shot", name);
  await page.close();
}

await shoot({ name: "desktop-dark", width: 1440, height: 900, dark: true, lang: "en" });
await shoot({ name: "desktop-es", width: 1440, height: 900, dark: false, lang: "es" });
await shoot({ name: "mobile-dark", width: 402, height: 850, dark: true, lang: "en" });
await shoot({ name: "mobile-es", width: 402, height: 850, dark: false, lang: "es" });

await browser.close();
