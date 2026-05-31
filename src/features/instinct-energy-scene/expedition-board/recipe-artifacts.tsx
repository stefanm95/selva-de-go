import type { Product } from "@/types/product";
import RecipeArtifactCard from "./recipe-artifact-card";

type RecipeArtifactsProps = {
  recipes: Product[];

  selectedRecipe: Product | null;

  onSelectRecipe: (recipe: Product) => void;
};

export function RecipeArtifacts({
  recipes,
  selectedRecipe,
  onSelectRecipe,
}: RecipeArtifactsProps) {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeArtifactCard
          key={recipe.id}
          recipe={recipe}
          isSelected={selectedRecipe?.id === recipe.id}
          onClick={() => onSelectRecipe(recipe)}
        />
      ))}
    </>
  );
}
