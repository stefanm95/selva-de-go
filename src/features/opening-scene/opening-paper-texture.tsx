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
          backgroundImage: `url('/images/canvas/monsterkoi-mediterra.jpg')`,
          backgroundSize: "cover",
        }}
      />

      <div
        className='
    absolute
    right-[-5rem]
    bottom-[-5rem]

    font-poster

    text-[18rem]
    leading-none

    text-black/[0.03]
    top-[16rem]
    uppercase

    pointer-events-none
  '
      >
        GO
      </div>

      <div
        className='
    absolute
    0
    left-[12rem]

    -translate-y-1/2

    font-poster

    text-[22rem]
    leading-none

    text-[#7a3b45]/[0.04]
  '
      >
        SELVA
      </div>

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
