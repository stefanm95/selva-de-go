import { OpeningBotanicalElements } from "./opening-botanical-elements";

export function OpeningBackdrop() {
  return (
    <>
      <OpeningBotanicalElements />

      {/* Sun */}

      <div
        className='
          absolute
          top-[10%]
          left-1/2
          h-[28rem]
          w-[28rem]
          -translate-x-1/2
          rounded-full
          bg-[#d8a63d]/25
        '
      />

      {/* Left shape */}

      <div
        className='
          absolute
          left-[-8rem]
          top-[20%]
          h-[24rem]
          w-[24rem]
          rounded-full
          bg-[#c96a32]/20
        '
      />

      {/* Right shape */}

      <div
        className='
          absolute
          right-[-10rem]
          bottom-[10%]
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-[#7a3b45]/15
        '
      />
    </>
  );
}
