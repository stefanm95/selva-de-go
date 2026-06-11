import type { Product } from "@/types/product";

type RecipeShowcaseNavigationProps = {
  recipes: Product[];
  activeRecipeIndex: number;
  onSelectRecipe: (index: number) => void;
};

export function RecipeShowcaseNavigation({
  recipes,
  activeRecipeIndex,
  onSelectRecipe,
}: RecipeShowcaseNavigationProps) {
  return (
    <div
      className="
        flex
        flex-wrap
        justify-center
        gap-4
        mt-4
      "
    >
      {recipes.map((recipe, index) => {
        const active = index === activeRecipeIndex;

        return (
          <button
            key={recipe.id}
            onClick={() => onSelectRecipe(index)}
            className={`
              transition-all
              duration-300
              cursor-pointer
              border-[3px]
              border-[var(--ink)]

              px-6
              py-4

              shadow-[4px_4px_0_var(--ink)]

              ${
                active
                  ? "bg-[var(--brand-sun)] rotate-[-2deg] scale-105"
                  : "bg-[var(--surface-paper)] hover:bg-[var(--brand-sun-hover)] hover:-translate-y-1"
              }
            `}
          >
            <div
              className="
                text-[11px]
                font-black
                uppercase
                tracking-[0.25em]
                text-[var(--ink)]
              "
            >
              Formula {index + 1}
            </div>

            <div
              className="
                mt-2

                text-xl
                leading-none

                text-[var(--brand-forest)]
              "
            >
              {recipe.name}
            </div>
          </button>
        );
      })}
    </div>
  );
}
