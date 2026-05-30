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
import { homepageData } from "@/data/homepage";

const fragments = [
  {
    title: "Every meal feels considered.",
    text: "Designed for dogs that move, explore, and deserve a premium ritual every day.",
  },
  {
    title: "A small community growing around better nutrition.",
    text: "Trusted by owners who want more than a product—they want a philosophy.",
  },
  {
    title: "Quiet confidence, not loud claims.",
    text: "Trust is built from the ingredients, the tone, and the way the product lives in the home.",
  },
];

export function TrustCommunityScene() {
  const scene = homepageData.trustScene;

  return (
    <Scene className='relative overflow-visible'>
      <SceneContainer tone='neutral' density='medium' depth='far'>
        <div className='pointer-events-none absolute left-0 top-20 h-[26rem] w-[26rem] rounded-full bg-[#f1c692]/10 blur-[130px]' />
        <Reveal variants={staggerContainer} className='relative z-20'>
          <SceneGrid className='gap-y-24'>
            <SceneColumn className='xl:col-span-5'>
              <Cinematic delay={0.1}>
                <div className='max-w-[600px]'>
                  <div className='mb-10 flex items-center gap-4'>
                    <div className='h-[4px] w-16 rounded-full bg-[#d96c3d]' />
                    <p className='text-[11px] uppercase tracking-[0.34em] text-[#7a3b45]'>
                      {scene.eyebrow}
                    </p>
                  </div>

                  <h2 className='display text-[clamp(4rem,8vw,6rem)] leading-[0.86] tracking-[-0.08em] text-[#1f1a17]'>
                    {scene.title}
                  </h2>

                  <p className='mt-12 max-w-[520px] text-[1.05rem] leading-[1.95] text-[#463c35]/82'>
                    {scene.description}
                  </p>

                  <div className='mt-14 grid gap-6 sm:grid-cols-3'>
                    {scene.stats.map((stat) => (
                      <div
                        key={stat.value}
                        className='rounded-[2.4rem] border border-white/10 bg-[#fff6ef]/70 p-7 shadow-[0_20px_40px_rgba(42,25,18,0.08)] backdrop-blur-xl'
                      >
                        <p className='text-[2rem] font-semibold text-[#1f1a17]'>
                          {stat.value}
                        </p>
                        <p className='mt-3 text-sm uppercase tracking-[0.25em] text-[#7a3b45]/80'>
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Cinematic>
            </SceneColumn>

            <SceneColumn className='xl:col-span-7'>
              <div className='space-y-8'>
                {fragments.map((fragment, index) => (
                  <FadeIn key={fragment.title} delay={0.14 * (index + 1)}>
                    <article className='relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/8 p-10 shadow-[0_30px_70px_rgba(32,18,12,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-1'>
                      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,213,160,0.18),transparent_42%)]' />
                      <div className='relative z-10'>
                        <p className='text-[2rem] font-semibold leading-[1.05] text-[#1f1a17]'>
                          {fragment.title}
                        </p>
                        <p className='mt-5 text-[1rem] leading-[1.95] text-[#463c35]/82'>
                          {fragment.text}
                        </p>
                      </div>
                    </article>
                  </FadeIn>
                ))}
              </div>
            </SceneColumn>
          </SceneGrid>
        </Reveal>
      </SceneContainer>
    </Scene>
  );
}
