export function OpeningCornerDecor() {
  return (
    <>
      {/* Top Left */}

      <div className='pointer-events-none absolute left-10 top-10 opacity-15'>
        <div className='text-7xl rotate-[-12deg]'>❦</div>
      </div>

      {/* Top Right */}

      <div className='pointer-events-none absolute right-10 top-10 opacity-15'>
        <div className='text-6xl rotate-[10deg]'>🐾</div>
      </div>

      {/* Bottom Left */}

      <div className='pointer-events-none absolute bottom-10 left-10 opacity-15'>
        <div className='text-7xl rotate-[8deg]'>❦</div>
      </div>

      {/* Bottom Right */}

      <div className='pointer-events-none absolute bottom-10 right-10 opacity-15'>
        <div className='text-6xl rotate-[-8deg]'>🦌</div>
      </div>
    </>
  );
}
