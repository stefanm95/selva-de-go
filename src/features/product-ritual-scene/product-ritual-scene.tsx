import {
  Cinematic,
  Float,
  Parallax,
  Reveal,
  staggerContainer,
} from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Scene } from "@/components/scene/scene";
import { SceneColumn } from "@/components/scene/scene-column";
import { SceneContainer } from "@/components/scene/scene-container";
import { OpeningProduct } from "@/features/opening-scene/opening-product";
import { homepageData } from "@/data/homepage";

const highlights = [
  "Ceramic tones and soft volumes",
  "Floating light and layered depth",
  "Crafted to feel like a ritual",
];

export function ProductRitualScene() {
  const scene = homepageData.ritualScene;

  return (
    <Scene className='relative overflow-visible py-36'>
      <SceneContainer tone='warm' density='light' depth='near'>
        <div className='pointer-events-none absolute inset-x-0 top-0 h-[32rem] opacity-30 blur-[130px] bg-[radial-gradient(circle_at_top_center,rgba(255,232,193,0.2)_0%,transparent_52%)]' />

        <Reveal variants={staggerContainer} className='relative z-20'>
          <div className='grid gap-24 xl:grid-cols-[0.95fr_1.05fr] items-end'>
            <SceneColumn>
              <Cinematic delay={0.1}>
                <div className='max-w-[560px]'>
                  <div className='mb-10 flex items-center gap-4'>
                    <div className='h-[4px] w-16 rounded-full bg-[#d96c3d]' />
                    <p className='text-[11px] uppercase tracking-[0.34em] text-[#7a3b45]'>
                      {scene.eyebrow}
                    </p>
                  </div>

                  <h2 className='display text-[clamp(4rem,8vw,6rem)] leading-[0.86] tracking-[-0.08em] text-[#1f1a17]'>
                    {scene.title}
                  </h2>

                  <p className='mt-12 max-w-[34rem] text-[1.05rem] leading-[1.95] text-[#463c35]/82'>
                    {scene.description}
                  </p>

                  <div className='mt-14 space-y-6'>
                    {highlights.map((item) => (
                      <div key={item} className='flex items-start gap-4'>
                        <div className='mt-1 h-3 w-3 rounded-full bg-[#d96c3d]' />
                        <p className='text-[1rem] leading-[1.85] text-[#463c35]/82'>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className='mt-16'>
                    <Button variant='primary' size='lg'>
                      <a href={scene.cta.href}>{scene.cta.label}</a>
                    </Button>
                  </div>
                </div>
              </Cinematic>
            </SceneColumn>

            <SceneColumn className='relative'>
              <div className='pointer-events-none absolute left-1/2 top-10 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#f4c28b]/12 blur-[120px]' />
              <div className='relative mx-auto max-w-[42rem]'>
                <Float intensity={24}>
                  <Parallax speed={0.16}>
                    <div className='relative'>
                      <OpeningProduct />
                    </div>
                  </Parallax>
                </Float>
              </div>
            </SceneColumn>
          </div>
        </Reveal>
      </SceneContainer>
    </Scene>
  );
}
