import { cn } from "@/lib/cn";

type SceneBackgroundProps = {
  className?: string;
};

export function SceneBackground({ className }: SceneBackgroundProps) {
  return (
    <div
      className={cn(
        `
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        `,
        className,
      )}
    >
      {/* BASE PAPER */}
      <div className='absolute inset-0 bg-[#f5e7d7]' />

      {/* WARM TOP LIGHT */}
      <div
        className='
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top_left,rgba(255,220,170,0.55)_0%,transparent_42%)]
        '
      />

      {/* LARGE LEFT ORGANIC SHAPE */}
      <div
        className='
          absolute
          left-[-12%]
          bottom-[-8%]

          h-[48rem]
          w-[48rem]

          rounded-full

          bg-[#e2b87e]/20

          blur-[6px]
        '
      />

      {/* PAINT TEXTURE */}
      <div
        className='
          absolute
          inset-0

          opacity-[0.12]
          mix-blend-multiply
        '
        style={{
          backgroundImage:
            "url('/images/organic-paint/organic-olive-paint.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* PAPER TEXTURE */}
      <div
        className='
          absolute
          inset-0

          opacity-[0.1]
          mix-blend-multiply
        '
        style={{
          backgroundImage: "url('/images/wrm-paper/basic-paper.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* FILM GRAIN */}
      <div
        className='
          absolute
          inset-0

          opacity-[0.08]
          mix-blend-soft-light
        '
        style={{
          backgroundImage: "url('/images/film-grain/analog-noise-soft.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* GLOBAL ATMOSPHERIC HAZE */}
      <div
        className='
          absolute
          left-1/2
          top-1/2

          h-[36rem]
          w-[36rem]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-white/10

          blur-[120px]
        '
      />

      {/* VIGNETTE */}
      <div
        className='
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_55%,rgba(24,16,12,0.10)_100%)]
        '
      />
    </div>
  );
}
