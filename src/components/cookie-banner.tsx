"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { useI18n } from "@/components/language-provider";
import { EASE } from "@/lib/motion";

const STORAGE_KEY = "cookie-consent";

export function CookieBanner() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {}
    if (!stored) {
      // Client-only: only decide visibility after checking stored consent.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    }
  }, []);

  const decide = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {}
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label={t.cookies.title}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="glass mx-auto flex max-w-3xl flex-col gap-4 rounded-3xl p-5 shadow-2xl sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                <Cookie size={20} />
              </span>
              <div>
                <p className="font-display font-bold text-text">{t.cookies.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {t.cookies.body}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 gap-2.5">
              <button
                type="button"
                onClick={() => decide("declined")}
                className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-primary hover:text-primary"
              >
                {t.cookies.decline}
              </button>
              <button
                type="button"
                onClick={() => decide("accepted")}
                className="btn-shine rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-contrast transition-transform hover:-translate-y-0.5"
              >
                {t.cookies.accept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
