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
      className='
        flex
        flex-wrap
        justify-center
        gap-4
      '
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
              border-[#2f221d]

              px-6
              py-4

              shadow-[4px_4px_0_#2f221d]

              ${
                active
                  ? "bg-[#f0c15a] rotate-[-2deg] scale-105"
                  : "bg-[#efe3cf] hover:bg-[#f7d46b] hover:-translate-y-1"
              }
            `}
          >
            <div
              className='
                text-[11px]
                font-black
                uppercase
                tracking-[0.25em]
                text-[#2f221d]
              '
            >
              Formula {index + 1}
            </div>

            <div
              className='
                mt-2

                text-xl
                leading-none

                text-[#556b4e]
              '
            >
              {recipe.name}
            </div>
          </button>
        );
      })}
    </div>
  );
}
