import { cn } from "@/lib/cn";

type SceneContainerProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "warm" | "cool" | "neutral";
  density?: "light" | "medium" | "dense";
  depth?: "near" | "medium" | "far";
  size?: "default" | "wide" | "full";
};

const toneClasses: Record<NonNullable<SceneContainerProps["tone"]>, string> = {
  warm: "text-[var(--text-warm)]",
  cool: "text-[var(--text-cool)]",
  neutral: "text-[var(--text-primary)]",
};

const sizeClasses: Record<NonNullable<SceneContainerProps["size"]>, string> = {
  default: "max-w-[1440px]",
  wide: "max-w-[1600px]",
  full: "max-w-none",
};

export function SceneContainer({
  children,
  className,
  tone = "neutral",
  size = "default",
}: SceneContainerProps) {
  return (
    <div
      className={cn(
        `
          relative
          z-20

          mx-auto

          w-full
          px-5
          sm:px-6
          md:px-10
          lg:px-12
          xl:px-16
          2xl:px-20
        `,
        toneClasses[tone],
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
