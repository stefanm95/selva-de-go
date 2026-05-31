import type { Product } from "@/types/product";
import { motion } from "framer-motion";
import { Pin } from "lucide-react";

type RecipeArtifactCardProps = {
  recipe: Product;
  isSelected?: boolean;
  onClick?: () => void;
};

const positions: Record<string, string> = {
  "wild-game-salmon": "left-[12%] top-[18%] rotate-[-8deg]",

  "beef-lamb": "left-1/2 top-[12%] -translate-x-1/2 rotate-[0deg] z-30",

  "beef-chicken": "right-[12%] top-[18%] rotate-[8deg]",
};

export default function RecipeArtifactCard({
  recipe,
  isSelected,
  onClick,
}: RecipeArtifactCardProps) {
  const position = positions[recipe.id] ?? "";

  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        y: -16,
        scale: 1.04,
        rotate: 0,
      }}
      animate={{
        y: isSelected ? -16 : 0,
        scale: isSelected ? 1.04 : 1,
        rotate: isSelected ? 0 : undefined,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 22,
      }}
      className={`
        absolute
        ${position}
        w-[280px]
        text-left
        z-20
      `}
    >
      <div
        className='
          relative
          h-[420px]
          overflow-hidden
          cursor-pointer
          rounded-[2rem]
          border-[3px]
          border-[#2f221d]
          shadow-[0_8px_0_#2f221d,0_28px_42px_rgba(35,18,12,0.18)]
        '
        style={{
          background: `linear-gradient(
            165deg,
            ${recipe.color} 0%,
            ${recipe.color}dd 35%,
            #d48a5a 100%
          )`,
        }}
      >
        {/* PAPER TEXTURE */}

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

        {/* CANVAS */}

        <div
          className='
            absolute
            inset-0
            opacity-[0.06]
            mix-blend-overlay
          '
          style={{
            backgroundImage: "url('/images/canvas/canvas.jfif')",
            backgroundSize: "cover",
          }}
        />

        {/* INNER FRAME */}

        <div
          className='
            absolute
            inset-[12px]
            rounded-[1.5rem]
            border
            border-white/10
          '
        />

        {/* PIN */}

        <div
          className='
            absolute
            left-1/2
            top-4
            -translate-x-1/2
            z-20
            text-[#ffe8c7]
          '
        >
          <Pin size={18} />
        </div>

        {/* ARTWORK AREA */}

        <div
          className='
    absolute
    inset-0
  '
        >
          <img
            src='/images/products/board/cartoonish-bag.png'
            alt=''
            className='
      absolute
      inset-0
      h-full
      w-full
      object-cover
      opacity-45
      scale-105
    '
          />

          <div
            className='
      absolute
      inset-0
      bg-gradient-to-t
      from-[#1d1512]
      via-transparent
      to-black/10
    '
          />

          <div
            className='
      absolute
      inset-0

      opacity-[0.08]
      mix-blend-overlay
    '
            style={{
              backgroundImage:
                "url('/images/halftone-dots/monochrome-dots.jfif')",
              backgroundSize: "cover",
            }}
          />
        </div>

        {/* CONTENT */}

        <div
          className='
    absolute
    bottom-8
    left-8
    right-8
    z-20
  '
        >
          <p
            className='
      text-[10px]
      uppercase
      tracking-[0.35em]
      text-[#ffe5c8]
    '
          >
            {recipe.badge}
          </p>

          <h3
            className='
      mt-3

      text-[3rem]
      leading-[0.82]
      tracking-[-0.06em]

      text-white
    '
          >
            {recipe.name}
          </h3>

          <div
            className='
      mt-5
      h-px
      w-24
      bg-white/20
    '
          />

          <div
            className='
      mt-5
      flex
      items-center
      gap-3
    '
          >
            <div
              className='
        h-3
        w-3
        rounded-full
        bg-[#ffd35e]
      '
            />

            <span
              className='
        text-sm
        font-medium
        text-white/85
      '
            >
              {recipe.analytics.protein} protein
            </span>
          </div>

          <p
            className='
      mt-3

      text-[11px]
      uppercase
      tracking-[0.22em]

      text-white/75
    '
          >
            {recipe.ingredientSpotlights
              .slice(0, 3)
              .map((item) => item.title)
              .join(" • ")}
          </p>
        </div>
      </div>
    </motion.button>
  );
}
