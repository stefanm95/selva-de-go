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

import { OpeningNavigation } from "@/features/opening-scene/opening-navigation";
import { OpeningActions } from "./opening-actions";
import { OpeningCopy } from "./opening-copy";
import { OpeningProduct } from "./opening-product";

export function OpeningScene() {
  return (
    <Scene className='relative overflow-visible'>
      <OpeningNavigation />

      <SceneContainer tone='warm' density='light' depth='near'>
        <Reveal variants={staggerContainer} className='relative z-20 pb-28'>
          <div className='absolute h-[28rem] opacity-40 blur-[140px] bg-[radial-gradient(circle_at_top_left,rgba(255,232,193,0.24)_0%,transparent_45%)]' />

          <div className='grid gap-24 xl:grid-cols-[1.2fr_0.8fr] items-center'>
            <SceneColumn>
              <div className='relative max-w-[44rem]'>
                <Parallax speed={0.08}>
                  <div className='absolute -left-24 -top-20 h-[30rem] w-[30rem] rounded-full bg-[#f1c692]/18 blur-[120px]' />
                </Parallax>

                <Cinematic delay={0.1}>
                  <OpeningCopy />
                </Cinematic>

                <div className='mt-14 max-w-[24rem]'>
                  <p className='text-[1rem] leading-[1.95] text-[#463c35]/80'>
                    A brief invitation into a world where canine nutrition is
                    crafted like an editorial ritual.
                  </p>
                </div>

                <div className='mt-16 flex flex-wrap gap-5'>
                  <Parallax speed={0.12}>
                    <OpeningActions />
                  </Parallax>
                </div>
              </div>
            </SceneColumn>

            <SceneColumn>
              <div className='relative flex items-end justify-end'>
                <div className='pointer-events-none absolute -right-24 top-[8%] h-[20rem] w-[20rem] rounded-full bg-[#7a3b45]/12 blur-[140px]' />
                <div className='pointer-events-none absolute left-10 bottom-[10%] h-[16rem] w-[16rem] rounded-full bg-[#f4c28b]/12 blur-[120px]' />

                <Float intensity={20}>
                  <Parallax speed={0.14}>
                    <div className='relative'>
                      <OpeningProduct />
                    </div>
                  </Parallax>
                </Float>
              </div>
            </SceneColumn>
          </div>

          <div className='pointer-events-none absolute left-1/2 top-[92%] -translate-x-1/2 text-center'>
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
