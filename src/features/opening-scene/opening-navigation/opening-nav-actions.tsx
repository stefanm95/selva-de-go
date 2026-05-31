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
                  text-[#7a3b45]
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
                    text-[#7a3b45]/70
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
                    text-[#2b211d]
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
                bg-[#7a3b45]
                text-white
                shadow-[0_4px_0_#5d2832]
              '
      >
        <User size={15} strokeWidth={2.6} />
      </Button>
    </div>
  );
}
