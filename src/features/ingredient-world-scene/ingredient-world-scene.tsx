import { Scene } from "@/components/scene/scene";
import { SceneColumn } from "@/components/scene/scene-column";
import { SceneContainer } from "@/components/scene/scene-container";
import { products } from "@/data/products";

import FieldGuideClosingNote from "./ingredient-world/field-guide-closing-note/field-guide-closing-note";

import FieldGuideCover from "./ingredient-world/field-guide-cover/field-guide-cover";
import FieldGuidePage from "./ingredient-world/field-guide-page/field-guide-page";
// import IngredientAtlasSpread from "./ingredient-world/atlas-spread/ingredient-atlas-spread";

export function IngredientWorldScene() {
  return (
    <Scene id="ingredient-world" className="relative py-32 overflow-visible">
      <SceneContainer
        tone="neutral"
        density="light"
        depth="far"
        size="wide"
        className="px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
      >
        <SceneColumn spacing="none">
          <FieldGuideCover />

          {products.map((product, index) => (
            <FieldGuidePage
              key={product.id}
              product={product}
              pageNumber={index + 1}
              alternateLayout={index % 2 === 1}
            />
          ))}

          {/* <IngredientAtlasSpread /> */}
          <FieldGuideClosingNote />
        </SceneColumn>
      </SceneContainer>
    </Scene>
  );
}
