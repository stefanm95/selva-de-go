import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;

  speed?: number;

  direction?: "up" | "down";
};

export function Parallax({
  children,
  className,
  speed = 0.12,
  direction = "up",
}: ParallaxProps) {
  const { scrollY } = useScroll();

  const distance = direction === "up" ? -200 * speed : 200 * speed;

  const y = useTransform(scrollY, [0, 2000], [0, distance]);

  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
