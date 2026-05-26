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
      {/* GROUND SHADOW */}
      <div
        className='
          absolute
          bottom-[4%]
          left-1/2

          h-[120px]
          w-[460px]

          -translate-x-1/2

          rounded-full

          bg-black/25

          blur-[45px]
        '
      />

      {/* AMBIENT GLOW */}
      <div
        className='
          absolute
          left-1/2
          top-1/2

          h-[720px]
          w-[720px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#d97b42]/10

          blur-[120px]
        '
      />

      {/* MAIN OBJECT */}
      <div
        className='
          relative

          h-[720px]
          w-[480px]

          overflow-hidden

          rounded-[3.2rem]

          border
          border-white/20

          bg-[linear-gradient(165deg,#5a2435_0%,#8f3e35_28%,#c45f35_62%,#df8a45_100%)]

          shadow-[0_80px_160px_rgba(0,0,0,0.28)]
        '
      >
        {/* PAPER TEXTURE */}
        <div
          className='
            absolute
            inset-0

            opacity-[0.08]
            mix-blend-overlay
          '
          style={{
            backgroundImage: "url('/images/wrm-paper/carton.jfif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* HALFTONE */}
        <div
          className='
            absolute
            inset-0

            opacity-[0.06]
            mix-blend-soft-light
          '
          style={{
            backgroundImage:
              "url('/images/halftone-dots/monochrome-dots.jfif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* TOP SPECULAR */}
        <div
          className='
            absolute
            left-[8%]
            top-[5%]

            h-[220px]
            w-[220px]

            rounded-full

            bg-white/20

            blur-[60px]
          '
        />

        {/* SIDE LIGHT */}
        <div
          className='
            absolute
            right-[-10%]
            top-[20%]

            h-[320px]
            w-[180px]

            rounded-full

            bg-[#ffd6a8]/14

            blur-[80px]
          '
        />

        {/* INNER EDGE */}
        <div
          className='
            absolute
            inset-[18px]

            rounded-[2.6rem]

            border
            border-white/10
          '
        />

        {/* TOP REFLECTION */}
        <div
          className='
            absolute
            left-[8%]
            top-[3%]

            h-[90px]
            w-[84%]

            rounded-full

            bg-white/[0.07]

            blur-[18px]
          '
        />

        {/* ATMOSPHERIC STRIP */}
        <div
          className='
            absolute
            left-[-10%]
            top-[12%]

            h-[2px]
            w-[120%]

            bg-white/10

            blur-sm
          '
        />

        {/* TYPOGRAPHY BLOCK */}
        <div
          className='
            absolute
            bottom-16
            left-12
            right-12
          '
        >
          <p
            className='
              text-[11px]
              font-medium
              uppercase

              tracking-[0.34em]

              text-white/72
            '
          >
            Premium Nutrition
          </p>

          <h2
            className='
              mt-5

              text-[4.5rem]

              leading-[0.84]
              tracking-[-0.07em]

              text-white
            '
          >
            Wild
            <br />
            Salmon
            <br />
            Formula
          </h2>

          {/* MICRO COPY */}
          <div
            className='
              mt-8

              flex
              items-center

              gap-3
            '
          >
            <div
              className='
                h-2.5
                w-2.5

                rounded-full

                bg-[#ffe0ae]

                shadow-[0_0_18px_rgba(255,224,174,0.9)]
              '
            />

            <p
              className='
                text-sm

                tracking-[-0.01em]

                text-white/70
              '
            >
              Crafted for vitality & instinct
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
