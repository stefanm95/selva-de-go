import { OpeningActions } from "./opening-actions";
import { OpeningCopy } from "./opening-copy";
import { OpeningPaperTexture } from "./opening-paper-texture";

export function OpeningPoster() {
  return (
    <div
      className='
        relative

        w-full
        max-w-[1450px]
      '
    >
      <div
        className='
          relative

          overflow-hidden

          rounded-[14px]

          border
          border-black/5

          bg-[#efe3d2]/95

          shadow-[0_60px_140px_rgba(0,0,0,0.12)]

          before:absolute
          before:inset-0
          before:bg-gradient-to-br
          before:from-white/20
          before:to-transparent
          before:pointer-events-none
        '
      >
        <OpeningPaperTexture />

        {/* HUGE BACKGROUND WORD */}
        <div
          className='
            absolute
            right-[-40px]
            top-[-40px]

            z-10

            font-poster

            text-[22rem]
            leading-none

            uppercase

            text-[#7a3b45]/[0.035]

            select-none
          '
        >
          03
        </div>

        <div
          className='
            absolute
            right-20
            top-16

            z-20
            text-right
          '
        >
          <p
            className='
              text-[11px]
              uppercase
              tracking-[0.45em]

              text-[#7a3b45]/70
            '
          >
            Field Notes
          </p>

          <p
            className='
              mt-3

              font-poster

              text-[5rem]
              leading-none

              text-[#2a1d18]
            '
          >
            03
          </p>
        </div>

        <div
          className='
            relative
            z-20

            grid

            min-h-[74vh]

            grid-cols-[620px_1fr]
          '
        >
          {/* LEFT */}
          <div
            className='
              flex
              flex-col
             
            justify-center
           relative
           left-4
            '
          >
            <OpeningCopy />

            <div className='mt-14'>
              <OpeningActions />
            </div>
          </div>

          {/* RIGHT */}
          <div
            className='
              relative
              flex
              items-end
              justify-end
              right-2
              p-16
            '
          >
            <div
              className='
                max-w-[320px]
                
                text-right
              '
            >
              <p
                className='
                  text-[11px]
                  uppercase
                  tracking-[0.4em]

                  text-[#7a3b45]/70
                '
              >
                Recipe No. 01
              </p>

              <div
                className='
                  mt-6

                  space-y-2

                  text-[1rem]

                  uppercase
                  tracking-[0.16em]

                  text-[#2a1d18]/75
                '
              >
                <p>Beef</p>
                <p>Heart</p>
                <p>Liver</p>
                <p>Green Tripe</p>
                <p>Salmon Oil</p>
              </div>

              <div
                className='
                  mt-8

                  h-px
                  w-full

                  bg-[#7a3b45]/15
                '
              />

              <p
                className='
                  mt-8

                  text-[1rem]
                  leading-relaxed

                  text-[#3d332d]/70
                '
              >
                Inspired by the natural diet of working canines and preserved
                through gentle freeze-drying.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
