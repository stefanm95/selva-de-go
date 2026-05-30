export function WorldShapes() {
  return (
    <div className='absolute inset-0 pointer-events-none'>
      <div
        className='
          absolute
          left-[-14%]
          top-[-8%]
          h-[42rem]
          w-[42rem]
          rounded-full
          bg-[#e2b87e]/18
          blur-[80px]
        '
      />

      <div
        className='
          absolute
          bottom-[-20%]
          left-[10%]
          h-[28rem]
          w-[28rem]
          rounded-[42%]
          border-[2px]
          border-[#5c2d28]/[0.05]
          bg-[#efe1d1]/60
          blur-[2px]
        '
      />

      <div
        className='
          absolute
          right-[6%]
          top-[14%]
          h-[22rem]
          w-[22rem]
          rounded-full
          bg-[#efc28f]/14
          blur-[90px]
        '
      />
    </div>
  );
}
