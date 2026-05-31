import { FadeIn } from "@/components/motion";
import { products } from "@/data/products";

export function FormulaArchive() {
  return (
    <section className='mt-36'>
      <FadeIn>
        <p
          className='
            mb-12

            text-[0.72rem]
            font-black
            uppercase

            tracking-[0.42em]

            text-[#7a3b45]
          '
        >
          Formula Archive
        </p>
      </FadeIn>

      <div className='space-y-8'>
        {products.map((product, index) => (
          <FadeIn key={product.id} delay={index * 0.08}>
            <article
              className='
                group

                flex
                items-end
                justify-between

                border-b
                border-[#1f1a17]/8

                pb-8
              '
            >
              <div className='flex items-end gap-8'>
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

                    text-[clamp(2.5rem,6vw,6rem)]

                    leading-[0.88]
                    tracking-[-0.08em]

                    text-[#1f1a17]
                  '
                >
                  {product.name}
                </h3>
              </div>

              <div
                className='
                  hidden
                  max-w-[22rem]

                  xl:block
                '
              >
                <p
                  className='
                    text-sm
                    leading-relaxed

                    text-[#4a413b]/70
                  '
                >
                  {product.badge}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
