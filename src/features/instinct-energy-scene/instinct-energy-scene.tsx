import {
  Cinematic,
  FadeIn,
  Reveal,
  staggerContainer,
} from "@/components/motion";
import { Scene } from "@/components/scene/scene";
import { SceneContainer } from "@/components/scene/scene-container";
import { homepageData } from "@/data/homepage";

export function InstinctEnergyScene() {
  const scene = homepageData.instinctScene;

  return (
    <Scene className='relative overflow-visible py-32'>
      <SceneContainer tone='cool' density='light' depth='medium'>
        <div className='pointer-events-none absolute left-0 top-24 h-[30rem] w-[30rem] rounded-full bg-[#d9b080]/10 blur-[140px]' />

        <Reveal variants={staggerContainer} className='relative z-20'>
          <div className='relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#f8f2ec]/70 p-10 shadow-[0_32px_64px_rgba(42,25,18,0.08)] backdrop-blur-xl'>
            <div className='absolute -right-24 top-8 h-[18rem] w-[18rem] rounded-full bg-[#f4c28b]/14 blur-[100px]' />
            <div className='relative z-10'>
              <Cinematic delay={0.1}>
                <p className='text-[11px] uppercase tracking-[0.34em] text-[#7a3b45]'>
                  {scene.eyebrow}
                </p>
                <h2 className='mt-8 display text-[clamp(4rem,8vw,6rem)] leading-[0.88] tracking-[-0.08em] text-[#1f1a17]'>
                  movement that feels natural.
                </h2>
              </Cinematic>
            </div>
          </div>

          <div className='mt-20 grid gap-10 xl:grid-cols-[0.9fr_1.1fr]'>
            <div className='space-y-10'>
              {scene.statements.slice(0, 2).map((statement, index) => (
                <FadeIn key={statement.title} delay={0.18 * (index + 1)}>
                  <div
                    className={`relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#fffdf9]/80 p-10 shadow-[0_28px_60px_rgba(31,19,12,0.09)] backdrop-blur-xl ${
                      index === 0 ? "xl:-translate-x-6" : "xl:translate-x-6"
                    }`}
                  >
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,233,212,0.16),transparent_45%)]' />
                    <div className='relative z-10'>
                      <div className='mb-6 h-3 w-16 rounded-full bg-[#d96c3d]' />
                      <h3 className='text-[2.8rem] leading-[0.95] text-[#1f1a17]'>
                        {statement.title}
                      </h3>
                      <p className='mt-6 text-[1.02rem] leading-[1.95] text-[#463c35]/82'>
                        {statement.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className='space-y-10 pt-14'>
              {scene.statements.slice(2).map((statement, index) => (
                <FadeIn key={statement.title} delay={0.24 * (index + 1)}>
                  <div className='relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#f7efe7]/70 p-10 shadow-[0_28px_60px_rgba(42,25,18,0.08)] backdrop-blur-xl'>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,235,210,0.14),transparent_40%)]' />
                    <div className='relative z-10'>
                      <h3 className='text-[2.4rem] font-semibold leading-[1.05] text-[#1f1a17]'>
                        {statement.title}
                      </h3>
                      <p className='mt-6 text-[1.02rem] leading-[1.95] text-[#463c35]/82'>
                        {statement.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Reveal>
      </SceneContainer>
    </Scene>
  );
}
