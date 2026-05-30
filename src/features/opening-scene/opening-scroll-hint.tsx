import { Parallax } from "@/components/motion";

export function OpeningScrollHint() {
  return (
    <Parallax speed={0.03}>
      <div className='text-center'>
        <p
          className='
            text-xs
            uppercase
            tracking-[0.45em]
            text-[#7a3b45]/70
          '
        >
          Explore
        </p>

        <div
          className='
            mt-4
            text-5xl
            leading-none
            text-[#d96c3d]
          '
        >
          ↓
        </div>
      </div>
    </Parallax>
  );
}
