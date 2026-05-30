const paws = [
  { x: 0, y: 0, r: -12 },
  { x: 48, y: 56, r: 8 },
  { x: 102, y: 112, r: -6 },
  { x: 162, y: 166, r: 12 },
];

export function PawTrail() {
  return (
    <div
      className='
        absolute

        bottom-[10%]
        right-[4%]

        z-0
      '
    >
      {paws.map((paw, index) => (
        <div
          key={index}
          className='absolute'
          style={{
            left: paw.x,
            top: paw.y,
            transform: `rotate(${paw.r}deg)`,
          }}
        >
          <div
            className='
              h-7
              w-7

              rounded-full

              bg-[#7a3b45]/[0.05]
            '
          />
        </div>
      ))}
    </div>
  );
}
