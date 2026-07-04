"use client";

import {
  m,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { clsx } from "@/lib/clsx";

type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

export function TiltCard({ children, className, intensity = 10 }: Props) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 200,
    damping: 18,
  });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 200,
    damping: 18,
  });

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <m.div
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className={clsx("will-change-transform", className)}
    >
      {children}
    </m.div>
  );
}
