export function GrainTexture() {
  return (
    <div
      className='
        absolute
        inset-0

        opacity-[0.04]
        mix-blend-soft-light
      '
      style={{
        backgroundImage: "url('/images/film-grain/analog-noise-soft.jfif')",
        backgroundSize: "cover",
      }}
    />
  );
}
