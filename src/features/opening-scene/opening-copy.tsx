import { homepageData } from "@/data/homepage";

export function OpeningCopy() {
  const scene = homepageData.openingScene;

  return (
    <div className='relative z-30'>
      {/* EYEBROW */}
      <p
        className='
          mb-8

          text-[11px]
          font-medium
          uppercase

          tracking-[0.34em]

          text-[#7a3b45]
        '
      >
        {scene.eyebrow}
      </p>

      {/* TITLE */}
      <h1
        className='
          display

          max-w-[760px]

          text-[clamp(5rem,9vw,10rem)]

          leading-[0.84]
          tracking-[-0.08em]

          text-[#1f1a17]
        '
      >
        wild nutrition
        <br />
        <span className='text-[#7a3b45]'>for modern dogs</span>
      </h1>

      {/* DESCRIPTION */}
      <p
        className='
          mt-10

          max-w-[520px]

          text-lg
          leading-[1.9]

          text-[#463c35]/80
        '
      >
        {scene.description}
      </p>
    </div>
  );
}
