import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { transitions } from "./transitions";

type FloatProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

export function Float({ children, className, intensity = 12 }: FloatProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -intensity, 0],
        rotate: [-1, -1.5, -1],
      }}
      transition={transitions.float}
    >
      {children}
    </motion.div>
  );
}
