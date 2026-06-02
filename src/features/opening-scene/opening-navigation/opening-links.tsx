import { openingNavItems } from "@/features/navigation/navigation-data";

type OpeningLinksProps = {
  onNavigate: (id: string) => void;
};

export function OpeningLinks({ onNavigate }: OpeningLinksProps) {
  return (
    <nav
      className='
              hidden

              flex-1
              items-center
              justify-center
              cursor-pointer
              gap-12

              pl-24
              pr-12

              lg:flex
            '
    >
      {openingNavItems.map((item) => (
        <a
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className='
                  group

                  relative

                  text-[0.68rem]
                  font-black
                  uppercase

                  tracking-[0.34em]

                  text-[var(--text-nav)]/72

                  transition-all
                  duration-300

                  hover:text-[var(--brand-berry)]
                '
        >
          {item.label}

          <span
            className='
                    absolute
                    bottom-[-0.7rem]
                    left-0

                    h-[2px]
                    w-0

                    bg-[var(--brand-berry)]

                    transition-all
                    duration-300

                    group-hover:w-full
                  '
          />
        </a>
      ))}
    </nav>
  );
}
