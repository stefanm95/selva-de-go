import { RegisteredMarkMonument } from "./registered-mark-monument";

import { PawTrail } from "./paw-trail";
import { BotanicalSketch } from "./botanical-sketch";

export function OpeningCornerDecor() {
  return (
    <>
      <RegisteredMarkMonument />
      <BotanicalSketch />
      <PawTrail />
    </>
  );
}
