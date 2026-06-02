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
        w-full
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

            text-[var(--brand-rose)]/70
          '
        >
          Core Principles
        </p>

        <h3
          className='
            mt-4

            text-5xl

            text-[var(--brand-plum)]
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
              border-[var(--ink)]

              bg-[var(--surface-recipe)]

              p-6

              shadow-[4px_4px_0_var(--ink)]
            `}
          >
            <div className='text-4xl'>{principle.icon}</div>

            <h4
              className='
                mt-4

                text-2xl

                text-[var(--brand-forest)]
              '
            >
              {principle.title}
            </h4>

            <p
              className='
                mt-3

                text-sm
                leading-relaxed

                text-[var(--text-plum)]/80
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
