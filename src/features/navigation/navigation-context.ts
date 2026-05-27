import { createContext } from "react";

export type NavigationContextType = {
  isCompact: boolean;
  scrollY: number;
};

export const NavigationContext = createContext<NavigationContextType | null>(
  null,
);
