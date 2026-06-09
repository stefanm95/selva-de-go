# SELVA DE GO - ARCHITECTURE

## Project Structure

src/

  app/
    providers
    contexts

  components/

    layout/
      scene-container
      scene-column

    motion/
      presets
      transitions
      stagger

    ui/
      button
      section-header

  features/

    navigation/

    opening-scene/
    ingredient-world/
    instinct-energy/
    ritual-scene/
    philosophy/
    trust-community/
    closing-manifesto/

## Navigation Systems

Three navigation layers exist.

### OpeningNavigation

Purpose:

Large cinematic navigation visible only during hero experience.

Characteristics:

- transparent
- editorial
- atmospheric
- part of hero composition

Must never become a standard navbar.

---

### SiteNavigation

Purpose:

Compact navigation appearing after hero.

Characteristics:

- persistent
- practical
- Shopify-inspired
- easier content access

Must feel like a premium field-guide toolbar.

---

### FieldGuideOverlay

Purpose:

World navigation system.

Characteristics:

- immersive
- collector edition
- archive feeling

Not a mobile drawer.
Not a standard menu.

Think:

field journal
expedition index
collector guide

## Layout System

Layout is controlled by:

SceneContainer
SceneColumn

These components are the source of truth.

Avoid:

- section width classes
- custom max-width systems
- duplicate layout wrappers

## Typography

Display:
Anton

Editorial:
Cormorant Garamond

Body:
Inter

Accent:
Staatliches

Rules:

Display = impact

Editorial = storytelling

Body = readability

Accent = stamps, labels, metadata

## Color System

All colors come from globals.css tokens.

Never introduce:

hardcoded brand colors

unless decorative one-off atmospheric elements.

## Motion System

Framer Motion only.

Reuse:

motion/presets
motion/transitions
motion/stagger

Avoid:

- random animations
- large hover movement
- excessive blur
- excessive parallax

Motion should feel:

editorial
premium
physical

## Component Strategy

Before creating a component:

1. Inspect existing components.
2. Extend existing solutions.
3. Reuse existing variants.

Avoid:

parallel systems.

## Current World Structure

Opening Scene
Ingredient World
Instinct & Energy
Ritual
Philosophy
Community
Manifesto

These are chapters.

Not sections.

Every chapter should feel part of one world.