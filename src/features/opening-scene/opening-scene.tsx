import {
  Cinematic,
  FadeIn,
  Float,
  Magnetic,
  Parallax,
  Reveal,
  staggerContainer,
} from "@/components/motion";

import { Scene } from "@/components/scene/scene";
import { SceneColumn } from "@/components/scene/scene-column";
import { SceneContainer } from "@/components/scene/scene-container";
import { SceneGrid } from "@/components/scene/scene-grid";

import { SceneBackground } from "@/components/atmosphere/scene-background";

import { OpeningActions } from "./opening-actions";
import { OpeningAtmosphere } from "./opening-atmosphere";
import { OpeningCopy } from "./opening-copy";
import { OpeningProduct } from "./opening-product";

export function OpeningScene() {
  return (
    <Scene className="bg-[#f6eadf]">
      {/* MASTER ATMOSPHERE */}
      <SceneBackground />

      {/* DECORATIVE CINEMATIC LAYERS */}
      <Parallax speed={0.18}>
        <OpeningAtmosphere />
      </Parallax>

      {/* LARGE RETRO WORDS */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <Parallax speed={0.08}>
          <div
            className="
              absolute
              left-[-4vw]
              top-[6vh]

              opacity-[0.05]
            "
          >
            <h2
              className="
                display

                text-[18vw]

                leading-none
                tracking-[-0.1em]

                text-[#4b231f]
              "
            >
              WILD
            </h2>
          </div>
        </Parallax>

        <Parallax speed={0.12}>
          <div
            className="
              absolute
              bottom-[0vh]
              right-[-3vw]

              opacity-[0.04]
            "
          >
            <h2
              className="
                display

                text-[14vw]

                leading-none
                tracking-[-0.08em]

                text-[#7a3b45]
              "
            >
              INSTINCT
            </h2>
          </div>
        </Parallax>
      </div>

      {/* MAIN LAYOUT */}
      <SceneContainer>
        <Reveal variants={staggerContainer} className="relative z-30">
          <SceneGrid>
            {/* COPY SIDE */}
            <SceneColumn
              className="
                relative
                z-30

                flex
                items-center

                xl:col-span-5
              "
            >
              <div className="relative">
                {/* ORGANIC BACK GLOW */}
                <Parallax speed={0.1}>
                  <div
                    className="
                      absolute
                      left-[-10rem]
                      top-[-6rem]

                      h-[24rem]
                      w-[24rem]

                      rounded-full

                      bg-[#f1c692]/30

                      blur-[90px]
                    "
                  />
                </Parallax>

                <Cinematic delay={0.1}>
                  <OpeningCopy />
                </Cinematic>

                <FadeIn delay={0.45}>
                  <Magnetic>
                    <OpeningActions />
                  </Magnetic>
                </FadeIn>
              </div>
            </SceneColumn>

            {/* PRODUCT SIDE */}
            <SceneColumn
              className="
                relative

                mt-24

                flex
                items-center
                justify-center

                xl:col-span-7
                xl:mt-0
              "
            >
              <Float intensity={16}>
                <Parallax speed={0.22}>
                  <Cinematic delay={0.25}>
                    <OpeningProduct />
                  </Cinematic>
                </Parallax>
              </Float>
            </SceneColumn>
          </SceneGrid>
        </Reveal>
      </SceneContainer>

      {/* CINEMATIC FLOOR LIGHT */}
      <div
        className="
          pointer-events-none

          absolute
          bottom-[-14rem]
          left-1/2

          h-[34rem]
          w-[70rem]

          -translate-x-1/2

          rounded-full

          bg-[#f4c28b]/20

          blur-[120px]
        "
      />
    </Scene>
  );
}
