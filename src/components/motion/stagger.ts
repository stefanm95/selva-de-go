import { fadeUp } from "./presets";

export const stagger = {
  default: {
    staggerChildren: 0.12,
    delayChildren: 0,
  },

  fast: {
    staggerChildren: 0.08,
    delayChildren: 0,
  },

  cinematic: {
    staggerChildren: 0.18,
    delayChildren: 0.08,
  },

  dramatic: {
    staggerChildren: 0.24,
    delayChildren: 0.12,
  },
};

export const staggerContainer = {
  hidden: {},

  show: {
    transition: stagger.cinematic,
  },
};

export const staggerFast = {
  hidden: {},

  show: {
    transition: stagger.fast,
  },
};

export const staggerDramatic = {
  hidden: {},

  show: {
    transition: stagger.dramatic,
  },
};

export const staggerItem = {
  hidden: fadeUp.initial,

  show: fadeUp.animate,
};
