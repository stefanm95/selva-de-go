export function OpeningCopy() {
  return (
    <div className='py-4'>
      <p
        className='
          font-accent
          text-[9px]
          sm:text-[10px]
          md:text-[11px]
          
          uppercase
          tracking-[0.45em]
          text-[#7a3b45]/75
        '
      >
        Freeze-Dried BARF Nutrition
      </p>

      <h1
        className='
          mt-4
          sm:mt-6

          font-poster
          uppercase

          leading-[0.82]

          text-[#241814]

          text-[clamp(2.5rem,6vw,8rem)]
        '
      >
        THE WILD
        <br />
        PRESERVED.
      </h1>

      <div
        className='
          mt-6
          sm:mt-10

          max-w-full
          lg:max-w-[540px]

          space-y-3
          sm:space-y-5
        '
      >
        <p
          className='
            text-[clamp(1rem,3.5vw,1.55rem)]
            leading-[1.35]

            text-[#3d332d]
          '
        >
          Freeze-dried nutrition inspired by ancestral feeding.
        </p>

        <p
          className='
            text-[clamp(0.95rem,2.5vw,1.25rem)]
            leading-[1.55]

            text-[#3d332d]/80
          '
        >
          Built around instinct. Crafted for modern dogs.
        </p>
      </div>
    </div>
  );
}
