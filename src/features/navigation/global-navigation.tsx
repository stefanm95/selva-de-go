import { FoodBagTrigger } from "./food-bag-trigger";

export default function GlobalNavigation() {
  return (
    <div
      className='
        fixed
        top-0
        left-0

        z-[999999]

        pointer-events-none

        h-screen
        w-screen
      '
    >
      <div className='pointer-events-auto'>
        <FoodBagTrigger />
      </div>
    </div>
  );
}
