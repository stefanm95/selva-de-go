import { cn } from "@/lib/cn";

type SceneProps = {
  children: React.ReactNode;
  className?: string;
};

export function Scene({ children, className }: SceneProps) {
  return (
    <section
      className={cn(
        `
        relative
        isolate

        min-h-screen

        overflow-clip

        bg-[#f6eadf]

        contain-layout
      `,
        className,
      )}
    >
      {children}
    </section>
  );
}
