import { PhilosophyHeader } from "./philosophy-header";
import { PhilosophyFeedingGuide } from "./philosophy-feeding-guide";
import { PhilosophyPrinciples } from "./philosophy-principles";

export function PhilosophyScene() {
  return (
    <section
      id='philosophy'
      className='
        relative
flex
justify-center
items-center
        py-32
        px-6

        lg:px-12
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

      <div
        className='
          relative
          z-10

          mx-auto
          max-w-7xl
        '
      >
        <PhilosophyHeader />

        <PhilosophyFeedingGuide />

        <PhilosophyPrinciples />
      </div>
    </section>
  );
}
