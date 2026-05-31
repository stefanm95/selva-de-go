import { products } from "@/data/products";

import { Scene } from "@/components/scene/scene";
import { SceneContainer } from "@/components/scene/scene-container";

import { ResearchIntro } from "./research-intro";
import { ExpeditionBoard } from "./expedition-board/expedition-board";

export function InstinctEnergyScene() {
  const recipe = products.find((product) => product.id === "wild-game-salmon");

  if (!recipe) return null;

  return (
    <Scene id='instinct-energy' className='relative overflow-hidden py-32'>
      <SceneContainer tone='cool' density='light' depth='medium'>
        <img
          src='/images/instinct/one.png'
          alt=''
          aria-hidden
          className='
            pointer-events-none
            absolute
            right-[4rem]
            top-[4rem]
            w-[24rem]
            rotate-[12deg]
            opacity-[0.05]
          '
        />

        <ResearchIntro />

        <div className='mt-20'>
          <ExpeditionBoard recipes={products} />
        </div>
      </SceneContainer>
    </Scene>
  );
}
