import { useState } from "react";
import { motion } from "framer-motion";

import { BoardAtmosphere } from "./board-atmosphere";

import { RecipeArtifacts } from "./recipe-artifacts";

import type { Product } from "@/types/product";
import { RecipeArtifactModal } from "./recipe-artifact-modal/recipe-artifact-modal";

type ExpeditionBoardProps = {
  recipes: Product[];
};

export function ExpeditionBoard({ recipes }: ExpeditionBoardProps) {
  const [selectedRecipe, setSelectedRecipe] = useState<Product | null>(null);

  return (
    <motion.section
      className='
    relative
    min-h-[85vh]

    max-w-[160vh]
    left-[15%]

    overflow-hidden

    rounded-[2.5rem]

    border-[4px]
    border-[#2f221d]

    shadow-[0_8px_0_#2f221d,0_40px_70px_rgba(0,0,0,0.18)]
  '
    >
      <BoardAtmosphere />

      <RecipeArtifacts
        recipes={recipes}
        selectedRecipe={selectedRecipe}
        onSelectRecipe={setSelectedRecipe}
      />

      <RecipeArtifactModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />

      {/* next step */}
      {/* <RecipeArtifactModal recipe={selectedRecipe} /> */}
    </motion.section>
  );
}
