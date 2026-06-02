import { Float } from "@/components/motion";
import { motion } from "framer-motion";

export function OpeningBrand() {
  return (
    <Float intensity={4}>
      <a
        href='/'
        className='
                  group
                  relative
                  flex
                  flex-col
                  pl-1
                '
      >
        {/* MICRO LABEL SYSTEM */}
        <div
          className='
                    relative
                    top-4
                    mb-0
                    flex
                    items-center
                    gap-1.5
                  '
        >
          <span
            className='
                  text-[0.54rem]
                  font-black
                  uppercase
                  leading-none
                  tracking-[0.34em]
                  text-[var(--brand-berry)]/72
                '
          >
            EST. 2026
          </span>

          <span
            className='
                  mt-[1px]
                  h-[1px]
                  w-5
                  bg-[var(--brand-berry)]/18
                '
          />

          <span
            className='
                    text-[0.54rem]
                    font-black
                    uppercase
                    leading-none
                    tracking-[0.24em]
                    text-[var(--brand-berry)]/42
                  '
          >
            FIELD ISSUE Nº 03
          </span>
        </div>

        {/* BRAND ROW */}
        <div
          className='
            flex
            items-center
            gap-1
          '
        >
          {/* LOGO */}
          <motion.img
            src='/images/logo.png'
            alt='Selva De Go'
            whileHover={{
              rotate: -2,
              scale: 1.04,
            }}
            transition={{
              duration: 0.35,
            }}
            className='
              h-[8.25rem]
              w-[8.25rem]
              -mr-2
              shrink-0
              object-contain
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
                text-[1.72rem]
                leading-[0.9]
                tracking-[-0.09em]
                text-[var(--ink-muted)]
              '
            >
              SELVADEGO
            </span>

            <span
              className='
                mt-[0.22rem]
                pl-[0.08rem]
                text-[0.56rem]
                font-black
                uppercase
                tracking-[0.34em]
                text-[#6f5a50]
              '
            >
              Wild Nutrition Supply
            </span>
          </div>
        </div>
      </a>
    </Float>
  );
}
