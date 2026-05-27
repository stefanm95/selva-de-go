import { cn } from "@/lib/cn";

type PhilosophyEditorialCardProps = {
  className?: string;
};

export function PhilosophyEditorialCard({
  className,
}: PhilosophyEditorialCardProps) {
  return (
    <div
      className={cn(
        `
          group

          relative

          overflow-hidden

          rounded-[2.6rem]

          border
          border-[#2b211d]/10

          bg-[#f8efe6]/72

          p-8
          md:p-10

          backdrop-blur-md

          transition-all
          duration-500

          hover:-translate-y-[4px]
          hover:border-[#7a3b45]/14
        `,
        className,
      )}
    >
      {/* INNER CINEMATIC LIGHT */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.24)_0%,transparent_58%)]
        "
      />

      {/* GLOW */}
      <div
        className="
          absolute
          right-[-2rem]
          top-[-2rem]

          h-[10rem]
          w-[10rem]

          rounded-full

          bg-[#f1c692]/10

          blur-[60px]
        "
      />

      {/* INDEX */}
      <div
        className="
          absolute
          right-7
          top-6

          text-[0.62rem]
          font-black
          uppercase

          tracking-[0.28em]

          text-[#7a3b45]/26
        "
      >
        {/* 0{index + 1} */}
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          flex
          items-start

          gap-5
        "
      >
        {/* BULLET */}
        <div
          className="
            relative

            mt-[0.45rem]

            flex
            h-4
            w-4

            items-center
            justify-center

            rounded-full

            border-2
            border-[#7a3b45]

            bg-[#d96c3d]

            shadow-[0_2px_0_#7a3b45]
          "
        >
          <div
            className="
              h-[0.28rem]
              w-[0.28rem]

              rounded-full

              bg-[#fff4ea]
            "
          />
        </div>

        {/* TEXT */}
        <div
          className="
            flex
            flex-col
          "
        >
          <p
            className="
              max-w-[28rem]

              text-[1rem]
              font-black
              uppercase

              leading-[1.7]
              tracking-[0.16em]

              text-[#2b211d]
            "
          >
            {/* {text} */}
          </p>

          <div
            className="
              mt-6

              h-[1px]
              w-16

              bg-[#7a3b45]/14

              transition-all
              duration-500

              group-hover:w-24
            "
          />
        </div>
      </div>
    </div>
  );
}
