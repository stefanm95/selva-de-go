import { cn } from "@/lib/cn";

type SceneOrbProps = {
  className?: string;
};

export function SceneOrb({ className }: SceneOrbProps) {
  return (
    <div
      className={cn(
        `
          absolute

          rounded-full

          bg-[#f4d7b8]/30

          blur-[80px]
        `,
        className,
      )}
    />
  );
}
