"use client";

import { useEffect, useMemo, useState } from "react";

import { NavigationContext } from "./navigation-context";

type NavigationProviderProps = {
  children: React.ReactNode;
};

const COMPACT_THRESHOLD = 720;

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const compact = window.scrollY > COMPACT_THRESHOLD;

      setIsCompact((prev) => (prev === compact ? prev : compact));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const value = useMemo(() => ({ isCompact }), [isCompact]);

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}
