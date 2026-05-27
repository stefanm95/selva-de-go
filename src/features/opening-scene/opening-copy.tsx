import { FadeIn } from "@/components/motion/fade-in";
import { homepageData } from "@/data/homepage";

export function OpeningCopy() {
  const scene = homepageData.openingScene;

  return (
    <div
      className="
        relative
        z-30

        max-w-[820px]

      "
    >
      {/* ATMOSPHERIC GLOW */}
      <div
        className="
          absolute
          left-[-6rem]
          top-[-4rem]

          h-[18rem]
          w-[18rem]

          rounded-[1rem]

          bg-[#f1c692]/22

          blur-[80px]
        "
      />

      {/* EYEBROW */}
      <FadeIn delay={0.1}>
        <div
          className="
            mb-12

            flex
            items-center

            gap-4
          "
        >
          <div
            className="
              h-[4px]
              w-14

              rounded-full

              bg-[#d96c3d]
            "
          />

          <p
            className="
              rotate-[-2deg]

              text-[11px]
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
      <FadeIn delay={0.18}>
        <h1
          className="
            display

            relative

            text-[clamp(6rem,10vw,11rem)]

            leading-[0.74]
            tracking-[-0.1em]

            text-[#1f1a17]
          "
        >
          <span className="block">wild</span>

          <span className="block ml-[0.02em]">nutrition</span>

          <span
            className="
              mt-2
              block

              text-[#7a3b45]
            "
          >
            for modern dogs
          </span>
        </h1>
      </FadeIn>

      {/* DESCRIPTION */}
      <FadeIn delay={0.32}>
        <div
          className="
            relative

            mt-14

            max-w-[560px]
          "
        >
          <p
            className="
              relative
              z-10

              text-[1.08rem]

              leading-[1.95]

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
