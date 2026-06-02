import { Scene } from "@/components/scene/scene";
import { SceneColumn } from "@/components/scene/scene-column";
import { SceneContainer } from "@/components/scene/scene-container";
import { products } from "@/data/products";

import AtlasClosingNote from "./ingredient-world/field-guide-closing-note/field-guide-closing-note";
import AtlasCover from "./ingredient-world/field-guide-cover/field-guide-cover";
import AtlasPage from "./ingredient-world/field-guide-page/field-guide-page";
// import IngredientAtlasSpread from "./ingredient-world/atlas-spread/ingredient-atlas-spread";

export function IngredientWorldScene() {
  return (
    <Scene id="ingredient-world" className="relative py-32 overflow-visible">
      <SceneContainer tone="neutral" density="light" depth="far" size="wide">
        <SceneColumn spacing="none">
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
        </SceneColumn>
      </SceneContainer>
    </Scene>
  );
}
