"use client";

import { clsx } from "@/lib/clsx";
import { useI18n } from "@/components/language-provider";

export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  const { t } = useI18n();
  return (
    <span className={clsx("flex items-center gap-2.5", className)}>
      <img
        src="/images/logo-mark-320.webp"
        alt=""
        aria-hidden
        width={44}
        height={40}
        className="h-9 w-auto drop-shadow-sm sm:h-10"
      />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-xl font-extrabold tracking-tight text-text">
            RESCA
          </span>
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.14em] text-muted">
            {t.logoSubtitle}
          </span>
        </span>
      )}
    </span>
  );
}
