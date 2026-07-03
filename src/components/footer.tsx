"use client";

import { Heart, Mail } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { site } from "@/lib/site";
import { useI18n } from "@/components/language-provider";

export function Footer() {
  const { t } = useI18n();
  const nav = [
    { href: "#mission", label: t.nav.mission },
    { href: "#cycle", label: t.nav.cycle },
    { href: "#voices", label: t.nav.voices },
    { href: "#donate", label: t.nav.donate },
  ];

  return (
    <footer className="relative mt-8 border-t border-border bg-surface-2/50">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">{t.footer.tagline}</p>
            <a
              href={site.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-contrast"
            >
              <Heart size={16} className="fill-current" /> {t.footer.support}
            </a>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-text">
              {t.footer.explore}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-text">
              {t.footer.getInTouch}
            </h3>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
            >
              <Mail size={16} /> {site.email}
            </a>
            <p className="mt-4 text-sm text-muted">{t.footer.working}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. {t.footer.rights}
          </p>
          <p className="inline-flex items-center gap-1.5">
            {t.footer.madePre} <Heart size={14} className="fill-primary text-primary" />{" "}
            {t.footer.madePost}
          </p>
        </div>
      </div>
    </footer>
  );
}
