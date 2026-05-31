// import { OpeningActions } from "./opening-actions";
import { OpeningCopy } from "./opening-copy";
import { OpeningPaperTexture } from "./opening-paper-texture";

export function OpeningPoster() {
  return (
    <section
      className='
        relative
        w-full
        max-w-[1280px]
 top-5
        mx-auto
      '
    >
      <div
        className='
          relative
    z-20

    grid
    min-h-[82vh]


    items-center

    px-12
    lg:px-20

          overflow-hidden

          rounded-[2.5rem]

          border-[4px]
          border-[#2f221d]

          bg-[#efe3cf]

          shadow-[0_8px_0_#2f221d,0_40px_70px_rgba(0,0,0,0.18)]
        '
      >
        <OpeningPaperTexture />

        {/* atmosphere */}

        <div
          className='
            absolute
            left-[5%]
            top-[10%]

            h-[30rem]
            w-[30rem]

            rounded-[1rem]

            bg-[#f0c15a]/15

            blur-[120px]
          '
        />

        <div
          className='
            absolute
            right-[5%]
            bottom-[10%]

            h-[26rem]
            w-[26rem]

            rounded-full

            bg-[#556b4e]/10

            blur-[120px]
          '
        />

        {/* watermark */}

        <div
          className='
            pointer-events-none

            absolute
            inset-0

            flex
            items-center
            justify-center

            font-display

            text-[24rem]

            uppercase

            text-[#6b1f2b]/[0.03]

            select-none
          '
        >
          SELVA
        </div>

        {/* stickers */}

        <div
          className='
            absolute
            left-[4rem]
            top-[3rem]

            rotate-[-6deg]

            border-[3px]
            border-[#2f221d]

            bg-[#f0c15a]

            px-5
            py-3

            shadow-[4px_4px_0_#2f221d]

            text-[10px]
            font-black
            uppercase
            tracking-[0.2em]
          '
        >
          Freeze Dried
        </div>

        <div
          className='
            absolute
            right-[8rem]
            top-[5rem]

            rotate-[8deg]

            border-[3px]
            border-[#2f221d]

            bg-[#f0c15a]

            px-5
            py-3

            shadow-[4px_4px_0_#2f221d]

            text-[10px]
            font-black
            uppercase
            tracking-[0.2em]
          '
        >
          Human Grade
        </div>

        {/* content */}
        <OpeningCopy />
      </div>
    </section>
  );
}
