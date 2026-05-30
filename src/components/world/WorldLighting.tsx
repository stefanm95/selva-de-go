export function WorldLighting() {
  return (
    <div className='absolute inset-0 pointer-events-none'>
      <div
        className='
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(255,232,193,0.28)_0%,transparent_38%)]
        '
      />

      <div
        className='
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(255,239,224,0.14)_0%,transparent_32%)]
        '
      />

      <div
        className='
          absolute
          left-1/2
          top-[56%]
          h-[38rem]
          w-[80rem]
          -translate-x-1/2
          rounded-full
          bg-[#f4c28b]/10
          blur-[150px]
        '
      />

      <div
        className='
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_54%,rgba(21,16,14,0.12)_100%)]
        '
      />
    </div>
  );
}
