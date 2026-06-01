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
        mx-auto
        max-w-5xl
      '
    >
      <div
        className='
          rounded-[2rem]

          border-[4px]
          border-[#2f221d]

          bg-[#f6ead3]

          p-8
          md:p-12

          shadow-[0_8px_0_#2f221d]
        '
      >
        <p
          className='
            text-[11px]
            uppercase
            tracking-[0.35em]

            text-[#8d2036]/70
          '
        >
          Feeding Guide
        </p>

        <h3
          className='
            mt-4

            text-5xl

            text-[#556b4e]
          '
        >
          Feed By Instinct
        </h3>

        <p
          className='
            mt-4
            max-w-2xl

            text-[#4f1823]/80
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
              border-[#2f221d]

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

                  text-[#4f1823]
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
                border-[#2f221d]

                bg-[#efe3cf]

                p-4

                text-center
              '
            >
              <p
                className='
                  text-lg

                  text-[#556b4e]
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

                  text-[#4f1823]/70
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
