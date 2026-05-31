import { FadeIn } from "@/components/motion";

import { useNavigationMode } from "@/features/navigation/use-navigation-mode";
import { motion } from "framer-motion";

import { OpeningBrand } from "./opening-brand";
import { OpeningLinks } from "./opening-links";

import { OpeningNavActions } from "./opening-nav-actions";
import { useLenis } from "@/app/lenis-context";

export function OpeningNavigation() {
  const { isCompact } = useNavigationMode();

  const { scrollTo } = useLenis();

  const scrollToSection = (sectionId: string) => {
    scrollTo(`#${sectionId}`);
  };

  return (
    <FadeIn delay={0.05}>
      <motion.header
        initial={false}
        animate={{
          opacity: isCompact ? 0 : 1,
          y: isCompact ? -20 : 0,
          pointerEvents: isCompact ? "none" : "auto",
        }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className='
          hidden
          lg:block
          
          absolute
          left-0
          top-0
          z-[120]
          w-full
        '
      >
        <div
          className='
            mx-auto
            flex
            min-h-[92px]
            max-w-[1680px]
            items-center
            justify-between
            translate-x-[3rem]
            translate-y-[1rem]
            px-6
            md:px-10
            xl:px-16
          '
        >
          <OpeningBrand />

          <OpeningLinks onNavigate={scrollToSection} />

          <OpeningNavActions />
        </div>
      </motion.header>
    </FadeIn>
  );
}
