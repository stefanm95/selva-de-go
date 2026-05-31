import { FadeIn, Reveal } from "@/components/motion";

import { Button } from "@/components/ui/button";

export function OpeningActions() {
  return (
    <Reveal
      className='
        relative
        z-30
        mt-6
        sm:mt-8
        lg:mt-14
        
        flex
        flex-col
        sm:flex-row
        flex-wrap
        items-stretch
        sm:items-center

        gap-3
        sm:gap-5
      '
    >
      <FadeIn delay={0.42}>
        <Button variant='primary' size='lg' className='w-full sm:w-auto'>
          Explore Recipes
        </Button>
      </FadeIn>

      <FadeIn delay={0.5}>
        <Button variant='secondary' size='lg' className='w-full sm:w-auto'>
          Our Philosophy
        </Button>
      </FadeIn>
    </Reveal>
  );
}
