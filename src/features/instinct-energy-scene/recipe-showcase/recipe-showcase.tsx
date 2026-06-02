import { useState } from "react";
import { motion } from "framer-motion";

import type { Product } from "@/types/product";

import { ExpeditionAtmosphere } from "./recipe-showcase-atmosphere";
import { RecipeShowcaseLeftPanel } from "./recipe-showcase-left-panel";
import { RecipeShowcaseRightPanel } from "./recipe-showcase-right-panel";
import { RecipeShowcaseNavigation } from "./recipe-showcase-navigation";
import { SceneColumn } from "@/components/scene/scene-column";

type RecipeShowcaseProps = {
  recipes: Product[];
};

export function RecipeShowcase({ recipes }: RecipeShowcaseProps) {
  const [activeRecipeIndex, setActiveRecipeIndex] = useState(0);

  const activeRecipe = recipes[activeRecipeIndex];

  return (
    <motion.section
      className='
        relative
        overflow-hidden

        min-h-[82vh]
        w-full
        mx-auto

        rounded-[2.5rem]

        border-[4px]
        border-[#2f221d]

        bg-[#f6ead3]

        shadow-[0_8px_0_#2f221d,0_40px_70px_rgba(0,0,0,0.18)]
      '
    >
      <ExpeditionAtmosphere />

      {/* HEADER */}

      <div
        className='
          relative
          z-20

          px-6
          pt-10

          text-center
        '
      >
        <SceneColumn spacing='sm'>
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
              max-w-2xl

              text-lg
              text-[#6b1f2b]/70
            '
          >
            Freeze dried formulas built from instinct.
          </p>

          {/* RECIPE NAVIGATION */}

          <div
            className='
              relative

              flex
              flex-wrap
              justify-center
              gap-3
            '
          >
            {recipes.map((recipe, index) => (
              <button
                key={recipe.id}
                onClick={() => setActiveRecipeIndex(index)}
                className={`
                  rounded-[1rem]
                  border-[2px]
                  border-[#2f221d]

                  px-5
                  py-2
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.18em]

                  transition-all

                  ${
                    activeRecipeIndex === index
                      ? "bg-[#f0c15a] text-[#2f221d] shadow-[3px_3px_0_#2f221d]"
                      : "bg-transparent text-[#2f221d]/70"
                  }
                `}
              >
                {recipe.name}
              </button>
            ))}
          </div>
        </SceneColumn>
      </div>

      {/* SHOWCASE */}

      <div
        className='
          relative
          z-20

          mt-12

          grid
          gap-10

          lg:grid-cols-[1.05fr_0.95fr]

          px-6
          pb-12

          lg:px-12
        '
      >
        <div
          className='
      absolute
      right-4
      top-0

      z-50
    '
        >
          <RecipeShowcaseNavigation
            recipes={recipes}
            activeRecipeIndex={activeRecipeIndex}
            onSelectRecipe={setActiveRecipeIndex}
          />
        </div>
        <RecipeShowcaseLeftPanel recipe={activeRecipe} />

        <RecipeShowcaseRightPanel recipe={activeRecipe} />
      </div>
    </motion.section>
  );
}
