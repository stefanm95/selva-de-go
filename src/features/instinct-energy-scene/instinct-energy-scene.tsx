import { products } from "@/data/products";

import { Scene } from "@/components/scene/scene";
import { SceneContainer } from "@/components/scene/scene-container";

import { RecipeShowcase } from "./recipe-showcase/recipe-showcase";

export function InstinctEnergyScene() {
  return (
    <Scene
      id='instinct-energy'
      className='relative left-40 overflow-hidden py-32'
    >
      <SceneContainer tone='cool' density='light' depth='far'>
        <img
          src='/images/instinct/one.png'
          alt=''
          aria-hidden
          className='
            pointer-events-none
            absolute
            opacity-[0.05]
          '
        />

        <RecipeShowcase recipes={products} />
      </SceneContainer>
    </Scene>
  );
}
