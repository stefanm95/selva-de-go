import {
  Cinematic,
  FadeIn,
  Reveal,
  staggerContainer,
} from "@/components/motion";
import { Scene } from "@/components/scene/scene";
import { SceneColumn } from "@/components/scene/scene-column";
import { SceneContainer } from "@/components/scene/scene-container";
import { SceneGrid } from "@/components/scene/scene-grid";
import { SceneOrb } from "@/components/scene/scene-orb";
import { homepageData } from "@/data/homepage";

export function InstinctEnergyScene() {
  const scene = homepageData.instinctScene;

  return (
    <Scene className='relative overflow-visible'>
      <SceneContainer tone='cool' density='dense' depth='medium'>
        <div className='pointer-events-none absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-[#d9b080]/10 blur-[140px]' />
        <Reveal variants={staggerContainer} className='relative z-20'>
          <div className='mx-auto mb-24 max-w-[760px] text-center'>
            <Cinematic delay={0.1}>
              <p className='text-[11px] uppercase tracking-[0.34em] text-[#7a3b45]'>
                {scene.eyebrow}
              </p>
              <h2 className='mt-8 display text-[clamp(4rem,8vw,6rem)] leading-[0.86] tracking-[-0.08em] text-[#1f1a17]'>
                benefits rooted in instinct.
              </h2>
            </Cinematic>
          </div>

          <div className='space-y-24'>
            {scene.statements.map((statement, index) => (
              <SceneGrid key={statement.title} className='items-start gap-y-10'>
                <SceneColumn
                  className={
                    index % 2 === 0
                      ? "xl:col-span-5"
                      : "xl:col-span-4 xl:col-start-9"
                  }
                >
                  <FadeIn delay={0.18 * (index + 1)}>
                    <div className='rounded-[3rem] border border-white/10 bg-[#fffdf9]/75 p-10 shadow-[0_28px_60px_rgba(31,19,12,0.09)] backdrop-blur-xl'>
                      <div className='mb-6 h-3 w-16 rounded-full bg-[#d96c3d]' />
                      <h3 className='text-[3rem] leading-[0.95] text-[#1f1a17]'>
                        {statement.title}
                      </h3>
                      <p className='mt-6 text-[1.02rem] leading-[1.95] text-[#463c35]/82'>
                        {statement.description}
                      </p>
                    </div>
                  </FadeIn>
                </SceneColumn>

                <SceneColumn className='xl:col-span-7'>
                  <FadeIn delay={0.24 * (index + 1)}>
                    <div className='relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#f7efe7]/70 p-10 shadow-[0_32px_64px_rgba(42,25,18,0.08)] backdrop-blur-xl'>
                      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,235,210,0.18),transparent_42%)]' />
                      <div className='relative z-10 flex h-full items-center justify-center py-20'>
                        <SceneOrb className='h-[20rem] w-[20rem] bg-[#e6b073]/12 blur-[100px]' />
                        <div className='absolute inset-x-0 bottom-10 mx-auto h-[6rem] w-[30rem] rounded-full bg-[#dfc4aa]/12 blur-[70px]' />
                      </div>
                    </div>
                  </FadeIn>
                </SceneColumn>
              </SceneGrid>
            ))}
          </div>
        </Reveal>
      </SceneContainer>
    </Scene>
  );
}
