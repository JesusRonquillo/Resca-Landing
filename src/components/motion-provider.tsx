"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

// Loads only the DOM animation feature bundle (animations, exit, gestures,
// in-view) on demand, so the initial framer-motion payload stays small.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
