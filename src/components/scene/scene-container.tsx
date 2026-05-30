import { cn } from "@/lib/cn";

type SceneContainerProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "warm" | "cool" | "neutral";
  density?: "light" | "medium" | "dense";
  depth?: "near" | "medium" | "far";
};

const toneClasses: Record<NonNullable<SceneContainerProps["tone"]>, string> = {
  warm: "text-[#21170f]",
  cool: "text-[#2e2d31]",
  neutral: "text-[#1f1a17]",
};

const densityClasses: Record<
  NonNullable<SceneContainerProps["density"]>,
  string
> = {
  light: "space-y-10",
  medium: "space-y-16",
  dense: "space-y-24",
};

const depthClasses: Record<
  NonNullable<SceneContainerProps["depth"]>,
  string
> = {
  near: "max-w-[1480px]",
  medium: "max-w-[1720px]",
  far: "max-w-[1920px]",
};

export function SceneContainer({
  children,
  className,
  tone = "neutral",
  density = "medium",
  depth = "medium",
}: SceneContainerProps) {
  return (
    <div
      className={cn(
        `
          relative
          z-20

          mx-auto

          w-full
          px-6
          md:px-10
          xl:px-16
        `,
        toneClasses[tone],
        densityClasses[density],
        depthClasses[depth],
        className,
      )}
    >
      {children}
    </div>
  );
}
