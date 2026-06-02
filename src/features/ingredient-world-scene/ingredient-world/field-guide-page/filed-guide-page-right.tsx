import { FadeIn } from "@/components/motion";
import type { Product } from "@/types/product";

import { dividerAssets, stampAssets } from "../../../../lib/world-assets";
import FieldGuideActions from "./field-guide-actions";

type FieldGuidePageRightProps = {
  product: Product;
};

export default function FieldGuidePageRight({
  product,
}: FieldGuidePageRightProps) {
  const featuredIngredients = [
    ...product.ingredients.proteins.slice(0, 1),
    ...product.ingredients.vegetablesAndFruits.slice(0, 2),
  ];

  return (
    <FadeIn>
      <div className='relative w-full'>
        <img
          src={stampAssets.sun}
          alt=''
          className='
            absolute
            right-0
            top-0
            w-24
            opacity-15
            pointer-events-none
          '
        />

        <p
          className='
            stamp-text
            text-xs
            uppercase
            tracking-[0.35em]
            text-[#556b4e]
          '
        >
          Field Findings
        </p>

        <h3
          className='
            mt-5

            text-[clamp(4rem,7vw,6.5rem)]

            leading-[0.8]
            tracking-[-0.07em]

            text-[#556b4e]
          '
        >
          Built For
          <br />
          Wild Instincts
        </h3>

        <p
          className='
            mt-7

            max-w-xl

            text-[1.35rem]
            leading-relaxed

            text-[#3f3128]/80
          '
        >
          {product.headline}
        </p>

        <div
          className='
            mt-8
            inline-flex

            rotate-[-1deg]

            rounded-xl

            border-[3px]
            border-[#2f221d]

            bg-[#f7d46b]

            px-5
            py-3

            shadow-[0_4px_0_#2f221d]
          '
        >
          <span
            className='
              text-sm
              font-black
              uppercase
              tracking-[0.08em]
              text-[#2f221d]
            '
          >
            {product.highlight}
          </span>
        </div>

        <img
          src={dividerAssets.small}
          alt=''
          className='mt-10 w-40 opacity-60'
        />

        <div className='mt-10'>
          <p
            className='
              stamp-text
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#556b4e]
            '
          >
            Featured Ingredients
          </p>

          <div className='mt-4 flex flex-wrap gap-x-6 gap-y-3'>
            {featuredIngredients.map((item) => (
              <span
                key={item}
                className='
                  text-[1.05rem]
                  font-semibold

                  text-[#556b4e]
                '
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <img
          src={dividerAssets.small}
          alt=''
          className='mt-10 w-40 opacity-60'
        />

        <blockquote
          className='
            mt-10

            max-w-xl

            text-[2rem]
            leading-[1.1]

            tracking-[-0.03em]

            text-[#556b4e]
          '
        >
          “{product.quote}”
        </blockquote>

        <p
          className='
            mt-8

            text-lg
            leading-relaxed

            text-[#3f3128]/80
          '
        >
          {product.description}
        </p>

        <FieldGuideActions product={product} />
      </div>
    </FadeIn>
  );
}
