import { FadeIn } from "@/components/motion/fade-in";
import { stampAssets } from "../../../../lib/world-assets";
import { Float } from "@/components/motion";

export default function FieldGuideCover() {
  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--surface-field-guide)]'>
      {/* Atmosphere */}
      <div
        className='absolute inset-0 opacity-[0.12] mix-blend-multiply'
        style={{
          backgroundImage:
            "url('/images/film-grain/analog-noise-cartoonish.jfif')",
          backgroundSize: "88vh",
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
        border-[var(--ink)]

        bg-[var(--brand-sun)]

        px-5
        py-3

        shadow-[4px_4px_0_var(--ink)]
      '
          >
            <Float intensity={6}>
              <p
                className='
          text-[10px]
          font-black
          uppercase
          tracking-[0.25em]
          text-[var(--ink)]
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

        text-[var(--brand-forest)]
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

        bg-[var(--ink)]/15
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

        text-[var(--text-bark)]/80
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
        border-[var(--ink)]

        bg-[var(--brand-sun)]

        px-10
        py-7

        shadow-[0_8px_0_var(--ink)]
      '
              >
                <div
                  className='
          text-[clamp(4rem,8vw,7rem)]
          leading-none
          text-[var(--ink)]
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

          text-[var(--ink)]/75
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
        border-[var(--ink)]

        bg-[var(--surface-paper)]

        px-8
        py-6

        shadow-[0_8px_0_var(--ink)]
      '
              >
                <div
                  className='
          text-[clamp(3rem,6vw,5rem)]
          leading-none
          text-[var(--brand-forest)]
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

          text-[var(--brand-forest)]/70
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
        border-[var(--ink)]

        bg-[var(--surface-paper)]

        px-8
        py-6

        shadow-[0_8px_0_var(--ink)]
      '
              >
                <div
                  className='
          text-[clamp(3rem,6vw,5rem)]
          leading-none
          text-[var(--brand-forest)]
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

          text-[var(--brand-forest)]/70
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
