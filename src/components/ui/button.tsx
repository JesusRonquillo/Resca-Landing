import type { AnchorHTMLAttributes, ReactNode } from "react";
import { clsx } from "@/lib/clsx";

type Variant = "primary" | "ghost" | "outline";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-bg px-6 py-3 text-[0.95rem]";

const variants: Record<Variant, string> = {
  primary:
    "btn-shine bg-primary text-primary-contrast shadow-[0_12px_30px_-10px_var(--glow)] hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-12px_var(--glow)]",
  outline:
    "border border-border bg-surface/40 text-text hover:border-primary hover:text-primary backdrop-blur",
  ghost: "text-text/80 hover:text-primary",
};

export function Button({ variant = "primary", className, children, ...props }: Props) {
  return (
    <a className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
