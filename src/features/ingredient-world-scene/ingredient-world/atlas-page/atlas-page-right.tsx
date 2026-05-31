import { FadeIn } from "@/components/motion";
import type { Product } from "@/types/product";

type AtlasPageRightProps = {
  product: Product;
  alternateLayout?: boolean;
};

export default function AtlasPageRight({
  product,
  alternateLayout = false,
}: AtlasPageRightProps) {
  const heroIngredients = product.ingredientSpotlights.slice(0, 3);
  const supportingIngredients = [
    ...product.ingredients.vegetablesAndFruits,
    ...product.ingredients.herbs,
  ].slice(0, 4);

  return (
    <FadeIn delay={0.12} className={alternateLayout ? "lg:order-1" : ""}>
      <div className='max-w-2xl'>
        <p className='stamp-text text-[11px]' style={{ color: product.color }}>
          Explorer Collection / {product.highlight}
        </p>

        <h3 className='mt-8 text-[clamp(3.5rem,7vw,6.4rem)] uppercase leading-[0.84] tracking-[-0.06em] text-[#1f1a17]'>
          {product.headline}
        </h3>

        <p className='mt-10 max-w-xl text-lg leading-9 text-[#463c35]/82'>
          {product.story}
        </p>

        <div className='mt-12 grid gap-4 sm:grid-cols-3'>
          {heroIngredients.map((ingredient) => (
            <div
              key={ingredient.title}
              className='rounded-[1.2rem] border-[3px] border-[#2f221d] bg-[#fff2d2] p-5 shadow-[0_5px_0_#2f221d]'
            >
              <p
                className='text-xl uppercase leading-none tracking-[-0.03em]'
                style={{ color: product.color }}
              >
                {ingredient.title}
              </p>
              <p className='mt-4 text-sm leading-6 text-[#2f221d]/70'>
                {ingredient.description}
              </p>
            </div>
          ))}
        </div>

        <div className='mt-12 flex flex-wrap gap-3'>
          {supportingIngredients.map((item) => (
            <span
              key={item}
              className='rounded-full border border-[#2f221d]/18 bg-[#fff8e7]/70 px-4 py-2 text-sm text-[#2f221d]/72'
            >
              {item}
            </span>
          ))}
        </div>

        <blockquote className='editorial-copy mt-14 max-w-xl text-3xl italic leading-snug text-[#2f221d]'>
          {product.quote}
        </blockquote>

        <div
          className='mt-12 inline-flex rounded-[1.3rem] border-[3px] border-[#2f221d] px-5 py-3 text-sm font-semibold text-[#2f221d] shadow-[0_5px_0_#2f221d]'
          style={{ backgroundColor: "#ffd35e" }}
        >
          Built for {product.suitableFor.slice(0, 2).join(" + ")}
        </div>
      </div>
    </FadeIn>
  );
}
