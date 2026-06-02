export function RitualHeader() {
  return (
    <div
      className='
        mx-auto
        text-center
      '
    >
      <div
        className='
          inline-block

          rotate-[-3deg]

          border-[3px]
          border-[var(--ink)]

          bg-[var(--brand-sun)]

          px-4
          py-2

          shadow-[4px_4px_0_var(--ink)]
        '
      >
        <span
          className='
            text-[10px]
            font-black
            uppercase
            tracking-[0.3em]
            text-[var(--ink)]
          '
        >
          Feeding Ritual
        </span>
      </div>

      <h2
        className='
          mt-8

          font-display

          text-5xl
          md:text-7xl

          leading-[0.9]

          text-[var(--brand-plum)]
        '
      >
        Every Expedition
        <br />
        Starts With Preparation
      </h2>

      <p
        className='
          mx-auto
          mt-6
          max-w-2xl

          text-lg
          leading-relaxed

          text-[var(--text-plum)]/75
        '
      >
        Rehydrate. Wait. Serve. A simple ritual designed to restore texture,
        aroma and natural enjoyment before every meal.
      </p>
    </div>
  );
}
