import { Cinematic, Reveal, staggerContainer } from "@/components/motion";

import { Scene } from "@/components/scene/scene";
import { SceneContainer } from "@/components/scene/scene-container";

import { homepageData } from "@/data/homepage";

export function PhilosophyScene() {
  const scene = homepageData.philosophyScene;

  return (
    <Scene className='relative overflow-visible py-32'>
      <SceneContainer tone='neutral' density='light' depth='far'>
        <div className='pointer-events-none absolute right-0 top-[10%] h-[26rem] w-[26rem] rounded-full bg-[#7a3b45]/10 blur-[140px]' />
        <Reveal variants={staggerContainer} className='relative z-20'>
          <div className='mx-auto max-w-[780px]'>
            <Cinematic delay={0.1}>
              <p className='text-[11px] uppercase tracking-[0.34em] text-[#7a3b45]'>
                {scene.eyebrow}
              </p>

              <h2 className='mt-8 display text-[clamp(4rem,8vw,6rem)] leading-[0.86] tracking-[-0.08em] text-[#1f1a17]'>
                {scene.title}
              </h2>

              <p className='mt-12 text-[1.05rem] leading-[1.95] text-[#463c35]/82'>
                {scene.description}
              </p>
            </Cinematic>

            <div className='mt-16 grid gap-6 sm:grid-cols-2'>
              {scene.manifesto.map((item) => (
                <div
                  key={item}
                  className='rounded-[2.8rem] border border-white/10 bg-white/8 p-8 shadow-[0_28px_60px_rgba(30,18,10,0.08)] backdrop-blur-xl'
                >
                  <p className='text-[1.02rem] leading-[1.9] text-[#463c35]/88'>
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
