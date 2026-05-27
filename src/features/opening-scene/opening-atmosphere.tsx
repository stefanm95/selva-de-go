import { SceneOrb } from "@/components/scene/scene-orb";

export function OpeningAtmosphere() {
  return (
    <>
      {/* SUN GLOW */}
      <SceneOrb
        className="
          left-[-10%]
          top-[-8%]

          h-[460px]
          w-[460px]

          bg-[#f0c59a]/32
        "
      />

      {/* BURNT LIGHT */}
      <SceneOrb
        className="
          right-[2%]
          top-[12%]

          h-[320px]
          w-[320px]

          bg-[#c45a32]/20
        "
      />

      {/* LOWER HAZE */}
      <SceneOrb
        className="
          bottom-[-12%]
          left-1/2

          h-[560px]
          w-[560px]

          -translate-x-1/2

          bg-[#f4d7b8]/18
        "
      />

      {/* EDITORIAL CIRCLE */}
      <div
        className="
          absolute
          left-[48%]
          top-[48%]

          h-[180px]
          w-[180px]

          rounded-full

          border
          border-[#5a2e2a]/10
        "
      />

      {/* TYPOGRAPHIC WORLD */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          overflow-hidden
        "
      >
        <p
          className="
            display

            absolute
            left-[-2vw]
            top-[4vh]

            text-[18vw]

            leading-none
            tracking-[-0.12em]

            text-black/[0.04]
          "
        >
          WILD
        </p>

        <p
          className="
            display

            absolute
            bottom-[-2vh]
            right-[-2vw]

            text-[14vw]

            leading-none
            tracking-[-0.1em]

            text-black/[0.03]
          "
        >
          INSTINCT
        </p>
      </div>
    </>
  );
}
