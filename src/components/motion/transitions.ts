import type { Transition } from "framer-motion";
import { easing } from "./easing";

export const transitions: Record<string, Transition> = {
  smooth: {
    duration: 1,
    ease: easing.cinematic,
  },

  slow: {
    duration: 1.6,
    ease: easing.cinematic,
  },

  fast: {
    duration: 0.55,
    ease: easing.cinematic,
  },

  float: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  },

  atmospheric: {
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  },

  editorial: {
    duration: 1.4,
    ease: easing.editorial,
  },

  soft: {
    duration: 0.9,
    ease: easing.soft,
  },
};
