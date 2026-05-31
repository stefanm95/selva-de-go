import { Scene } from "@/components/scene/scene";
import { SceneContainer } from "@/components/scene/scene-container";
import { products } from "@/data/products";

import AtlasCover from "./ingredient-atlas/atlas-cover";
import AtlasPage from "./ingredient-atlas/atlas-page";
import AtlasClosingNote from "./ingredient-atlas/atlas-closing-note";

export function IngredientWorldScene() {
  return (
    <Scene id='ingredient-world' className='relative overflow-visible'>
      <SceneContainer tone='warm' density='light' depth='medium'>
        {/* Atlas Cover */}
        <AtlasCover />

        {/* Atlas Pages - with alternating layouts */}
        {products.map((product, index) => (
          <AtlasPage
            key={product.id}
            product={product}
            pageNumber={index + 1}
            alternateLayout={index % 2 === 1}
          />
        ))}

        {/* Atlas Closing Note */}
        <AtlasClosingNote />
      </SceneContainer>
    </Scene>
  );
}
