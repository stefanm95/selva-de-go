import { motion } from "framer-motion";

import { Float } from "@/components/motion";
import { Magnetic } from "@/components/motion";

type FoodBagTriggerProps = {
  open: boolean;
  onToggle: () => void;
};

export function FoodBagTrigger({ open, onToggle }: FoodBagTriggerProps) {
  return (
    <Float intensity={12}>
      <Magnetic strength={35} rotation={8}>
        <motion.button
          type='button'
          aria-label='Open Navigation'
          onClick={onToggle}
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

              blur-sm
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

              blur-sm

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
  );
}
