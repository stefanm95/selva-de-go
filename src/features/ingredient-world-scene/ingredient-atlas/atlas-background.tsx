export default function IngredientAtlasBackground() {
  return (
    <>
      {/* base paper */}
      <div className='absolute inset-0 bg-[#efe3c5]' />

      {/* subtle vignette */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.08)_100%)]' />

      {/* archive grid */}
      <div
        className='
          absolute
          inset-0
          opacity-[0.05]
        '
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(107,31,43,.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(107,31,43,.2) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* fold line */}
      <div
        className='
          absolute
          left-1/2
          top-0
          h-full
          w-px
          -translate-x-1/2
          bg-[#6b1f2b]/10
        '
      />

      {/* archive numbers */}
      <div
        className='
          absolute
          left-[8%]
          top-[12%]

          text-[10rem]
          font-black
          tracking-[-0.08em]

          text-[#6b1f2b]/[0.03]
        '
      >
        03
      </div>

      <div
        className='
          absolute
          right-[8%]
          bottom-[10%]

          text-[8rem]
          font-black
          tracking-[-0.08em]

          text-[#556b4e]/[0.04]
        '
      >
        WGS
      </div>

      {/* specimen marks */}
      <div
        className='
          absolute
          left-[12%]
          top-[22%]

          text-xs
          uppercase
          tracking-[0.35em]

          text-[#6b1f2b]/20
        '
      >
        CAT. 03
      </div>

      <div
        className='
          absolute
          right-[14%]
          top-[18%]

          text-xs
          uppercase
          tracking-[0.35em]

          text-[#6b1f2b]/20
        '
      >
        FIELD RECORD
      </div>
    </>
  );
}
