import { Scene } from "@/components/scene/scene";
import { SceneGrid } from "@/components/scene/scene-grid";
import { SceneColumn } from "@/components/scene/scene-column";
import { SceneContainer } from "@/components/scene/scene-container";

import { SceneBackground } from "@/components/atmosphere/scene-background";

import { OpeningActions } from "./opening-actions";
import { OpeningAtmosphere } from "./opening-atmosphere";
import { OpeningCopy } from "./opening-copy";
import { OpeningProduct } from "./opening-product";

export function OpeningScene() {
  return (
    <Scene>
      <SceneBackground />

      <OpeningAtmosphere />

      <SceneContainer>
        <SceneGrid>
          {/* COPY SIDE */}
          <SceneColumn
            className='
              relative
              z-30

              xl:col-span-5
            '
          >
            <OpeningCopy />

            <OpeningActions />
          </SceneColumn>

          {/* PRODUCT SIDE */}
          <SceneColumn
            className='
              relative

              mt-24

              xl:col-span-7
              xl:mt-0
            '
          >
            <OpeningProduct />
          </SceneColumn>
        </SceneGrid>
      </SceneContainer>
    </Scene>
  );
}
