import { Scene } from "@/components/scene/scene";
import { SceneColumn } from "@/components/scene/scene-column";
import { SceneContainer } from "@/components/scene/scene-container";
import { RitualHeader } from "./ritual-header";
import { RitualTimeline } from "./ritual-timeline";

export function RitualScene() {
  return (
    <Scene
      id='ritual-scene'
      className='
        relative
        overflow-hidden
        py-28
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

            bg-[var(--brand-sun)]

            blur-[180px]
          '
        />
      </div>

      <SceneContainer tone='warm' size='default'>
        <SceneColumn spacing='lg'>
        <RitualHeader />

        <RitualTimeline />

        <div
          className='
            text-center
          '
        >
          <p
            className='
              text-[11px]
              uppercase
              tracking-[0.35em]

              text-[var(--brand-plum)]/60
            '
          >
            Recommended Rehydration Time
          </p>

          <p
            className='
              mt-4

              text-4xl

              text-[var(--brand-forest)]
            '
          >
            5–10 Minutes
          </p>

          <p
            className='
              mt-4

              text-[var(--text-plum)]/70
            '
          >
            Adjust water quantity according to your dog's preference.
          </p>
        </div>
        </SceneColumn>
      </SceneContainer>
    </Scene>
  );
}
