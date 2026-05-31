import type { Product } from "@/types/product";

type ArtifactLeftPanelProps = {
  recipe: Product;
};

export function ArtifactLeftPanel({ recipe }: ArtifactLeftPanelProps) {
  return (
    <div
      className='
        relative
        overflow-hidden
        border-r
        border-[#6b1f2b]/10
      '
      style={{
        background: `linear-gradient(
          180deg,
          ${recipe.color},
          #1f1a18
        )`,
      }}
    >
      <img
        src='/images/products/board/cartoonish-bag.png'
        alt=''
        className='
          absolute
          inset-0
          h-full
          w-full
          object-cover
          opacity-40
        '
      />

      <div
        className='
          absolute
          inset-0
          bg-gradient-to-t
          from-black/40
          to-transparent
        '
      />

      <div
        className='
          absolute
          bottom-12
          left-12
          right-12
          text-white
        '
      >
        <p
          className='
            text-[11px]
            uppercase
            tracking-[0.35em]
          '
        >
          Expedition Archive
        </p>

        <h2
          className='
            mt-4
            text-[5rem]
            leading-[0.82]
          '
        >
          {recipe.name}
        </h2>

        <p
          className='
            mt-5
            max-w-md
            text-white/80
          '
        >
          {recipe.highlight}
        </p>
      </div>
    </div>
  );
}
