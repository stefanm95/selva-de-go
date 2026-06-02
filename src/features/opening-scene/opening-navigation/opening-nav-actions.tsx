import { Button } from "@/components/ui/button";
import { ShoppingBag, User } from "lucide-react";

export function OpeningNavActions() {
  return (
    <div
      className='
              flex
              items-center
              gap-2
            '
    >
      {/* CART */}
      <Button
        variant='editorial'
        size='sm'
        aria-label='Shopping cart with 0 items'
        className='
                gap-3
                px-5
              '
      >
        <ShoppingBag
          size={15}
          strokeWidth={2.8}
          className='
                  text-[var(--brand-berry)]
                '
        />

        <div
          className='
                  flex
                  flex-col
                  items-start
                '
        >
          <span
            className='
                    text-[0.5rem]
                    font-black
                    uppercase
                    leading-none
                    tracking-[0.24em]
                    text-[var(--brand-berry)]/70
                  '
          >
            Supply Cart
          </span>

          <span
            className='
                    mt-[0.18rem]
                    text-[0.68rem]
                    font-black
                    uppercase
                    leading-none
                    tracking-[0.16em]
                    text-[var(--ink-muted)]
                  '
          >
            0 Items
          </span>
        </div>
      </Button>

      {/* PROFILE */}
      <Button
        variant='editorial'
        shape='circle'
        size='sm'
        aria-label='Account'
        className='
                bg-[var(--brand-berry)]
                text-white
                shadow-[0_4px_0_var(--brand-berry-shadow)]
              '
      >
        <User size={15} strokeWidth={2.6} />
      </Button>
    </div>
  );
}
