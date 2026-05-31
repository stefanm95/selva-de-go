import { FadeIn } from "@/components/motion/fade-in";

export default function AtlasCover() {
  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden bg-[#d8c39a]'>
      <div
        className='absolute inset-0 opacity-45'
        style={{
          backgroundImage: "url('/images/organic-paint/organic-olive-paint.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className='absolute inset-0 opacity-20 mix-blend-screen'
        style={{
          backgroundImage: "url('/images/light-leaks/light-leak.jfif')",
          backgroundSize: "cover",
        }}
      />

      <div
        className='absolute inset-0 opacity-[0.12] mix-blend-multiply'
        style={{
          backgroundImage: "url('/images/film-grain/analog-noise-cartoonish.jfif')",
          backgroundSize: "320px",
        }}
      />

      <div
        className='absolute inset-0 opacity-[0.06] mix-blend-multiply'
        style={{
          backgroundImage: "url('/images/organic-paint/pexels-tiles.jpg')",
          backgroundSize: "cover",
        }}
      />

      <div className='absolute left-[-2%] top-[8%] rotate-[-8deg] text-[14rem] font-black leading-none tracking-[-0.04em] text-[#7d1f33]/[0.08]'>
        FREEZE
      </div>
      <div className='absolute bottom-[6%] right-[-2%] rotate-[8deg] text-[12rem] font-black leading-none tracking-[-0.04em] text-[#556b4e]/[0.08]'>
        DRIED
      </div>
      <div className='absolute bottom-[18%] left-[8%] rotate-[-4deg] text-[8rem] font-black leading-none tracking-[-0.04em] text-[#f4d15d]/[0.08]'>
        WILD
      </div>
      <div className='absolute right-[10%] top-[16%] rotate-[6deg] text-[7rem] font-black leading-none tracking-[-0.04em] text-[#2f221d]/[0.06]'>
        NUTRITION
      </div>

      <div className='relative z-20 mx-auto max-w-6xl px-6 text-center'>
        <FadeIn>
          <p className='stamp-text text-sm text-[#6b1f2b]'>
            Selva De Go Collection
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className='mt-6 text-[clamp(5rem,14vw,12rem)] leading-[0.82] tracking-[-0.04em] text-[#6b1f2b]'>
            INGREDIENT
            <br />
            ATLAS
          </h1>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className='stamp-text mt-10 flex flex-wrap justify-center gap-4 text-sm text-[#2f221d]'>
            <span>Wild Game & Salmon</span>
            <span>/</span>
            <span>Beef & Lamb</span>
            <span>/</span>
            <span>Beef & Chicken</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className='editorial-copy mx-auto mt-10 max-w-2xl text-2xl leading-relaxed text-[#4f1823]/80'>
            Three freeze-dried adventures crafted from premium ingredients and
            preserved for dogs that thrive on real nutrition.
          </p>
        </FadeIn>
      </div>

      <div className='stamp-text absolute left-8 top-8 text-xs text-[#6b1f2b]/40'>
        SDG-ATLAS
      </div>
      <div className='stamp-text absolute bottom-8 right-8 text-xs text-[#6b1f2b]/40'>
        VOL. 03
      </div>
    </section>
  );
}

