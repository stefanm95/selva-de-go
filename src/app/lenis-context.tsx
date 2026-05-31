import { createContext, useContext } from "react";

type LenisContextType = {
  scrollTo: (target: string | HTMLElement) => void;
  stop: () => void;
  start: () => void;
};

export const LenisContext = createContext<LenisContextType | null>(null);

export function useLenis() {
  const context = useContext(LenisContext);

  if (!context) {
    throw new Error("useLenis must be used inside LenisProvider");
  }

  return context;
}
