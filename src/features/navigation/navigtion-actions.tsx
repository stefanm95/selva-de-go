import { Button } from "@/components/ui/button";
import { Heart, Search, ShoppingBag, User } from "lucide-react";

export function NavigationActions() {
  return (
    <div
      className='
              flex
              items-center

              gap-2
            '
    >
      {/* SEARCH */}
      <Button
        variant='utility'
        shape='circle'
        size='sm'
        aria-label='Search products'
      >
        <Search size={14} strokeWidth={2.5} />
      </Button>

      {/* FAVORITES */}
      <Button variant='utility' shape='circle' size='sm' aria-label='Wishlist'>
        <Heart size={14} strokeWidth={2.5} />
      </Button>

      {/* CART */}
      <Button
        variant='editorial'
        size='sm'
        aria-label='Shopping cart'
        className='
                gap-2.5

                px-4
              '
      >
        <ShoppingBag
          size={14}
          strokeWidth={2.7}
          className='
                  text-[var(--brand-berry)]
                '
        />

        <span
          className='
                  text-[0.62rem]
                  font-black
                  uppercase

                  tracking-[0.18em]

                  text-[var(--ink-muted)]
                '
        >
          0
        </span>
      </Button>

      {/* ACCOUNT */}
      <Button
        variant='editorial'
        shape='circle'
        size='sm'
        aria-label='Account'
        className='
                bg-[var(--brand-berry)]
                text-white

                shadow-[0_4px_0_var(--brand-berry-shadow)]

                hover:shadow-[0_2px_0_var(--brand-berry-shadow)]
              '
      >
        <User size={14} strokeWidth={2.6} />
      </Button>
    </div>
  );
}
