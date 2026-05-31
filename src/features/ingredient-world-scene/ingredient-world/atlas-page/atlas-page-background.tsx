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
      <div className='absolute inset-0 bg-[#dcc79f]' />

      <div
        className='absolute inset-0 opacity-35 mix-blend-multiply'
        style={{
          backgroundImage: "url('/images/wrm-paper/carton.jfif')",
          backgroundSize: "cover",
        }}
      />

      <div
        className='absolute inset-0 opacity-[0.13] mix-blend-multiply'
        style={{
          backgroundImage: "url('/images/film-grain/analog-noise-soft.jfif')",
          backgroundSize: "300px",
        }}
      />

      <div
        className='absolute left-[-18rem] top-[12%] h-[34rem] w-[34rem] opacity-10 blur-[1px]'
        style={{
          backgroundImage: "url('/images/organic-paint/paint.jfif')",
          backgroundSize: "cover",
        }}
      />

      <div
        className='absolute bottom-[2%] right-[-20rem] h-[36rem] w-[36rem] opacity-10 blur-[1px]'
        style={{
          backgroundImage: "url('/images/organic-paint/organic-olive-paint.jfif')",
          backgroundSize: "cover",
        }}
      />

      <div
        className='absolute left-1/2 top-0 h-[28rem] w-[54rem] -translate-x-1/2 opacity-[0.08] mix-blend-screen'
        style={{
          backgroundImage: "url('/images/light-leaks/light.jfif')",
          backgroundSize: "cover",
        }}
      />

      <div className='stamp-text absolute left-[6%] top-[9%] hidden text-[10px] text-[#2f221d]/35 md:block'>
        {pageMark.tag}
      </div>
    </>
  );
}
