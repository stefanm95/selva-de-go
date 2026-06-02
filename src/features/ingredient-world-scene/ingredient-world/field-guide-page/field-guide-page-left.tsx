import { FadeIn } from "@/components/motion";
import type { Product } from "@/types/product";

type FieldGuidePageLeftProps = {
  product: Product;
  pageNumber: number;
  alternateLayout?: boolean;
};

export default function FieldGuidePageLeft({
  product,
  pageNumber,
  alternateLayout = false,
}: FieldGuidePageLeftProps) {
  return (
    <FadeIn className={alternateLayout ? "lg:order-2" : ""}>
      <article
        className='
          relative
          mx-auto
          max-w-[32rem]
        '
      >
        {/* top marker */}

        <div className='mb-6 flex items-center gap-4'>
          <span
            className='
              stamp-text
              text-xs
              uppercase
              tracking-[0.28em]
              text-[var(--brand-forest)]
            '
          >
            Field Record #{String(pageNumber).padStart(2, "0")}
          </span>

          <div className='h-px flex-1 bg-[var(--brand-forest)]/15' />
        </div>

        {/* specimen image */}

        <div className='relative flex justify-center'>
          <img
            src='/images/products/board/cartoonish-bag.png'
            alt={product.name}
            className='
              w-[78%]
              max-w-[24rem]

              object-contain

              drop-shadow-[0_24px_28px_rgba(0,0,0,0.18)]
            '
          />
        </div>

        {/* title */}

        <div className='mt-10 text-center'>
          <p
            className='
              stamp-text
              text-xs
              uppercase
              tracking-[0.3em]
              text-[var(--brand-forest)]/70
            '
          >
            {product.badge}
          </p>

          <h2
            className='
              mt-3

              text-[clamp(3.2rem,5vw,4.8rem)]

              leading-[0.88]
              tracking-[-0.06em]

              text-[var(--brand-forest)]
            '
          >
            {product.name}
          </h2>
        </div>
      </article>
    </FadeIn>
  );
}
