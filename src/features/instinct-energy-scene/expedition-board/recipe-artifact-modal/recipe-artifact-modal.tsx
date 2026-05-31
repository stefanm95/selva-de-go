import type { Product } from "@/types/product";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { ArtifactLeftPanel } from "./artifact-left-panel";
import { ArtifactRightPanel } from "./artifact-right-panel";

type RecipeArtifactModalProps = {
  recipe: Product | null;
  onClose: () => void;
};

export function RecipeArtifactModal({
  recipe,
  onClose,
}: RecipeArtifactModalProps) {
  return (
    <AnimatePresence>
      {recipe && (
        <>
          <motion.div
            onClick={onClose}
            className='
              fixed
              inset-0
              z-[100]
              bg-black/60
              backdrop-blur-md
            '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
            }}
            transition={{
              duration: 0.35,
            }}
            className='
              fixed
              left-1/2
              top-[calc(60px+2rem)]
              -translate-x-1/2

              w-[min(1400px,92vw)]
             h-[min(820px,78vh)]
              z-[110]

              overflow-hidden

              rounded-[2.5rem]

              border-[4px]
              border-[#2f221d]

              bg-[#efe3cf]

              shadow-[0_30px_80px_rgba(0,0,0,0.35)]
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

            {/* close */}

            <button
              onClick={onClose}
              className='
  absolute
  right-6
  top-6
  z-30
cursor-pointer
  flex
  h-10
  w-10
  items-center
  justify-center

  rounded-[1rem]

  border-2
  border-[#2f221d]

  bg-[#f6e7c7]

  shadow-[2px_2px_0_#2f221d]

  transition-all

  hover:-translate-y-[2px]
'
            >
              <X size={18} />
            </button>

            <div
              className='
                grid
                h-full
                grid-cols-[42%_58%]
              '
            >
              <ArtifactLeftPanel recipe={recipe} />

              <ArtifactRightPanel recipe={recipe} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
