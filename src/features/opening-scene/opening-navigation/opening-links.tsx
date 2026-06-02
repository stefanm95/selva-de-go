import { openingNavItems } from "@/features/navigation/navigation-data";

type OpeningLinksProps = {
  onNavigate: (id: string) => void;
};

export function OpeningLinks({ onNavigate }: OpeningLinksProps) {
  return (
    <nav
      className="
    hidden
    lg:flex

    flex-1
    justify-center

    gap-8
    xl:gap-10
  "
    >
      {openingNavItems.map((item) => (
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

        tracking-[0.28em]

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
          top-[55%]

          h-[0.55rem]
          w-0

          -translate-x-1/2

          bg-[var(--brand-sun)]/70

          transition-all
          duration-300

          group-hover:w-[110%]
        "
          />
        </button>
      ))}
    </nav>
  );
}
