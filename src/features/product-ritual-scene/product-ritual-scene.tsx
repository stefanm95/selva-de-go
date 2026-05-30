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
import { SceneGrid } from "@/components/scene/scene-grid";
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
    <Scene className='relative overflow-visible'>
      <SceneContainer tone='warm' density='medium' depth='near'>
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
                    {scene.title}
                  </h2>

                  <p className='mt-12 max-w-[560px] text-[1.05rem] leading-[1.95] text-[#463c35]/82'>
                    {scene.description}
                  </p>

                  <div className='mt-12 space-y-5'>
                    {highlights.map((item) => (
                      <div key={item} className='flex items-start gap-4'>
                        <div className='mt-1 h-3 w-3 rounded-full bg-[#d96c3d]' />
                        <p className='text-[1rem] leading-[1.85] text-[#463c35]/82'>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className='mt-12 flex flex-wrap gap-5'>
                    <Button variant='primary' size='lg'>
                      <a href={scene.cta.href}>{scene.cta.label}</a>
                    </Button>
                  </div>
                </div>
              </Cinematic>
            </SceneColumn>

            <SceneColumn className='xl:col-span-7'>
              <div className='relative mx-auto flex max-w-[42rem] justify-center'>
                <Float intensity={18}>
                  <Parallax speed={0.14}>
                    <div className='relative'>
                      <OpeningProduct />
                    </div>
                  </Parallax>
                </Float>

                <div className='pointer-events-none absolute right-[-2rem] top-[10%] h-[18rem] w-[18rem] rounded-full bg-[#f4c28b]/10 blur-[100px]' />
                <div className='pointer-events-none absolute left-[-4rem] bottom-[10%] h-[16rem] w-[16rem] rounded-full bg-[#7a3b45]/10 blur-[120px]' />
              </div>
            </SceneColumn>
          </SceneGrid>
        </Reveal>
      </SceneContainer>
    </Scene>
  );
}
