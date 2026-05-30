export function ProductCard() {
  return (
    <div
      className='
        relative

        flex
        items-center
        justify-center
      '
    >
      {/* CONTACT SHADOW */}
      <div
        className='
          absolute
          bottom-[4%]
          left-1/2

          h-[10rem]
          w-[34rem]

          -translate-x-1/2

          rounded-full

          bg-[#2a1d18]/18

          blur-[18px]
        '
      />

      {/* WARM PAPER SHADOW */}
      <div
        className='
          absolute
          bottom-[6%]
          left-1/2

          h-[6rem]
          w-[24rem]

          -translate-x-1/2

          rounded-full

          bg-[#b8643e]/10

          blur-[28px]
        '
      />

      {/* AMBIENT ATMOSPHERE */}
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

          bg-[#e09b67]/6

          blur-[120px]
        '
      />

      {/* MAIN PRODUCT */}
      <div
        className='
          relative
        
          h-[34rem]
          w-[32rem]
        
          rotate-[-1deg]
        
          overflow-hidden
        
          rounded-[2.7rem]
        
          border-[4px]
          border-[#2f221d]
        
          bg-[linear-gradient(165deg,#5b2634_0%,#8d4038_26%,#bf6037_60%,#de8b4a_100%)]
        
          shadow-[0_8px_0_#2f221d,0_28px_42px_rgba(35,18,12,0.14)]
        '
      >
        {/* PAPER TEXTURE */}
        <div
          className='
            absolute
            inset-0

            opacity-[0.1]
            mix-blend-multiply
          '
          style={{
            backgroundImage: "url('/images/wrm-paper/carton.jfif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* CANVAS TEXTURE */}
        <div
          className='
            absolute
            inset-0

            opacity-[0.06]
            mix-blend-overlay
          '
          style={{
            backgroundImage: "url('/images/canvas/canvas.jfif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* HALFTONE */}
        <div
          className='
            absolute
            inset-0

            opacity-[0.05]
            mix-blend-soft-light
          '
          style={{
            backgroundImage:
              "url('/images/halftone-dots/monochrome-dots.jfif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* ANALOG PRINT CLOUD */}
        <div
          className='
            absolute
            inset-0

            opacity-[0.14]
            mix-blend-soft-light
          '
          style={{
            backgroundImage: "url('/images/screen-print/imperfect-cards.jfif')",
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

            bg-[#ffe3bc]/10

            blur-[22px]
          '
        />

        {/* OFFSET COLOR SHAPE */}
        <div
          className='
            absolute
            right-[-12%]
            top-[18%]

            h-[18rem]
            w-[18rem]

            rounded-full

            bg-[#ffcf8d]/8

            blur-[18px]
          '
        />

        {/* SPECULAR LIGHT */}
        <div
          className='
            absolute
            left-[8%]
            top-[5%]

            h-[10rem]
            w-[10rem]

            rounded-full

            bg-white/14

            blur-[42px]
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

            bg-[#ffd6a8]/10

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
            border-white/10
          '
        />

        {/* PRINT STRIPES */}
        <div
          className='
            absolute
            right-[-6%]
            top-[12%]

            flex
            flex-col
            gap-4

            opacity-[0.12]
          '
        >
          <div className='h-4 w-52 rounded-full bg-white' />
          <div className='h-4 w-40 rounded-full bg-white' />
          <div className='h-4 w-28 rounded-full bg-white' />
        </div>

        {/* TYPOGRAPHY */}
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

                shadow-[0_0_18px_rgba(255,211,94,0.55)]
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
