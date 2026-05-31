export default function IngredientAtlasHeader() {
  return (
    <header className='mb-24'>
      <div className='flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-[#6b1f2b]/70'>
        <span>Archive Record</span>
        <span className='h-px w-12 bg-[#6b1f2b]/30' />
        <span>Field Guide Nº 03</span>
      </div>

      <div className='mt-8 max-w-4xl'>
        <h2 className='font-display text-[clamp(5rem,12vw,11rem)] leading-[0.85] tracking-[-0.05em] text-[#6b1f2b]'>
          WILD
          <br />
          GAME &
          <br />
          SALMON
        </h2>

        <p className='mt-8 max-w-xl text-lg leading-relaxed text-[#6b1f2b]/75'>
          Collected across forests, rivers and gardens. Preserved through
          freeze-dried nutrition.
        </p>
      </div>
    </header>
  );
}
