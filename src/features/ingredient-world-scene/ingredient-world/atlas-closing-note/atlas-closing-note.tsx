import { FadeIn } from "@/components/motion/fade-in";

export default function AtlasClosingNote() {
  return (
    <section className='relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#d8c39a]'>
      <div
        className='absolute inset-0 opacity-35'
        style={{
          backgroundImage:
            "url('/images/organic-paint/organic-olive-paint.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className='absolute inset-0 opacity-15 mix-blend-screen'
        style={{
          backgroundImage: "url('/images/light-leaks/light-leak.jfif')",
          backgroundSize: "cover",
        }}
      />

      <div
        className='absolute inset-0 opacity-[0.12] mix-blend-multiply'
        style={{
          backgroundImage:
            "url('/images/film-grain/analog-noise-cartoonish.jfif')",
          backgroundSize: "contain",
        }}
      />

      <div
        className='absolute inset-0 opacity-[0.05] mix-blend-multiply'
        style={{
          backgroundImage: "url('/images/halftone-dots/monochrome-dots.jfif')",
          backgroundSize: "cover",
        }}
      />

      <div className='absolute bottom-[4%] left-[-2%] rotate-[-8deg] text-[13rem] font-black leading-none tracking-[-0.04em] text-[#556b4e]/[0.08]'>
        GO
      </div>
      <div className='absolute right-[-2%] top-[8%] rotate-[8deg] text-[12rem] font-black leading-none tracking-[-0.04em] text-[#8d2036]/[0.08]'>
        WILD
      </div>
      <div className='absolute left-[10%] top-[18%] rotate-[-6deg] text-[8rem] font-black leading-none tracking-[-0.04em] text-[#f4d15d]/[0.08]'>
        MORE
      </div>

      <div className='relative z-20 mx-auto max-w-5xl px-6 text-center'>
        <FadeIn>
          <p className='stamp-text text-sm text-[#6b1f2b]'>Selva De Go</p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2 className='mt-6 text-[clamp(4rem,10vw,9rem)] leading-[0.82] tracking-[-0.04em] text-[#6b1f2b]'>
            STAY
            <br />
            WILD
          </h2>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className='editorial-copy mx-auto mt-10 max-w-2xl text-2xl leading-relaxed text-[#4f1823]/80'>
            Three freeze-dried adventures. Premium ingredients. Endless trails
            ahead.
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className='stamp-text mt-12 flex flex-wrap justify-center gap-4 text-sm text-[#2f221d]'>
            <span>Freeze Dried</span>
            <span>/</span>
            <span>Natural Ingredients</span>
            <span>/</span>
            <span>Adventure Ready</span>
          </div>
        </FadeIn>
      </div>

      <div className='stamp-text absolute bottom-8 left-8 text-xs text-[#6b1f2b]/40'>
        END OF ATLAS
      </div>
      <div className='stamp-text absolute right-8 top-8 text-xs text-[#6b1f2b]/40'>
        SELVADEGO
      </div>
    </section>
  );
}
