import { FadeIn, Reveal } from "@/components/motion";

import { Button } from "@/components/ui/button";

export function OpeningActions() {
  return (
    <Reveal
      className='
        relative
        z-30
        mt-14
        flex
        flex-wrap
        items-center

        gap-5
      '
    >
      <FadeIn delay={0.42}>
        <Button variant='primary' size='lg'>
          Explore Recipes
        </Button>
      </FadeIn>

      <FadeIn delay={0.5}>
        <Button variant='secondary' size='lg'>
          Our Philosophy
        </Button>
      </FadeIn>
    </Reveal>
  );
}
