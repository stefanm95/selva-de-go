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

        border-b
        border-[#e8d8c3]/15

        py-8

        text-left
      '
    >
      <div
        className='
          grid
          gap-6

          md:grid-cols-[120px_1fr]
        '
      >
        <div
          className='
            font-poster

            text-[3rem]
            leading-none

            text-[#e8d8c3]/25

            transition-all
            duration-300

            group-hover:text-[#d96c3d]
            group-hover:translate-x-1
          '
        >
          {number}
        </div>

        <div>
          <h3
            className='
              font-poster

              text-[clamp(1.8rem,3vw,3rem)]

              uppercase
              leading-none

              text-[#efe2d1]

              transition-colors
              duration-300

              group-hover:text-[#d96c3d]
            '
          >
            {title}
          </h3>

          <p
            className='
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
