import { FadeIn, Reveal } from "@/components/motion";

import { homepageData } from "@/data/homepage";

import { Button } from "@/components/ui/button";

export function OpeningActions() {
  const scene = homepageData.openingScene;

  return (
    <Reveal
      className="
        relative
        z-30
        mt-14
        flex
        flex-wrap
        items-center

        gap-5
      "
    >
      <FadeIn delay={0.42}>
        <Button variant="primary" size="lg">
          <a href={scene.primaryCta.href}>{scene.primaryCta.label}</a>
        </Button>
      </FadeIn>

      <FadeIn delay={0.5}>
        <Button variant="secondary" size="lg">
          <a href={scene.secondaryCta.href}>{scene.secondaryCta.label}</a>
        </Button>
      </FadeIn>
    </Reveal>
  );
}
