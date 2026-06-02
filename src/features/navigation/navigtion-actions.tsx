import { Button } from "@/components/ui/button";
import { Heart, Search, ShoppingBag, User } from "lucide-react";

export function NavigationActions() {
  return (
    <div
      className="
        flex
        items-center
        gap-2
      "
    >
      <Button
        variant="utility"
        shape="circle"
        size="sm"
        aria-label="Search"
        className="
          border-[var(--border)]
          bg-[var(--surface-paper)]

          text-[var(--ink)]

          transition-all
          duration-200

          hover:-translate-y-[1px]
        "
      >
        <Search size={14} strokeWidth={2.5} />
      </Button>

      <Button
        variant="utility"
        shape="circle"
        size="sm"
        aria-label="Wishlist"
        className="
          border-[var(--border)]
          bg-[var(--surface-paper)]

          text-[var(--ink)]

          transition-all
          duration-200

          hover:-translate-y-[1px]
        "
      >
        <Heart size={14} strokeWidth={2.5} />
      </Button>

      <Button
        variant="editorial"
        size="sm"
        aria-label="Cart"
        className="
          h-10

          gap-2
          px-4

          border-2
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
        <ShoppingBag size={14} strokeWidth={2.8} />

        <span
          className="
            stamp-text
            text-[0.52rem]
          "
        >
          CART · 0
        </span>
      </Button>

      <Button
        variant="editorial"
        shape="circle"
        size="sm"
        aria-label="Account"
        className="
          border-2
          border-[var(--ink)]

          bg-[var(--brand-plum)]

          text-[var(--text-inverse)]

          shadow-[3px_3px_0_var(--ink)]

          transition-all
          duration-200

          hover:translate-x-[1px]
          hover:translate-y-[1px]
          hover:shadow-[2px_2px_0_var(--ink)]
        "
      >
        <User size={14} strokeWidth={2.7} />
      </Button>
    </div>
  );
}
