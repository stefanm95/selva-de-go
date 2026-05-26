import { BackgroundGradient } from "./background-gradient";

import { GrainTexture } from "@/components/textures/grain-texture";
import { PaperTexture } from "@/components/textures/paper-texture";

export function SceneBackground() {
  return (
    <div
      className='
        absolute
        inset-0

        overflow-hidden
        pointer-events-none
      '
    >
      <BackgroundGradient />

      <PaperTexture />

      <GrainTexture />
    </div>
  );
}
