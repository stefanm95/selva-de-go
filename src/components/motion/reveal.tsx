import { motion } from "framer-motion";
import { type ReactNode } from "react";

import { cn } from "@/lib/cn";

import { transitions } from "./transitions";
import { viewport } from "./viewport";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const container = {
  initial: {},

  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0,
    },
  },
};

const item = {
  initial: {
    opacity: 0,
    y: 36,
  },

  animate: {
    opacity: 1,
    y: 0,
  },
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={container}
      initial="initial"
      whileInView="animate"
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
            variants={item}
            transition={transitions.smooth}
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={item} transition={transitions.smooth}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
