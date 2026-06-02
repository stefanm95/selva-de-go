export function WorldShapes() {
  return (
    <div className='absolute inset-0 pointer-events-none overflow-hidden'>
      {/* REGISTERED MARK */}
      <div
        className='
          absolute

          left-[-6%]
          top-[24%]

          font-poster

          text-[52rem]
          leading-none

          text-[var(--brand-berry)]/[0.028]

          select-none
        '
      >
        ®
      </div>

      {/* TOP EDITORIAL RULE */}
      <div
        className='
          absolute

          left-[9%]
          top-[28%]

          h-px
          w-[260px]

          bg-[var(--brand-berry)]/10
        '
      />

      {/* VERTICAL RULE */}
      <div
        className='
          absolute

          left-[9%]
          top-[28%]

          h-[120px]
          w-px

          bg-[var(--brand-berry)]/10
        '
      />

      {/* BRAND MARK */}
      <div
        className='
          absolute

          left-[9%]
          top-[40%]

          font-accent

          text-[10px]

          uppercase

          tracking-[0.45em]

          text-[var(--brand-berry)]/40
        '
      >
        SELVADEGO
      </div>

      {/* RIGHT LIGHT DISC */}
      <div
        className='
          absolute

          right-[7%]
          top-[18%]

          h-[18rem]
          w-[18rem]

          rounded-full

          border

          border-[var(--brand-berry)]/[0.04]
        '
      />

      {/* FUTURE FOOD CHUNK SLOT */}
      <div
        className='
          absolute

          right-[12%]
          bottom-[10%]

          h-[260px]
          w-[260px]

          rounded-full

          bg-[#d28b58]/[0.02]

          blur-[40px]
        '
      />
    </div>
  );
}
