import { FadeIn, Float } from "@/components/motion";

import { Button } from "@/components/ui/button";
import { useNavigationMode } from "@/features/navigation/use-navigation-mode";
import { motion } from "framer-motion";

import { Heart, Search, ShoppingBag, User } from "lucide-react";

const links = ["Shop", "Formulas", "Journal", "About"];

export function OpeningNavigation() {
  const { isCompact } = useNavigationMode();
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
        className="
          absolute
          left-0
          top-0
          z-[120]
          w-full
        "
      >
        <div
          className="
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
          "
        >
          {/* ======================================
            BRAND SIDE
            ====================================== */}
          <Float intensity={4}>
            <a
              href="/"
              className="
                  group

                  relative

                  flex
                  flex-col

                  pl-1
                "
            >
              {/* MICRO LABEL SYSTEM */}
              <div
                className="
                    mb-[0.72rem]

                    flex
                    items-center

                    gap-2.5
                  "
              >
                <span
                  className="
                  text-[0.54rem]
                  font-black
                  uppercase
                
                  leading-none
                  tracking-[0.34em]
                
                  text-[#7a3b45]/72
                "
                >
                  EST. 2026
                </span>

                <span
                  className="
                  mt-[1px]

                  h-[1px]
                  w-5

                  bg-[#7a3b45]/18
                "
                />

                <span
                  className="
                    text-[0.54rem]
                    font-black
                    uppercase

                    leading-none
                    tracking-[0.24em]

                    text-[#7a3b45]/42
                  "
                >
                  FIELD ISSUE Nº 03
                </span>
              </div>

              {/* BRAND ROW */}
              <div
                className="
                    flex
                    items-center

                    gap-[0.72rem]
                  "
              >
                {/* SYMBOL */}
                <div
                  className="
                      relative

                      flex
                      h-[3.15rem]
                      w-[3.15rem]

                      items-center
                      justify-center

                      rounded-full

                      border-[2px]
                      border-[#2d211d]

                      bg-[#d96c3d]

                      shadow-[0_4px_0_#2d211d]

                      transition-all
                      duration-500

                      group-hover:rotate-[-10deg]
                      group-hover:scale-[1.02]
                    "
                >
                  {/* INNER RING */}
                  <div
                    className="
                        absolute
                        inset-[4px]

                        rounded-full

                        border
                        border-[#2d211d]/14
                      "
                  />

                  {/* CENTER DOT */}
                  <div
                    className="
                    relative
                    z-10

                    h-[0.72rem]
                    w-[0.72rem]

                    rounded-full

                    bg-[#fff4ea]
                  "
                  />

                  {/* PRINT SHINE */}
                  <div
                    className="
                        absolute
                        left-[18%]
                        top-[16%]

                        h-[28%]
                        w-[54%]

                        rounded-full

                        bg-white/16

                        blur-[4px]
                      "
                  />
                </div>

                {/* TYPO */}
                <div
                  className="
                   flex
                   flex-col
                 "
                >
                  <span
                    className="
                     display
                 
                     text-[1.72rem]
                 
                     leading-[0.9]
                     tracking-[-0.09em]
                 
                     text-[#2b211d]
                   "
                  >
                    Selva de Go
                  </span>

                  <span
                    className="
                     mt-[0.22rem]

                     pl-[0.08rem]

                     text-[0.56rem]
                     font-black
                     uppercase

                     tracking-[0.34em]

                     text-[#6f5a50]
                   "
                  >
                    Wild Nutrition Supply
                  </span>
                </div>
              </div>
            </a>
          </Float>

          {/* ======================================
              CENTER NAV
          ====================================== */}
          <nav
            className="
              hidden

              flex-1
              items-center
              justify-center

              gap-12

              pl-24
              pr-12

              lg:flex
            "
          >
            {links.map((link) => (
              <a
                key={link}
                href="/"
                className="
                  group

                  relative

                  text-[0.68rem]
                  font-black
                  uppercase

                  tracking-[0.34em]

                  text-[#3d312c]/72

                  transition-all
                  duration-300

                  hover:text-[#7a3b45]
                "
              >
                {link}

                <span
                  className="
                    absolute
                    bottom-[-0.7rem]
                    left-0

                    h-[2px]
                    w-0

                    bg-[#7a3b45]

                    transition-all
                    duration-300

                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </nav>

          {/* ======================================
              UTILITY STRIP
          ====================================== */}
          <div
            className="
              flex
              items-center

              gap-2
            "
          >
            {/* SEARCH */}
            <Button
              variant="utility"
              shape="circle"
              size="sm"
              aria-label="Search products"
            >
              <Search size={15} strokeWidth={2.5} />
            </Button>

            {/* FAVORITES */}
            <Button
              variant="utility"
              shape="circle"
              size="sm"
              aria-label="Wishlist"
            >
              <Heart size={15} strokeWidth={2.5} />
            </Button>

            {/* CART */}
            <Button
              variant="editorial"
              size="sm"
              aria-label="Shopping cart with 0 items"
              className="
                gap-3
                px-5
              "
            >
              <ShoppingBag
                size={15}
                strokeWidth={2.8}
                className="
                  text-[#7a3b45]
                "
              />

              <div
                className="
                  flex
                  flex-col
                  items-start
                "
              >
                <span
                  className="
                    text-[0.5rem]
                    font-black
                    uppercase

                    leading-none
                    tracking-[0.24em]

                    text-[#7a3b45]/70
                  "
                >
                  Supply Cart
                </span>

                <span
                  className="
                    mt-[0.18rem]

                    text-[0.68rem]
                    font-black
                    uppercase

                    leading-none
                    tracking-[0.16em]

                    text-[#2b211d]
                  "
                >
                  0 Items
                </span>
              </div>
            </Button>

            {/* PROFILE */}
            <Button
              variant="editorial"
              shape="circle"
              size="sm"
              aria-label="Account"
              className="
                bg-[#7a3b45]
                text-white

                shadow-[0_4px_0_#5d2832]
              "
            >
              <User size={15} strokeWidth={2.6} />
            </Button>
          </div>
        </div>
      </motion.header>
    </FadeIn>
  );
}
