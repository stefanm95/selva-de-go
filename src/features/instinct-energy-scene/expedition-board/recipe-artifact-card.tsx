import type { Product } from "@/types/product";
import { motion } from "framer-motion";
import { Pin } from "lucide-react";

type RecipeArtifactCardProps = {
  recipe: Product;

  isSelected?: boolean;

  onClick?: () => void;
};

const positions: Record<string, string> = {
  "wild-game-salmon": "left-[8%] top-[12%] rotate-[-4deg]",

  "beef-lamb": "left-[38%] top-[46%] rotate-[2deg]",

  "beef-chicken": "right-[8%] top-[22%] rotate-[5deg]",
};

export default function RecipeArtifactCard({
  recipe,
  onClick,
  isSelected,
}: RecipeArtifactCardProps) {
  const position = positions[recipe.id] ?? "";

  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.08,
        rotate: 0,
        zIndex: 50,
      }}
      animate={{
        scale: isSelected ? 1.08 : 1,
        rotate: isSelected ? 0 : undefined,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={`
        absolute
        ${position}
        group
        w-[260px]
        text-left
        cursor-pointer
      `}
    >
      <div
        className='
          relative
          overflow-hidden
          rounded-sm
          border
          border-[#6b1f2b]/20
          bg-[#f4ead7]
          p-6
          shadow-[0_18px_40px_rgba(0,0,0,0.18)]
        '
      >
        <div
          className="
            absolute
            inset-0
            opacity-20
            mix-blend-multiply
            bg-[url('/textures/paper-grain.png')]
            bg-cover
          "
        />

        <div
          className='
            absolute
            right-3
            top-3
            rotate-12
            text-[#8d2036]
          '
        >
          <Pin size={18} />
        </div>

        <div className='relative z-10'>
          <p
            className='
              mb-2
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-[#8d2036]
            '
          >
            Recipe Archive
          </p>

          <h3
            className='
              mb-3
              font-black
              uppercase
              leading-none
              text-[#4f1823]
            '
          >
            {recipe.name}
          </h3>

          <div
            className='
              mb-4
              inline-block
              border-b
              border-[#8d2036]/30
              pb-1
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#8d2036]
            '
          >
            {recipe.badge}
          </div>

          <div
            className='
              mb-4
              text-3xl
              font-black
              text-[#4f1823]
            '
          >
            {recipe.analytics?.protein}
          </div>

          <div
            className='
              space-y-1
              text-xs
              uppercase
              tracking-[0.18em]
              text-[#6b1f2b]
            '
          >
            {recipe.ingredientSpotlights?.slice(0, 3).map((spotlight) => (
              <div key={spotlight.title}>
                <div>{spotlight.title}</div>
                <div>{spotlight.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.button>
  );
}
