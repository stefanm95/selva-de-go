"use client";

import { type MouseEvent, type ReactNode, useRef } from "react";

import { motion, useMotionValue, useSpring } from "framer-motion";

import { cn } from "@/lib/cn";

type MagneticProps = {
  children: ReactNode;
  className?: string;

  strength?: number;
};

export function Magnetic({
  children,
  className,
  strength = 24,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 18,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 18,
  });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const element = ref.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const offsetX = mouseX - width / 2;
    const offsetY = mouseY - height / 2;

    x.set((offsetX / width) * strength);
    y.set((offsetY / height) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
