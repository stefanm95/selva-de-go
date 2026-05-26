import { cn } from "@/lib/cn";

type SceneContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function SceneContent({ children, className }: SceneContentProps) {
  return (
    <div
      className={cn(
        `
        relative
        z-20

        mx-auto
        w-full

        max-w-[1800px]

        px-6
        md:px-10
        xl:px-16
        2xl:px-24
      `,
        className,
      )}
    >
      {children}
    </div>
  );
}
