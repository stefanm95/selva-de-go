import { navItems } from "./navigation-data";

type NavigationLinksProps = {
  onNavigate: (id: string) => void;
};

export function NavigationLinks({ onNavigate }: NavigationLinksProps) {
  return (
    <nav
      className="
        hidden
        lg:flex

        flex-1

        items-center
        justify-center

        gap-8
        xl:gap-10
      "
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className="
            group
            relative

            cursor-pointer

            py-2

            text-[0.62rem]
            font-black
            uppercase

            tracking-[0.26em]

            text-[var(--text-nav)]

            transition-all
            duration-300
          "
        >
          <span
            className="
              relative
              z-10
            "
          >
            {item.label}
          </span>

          <span
            className="
              absolute

              left-1/2
              top-[58%]

              h-[0.55rem]
              w-0

              -translate-x-1/2

              bg-[var(--brand-sun)]/80

              transition-all
              duration-300

              group-hover:w-[115%]
            "
          />
        </button>
      ))}
    </nav>
  );
}
