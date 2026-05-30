export function WorldLighting() {
  return (
    <div className='absolute inset-0 pointer-events-none'>
      {/* WARM LEFT LIGHT */}
      <div
        className='
          absolute
          left-0
          top-0

          h-full
          w-[38vw]

          bg-gradient-to-r
          from-[#d9a060]/18
          via-[#d9a060]/6
          to-transparent
        '
      />

      {/* RIGHT ATMOSPHERIC FILL */}
      <div
        className='
          absolute
          right-0
          top-0

          h-full
          w-[28vw]

          bg-gradient-to-l
          from-[#f4ede3]/18
          via-transparent
          to-transparent
        '
      />

      {/* HERO GLOW */}
      <div
        className='
          absolute

          left-1/2
          top-1/2

          h-[42rem]
          w-[82rem]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#f0c48f]/8

          blur-[180px]
        '
      />

      {/* CINEMATIC VIGNETTE */}
      <div
        className='
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_58%,rgba(18,14,12,0.10)_100%)]
        '
      />
    </div>
  );
}
