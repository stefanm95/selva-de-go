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
            transition={{ duration: 0.6 }}
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
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className='
              fixed
              inset-0

              z-[401]

              h-dvh
              overflow-hidden
            '
          >
            <div
              className='
                absolute
                inset-0

                bg-[radial-gradient(circle_at_top,#2b1a13_0%,#120d0a_70%)]
              '
            />

            {/* temporary grain */}
            <div
              className='
                pointer-events-none

                absolute
                inset-0

                opacity-[0.03]

                bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)]

                [background-size:12px_12px]
              '
            />

            <button
              onClick={onClose}
              className='
                fixed
                top-4
right-4

md:top-8
md:right-8

                z-[402]
cursor-pointer
                group

                text-[#efe2d1]/70

                transition-colors

                hover:text-[#efe2d1]
              '
            >
              <span
                className='
                  text-[11px]
                  uppercase

                  tracking-[0.35em]
                '
              >
                Close
              </span>

              <div
                className='
                  mt-2

                  text-3xl
                    md:text-4xl
                  leading-none

                  transition-transform
                  duration-300

                  group-hover:rotate-90
                '
              >
                ×
              </div>
            </button>

            <div
              className='
                relative
                z-10
left-5
                mx-auto
top-12
                h-full
                max-w-[1500px]

                px-5
xl:top-0
                md:px-16
                xl:px-24
              '
            >
              <div
                className='
                  grid
                  h-full

                  lg:grid-cols-[380px_1fr]
                  lg:gap-20
                '
              >
                {/* LEFT COLUMN */}

                <motion.div
                  initial={{
                    x: -40,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.1,
                    duration: 0.6,
                  }}
                  className='
                    hidden
                    relative
                    left-2
                    lg:flex
                    lg:flex-col
                    lg:justify-between

                    py-20

                    border-r
                    border-[#efe2d1]/10

                    pr-12
                  '
                >
                  <div>
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

                        text-[clamp(4rem,7vw,7rem)]

                        leading-none

                        text-[#efe2d1]
                      '
                    >
                      FIELD
                      <br />
                      GUIDE
                    </h1>

                    <div
                      className='
                        mt-8

                        space-y-2

                        text-xs
                        uppercase

                        tracking-[0.25em]

                        text-[#efe2d1]/45
                      '
                    >
                      <p>Issue Nº03</p>
                      <p>Collector Edition</p>
                      <p>Spring 2026</p>
                    </div>
                  </div>

                  <p
                    className='
                      max-w-[220px]

                      text-sm
                      leading-relaxed

                      text-[#efe2d1]/45
                    '
                  >
                    Explore the complete Selva De Go world through stories,
                    ingredients, rituals and philosophy.
                  </p>
                </motion.div>

                {/* RIGHT COLUMN */}

                <div
                  className='
                    flex
  h-full
  flex-col

  justify-start
  pt-20

  lg:justify-center
  lg:py-16
                  '
                >
                  {/* Mobile header */}

                  <div className='mb-8 lg:hidden'>
                    <p
                      className='
      text-[10px]
      uppercase

      tracking-[0.4em]

      text-[#efe2d1]/60
    '
                    >
                      Selva De Go
                    </p>

                    <h1
                      className='
      mt-3

      font-poster

      text-[2.75rem]

      leading-none

      text-[#efe2d1]
    '
                    >
                      FIELD GUIDE
                    </h1>

                    <p
                      className='
      mt-2

      text-[10px]

      uppercase

      tracking-[0.25em]

                         text-[#efe2d1]/45
    '
                    >
                      Issue Nº03
                    </p>
                  </div>

                  <div
                    className='
                      w-full

                     max-w-full
                    lg:max-w-[900px]

                      lg:ml-auto
                    '
                  >
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
                          delay: 0.4 + index * 0.08,
                        }}
                      >
                        <FieldGuideEntry
                          number={item.number}
                          title={item.title}
                          description={item.description}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
