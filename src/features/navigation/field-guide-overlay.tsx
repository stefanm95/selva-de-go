import { AnimatePresence, motion } from "framer-motion";

import { FieldGuideEntry } from "./field-guide-entry";
import { menuItems } from "./menu-items";

type FieldGuideOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function FieldGuideOverlay({ open, onClose }: FieldGuideOverlayProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='
              fixed
              inset-0

              z-[400]

              bg-[#120d0a]/80
              backdrop-blur-md
            '
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='
              fixed
              inset-0

              z-[401]

              overflow-y-auto
            '
          >
            <div
              className='
                absolute
                inset-0

                bg-[radial-gradient(circle_at_top,#2b1a13_0%,#120d0a_70%)]
              '
            />

            <div
              className='
                relative
                z-10

                mx-auto

                min-h-screen
                max-w-[1200px]

                px-8
                py-16

                md:px-12
                md:py-24
              '
            >
              <motion.div
                initial={{
                  y: 30,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: 30,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.45,
                }}
              >
                <div className='mb-24'>
                  <p
                    className='
                      text-[11px]
                      uppercase

                      tracking-[0.45em]

                      text-[#efe2d1]/60
                    '
                  >
                    Selva De Go
                  </p>

                  <h1
                    className='
                      mt-6

                      font-poster

                      text-[clamp(4rem,9vw,9rem)]

                      leading-none

                      text-[#efe2d1]
                    '
                  >
                    FIELD GUIDE
                  </h1>

                  <div
                    className='
                      mt-8

                      flex
                      flex-wrap
                      gap-4

                      text-xs

                      uppercase

                      tracking-[0.25em]

                      text-[#efe2d1]/45
                    '
                  >
                    <span>Issue Nº03</span>

                    <span>•</span>

                    <span>Expedition Archive</span>
                  </div>
                </div>

                <div>
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{
                        opacity: 0,
                        y: 24,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.08 + index * 0.06,
                      }}
                    >
                      <FieldGuideEntry
                        number={`${index + 1}`.padStart(2, "0")}
                        title={item.title}
                        description={item.description}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
