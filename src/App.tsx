import { NavigationProvider } from "@/features/navigation/navigation-provider";

import { SiteNavigation } from "@/features/navigation/site-navigation";
import { WorldAtmosphere } from "@/components/world/WorldAtmosphere";
import { WorldCamera } from "@/components/world/WorldCamera";
import { OpeningScene } from "@/features/opening-scene/opening-scene";
import { IngredientWorldScene } from "@/features/ingredient-world-scene/ingredient-world-scene";
import { InstinctEnergyScene } from "@/features/instinct-energy-scene/instinct-energy-scene";
import { ProductRitualScene } from "@/features/product-ritual-scene/product-ritual-scene";
import { PhilosophyScene } from "@/features/philosophy-scene/philosophy-scene";
import { TrustCommunityScene } from "@/features/trust-community-scene/trust-community-scene";
import { ClosingManifestoScene } from "@/features/closing-manifesto-scene/closing-manifesto-scene";

import GlobalNavigation from "./features/navigation/global-navigation";

export default function App() {
  return (
    <NavigationProvider>
      <WorldAtmosphere />
      <GlobalNavigation />
      <SiteNavigation />

      <WorldCamera>
        <main>
          <OpeningScene />
          <IngredientWorldScene />
          <InstinctEnergyScene />
          <ProductRitualScene />
          <PhilosophyScene />
          <TrustCommunityScene />
          <ClosingManifestoScene />
        </main>
      </WorldCamera>
    </NavigationProvider>
  );
}
