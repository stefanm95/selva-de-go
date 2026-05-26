import { type ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/cn";

import { fadeUp } from "./presets";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  once = true,
}: FadeInProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={fadeUp.initial}
      whileInView={fadeUp.animate}
      viewport={{
        once,
        amount: 0.2,
      }}
      transition={{
        ...fadeUp.transition,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
