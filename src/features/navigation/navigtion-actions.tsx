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
                  text-[#7a3b45]
                '
        />

        <span
          className='
                  text-[0.62rem]
                  font-black
                  uppercase

                  tracking-[0.18em]

                  text-[#2b211d]
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
                bg-[#7a3b45]
                text-white

                shadow-[0_4px_0_#5d2832]

                hover:shadow-[0_2px_0_#5d2832]
              '
      >
        <User size={14} strokeWidth={2.6} />
      </Button>
    </div>
  );
}
