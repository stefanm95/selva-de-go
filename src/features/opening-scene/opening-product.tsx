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
      {/* HARD GROUND SHADOW */}
      <div
        className='
          absolute
          bottom-[2%]
          left-1/2

          h-[16rem]
          w-[42rem]

          -translate-x-1/2

          rounded-full

          bg-[#2b1d18]/28

          blur-[26px]
        '
      />

      {/* WARM SHADOW */}
      <div
        className='
          absolute
          bottom-[8%]
          left-1/2

          h-[8rem]
          w-[28rem]

          -translate-x-1/2

          rounded-full

          bg-[#a14e31]/18

          blur-[34px]
        '
      />

      {/* AMBIENT BACK GLOW */}
      <div
        className='
          absolute
          left-1/2
          top-1/2

          h-[42rem]
          w-[42rem]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#d97b42]/10

          blur-[100px]
        '
      />

      {/* MAIN OBJECT */}
      <div
        className='
          relative

          h-[34rem]
          w-[32rem]

          rotate-[-1.2deg]

          overflow-hidden

          rounded-[2.7rem]

          border-[4px]
          border-[#2f221d]

          bg-[linear-gradient(165deg,#5a2435_0%,#8f3e35_28%,#c45f35_62%,#df8a45_100%)]

          shadow-[0_10px_0_#2f221d,0_24px_0_#6a3429,0_42px_60px_rgba(0,0,0,0.18)]
        '
      >
        {/* PAPER TEXTURE */}
        <div
          className='
            absolute
            inset-0

            opacity-[0.16]
            mix-blend-multiply
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

            opacity-[0.08]
            mix-blend-soft-light
          '
          style={{
            backgroundImage:
              "url('/images/halftone-dots/monochrome-dots.jfif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* PRINT BLOOM */}
        <div
          className='
            absolute
            left-[4%]
            top-[6%]

            h-[10rem]
            w-[22rem]

            rotate-[-8deg]

            rounded-full

            bg-[#ffe3bc]/12

            blur-[20px]
          '
        />

        {/* OFFSET SHAPE */}
        <div
          className='
            absolute
            right-[-8%]
            top-[18%]

            h-[16rem]
            w-[16rem]

            rounded-full

            bg-[#ffcf8d]/10

            blur-[10px]
          '
        />

        {/* TOP SPECULAR */}
        <div
          className='
            absolute
            left-[8%]
            top-[5%]

            h-[10rem]
            w-[10rem]

            rounded-full

            bg-white/16

            blur-[40px]
          '
        />

        {/* SIDE LIGHT */}
        <div
          className='
            absolute
            right-[-10%]
            top-[20%]

            h-[20rem]
            w-[10rem]

            rounded-full

            bg-[#ffd6a8]/14

            blur-[70px]
          '
        />

        {/* INNER BORDER */}
        <div
          className='
            absolute
            inset-[14px]

            rounded-[2.2rem]

            border-[2px]
            border-white/12
          '
        />

        {/* RETRO STRIPES */}
        <div
          className='
            absolute
            right-[-6%]
            top-[12%]

            flex
            flex-col
            gap-4

            opacity-[0.14]
          '
        >
          <div className='h-4 w-52 rounded-full bg-white' />
          <div className='h-4 w-40 rounded-full bg-white' />
          <div className='h-4 w-28 rounded-full bg-white' />
        </div>

        {/* TYPOGRAPHY BLOCK */}
        <div
          className='
            absolute
            bottom-14
            left-12
            right-12
          '
        >
          <p
            className='
              text-[11px]
              font-black
              uppercase

              tracking-[0.34em]

              text-[#ffe5c8]
            '
          >
            Premium Nutrition
          </p>

          <h2
            className='
              mt-5

              text-[5.2rem]

              leading-[0.78]
              tracking-[-0.08em]

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

              gap-4
            '
          >
            <div
              className='
                h-3.5
                w-3.5

                rounded-full

                bg-[#ffd35e]

                shadow-[0_0_18px_rgba(255,211,94,0.9)]
              '
            />

            <p
              className='
                text-sm

                font-medium

                tracking-[-0.01em]

                text-white/72
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
