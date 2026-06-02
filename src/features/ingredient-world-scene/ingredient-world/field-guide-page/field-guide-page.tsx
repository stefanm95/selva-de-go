import type { Product } from "@/types/product";

import FieldGuidePageBackground from "./field-guide-page-background";
import AtlasPageLeft from "./field-guide-page-left";
import AtlasPageRight from "./filed-guide-page-right";

type AtlasPageProps = {
  product: Product;
  pageNumber: number;
  alternateLayout?: boolean;
};

export default function FieldGuidePage({
  product,
  pageNumber,
  alternateLayout = false,
}: AtlasPageProps) {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-24 md:py-36">
      <FieldGuidePageBackground />

      <div className="relative z-10 w-full">
        <div className="grid items-center gap-20 lg:grid-cols-[0.9fr_1fr] lg:gap-24">
          <AtlasPageLeft
            product={product}
            pageNumber={pageNumber}
            alternateLayout={alternateLayout}
          />
          <AtlasPageRight product={product} />
        </div>
      </div>
    </section>
  );
}
