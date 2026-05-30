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

import { OpeningNavigation } from "@/features/opening-scene/opening-navigation";
import { OpeningActions } from "./opening-actions";
import { OpeningCopy } from "./opening-copy";
import { OpeningProduct } from "./opening-product";

export function OpeningScene() {
  return (
    <Scene className='relative overflow-visible'>
      <OpeningNavigation />

      <SceneContainer tone='warm' density='light' depth='near'>
        <Reveal
          variants={staggerContainer}
          className='relative z-20 pt-[8rem] pb-28'
        >
          <SceneGrid className='gap-y-24'>
            <SceneColumn className='xl:col-span-5'>
              <div className='relative z-20 pl-2 md:pl-4 xl:pl-10'>
                <Parallax speed={0.1}>
                  <div className='absolute left-[-10rem] top-[-6rem] h-[24rem] w-[24rem] rounded-full bg-[#f1c692]/22 blur-[90px]' />
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

            <SceneColumn className='relative xl:col-span-7'>
              <div className='relative flex items-center justify-center'>
                <Float intensity={16}>
                  <Parallax speed={0.18}>
                    <div className='relative'>
                      <OpeningProduct />
                    </div>
                  </Parallax>
                </Float>

                <div className='pointer-events-none absolute right-[-8rem] top-[8%] h-[26rem] w-[26rem] rounded-full bg-[#f4c28b]/10 blur-[120px]' />
                <div className='pointer-events-none absolute left-[4%] bottom-[10%] h-[18rem] w-[18rem] rounded-full bg-[#7a3b45]/10 blur-[120px]' />
              </div>
            </SceneColumn>
          </SceneGrid>

          <div className='pointer-events-none absolute left-1/2 top-[90%] -translate-x-1/2 text-center'>
            <div className='mx-auto mb-4 h-1 w-24 rounded-full bg-[#d96c3d]/60' />
            <p className='text-sm uppercase tracking-[0.34em] text-[#7a3b45]/70'>
              scroll to discover
            </p>
          </div>
        </Reveal>
      </SceneContainer>
    </Scene>
  );
}
