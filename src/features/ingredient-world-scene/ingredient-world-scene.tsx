import { Scene } from "@/components/scene/scene";
import { SceneContainer } from "@/components/scene/scene-container";
import { products } from "@/data/products";

import AtlasClosingNote from "./ingredient-world/atlas-closing-note/atlas-closing-note";
import AtlasCover from "./ingredient-world/atlas-cover/atlas-cover";
import AtlasPage from "./ingredient-world/atlas-page/atlas-page";
// import IngredientAtlasSpread from "./ingredient-world/atlas-spread/ingredient-atlas-spread";

export function IngredientWorldScene() {
  return (
    <Scene id='ingredient-world' className='relative overflow-visible'>
      <SceneContainer tone='neutral' density='light' depth='far'>
        <AtlasCover />

        {products.map((product, index) => (
          <AtlasPage
            key={product.id}
            product={product}
            pageNumber={index + 1}
            alternateLayout={index % 2 === 1}
          />
        ))}

        {/* <IngredientAtlasSpread /> */}
        <AtlasClosingNote />
      </SceneContainer>
    </Scene>
  );
}
