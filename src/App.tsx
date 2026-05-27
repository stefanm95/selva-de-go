import { NavigationProvider } from "@/features/navigation/navigation-provider";

import { SiteNavigation } from "@/features/navigation/site-navigation";

import { OpeningScene } from "@/features/opening-scene/opening-scene";

export default function App() {
  return (
    <NavigationProvider>
      <SiteNavigation />

      <main>
        <OpeningScene />
      </main>
    </NavigationProvider>
  );
}
