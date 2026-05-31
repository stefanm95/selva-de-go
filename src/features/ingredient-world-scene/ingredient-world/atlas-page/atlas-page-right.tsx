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
  const garden = product.ingredients.vegetablesAndFruits.slice(0, 5);
  const herbs = product.ingredients.herbs.slice(0, 5);

  return (
    <FadeIn delay={0.12} className={alternateLayout ? "lg:order-1" : ""}>
      <div className='relative pt-10 lg:pt-28'>
        <div className='border-t border-[#2f221d]/25 pt-8'>
          <p
            className='stamp-text text-[10px]'
            style={{ color: `${product.color}CC` }}
          >
            Protein Collection
          </p>

          <ul className='mt-8 space-y-4'>
            {product.ingredients.proteins.map((item) => (
              <li
                key={item}
                className='text-2xl uppercase leading-none tracking-[-0.02em] text-[#2f221d] md:text-3xl'
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className='mt-24 border-t border-[#2f221d]/20 pt-8'>
          <p
            className='stamp-text text-[10px]'
            style={{ color: `${product.color}CC` }}
          >
            Garden Collection
          </p>

          <ul className='mt-7 flex max-w-md flex-wrap gap-x-8 gap-y-3 text-base leading-7 text-[#2f221d]/75'>
            {garden.map((item) => (
              <li key={item}>
                {item.toLowerCase()}
              </li>
            ))}
            {product.ingredients.vegetablesAndFruits.length > garden.length && (
              <li style={{ color: product.color }}>
                +{product.ingredients.vegetablesAndFruits.length - garden.length} more
              </li>
            )}
          </ul>
        </div>

        <div className='mt-24 border-t border-[#2f221d]/20 pt-8'>
          <p
            className='stamp-text text-[10px]'
            style={{ color: `${product.color}CC` }}
          >
            Botanical Archive
          </p>

          <ul className='mt-7 space-y-3 text-sm uppercase tracking-[0.12em] text-[#2f221d]/65'>
            {herbs.map((item) => (
              <li key={item}>{item}</li>
            ))}
            {product.ingredients.herbs.length > herbs.length && (
              <li style={{ color: product.color }}>
                +{product.ingredients.herbs.length - herbs.length} archived
              </li>
            )}
          </ul>
        </div>
      </div>
    </FadeIn>
  );
}
