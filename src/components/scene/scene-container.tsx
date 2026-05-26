import { cn } from "@/lib/cn";

type SceneContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function SceneContainer({ children, className }: SceneContainerProps) {
  return (
    <div
      className={cn(
        `
          relative
          z-20

          mx-auto

          w-full
          max-w-[1720px]

          px-6
          md:px-10
          xl:px-16
        `,
        className,
      )}
    >
      {children}
    </div>
  );
}
