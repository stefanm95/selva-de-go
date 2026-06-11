import type { Product } from "@/types/product";

import FieldGuidePageBackground from "./field-guide-page-background";
import FieldGuidePageLeft from "./field-guide-page-left";
import FieldGuidePageRight from "./filed-guide-page-right";

type FieldGuidePageProps = {
  product: Product;
  pageNumber: number;
  alternateLayout?: boolean;
};

export default function FieldGuidePage({
  product,
  pageNumber,
  alternateLayout = false,
}: FieldGuidePageProps) {
  return (
    <section
      className="
    relative
    overflow-hidden

    py-20
    md:py-24
  "
    >
      <FieldGuidePageBackground />

      <div
        className="
      relative
      z-10

      mx-auto

      max-w-[900px]
    "
      >
        <FieldGuidePageLeft product={product} pageNumber={pageNumber} />

        <FieldGuidePageRight product={product} />
      </div>
    </section>
  );
}
