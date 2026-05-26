import { cn } from "@/lib/cn";

type SceneForegroundProps = {
  children: React.ReactNode;
  className?: string;
};

export function SceneForeground({ children, className }: SceneForegroundProps) {
  return (
    <div
      className={cn(
        `
        relative
        z-30

        flex
        min-h-screen
        items-center

        py-24
        md:py-32
        xl:py-40
      `,
        className,
      )}
    >
      {children}
    </div>
  );
}
