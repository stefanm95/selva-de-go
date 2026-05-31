import { ingredients } from "@/data/ingredients";

export default function IngredientAtlasSpread() {
  const proteins = ingredients.wildGameAndSalmon.proteins;
  const garden = ingredients.wildGameAndSalmon.vegetablesAndFruits;
  const herbs = ingredients.wildGameAndSalmon.herbs;

  return (
    <div className='relative'>
      {/* archive line */}
      <div className='mb-16 h-px bg-[#6b1f2b]/15' />

      {/* proteins */}
      <section className='mb-20'>
        <div className='mb-6 text-xs uppercase tracking-[0.3em] text-[#6b1f2b]/50'>
          Protein Collection
        </div>

        <div className='relative min-h-[18rem]'>
          <div className='absolute left-0 top-0 text-4xl font-black text-[#6b1f2b]'>
            {proteins[0]}
          </div>

          <div className='absolute right-12 top-8 text-3xl font-black text-[#6b1f2b]'>
            {proteins[1]}
          </div>

          <div className='absolute left-1/3 top-28 text-5xl font-black text-[#6b1f2b]'>
            {proteins[2]}
          </div>

          <div className='absolute right-1/4 bottom-0 text-4xl font-black text-[#6b1f2b]'>
            {proteins[3]}
          </div>
        </div>
      </section>

      <div className='mb-16 h-px bg-[#6b1f2b]/15' />

      {/* garden */}
      <section className='mb-20'>
        <div className='mb-10 text-xs uppercase tracking-[0.3em] text-[#6b1f2b]/50'>
          Garden Collection
        </div>

        <div className='flex flex-wrap gap-x-12 gap-y-6'>
          {garden.map((item) => (
            <span
              key={item}
              className='text-xl uppercase tracking-wide text-[#6b1f2b]'
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <div className='mb-16 h-px bg-[#6b1f2b]/15' />

      {/* botanicals */}
      <section>
        <div className='mb-10 text-xs uppercase tracking-[0.3em] text-[#6b1f2b]/50'>
          Botanical Archive
        </div>

        <div className='grid grid-cols-2 gap-y-6 md:grid-cols-4'>
          {herbs.map((item) => (
            <div key={item}>
              <div className='text-sm uppercase tracking-[0.25em] text-[#6b1f2b]/40'>
                Specimen
              </div>

              <div className='mt-2 text-xl text-[#6b1f2b]'>{item}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
