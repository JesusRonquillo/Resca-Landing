"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/components/language-provider";

const VIDEO_ID = "tIeTrmt5w5M";

export function VideoSection() {
  const { t } = useI18n();
  const [play, setPlay] = useState(false);

  return (
    <section id="video" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              {t.video.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight tracking-tight text-text">
              {t.video.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-muted">{t.video.subtitle}</p>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mx-auto mt-12 max-w-4xl">
          <div className="card-surface overflow-hidden rounded-[2rem] p-2">
            <div className="relative aspect-video overflow-hidden rounded-[1.6rem] bg-black">
              {play ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                  title={t.video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlay(true)}
                  aria-label={t.video.watch}
                  className="group absolute inset-0 h-full w-full"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                    alt=""
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;
                    }}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/10" />
                  <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-contrast shadow-[0_18px_40px_-12px_var(--glow)] transition-transform duration-300 group-hover:scale-110">
                    <Play size={30} className="ml-1 fill-current" />
                  </span>
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
