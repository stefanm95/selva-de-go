import type { Product } from "@/types/product";

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
        mt-12

        relative 
        left-4
        items-center
        justify-start
        

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
            tracking-[0.3em]

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

      <a
        href={amazonLinks[recipe.id]}
        target='_blank'
        rel='noopener noreferrer'
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
        {/* paper texture */}

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

        {/* starburst */}

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

        <div className='relative z-10'>
          <p
            className='
        text-[9px]
        font-black
        uppercase
        relative
        left-2
        top-1
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
relative
left-1
        tracking-[0.06em]

        text-[#2f221d]
      '
          >
            Get The Recipe →
          </div>
        </div>
      </a>
    </div>
  );
}
