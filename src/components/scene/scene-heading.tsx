import { cn } from "@/lib/cn";

type SceneHeadingProps = {
  title: React.ReactNode;
  subtitle?: string;
  description?: string;
  className?: string;
};

export function SceneHeading({
  title,
  subtitle,
  description,
  className,
}: SceneHeadingProps) {
  return (
    <div
      className={cn(
        `
        relative
        z-20

        max-w-[1100px]
      `,
        className,
      )}
    >
      {subtitle && (
        <p
          className='
            mb-8

            text-xs
            uppercase

            tracking-[0.34em]

            text-[#7a3b45]
          '
        >
          {subtitle}
        </p>
      )}

      <h1
        className='
          display

          text-[clamp(5rem,12vw,12rem)]

          leading-[0.82]

          tracking-[-0.08em]

          text-[#1f1a17]
        '
      >
        {title}
      </h1>

      {description && (
        <p
          className='
            mt-10

            max-w-[620px]

            text-lg
            leading-relaxed

            text-[#463c35]/80
          '
        >
          {description}
        </p>
      )}
    </div>
  );
}
