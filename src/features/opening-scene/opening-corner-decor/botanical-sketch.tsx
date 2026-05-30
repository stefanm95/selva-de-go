export function BotanicalSketch() {
  return (
    <div
      className='
        absolute

        left-[6%]
        top-[18%]

        z-0

        h-[18rem]
        w-[10rem]

        opacity-[0.05]
      '
    >
      <div
        className='
          absolute
          left-1/2
          top-0

          h-full
          w-px

          bg-[#7a3b45]
        '
      />

      {[0, 1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className='
            absolute
            left-1/2

            h-14
            w-8

            border
            border-[#7a3b45]

            rounded-full
          '
          style={{
            top: `${item * 55}px`,
            transform:
              item % 2 === 0
                ? "translateX(-100%) rotate(-30deg)"
                : "translateX(0%) rotate(30deg)",
          }}
        />
      ))}
    </div>
  );
}
