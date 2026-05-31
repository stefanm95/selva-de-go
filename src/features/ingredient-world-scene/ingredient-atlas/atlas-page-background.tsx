import { type ReactNode } from "react";

type AtlasPageBackgroundProps = {
  productColor: string;
  productId: string;
  children?: ReactNode;
};

export default function AtlasPageBackground({
  productColor,
  productId,
}: AtlasPageBackgroundProps) {
  const pageMark = {
    "beef-lamb": {
      roman: "I",
      code: "BL",
      catalog: "CAT. 01",
    },
    "wild-game-salmon": {
      roman: "II",
      code: "WGS",
      catalog: "CAT. 02",
    },
    "beef-chicken": {
      roman: "III",
      code: "BC",
      catalog: "CAT. 03",
    },
  }[productId];

  return (
    <>
      {/* fold */}
      <div
        className='absolute left-1/2 top-0 h-full w-px -translate-x-1/2'
        style={{ backgroundColor: `${productColor}15` }}
      />

      {/* atlas index */}
      <div
        className='absolute left-[5%] top-[6%] text-[9rem] font-black tracking-[-0.08em]'
        style={{ color: `${productColor}08` }}
      >
        {pageMark?.roman}
      </div>

      {/* specimen code */}
      <div
        className='absolute right-[5%] bottom-[8%] text-[7rem] font-black tracking-[-0.08em]'
        style={{ color: `${productColor}08` }}
      >
        {pageMark?.code}
      </div>

      {/* archive labels */}
      <div
        className='absolute left-[8%] top-[20%] text-xs uppercase tracking-[0.35em]'
        style={{ color: `${productColor}55` }}
      >
        {pageMark?.catalog}
      </div>

      <div
        className='absolute right-[8%] top-[12%] text-xs uppercase tracking-[0.35em]'
        style={{ color: `${productColor}40` }}
      >
        Field Record
      </div>
    </>
  );
}
