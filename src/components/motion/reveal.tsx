import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

import { cn } from "@/lib/cn";

import { staggerContainer, staggerItem } from "./stagger";
import { transitions } from "./transitions";
import { viewport } from "./viewport";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;

  variants?: Variants;
  itemVariants?: Variants;
};

export function Reveal({
  children,
  className,
  delay = 0,
  variants = staggerContainer,
  itemVariants = staggerItem,
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport.cinematic}
      transition={{
        ...transitions.smooth,
        delay,
      }}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={transitions.smooth}
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants} transition={transitions.smooth}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
