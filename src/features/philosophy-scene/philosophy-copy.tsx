// features/philosophy-scene/philosophy-copy.tsx

import { FadeIn } from "@/components/motion/fade-in";

import { homepageData } from "@/data/homepage";

export function PhilosophyCopy() {
  const scene = homepageData.philosophyScene;

  return (
    <div
      className="
        relative
        z-30

        max-w-[760px]
      "
    >
      {/* EYEBROW */}
      <FadeIn delay={0.08}>
        <div
          className="
            mb-10

            flex
            items-center

            gap-4
          "
        >
          <div
            className="
              h-[4px]
              w-12

              rounded-full

              bg-[#7a3b45]
            "
          />

          <p
            className="
              text-[0.68rem]
              font-black
              uppercase

              tracking-[0.34em]

              text-[#7a3b45]
            "
          >
            {scene.eyebrow}
          </p>
        </div>
      </FadeIn>

      {/* TITLE */}
      <FadeIn delay={0.14}>
        <h2
          className="
            display

            text-[clamp(4rem,7vw,7.5rem)]

            leading-[0.82]
            tracking-[-0.08em]

            text-[#231b17]
          "
        >
          nutrition
          <br />
          should feel
          <br />
          <span
            className="
              text-[#7a3b45]
            "
          >
            intentional
          </span>
        </h2>
      </FadeIn>

      {/* DESCRIPTION */}
      <FadeIn delay={0.22}>
        <div
          className="
            relative

            mt-14

            max-w-[540px]
          "
        >
          <p
            className="
              text-[1.02rem]

              leading-[1.9]

              tracking-[-0.01em]

              text-[#463c35]/82
            "
          >
            {scene.description}
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
