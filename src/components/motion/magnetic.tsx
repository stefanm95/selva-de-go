"use client";

import { type MouseEvent, type ReactNode, useRef } from "react";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { cn } from "@/lib/cn";

type MagneticProps = {
  children: ReactNode;
  className?: string;

  strength?: number;
  rotation?: number;
};

export function Magnetic({
  children,
  className,
  strength = 10,
  rotation = 2.5,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 90,
    damping: 22,
    mass: 0.6,
  });

  const y = useSpring(mouseY, {
    stiffness: 90,
    damping: 22,
    mass: 0.6,
  });

  const rotate = useTransform(
    mouseX,
    [-strength, strength],
    [-rotation, rotation],
  );

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const element = ref.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;

    const distanceX = event.clientX - centerX;
    const distanceY = event.clientY - centerY;

    mouseX.set((distanceX / width) * strength);
    mouseY.set((distanceY / height) * strength);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={{
        x,
        y,
        rotate,
        transformPerspective: 1200,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
