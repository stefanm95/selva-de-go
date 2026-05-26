import { homepageData } from "@/data/homepage";

export function OpeningCopy() {
  const scene = homepageData.openingScene;

  return (
    <div
      className='
        relative
        z-30

        max-w-[760px]

        pt-24
        md:pt-32
        xl:pt-0
      '
    >
      {/* EYEBROW */}
      <div
        className='
          mb-8
          flex
          items-center
          gap-4
        '
      >
        <div
          className='
            h-px
            w-16
            bg-[#7a3b45]/30
          '
        />

        <p
          className='
            text-[11px]
            font-medium
            uppercase
            tracking-[0.34em]
            text-[#7a3b45]
          '
        >
          {scene.eyebrow}
        </p>
      </div>

      {/* TITLE */}
      <div className='relative'>
        {/* ATMOSPHERIC TYPO */}
        <div
          className='
            pointer-events-none
            absolute
            left-[-2rem]
            top-[-5.5rem]

            hidden
            xl:block
          '
        >
          <p
            className='
              display
              text-[11rem]
              leading-none
              tracking-[-0.08em]
              text-black/[0.045]
            '
          >
            WILD
          </p>
        </div>

        <h1
          className='
            relative
            z-10

            display

            max-w-[920px]

            text-[clamp(4.5rem,9vw,10rem)]

            leading-[0.84]
            tracking-[-0.075em]

            text-[#1f1a17]
            text-balance
          '
        >
          wild
          <br />
          nutrition
          <br />
          for modern dogs
        </h1>
      </div>

      <div
        className='
    absolute
    left-[12%]
    top-[32%]

    h-[260px]
    w-[260px]

    opacity-[0.12]

    mix-blend-multiply
  '
        style={{
          backgroundImage:
            "url('/images/organic-paint/organic-olive-paint.jfif')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* DESCRIPTION */}
      <div
        className='
          relative

          mt-12

          max-w-[560px]
        '
      >
        <div
          className='
            absolute
            left-[-1.5rem]
            top-2

            h-[72px]
            w-[72px]

            rounded-full

            bg-[#f0d4bb]/40

            blur-sm
          '
        />

        <p
          className='
            relative
            z-10

            text-lg
            leading-[1.9]
            tracking-[-0.01em]

            text-[#463c35]/82
          '
        >
          {scene.description}
        </p>
      </div>
    </div>
  );
}
