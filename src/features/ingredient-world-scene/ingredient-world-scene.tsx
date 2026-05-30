import {
  Cinematic,
  FadeIn,
  Float,
  Reveal,
  staggerContainer,
} from "@/components/motion";
import { Scene } from "@/components/scene/scene";
import { SceneContainer } from "@/components/scene/scene-container";
import { homepageData } from "@/data/homepage";

export function IngredientWorldScene() {
  const scene = homepageData.ingredientScene;

  return (
    <Scene className='relative overflow-visible py-28'>
      <SceneContainer tone='warm' density='light' depth='medium'>
        <div className='pointer-events-none absolute right-0 top-16 h-[28rem] w-[28rem] rounded-full bg-[#f4c28b]/10 blur-[130px]' />

        <Reveal variants={staggerContainer} className='relative z-20'>
          <div className='grid gap-24 xl:grid-cols-[0.95fr_1.05fr] items-start'>
            <div className='relative max-w-[40rem]'>
              <Cinematic delay={0.1}>
                <div className='mb-10 flex items-center gap-4'>
                  <div className='h-[4px] w-16 rounded-full bg-[#d96c3d]' />
                  <p className='text-[11px] uppercase tracking-[0.34em] text-[#7a3b45]'>
                    {scene.eyebrow}
                  </p>
                </div>

                <h2 className='display text-[clamp(4rem,8vw,6rem)] leading-[0.86] tracking-[-0.08em] text-[#1f1a17]'>
                  {scene.title.split("\n").map((line) => (
                    <span key={line} className='block'>
                      {line}
                    </span>
                  ))}
                </h2>

                <p className='mt-12 max-w-[32rem] text-[1.05rem] leading-[1.95] text-[#463c35]/82'>
                  {scene.description}
                </p>
              </Cinematic>
            </div>

            <div className='relative'>
              <Float intensity={10}>
                <div className='relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#fff5eb]/75 p-10 shadow-[0_32px_60px_rgba(50,28,18,0.08)] backdrop-blur-xl'>
                  <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,214,170,0.22),transparent_26%)]' />
                  <div className='relative z-10'>
                    <p className='text-[0.82rem] uppercase tracking-[0.42em] text-[#7a3b45]/80'>
                      ingredient study
                    </p>
                    <h3 className='mt-6 text-[2.6rem] font-semibold leading-[1.05] text-[#1f1a17]'>
                      Ingredients feel handcrafted, not stacked.
                    </h3>
                    <p className='mt-6 text-[1rem] leading-[1.9] text-[#463c35]/82'>
                      Each component is selected for its origin, function, and
                      sensory harmony.
                    </p>
                  </div>
                </div>
              </Float>

              <div className='mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]'>
                <FadeIn delay={0.2}>
                  <article className='relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#fff3e7]/80 p-10 shadow-[0_30px_65px_rgba(46,24,13,0.1)] backdrop-blur-xl'>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,233,212,0.18),transparent_45%)]' />
                    <div className='relative z-10'>
                      <p className='text-[0.82rem] uppercase tracking-[0.42em] text-[#7a3b45]/80'>
                        source
                      </p>
                      <h4 className='mt-5 text-[2.2rem] font-semibold leading-[1.05] text-[#1f1a17]'>
                        {scene.highlights[0]}
                      </h4>
                    </div>
                  </article>
                </FadeIn>

                <div className='space-y-8'>
                  <FadeIn delay={0.24}>
                    <article className='relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#fffdf9]/70 p-8 shadow-[0_24px_56px_rgba(42,25,18,0.08)] backdrop-blur-xl'>
                      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,233,212,0.16),transparent_45%)]' />
                      <div className='relative z-10'>
                        <p className='text-[0.82rem] uppercase tracking-[0.42em] text-[#7a3b45]/80'>
                          texture
                        </p>
                        <h4 className='mt-5 text-[1.8rem] font-semibold leading-[1.05] text-[#1f1a17]'>
                          {scene.highlights[1]}
                        </h4>
                      </div>
                    </article>
                  </FadeIn>

                  <FadeIn delay={0.28}>
                    <article className='relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#fffdf9]/70 p-8 shadow-[0_24px_56px_rgba(42,25,18,0.08)] backdrop-blur-xl'>
                      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,233,212,0.16),transparent_45%)]' />
                      <div className='relative z-10'>
                        <p className='text-[0.82rem] uppercase tracking-[0.42em] text-[#7a3b45]/80'>
                          energy
                        </p>
                        <h4 className='mt-5 text-[1.8rem] font-semibold leading-[1.05] text-[#1f1a17]'>
                          {scene.highlights[2]}
                        </h4>
                      </div>
                    </article>
                  </FadeIn>
                </div>
              </div>

              <FadeIn delay={0.32}>
                <article className='mt-8 overflow-hidden rounded-[3rem] border border-white/10 bg-[#fffdf9]/70 p-10 shadow-[0_28px_60px_rgba(31,19,12,0.09)] backdrop-blur-xl'>
                  <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,233,212,0.16),transparent_45%)]' />
                  <div className='relative z-10'>
                    <p className='text-[0.82rem] uppercase tracking-[0.42em] text-[#7a3b45]/80'>
                      balance
                    </p>
                    <h4 className='mt-5 text-[1.9rem] font-semibold leading-[1.05] text-[#1f1a17]'>
                      {scene.highlights[3]}
                    </h4>
                  </div>
                </article>
              </FadeIn>
            </div>
          </div>
        </Reveal>
      </SceneContainer>
    </Scene>
  );
}
