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
      {/* BASE PAPER */}
      <div className="absolute inset-0 bg-[#f5e7d7]" />

      {/* MAIN WARM RADIAL */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top_left,rgba(255,220,170,0.55)_0%,transparent_42%)]
        "
      />

      {/* LARGE RETRO SHAPE */}
      <div
        className="
          absolute
          left-[-12%]
          top-[-10%]

          h-[48rem]
          w-[48rem]

          rounded-full

          bg-[#e2b87e]/28

          blur-[4px]
        "
      />

      {/* BURNT ORANGE SHAPE */}
      <div
        className="
          absolute
          right-[-10%]
          top-[6%]

          h-[42rem]
          w-[42rem]

          rounded-[38%]

          bg-[#b14d35]/14

          rotate-[8deg]
        "
      />

      {/* ORGANIC BOTTOM FORM */}
      <div
        className="
          absolute
          bottom-[-16%]
          left-[12%]

          h-[30rem]
          w-[30rem]

          rounded-[42%]

          border-[2px]
          border-[#5c2d28]/8

          bg-[#efe1d1]/80
        "
      />

      {/* DARK EDITORIAL ANCHOR */}
      <div
        className="
          absolute
          right-[8%]
          top-[14%]

          h-[32rem]
          w-[24rem]

          rounded-[3rem]

          bg-[#2a1d1b]/10

          blur-[2px]
        "
      />

      {/* HALFTONE */}
      <div
        className="
          absolute
          right-[8%]
          top-[8%]

          h-[22rem]
          w-[22rem]

          opacity-[0.08]
          mix-blend-multiply
        "
        style={{
          backgroundImage: "url('/images/halftone-dots/monochrome-dots.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* PAINT TEXTURE */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.14]
          mix-blend-multiply
        "
        style={{
          backgroundImage:
            "url('/images/organic-paint/organic-olive-paint.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* PAPER TEXTURE */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.12]
          mix-blend-multiply
        "
        style={{
          backgroundImage: "url('/images/wrm-paper/basic-paper.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* FILM GRAIN */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.09]
          mix-blend-soft-light
        "
        style={{
          backgroundImage: "url('/images/film-grain/analog-noise-soft.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* FILM BURN */}
      <div
        className="
          absolute
          right-0
          top-0

          h-full
          w-[42%]

          opacity-[0.18]
          mix-blend-screen
        "
        style={{
          backgroundImage: "url('/images/light-leaks/film-burn-1.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ATMOSPHERIC HAZE */}
      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-[36rem]
          w-[36rem]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-white/14

          blur-[120px]
        "
      />

      {/* VIGNETTE */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_55%,rgba(24,16,12,0.12)_100%)]
        "
      />
    </div>
  );
}
