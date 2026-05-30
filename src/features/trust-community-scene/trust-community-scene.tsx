import {
  Cinematic,
  FadeIn,
  Reveal,
  staggerContainer,
} from "@/components/motion";
import { Scene } from "@/components/scene/scene";
import { SceneContainer } from "@/components/scene/scene-container";
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
    <Scene className='relative overflow-visible py-28'>
      <SceneContainer tone='neutral' density='medium' depth='far'>
        <div className='pointer-events-none absolute right-0 top-24 h-[26rem] w-[26rem] rounded-full bg-[#f1c692]/10 blur-[130px]' />
        <Reveal variants={staggerContainer} className='relative z-20'>
          <div className='grid gap-16 xl:grid-cols-12'>
            <div className='xl:col-span-5'>
              <Cinematic delay={0.1}>
                <div className='rounded-[3rem] border border-white/10 bg-[#fff6ef]/70 p-12 shadow-[0_32px_70px_rgba(34,19,10,0.09)] backdrop-blur-xl'>
                  <div className='mb-10 flex items-center gap-4'>
                    <div className='h-[4px] w-16 rounded-full bg-[#d96c3d]' />
                    <p className='text-[11px] uppercase tracking-[0.34em] text-[#7a3b45]'>
                      {scene.eyebrow}
                    </p>
                  </div>

                  <h2 className='display text-[clamp(4rem,8vw,6rem)] leading-[0.86] tracking-[-0.08em] text-[#1f1a17]'>
                    {scene.title}
                  </h2>

                  <p className='mt-12 text-[1.05rem] leading-[1.95] text-[#463c35]/82'>
                    {scene.description}
                  </p>
                </div>
              </Cinematic>
            </div>

            <div className='xl:col-span-7 grid gap-8'>
              <div className='grid gap-8 lg:grid-cols-[0.95fr_1.05fr]'>
                <FadeIn delay={0.14}>
                  <article className='relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/8 p-10 shadow-[0_32px_70px_rgba(32,18,12,0.08)] backdrop-blur-xl'>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,213,160,0.18),transparent_42%)]' />
                    <div className='relative z-10'>
                      <p className='text-[2rem] font-semibold leading-[1.05] text-[#1f1a17]'>
                        {fragments[0].title}
                      </p>
                      <p className='mt-5 text-[1rem] leading-[1.95] text-[#463c35]/82'>
                        {fragments[0].text}
                      </p>
                    </div>
                  </article>
                </FadeIn>

                <FadeIn delay={0.18}>
                  <article className='relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#f7f2ec]/80 p-10 shadow-[0_32px_70px_rgba(32,18,12,0.08)] backdrop-blur-xl'>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,233,210,0.14),transparent_42%)]' />
                    <div className='relative z-10'>
                      <p className='text-[2rem] font-semibold leading-[1.05] text-[#1f1a17]'>
                        {fragments[1].title}
                      </p>
                      <p className='mt-5 text-[1rem] leading-[1.95] text-[#463c35]/82'>
                        {fragments[1].text}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              </div>

              <div className='grid gap-8 lg:grid-cols-[0.75fr_0.85fr]'>
                <FadeIn delay={0.22}>
                  <article className='relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#f8f3ee]/80 p-10 shadow-[0_32px_70px_rgba(32,18,12,0.08)] backdrop-blur-xl'>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,213,160,0.16),transparent_42%)]' />
                    <div className='relative z-10'>
                      <p className='text-[2rem] font-semibold leading-[1.05] text-[#1f1a17]'>
                        {fragments[2].title}
                      </p>
                      <p className='mt-5 text-[1rem] leading-[1.95] text-[#463c35]/82'>
                        {fragments[2].text}
                      </p>
                    </div>
                  </article>
                </FadeIn>

                <div className='grid gap-8'>
                  <FadeIn delay={0.26}>
                    <div className='rounded-[3rem] border border-white/10 bg-[#fff6ef]/80 p-10 shadow-[0_28px_60px_rgba(31,19,12,0.09)] backdrop-blur-xl'>
                      <p className='text-[2.4rem] font-semibold text-[#1f1a17]'>
                        {scene.stats[0].value}
                      </p>
                      <p className='mt-3 text-sm uppercase tracking-[0.25em] text-[#7a3b45]/80'>
                        {scene.stats[0].label}
                      </p>
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.3}>
                    <div className='rounded-[3rem] border border-white/10 bg-[#fff6ef]/80 p-10 shadow-[0_28px_60px_rgba(31,19,12,0.09)] backdrop-blur-xl'>
                      <p className='text-[2.4rem] font-semibold text-[#1f1a17]'>
                        {scene.stats[1].value}
                      </p>
                      <p className='mt-3 text-sm uppercase tracking-[0.25em] text-[#7a3b45]/80'>
                        {scene.stats[1].label}
                      </p>
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.34}>
                    <div className='rounded-[3rem] border border-white/10 bg-[#fff6ef]/80 p-10 shadow-[0_28px_60px_rgba(31,19,12,0.09)] backdrop-blur-xl'>
                      <p className='text-[2.4rem] font-semibold text-[#1f1a17]'>
                        {scene.stats[2].value}
                      </p>
                      <p className='mt-3 text-sm uppercase tracking-[0.25em] text-[#7a3b45]/80'>
                        {scene.stats[2].label}
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </SceneContainer>
    </Scene>
  );
}
