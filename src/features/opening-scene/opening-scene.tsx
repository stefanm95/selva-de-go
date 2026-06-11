import { Float } from "@/components/motion";
import { Scene } from "@/components/scene/scene";
import { SceneContainer } from "@/components/scene/scene-container";

import { OpeningCopy } from "./opening-copy";
import { OpeningNavigation } from "./opening-navigation/opening-navigation";

export function OpeningScene() {
  return (
    <Scene id="opening-scene" className="relative min-h-screen overflow-hidden">
      <OpeningNavigation />

      <SceneContainer
        tone="warm"
        size="wide"
        className="
          relative
          flex
          min-h-screen
          items-center
        "
      >
        <Float intensity={8}>
          <OpeningCopy />
        </Float>
      </SceneContainer>
    </Scene>
  );
}
