export function OrganicShapes() {
  return (
    <>
      {/* PRIMARY FORM */}
      <div
        className='
          absolute
          left-[-6%]
          top-[8%]
          h-[520px]
          w-[520px]
          rounded-[42%_58%_61%_39%/42%_41%_59%_58%]
          border border-black/[0.04]
          bg-white/[0.16]
          backdrop-blur-[6px]
          shadow-[0_40px_120px_rgba(0,0,0,0.08)]
        '
      />

      {/* SECONDARY FORM */}
      <div
        className='
          absolute
          bottom-[-8%]
          right-[-4%]
          h-[620px]
          w-[620px]
          rounded-[58%_42%_34%_66%/48%_61%_39%_52%]
          border border-black/[0.04]
          bg-[#f3d8b6]/[0.18]
          backdrop-blur-[8px]
          shadow-[0_60px_140px_rgba(0,0,0,0.08)]
        '
      />

      {/* FLOATING ACCENT */}
      <div
        className='
          absolute
          left-[38%]
          top-[38%]
          h-[180px]
          w-[180px]
          rounded-full
          bg-white/[0.18]
          blur-[4px]
        '
      />
    </>
  );
}
