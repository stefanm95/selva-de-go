import { FadeIn } from "@/components/motion";
import { ingredients } from "@/data/ingredients";

export function BotanicalCollection() {
  const herbs = ingredients.wildGameAndSalmon.herbs;

  return (
    <FadeIn delay={0.15}>
      <section className='mt-40'>
        <div className='mb-12'>
          <p
            className='
              text-[0.72rem]
              font-black
              uppercase
              tracking-[0.42em]
              text-[#556b4e]
            '
          >
            Botanical Archive
          </p>
        </div>

        <div
          className='
            grid
            gap-y-10
            md:grid-cols-2
            xl:grid-cols-3
          '
        >
          {herbs.map((herb) => (
            <div key={herb}>
              <h3
                className='
                  display

                  text-[clamp(2rem,3vw,3.25rem)]

                  leading-[0.9]
                  tracking-[-0.06em]

                  text-[#1f1a17]
                '
              >
                {herb}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
