import { products } from "@/data/products";
import type { Product } from "@/types/product";

function FormulaCard({ product }: { product: Product }) {
  const keyProteins = product.ingredients.proteins.slice(0, 2);
  const keyGarden = product.ingredients.vegetablesAndFruits.slice(0, 2);
  const definingTrait = product.ingredientSpotlights[0]?.description;

  return (
    <article
      className='relative overflow-hidden rounded-[2rem] border-[4px] border-[#2f221d] p-7 shadow-[0_8px_0_#2f221d,0_28px_48px_rgba(35,18,12,0.16)]'
      style={{
        background: `linear-gradient(165deg, ${product.color} 0%, ${product.color}dd 45%, #d48a5a 100%)`,
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
        className='absolute inset-0 h-full w-full scale-110 object-cover opacity-22'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-[#1d1512] via-[#1d1512]/25 to-black/5' />
      <div className='absolute inset-[12px] rounded-[1.45rem] border border-white/12' />

      <div className='relative z-10 flex min-h-[30rem] flex-col'>
        <p className='stamp-text text-[10px] text-[#ffe5c8]/85'>
          {product.badge}
        </p>

        <h3 className='mt-5 text-[3.2rem] uppercase leading-[0.82] tracking-[-0.06em] text-white'>
          {product.name}
        </h3>

        <p className='mt-6 max-w-[18rem] text-sm leading-7 text-white/76'>
          {product.subheadline}
        </p>

        <div className='mt-auto space-y-7 pt-12'>
          <div>
            <p className='stamp-text text-[10px] text-[#ffe5c8]/60'>
              Key Proteins
            </p>
            <p className='mt-2 text-xl uppercase leading-tight text-white'>
              {keyProteins.join(" / ")}
            </p>
          </div>

          <div>
            <p className='stamp-text text-[10px] text-[#ffe5c8]/60'>
              Field Notes
            </p>
            <p className='mt-2 text-sm leading-6 text-white/75'>
              {keyGarden.join(" + ")}
            </p>
          </div>

          <div className='rounded-[1rem] bg-[#ffd35e] px-4 py-3 text-sm font-semibold leading-5 text-[#2f221d]'>
            {definingTrait}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function IngredientAtlasSpread() {
  return (
    <section className='relative overflow-hidden bg-[#f0dfbd] py-28 md:py-40'>
      <div className='absolute left-[-10%] top-[18%] h-[28rem] w-[28rem] rounded-full bg-[#d96c3d]/10 blur-[120px]' />
      <div className='absolute bottom-[12%] right-[-8%] h-[28rem] w-[28rem] rounded-full bg-[#6f7b52]/10 blur-[120px]' />
      <div
        className='absolute inset-0 opacity-[0.05] mix-blend-multiply'
        style={{
          backgroundImage: "url('/images/film-grain/analog-noise-soft.jfif')",
          backgroundSize: "300px",
        }}
      />

      <div className='relative z-10 mx-auto max-w-7xl px-6'>
        <header className='max-w-4xl text-center mx-auto'>
          <p className='stamp-text text-[11px] text-[#7a3b45]'>
            Explorer Formula Deck
          </p>

          <h2 className='mt-8 text-[clamp(4rem,9vw,7.5rem)] uppercase leading-[0.84] tracking-[-0.06em] text-[#1f1a17]'>
            Three Ways
            <br />
            To Feed Wild
          </h2>

          <p className='mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#463c35]/78'>
            A quick comparison of the three collectible formulas, focused on
            what makes each one immediately recognizable.
          </p>
        </header>

        <div className='mt-20 grid gap-10 lg:grid-cols-3'>
          {products.map((product) => (
            <FormulaCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
