import {
  Cinematic,
  FadeIn,
  Reveal,
  staggerContainer,
} from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Scene } from "@/components/scene/scene";
import { SceneContainer } from "@/components/scene/scene-container";
import { homepageData } from "@/data/homepage";

export function ClosingManifestoScene() {
  const scene = homepageData.closingScene;

  return (
    <Scene className='relative overflow-visible py-32'>
      <SceneContainer tone='warm' density='light' depth='far'>
        <Reveal variants={staggerContainer} className='relative z-20'>
          <div className='mx-auto max-w-[780px] text-center'>
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

            <FadeIn delay={0.4}>
              <div className='mt-16 inline-flex rounded-full border border-white/15 bg-white/10 px-6 py-4 shadow-[0_20px_50px_rgba(37,22,13,0.12)] backdrop-blur-xl'>
                <Button variant='primary' size='lg'>
                  <a href={scene.cta.href}>{scene.cta.label}</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </Reveal>
      </SceneContainer>
    </Scene>
  );
}
