import { FadeIn, Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";

export function OpeningActions() {
  return (
    <Reveal
      className="
        mt-8

        flex
        flex-col
        gap-4

        sm:flex-row
      "
    >
      <FadeIn delay={0.35}>
        <Button variant="primary" size="lg">
          Explore Recipes
        </Button>
      </FadeIn>

      <FadeIn delay={0.45}>
        <Button variant="secondary" size="lg">
          Our Philosophy
        </Button>
      </FadeIn>
    </Reveal>
  );
}
