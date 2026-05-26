import { SceneOrb } from "@/components/scene/scene-orb";

export function OpeningAtmosphere() {
  return (
    <>
      {/* TOP LIGHT */}
      <SceneOrb
        className='
          left-[-10%]
          top-[-10%]

          h-[420px]
          w-[420px]

          bg-[#f0c59a]/30
        '
      />

      {/* RIGHT LIGHT */}
      <SceneOrb
        className='
          right-[0%]
          top-[12%]

          h-[340px]
          w-[340px]

          bg-[#d96c3d]/18
        '
      />

      {/* BOTTOM GLOW */}
      <SceneOrb
        className='
          bottom-[-10%]
          left-1/2

          h-[520px]
          w-[520px]

          -translate-x-1/2

          bg-[#f4d7b8]/20
        '
      />

      {/* FLOATING DUST */}
      <div
        className='
    absolute
    left-[34%]
    top-[26%]

    h-[420px]
    w-[420px]

    rounded-full

    bg-white/[0.04]

    blur-[120px]
  '
      />

      <div
        className='
    absolute
    left-[46%]
    top-[48%]

    h-[180px]
    w-[180px]

    rounded-full

    border
    border-[#7a3b45]/10
  '
      />

      {/* MASSIVE TYPO */}
      <div
        className='
          pointer-events-none

          absolute
          inset-0

          overflow-hidden
        '
      >
        <p
          className='
            display

            absolute
            left-[-2vw]
            top-[4vh]

            text-[18vw]

            leading-none
            tracking-[-0.12em]

            text-black/[0.035]
          '
        >
          WILD
        </p>

        <p
          className='
            display

            absolute
            bottom-[-2vh]
            right-[-2vw]

            text-[14vw]

            leading-none
            tracking-[-0.1em]

            text-black/[0.03]
          '
        >
          INSTINCT
        </p>
      </div>
    </>
  );
}
