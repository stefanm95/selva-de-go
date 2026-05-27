import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  offset?: number;
};

export function Parallax({ children, offset = 100 }: ParallaxProps) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 2000], [0, offset]);

  return <motion.div style={{ y }}>{children}</motion.div>;
}
