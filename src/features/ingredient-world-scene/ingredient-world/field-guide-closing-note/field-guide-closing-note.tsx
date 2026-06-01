import { FadeIn } from "@/components/motion/fade-in";
import { stampAssets } from "@/lib/world-assets";

export default function FieldGuideClosingNote() {
  return (
    <section className='relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#d8c39a]'>
      {/* Atmosphere */}

      <div
        className='absolute inset-0 opacity-[0.12] mix-blend-multiply'
        style={{
          backgroundImage:
            "url('/images/film-grain/analog-noise-cartoonish.jfif')",
          backgroundSize: "80vh",
        }}
      />

      <div
        className='absolute inset-0 opacity-[0.08] mix-blend-multiply'
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
          bottom-0
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
              border-[#2f221d]

              bg-[#f0c15a]

              px-5
              py-3

              shadow-[4px_4px_0_#2f221d]
            '
          >
            <p
              className='
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.25em]

                  text-[#2f221d]
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

              text-[#6b1f2b]
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
                  border-[#2f221d]

                  bg-[#f0c15a]

                  px-8
                  py-6

                  shadow-[0_8px_0_#2f221d]
                '
            >
              <div
                className='
                  text-[clamp(2.8rem,6vw,5rem)]
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
                INGREDIENTS
              </div>

              <div
                className='
      mt-3

      text-xs
      uppercase

      tracking-[0.18em]

      text-[#3f3128]/60
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
    border-[#2f221d]

    bg-[#556b4e]

    px-8
    py-6

    shadow-[0_8px_0_#2f221d]
  '
            >
              <div
                className='
      text-[clamp(2.5rem,5vw,4.5rem)]
      leading-none

      text-[#efe3cf]
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

      text-[#efe3cf]/80
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

      text-[#efe3cf]/60
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
      </div>
    </section>
  );
}
