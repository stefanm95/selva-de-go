import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type WorldCameraProps = {
  children: ReactNode;
  className?: string;
};

export function WorldCamera({ children, className }: WorldCameraProps) {
  return (
    <div
      className={cn(
        `
          relative
          z-10
          transform-gpu
          will-change-transform
        `,
        className,
      )}
      style={{
        transform:
          "translate3d(0, calc(var(--world-scroll-progress) * -50px), 0) scale(calc(1 - var(--world-scroll-progress) * 0.015))",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}
