import { FadeIn } from "@/components/motion";
import type { Product } from "@/types/product";

import { stampAssets } from "../../../../lib/world-assets";
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
      <article
        className="
          relative
          mx-auto
          flex
          max-w-[28rem]
          flex-col
          gap-8
        "
      >
        <img
          src={stampAssets.sun}
          alt=""
          className="
            absolute
            -right-4
            top-0
            w-16
            opacity-10
            pointer-events-none
          "
        />

        {/* label */}

        <div>
          <p
            className="
              stamp-text
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-[var(--brand-forest)]/60
            "
          >
            GOOD STUFF INSIDE
          </p>
        </div>

        {/* headline */}

        <div className="space-y-4">
          <h3
            className="
              max-w-[18rem]

              text-[clamp(2.8rem,4vw,4rem)]

              leading-[0.9]
              tracking-[-0.05em]

              text-[var(--brand-forest)]
            "
          >
            Rich proteins.
            <br />
            Honest ingredients.
          </h3>

          <p
            className="
              max-w-[24rem]

              text-[1.1rem]
              leading-relaxed

              text-[var(--text-bark)]/80
            "
          >
            {product.headline}
          </p>
        </div>

        {/* ingredients */}

        <div className="space-y-4">
          <p
            className="
              stamp-text
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-[var(--brand-forest)]/60
            "
          >
            WHAT'S INSIDE
          </p>

          <div className="space-y-3">
            {featuredIngredients.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    h-2.5
                    w-2.5
                    rounded-full

                    bg-[var(--brand-sun)]
                  "
                />

                <span
                  className="
                    text-[1.2rem]

                    text-[var(--brand-forest)]
                  "
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* fun copy */}

        <div
          className="
            max-w-[20rem]

            rotate-[-1deg]

            rounded-2xl

            border-[3px]
            border-[var(--ink)]

            bg-[var(--surface-cream)]

            px-5
            py-4

            shadow-[0_4px_0_var(--ink)]
          "
        >
          <p
            className="
              text-sm
              leading-relaxed

              text-[var(--text-bark)]
            "
          >
            No fillers.
            <br />
            No nonsense.
            <br />
            Just real food.
          </p>
        </div>

        <FieldGuideActions product={product} />
      </article>
    </FadeIn>
  );
}
