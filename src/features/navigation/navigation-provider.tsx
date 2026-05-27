"use client";

import { useEffect, useMemo, useState } from "react";

import { NavigationContext } from "./navigation-context";

type NavigationProviderProps = {
  children: React.ReactNode;
};

const COMPACT_THRESHOLD = 720;

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const value = useMemo(
    () => ({
      scrollY,
      isCompact: scrollY > COMPACT_THRESHOLD,
    }),
    [scrollY],
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}
