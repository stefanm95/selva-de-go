import { motion, AnimatePresence } from "framer-motion";

type RecipeShowcaseInspectorProps = {
  image: string;
  x: number;
  y: number;
  visible: boolean;
};

export function RecipeShowcaseInspector({
  image,
  x,
  y,
  visible,
}: RecipeShowcaseInspectorProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
            rotate: 6,
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: 2,
          }}
          exit={{
            opacity: 0,
            x: 40,
            rotate: 6,
          }}
          transition={{
            duration: 0.25,
          }}
          className='
            absolute
            right-[-120px]
            top-[60px]

            z-50

            h-[500px]
            w-[380px]

            rotate-[2deg]

            overflow-hidden

            border-[3px]
            border-[#2f221d]

            bg-[#f7eed8]

            shadow-[8px_8px_0_#2f221d]
          '
        >
          {/* TAPE */}

          <div
            className='
              absolute
              -top-4
              left-1/2

              h-8
              w-32

              -translate-x-1/2

              rotate-[-6deg]

              bg-[#f5d9a5]/70
            '
          />

          {/* HEADER */}

          <div className='relative z-20 p-5'>
            <p
              className='
                text-[10px]
                font-black
                uppercase
                tracking-[0.35em]

                text-[#8d2036]
              '
            >
              FIELD NOTE #03
            </p>

            <h3
              className='
                mt-2

                text-2xl

                text-[#2f221d]
              '
            >
              Field Inspection
            </h3>

            <p
              className='
                mt-1

                text-xs
                uppercase
                tracking-[0.25em]

                text-[#6b1f2b]/60
              '
            >
              Ingredient Label Analysis
            </p>
          </div>

          {/* ZOOM WINDOW */}

          <div
            className='
              relative
              mx-5

              h-[320px]

              overflow-hidden

              border-[2px]
              border-[#2f221d]

              bg-white
            '
          >
            <div
              className='
    absolute
    inset-0
  '
              style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "280%",
                backgroundPosition: `${x}% ${y}%`,
              }}
            />
          </div>

          {/* FOOTER */}

          <div className='px-5 py-4'>
            <div
              className='
                border-t
                border-[#2f221d]/10

                pt-4
              '
            >
              <p
                className='
                  text-[10px]
                  uppercase
                  tracking-[0.25em]

                  text-[#6b1f2b]/60
                '
              >
                Move cursor to inspect details
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
