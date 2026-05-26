import { cn } from "@/lib/cn";

type SceneLayerProps = {
  children: React.ReactNode;
  className?: string;

  depth?: "background" | "atmosphere" | "content" | "foreground";
};

const depthMap = {
  background: "z-0",
  atmosphere: "z-10",
  content: "z-20",
  foreground: "z-30",
};

export function SceneLayer({
  children,
  className,
  depth = "content",
}: SceneLayerProps) {
  return (
    <div
      className={cn(
        `
        absolute
        inset-0

        pointer-events-none
      `,
        depthMap[depth],
        className,
      )}
    >
      {children}
    </div>
  );
}
