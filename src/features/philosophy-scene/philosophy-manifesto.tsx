// features/philosophy-scene/philosophy-manifesto.tsx

import { FadeIn } from "@/components/motion/fade-in";

import { homepageData } from "@/data/homepage";

export function PhilosophyManifesto() {
  const manifesto = homepageData.philosophyScene.manifesto;

  return (
    <div
      className="
        relative

        grid
        gap-6

        xl:translate-x-[6rem]
        xl:pt-[6rem]
      "
    >
      {manifesto.map((item, index) => (
        <FadeIn key={item} delay={0.14 + index * 0.08}>
          <div
            className="
              group

              relative

              overflow-hidden

              rounded-[2.4rem]

              border
              border-[#2b211d]/10

              bg-[#f8efe6]/72

              p-8

              backdrop-blur-md

              transition-all
              duration-500

              hover:-translate-y-1
            "
          >
            {/* INNER LIGHT */}
            <div
              className="
                absolute
                inset-0

                bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.24)_0%,transparent_60%)]
              "
            />

            {/* EDITORIAL INDEX */}
            <div
              className="
                absolute
                right-6
                top-5

                text-[0.62rem]
                font-black
                uppercase

                tracking-[0.28em]

                text-[#7a3b45]/28
              "
            >
              0{index + 1}
            </div>

            <div
              className="
                relative
                z-10

                flex
                items-start

                gap-5
              "
            >
              {/* BULLET */}
              <div
                className="
                  mt-[0.45rem]

                  h-3
                  w-3

                  rounded-full

                  border-2
                  border-[#7a3b45]

                  bg-[#d96c3d]
                "
              />

              {/* TEXT */}
              <p
                className="
                  max-w-[28rem]

                  text-[1rem]
                  font-black
                  uppercase

                  leading-[1.6]
                  tracking-[0.16em]

                  text-[#2b211d]
                "
              >
                {item}
              </p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
