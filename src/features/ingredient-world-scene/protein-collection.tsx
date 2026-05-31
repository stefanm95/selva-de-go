import { FadeIn } from "@/components/motion";
import { ingredients } from "@/data/ingredients";

export function ProteinCollection() {
  const proteins = ingredients.wildGameAndSalmon.proteins;

  return (
    <section className='mt-40'>
      <FadeIn>
        <p
          className='
            mb-14

            text-[0.72rem]
            font-black
            uppercase

            tracking-[0.42em]

            text-[#7a3b45]
          '
        >
          Protein Collection
        </p>

        <div className='space-y-6'>
          {proteins.map((protein, index) => (
            <div
              key={protein}
              className='
                flex
                items-end
                gap-8

                border-b
                border-[#1f1a17]/8

                pb-6
              '
            >
              <span
                className='
                  text-[0.8rem]
                  font-black

                  tracking-[0.3em]

                  text-[#7a3b45]
                '
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3
                className='
                  display

                  text-[clamp(3.5rem,9vw,8rem)]

                  leading-[0.88]
                  tracking-[-0.08em]

                  text-[#1f1a17]
                '
              >
                {protein}
              </h3>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
