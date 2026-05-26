import { Scene } from "@/components/scene/scene";

import { SceneBackground } from "@/components/atmosphere/scene-background";

import { OpeningCopy } from "./opening-copy";
import { OpeningActions } from "./opening-actions";
import { OpeningProduct } from "./opening-product";

export function OpeningScene() {
  return (
    <Scene
      className='
        overflow-hidden
        bg-[#f6eadf]
      '
    >
      {/* ATMOSPHERE */}
      <SceneBackground />

      {/* MASSIVE TYPOGRAPHY */}
      <div
        className='
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        '
      >
        {/* TOP WORD */}
        <div
          className='
            absolute
            left-[-2vw]
            top-[4vh]

            z-10

            opacity-[0.04]
          '
        >
          <p
            className='
              display

              text-[20vw]

              leading-none
              tracking-[-0.12em]

              text-black
            '
          >
            WILD
          </p>
        </div>

        {/* BOTTOM WORD */}
        <div
          className='
            absolute
            bottom-[-1vh]
            right-[-2vw]

            z-10

            opacity-[0.03]
          '
        >
          <p
            className='
              display

              text-[15vw]

              leading-none
              tracking-[-0.1em]

              text-black
            '
          >
            INSTINCT
          </p>
        </div>
      </div>

      {/* MAIN COMPOSITION */}
      <div
        className='
          relative
          z-30

          flex
          min-h-screen
          items-center
        '
      >
        <div
          className='
            relative

            mx-auto
            w-full
            max-w-[1680px]

            px-6
            md:px-10
            xl:px-16
          '
        >
          {/* PRODUCT SIDE */}
          <OpeningProduct />

          {/* CONTENT SIDE */}
          <div
            className='
              relative
              z-30

              ml-[2vw]

              max-w-[760px]

              pb-24
              pt-32

              xl:pb-0
              xl:pt-0
            '
          >
            <OpeningCopy />

            <OpeningActions />
          </div>

          {/* FLOATING ORB */}
          <div
            className='
              pointer-events-none

              absolute
              left-[38%]
              top-[18%]

              hidden
              xl:block

              h-[220px]
              w-[220px]

              rounded-full

              border
              border-[#7a3b45]/10

              bg-[#f4d7b8]/10

              backdrop-blur-xl

              shadow-[0_20px_60px_rgba(0,0,0,0.06)]
            '
          />

          {/* SECONDARY LIGHT */}
          <div
            className='
              pointer-events-none

              absolute
              bottom-[8%]
              left-[12%]

              h-[240px]
              w-[240px]

              rounded-full

              bg-[#d97b42]/10

              blur-[100px]
            '
          />
        </div>
      </div>

      {/* FOREGROUND LIGHT */}
      <div
        className='
          pointer-events-none

          absolute
          bottom-[-24%]
          left-1/2

          z-20

          h-[520px]
          w-[1000px]

          -translate-x-1/2

          rounded-full

          bg-[#f4d7b8]/25

          blur-[130px]
        '
      />

      {/* VIGNETTE */}
      <div
        className='
          pointer-events-none

          absolute
          inset-0

          z-40

          bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.06)_100%)]
        '
      />
    </Scene>
  );
}
