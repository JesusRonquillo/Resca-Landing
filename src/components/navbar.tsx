"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Heart, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LangToggle } from "@/components/ui/lang-toggle";
import { clsx } from "@/lib/clsx";
import { EASE } from "@/lib/motion";
import { site } from "@/lib/site";
import { useI18n } from "@/components/language-provider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const links = [
    { href: "#mission", label: t.nav.mission },
    { href: "#cycle", label: t.nav.cycle },
    { href: "#voices", label: t.nav.voices },
    { href: "#donate", label: t.nav.donate },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <m.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className={clsx(
          "container-x mt-3 flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300",
          scrolled ? "glass shadow-[0_10px_30px_-18px_rgba(0,0,0,0.5)]" : "bg-transparent"
        )}
      >
        <a href="#" aria-label="RESCA home" className="shrink-0">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-2 hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <a
            href={site.donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-contrast shadow-[0_12px_30px_-12px_var(--glow)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <Heart size={16} className="fill-current" />
            {t.nav.donateCta}
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/50 text-text md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </m.nav>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="container-x md:hidden"
          >
            <div className="glass mt-2 flex flex-col gap-1 rounded-3xl p-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 font-medium text-text hover:bg-surface-2 hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={site.donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 font-semibold text-primary-contrast"
              >
                <Heart size={16} className="fill-current" /> {t.nav.donateNow}
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
