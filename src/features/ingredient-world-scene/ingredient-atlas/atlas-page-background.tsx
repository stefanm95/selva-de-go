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
  // Convert hex to RGB for gradients and transparency effects
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 107, g: 31, b: 43 };
  };

  const rgb = hexToRgb(productColor);

  return (
    <>
      {/* base paper */}
      <div className='absolute inset-0 bg-[#efe3c5]' />

      {/* subtle vignette */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.08)_100%)]' />

      {/* archive grid */}
      <div
        className='absolute inset-0 opacity-[0.04]'
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(${rgb.r},${rgb.g},${rgb.b},.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(${rgb.r},${rgb.g},${rgb.b},.2) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* fold line */}
      <div
        className='absolute left-1/2 top-0 h-full w-px -translate-x-1/2'
        style={{ backgroundColor: `${productColor}10` }}
      />

      {/* page specimen marks - color coded */}
      <div
        className='absolute left-[8%] top-[12%] text-[10rem] font-black tracking-[-0.08em]'
        style={{ color: `${productColor}06` }}
      >
        {productId === "beef-lamb" && "I"}
        {productId === "wild-game-salmon" && "II"}
        {productId === "beef-chicken" && "III"}
      </div>

      <div
        className='absolute right-[8%] bottom-[10%] text-[8rem] font-black tracking-[-0.08em]'
        style={{ color: `${productColor}08` }}
      >
        {productId === "beef-lamb" && "BL"}
        {productId === "wild-game-salmon" && "WGS"}
        {productId === "beef-chicken" && "BC"}
      </div>

      {/* specimen labels */}
      <div
        className='absolute left-[12%] top-[22%] text-xs uppercase tracking-[0.35em]'
        style={{ color: `${productColor}40` }}
      >
        {productId === "beef-lamb" && "CAT. 01"}
        {productId === "wild-game-salmon" && "CAT. 02"}
        {productId === "beef-chicken" && "CAT. 03"}
      </div>

      <div
        className='absolute right-[14%] top-[18%] text-xs uppercase tracking-[0.35em]'
        style={{ color: `${productColor}40` }}
      >
        FIELD RECORD
      </div>
    </>
  );
}
