import { FadeIn } from "@/components/motion/fade-in";
import { stampAssets } from "@/lib/world-assets";

export default function FieldGuideClosingNote() {
  return (
    <section className='relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[var(--surface-field-guide)]'>
      {/* Atmosphere */}

      <div
        className='absolute inset-0 opacity-[0.12] '
        style={{
          backgroundImage:
            "url('/images/film-grain/analog-noise-cartoonish.jfif')",
          backgroundSize: "80vh",
        }}
      />

      <div
        className='absolute inset-0 opacity-[0.08] '
        style={{
          backgroundImage: "url('/images/organic-paint/pexels-tiles.jpg')",
          backgroundSize: "cover",
        }}
      />

      {/* Decorative */}

      <img
        src={stampAssets.sun}
        alt=''
        className='
          absolute
          top-[8%]
          left-1/2
          w-36
          -translate-x-1/2
          rotate-[-6deg]
          opacity-20
          md:w-48
        '
      />

      <img
        src={stampAssets.mountainRoad}
        alt=''
        className='
          absolute
          bottom-20
          left-1/2
          w-[900px]
          max-w-none
          -translate-x-1/2
          opacity-10
        '
      />

      {/* CONTENT */}

      <div
        className='
          relative
          z-20

          flex
          min-h-[80vh]

          flex-col
          items-center
          justify-center

          px-6

          text-center
        '
      >
        <FadeIn>
          <div
            className='
              rotate-[3deg]

              border-[3px]
              border-[var(--ink)]

              bg-[var(--brand-sun)]

              px-5
              py-3

              shadow-[4px_4px_0_var(--ink)]
            '
          >
            <p
              className='
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.25em]

                  text-[var(--ink)]
                '
            >
              End Of The Expedition
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2
            className='
              mt-10

              text-[clamp(5rem,15vw,12rem)]

              leading-[0.78]
              tracking-[-0.08em]

              text-[var(--brand-plum)]
            '
          >
            JOURNAL
            <br />
            COMPLETE
          </h2>
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
            Three recipes. Twelve discoveries. One field guide.
            <br />A collection of ingredients gathered from forests, rivers and
            wild places.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div
            className='
                mt-16

                flex
                flex-wrap
                items-end
                justify-center

                gap-6
              '
          >
            {/* Recipes */}

            <div
              className='
                  -translate-y-6
                  rotate-[4deg]

                  border-[4px]
                  border-[var(--ink)]

                  bg-[var(--brand-sun)]

                  px-8
                  py-6

                  shadow-[0_8px_0_var(--ink)]
                '
            >
              <div
                className='
                  text-[clamp(2.8rem,6vw,5rem)]
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
                INGREDIENTS
              </div>

              <div
                className='
      mt-3

      text-xs
      uppercase

      tracking-[0.18em]

      text-[var(--text-bark)]/60
    '
              >
                Wild Discoveries
              </div>
            </div>

            {/* Mission */}

            <div
              className='
    translate-y-4
    rotate-[-2deg]

    border-[4px]
    border-[var(--ink)]

    bg-[var(--brand-forest)]

    px-8
    py-6

    shadow-[0_8px_0_var(--ink)]
  '
            >
              <div
                className='
      text-[clamp(2.5rem,5vw,4.5rem)]
      leading-none

      text-[var(--surface-paper)]
    '
              >
                WILD
              </div>

              <div
                className='
      mt-2

      text-[11px]
      font-black
      uppercase

      tracking-[0.25em]

      text-[var(--surface-paper)]/80
    '
              >
                FEED THE INSTINCT
              </div>

              <div
                className='
      mt-3

      text-xs
      uppercase

      tracking-[0.18em]

      text-[var(--surface-paper)]/60
    '
              >
                Selva Philosophy
              </div>
            </div>

            {/* Guide */}

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
      </div>
    </section>
  );
}
