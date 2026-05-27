import { Float, Parallax } from "@/components/motion";

import { SceneOrb } from "@/components/scene/scene-orb";

export function OpeningAtmosphere() {
  return (
    <>
      {/* MAIN WARM LIGHT */}
      <Parallax speed={0.08}>
        <SceneOrb
          className="
            left-[-14%]
            top-[-10%]

            h-[520px]
            w-[520px]

            bg-[#efc28f]/18
          "
        />
      </Parallax>

      {/* PRODUCT LIGHT SYSTEM */}
      <Float intensity={16}>
        <Parallax speed={0.22}>
          <>
            {/* BURNT SHAPE */}
            <div
              className="
                absolute
                right-[-10%]
                top-[4%]

                h-[42rem]
                w-[42rem]

                rounded-[38%]

                rotate-[8deg]

                bg-[#b14d35]/[0.08]
              "
            />

            {/* DARK ANCHOR */}
            <div
              className="
                absolute
                right-[8%]
                top-[14%]

                h-[32rem]
                w-[24rem]

                rounded-[3rem]

                bg-[#2a1d1b]/[0.05]

                blur-[2px]
              "
            />

            {/* HALFTONE */}
            <div
              className="
                absolute
                right-[10%]
                top-[10%]

                h-[18rem]
                w-[18rem]

                opacity-[0.05]

                mix-blend-multiply
              "
              style={{
                backgroundImage:
                  "url('/images/halftone-dots/monochrome-dots.jfif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* FILM BURN */}
            <div
              className="
                absolute
                right-[2%]
                top-0

                h-full
                w-[38%]

                opacity-[0.14]
                mix-blend-screen
              "
              style={{
                backgroundImage: "url('/images/light-leaks/film-burn-1.jfif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </>
        </Parallax>
      </Float>

      {/* FLOOR LIGHT */}
      <Parallax speed={0.05}>
        <SceneOrb
          className="
            bottom-[-18%]
            left-1/2

            h-[620px]
            w-[620px]

            -translate-x-1/2

            bg-[#f5dcc0]/10
          "
        />
      </Parallax>

      {/* REGISTRATION CIRCLE */}
      <div
        className="
          absolute
          left-[50%]
          top-[56%]

          h-[14rem]
          w-[14rem]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          border
          border-[#5a2e2a]/[0.06]
        "
      />
    </>
  );
}
