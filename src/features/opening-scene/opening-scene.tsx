import { Float, Reveal } from "@/components/motion";

import { Scene } from "@/components/scene/scene";
import { SceneContainer } from "@/components/scene/scene-container";

import { OpeningNavigation } from "./opening-navigation";
import { OpeningPoster } from "./opening-poster";
import { OpeningCornerDecor } from "./opening-corner-decor/opening-corner-decor";

export function OpeningScene() {
  return (
    <Scene id='opening-scene' className='relative min-h-screen overflow-hidden'>
      <OpeningNavigation />

      <OpeningCornerDecor />
      <Float intensity={12}>
        <SceneContainer
          tone='warm'
          density='light'
          depth='near'
          className='relative min-h-screen'
        >
          <Reveal
            className='
            relative

            flex
            min-h-screen

            items-center
            justify-end
          '
          >
            <OpeningPoster />
          </Reveal>
        </SceneContainer>
      </Float>
    </Scene>
  );
}
