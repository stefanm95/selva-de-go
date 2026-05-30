export function OpeningPaperTexture() {
  return (
    <>
      <div
        className='
          absolute
          inset-0
          pointer-events-none
          opacity-20
        '
        style={{
          backgroundImage: `url('/images/canvas/10428.jpg')`,
          backgroundSize: "cover",
        }}
      />

      <div
        className='
          absolute
          inset-0
          pointer-events-none
          opacity-10
          mix-blend-darken
        '
      />
    </>
  );
}
