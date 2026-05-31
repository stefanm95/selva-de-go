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
    <section className='relative overflow-hidden py-28 md:py-40'>
      <AtlasPageBackground
        productId={product.id}
      />

      <div className='relative z-10 mx-auto max-w-7xl px-6'>
        <div className='grid items-start gap-24 lg:grid-cols-[1fr_0.82fr] lg:gap-32'>
          <AtlasPageLeft
            product={product}
            pageNumber={pageNumber}
            alternateLayout={alternateLayout}
          />
          <AtlasPageRight
            product={product}
            alternateLayout={alternateLayout}
          />
        </div>
      </div>
    </section>
  );
}
