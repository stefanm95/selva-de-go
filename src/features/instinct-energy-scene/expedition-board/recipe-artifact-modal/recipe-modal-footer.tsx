import type { Product } from "@/types/product";
import { motion } from "framer-motion";

import { Float } from "@/components/motion/float";
import { Magnetic } from "@/components/motion/magnetic";

type RecipeModalFooterProps = {
  recipe: Product;
};

const amazonLinks: Record<string, string> = {
  "wild-game-salmon":
    "https://www.amazon.it/SELVADEGO-Barf-Dried-Diet-Digestibility/dp/B0GY14R674?th=1",

  "beef-chicken":
    "https://www.amazon.it/SELVADEGO-Barf-Dried-Diet-Digestibility/dp/B0FJX9ZWYC?th=1",

  "beef-lamb": "https://www.amazon.it/",
};

export function RecipeModalFooter({ recipe }: RecipeModalFooterProps) {
  return (
    <div
      className='
        mt-10

        relative
        left-4

        border-t
        border-[#6b1f2b]/10

        pt-8
      '
    >
      <div>
        <p
          className='
            text-[10px]
            uppercase
            tracking-[0.35em]

            text-[#8d2036]
          '
        >
          Available Online
        </p>

        <p
          className='
            mt-2

            text-sm

            text-[#6b1f2b]/70
          '
        >
          Discover the complete recipe on Amazon.
        </p>
      </div>

      <Float intensity={6}>
        <Magnetic strength={12} rotation={3}>
          <motion.a
            href={amazonLinks[recipe.id]}
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{
              rotate: 0,
              y: -6,
              scale: 1.03,
            }}
            whileTap={{
              y: 2,
              scale: 0.98,
            }}
            className='
              group

              relative
              inline-flex

              mt-8

              rotate-[-2deg]

              items-center
              gap-4

              overflow-hidden

              rounded-[1.4rem]

              border-[3px]
              border-[#2f221d]

              bg-[linear-gradient(180deg,#f6c15b_0%,#e89c37_100%)]

              px-8
              py-5

              shadow-[0_5px_0_#2f221d,0_14px_24px_rgba(0,0,0,0.18)]
            '
          >
            {/* texture */}

            <div
              className='
                absolute
                inset-0

                opacity-[0.08]
                mix-blend-multiply
              '
              style={{
                backgroundImage: "url('/images/wrm-paper/carton.jfif')",
                backgroundSize: "cover",
              }}
            />

            {/* moving shine */}

            <motion.div
              animate={{
                x: ["-120%", "220%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 2,
              }}
              className='
                absolute
                inset-y-0

                w-20

                rotate-[20deg]

                bg-white/20
                blur-md
              '
            />

            {/* sticker glow */}

            <div
              className='
                absolute
                -right-6
                -top-6

                h-20
                w-20

                rounded-full

                bg-white/15

                blur-sm
              '
            />

            {/* content */}

            <div className='relative z-10'>
              <p
                className='
                  text-[9px]
                  font-black
                  uppercase

                  tracking-[0.3em]

                  text-[#4b2419]
                '
              >
                Official Supply
              </p>

              <div
                className='
                  mt-1

                  text-lg
                  font-black
                  uppercase

                  tracking-[0.06em]

                  text-[#2f221d]
                '
              >
                Get The Recipe →
              </div>
            </div>
          </motion.a>
        </Magnetic>
      </Float>
    </div>
  );
}
