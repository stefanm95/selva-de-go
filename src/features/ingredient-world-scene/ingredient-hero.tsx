import { Cinematic } from "@/components/motion";
import { products } from "@/data/products";

export function IngredientHero() {
  const formula = products.find((product) => product.id === "wild-game-salmon");

  if (!formula) return null;

  return (
    <section className='mx-auto max-w-[62rem] text-center'>
      <Cinematic>
        <p
          className='
            text-[0.72rem]
            font-black
            uppercase
            tracking-[0.42em]
            text-[#556b4e]
          '
        >
          Wild Ingredient Archive
        </p>

        <h2
          className='
            display

            mt-8

            text-[clamp(4rem,10vw,8rem)]

            leading-[0.82]
            tracking-[-0.08em]

            text-[#1f1a17]
          '
        >
          {formula.name}
        </h2>

        <p
          className='
            mx-auto
            mt-10

            max-w-[42rem]

            text-[1.1rem]
            leading-[1.95]

            text-[#463c35]/80
          '
        >
          {formula.subheadline}
        </p>
      </Cinematic>
    </section>
  );
}
