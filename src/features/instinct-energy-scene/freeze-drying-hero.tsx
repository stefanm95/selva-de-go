import { Cinematic } from "@/components/motion";

export function FreezeDryingHero() {
  return (
    <div className='max-w-5xl '>
      <Cinematic>
        <p className='text-xs uppercase tracking-[0.35em] text-[#7a3b45]'>
          Preservation Process
        </p>

        <h2
          className='
            mt-8
          
            font-display
            text-[clamp(4rem,10vw,8rem)]
            leading-[0.85]
            tracking-[-0.08em]
            text-[#1f1a17]
          '
        >
          freeze dried.
          <br />
          instinct preserved.
        </h2>

        <p className='mt-10 max-w-2xl text-lg leading-relaxed text-[#463c35]/80'>
          Carefully selected ingredients are frozen and gently preserved to
          maintain nutritional integrity, flavour, and natural character.
        </p>
      </Cinematic>
    </div>
  );
}
