import { homepageData } from "@/data/homepage";

import { Button } from "@/components/ui/button";

export function OpeningActions() {
  const scene = homepageData.openingScene;

  return (
    <div
      className='
        relative
        z-30

        mt-12
        left-[50%]
        flex
        flex-wrap
        items-center

        gap-4
      '
    >
      <Button variant='primary' size='lg'>
        <a href={scene.primaryCta.href}>{scene.primaryCta.label}</a>
      </Button>

      <Button variant='secondary' size='lg'>
        <a href={scene.secondaryCta.href}>{scene.secondaryCta.label}</a>
      </Button>
    </div>
  );
}
