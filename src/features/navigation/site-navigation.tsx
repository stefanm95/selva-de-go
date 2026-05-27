// features/navigation/site-navigation.tsx

"use client";

import { motion } from "framer-motion";

import { Heart, Search, ShoppingBag, User } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useNavigationMode } from "./use-navigation-mode";

const links = ["Manifesto", "Ingredients", "Ritual", "Journal"];

export function SiteNavigation() {
  const { isCompact } = useNavigationMode();

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
        className="
          border-b
          border-[#2b211d]/8

          bg-[#f6eadf]/74

          backdrop-blur-[18px]
        "
      >
        <div
          className="
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
          "
        >
          {/* =================================
              LEFT BRAND
          ================================= */}
          <motion.a
            href="/"
            initial={false}
            animate={{
              opacity: isCompact ? 1 : 0.7,
              scale: isCompact ? 1 : 0.96,
            }}
            transition={{
              duration: 0.45,
            }}
            className="
              group

              relative

              flex
              items-center

              gap-3
            "
          >
            {/* ICON */}
            <div
              className="
                relative

                flex
                h-[2.35rem]
                w-[2.35rem]

                items-center
                justify-center

                rounded-full

                border-[2px]
                border-[#2d211d]

                bg-[#d96c3d]

                shadow-[0_3px_0_#2d211d]

                transition-transform
                duration-500

                group-hover:rotate-[-8deg]
              "
            >
              {/* INNER RING */}
              <div
                className="
                  absolute
                  inset-[3px]

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

                  h-[0.48rem]
                  w-[0.48rem]

                  rounded-full

                  bg-[#fff4ea]
                "
              />

              {/* LIGHT */}
              <div
                className="
                  absolute
                  left-[18%]
                  top-[14%]

                  h-[28%]
                  w-[52%]

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

                  text-[1.02rem]

                  leading-none
                  tracking-[-0.08em]

                  text-[#2b211d]
                "
              >
                Selva de Go
              </span>

              <span
                className="
                  mt-[0.14rem]

                  text-[0.5rem]
                  font-black
                  uppercase

                  tracking-[0.3em]

                  text-[#7a3b45]/62
                "
              >
                Wild Nutrition Supply
              </span>
            </div>
          </motion.a>

          {/* =================================
              CENTER LINKS
          ================================= */}
          <nav
            className="
              absolute
              left-1/2
              top-1/2

              hidden

              -translate-x-1/2
              -translate-y-1/2

              items-center

              gap-10

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

                  text-[0.64rem]
                  font-black
                  uppercase

                  tracking-[0.34em]

                  text-[#3d312c]/72

                  transition-colors
                  duration-300

                  hover:text-[#7a3b45]
                "
              >
                {link}

                <span
                  className="
                    absolute
                    bottom-[-0.85rem]
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

          {/* =================================
              RIGHT UTILITIES
          ================================= */}
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
              <Search size={14} strokeWidth={2.5} />
            </Button>

            {/* FAVORITES */}
            <Button
              variant="utility"
              shape="circle"
              size="sm"
              aria-label="Wishlist"
            >
              <Heart size={14} strokeWidth={2.5} />
            </Button>

            {/* CART */}
            <Button
              variant="editorial"
              size="sm"
              aria-label="Shopping cart"
              className="
                gap-2.5

                px-4
              "
            >
              <ShoppingBag
                size={14}
                strokeWidth={2.7}
                className="
                  text-[#7a3b45]
                "
              />

              <span
                className="
                  text-[0.62rem]
                  font-black
                  uppercase

                  tracking-[0.18em]

                  text-[#2b211d]
                "
              >
                0
              </span>
            </Button>

            {/* ACCOUNT */}
            <Button
              variant="editorial"
              shape="circle"
              size="sm"
              aria-label="Account"
              className="
                bg-[#7a3b45]
                text-white

                shadow-[0_4px_0_#5d2832]

                hover:shadow-[0_2px_0_#5d2832]
              "
            >
              <User size={14} strokeWidth={2.6} />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
