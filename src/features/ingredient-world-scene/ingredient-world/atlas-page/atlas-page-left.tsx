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
  const spotlights = product.ingredientSpotlights.slice(0, 3);

  return (
    <FadeIn className={alternateLayout ? "lg:order-2" : ""}>
      <div className='relative flex justify-center lg:justify-start'>
        <div className='absolute bottom-2 left-1/2 h-[8rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#2a1d18]/16 blur-[22px]' />

        <article
          className='relative h-[34rem] w-full max-w-[25rem] overflow-hidden rounded-[2rem] border-[4px] border-[#2f221d] shadow-[0_8px_0_#2f221d,0_30px_54px_rgba(35,18,12,0.18)]'
          style={{
            background: `linear-gradient(165deg, ${product.color} 0%, ${product.color}dd 42%, #d48a5a 100%)`,
          }}
        >
          <div
            className='absolute inset-0 opacity-[0.08] mix-blend-multiply'
            style={{
              backgroundImage: "url('/images/wrm-paper/carton.jfif')",
              backgroundSize: "cover",
            }}
          />
          <div
            className='absolute inset-0 opacity-[0.06] mix-blend-overlay'
            style={{
              backgroundImage: "url('/images/canvas/canvas.jfif')",
              backgroundSize: "cover",
            }}
          />
          <img
            src='/images/products/board/cartoonish-bag.png'
            alt=''
            aria-hidden
            className='absolute inset-0 h-full w-full scale-105 object-cover opacity-35'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-[#1d1512] via-[#1d1512]/20 to-black/10' />
          <div className='absolute inset-[14px] rounded-[1.45rem] border border-white/12' />

          <div className='absolute left-7 right-7 top-7 z-10 flex items-center justify-between'>
            <span className='stamp-text text-[10px] text-[#ffe5c8]'>
              Formula {String(pageNumber).padStart(2, "0")}
            </span>
            <span className='h-3 w-3 rounded-full bg-[#ffd35e] shadow-[0_0_18px_rgba(255,211,94,0.55)]' />
          </div>

          <div className='absolute bottom-8 left-8 right-8 z-10'>
            <p className='stamp-text text-[10px] text-[#ffe5c8]/85'>
              {product.badge}
            </p>

            <h2 className='mt-4 text-[clamp(3.2rem,5vw,4.6rem)] uppercase leading-[0.8] tracking-[-0.06em] text-white'>
              {product.name}
            </h2>

            <div className='mt-6 h-px w-24 bg-white/20' />

            <p className='mt-5 text-sm font-medium text-white/82'>
              {product.analytics.protein} protein / {product.highlight}
            </p>

            <p className='mt-4 text-[11px] uppercase tracking-[0.2em] text-white/70'>
              {spotlights.map((item) => item.title).join(" / ")}
            </p>
          </div>
        </article>
      </div>
    </FadeIn>
  );
}
