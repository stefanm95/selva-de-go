import { stampAssets } from "../world-assets";

export default function FieldGuidePageBackground() {
  return (
    <>
      <div className='absolute inset-0 bg-[#f0dfbd]' />

      <div
        className='absolute inset-0 opacity-[0.08] mix-blend-multiply'
        style={{
          backgroundImage: "url('/images/film-grain/analog-noise-soft.jfif')",
          backgroundSize: "300px",
        }}
      />

      <img
        src={stampAssets.leafBurnt}
        alt=''
        className='
          absolute
          left-[4%]
          top-[18%]
          w-56
          rotate-[-12deg]
          opacity-[0.04]
          pointer-events-none
        '
      />

      <img
        src={stampAssets.flower}
        alt=''
        className='
          absolute
          right-[6%]
          top-[12%]
          w-64
          rotate-[10deg]
          opacity-[0.04]
          pointer-events-none
        '
      />

      <img
        src={stampAssets.leafCurved}
        alt=''
        className='
          absolute
          left-[8%]
          bottom-[14%]
          w-48
          rotate-[18deg]
          opacity-[0.05]
          pointer-events-none
        '
      />

      <img
        src={stampAssets.doubleFlower}
        alt=''
        className='
          absolute
          right-[10%]
          bottom-[10%]
          w-72
          rotate-[-8deg]
          opacity-[0.04]
          pointer-events-none
        '
      />

      <img
        src={stampAssets.seeds}
        alt=''
        className='
          absolute
          left-1/2
          top-[8%]
          w-40
          -translate-x-1/2
          opacity-[0.03]
          pointer-events-none
        '
      />

      <div className='stamp-text absolute left-[6%] top-[6%] text-[10px] text-[#2f221d]/25'>
        SELVA FIELD NOTES
      </div>
    </>
  );
}
