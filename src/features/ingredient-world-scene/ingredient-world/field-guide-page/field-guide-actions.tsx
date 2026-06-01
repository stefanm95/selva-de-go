import { motion } from "framer-motion";
import type { Product } from "@/types/product";

import { Float } from "@/components/motion/float";
import { Magnetic } from "@/components/motion/magnetic";

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
    <div className='mt-16'>
      <p
        className='
          stamp-text
          text-[10px]
          uppercase
          tracking-[0.35em]
          text-[#556b4e]
        '
      >
        Continue The Trail
      </p>

      <div className='mt-5 flex flex-col gap-5'>
        <Float intensity={6}>
          <Magnetic strength={20}>
            <motion.a
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{
                y: -6,
                rotate: -1,
              }}
              className='
                group
                relative

                overflow-hidden

                rounded-[1.6rem]

                border-[4px]
                border-[#2f221d]

                bg-[linear-gradient(180deg,#f5d86f_0%,#efc04f_100%)]

                px-8
                py-7

                shadow-[0_6px_0_#2f221d]
              '
            >
              <div className='relative z-10'>
                <p
                  className='
                    stamp-text
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-[#5f4a18]
                  '
                >
                  Official Supply
                </p>

                <div
                  className='
                    mt-2

                    text-[1.9rem]
                    leading-none

                    uppercase

                    tracking-[-0.03em]

                    text-[#2f221d]
                  '
                >
                  Explore on Amazon →
                </div>
              </div>
            </motion.a>
          </Magnetic>
        </Float>

        <div className='flex flex-wrap  gap-8'>
          <button
            className='
              stamp-text

              text-sm
              uppercase
              cursor-pointer
              tracking-[0.18em]

              text-[#556b4e]

              transition-opacity
              hover:opacity-70
            '
          >
            View Ingredients
          </button>

          <button
            className='
              stamp-text

              text-sm
              uppercase
              cursor-pointer
              tracking-[0.18em]

              text-[#556b4e]

              transition-opacity
              hover:opacity-70
            '
          >
            Feeding Guide
          </button>
        </div>
      </div>
    </div>
  );
}
