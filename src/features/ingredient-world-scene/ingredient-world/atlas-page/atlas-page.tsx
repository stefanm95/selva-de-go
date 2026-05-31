import type { Product } from "@/types/product";

import AtlasPageBackground from "./atlas-page-background";
import AtlasPageLeft from "./atlas-page-left";
import AtlasPageRight from "./atlas-page-right";

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
  return (
    <section className='relative flex items-center justify-center overflow-hidden py-24 md:py-36'>
      <AtlasPageBackground productId={product.id} />

      <div className='relative z-10 mx-auto max-w-7xl px-6'>
        <div className='grid items-center gap-20 lg:grid-cols-[0.9fr_1fr] lg:gap-24'>
          <AtlasPageLeft
            product={product}
            pageNumber={pageNumber}
            alternateLayout={alternateLayout}
          />
          <AtlasPageRight product={product} alternateLayout={alternateLayout} />
        </div>
      </div>
    </section>
  );
}
