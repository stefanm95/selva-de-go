import { transitions } from "./transitions";

export const fadeUp = {
  initial: {
    opacity: 0,
    y: 40,
  },

  animate: {
    opacity: 1,
    y: 0,
  },

  transition: transitions.smooth,
};

export const softReveal = {
  initial: {
    opacity: 0,
    scale: 0.96,
  },

  animate: {
    opacity: 1,
    scale: 1,
  },

  transition: transitions.slow,
};

export const cinematicReveal = {
  initial: {
    opacity: 0,
    y: 80,
    scale: 0.92,
    filter: "blur(10px)",
  },

  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },

  transition: transitions.slow,
};

export const editorialSlide = {
  initial: {
    opacity: 0,
    x: -60,
  },

  animate: {
    opacity: 1,
    x: 0,
  },

  transition: transitions.smooth,
};

export const atmosphericFloat = {
  animate: {
    y: [0, -14, 0],
    rotate: [-1, -2, -1],
  },

  transition: transitions.float,
};
