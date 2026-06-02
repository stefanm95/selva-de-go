import { cn } from "@/lib/cn";

type SceneColumnProps = {
  children: React.ReactNode;
  className?: string;
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
};

const spacingClasses: Record<NonNullable<SceneColumnProps["spacing"]>, string> =
  {
    none: "space-y-0",
    sm: "space-y-8 md:space-y-10",
    md: "space-y-12 md:space-y-16",
    lg: "space-y-16 md:space-y-20 xl:space-y-24",
    xl: "space-y-20 md:space-y-28 xl:space-y-32",
  };

export function SceneColumn({
  children,
  className,
  spacing = "md",
}: SceneColumnProps) {
  return (
    <div
      className={cn(
        `
          relative
          z-20
        `,
        spacingClasses[spacing],
        className,
      )}
    >
      {children}
    </div>
  );
}
