type MenuCardProps = {
  title: string;
  subtitle: string;
  number: string;
};

export function MenuCard({ title, subtitle, number }: MenuCardProps) {
  return (
    <button
      className='
        group
        relative

        h-[180px]
        w-full

        cursor-pointer

        overflow-hidden

        rounded-[14px]

        border
        border-[#2b211d]/10

        bg-[#efe2d1]

        shadow-[0_25px_50px_rgba(0,0,0,0.14)]

        transition-all
        duration-500

        hover:-translate-y-2
      '
    >
      <div
        className='
          absolute
          inset-0

          opacity-[0.15]
          mix-blend-multiply
        '
        style={{
          backgroundImage: "url('/images/wrm-paper/carton.jfif')",
          backgroundSize: "cover",
        }}
      />

      <div
        className='
          absolute
          right-4
          top-0

          font-poster

          text-[7rem]

          leading-none

          text-[#7a3b45]/10
        '
      >
        {number}
      </div>

      <div className='absolute left-6 top-6'>
        <p
          className='
            text-[10px]
            uppercase
            tracking-[0.35em]

            text-[#7a3b45]
          '
        >
          Field Note
        </p>
      </div>

      <div
        className='
          absolute
          bottom-6
          left-6
        '
      >
        <h3
          className='
            font-poster

            text-[2rem]

            leading-none

            text-[#2a1d18]
          '
        >
          {title}
        </h3>

        <p
          className='
            mt-2

            text-sm

            text-[#3d332d]/70
          '
        >
          {subtitle}
        </p>
      </div>

      <div
        className='
          absolute
          bottom-0
          left-0

          h-[4px]
          w-0

          bg-[#d96c3d]

          transition-all
          duration-500

          group-hover:w-full
        '
      />
    </button>
  );
}
