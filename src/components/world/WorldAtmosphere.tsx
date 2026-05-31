import { WorldDepth } from "@/components/world/WorldDepth";
import { WorldLighting } from "@/components/world/WorldLighting";
import { WorldShapes } from "@/components/world/WorldShapes";
import { WorldTextures } from "@/components/world/WorldTextures";
import { SceneBackground } from "@/components/atmosphere/scene-background";

export function WorldAtmosphere() {
  return (
    <>
      <div className='pointer-events-none fixed inset-0 z-0 overflow-hidden'>
        <SceneBackground />
        <WorldTextures />
        <WorldDepth />
        <WorldLighting />
        <WorldShapes />
      </div>
    </>
  );
}
