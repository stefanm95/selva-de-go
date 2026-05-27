import { Cinematic, Reveal, staggerContainer } from "@/components/motion";

import { Scene } from "@/components/scene/scene";
import { SceneColumn } from "@/components/scene/scene-column";
import { SceneContainer } from "@/components/scene/scene-container";
import { SceneGrid } from "@/components/scene/scene-grid";

import { homepageData } from "@/data/homepage";

import { PhilosophyEditorialCard } from "./philosophy-editorial-card";

export function PhilosophyScene() {
  const scene = homepageData.philosophyScene;

  return (
    <Scene
      className="
        relative

        min-h-[120vh]

        pt-[8rem]
        pb-[10rem]
      "
    >
      {/* ATMOSPHERIC LIGHT */}
      <div
        className="
          absolute
          right-[-12rem]
          top-[10%]

          h-[34rem]
          w-[34rem]

          rounded-full

          bg-[#7a3b45]/10

          blur-[120px]
        "
      />

      <SceneContainer>
        <Reveal
          variants={staggerContainer}
          className="
            relative
            z-30
          "
        >
          <SceneGrid
            className="
              items-start
              gap-y-24
            "
          >
            {/* ======================================
                LEFT EDITORIAL SIDE
            ====================================== */}
            <SceneColumn
              className="
                xl:col-span-5
              "
            >
              <Cinematic delay={0.1}>
                <div className="max-w-[640px]">
                  {/* EYEBROW */}
                  <div
                    className="
                      mb-10

                      flex
                      items-center

                      gap-4
                    "
                  >
                    <div
                      className="
                        h-[4px]
                        w-14

                        rounded-full

                        bg-[#d96c3d]
                      "
                    />

                    <p
                      className="
                        text-[11px]
                        font-black
                        uppercase

                        tracking-[0.34em]

                        text-[#7a3b45]
                      "
                    >
                      {scene.eyebrow}
                    </p>
                  </div>

                  {/* TITLE */}
                  <h2
                    className="
                      display

                      text-[clamp(4rem,7vw,7rem)]

                      leading-[0.82]
                      tracking-[-0.08em]

                      text-[#1f1a17]
                    "
                  >
                    nutrition
                    <br />
                    should feel
                    <br />
                    <span className="text-[#7a3b45]">intentional</span>
                  </h2>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-12

                      max-w-[560px]

                      text-[1.02rem]

                      leading-[1.95]

                      text-[#463c35]/82
                    "
                  >
                    {scene.description}
                  </p>
                </div>
              </Cinematic>
            </SceneColumn>

            {/* ======================================
                RIGHT CARD SIDE
            ====================================== */}
            <SceneColumn
              className="
                flex
                justify-center

                xl:col-span-7
              "
            >
              <Cinematic delay={0.24}>
                <PhilosophyEditorialCard />
              </Cinematic>
            </SceneColumn>
          </SceneGrid>
        </Reveal>
      </SceneContainer>
    </Scene>
  );
}
