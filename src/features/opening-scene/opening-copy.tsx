import { SceneColumn } from "@/components/scene/scene-column";
import { OpeningActions } from "./opening-actions";

export function OpeningCopy() {
  return (
    <div
      className="
        grid
        items-center
        gap-16

        lg:grid-cols-[1fr_0.9fr]
      "
    >
      {/* left */}

      <SceneColumn spacing="sm">
        <p
          className="
            text-[11px]
            uppercase
            tracking-[0.4em]
            text-[var(--brand-rose)]
          "
        >
          Wild Nutrition Supply
        </p>

        <h1
          className="
            font-display

            text-[clamp(4.5rem,9vw,8rem)]

            leading-[0.82]

            tracking-[-0.07em]

            text-[var(--brand-plum)]
          "
        >
          Food For
          <br />
          Wild Instincts
        </h1>

        <p
          className="
            max-w-[38rem]

            text-lg
            leading-relaxed

            text-[var(--text-plum)]/75
          "
        >
          Built from real ingredients, inspired by ancestral feeding patterns
          and preserved through gentle freeze-drying for modern companions.
        </p>

        <div
          className="
            flex
            flex-wrap
            gap-4

            text-[11px]
            uppercase

            tracking-[0.25em]

            text-[var(--text-plum)]/55
          "
        >
          <span>Novel Proteins</span>

          <span>•</span>

          <span>Omega Rich</span>

          <span>•</span>

          <span>Human Grade</span>

          <span>•</span>

          <span>No Artificial Additives</span>
        </div>

        <OpeningActions />
      </SceneColumn>

      {/* right */}

      <div
        className="
    relative

    flex
    items-center
    justify-center

    lg:justify-end
  "
      >
        {/* atmosphere */}

        <div
          className="
      absolute

      h-[32rem]
      w-[32rem]

      rounded-full

      bg-[var(--brand-sun)]/15

      blur-[120px]
    "
        />

        {/* bag */}

        <img
          src="/images/products/board/cartoonish-bag.png"
          alt=""
          className="
      relative

      w-[clamp(15rem,26vw,24rem)]

      translate-y-4

      rotate-[2deg]

      drop-shadow-[0_40px_60px_rgba(0,0,0,0.22)]
    "
        />
      </div>
    </div>
  );
}
