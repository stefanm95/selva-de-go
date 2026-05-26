export function OpeningProduct() {
  return (
    <div
      className='
        absolute
        right-[6%]
        top-1/2
        hidden
        -translate-y-1/2
        xl:block
      '
    >
      {/* ATMOSPHERIC SHADOW */}
      <div
        className='
          absolute
          left-1/2
          top-[92%]

          h-[120px]
          w-[360px]

          -translate-x-1/2

          rounded-full

          bg-[#3b2319]/35

          blur-[50px]
        '
      />

      {/* FLOATING GLOW */}
      <div
        className='
          absolute
          left-[-10%]
          top-[8%]

          h-[220px]
          w-[220px]

          rounded-full

          bg-[#f6d2a7]/40

          blur-[80px]
        '
      />

      {/* MAIN OBJECT */}
      <div
        className='
          relative

          h-[620px]
          w-[390px]

          overflow-hidden

          rounded-[3rem]

          border
          border-white/20

          bg-[linear-gradient(165deg,#6f3240_0%,#a94e33_45%,#d27b37_100%)]

          shadow-[0_60px_140px_rgba(0,0,0,0.24)]

          rotate-[-4deg]
        '
      >
        {/* GRAIN */}
        <div
          className='
            absolute
            inset-0

            opacity-[0.07]

            mix-blend-overlay

            [background-image:url("https://grainy-gradients.vercel.app/noise.svg")]
          '
        />

        {/* HALFTONE */}
        <div
          className='
    absolute
    inset-0

    opacity-[0.08]
    mix-blend-overlay
  '
          style={{
            backgroundImage: "url('/images/halftone-dots/retro-model.jfif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* PRINT IMPERFECTION */}
        <div
          className='
    absolute
    inset-0

    opacity-[0.05]
    mix-blend-multiply
  '
          style={{
            backgroundImage: "url('/images/screen-print/imperfect-cards.jfif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* TOP LIGHT */}
        <div
          className='
            absolute
            left-[8%]
            top-[6%]

            h-[180px]
            w-[180px]

            rounded-full

            bg-white/25

            blur-[55px]
          '
        />

        {/* ORANGE GLOW */}
        <div
          className='
            absolute
            bottom-[8%]
            right-[4%]

            h-[240px]
            w-[240px]

            rounded-full

            bg-[#ffcf8d]/20

            blur-[80px]
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

        {/* RETRO STRIPES */}
        <div
          className='
            absolute
            right-[-10%]
            top-[8%]

            flex
            flex-col
            gap-5

            opacity-[0.18]
          '
        >
          <div className='h-[14px] w-[240px] rounded-full bg-white' />
          <div className='h-[14px] w-[190px] rounded-full bg-white' />
          <div className='h-[14px] w-[140px] rounded-full bg-white' />
        </div>

        {/* FAKE STICKER */}
        <div
          className='
            absolute
            right-8
            top-8

            flex
            h-24
            w-24
            items-center
            justify-center

            rounded-full

            border
            border-white/20

            bg-[#f6eadf]/90

            shadow-[0_10px_30px_rgba(0,0,0,0.15)]

            backdrop-blur-md
          '
        >
          <div className='text-center'>
            <p
              className='
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#7a3b45]
              '
            >
              organic
            </p>

            <p
              className='
                mt-1

                text-2xl
                font-black
                leading-none

                text-[#1f1a17]
              '
            >
              95%
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div
          className='
            absolute
            bottom-14
            left-10
            right-10
          '
        >
          {/* LABEL */}
          <p
            className='
              text-[11px]
              font-medium
              uppercase
              tracking-[0.34em]

              text-white/70
            '
          >
            Premium Nutrition
          </p>

          {/* TITLE */}
          <h2
            className='
              mt-5

              max-w-[240px]

              text-[3.4rem]
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

          {/* BOTTOM META */}
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
                h-3
                w-3

                rounded-full

                bg-[#ffe0ae]

                shadow-[0_0_20px_rgba(255,224,174,0.8)]
              '
            />

            <p
              className='
                text-sm
                tracking-[-0.02em]

                text-white/70
              '
            >
              Inspired by nature & crafted for vitality
            </p>
          </div>
        </div>

        {/* BOTTOM CURVE */}
        <div
          className='
            absolute
            bottom-[-18%]
            left-1/2

            h-[240px]
            w-[240px]

            -translate-x-1/2

            rounded-full

            border
            border-white/10
          '
        />
      </div>
    </div>
  );
}
