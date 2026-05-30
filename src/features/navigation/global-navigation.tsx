import { useEffect, useState } from "react";

import { FoodBagTrigger } from "./food-bag-trigger";
import { FieldGuideOverlay } from "./field-guide-overlay";

export default function GlobalNavigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <FieldGuideOverlay open={open} onClose={() => setOpen(false)} />

      <div
        className='
          fixed
          bottom-4
          right-4

          md:bottom-6
          md:right-6

          xl:bottom-10
          xl:right-10

          z-[300]

          pointer-events-none
        '
      >
        <div className='pointer-events-auto'>
          <FoodBagTrigger open={open} onToggle={() => setOpen((v) => !v)} />
        </div>
      </div>
    </>
  );
}
