import { FadeIn } from "@/components/motion/fade-in";
import { stampAssets } from "../world-assets";

export default function FieldGuideClosingNote() {
  return (
    <section className='relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-[#d8c39a]'>
      <div
        className='absolute inset-0 opacity-[0.12] mix-blend-multiply'
        style={{
          backgroundImage:
            "url('/images/film-grain/analog-noise-cartoonish.jfif')",
          backgroundSize: "320px",
        }}
      />

      <div
        className='absolute inset-0 opacity-[0.06] mix-blend-multiply'
        style={{
          backgroundImage: "url('/images/halftone-dots/monochrome-dots.jfif')",
          backgroundSize: "cover",
        }}
      />

      <img
        src={stampAssets.mountainRoad}
        alt=''
        className='absolute bottom-0 left-1/2 w-[900px] max-w-none -translate-x-1/2 opacity-10'
      />

      <img
        src={stampAssets.sun}
        alt=''
        className='absolute top-[10%] left-1/2 w-36 -translate-x-1/2 opacity-20 md:w-48'
      />

      <img
        src={stampAssets.pawPop}
        alt=''
        className='absolute left-[8%] bottom-[15%] w-28 rotate-[-12deg] opacity-15'
      />

      <img
        src={stampAssets.doubleFlower}
        alt=''
        className='absolute right-[10%] top-[18%] w-32 rotate-[8deg] opacity-15'
      />

      <div className='relative z-20 mx-auto max-w-5xl px-6 text-center'>
        <FadeIn>
          <div className='stamp-text text-xs uppercase tracking-[0.35em] text-[#6b1f2b]/70'>
            End Of The Trail
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2 className='mt-6 text-[clamp(4rem,11vw,10rem)] leading-[0.85] tracking-[-0.05em] text-[#6b1f2b]'>
            UNTIL
            <br />
            NEXT TIME
          </h2>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className='editorial-copy mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-[#4f1823]/80 md:text-2xl'>
            Three recipes. Countless discoveries. More adventures waiting beyond
            the next trail.
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className='mt-12 flex flex-wrap justify-center gap-3'>
            <span className='stamp-text rounded-full border border-[#6b1f2b]/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#6b1f2b]'>
              Freeze Dried
            </span>

            <span className='stamp-text rounded-full border border-[#6b1f2b]/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#6b1f2b]'>
              Wild Ingredients
            </span>

            <span className='stamp-text rounded-full border border-[#6b1f2b]/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#6b1f2b]'>
              Adventure Ready
            </span>
          </div>
        </FadeIn>
      </div>

      <div className='stamp-text absolute left-6 top-6 text-xs text-[#6b1f2b]/40'>
        SDG-TRAIL-END
      </div>

      <div className='stamp-text absolute right-6 top-6 text-xs text-[#6b1f2b]/40'>
        SEE YOU SOON
      </div>
    </section>
  );
}
