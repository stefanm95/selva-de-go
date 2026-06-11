import { motion } from "framer-motion";
import { useState } from "react";

import type { Product } from "@/types/product";

import { SceneColumn } from "@/components/scene/scene-column";
import { RecipeShowcaseNavigation } from "@/features/instinct-energy-scene/recipe-showcase/recipe-showcase-navigation";
import { ExpeditionAtmosphere } from "./recipe-showcase-atmosphere";
import { RecipeShowcaseLeftPanel } from "./recipe-showcase-left-panel";
import { RecipeShowcaseRightPanel } from "./recipe-showcase-right-panel";

type RecipeShowcaseProps = {
  recipes: Product[];
};

export function RecipeShowcase({ recipes }: RecipeShowcaseProps) {
  const [activeRecipeIndex, setActiveRecipeIndex] = useState(0);

  const activeRecipe = recipes[activeRecipeIndex];

  return (
    <motion.section
      className="
        relative
        overflow-hidden

        min-h-[82vh]
        w-full
        mx-auto

        rounded-[2.5rem]

        border-[4px]
        border-[var(--ink)]

        bg-[var(--surface-recipe)]

        shadow-[0_8px_0_var(--ink),0_40px_70px_rgba(0,0,0,0.18)]
      "
    >
      <ExpeditionAtmosphere />

      {/* HEADER */}

      <div
        className="
          relative
          z-20

          px-6
          pt-10

          text-center
        "
      >
        <SceneColumn spacing="sm">
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.45em]
              text-[var(--brand-plum)]/60
            "
          >
            SELVADEGO FIELD FORMULAS
          </p>

          <h2
            className="
              font-display

              text-5xl
              md:text-7xl

              leading-[0.9]

              text-[var(--brand-plum)]
            "
          >
            THREE WAYS TO RUN WILD
          </h2>

          {/* RECIPE NAVIGATION */}

          <div
            className="
              relative

              flex
              flex-wrap
              justify-center
              gap-3
            "
          >
            <RecipeShowcaseNavigation
              recipes={recipes}
              activeRecipeIndex={activeRecipeIndex}
              onSelectRecipe={setActiveRecipeIndex}
            />
          </div>
        </SceneColumn>
      </div>

      {/* SHOWCASE */}

      <div
        className="
          relative
          z-20

          mt-8

          grid
          gap-10

          lg:grid-cols-[1.05fr_0.95fr]

          px-6
          pb-12

          lg:px-12
        "
      >
        <RecipeShowcaseLeftPanel recipe={activeRecipe} />

        <RecipeShowcaseRightPanel recipe={activeRecipe} />
      </div>
    </motion.section>
  );
}
