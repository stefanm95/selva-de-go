import { FadeIn } from "@/components/motion/fade-in";

export default function AtlasClosingNote() {
  return (
    <section className='relative flex min-h-[50vh] items-center justify-center overflow-hidden py-20'>
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
      <div className='absolute left-[8%] bottom-[20%] text-[6rem] font-black tracking-[-0.08em] text-[#6b1f2b]/[0.03]'>
        ∴
      </div>

      <div className='absolute right-[8%] top-[20%] text-[7rem] font-black tracking-[-0.08em] text-[#6b1f2b]/[0.04]'>
        END
      </div>

      {/* content */}
      <div className='relative z-10 mx-auto max-w-2xl px-6 text-center'>
        <FadeIn delay={0.1}>
          <div className='mb-6 text-xs uppercase tracking-[0.35em] text-[#6b1f2b]/60'>
            Closing Archive
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className='font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-[#6b1f2b]'>
            Specimen Collected
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className='mt-8 max-w-lg mx-auto text-base leading-relaxed text-[#6b1f2b]/70'>
            Three formulas meticulously crafted. Ingredients sourced for premium
            nutrition. Preserved through advanced freeze-drying technology for
            lasting vitality.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className='mt-12 text-sm uppercase tracking-[0.25em] text-[#6b1f2b]/50'>
            Field Guide — Issue Nº 03
          </p>
        </FadeIn>
      </div>

      {/* bottom marks */}
      <div className='absolute bottom-8 left-6 text-xs uppercase tracking-[0.35em] text-[#6b1f2b]/20'>
        CAT. 004
      </div>

      <div className='absolute bottom-8 right-6 text-xs uppercase tracking-[0.35em] text-[#6b1f2b]/20'>
        ARCHIVE CLOSING
      </div>
    </section>
  );
}
