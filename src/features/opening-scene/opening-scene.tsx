import {
  Cinematic,
  Float,
  Parallax,
  Reveal,
  staggerContainer,
} from "@/components/motion";

import { Scene } from "@/components/scene/scene";
import { SceneColumn } from "@/components/scene/scene-column";
import { SceneContainer } from "@/components/scene/scene-container";
import { SceneGrid } from "@/components/scene/scene-grid";

import { SceneBackground } from "@/components/atmosphere/scene-background";

import { OpeningNavigation } from "@/features/opening-scene/opening-navigation";
import { OpeningActions } from "./opening-actions";
import { OpeningAtmosphere } from "./opening-atmosphere";
import { OpeningCopy } from "./opening-copy";
import { OpeningProduct } from "./opening-product";

export function OpeningScene() {
  return (
    <Scene className="bg-[#f6eadf]">
      {/* MASTER ATMOSPHERE */}
      <SceneBackground />

      <OpeningNavigation />

      {/* DECORATIVE CINEMATIC LAYERS */}

      <OpeningAtmosphere />

      {/* MAIN LAYOUT */}
      <SceneContainer>
        <Reveal
          variants={staggerContainer}
          className="relative pt-[11rem] xl:pt-[13rem] z-30"
        >
          <SceneGrid>
            {/* COPY SIDE */}
            <SceneColumn
              className="
    relative
    z-30

    flex
    items-start

    xl:col-span-5

    translate-x-[3rem]
  "
            >
              <div
                className="relative  pl-2
      md:pl-4
      xl:pl-10"
              >
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

                <Parallax speed={0.22}>
                  <Cinematic delay={0.45}>
                    <OpeningActions />
                  </Cinematic>
                </Parallax>
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
