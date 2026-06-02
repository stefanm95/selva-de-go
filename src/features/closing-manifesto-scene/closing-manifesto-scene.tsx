import {
  Cinematic,
  FadeIn,
  Reveal,
  staggerContainer,
} from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Scene } from "@/components/scene/scene";
import { SceneColumn } from "@/components/scene/scene-column";
import { SceneContainer } from "@/components/scene/scene-container";
import { homepageData } from "@/data/homepage";

export function ClosingManifestoScene() {
  const scene = homepageData.closingScene;

  return (
    <Scene id='closing-manifesto' className='relative overflow-visible py-36'>
      <SceneContainer tone='warm' density='light' depth='far' size='wide'>
        <div className='pointer-events-none absolute left-0 top-16 h-[24rem] w-[24rem] rounded-full bg-[#f4c28b]/10 blur-[120px]' />
        <Reveal variants={staggerContainer} className='relative z-20'>
          <div className='grid gap-24 xl:grid-cols-[0.95fr_1.05fr] items-center'>
            <SceneColumn spacing='sm'>
              <Cinematic delay={0.1}>
                <SceneColumn spacing='sm'>
                  <p className='text-[11px] uppercase tracking-[0.34em] text-[var(--brand-berry)]'>
                    {scene.eyebrow}
                  </p>

                  <h2 className='display text-[clamp(4rem,8vw,6rem)] leading-[0.86] tracking-[-0.08em] text-[var(--text-primary)]'>
                    {scene.title}
                  </h2>

                  <p className='text-[1.05rem] leading-[1.95] text-[var(--text-earth)]/82'>
                    {scene.description}
                  </p>
                </SceneColumn>
              </Cinematic>

              <FadeIn delay={0.4}>
                <div className='inline-flex rounded-full border border-white/15 bg-white/10 px-6 py-4 shadow-[0_20px_50px_rgba(37,22,13,0.12)] backdrop-blur-xl'>
                  <Button variant='primary' size='lg'>
                    <a href={scene.cta.href}>{scene.cta.label}</a>
                  </Button>
                </div>
              </FadeIn>
            </SceneColumn>

            <div className='relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#fff2e7]/70 p-10 shadow-[0_32px_70px_rgba(34,19,10,0.09)] backdrop-blur-xl'>
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,232,193,0.18),transparent_42%)]' />
              <div className='relative z-10 h-full flex items-center justify-center'>
                <p className='text-[1.05rem] leading-[1.95] text-[var(--text-earth)]/88'>
                  The finale of the journey feels calm, decisive, and
                  intentionally restrained.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </SceneContainer>
    </Scene>
  );
}
