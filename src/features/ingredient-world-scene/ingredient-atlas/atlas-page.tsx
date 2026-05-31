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
  const proteins = product.ingredients.proteins;
  const garden = product.ingredients.vegetablesAndFruits;
  const herbs = product.ingredients.herbs;

  // alternateLayout: false = content on left, ingredients on right
  // alternateLayout: true = ingredients on left, content on right
  const contentOnLeft = !alternateLayout;

  return (
    <section className='relative min-h-screen overflow-hidden py-24 lg:min-h-[90vh]'>
      <AtlasPageBackground
        productColor={product.color}
        productId={product.id}
      />

      <div className='relative z-10 mx-auto max-w-7xl px-6'>
        {/* Page header */}
        <div className='mb-12 flex items-baseline justify-between border-b border-current border-opacity-15 pb-6'>
          <div className='text-xs uppercase tracking-[0.35em] text-current text-opacity-50'>
            Page {String(pageNumber).padStart(2, "0")}
          </div>
          <div className='text-xs uppercase tracking-[0.35em] text-current text-opacity-40'>
            Atlas Record
          </div>
        </div>

        {/* Main content grid */}
        <div className='grid gap-12 lg:gap-20' style={{ color: product.color }}>
          <div className='grid items-start gap-12 lg:grid-cols-2 lg:gap-20'>
            {/* Content Section */}
            <FadeIn className={contentOnLeft ? "" : "lg:col-start-2"}>
              <div className='space-y-8'>
                {/* Edition mark */}
                <div className='text-xs uppercase tracking-[0.35em] text-current text-opacity-50'>
                  {pageNumber === 1 && "Beef & Lamb Formula"}
                  {pageNumber === 2 && "Wild Proteins Formula"}
                  {pageNumber === 3 && "High-Protein Formula"}
                </div>

                {/* Title */}
                <div>
                  <h2 className='font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.03em]'>
                    {product.name}
                  </h2>
                </div>

                {/* Headline */}
                <p className='max-w-md text-lg leading-relaxed text-current text-opacity-80'>
                  {product.headline}
                </p>

                {/* Story */}
                <div className='space-y-4 border-t border-current border-opacity-20 pt-8'>
                  <p className='text-sm uppercase tracking-[0.25em] text-current text-opacity-40'>
                    Archive Note
                  </p>
                  <p className='max-w-lg text-base leading-relaxed text-current text-opacity-75'>
                    {product.story}
                  </p>
                </div>

                {/* Quote */}
                <blockquote className='border-l-2 pl-6 text-lg italic text-current text-opacity-70'>
                  "{product.quote}"
                </blockquote>
              </div>
            </FadeIn>

            {/* Ingredients Section */}
            <FadeIn
              className={contentOnLeft ? "" : "lg:col-start-1 lg:row-start-1"}
              delay={0.1}
            >
              <div className='space-y-16'>
                {/* Proteins */}
                <div>
                  <div className='mb-12 text-xs uppercase tracking-[0.3em] text-current text-opacity-50'>
                    Protein Collection
                  </div>

                  <div className='relative min-h-[320px]'>
                    {proteins.map((protein, index) => {
                      // Scatter proteins across the space
                      const positions = [
                        "absolute left-0 top-0 text-3xl lg:text-4xl",
                        "absolute right-12 top-12 lg:top-16 text-2xl lg:text-3xl",
                        "absolute left-1/3 top-40 lg:top-48 text-4xl lg:text-5xl",
                        "absolute right-1/4 bottom-8 text-3xl lg:text-4xl",
                      ];

                      return (
                        <div
                          key={protein}
                          className={`${positions[index % positions.length]} font-bold uppercase tracking-tight`}
                        >
                          {protein}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Garden & Fruits */}
                <div className='border-t border-current border-opacity-15 pt-12'>
                  <div className='mb-8 text-xs uppercase tracking-[0.3em] text-current text-opacity-50'>
                    Garden Collection
                  </div>

                  <div className='space-y-3'>
                    {garden.map((item) => (
                      <div
                        key={item}
                        className='text-sm uppercase tracking-wider text-current text-opacity-60'
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Herbs & Botanicals */}
                <div className='border-t border-current border-opacity-15 pt-12'>
                  <div className='mb-8 text-xs uppercase tracking-[0.3em] text-current text-opacity-50'>
                    Botanical Collection
                  </div>

                  <div className='space-y-2'>
                    {herbs.map((herb) => (
                      <div
                        key={herb}
                        className='text-sm uppercase tracking-wide text-current text-opacity-50'
                      >
                        • {herb}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Footer marks */}
        <div className='mt-20 border-t border-current border-opacity-15 pt-8 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-current text-opacity-30'>
          <span>Specimen Archive</span>
          <span>
            Page {String(pageNumber).padStart(2, "0")} — {product.name}
          </span>
        </div>
      </div>
    </section>
  );
}
