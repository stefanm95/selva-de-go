import { NavigationProvider } from "@/features/navigation/navigation-provider";

import { WorldAtmosphere } from "@/components/world/WorldAtmosphere";
import { WorldCamera } from "@/components/world/WorldCamera";
import { ClosingManifestoScene } from "@/features/closing-manifesto-scene/closing-manifesto-scene";
// import { IngredientWorldScene } from "@/features/ingredient-world-scene/ingredient-world-scene";
import { InstinctEnergyScene } from "@/features/instinct-energy-scene/instinct-energy-scene";
import { SiteNavigation } from "@/features/navigation/site-navigation";
import { OpeningScene } from "@/features/opening-scene/opening-scene";
import { PhilosophyScene } from "@/features/philosophy-scene/philosophy-scene";
import { RitualScene } from "@/features/ritual-scene/ritual-scene";
import { TrustCommunityScene } from "@/features/trust-community-scene/trust-community-scene";

import GlobalNavigation from "./features/navigation/foodbag-navigation/global-navigation";

export default function App() {
  return (
    <NavigationProvider>
      <WorldAtmosphere />
      <GlobalNavigation />
      <SiteNavigation />

      <WorldCamera>
        <main>
          <OpeningScene />
          {/* <IngredientWorldScene /> */}
          <InstinctEnergyScene />
          <RitualScene />
          <PhilosophyScene />
          <TrustCommunityScene />
          <ClosingManifestoScene />
        </main>
      </WorldCamera>
    </NavigationProvider>
  );
}
