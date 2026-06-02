import { useNavigationMode } from "@/features/navigation/use-navigation-mode";
import { motion } from "framer-motion";

import { OpeningBrand } from "./opening-brand";
import { OpeningLinks } from "./opening-links";

import { useLenis } from "@/app/lenis-context";
import { OpeningNavActions } from "./opening-nav-actions";

export function OpeningNavigation() {
  const { isCompact } = useNavigationMode();

  const { scrollTo } = useLenis();

  const scrollToSection = (sectionId: string) => {
    scrollTo(`#${sectionId}`);
  };

  return (
    <motion.header
      initial={false}
      animate={{
        opacity: isCompact ? 0 : 1,
        y: isCompact ? 0 : -20,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
          hidden
          lg:block
          
          absolute
          inset-x-0
          top-0
          z-[120]
        "
    >
      <div
        className="
            mx-auto
            flex
            items-center
            justify-between
            py-4
            
            px-6
            md:px-10
            xl:px-16
          "
      >
        <OpeningBrand />

        <OpeningLinks onNavigate={scrollToSection} />

        <OpeningNavActions />
      </div>
    </motion.header>
  );
}
