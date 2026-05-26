import { cn } from "@/lib/cn";

import { AmbientLight } from "./ambient-light";
import { BackgroundGradient } from "./background-gradient";
import { FilmGrain } from "./film-grain";
import { OrganicShapes } from "./organic-shapes";
import { SpatialGrid } from "./spatial-grid";

type SceneBackgroundProps = {
  className?: string;
};

export function SceneBackground({ className }: SceneBackgroundProps) {
  return (
    <div
      className={cn(
        `
        absolute
        inset-0

        overflow-hidden

        pointer-events-none
      `,
        className,
      )}
      aria-hidden='true'
    >
      {/* BASE PAPER */}
      <div
        className='
          absolute
          inset-0

          opacity-[0.18]
          mix-blend-multiply
        '
        style={{
          backgroundImage: "url('/images/wrm-paper/basic-paper.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* BASE ATMOSPHERE */}
      <BackgroundGradient />

      {/* SPATIAL DEPTH */}
      <SpatialGrid />

      {/* ORGANIC FORMS */}
      <OrganicShapes />

      {/* LIGHTING */}
      <AmbientLight />

      {/* LIGHT LEAKS */}
      <div
        className='
          absolute
          inset-0

          opacity-[0.18]
          mix-blend-screen
        '
        style={{
          backgroundImage: "url('/images/light-leaks/model-light-leaks.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* SCREEN PRINT */}
      <div
        className='
          absolute
          inset-0

          opacity-[0.05]
          mix-blend-multiply
        '
        style={{
          backgroundImage: "url('/images/screen-print/tactile-ink.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* FILM GRAIN */}
      <FilmGrain />

      {/* EXTRA GRAIN */}
      <div
        className='
          absolute
          inset-0

          opacity-[0.04]
          mix-blend-overlay
        '
        style={{
          backgroundImage: "url('/images/film-grain/analog-noise-soft.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* VIGNETTE */}
      <div
        className='
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.12)_100%)]
        '
      />
    </div>
  );
}
