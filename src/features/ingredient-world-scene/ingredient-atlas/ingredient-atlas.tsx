import IngredientAtlasBackground from "./atlas-background";
import IngredientAtlasHeader from "./atlas-header";
import IngredientAtlasSpread from "./atlas-spread";

export default function IngredientAtlas() {
  return (
    <section className='relative overflow-hidden py-32'>
      <IngredientAtlasBackground />

      <div className='relative z-10 mx-auto max-w-7xl px-6'>
        <IngredientAtlasHeader />
        <IngredientAtlasSpread />
      </div>
    </section>
  );
}
