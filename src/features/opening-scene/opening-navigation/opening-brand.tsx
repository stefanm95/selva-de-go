import { motion } from "framer-motion";

export function OpeningBrand() {
  return (
    <div>
      <a
        href="/"
        className="
      group
      flex
      items-center
      gap-1
    "
      >
        <motion.img
          src="/images/logo.png"
          alt="SelvaDeGo"
          whileHover={{
            rotate: -2,
            y: -2,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
        h-[6.5rem]
        w-[6.5rem]
        shrink-0
        object-contain
      "
        />

        <div
          className="
        flex
        flex-col
      "
        >
          <span
            className="
          stamp-text

          text-[0.42rem]

          text-[var(--brand-plum)]
        "
          >
            FIELD GUIDE Nº 03
          </span>

          <span
            className="
          display

          text-[2.3rem]

          leading-[0.82]

          tracking-[-0.07em]

          text-[var(--ink)]
        "
          >
            SELVADEGO
          </span>

          <div
            className="
          mt-1

          flex
          items-center
          gap-2
        "
          >
            <span
              className="
            h-[2px]
            w-8

            bg-[var(--brand-sun)]
          "
            />

            <span
              className="
            text-[0.52rem]
            font-black
            uppercase

            tracking-[0.22em]

            text-[var(--brand-forest)]
          "
            >
              Wild Nutrition Supply
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
