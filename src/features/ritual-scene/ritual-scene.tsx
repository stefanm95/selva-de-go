import { RitualHeader } from "./ritual-header";
import { RitualTimeline } from "./ritual-timeline";

export function RitualScene() {
  return (
    <section
      id='ritual-scene'
      className='
        relative
flex
items-center
justify-center
        overflow-hidden
top-28
        py-28
        px-6

        lg:px-12
      '
    >
      {/* background glow */}

      <div
        className='
          absolute
          inset-0

          opacity-20
        '
      >
        <div
          className='
            absolute
            left-1/2
            top-1/2

            h-[600px]
            w-[600px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#f0c15a]

            blur-[180px]
          '
        />
      </div>

      <div
        className='
          relative
          z-10

          mx-auto
          max-w-7xl
        '
      >
        <RitualHeader />

        <RitualTimeline />

        <div
          className='
            mt-20

            text-center
          '
        >
          <p
            className='
              text-[11px]
              uppercase
              tracking-[0.35em]

              text-[#6b1f2b]/60
            '
          >
            Recommended Rehydration Time
          </p>

          <p
            className='
              mt-4

              text-4xl

              text-[#556b4e]
            '
          >
            5–10 Minutes
          </p>

          <p
            className='
              mt-4

              text-[#4f1823]/70
            '
          >
            Adjust water quantity according to your dog's preference.
          </p>
        </div>
      </div>
    </section>
  );
}
