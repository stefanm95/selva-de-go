import { cn } from "@/lib/cn";

type SceneColumnProps = {
  children: React.ReactNode;
  className?: string;
};

export function SceneColumn({ children, className }: SceneColumnProps) {
  return (
    <div
      className={cn(
        `
          relative
          z-20
        `,
        className,
      )}
    >
      {children}
    </div>
  );
}
