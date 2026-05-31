import { Scene } from "@/components/scene/scene";
import { SceneContainer } from "@/components/scene/scene-container";

import { FreezeDryingHero } from "./freeze-drying-hero";
import { ExpeditionTimeline } from "./expedition-timeline";
import { CertificationCard } from "./certification-card";
import { IntegrityStrip } from "./integrity-strip";

export function InstinctEnergyScene() {
  return (
    <Scene id='instinct-energy' className='relative overflow-hidden py-32'>
      <SceneContainer tone='cool' density='light' depth='medium'>
        {/* archive stamps */}
        <img
          src='/images/instinct/one.png'
          alt=''
          aria-hidden
          className='
            pointer-events-none
            absolute
            right-[6rem]
            top-0
            w-[26rem]
            rotate-[12deg]
            opacity-[0.05]
          '
        />

        <img
          src='/images/instinct/three.png'
          alt=''
          aria-hidden
          className='
            pointer-events-none
            absolute
            right-24
            bottom-24
            w-[18rem]
            -rotate-[8deg]
            opacity-[0.05]
          '
        />

        <FreezeDryingHero />

        <div
          className='
            mt-16
            grid
            gap-16
            xl:grid-cols-[1fr_340px]
          '
        >
          <ExpeditionTimeline />

          {/* <CertificationCard /> */}
        </div>
        {/* 
        <IntegrityStrip /> */}
      </SceneContainer>
    </Scene>
  );
}
