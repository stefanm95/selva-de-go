import type { Product } from "@/types/product";

import { SceneColumn } from "@/components/scene/scene-column";
import { RecipeCertifications } from "./recipe-certifications";
import { RecipeShowcaseFooter } from "./recipe-showcase-footer";

type RecipeShowcaseRightPanelProps = {
  recipe: Product;
};

export const RecipeShowcaseRightPanel = ({
  recipe,
}: RecipeShowcaseRightPanelProps) => {
  return (
    <div
      className='
        relative
        h-full

        px-4
        py-5

        md:px-6
        md:py-6

        xl:px-8
        xl:py-8
      '
    >
      <SceneColumn spacing='sm'>
        {/* STORY */}

        <section>
          <p
            className='
              text-[9px]
              uppercase
              tracking-[0.45em]

              text-[#8d2036]

              md:text-[10px]
            '
          >
            Recipe Story
          </p>

          <p
            className='
              mt-3

              max-w-[58ch]

              text-[0.95rem]
              leading-[1.7]

              text-[#4f1823]

              md:mt-4
              md:text-[1rem]

              xl:text-[1.05rem]
            '
          >
            {recipe.story}
          </p>
        </section>

        {/* BENEFITS */}

        <section>
          <p
            className='
              text-[9px]
              
              uppercase
              tracking-[0.45em]

              text-[#8d2036]

              md:text-[10px]
            '
          >
            Why Dogs Love It
          </p>

          <div
            className='
              mt-4

              flex
              flex-wrap

              gap-3
            '
          >
            {recipe.benefits.map((benefit, index) => {
              const rotations = [
                "rotate-[-2deg]",
                "rotate-[1deg]",
                "rotate-[3deg]",
                "rotate-[-1deg]",
                "rotate-[2deg]",
                "rotate-[-3deg]",
              ];

              return (
                <div
                  key={benefit}
                  className={`
                    ${rotations[index % rotations.length]}

                    border-[2px]
                    border-[#2f221d]

                    bg-[#f0c15a]

                    px-3
                    py-2

                    md:px-4
                    md:py-2

                    shadow-[3px_3px_0_#2f221d]

                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]

                    text-[#2f221d]

                    md:text-[10px]
                  `}
                >
                  {benefit}
                </div>
              );
            })}
          </div>
        </section>

        {/* CERTIFICATIONS */}

        <section>
          <RecipeCertifications />
        </section>

        {/* CTA */}

        <div>
          <RecipeShowcaseFooter recipe={recipe} />
        </div>
      </SceneColumn>
    </div>
  );
};
