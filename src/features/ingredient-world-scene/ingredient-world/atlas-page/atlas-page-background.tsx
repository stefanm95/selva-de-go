type AtlasPageBackgroundProps = {
  productId: string;
};

const pageMarks: Record<
  string,
  {
    tag: string;
  }
> = {
  "beef-lamb": {
    tag: "EXPEDITION 01",
  },
  "wild-game-salmon": {
    tag: "EXPEDITION 02",
  },
  "beef-chicken": {
    tag: "EXPEDITION 03",
  },
};

export default function AtlasPageBackground({
  productId,
}: AtlasPageBackgroundProps) {
  const pageMark = pageMarks[productId] ?? pageMarks["wild-game-salmon"];

  return (
    <>
      <div className='absolute inset-0 bg-[#f0dfbd]' />

      <div
        className='absolute inset-0 opacity-10 mix-blend-multiply'
        style={{
          backgroundImage: "url('/images/wrm-paper/carton.jfif')",
          backgroundSize: "cover",
        }}
      />

      <div
        className='absolute inset-0 opacity-[0.06] mix-blend-multiply'
        style={{
          backgroundImage: "url('/images/film-grain/analog-noise-soft.jfif')",
          backgroundSize: "300px",
        }}
      />

      <div
        className='absolute left-[12%] top-[20%] h-[24rem] w-[24rem] rounded-full bg-[#d96c3d]/10 blur-[120px]'
      />

      <div
        className='absolute bottom-[10%] right-[8%] h-[24rem] w-[24rem] rounded-full bg-[#6f7b52]/10 blur-[120px]'
      />

      <div
        className='absolute left-1/2 top-0 h-[22rem] w-[44rem] -translate-x-1/2 opacity-[0.08] mix-blend-screen'
        style={{
          backgroundImage: "url('/images/light-leaks/light.jfif')",
          backgroundSize: "cover",
        }}
      />

      <div className='stamp-text absolute left-[6%] top-[9%] hidden text-[10px] text-[#2f221d]/25 md:block'>
        {pageMark.tag}
      </div>
    </>
  );
}
