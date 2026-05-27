import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { transitions } from "./transitions";

type CinematicProps = {
  children: ReactNode;
  delay?: number;
};

export function Cinematic({ children, delay = 0 }: CinematicProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        ...transitions.slow,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
