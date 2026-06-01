export function RitualHeader() {
  return (
    <div
      className='
        mx-auto
        max-w-3xl
        text-center
      '
    >
      <div
        className='
          inline-block

          rotate-[-3deg]

          border-[3px]
          border-[#2f221d]

          bg-[#f0c15a]

          px-4
          py-2

          shadow-[4px_4px_0_#2f221d]
        '
      >
        <span
          className='
            text-[10px]
            font-black
            uppercase
            tracking-[0.3em]
            text-[#2f221d]
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

          text-[#6b1f2b]
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

          text-[#4f1823]/75
        '
      >
        Rehydrate. Wait. Serve. A simple ritual designed to restore texture,
        aroma and natural enjoyment before every meal.
      </p>
    </div>
  );
}
