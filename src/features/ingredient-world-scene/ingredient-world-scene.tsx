import {
  Cinematic,
  FadeIn,
  Float,
  Reveal,
  staggerContainer,
} from "@/components/motion";
import { Scene } from "@/components/scene/scene";
import { SceneColumn } from "@/components/scene/scene-column";
import { SceneContainer } from "@/components/scene/scene-container";
import { SceneGrid } from "@/components/scene/scene-grid";
import { homepageData } from "@/data/homepage";

export function IngredientWorldScene() {
  const scene = homepageData.ingredientScene;

  return (
    <Scene className='relative overflow-visible'>
      <SceneContainer tone='warm' density='medium' depth='medium'>
        <Reveal variants={staggerContainer} className='relative z-20'>
          <SceneGrid className='gap-y-24'>
            <SceneColumn className='xl:col-span-5'>
              <Cinematic delay={0.1}>
                <div className='max-w-[620px]'>
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

                  <p className='mt-12 max-w-[560px] text-[1.05rem] leading-[1.95] text-[#463c35]/82'>
                    {scene.description}
                  </p>
                </div>
              </Cinematic>
            </SceneColumn>

            <SceneColumn className='xl:col-span-7'>
              <div className='relative flex flex-col gap-8 xl:gap-10'>
                <div className='absolute inset-x-0 top-0 h-[26rem] opacity-40 blur-[120px] bg-[radial-gradient(circle_at_center,rgba(254,233,209,0.35)_0%,transparent_60%)]' />

                <Float intensity={10}>
                  <div className='relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#fff5eb]/70 p-8 shadow-[0_32px_60px_rgba(50,28,18,0.08)] backdrop-blur-xl'>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,214,170,0.22),transparent_26%)]' />
                    <div className='relative z-10'>
                      <p className='text-[0.82rem] uppercase tracking-[0.42em] text-[#7a3b45]/80'>
                        ingredient study
                      </p>
                      <h3 className='mt-6 text-[2.4rem] font-semibold leading-[1.05] text-[#1f1a17]'>
                        Ingredients feel handcrafted, not stacked.
                      </h3>
                      <p className='mt-6 max-w-[32rem] text-[1rem] leading-[1.9] text-[#463c35]/82'>
                        Each component is selected for its origin, function, and
                        sensory harmony.
                      </p>
                    </div>
                  </div>
                </Float>

                <div className='grid gap-6 sm:grid-cols-2'>
                  {scene.highlights.map((highlight) => (
                    <FadeIn key={highlight} delay={0.22}>
                      <article className='group relative overflow-hidden rounded-[2.6rem] border border-white/10 bg-white/10 p-8 shadow-[0_22px_54px_rgba(42,25,18,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/15'>
                        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,233,212,0.18),transparent_45%)]' />
                        <div className='relative z-10'>
                          <p className='text-[0.8rem] uppercase tracking-[0.34em] text-[#7a3b45]/80'>
                            origin
                          </p>
                          <h4 className='mt-5 text-[1.9rem] font-semibold leading-[1.05] text-[#1f1a17]'>
                            {highlight}
                          </h4>
                        </div>
                      </article>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </SceneColumn>
          </SceneGrid>
        </Reveal>
      </SceneContainer>
    </Scene>
  );
}
