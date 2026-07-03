// Image sources for the RESCA landing page.
//
// - Hero, mission close-up and the last two cycle steps (Monitoring, Reward
//   Ceremony) use high-quality AI-generated Andean imagery, since the original
//   step-4 photo was from Africa and step-5 was low quality.
// - The first three cycle steps and all farmer testimonials keep the REAL
//   documentary photos, cropped 4:3 / portrait so people's faces stay visible.

// Full-frame AI images (paths relative to the web/ directory).
export const aiImages = {
  "hero-field": "ai-src/hero-field.png",
  "quinoa-close": "ai-src/quinoa-close.png",
  "step-3": "ai-src/step-3.png",
  "step-4": "ai-src/step-4.png",
  "step-5": "ai-src/step-5.png",
};

// Real photos cropped from the 2000x2000 designed social cards.
// step-1..3 are 4:3 landscape crops framed on the subject / faces.
export const crops = {
  "step-1": { src: "HOJA 3.jpg", left: 120, top: 640, width: 720, height: 540 },
  "step-2": { src: "HOJA 4.jpg", left: 120, top: 500, width: 720, height: 540 },
  "t-santusa": { src: "HOJA 8.jpg", left: 1000, top: 360, width: 875, height: 1340 },
  "t-carlos": { src: "HOJA 9.jpg", left: 215, top: 350, width: 745, height: 1370 },
  "t-marcelino": { src: "HOJA 10.jpg", left: 1005, top: 360, width: 828, height: 1340 },
  "t-genaro": { src: "HOJA 11.jpg", left: 215, top: 350, width: 745, height: 1370 },
  "t-martin": { src: "HOJA 12.jpg", left: 1000, top: 360, width: 875, height: 1370 },
};
