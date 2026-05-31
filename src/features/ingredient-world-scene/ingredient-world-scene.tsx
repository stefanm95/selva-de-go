import { Scene } from "@/components/scene/scene";
import { SceneContainer } from "@/components/scene/scene-container";

import { IngredientHero } from "./ingredient-hero";
import { FormulaArchive } from "./formula-archive";
import { ProteinCollection } from "./protein-collection";
import { GardenCollection } from "./garden-collection";
import { BotanicalCollection } from "./botanical-collection";
import { ExpeditionNote } from "./expedition-note";

export function IngredientWorldScene() {
  return (
    <Scene id='ingredient-world' className='relative overflow-visible py-36'>
      <SceneContainer tone='warm' density='light' depth='medium'>
        <IngredientHero />

        <FormulaArchive />

        <ProteinCollection />

        <GardenCollection />

        <BotanicalCollection />

        <ExpeditionNote />
      </SceneContainer>
    </Scene>
  );
}
