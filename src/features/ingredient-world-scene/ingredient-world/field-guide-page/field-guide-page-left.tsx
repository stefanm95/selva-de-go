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
      <article className="mx-auto max-w-[30rem] px-10">
        <div className="mb-10 flex items-center gap-4">
          <span className="stamp-text">
            Field Record #{String(pageNumber).padStart(2, "0")}
          </span>

          <div className="h-px flex-1 bg-[var(--brand-forest)]/15" />
        </div>

        <div className="relative flex justify-center">
          <img
            src="/images/products/board/cartoonish-bag.png"
            alt={product.name}
            className="
              w-[78%]
              max-w-[24rem]

              object-contain

              drop-shadow-[0_24px_28px_rgba(0,0,0,0.18)]
            "
          />
        </div>

        <h2
          className="
      mt-8
      text-center
      text-[clamp(3rem,5vw,5rem)]
      leading-[0.9]
      tracking-[-0.06em]
      text-[var(--brand-forest)]
    "
        >
          {product.name}
        </h2>
      </article>
    </FadeIn>
  );
}
