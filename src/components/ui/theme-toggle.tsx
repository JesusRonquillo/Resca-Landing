"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Avoids hydration mismatch: theme is only known after mount.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-border bg-surface/50 text-text backdrop-blur transition-colors hover:border-primary hover:text-primary"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <m.span
            key={isDark ? "moon" : "sun"}
            initial={{ y: -18, opacity: 0, rotate: -30 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 18, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.25 }}
          >
            {isDark ? <Moon size={18} /> : <Sun size={18} />}
          </m.span>
        )}
      </AnimatePresence>
    </button>
  );
}
