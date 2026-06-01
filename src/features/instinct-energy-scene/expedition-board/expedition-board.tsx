import { useState } from "react";
import { motion } from "framer-motion";

import { ExpeditionAtmosphere } from "./expedition-atmosphere";

import { RecipeArtifacts } from "./recipe-artifacts/recipe-artifacts";

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
    flex
            justify-center
            items-center
    max-w-[160vh]
    left-[15%]

    overflow-hidden

    rounded-[2.5rem]

    border-[4px]
    border-[#2f221d]

    shadow-[0_8px_0_#2f221d,0_40px_70px_rgba(0,0,0,0.18)]
  '
    >
      <ExpeditionAtmosphere />

      <RecipeArtifacts
        recipes={recipes}
        selectedRecipe={selectedRecipe}
        onSelectRecipe={setSelectedRecipe}
      />

      <div
        className='
    absolute
    bottom-12
    left-1/2

    z-20

    w-full
    max-w-4xl

    -translate-x-1/2

    text-center
  '
      >
        <p
          className='
    text-[11px]
    uppercase
    tracking-[0.45em]
    text-[#6b1f2b]/60
  '
        >
          SELVADEGO FIELD FORMULAS
        </p>
        <h2
          className='
    mt-4

    font-display

    text-5xl
    md:text-7xl

    leading-[0.9]

    text-[#6b1f2b]
  '
        >
          THREE WAYS TO RUN WILD
        </h2>
        <p
          className='
    mx-auto
    mt-6
    max-w-2xl

    text-lg

    text-[#6b1f2b]/70
  '
        >
          Freeze dried formulas built from instinct.
        </p>
        <div
          className='
    mt-8

    flex
    flex-wrap
    justify-center
    gap-3
  '
        >
          {["WILD GAME", "BEEF & LAMB", "BEEF & CHICKEN"].map((item) => (
            <span
              key={item}
              className='
      rounded-[1rem]

      
    

      px-5
      py-2

      text-[11px]
      font-bold
      uppercase
      tracking-[0.18em]

      text-[#2f221d]
    '
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <RecipeArtifactModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />

      {/* next step */}
      {/* <RecipeArtifactModal recipe={selectedRecipe} /> */}
    </motion.section>
  );
}
