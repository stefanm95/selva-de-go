import type { Product } from "@/types/product";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RecipeShowcaseInspector } from "./recipe-showcase-inspector";

type RecipeShowcaseLeftPanelProps = {
  recipe: Product;
};

export function RecipeShowcaseLeftPanel({
  recipe,
}: RecipeShowcaseLeftPanelProps) {
  const [showInspector, setShowInspector] = useState(false);

  const [zoomPosition, setZoomPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      className='
        relative
        flex
        min-h-[30vh]
        flex-col
        items-center
        justify-center
        gap-6
        overflow-visible
      '
    >
      {/* COLOR AURA */}

      <div
        className='
          absolute
          inset-0
          opacity-30
          blur-[160px]
        '
        style={{
          background: recipe.color,
        }}
      />

      {/* RECIPE LABEL */}

      <div
        className='
          absolute
          left-8
          top-8

          z-30

          rotate-[-4deg]

          border-[3px]
          border-[var(--ink)]

          bg-[var(--brand-sun)]

          px-5
          py-3

          shadow-[4px_4px_0_var(--ink)]
        '
      >
        <p
          className='
            text-[10px]
            font-black
            uppercase
            tracking-[0.25em]

            text-[var(--ink)]
          '
        >
          Selva Formula
        </p>
      </div>

      {/* PRODUCT IMAGE */}

      <AnimatePresence mode='wait'>
        <motion.img
          key={recipe.id}
          src={recipe.ingredientsImage}
          alt={recipe.name}
          onMouseEnter={() => setShowInspector(true)}
          onMouseLeave={() => setShowInspector(false)}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();

            setZoomPosition({
              x: ((e.clientX - rect.left) / rect.width) * 100,
              y: ((e.clientY - rect.top) / rect.height) * 100,
            });
          }}
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.92,
            y: -20,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className='
            relative
            z-20

            w-[240px]
            md:w-[240px]
            max-w-full

            cursor-pointer

            object-contain

            drop-shadow-[0_35px_70px_rgba(0,0,0,0.35)]
          '
        />
      </AnimatePresence>

      {/* TITLE */}

      <AnimatePresence mode='wait'>
        <motion.div
          key={`${recipe.id}-content`}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -10,
          }}
          transition={{
            duration: 0.35,
          }}
          className='
            relative
            z-20

            text-center
          '
        >
          <p
            className='
              text-[11px]
              uppercase
              tracking-[0.4em]

              text-[var(--brand-plum)]/60
            '
          >
            Freeze Dried Formula
          </p>

          <h2
            className='
              mt-4

              text-[clamp(3.5rem,6vw,5.5rem)]

              leading-[0.82]
              tracking-[-0.08em]

              text-[var(--brand-forest)]
            '
          >
            {recipe.name}
          </h2>

          <p
            className='
              mx-auto
              mt-4
              max-w-md

              text-xl
              font-medium

              text-[var(--text-plum)]/80
            '
          >
            {recipe.highlight}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* DECORATIVE STAMP */}

      <RecipeShowcaseInspector
        image={recipe.ingredientsImage ?? ""}
        x={zoomPosition.x}
        y={zoomPosition.y}
        visible={showInspector}
      />

      <div
        className='
          absolute
          bottom-12
          right-10

          rotate-[8deg]

          border-[3px]
          border-[var(--ink)]/20

          px-5
          py-4

          text-[10px]
          font-black
          uppercase
          tracking-[0.25em]

          text-[var(--brand-plum)]/35
        '
      >
        Since 1970
      </div>
    </div>
  );
}
