import { OpeningActions } from "./opening-actions";
import { SceneColumn } from "@/components/scene/scene-column";

export function OpeningCopy() {
  return (
    <div
      className='
            relative
            z-20
            grid
            min-h-[42vh]

            lg:grid-cols-[1.1fr_0.9fr]

            items-center
            gap-10
          '
    >
      {/* LEFT */}

      <SceneColumn spacing='sm'>
        <p
          className='
                text-[11px]
                uppercase

                tracking-[0.45em]

                text-[#8d2036]
              '
        >
          Wild Nutrition Supply
        </p>

        <h1
          className='
                font-display

                text-7xl
                lg:text-[9rem]

                leading-[0.82]

                text-[#6b1f2b]
              '
        >
          Food For
          <br />
          Wild Instincts
        </h1>

        <p
          className='
                max-w-[720px]

                text-xl

                leading-relaxed

                text-[#4f1823]/75
              '
        >
          Built from real ingredients, inspired by ancestral feeding patterns
          and preserved through gentle freeze-drying for modern companions.
        </p>

        <div
          className='
                flex
                flex-wrap
                gap-4
              '
        >
          {[
            "Novel Proteins",
            "Omega Rich",
            "Human Grade",
            "No Artificial Additives",
          ].map((tag) => (
            <div
              key={tag}
              className='
                    border-[3px]
                    border-[#2f221d]

                    bg-[#f0c15a]

                    px-5
                    py-3

                    shadow-[3px_3px_0_#2f221d]

                    text-[11px]
                    font-black
                    uppercase

                    tracking-[0.18em]

                    text-[#2f221d]
                  '
            >
              {tag}
            </div>
          ))}
        </div>

        <div>
          <OpeningActions />
        </div>
      </SceneColumn>

      {/* RIGHT */}

      <div
        className='
    relative

    flex
    items-center
    justify-center
  '
      >
        <img
          src='/images/products/board/cartoonish-bag.png'
          alt='Wild Game & Salmon'
          className='
      w-[clamp(18rem,38vw,42rem)]

      rotate-[4deg]

      drop-shadow-[0_40px_60px_rgba(0,0,0,0.35)]
    '
        />
      </div>
    </div>
  );
}
