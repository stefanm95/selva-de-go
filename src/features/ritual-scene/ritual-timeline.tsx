import { ritualSteps } from "./ritualSteps";

export function RitualTimeline() {
  return (
    <div
      className='
        relative

        mt-20

        grid
        gap-10

        lg:grid-cols-4
      '
    >
      {ritualSteps.map((step, index) => (
        <div
          key={step.number}
          className='
            relative

            flex
            flex-col
            items-center

            text-center
          '
        >
          <div
            className='
              flex
              h-20
              w-20
              items-center
              justify-center

              rounded-full

              border-[4px]
              border-[var(--ink)]

              bg-[var(--brand-sun)]

              text-2xl
              font-black

              text-[var(--ink)]

              shadow-[4px_4px_0_var(--ink)]
            '
          >
            {step.number}
          </div>

          <img
            src={step.image}
            alt={step.title}
            className='
              mt-8

              h-40
              object-contain
            '
          />

          <h3
            className='
              mt-6

              text-3xl

              text-[var(--brand-forest)]
            '
          >
            {step.title}
          </h3>

          <p
            className='
              mt-4

              max-w-[22ch]

              text-sm
              leading-relaxed

              text-[var(--text-plum)]/75
            '
          >
            {step.text}
          </p>

          {index < ritualSteps.length - 1 && (
            <div
              className='
                absolute

                top-10
                left-[calc(100%_-_10px)]

                hidden
                h-[3px]
                w-full

                bg-[var(--ink)]/20

                lg:block
              '
            />
          )}
        </div>
      ))}
    </div>
  );
}
