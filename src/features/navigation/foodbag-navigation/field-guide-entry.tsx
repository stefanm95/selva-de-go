import { motion } from "framer-motion";

type FieldGuideEntryProps = {
  number: string;
  title: string;
  description: string;
  onClick?: () => void;
};

export function FieldGuideEntry({
  number,
  title,
  description,
  onClick,
}: FieldGuideEntryProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ x: 12 }}
      whileTap={{ scale: 0.985 }}
      className='
        group
        w-full
        cursor-pointer

        border-b
        border-[#e8d8c3]/15

        py-6
        md:py-8

        text-left
      '
    >
      <div
        className='
          grid
          grid-cols-[48px_1fr]
          md:grid-cols-[120px_1fr]

          items-center

          gap-4
          md:gap-6
        '
      >
        <div
          className='
            font-poster

            text-[1.25rem]
            md:text-[3rem]

            leading-none

            text-[#e8d8c3]/25
          '
        >
          {number}
        </div>

        <div>
          <h3
            className='
              font-poster

              text-[1rem]
              sm:text-[1.1rem]

              md:text-[clamp(1.8rem,3vw,3rem)]

              uppercase
              leading-[1.05]

              text-[#efe2d1]
            '
          >
            {title}
          </h3>

          <p
            className='
              hidden
              md:block

              mt-3

              max-w-[560px]

              text-sm
              leading-relaxed

              text-[#efe2d1]/60
            '
          >
            {description}
          </p>
        </div>
      </div>
    </motion.button>
  );
}
