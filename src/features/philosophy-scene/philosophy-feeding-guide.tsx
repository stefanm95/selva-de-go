const feedingGuide = [
  { weight: "2 kg", amount: "51 g" },
  { weight: "5 kg", amount: "101 g" },
  { weight: "10 kg", amount: "169 g" },
  { weight: "15 kg", amount: "230 g" },
  { weight: "20 kg", amount: "285 g" },
  { weight: "25 kg", amount: "337 g" },
  { weight: "30 kg", amount: "386 g" },
  { weight: "40 kg", amount: "479 g" },
  { weight: "50 kg", amount: "566 g" },
  { weight: "60 kg", amount: "649 g" },
];

const dogSizes = [
  {
    label: "Toy",
    range: "under 5kg",
  },
  {
    label: "Small",
    range: "5–10kg",
  },
  {
    label: "Medium",
    range: "10–25kg",
  },
  {
    label: "Large",
    range: "25–40kg",
  },
  {
    label: "Giant",
    range: "40kg+",
  },
];

export function PhilosophyFeedingGuide() {
  return (
    <section
      className='
        w-full
      '
    >
      <div
        className='
          rounded-[2rem]

          border-[4px]
          border-[var(--ink)]

          bg-[var(--surface-recipe)]

          p-8
          md:p-12

          shadow-[0_8px_0_var(--ink)]
        '
      >
        <p
          className='
            text-[11px]
            uppercase
            tracking-[0.35em]

            text-[var(--brand-rose)]/70
          '
        >
          Feeding Guide
        </p>

        <h3
          className='
            mt-4

            text-5xl

            text-[var(--brand-forest)]
          '
        >
          Feed By Instinct
        </h3>

        <p
          className='
            mt-4
            max-w-2xl

            text-[var(--text-plum)]/80
          '
        >
          Every dog runs a different trail. Use this guide as a starting point
          and adjust according to activity, age and metabolism.
        </p>

        <div className='mt-10'>
          <div
            className='
              grid
              grid-cols-2

              border-b-2
              border-[var(--ink)]

              pb-4

              text-sm
              font-black
              uppercase
              tracking-[0.2em]
            '
          >
            <span>Dog Weight</span>
            <span>Daily Portion</span>
          </div>

          <div className='mt-4 space-y-3'>
            {feedingGuide.map((row) => (
              <div
                key={row.weight}
                className='
                  grid
                  grid-cols-2

                  text-lg

                  text-[var(--text-plum)]
                '
              >
                <span>{row.weight}</span>
                <span>{row.amount}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className='
            mt-10

            grid
            gap-4

            md:grid-cols-5
          '
        >
          {dogSizes.map((size) => (
            <div
              key={size.label}
              className='
                rounded-xl

                border-[2px]
                border-[var(--ink)]

                bg-[var(--surface-paper)]

                p-4

                text-center
              '
            >
              <p
                className='
                  text-lg

                  text-[var(--brand-forest)]
                '
              >
                {size.label}
              </p>

              <p
                className='
                  mt-1

                  text-xs
                  uppercase
                  tracking-[0.15em]

                  text-[var(--text-plum)]/70
                '
              >
                {size.range}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
