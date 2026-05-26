# Typography System Guide

## Overview

This is a luxury cinematic brand typography system built on a clear contrast philosophy:

- **Display Typography** (Recoleta): Emotional, artistic, memorable
- **UI Typography** (Satoshi): Clean, modern, highly readable
- **Accent Micro Typography** (Inter): Precise, technical elements

This creates the feeling of a "luxury cinematic brand" rather than a generic ecommerce shop.

---

## Font Families

### Recoleta (Display/Headlines)
- **Usage**: Headlines, hero text, section titles
- **Weight**: 400, 700 (we use 700 primarily)
- **Characteristics**: Serif, elegant, editorial, nostalgic
- **Best for**: Creating emotional impact and brand personality

### Satoshi (Body/UI)
- **Usage**: Body text, buttons, UI labels, captions, main UI
- **Weight**: 300, 400, 500, 600, 700 (we use 400 primarily)
- **Characteristics**: Clean, modern, excellent readability, geometric
- **Best for**: All readable content and interface elements

### Inter (Accent/Micro Typography)
- **Usage**: Micro labels, tags, technical text, UI accents
- **Weight**: 100-900 (we use 500 primarily)
- **Characteristics**: Clean, technical, highly precise
- **Best for**: Accent elements and micro typography

```
display-2xl  → 120px  (Extra large hero text)
display-xl   → 96px   (Large hero text)
display-lg   → 72px   (Section hero)
display-md   → 56px   (Display headlines)
display-sm   → 40px   (Large display text)
```

**Example HTML:**
```html
<h1 class="display-lg text-balance">
  real meat.<br />
  wild energy.
</h1>
```

**Example React/Tailwind:**
```jsx
<h1 className="font-display text-display-lg leading-display text-balance">
  real meat.<br />
  wild energy.
</h1>
```

### Heading Scale (Recoleta)
Traditional semantic headings with brand personality.

```
h1 → 48px
h2 → 36px
h3 → 28px
h4 → 22px
```

**Example:**
```jsx
<h2 className="h2">Our Ingredients</h2>
```

Or use semantic HTML with auto-styling:
```jsx
<h2>Our Ingredients</h2>
```

### Body Scale (Satoshi)
Readable body text with appropriate sizing hierarchy.

```
body-lg   → 20px  (Large body, introductory text)
body-md   → 18px  (Standard body text)
body-sm   → 16px  (Secondary body text)
caption   → 14px  (Image captions, metadata)
micro     → 12px  (UI labels, badges)
```

**Example:**
```jsx
<p className="body-md">
  Our premium pet food is crafted with ethically sourced ingredients.
</p>

<span className="caption text-muted">
  Batch #2024-001
</span>
```

---

## Color System

### Core Palette

| Color | Value | Usage |
|-------|-------|-------|
| **Base Cream** | #F6EADF | Primary background, warmth |
| **Dark Espresso** | #1F1A17 | Primary text, high contrast |
| **Burnt Orange** | #C96A32 | Hero accent, brand energy |
| **Mustard Gold** | #D8A63D | Retro premium highlight, CTA |
| **Olive Green** | #6F7B52 | Organic natural anchor |
| **Deep Berry** | #7A3B45 | Luxury contrast, secondary accent |

### Semantic Colors

#### Backgrounds
```css
bg-primary      /* #f6eadf - Main background */
bg-secondary    /* #faf7f3 - Secondary surfaces */
bg-elevated     /* #ffffff - Cards, elevated surfaces */
bg-overlay      /* rgba(31, 26, 23, 0.8) - Modal overlays */
```

#### Text
```css
text-primary    /* #1f1a17 - Main text */
text-secondary  /* #5a5450 - Secondary text */
text-muted      /* #8b8580 - Muted/disabled text */
text-inverse    /* #f6eadf - Light text on dark */
```

**Usage:**
```jsx
<p className="text-primary">Primary text</p>
<p className="text-secondary">Secondary text</p>
<p className="text-muted">Muted text</p>
```

