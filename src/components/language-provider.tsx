"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  defaultLocale,
  detectLocale,
  messages,
  type Locale,
} from "@/lib/i18n";

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  t: (typeof messages)[Locale];
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Start from the default so server and first client render match, then
  // resolve the real locale on the client to avoid hydration mismatches.
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    let next: Locale | null = null;
    try {
      const stored = localStorage.getItem("lang");
      if (stored === "en" || stored === "es") next = stored;
    } catch {}
    if (!next) {
      next = detectLocale(
        typeof navigator !== "undefined" ? navigator.language : ""
      );
    }
    // Client-only resolution after mount; intentional one-time sync.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocaleState(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  }, []);

  const toggle = useCallback(
    () => setLocale(locale === "en" ? "es" : "en"),
    [locale, setLocale]
  );

  return (
    <I18nContext.Provider
      value={{ locale, setLocale, toggle, t: messages[locale] }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
