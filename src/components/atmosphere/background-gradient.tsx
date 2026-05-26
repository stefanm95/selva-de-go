export function BackgroundGradient() {
  return (
    <>
      {/* BASE */}
      <div className='absolute inset-0 bg-[#f6eadf]' />

      {/* FILMIC TONE */}
      <div
        className='
          absolute inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(244,201,119,0.22),transparent_34%)]
        '
      />

      <div
        className='
          absolute inset-0
          bg-[radial-gradient(circle_at_80%_20%,rgba(201,106,50,0.16),transparent_38%)]
        '
      />

      <div
        className='
          absolute inset-0
          bg-[radial-gradient(circle_at_bottom_center,rgba(111,123,82,0.14),transparent_44%)]
        '
      />

      {/* CINEMATIC HAZE */}
      <div
        className='
          absolute inset-0
          bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),transparent_18%,transparent_82%,rgba(0,0,0,0.05))]
        '
      />
    </>
  );
}
