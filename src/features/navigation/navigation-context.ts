import { createContext } from "react";

export type NavigationContextType = {
  isCompact: boolean;
};

export const NavigationContext = createContext<NavigationContextType | null>(
  null,
);
