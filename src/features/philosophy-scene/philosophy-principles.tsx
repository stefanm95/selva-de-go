const principles = [
  {
    icon: "🌿",
    title: "Natural Ingredients",
    description:
      "Built from real meat, organs and carefully selected ingredients.",
  },
  {
    icon: "💧",
    title: "Rehydrates Easily",
    description: "Add warm water and restore moisture before serving.",
  },
  {
    icon: "🐾",
    title: "Highly Digestible",
    description: "Simple ingredients designed for everyday feeding.",
  },
  {
    icon: "🚫",
    title: "No Artificial Additives",
    description: "Free from unnecessary fillers, colors and preservatives.",
  },
  {
    icon: "🎒",
    title: "Travel Friendly",
    description: "Lightweight, shelf stable and easy to carry anywhere.",
  },
];

export function PhilosophyPrinciples() {
  return (
    <section
      className='
        mx-auto
        max-w-7xl
      '
    >
      <div
        className='
          text-center
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
          Core Principles
        </p>

        <h3
          className='
            mt-4

            text-5xl

            text-[#6b1f2b]
          '
        >
          Why Freeze Dried?
        </h3>
      </div>

      <div
        className='
          mt-12

          grid
          gap-6

          md:grid-cols-2
          xl:grid-cols-5
        '
      >
        {principles.map((principle, index) => (
          <div
            key={principle.title}
            className={`
              rotate-[${[-2, 1, -1, 2, -2][index]}deg]

              rounded-[1.5rem]

              border-[3px]
              border-[#2f221d]

              bg-[#f6ead3]

              p-6

              shadow-[4px_4px_0_#2f221d]
            `}
          >
            <div className='text-4xl'>{principle.icon}</div>

            <h4
              className='
                mt-4

                text-2xl

                text-[#556b4e]
              '
            >
              {principle.title}
            </h4>

            <p
              className='
                mt-3

                text-sm
                leading-relaxed

                text-[#4f1823]/80
              '
            >
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
