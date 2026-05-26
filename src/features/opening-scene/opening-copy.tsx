import { homepageData } from "@/data/homepage";

export function OpeningCopy() {
  const scene = homepageData.openingScene;

  return (
    <div
      className='
        relative
        left-[50%]
        z-30
      '
    >
      {/* EYEBROW */}
      <div
        className='
          mb-10

          flex
          items-center

          gap-4
        '
      >
        <div
          className='
            h-[4px]
            w-14

            rounded-full

            bg-[#d96c3d]
          '
        />

        <p
          className='
            rotate-[-2deg]

            text-[11px]
            font-black
            uppercase

            tracking-[0.34em]

            text-[#7a3b45]
          '
        >
          {scene.eyebrow}
        </p>
      </div>

      {/* TITLE */}
      <h1
        className='
          display

          relative

          max-w-[860px]

          text-[clamp(6rem,10vw,11rem)]

          leading-[0.78]
          tracking-[-0.09em]

          text-[#1f1a17]
        '
      >
        <span className='relative inline-block'>wild</span>

        <br />

        <span className='relative inline-block'>nutrition</span>

        <br />

        <span
          className='
            relative

            inline-block

            text-[#7a3b45]
          '
        >
          for modern dogs
        </span>
      </h1>

      {/* DESCRIPTION */}
      <div
        className='
          relative

          mt-12

          max-w-[560px]
        '
      >
        {/* PAINT GLOW */}
        <div
          className='
            absolute
            left-[-2rem]
            top-[-1rem]

            h-[8rem]
            w-[8rem]

            rounded-full

            bg-[#f4d7b8]/40

            blur-[30px]
          '
        />

        <p
          className='
            relative
            z-10

            text-[1.08rem]

            leading-[1.9]

            text-[#463c35]/82
          '
        >
          {scene.description}
        </p>
      </div>
    </div>
  );
}
