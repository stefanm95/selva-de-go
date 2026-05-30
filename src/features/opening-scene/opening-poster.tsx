import { OpeningCopy } from "./opening-copy";
import { OpeningActions } from "./opening-actions";
import { OpeningPaperTexture } from "./opening-paper-texture";

export function OpeningPoster() {
  return (
    <div
      className='
        relative
        mx-auto
        flex
        min-h-screen
        max-w-[1600px]
        items-center
        justify-center
        px-8
      '
    >
      <div
        className='
          relative

          flex
          w-[85vw]
          max-w-[1300px]
          min-h-[72vh]

          items-center

          rounded-[3rem]

          border
          border-black/5

          bg-[#efe2d1]

          shadow-[0_40px_120px_rgba(0,0,0,0.08)]

          overflow-hidden
        '
      >
        <OpeningPaperTexture />

        <div
          className='
            relative
            z-20

            max-w-[900px]

            px-16
            py-20
          '
        >
          <OpeningCopy />

          <div className='mt-16'>
            <OpeningActions />
          </div>
        </div>
      </div>
    </div>
  );
}
