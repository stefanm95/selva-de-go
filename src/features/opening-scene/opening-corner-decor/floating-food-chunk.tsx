import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Float } from "@/components/motion";
import { Magnetic } from "@/components/motion";

import { MenuCard } from "./menu-card";
import { menuItems } from "./menu-items";

export function FloatingFoodChunk() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className='
                fixed
                inset-0

                z-[1000000]

                bg-[#120d0a]/60
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

                z-[1000001]

                flex
                items-center
                justify-center

                px-10
              '
            >
              <motion.div
                initial={{
                  y: 40,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: 40,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
                className='
                  w-full
                  max-w-[1320px]
                '
              >
                <div className='mb-14 text-center'>
                  <p
                    className='
                      text-[11px]
                      uppercase
                      tracking-[0.45em]

                      text-[#efe2d1]/70
                    '
                  >
                    Selvadego Field Guide
                  </p>

                  <h2
                    className='
                      mt-4

                      font-poster

                      text-[clamp(4rem,8vw,8rem)]

                      leading-none

                      text-[#efe2d1]
                    '
                  >
                    EXPLORE
                  </h2>
                </div>

                <div
                  className='
                    grid
                    grid-cols-4
                    gap-8
                  '
                >
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                    >
                      <MenuCard {...item} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div
        className='
          fixed
          top-[32vw]
          right-[11vw]

          z-[9999]

          pointer-events-auto
        '
      >
        <Float intensity={12}>
          <Magnetic strength={35} rotation={8}>
            <motion.button
              type='button'
              aria-label='Open Navigation'
              onClick={() => setOpen((v) => !v)}
              whileHover={{
                scale: 1.08,
                rotate: -4,
                y: -5,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className='
                group
                relative

                h-[90px]
                w-[90px]

                cursor-pointer
              '
            >
              <motion.div
                className='
                  absolute
                  left-1/2
                  top-full

                  h-8
                  w-16

                  -translate-x-1/2

                  rounded-full

                  bg-black/20

                  blur-xl
                '
                animate={{
                  scale: open ? 1.4 : 1,
                }}
              />

              <div
                className='
                  absolute
                  inset-[-18px]

                  rounded-full

                  bg-[#d96c3d]/20

                  blur-2xl

                  opacity-0

                  transition-opacity

                  group-hover:opacity-100
                '
              />

              <motion.img
                src='/images/3d/selvadego-food-bag.png'
                alt='Navigation'
                draggable={false}
                animate={{
                  rotate: open ? -10 : 0,
                  scale: open ? 1.12 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                className='
                  relative

                  h-full
                  w-full

                  object-contain

                  drop-shadow-[0_22px_32px_rgba(0,0,0,0.28)]
                '
              />
            </motion.button>
          </Magnetic>
        </Float>
      </div>
    </>
  );
}
