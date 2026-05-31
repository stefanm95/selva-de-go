export function WorldTextures() {
  return (
    <div className='absolute inset-0 pointer-events-none'>
      <div
        className='
          absolute
          inset-0
          opacity-[0.08]
          mix-blend-multiply
        '
        style={{
          backgroundImage: "url('/images/canvas/10428.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className='
          absolute
          inset-0
          opacity-[0.1]
          mix-blend-multiply
        '
        style={{
          backgroundImage: "url('/images/light-leaks/light.jfif')",
          backgroundSize: "cover",
        }}
      />

      <div
        className='
          absolute
          inset-0
          opacity-[0.08]
          mix-blend-multiply
        '
        style={{
          backgroundImage: "url('/images/organic-paint/pexels-tiles.jpg')",
          backgroundSize: "cover",
        }}
      />

      <div
        className='
          absolute
          inset-0
          opacity-[0.08]
          mix-blend-soft-light
        '
        style={{
          backgroundImage: "url('/images/film-grain/analog-noise-soft.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}
