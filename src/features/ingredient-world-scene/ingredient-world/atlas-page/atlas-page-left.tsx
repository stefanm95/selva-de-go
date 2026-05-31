import { FadeIn } from "@/components/motion";
import type { Product } from "@/types/product";

type AtlasPageLeftProps = {
  product: Product;
  pageNumber: number;
  alternateLayout?: boolean;
};

export default function AtlasPageLeft({
  product,
  pageNumber,
  alternateLayout = false,
}: AtlasPageLeftProps) {
  return (
    <FadeIn className={alternateLayout ? "lg:order-2" : ""}>
      <div className='relative pt-8 lg:min-h-[42rem]'>
        <div
          className='stamp-text inline-block border border-[#2f221d]/45 bg-[#f4d15d]/70 px-4 py-2 text-[10px] text-[#2f221d]'
          style={{ color: product.color }}
        >
          Formula {String(pageNumber).padStart(2, "0")}
        </div>

        <div className='mt-16 max-w-[40rem]'>
          <p
            className='stamp-text mb-8 text-[11px]'
            style={{ color: `${product.color}CC` }}
          >
            {product.badge} / {product.highlight}
          </p>

          <h2
            className='text-[clamp(3.8rem,7vw,6.8rem)] uppercase leading-[0.82] tracking-[-0.04em]'
            style={{ color: product.color }}
          >
            {product.name}
          </h2>

          <p className='editorial-copy mt-14 max-w-xl text-[clamp(2rem,3.4vw,3rem)] leading-[1.08] text-[#2f221d]'>
            {product.headline}
          </p>
        </div>

        <p className='mt-16 max-w-lg text-lg leading-9 text-[#2f221d]/75 md:ml-16'>
          {product.story}
        </p>

        <blockquote
          className='editorial-copy mt-20 max-w-md border-l py-1 pl-7 text-2xl italic leading-snug text-[#2f221d]/85 md:ml-2'
          style={{ borderColor: product.color }}
        >
          {product.quote}
        </blockquote>
      </div>
    </FadeIn>
  );
}
