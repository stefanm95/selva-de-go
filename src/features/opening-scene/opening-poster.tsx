// import { OpeningActions } from "./opening-actions";
import { OpeningCopy } from "./opening-copy";

export function OpeningPoster() {
  return (
    <section
      className="
        relative
        w-full
        mx-auto
      "
    >
      <div
        className="
          relative
    z-20

    grid
    min-h-[82vh]


    items-center

    px-12
    lg:px-20

          overflow-hidden

          rounded-[2.5rem]

          border-[4px]
          border-[var(--ink)]

          bg-[var(--surface-paper)]

          shadow-[0_8px_0_var(--ink),0_40px_70px_rgba(0,0,0,0.18)]
        "
      >
        {/* atmosphere */}

        <div
          className="
            absolute
            left-[5%]
            top-[10%]

            h-[30rem]
            w-[30rem]

            rounded-[1rem]

            bg-[var(--brand-sun)]/15

            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-[5%]
            bottom-[10%]

            h-[26rem]
            w-[26rem]

            rounded-full

            bg-[var(--brand-forest)]/10

            blur-[120px]
          "
        />

        {/* watermark */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0

            flex
            items-center
            justify-center

            font-display

            text-[24rem]

            uppercase

            text-[var(--brand-plum)]/[0.03]

            select-none
          "
        >
          SELVA
        </div>

        {/* stickers */}

        <div
          className="
            absolute
            left-[4rem]
            top-[3rem]

            rotate-[-6deg]

            border-[3px]
            border-[var(--ink)]

            bg-[var(--brand-sun)]

            px-5
            py-3

            shadow-[4px_4px_0_var(--ink)]

            text-[10px]
            font-black
            uppercase
            tracking-[0.2em]
          "
        >
          Freeze Dried
        </div>

        <div
          className="
            absolute
            right-[8rem]
            top-[5rem]

            rotate-[8deg]

            border-[3px]
            border-[var(--ink)]

            bg-[var(--brand-sun)]

            px-5
            py-3

            shadow-[4px_4px_0_var(--ink)]

            text-[10px]
            font-black
            uppercase
            tracking-[0.2em]
          "
        >
          Human Grade
        </div>

        {/* content */}
        <OpeningCopy />
      </div>
    </section>
  );
}
