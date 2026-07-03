"use client";

import { Globe } from "lucide-react";
import { useI18n } from "@/components/language-provider";

export function LangToggle() {
  const { locale, toggle, t } = useI18n();
  return (
    <button
      type="button"
      aria-label={t.langToggle}
      title={t.langToggle}
      onClick={toggle}
      className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-surface/50 px-3 text-sm font-semibold text-text backdrop-blur transition-colors hover:border-primary hover:text-primary"
    >
      <Globe size={16} />
      {locale === "en" ? "ES" : "EN"}
    </button>
  );
}
