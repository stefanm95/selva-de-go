import { Scene } from "@/components/scene/scene";
import { SceneColumn } from "@/components/scene/scene-column";
import { SceneContainer } from "@/components/scene/scene-container";
import { PhilosophyHeader } from "./philosophy-header";
import { PhilosophyFeedingGuide } from "./philosophy-feeding-guide";
import { PhilosophyPrinciples } from "./philosophy-principles";

export function PhilosophyScene() {
  return (
    <Scene
      id='philosophy'
      className='
        relative
        py-32
      '
    >
      <div
        className='
          absolute
          inset-0
          opacity-15
        '
      >
        <div
          className='
            absolute
            right-[10%]
            top-[20%]

            h-[500px]
            w-[500px]

            rounded-full

            bg-[#556b4e]

            blur-[180px]
          '
        />
      </div>

      <SceneContainer tone='warm' size='default'>
        <SceneColumn spacing='lg'>
        <PhilosophyHeader />

        <PhilosophyFeedingGuide />

        <PhilosophyPrinciples />
        </SceneColumn>
      </SceneContainer>
    </Scene>
  );
}
