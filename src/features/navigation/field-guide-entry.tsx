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
      className='
        group
        w-full
        cursor-pointer
translate-y-1/2
        border-b
        border-[#e8d8c3]/15

        py-4
        md:py-8

        text-left
      '
    >
      <div
        className='
    grid

    grid-cols-[36px_1fr]

    md:grid-cols-[120px_1fr]

    items-center

    gap-2
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

  text-[0.95rem]
  sm:text-[1.05rem]

  md:text-[clamp(1.8rem,3vw,3rem)]

  uppercase
  leading-none

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
