import { Parallax } from "@/components/motion";

export function WorldDepth() {
  return (
    <div className='absolute inset-0 pointer-events-none'>
      <Parallax speed={0.04}>
        <div
          className='
            absolute
            left-[-20%]
            top-[8%]
            h-[36rem]
            w-[36rem]
            rounded-full
            bg-[#f4d7b0]/10
            blur-[140px]
          '
        />
      </Parallax>

      <Parallax speed={0.08} direction='down'>
        <div
          className='
            absolute
            right-[-18%]
            top-[24%]
            h-[28rem]
            w-[28rem]
            rounded-full
            bg-[#7a3b45]/8
            blur-[110px]
          '
        />
      </Parallax>

      <Parallax speed={0.12}>
        <div
          className='
            absolute
            left-1/2
            top-[45%]
            h-[20rem]
            w-[70rem]
            -translate-x-1/2
            rounded-full
            bg-[#2b211d]/6
            blur-[130px]
          '
        />
      </Parallax>
    </div>
  );
}
