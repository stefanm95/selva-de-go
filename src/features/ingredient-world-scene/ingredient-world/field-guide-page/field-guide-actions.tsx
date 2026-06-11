import type { Product } from "@/types/product";
import { motion } from "framer-motion";

type FieldGuideActionsProps = {
  product: Product;
};

const amazonLinks: Record<string, string> = {
  "wild-game-salmon":
    "https://www.amazon.it/SELVADEGO-Barf-Dried-Diet-Digestibility/dp/B0GY14R674?th=1",

  "beef-chicken":
    "https://www.amazon.it/SELVADEGO-Barf-Dried-Diet-Digestibility/dp/B0FJX9ZWYC?th=1",

  "beef-lamb": "https://www.amazon.it/",
};

export default function FieldGuideActions({ product }: FieldGuideActionsProps) {
  const href = amazonLinks[product.id];

  return (
    <div className="mt-14">
      <p
        className="
          stamp-text
          text-[10px]
          uppercase
          tracking-[0.35em]
          text-[var(--brand-forest)]/70
        "
      >
        Continue The Trail
      </p>

      <div className="mt-6 space-y-8">
        {/* Main card */}
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            y: -4,
            rotate: -1,
          }}
          className="
            block

            max-w-[320px]

            rounded-[2rem]

            border-[4px]
            border-[var(--ink)]

            bg-[linear-gradient(180deg,#f5d86f_0%,#efc04f_100%)]

            px-8
            py-8

            shadow-[0_7px_0_var(--ink)]
          "
        >
          <p
            className="
              stamp-text
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-[#5f4a18]
            "
          >
            Official Supply
          </p>

          <h4
            className="
              mt-3

              text-[2.5rem]

              leading-[0.9]
              tracking-[-0.04em]

              text-[var(--ink)]
            "
          >
            Explore
            <br />
            on Amazon →
          </h4>
        </motion.a>

        {/* Secondary links */}
        <div className="space-y-5">
          <button
            className="
              group

              flex
              items-baseline
              gap-4

              text-left

              transition-opacity
              hover:opacity-70
            "
          >
            <span
              className="
                stamp-text
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-[var(--brand-forest)]/50
              "
            >
              Field Notes
            </span>

            <span
              className="
                text-[1.5rem]
                leading-none
                text-[var(--brand-forest)]
              "
            >
              Ingredients Atlas →
            </span>
          </button>

          <button
            className="
              group

              flex
              items-baseline
              gap-4

              text-left

              transition-opacity
              hover:opacity-70
            "
          >
            <span
              className="
                stamp-text
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-[var(--brand-forest)]/50
              "
            >
              Ritual Guide
            </span>

            <span
              className="
                text-[1.5rem]
                leading-none
                text-[var(--brand-forest)]
              "
            >
              Feeding Instructions →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