### Brand Accent Colors

```jsx
<span className="text-brand-orange">Burnt Orange</span>
<span className="text-brand-gold">Mustard Gold</span>
<span className="text-brand-olive">Olive Green</span>
<span className="text-brand-berry">Deep Berry</span>
```

---

## Practical Usage Examples

### Hero Section
```jsx
function HeroSection() {
  return (
    <section className="bg-primary min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl">
        <h1 className="display-lg text-balance text-brand-orange mb-6">
          Premium Pet Food
        </h1>
        <p className="body-lg text-secondary leading-body max-w-2xl">
          Ethically sourced, nutritionally complete meals for your beloved companion.
        </p>
      </div>
    </section>
  );
}
```

### Product Card
```jsx
function ProductCard() {
  return (
    <article className="bg-elevated p-6 rounded-lg">
      <h3 className="h3 text-balance mb-3">Grass-Fed Beef Recipe</h3>
      <p className="body-sm text-secondary mb-4">
        Rich in protein and essential nutrients.
      </p>
      <p className="caption text-muted">350 cal per serving</p>
    </article>
  );
}
```

### CTA Button
```jsx
function CTAButton() {
  return (
    <button className="px-6 py-3 bg-brand-gold text-text-primary font-semibold rounded-lg hover:bg-brand-orange transition-colors">
      Shop Now
    </button>
  );
}
```

---

## Design Principles

### Luxury Through Restraint

The luxury feeling comes from **NOT**:
- ❌ Many colors
- ❌ Many gradients
- ❌ Many animations

The luxury feeling comes from:
- ✅ **Spacing** - Generous whitespace and breathing room
- ✅ **Typography Confidence** - Strong hierarchy, bold display type
- ✅ **Product Framing** - Let images breathe
- ✅ **Rhythm** - Consistent pacing and visual rhythm
- ✅ **Restraint** - Minimal, intentional design choices

### Typography Personality Rules for Headlines

1. **Tight line-height** (0.95) - Dramatic, bold
2. **Slightly negative letter-spacing** (-0.04em) - Cinematic feel
3. **Big dramatic contrast** - Use scale to create hierarchy
4. **Lowercase mixed with uppercase** - Break capitalization rules:
   ```
   ✅ real meat. wild energy.
   ❌ REAL MEAT WILD ENERGY
   ```
5. **Asymmetrical wrapping** - Let headlines break naturally

### UI Text Principles

1. **Neutral** - No decorative styling
2. **Airy spacing** - Breathing room in UI
3. **Readable** - High contrast, clear hierarchy
4. **Low visual noise** - Minimal embellishment

---

## CSS Variables Reference

Access any CSS variable directly in your stylesheets:

```css
/* Colors */
background: var(--background);
color: var(--text-primary);
accent: var(--brand-orange);

/* Typography */
font-family: var(--font-display);
font-size: var(--heading-1);
line-height: var(--lh-heading);
letter-spacing: var(--ls-display);
```

---

## Responsive Behavior

The typography system is built for desktop-first but adapts gracefully:

- All font sizes are fluid and scale naturally
- Line heights remain consistent
- Spacing adapts through Tailwind's responsive utilities

Example:
```jsx
<h1 className="text-display-xl md:text-display-2xl">
  Responsive Display Heading
</h1>
```

---

## Accessibility Features

- ✅ **High contrast** by default (WCAG AA compliant)
- ✅ **Prefers reduced motion** - Respects user preferences
- ✅ **Prefers contrast** - Enhanced letter-spacing for visibility
- ✅ **Focus states** - Visible focus outlines on interactive elements

---

## Next Steps

1. **Use semantic HTML** - `<h1>`, `<h2>`, etc. get styled automatically
2. **Combine utility classes** - `className="h2 text-brand-orange"`
3. **Leverage Tailwind** - Use `font-display`, `text-display-lg`, etc.
4. **Respect spacing** - Use generous margins and padding
5. **Test contrast** - Ensure text meets accessibility standards
