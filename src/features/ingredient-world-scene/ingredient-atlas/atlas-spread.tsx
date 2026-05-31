import { ingredients } from "@/data/ingredients";

export default function IngredientAtlasSpread() {
  const proteins = ingredients.wildGameAndSalmon.proteins;
  const garden = ingredients.wildGameAndSalmon.vegetablesAndFruits;
  const herbs = ingredients.wildGameAndSalmon.herbs;

  return (
    <section className='relative min-h-[140vh] overflow-hidden'>
      {/* subtle archive line */}
      <div className='absolute left-0 top-0 h-px w-full bg-[#6b1f2b]/10' />

      {/* giant background label */}
      <div
        className='
          pointer-events-none
          absolute
          left-[-4rem]
          top-20
          select-none
          text-[clamp(6rem,14vw,14rem)]
          font-black
          uppercase
          leading-none
          tracking-[-0.08em]
          text-[#6b1f2b]/[0.035]
        '
      >
        WILD GAME
      </div>

      <div
        className='
          pointer-events-none
          absolute
          right-[-2rem]
          top-[22rem]
          select-none
          text-[clamp(5rem,12vw,12rem)]
          font-black
          uppercase
          leading-none
          tracking-[-0.08em]
          text-[#6b1f2b]/[0.03]
        '
      >
        SALMON
      </div>

      {/* specimen board */}
      <div className='relative min-h-[140vh]'>
        {/* proteins */}
        <div className='absolute left-[6%] top-[8%]'>
          <div className='text-[clamp(2.5rem,5vw,5rem)] font-black uppercase tracking-tight text-[#6b1f2b]'>
            {proteins[0]}
          </div>
        </div>

        <div className='absolute right-[8%] top-[16%]'>
          <div className='text-[clamp(2rem,4vw,4rem)] font-black uppercase tracking-tight text-[#6b1f2b]'>
            {proteins[3]}
          </div>
        </div>

        <div className='absolute left-[28%] top-[30%]'>
          <div className='text-[clamp(3rem,6vw,6rem)] font-black uppercase tracking-tight text-[#6b1f2b]'>
            {proteins[2]}
          </div>
        </div>

        <div className='absolute right-[20%] top-[42%]'>
          <div className='text-[clamp(2rem,4vw,4rem)] font-black uppercase tracking-tight text-[#6b1f2b]'>
            {proteins[1]}
          </div>
        </div>

        {/* garden ingredients */}
        {garden.map((item, index) => {
          const positions = [
            "left-[8%] top-[58%]",
            "left-[24%] top-[64%]",
            "left-[42%] top-[56%]",
            "left-[62%] top-[68%]",
            "right-[10%] top-[60%]",
            "left-[16%] top-[76%]",
            "left-[36%] top-[82%]",
            "left-[56%] top-[74%]",
            "right-[18%] top-[82%]",
            "left-[12%] top-[92%]",
            "left-[30%] top-[98%]",
            "left-[50%] top-[90%]",
            "right-[12%] top-[96%]",
            "left-[20%] top-[108%]",
            "left-[48%] top-[114%]",
            "right-[20%] top-[108%]",
          ];

          return (
            <div
              key={item}
              className={`absolute ${positions[index] ?? "left-[10%] top-[60%]"}`}
            >
              <span className='text-lg uppercase tracking-[0.2em] text-[#6b1f2b]/80 md:text-2xl'>
                {item}
              </span>
            </div>
          );
        })}

        {/* botanical specimens */}
        {herbs.map((item, index) => {
          const positions = [
            "left-[10%] bottom-[22%]",
            "left-[26%] bottom-[12%]",
            "left-[44%] bottom-[20%]",
            "left-[62%] bottom-[10%]",
            "right-[10%] bottom-[22%]",
            "left-[18%] bottom-[2%]",
            "left-[38%] bottom-[8%]",
            "left-[56%] bottom-[2%]",
            "right-[18%] bottom-[6%]",
            "left-[72%] bottom-[18%]",
            "left-[80%] bottom-[4%]",
          ];

          return (
            <div
              key={item}
              className={`absolute ${positions[index] ?? "left-[10%] bottom-0"}`}
            >
              <div className='mb-1 text-[10px] uppercase tracking-[0.3em] text-[#6b1f2b]/35'>
                Specimen
              </div>

              <div className='text-base uppercase tracking-[0.18em] text-[#6b1f2b] md:text-xl'>
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
