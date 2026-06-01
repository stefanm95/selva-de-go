import { FadeIn } from "@/components/motion/fade-in";
import { stampAssets } from "../world-assets";
import { Float } from "@/components/motion";

export default function FieldGuideCover() {
  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden bg-[#d8c39a]'>
      {/* Atmosphere */}
      <div
        className='absolute inset-0 opacity-[0.12] mix-blend-multiply'
        style={{
          backgroundImage:
            "url('/images/film-grain/analog-noise-cartoonish.jfif')",
          backgroundSize: "320px",
        }}
      />
      <div
        className='absolute inset-0 opacity-[0.08] mix-blend-multiply'
        style={{
          backgroundImage: "url('/images/organic-paint/pexels-tiles.jpg')",
          backgroundSize: "cover",
        }}
      />

      <img
        src={stampAssets.sun}
        alt=''
        className='absolute top-[8%] left-1/2 w-36 -translate-x-1/2 rotate-[-6deg] opacity-25 md:w-48'
      />
      <img
        src={stampAssets.berryLeafes}
        alt=''
        className='absolute right-[8%] top-[18%] w-28 rotate-[12deg] opacity-20 md:w-40'
      />
      <img
        src={stampAssets.flower}
        alt=''
        className='absolute left-[8%] top-[22%] w-24 rotate-[-14deg] opacity-20 md:w-36'
      />
      <img
        src={stampAssets.seeds}
        alt=''
        className='absolute bottom-[18%] right-[12%] w-24 rotate-[10deg] opacity-15 md:w-32'
      />
      <img
        src={stampAssets.leafBurnt}
        alt=''
        className='absolute left-[18%] bottom-[18%] w-20 rotate-[18deg] opacity-20 md:w-28'
      />
      <img
        src={stampAssets.doubleFlower}
        alt=''
        className='absolute right-[18%] bottom-[22%] w-24 rotate-[-12deg] opacity-15 md:w-36'
      />
      {/* Decorative assets */}
      {/* MAIN CONTENT */}

      <div
        className='
    relative
    z-20

    flex
    min-h-[80vh]

    flex-col
    items-center
    justify-center

    text-center
  '
      >
        <FadeIn>
          <div
            className='
        rotate-[-3deg]

        border-[3px]
        border-[#2f221d]

        bg-[#f0c15a]

        px-5
        py-3

        shadow-[4px_4px_0_#2f221d]
      '
          >
            <Float intensity={6}>
              <p
                className='
          text-[10px]
          font-black
          uppercase
          tracking-[0.25em]
          text-[#2f221d]
        '
              >
                Selvadego Field Guide
              </p>
            </Float>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <h1
            className='
        mt-10

        text-[clamp(5rem,15vw,12rem)]

        leading-[0.78]
        tracking-[-0.08em]

        text-[#556b4e]
      '
          >
            WILD
            <br />
            INGREDIENTS
            <br />
            JOURNAL
          </h1>
        </FadeIn>
        <FadeIn delay={0.25}>
          <div
            className='
        mt-8

        h-[3px]
        w-32

        bg-[#2f221d]/15
      '
          />
        </FadeIn>
        <FadeIn delay={0.3}>
          <p
            className='
        mx-auto
        mt-8
        max-w-3xl

        text-[1.3rem]
        leading-relaxed

        text-[#3f3128]/80
      '
          >
            Collected across forests, rivers and hidden trails. A field journal
            documenting the proteins, botanicals and discoveries behind every
            freeze-dried recipe.
          </p>
        </FadeIn>

        <Float intensity={6}>
          <FadeIn delay={0.4}>
            <div
              className='
      mt-16
      cursor-pointer
      flex
      flex-wrap
      justify-center
      items-end

      gap-6
    '
            >
              {/* HERO STICKER */}

              <div
                className='
        rotate-[-5deg]

        border-[4px]
        border-[#2f221d]

        bg-[#f0c15a]

        px-10
        py-7

        shadow-[0_8px_0_#2f221d]
      '
              >
                <div
                  className='
          text-[clamp(4rem,8vw,7rem)]
          leading-none
          text-[#2f221d]
        '
                >
                  03
                </div>

                <div
                  className='
          mt-2

          text-xs
          font-black
          uppercase

          tracking-[0.25em]

          text-[#2f221d]/75
        '
                >
                  RECIPES
                </div>
              </div>

              {/* SECONDARY */}

              <div
                className='
        -translate-y-6
        rotate-[4deg]

        border-[4px]
        border-[#2f221d]

        bg-[#efe3cf]

        px-8
        py-6

        shadow-[0_8px_0_#2f221d]
      '
              >
                <div
                  className='
          text-[clamp(3rem,6vw,5rem)]
          leading-none
          text-[#556b4e]
        '
                >
                  12+
                </div>

                <div
                  className='
          mt-2

          text-[11px]
          font-black
          uppercase

          tracking-[0.25em]

          text-[#556b4e]/70
        '
                >
                  DISCOVERIES
                </div>
              </div>

              {/* THIRD */}

              <div
                className='
        translate-y-4
        rotate-[-2deg]

        border-[4px]
        border-[#2f221d]

        bg-[#efe3cf]

        px-8
        py-6

        shadow-[0_8px_0_#2f221d]
      '
              >
                <div
                  className='
          text-[clamp(3rem,6vw,5rem)]
          leading-none
          text-[#556b4e]
        '
                >
                  01
                </div>

                <div
                  className='
          mt-2

          text-[11px]
          font-black
          uppercase

          tracking-[0.25em]

          text-[#556b4e]/70
        '
                >
                  FIELD GUIDE
                </div>
              </div>
            </div>
          </FadeIn>
        </Float>
      </div>
    </section>
  );
}
