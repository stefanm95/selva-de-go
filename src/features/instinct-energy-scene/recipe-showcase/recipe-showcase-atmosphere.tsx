export function ExpeditionAtmosphere() {
  return (
    <>
      {/* WOOD BASE */}

      <div
        className='
          absolute
          inset-0
          bg-[#ead8bf]
        '
      />

      {/* PAPER TEXTURE */}

      <div
        className='
          absolute
          inset-0

          opacity-[0.12]
          mix-blend-multiply
        '
        style={{
          backgroundImage: "url('/images/wrm-paper/carton.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* CANVAS GRAIN */}

      <div
        className='
          absolute
          inset-0

          opacity-[0.05]
          mix-blend-overlay
        '
        style={{
          backgroundImage: "url('/images/canvas/canvas.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* HALFTONE PRINT */}

      <div
        className='
          absolute
          inset-0

          opacity-[0.04]
          mix-blend-soft-light
        '
        style={{
          backgroundImage: "url('/images/halftone-dots/monochrome-dots.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* WARM LIGHT */}

      <div
        className='
          absolute
          left-[10%]
          top-[8%]

          h-[30rem]
          w-[30rem]

          rounded-full

          bg-[#ffcb8b]/20

          blur-[140px]
        '
      />

      {/* GREEN FOREST LIGHT */}

      <div
        className='
          absolute
          right-[5%]
          top-[25%]

          h-[26rem]
          w-[26rem]

          rounded-full

          bg-[var(--brand-forest)]/10

          blur-[120px]
        '
      />

      {/* RED PRINT GLOW */}

      <div
        className='
          absolute
          left-[35%]
          bottom-[10%]

          h-[22rem]
          w-[22rem]

          rounded-full

          bg-[var(--brand-rose)]/8

          blur-[120px]
        '
      />

      {/* EXPLORER GRID */}

      <div
        className='
          absolute
          inset-0

          opacity-[0.05]
        '
        style={{
          backgroundImage: `
            linear-gradient(rgba(107,31,43,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(107,31,43,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* VIGNETTE */}

      <div
        className='
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_45%,rgba(45,25,18,0.18)_100%)]
        '
      />

      {/* CENTER SPOTLIGHT */}

      <div
        className='
          absolute
          left-1/2
          top-1/2

          h-[70rem]
          w-[70rem]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#fff4df]/15

          blur-[140px]
        '
      />
    </>
  );
}
