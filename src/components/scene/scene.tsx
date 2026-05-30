import { cn } from "@/lib/cn";

type SceneProps = {
  children: React.ReactNode;
  className?: string;
  id: string;
};

export function Scene({ children, className, id }: SceneProps) {
  return (
    <section
      id={id}
      className={cn(
        `
          relative
          isolate

          overflow-hidden

          min-h-screen
          w-full
        `,
        className,
      )}
    >
      {children}
    </section>
  );
}
