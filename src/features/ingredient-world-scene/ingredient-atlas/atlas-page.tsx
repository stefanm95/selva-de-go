import { FadeIn } from "@/components/motion/fade-in";
import { type Product } from "@/types/product";
import AtlasPageBackground from "./atlas-page-background";

type AtlasPageProps = {
  product: Product;
  pageNumber: number;
  alternateLayout?: boolean;
};

export default function AtlasPage({
  product,
  pageNumber,
  alternateLayout = false,
}: AtlasPageProps) {
  const contentOnLeft = !alternateLayout;

  return (
    <section className='relative py-28'>
      <div className='mx-auto max-w-7xl px-6'>
        <div
          className='mb-16 flex items-center justify-between border-b pb-6'
          style={{
            color: product.color,
            borderColor: `${product.color}20`,
          }}
        >
          <AtlasPageBackground
            productColor={product.color}
            productId={product.id}
          />
          <span className='text-xs uppercase tracking-[0.35em] opacity-50'>
            Atlas Record {String(pageNumber).padStart(2, "0")}
          </span>

          <span className='text-xs uppercase tracking-[0.35em] opacity-40'>
            Field Guide
          </span>
        </div>

        <div className='grid gap-20 lg:grid-cols-2'>
          {/* LEFT PAGE */}

          <FadeIn className={contentOnLeft ? "" : "lg:order-2"}>
            <div style={{ color: product.color }}>
              <div className='mb-6 text-xs uppercase tracking-[0.35em] opacity-50'>
                {product.badge}
              </div>

              <h2
                className='
                  font-display
                  text-[clamp(3rem,6vw,5rem)]
                  leading-[0.9]
                  tracking-[-0.04em]
                '
              >
                {product.name}
              </h2>

              <p className='mt-8 max-w-lg text-lg leading-relaxed opacity-80'>
                {product.headline}
              </p>

              <div
                className='
                  mt-12
                  border-t
                  pt-8
                '
                style={{
                  borderColor: `${product.color}20`,
                }}
              >
                <div className='mb-4 text-xs uppercase tracking-[0.3em] opacity-40'>
                  Archive Note
                </div>

                <p className='max-w-xl leading-relaxed opacity-75'>
                  {product.story}
                </p>
              </div>

              <blockquote
                className='
                  mt-12
                  border-l-2
                  pl-6
                  text-xl
                  italic
                  opacity-70
                '
              >
                "{product.quote}"
              </blockquote>
            </div>
          </FadeIn>

          {/* RIGHT PAGE */}

          <FadeIn delay={0.1} className={contentOnLeft ? "" : "lg:order-1"}>
            <div className='space-y-14'>
              {/* PROTEINS */}

              <div>
                <div
                  className='mb-6 text-xs uppercase tracking-[0.3em]'
                  style={{ color: `${product.color}99` }}
                >
                  Protein Collection
                </div>

                <div className='grid gap-5 sm:grid-cols-2'>
                  {product.ingredients.proteins.map((protein) => (
                    <div
                      key={protein}
                      className='border-b pb-4'
                      style={{
                        borderColor: `${product.color}15`,
                        color: product.color,
                      }}
                    >
                      <div className='text-[10px] uppercase tracking-[0.3em] opacity-40'>
                        Specimen
                      </div>

                      <div className='mt-2 text-2xl font-black uppercase'>
                        {protein}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* GARDEN */}

              <div>
                <div
                  className='mb-6 text-xs uppercase tracking-[0.3em]'
                  style={{ color: `${product.color}99` }}
                >
                  Garden Collection
                </div>

                <div className='flex flex-wrap gap-3'>
                  {product.ingredients.vegetablesAndFruits.map((item) => (
                    <span
                      key={item}
                      className='
                        rounded-full
                        border
                        px-4
                        py-2
                        text-sm
                        uppercase
                        tracking-[0.15em]
                      '
                      style={{
                        color: product.color,
                        borderColor: `${product.color}20`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* BOTANICALS */}

              <div>
                <div
                  className='mb-6 text-xs uppercase tracking-[0.3em]'
                  style={{ color: `${product.color}99` }}
                >
                  Botanical Archive
                </div>

                <div className='grid grid-cols-2 gap-y-5 md:grid-cols-3'>
                  {product.ingredients.herbs.map((herb) => (
                    <div key={herb}>
                      <div
                        className='
                          text-[10px]
                          uppercase
                          tracking-[0.3em]
                          opacity-30
                        '
                        style={{ color: product.color }}
                      >
                        Specimen
                      </div>

                      <div
                        className='mt-1 text-lg uppercase'
                        style={{ color: product.color }}
                      >
                        {herb}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div
          className='mt-20 flex justify-between border-t pt-8'
          style={{
            color: `${product.color}80`,
            borderColor: `${product.color}20`,
          }}
        >
          <span className='text-xs uppercase tracking-[0.35em]'>
            Specimen Archive
          </span>

          <span className='text-xs uppercase tracking-[0.35em]'>
            {product.name}
          </span>
        </div>
      </div>
    </section>
  );
}
