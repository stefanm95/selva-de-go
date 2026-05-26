import { cn } from "@/lib/cn";

type SceneGridProps = {
  children: React.ReactNode;
  className?: string;
};

export function SceneGrid({ children, className }: SceneGridProps) {
  return (
    <div
      className={cn(
        `
          grid
          min-h-screen

          grid-cols-1
          xl:grid-cols-12

          items-center
        `,
        className,
      )}
    >
      {children}
    </div>
  );
}
