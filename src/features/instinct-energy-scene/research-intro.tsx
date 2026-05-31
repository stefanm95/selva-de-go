export function ResearchIntro() {
  return (
    <section
      className='
        mx-auto
        max-w-5xl
        relative
        left-25
        border-b
        border-[#6b1f2b]/15
        pb-12
      '
    >
      <div
        className='
          mb-6
          text-xs
          uppercase
          tracking-[0.35em]
          text-[#6b1f2b]/60
        '
      >
        Field Research Nº 07
      </div>

      <div
        className='
          grid
          gap-10
          lg:grid-cols-[1fr_220px]
        '
      >
        <div>
          <h2
            className='
              max-w-3xl
              font-display
              text-5xl
              leading-[0.9]
              md:text-7xl
              text-[#6b1f2b]
            '
          >
            Preservation Records
          </h2>

          <p
            className='
              mt-6
              max-w-xl
              text-lg
              text-[#6b1f2b]/70
            '
          >
            Freeze dried.
            <br />
            Instinct preserved.
          </p>
        </div>

        <div
          className='
            flex
            flex-col
            justify-end
            text-xs
            uppercase
            tracking-[0.25em]
            text-[#6b1f2b]/50
          '
        >
          <span>Archive Collection</span>
          <span>Issue 07</span>
        </div>
      </div>
    </section>
  );
}
