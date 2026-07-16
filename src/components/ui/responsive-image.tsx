import { clsx } from "@/lib/clsx";

// Bump when the optimized image contents change (same filenames are cached
// immutably by the browser, so a version query busts stale copies).
const ASSET_VERSION = "5";

type Props = {
  name: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  widths?: number[];
};

/**
 * Renders our pre-optimized assets from /public/images using a <picture>
 * element with AVIF + WebP sources. Assets follow the `${name}-${width}.${ext}`
 * convention produced by scripts/optimize-images.mjs.
 */
export function ResponsiveImage({
  name,
  alt,
  className,
  sizes = "100vw",
  priority = false,
  widths = [480, 960, 1600],
}: Props) {
  const srcset = (ext: string) =>
    widths
      .map((w) => `/images/${name}-${w}.${ext}?v=${ASSET_VERSION} ${w}w`)
      .join(", ");

  return (
    <picture>
      <source type="image/avif" srcSet={srcset("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcset("webp")} sizes={sizes} />
      <img
        src={`/images/${name}-${widths[widths.length - 1]}.webp?v=${ASSET_VERSION}`}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={clsx("h-full w-full object-cover", className)}
      />
    </picture>
  );
}
