import { Button } from "@/components/ui/button";
import { ShoppingBag, User } from "lucide-react";

export function OpeningNavActions() {
  return (
    <div
      className="
        flex
        items-center
        gap-2
      "
    >
      <Button
        variant="editorial"
        size="sm"
        aria-label="Supply Cart"
        className="
          h-12

          gap-2
          px-4

          border-[2px]
          border-[var(--ink)]

          bg-[var(--brand-sun)]

          text-[var(--ink)]

          shadow-[3px_3px_0_var(--ink)]

          transition-all
          duration-200

          hover:translate-x-[1px]
          hover:translate-y-[1px]
          hover:shadow-[2px_2px_0_var(--ink)]
        "
      >
        <ShoppingBag size={15} strokeWidth={2.8} />

        <div
          className="
            flex
            flex-col
            items-start
            leading-none
          "
        >
          <span
            className="
              stamp-text
              text-[0.45rem]
              text-[var(--ink)]
            "
          >
            SUPPLY
          </span>

          <span
            className="
              text-[0.72rem]
              font-black
              uppercase
              tracking-[0.08em]
            "
          >
            Cart · 0
          </span>
        </div>
      </Button>

      <Button
        variant="editorial"
        shape="circle"
        size="sm"
        aria-label="Account"
        className="
          h-12
          w-12

          border-[2px]
          border-[var(--ink)]

          bg-[var(--surface-paper)]

          text-[var(--brand-plum)]

          shadow-[3px_3px_0_var(--ink)]

          transition-all
          duration-200

          hover:translate-x-[1px]
          hover:translate-y-[1px]
          hover:shadow-[2px_2px_0_var(--ink)]
        "
      >
        <User size={16} strokeWidth={2.8} />
      </Button>
    </div>
  );
}
