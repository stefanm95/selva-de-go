import { Cinematic, Reveal, staggerContainer } from "@/components/motion";

import { Scene } from "@/components/scene/scene";
import { SceneContainer } from "@/components/scene/scene-container";

import { homepageData } from "@/data/homepage";

export function PhilosophyScene() {
  const scene = homepageData.philosophyScene;

  return (
    <Scene id='philosophy' className='relative overflow-visible py-40'>
      <SceneContainer tone='neutral' density='light' depth='far'>
        <div className='pointer-events-none absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#7a3b45]/10 blur-[120px]' />
        <Reveal variants={staggerContainer} className='relative z-20'>
          <div className='mx-auto max-w-[760px]'>
            <Cinematic delay={0.1}>
              <p className='text-[11px] uppercase tracking-[0.34em] text-[#7a3b45]'>
                {scene.eyebrow}
              </p>

              <h2 className='mt-8 display text-[clamp(4rem,8vw,6rem)] leading-[0.86] tracking-[-0.08em] text-[#1f1a17]'>
                {scene.title}
              </h2>

              <p className='mt-14 text-[1.05rem] leading-[1.95] text-[#463c35]/82'>
                {scene.description}
              </p>
            </Cinematic>

            <div className='mt-24 grid gap-8 sm:grid-cols-2'>
              {scene.manifesto.map((item) => (
                <div
                  key={item}
                  className='rounded-[3rem] border border-white/10 bg-[#fffaf4]/75 p-10 shadow-[0_28px_60px_rgba(31,19,12,0.08)] backdrop-blur-xl'
                >
                  <p className='text-[1.05rem] leading-[1.95] text-[#463c35]/88'>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </SceneContainer>
    </Scene>
  );
}
