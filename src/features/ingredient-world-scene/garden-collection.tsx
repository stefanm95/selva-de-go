import { FadeIn } from "@/components/motion";
import { ingredients } from "@/data/ingredients";

export function GardenCollection() {
  const items = ingredients.wildGameAndSalmon.vegetablesAndFruits;

  return (
    <section className='mt-40'>
      <FadeIn>
        <p
          className='
            mb-16

            text-[0.72rem]
            font-black
            uppercase

            tracking-[0.42em]

            text-[#556b4e]
          '
        >
          Garden Collection
        </p>

        <div
          className='
            grid

            gap-y-8

            md:grid-cols-2
            xl:grid-cols-3
          '
        >
          {items.map((item) => (
            <h3
              key={item}
              className='
                display

                text-[clamp(2rem,4vw,3.6rem)]

                leading-[0.9]
                tracking-[-0.06em]

                text-[#1f1a17]
              '
            >
              {item}
            </h3>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
