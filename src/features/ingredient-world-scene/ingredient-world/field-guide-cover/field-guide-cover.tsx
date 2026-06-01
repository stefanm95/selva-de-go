import { FadeIn } from "@/components/motion/fade-in";
import { stampAssets } from "../world-assets";

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

      {/* Decorative assets */}

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
        src={stampAssets.pawPop}
        alt=''
        className='absolute bottom-[12%] left-[10%] w-24 rotate-[-10deg] opacity-15 md:w-32'
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

      {/* Main content */}

      <div className='relative z-20 mx-auto max-w-6xl px-6 text-center'>
        <FadeIn>
          <div className='stamp-text mb-8 text-xs tracking-[0.35em] text-[#6b1f2b]/70 uppercase'>
            Selva De Go Expedition Nº03
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1
            className='
              text-[#6b1f2b]
              leading-[0.85]
              tracking-[-0.06em]
              text-[clamp(4rem,14vw,11rem)]
            '
          >
            WILD
            <br />
            DISCOVERIES
          </h1>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className='mx-auto mt-8 h-[2px] w-32 bg-[#6b1f2b]/20' />
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className='editorial-copy mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-[#4f1823]/80 md:text-2xl'>
            Field notes gathered across forests, rivers and hidden trails.
            Freeze-dried recipes inspired by nature's most remarkable finds.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className='mt-12 flex flex-wrap justify-center gap-3'>
            <span className='stamp-text rounded-full border border-[#6b1f2b]/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#6b1f2b]'>
              Wild Game & Salmon
            </span>

            <span className='stamp-text rounded-full border border-[#6b1f2b]/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#6b1f2b]'>
              Beef & Lamb
            </span>

            <span className='stamp-text rounded-full border border-[#6b1f2b]/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#6b1f2b]'>
              Beef & Chicken
            </span>
          </div>
        </FadeIn>
      </div>

      {/* Corner stamps */}

      <div className='stamp-text absolute left-6 top-6 text-xs text-[#6b1f2b]/40'>
        SDG-TRAIL
      </div>

      <div className='stamp-text absolute right-6 top-6 text-xs text-[#6b1f2b]/40'>
        COLLECTED
      </div>

      <div className='stamp-text absolute bottom-6 left-6 text-xs text-[#6b1f2b]/40'>
        FIELD NOTES
      </div>

      <div className='stamp-text absolute bottom-6 right-6 text-xs text-[#6b1f2b]/40'>
        VOL. 03
      </div>
    </section>
  );
}
