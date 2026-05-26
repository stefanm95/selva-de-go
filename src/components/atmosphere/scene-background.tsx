import { cn } from "@/lib/cn";

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
    >
      {/* BASE GRADIENT */}
      <div
        className='
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top_left,#f8efe4_0%,#f4e5d7_45%,#f1dcc9_100%)]
        '
      />

      {/* TOP WARM LIGHT */}
      <div
        className='
          absolute
          left-[-10%]
          top-[-20%]

          h-[50rem]
          w-[50rem]

          rounded-full

          bg-[#ffe1ba]/40

          blur-[120px]
        '
      />

      {/* RIGHT LIGHT */}
      <div
        className='
          absolute
          right-[-12%]
          top-[10%]

          h-[42rem]
          w-[42rem]

          rounded-full

          bg-[#ffb17a]/18

          blur-[120px]
        '
      />

      {/* CENTER FOG */}
      <div
        className='
          absolute
          left-1/2
          top-1/2

          h-[40rem]
          w-[40rem]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-white/18

          blur-[100px]
        '
      />

      {/* ANALOG SHAPE */}
      <div
        className='
          absolute
          left-[-6%]
          top-[18%]

          h-[24rem]
          w-[24rem]

          rounded-full

          border-[2px]
          border-[#7a3b45]/6

          bg-[#f8ead7]/50

          blur-[2px]
        '
      />

      {/* OFFSET ORGANIC SHAPE */}
      <div
        className='
          absolute
          bottom-[-8%]
          right-[8%]

          h-[28rem]
          w-[28rem]

          rounded-[42%]

          border
          border-[#7a3b45]/5

          bg-[#f6dfc8]/34

          blur-[4px]
        '
      />

      {/* CANVAS TEXTURE */}
      <div
        className='
          absolute
          inset-0

          opacity-[0.09]
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

          opacity-[0.08]
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

          opacity-[0.05]
          mix-blend-soft-light
        '
        style={{
          backgroundImage: "url('/images/film-grain/analog-noise-soft.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* HALFTONE CLOUD */}
      <div
        className='
          absolute
          right-[10%]
          top-[8%]

          h-[20rem]
          w-[20rem]

          opacity-[0.05]
        '
        style={{
          backgroundImage: "url('/images/halftone-dots/monochrome-dots.jfif')",
          backgroundSize: "cover",
        }}
      />

      {/* LIGHT LEAK */}
      <div
        className='
          absolute
          right-0
          top-0

          h-full
          w-[30%]

          opacity-[0.12]
          mix-blend-screen
        '
        style={{
          backgroundImage: "url('/images/light-leaks/film-burn-1.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* EDGE VIGNETTE */}
      <div
        className='
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_52%,rgba(0,0,0,0.08)_100%)]
        '
      />
    </div>
  );
}
