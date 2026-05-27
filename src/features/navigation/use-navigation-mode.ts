"use client";

import { useContext } from "react";

import { NavigationContext } from "./navigation-context";

export function useNavigationMode() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("useNavigationMode must be used inside NavigationProvider");
  }

  return context;
}
