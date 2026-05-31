import { products } from "@/data/products";
import type { Product } from "@/types/product";

function previewList(items: string[], limit: number) {
  const visibleItems = items.slice(0, limit);
  const hiddenCount = items.length - visibleItems.length;

  return {
    visibleItems,
    hiddenCount,
  };
}

function FormulaColumn({ product }: { product: Product }) {
  const proteins = previewList(product.ingredients.proteins, 4);
  const vegetables = previewList(product.ingredients.vegetablesAndFruits, 4);
  const herbs = previewList(product.ingredients.herbs, 3);

  return (
    <article className='border-t border-[#2f221d]/25 pt-8'>
      <p
        className='stamp-text text-[10px]'
        style={{ color: product.color }}
      >
        {product.badge}
      </p>

      <h3
        className='mt-6 text-[clamp(2.5rem,4vw,4rem)] uppercase leading-[0.9] tracking-[-0.04em]'
        style={{ color: product.color }}
      >
        {product.name}
      </h3>

      <p className='mt-8 min-h-24 text-sm leading-7 text-[#2f221d]/70'>
        {product.description}
      </p>

      <div className='mt-12 space-y-10'>
        <IngredientGroup title='Proteins' items={proteins.visibleItems} />
        <IngredientGroup
          title='Vegetables'
          items={vegetables.visibleItems}
          hiddenCount={vegetables.hiddenCount}
        />
        <IngredientGroup
          title='Herbs'
          items={herbs.visibleItems}
          hiddenCount={herbs.hiddenCount}
        />
      </div>
    </article>
  );
}

function IngredientGroup({
  title,
  items,
  hiddenCount = 0,
}: {
  title: string;
  items: string[];
  hiddenCount?: number;
}) {
  return (
    <div>
      <p className='stamp-text text-[10px] text-[#2f221d]/45'>{title}</p>

      <ul className='mt-4 space-y-2 text-sm leading-6 text-[#2f221d]/75'>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        {hiddenCount > 0 && (
          <li className='text-[#2f221d]/45'>+{hiddenCount} archived</li>
        )}
      </ul>
    </div>
  );
}

export default function IngredientAtlasSpread() {
  return (
    <section className='relative overflow-hidden bg-[#d8c39a] py-28 md:py-40'>
      <div
        className='absolute inset-0 opacity-25 mix-blend-multiply'
        style={{
          backgroundImage: "url('/images/wrm-paper/soft-paper.jfif')",
          backgroundSize: "cover",
        }}
      />
      <div
        className='absolute inset-0 opacity-[0.08] mix-blend-multiply'
        style={{
          backgroundImage: "url('/images/film-grain/analog-noise-bold.jfif')",
          backgroundSize: "260px",
        }}
      />
      <div
        className='absolute right-[-14rem] top-[-8rem] h-[34rem] w-[34rem] opacity-10'
        style={{
          backgroundImage: "url('/images/organic-paint/paint.jfif')",
          backgroundSize: "cover",
        }}
      />

      <div className='relative z-10 mx-auto max-w-7xl px-6'>
        <header className='max-w-3xl'>
          <p className='stamp-text text-[11px] text-[#6b1f2b]'>
            Selva De Go Field Record
          </p>

          <h2 className='mt-8 text-[clamp(4rem,9vw,8rem)] uppercase leading-[0.82] tracking-[-0.04em] text-[#6b1f2b]'>
            Ingredient
            <br />
            Atlas
          </h2>

          <p className='editorial-copy mt-10 max-w-2xl text-2xl leading-snug text-[#2f221d]/75'>
            A quiet catalogue of the three formulas, arranged as expedition
            records rather than a wall of ingredients.
          </p>
        </header>

        <div className='mt-28 grid gap-16 lg:grid-cols-3 lg:gap-12'>
          {products.map((product) => (
            <FormulaColumn key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
