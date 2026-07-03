import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#140510",
    theme_color: "#c2168a",
    icons: [
      { src: "/images/logo-mark-320.png", sizes: "320x290", type: "image/png" },
      { src: "/images/logo-mark-640.png", sizes: "640x581", type: "image/png" },
    ],
  };
}
