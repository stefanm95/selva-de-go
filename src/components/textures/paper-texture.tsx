export function PaperTexture() {
  return (
    <div
      className='
        absolute
        inset-0

        opacity-[0.12]
        mix-blend-multiply
      '
      style={{
        backgroundImage: "url('/images/wrm-paper/basic-paper.jfif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
