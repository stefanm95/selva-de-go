import { motion } from "framer-motion";
import { useNavigationMode } from "./use-navigation-mode";
import { NavigationBrand } from "./navigation-brand";
import { NavigationLinks } from "./navigation-links";
import { NavigationActions } from "./navigtion-actions";

export function SiteNavigation() {
  const { isCompact } = useNavigationMode();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.header
      initial={false}
      animate={{
        opacity: isCompact ? 1 : 0,
        y: isCompact ? 0 : -24,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        fixed
        left-0
        top-0
        z-[140]

        w-full

        ${isCompact ? "pointer-events-auto" : "pointer-events-none"}
      `}
    >
      {/* ================================
          NAV SHELL
      ================================= */}
      <div
        className='
          border-b
          border-[#2b211d]/8

          bg-[#f6eadf]/74

          backdrop-blur-[18px]
        '
      >
        <div
          className='
            relative

            mx-auto

            flex
            h-[78px]
            max-w-[1720px]

            items-center
            justify-between

            px-6
            md:px-10
            xl:px-16
          '
        >
          <NavigationBrand isCompact={isCompact} />

          <NavigationLinks onNavigate={scrollToSection} />

          <NavigationActions />
        </div>
      </div>
    </motion.header>
  );
}
