export function SpatialGrid() {
  return (
    <>
      <div
        className='
          absolute inset-0
          opacity-[0.035]
          [background-image:
            linear-gradient(to_right,#000_1px,transparent_1px),
            linear-gradient(to_bottom,#000_1px,transparent_1px)
          ]
          [background-size:140px_140px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_88%)]
        '
      />

      {/* LARGE EDITORIAL LINES */}
      <div
        className='
          absolute inset-0
          opacity-[0.04]
          [background-image:
            linear-gradient(to_right,transparent_0%,transparent_49.7%,rgba(0,0,0,0.06)_50%,transparent_50.3%,transparent_100%)
          ]
        '
      />
    </>
  );
}
