export function PhilosophyHeader() {
  return (
    <div
      className='
        mx-auto

        text-center
      '
    >
      <p
        className='
          text-[11px]
          uppercase
          tracking-[0.45em]

          text-[var(--brand-plum)]/60
        '
      >
        Feed By Instinct
      </p>

      <h2
        className='
          mt-6

          text-5xl
          md:text-7xl

          leading-[0.9]

          text-[var(--brand-forest)]
        '
      >
        Every Dog
        <br />
        Runs Different
      </h2>

      <p
        className='
          mx-auto
          mt-8

          max-w-2xl

          text-lg

          text-[var(--text-plum)]/75
        '
      >
        Activity, age and lifestyle influence daily portions. Use the guide
        below as a starting point and adjust according to your dog's condition
        and energy needs.
      </p>
    </div>
  );
}
