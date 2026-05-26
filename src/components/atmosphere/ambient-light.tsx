export function AmbientLight() {
  return (
    <>
      {/* HERO LIGHT */}
      <div
        className='
          absolute
          left-[-14%]
          top-[-22%]
          h-[920px]
          w-[920px]
          rounded-full
          bg-[#f4c977]/18
          blur-[180px]
        '
      />

      {/* BLOOM */}
      <div
        className='
          absolute
          left-[8%]
          top-[4%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-white/10
          blur-[100px]
        '
      />

      {/* SIDE ATMOSPHERE */}
      <div
        className='
          absolute
          right-[-18%]
          top-[12%]
          h-[760px]
          w-[760px]
          rounded-full
          bg-[#c96a32]/14
          blur-[160px]
        '
      />

      {/* LOWER DEPTH */}
      <div
        className='
          absolute
          bottom-[-38%]
          left-[18%]
          h-[980px]
          w-[980px]
          rounded-full
          bg-[#6f7b52]/12
          blur-[220px]
        '
      />
    </>
  );
}
