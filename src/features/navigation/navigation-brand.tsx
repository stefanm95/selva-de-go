import { motion } from "framer-motion";

type NavigationBrandProps = {
  isCompact: boolean;
};

export function NavigationBrand({ isCompact }: NavigationBrandProps) {
  return (
    <motion.a
      href="/"
      initial={false}
      animate={{
        opacity: isCompact ? 1 : 0.85,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        group
        flex
        items-center
        gap-2.5
      "
    >
      <motion.img
        src="/images/logo.png"
        alt="SelvaDeGo"
        whileHover={{
          rotate: -2,
          y: -1,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          h-12
          w-12
          shrink-0
          object-contain
        "
      />

      <div
        className="
          flex
          flex-col
          leading-none
        "
      >
        <span
          className="
            display
            text-[1rem]
            tracking-[-0.06em]
            text-[var(--ink)]
          "
        >
          SELVADEGO
        </span>

        <span
          className="
            stamp-text
            mt-1

            text-[0.42rem]

            text-[var(--brand-plum)]
          "
        >
          FIELD GUIDE
        </span>
      </div>
    </motion.a>
  );
}
