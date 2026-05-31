import { FadeIn } from "@/components/motion/fade-in";

export default function AtlasCover() {
  return (
    <section className='relative flex h-screen min-h-screen items-center justify-center overflow-hidden py-32'>
      {/* base paper */}
      <div className='absolute inset-0 bg-[#efe3c5]' />

      {/* subtle vignette */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.08)_100%)]' />

      {/* archive grid */}
      <div
        className='absolute inset-0 opacity-[0.03]'
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(107,31,43,.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(107,31,43,.2) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* fold line */}
      <div className='absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#6b1f2b]/10' />

      {/* archive marks */}
      <div className='absolute left-[8%] top-[15%] text-[8rem] font-black tracking-[-0.08em] text-[#6b1f2b]/[0.03]'>
        I
      </div>

      <div className='absolute right-[8%] bottom-[15%] text-[7rem] font-black tracking-[-0.08em] text-[#6b1f2b]/[0.04]'>
        00
      </div>

      {/* content */}
      <div className='relative z-10 mx-auto max-w-3xl px-6 text-center'>
        <FadeIn delay={0.1}>
          <div className='mb-4 text-xs uppercase tracking-[0.35em] text-[#6b1f2b]/60'>
            Archive Publication
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className='font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-[-0.05em] text-[#6b1f2b]'>
            FIELD GUIDE
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className='mt-6 font-display text-[clamp(2rem,6vw,4rem)] leading-[1.1] tracking-[-0.02em] text-[#6b1f2b]/80'>
            Selva De Go
            <br />
            Atlas
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className='mt-12 space-y-2 text-sm uppercase tracking-[0.25em] text-[#6b1f2b]/50'>
            <p>Issue Nº 03</p>
            <p>Freeze-Dried Nutrition Collection</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className='mt-16 max-w-md mx-auto'>
            <p className='text-base leading-relaxed text-[#6b1f2b]/65'>
              A curated exploration of premium natural ingredients preserved
              through advanced freeze-drying technology.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* bottom marks */}
      <div className='absolute bottom-8 left-6 text-xs uppercase tracking-[0.35em] text-[#6b1f2b]/20'>
        CAT. 001
      </div>

      <div className='absolute bottom-8 right-6 text-xs uppercase tracking-[0.35em] text-[#6b1f2b]/20'>
        COLLECTION
      </div>
    </section>
  );
}
