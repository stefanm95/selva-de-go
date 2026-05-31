import { motion } from "framer-motion";

type NavigationBrandProps = {
  isCompact: boolean;
};

export function NavigationBrand({ isCompact }: NavigationBrandProps) {
  return (
    <div>
      <motion.a
        href='/'
        initial={false}
        animate={{
          opacity: isCompact ? 1 : 0.7,
          scale: isCompact ? 1 : 0.96,
        }}
        transition={{
          duration: 0.45,
        }}
        className='
              group

              relative

              flex
              items-center

              gap-3
            '
      >
        {/* ICON */}
        <motion.img
          src='/images/logo.png'
          alt='Selva De Go'
          className='
                h-[8.25rem]
                w-auto

                transition-transform
                duration-500

                group-hover:scale-105
              '
        />

        {/* TYPO */}
        <div
          className='
                flex
                flex-col
              '
        >
          <span
            className='
                  display

                  text-[1.02rem]

                  leading-none
                  tracking-[-0.08em]

                  text-[#2b211d]
                '
          >
            SELVADEGO
          </span>

          <span
            className='
                  mt-[0.14rem]

                  text-[0.5rem]
                  font-black
                  uppercase

                  tracking-[0.3em]

                  text-[#7a3b45]/62
                '
          >
            Wild Nutrition Supply
          </span>
        </div>
      </motion.a>
    </div>
  );
}
