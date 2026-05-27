// features/philosophy-scene/philosophy-atmosphere.tsx

export function PhilosophyAtmosphere() {
  return (
    <>
      {/* RED CORE */}
      <div
        className="
          pointer-events-none

          absolute
          left-[8%]
          top-[14%]

          h-[28rem]
          w-[28rem]

          rounded-full

          bg-[#7a3b45]/10

          blur-[120px]
        "
      />

      {/* WARM LIGHT */}
      <div
        className="
          pointer-events-none

          absolute
          right-[2%]
          top-[18%]

          h-[22rem]
          w-[22rem]

          rounded-full

          bg-[#f1c692]/16

          blur-[100px]
        "
      />

      {/* LOWER DEPTH */}
      <div
        className="
          pointer-events-none

          absolute
          bottom-[-10rem]
          left-1/2

          h-[24rem]
          w-[60rem]

          -translate-x-1/2

          rounded-full

          bg-[#2b211d]/6

          blur-[120px]
        "
      />
    </>
  );
}
