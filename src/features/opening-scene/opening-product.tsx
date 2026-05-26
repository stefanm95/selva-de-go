export function OpeningProduct() {
  return (
    <div
      className='
        relative

        flex
        items-center
        justify-center
      '
    >
      {/* SHADOW */}
      <div
        className='
          absolute
          bottom-[6%]
          left-1/2

          h-[100px]
          w-[420px]

          -translate-x-1/2

          rounded-full

          bg-black/20

          blur-[40px]
        '
      />

      {/* MAIN OBJECT */}
      <div
        className='
          relative

          h-[680px]
          w-[460px]

          overflow-hidden

          rounded-[3rem]

          border
          border-white/20

          bg-[linear-gradient(165deg,#6f3240_0%,#a94e33_40%,#d27b37_100%)]

          shadow-[0_60px_140px_rgba(0,0,0,0.24)]
        '
      >
        {/* LIGHT */}
        <div
          className='
            absolute
            left-[8%]
            top-[6%]

            h-[180px]
            w-[180px]

            rounded-full

            bg-white/20

            blur-[50px]
          '
        />

        {/* INNER FRAME */}
        <div
          className='
            absolute
            inset-[18px]

            rounded-[2.4rem]

            border
            border-white/10
          '
        />

        {/* TYPO */}
        <div
          className='
            absolute
            bottom-14
            left-10
          '
        >
          <p
            className='
              text-[11px]
              uppercase

              tracking-[0.32em]

              text-white/70
            '
          >
            Premium Nutrition
          </p>

          <h2
            className='
              mt-4

              text-[4rem]

              leading-[0.88]
              tracking-[-0.06em]

              text-white
            '
          >
            Wild
            <br />
            Salmon
            <br />
            Formula
          </h2>
        </div>
      </div>
    </div>
  );
}
