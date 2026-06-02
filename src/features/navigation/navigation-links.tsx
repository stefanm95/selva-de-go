import { navItems } from "./navigation-data";

type NavigationLinksProps = {
  onNavigate: (id: string) => void;
};

export function NavigationLinks({ onNavigate }: NavigationLinksProps) {
  return (
    <nav
      className='
              absolute
              left-1/2
              top-1/2

              hidden

              -translate-x-1/2
              -translate-y-1/2

              items-center

              gap-10

              lg:flex
            '
    >
      {navItems.map((item) => (
        <a
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className='
                  group
                  cursor-pointer
                  relative

                  text-[0.64rem]
                  font-black
                  uppercase

                  tracking-[0.34em]

                  text-[var(--text-nav)]/72

                  transition-colors
                  duration-300

                  hover:text-[var(--brand-berry)]
                '
        >
          {item.label}

          <span
            className='
                    absolute
                    bottom-[-0.85rem]
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
