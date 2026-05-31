import { FadeIn } from "@/components/motion";
import { products } from "@/data/products";

export function ExpeditionNote() {
  const formula = products.find((product) => product.id === "wild-game-salmon");

  if (!formula) return null;

  return (
    <FadeIn delay={0.2}>
      <section
        className='
          mx-auto
          mt-44

          max-w-[58rem]

          text-center
        '
      >
        <p
          className='
            text-[0.72rem]
            font-black
            uppercase

            tracking-[0.42em]

            text-[#556b4e]
          '
        >
          Expedition Note
        </p>

        <blockquote
          className='
            display

            mt-10

            text-[clamp(2.5rem,5vw,5rem)]

            leading-[0.92]
            tracking-[-0.08em]

            text-[#1f1a17]
          '
        >
          {formula.quote}
        </blockquote>

        <p
          className='
            mx-auto
            mt-12

            max-w-[42rem]

            text-[1.05rem]
            leading-[1.95]

            text-[#4a413b]/80
          '
        >
          {formula.story}
        </p>
      </section>
    </FadeIn>
  );
}
