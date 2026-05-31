import { useState } from "react";
import { motion } from "framer-motion";

import { BoardAtmosphere } from "./board-atmosphere";
import { BoardCertifications } from "./board-certifications";
import { BoardConnections } from "./board-connections";
import { RecipeArtifacts } from "./recipe-artifacts";

import type { Product } from "@/types/product";

type ExpeditionBoardProps = {
  recipes: Product[];
};

export function ExpeditionBoard({ recipes }: ExpeditionBoardProps) {
  const [selectedRecipe, setSelectedRecipe] = useState<Product | null>(null);

  return (
    <motion.section
      className='
        relative
        min-h-[80vh]
        max-w-[160vh]
        left-[15%]
        overflow-hidden
        rounded-[2rem]
        border
        border-[#6b1f2b]/10
        bg-[#f7eee3]/30
      '
    >
      <BoardAtmosphere />

      <BoardConnections />

      <BoardCertifications />

      <RecipeArtifacts
        recipes={recipes}
        selectedRecipe={selectedRecipe}
        onSelectRecipe={setSelectedRecipe}
      />

      {/* next step */}
      {/* <RecipeArtifactModal recipe={selectedRecipe} /> */}
    </motion.section>
  );
}
