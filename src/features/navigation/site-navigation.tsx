import { useLenis } from "@/app/lenis-context";
import { motion } from "framer-motion";
import { NavigationBrand } from "./navigation-brand";
import { NavigationLinks } from "./navigation-links";
import { NavigationActions } from "./navigtion-actions";
import { useNavigationMode } from "./use-navigation-mode";

export function SiteNavigation() {
  const { isCompact } = useNavigationMode();

  const { scrollTo } = useLenis();

  const scrollToSection = (sectionId: string) => {
    scrollTo(`#${sectionId}`);
  };

  return (
    <motion.header
      initial={false}
      animate={{
        opacity: isCompact ? 1 : 0,
        y: isCompact ? 0 : -20,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        fixed
        inset-x-0
        top-0
        z-[140]

        ${isCompact ? "pointer-events-auto" : "pointer-events-none"}
      `}
    >
      <div
        className="
          border-b
          border-[var(--border)]

          bg-[var(--surface-paper)]/92

          backdrop-blur-md
        "
      >
        <div
          className="
            mx-auto

            grid
            h-[72px]

            max-w-[1440px]

            grid-cols-[auto_1fr_auto]
            items-center

            gap-8

            px-6
            md:px-10
            xl:px-16
          "
        >
          <NavigationBrand isCompact={isCompact} />

          <NavigationLinks onNavigate={scrollToSection} />

          <NavigationActions />
        </div>
      </div>
    </motion.header>
  );
}
