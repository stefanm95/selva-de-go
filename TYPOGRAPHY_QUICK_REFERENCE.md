# Typography System - Quick Reference

## Font Classes

### Display Headlines (Recoleta)
```jsx
<h1 className="display-2xl">120px</h1>
<h1 className="display-xl">96px</h1>
<h1 className="display-lg">72px</h1>
<h1 className="display-md">56px</h1>
<h1 className="display-sm">40px</h1>
```

### Headings (Recoleta)
```jsx
<h2 className="h1">48px</h2>
<h3 className="h2">36px</h3>
<h4 className="h3">28px</h4>
<h5 className="h4">22px</h5>
```

### Body Text (Satoshi)
```jsx
<p className="body-lg">20px - Introductory text</p>
<p className="body-md">18px - Standard body</p>
<p className="body-sm">16px - Secondary</p>
<p className="caption">14px - Captions</p>
<p className="micro">12px - UI labels (Inter)</p>
```

## Color Classes

### Brand Colors
```jsx
<p className="text-brand-orange">Burnt Orange #C96A32</p>
<p className="text-brand-gold">Mustard Gold #D8A63D</p>
<p className="text-brand-olive">Olive Green #6F7B52</p>
<p className="text-brand-berry">Deep Berry #7A3B45</p>
```

### Semantic Text Colors
```jsx
<p className="text-primary">Primary text (default)</p>
<p className="text-secondary">Secondary text</p>
<p className="text-muted">Muted/disabled text</p>
<p className="text-inverse">Light text (on dark bg)</p>
```

### Background Colors
```jsx
<div className="bg-primary">Cream #F6EADF</div>
<div className="bg-secondary">Light cream #FAF7F3</div>
<div className="bg-elevated">White #FFFFFF</div>
<div className="bg-overlay">Dark overlay</div>
```

## Common Patterns

### Hero Section
```jsx
<section className="bg-primary min-h-screen flex items-center justify-center px-4">
  <div className="max-w-4xl text-center">
    <h1 className="display-lg text-balance text-brand-orange mb-6">
      Your Headline Here
    </h1>
    <p className="body-lg text-secondary mb-8 max-w-2xl mx-auto">
      Supporting copy explaining your offer.
    </p>
    <button className="px-8 py-3 bg-brand-gold text-text-primary font-semibold hover:bg-brand-orange transition-colors">
      Call to Action
    </button>
  </div>
</section>
```

### Card Component
```jsx
<article className="bg-elevated p-6 rounded-lg border border-border">
  <h3 className="h3 mb-3">Card Title</h3>
  <p className="body-md text-secondary mb-4">
    Card description text.
  </p>
  <p className="caption text-muted">Metadata</p>
</article>
```

### Section with Title
```jsx
<section className="bg-secondary py-12 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="h2 mb-8">Section Title</h2>
    {/* Content here */}
  </div>
</section>
```

## Utilities

| Class | Purpose |
|-------|---------|
| `.text-balance` | Balances text wrapping for headlines |
| `.display` | Container with display typography settings |
| `.font-light` | Font weight 300 |
| `.font-normal` | Font weight 400 |
| `.font-medium` | Font weight 500 |
| `.font-semibold` | Font weight 600 |
| `.font-bold` | Font weight 700 |
| `.font-black` | Font weight 900 |

## Tailwind Extensions

### Font Families
```jsx
className="font-display"  /* Fraunces */
className="font-body"     /* Inter */
```

### Font Sizes
```jsx
className="text-display-2xl"
className="text-h1" through "text-h4"
className="text-body-lg" through "text-micro"
```

### Line Heights
```jsx
className="leading-display"      /* 0.95 */
className="leading-heading"      /* 1.1 */
className="leading-body"         /* 1.6 */
className="leading-body-tight"   /* 1.5 */
```

## Design Reminders

✅ **DO:**
- Use generous spacing
- Mix uppercase and lowercase in display text
- Let asymmetrical wrapping happen naturally
- Build hierarchy through typography
- Use color to guide attention
- Keep UI minimal and clean

❌ **DON'T:**
- Add unnecessary decorations
- Use many colors at once
- Animate excessively
- Overcomplicate interactions
- Use generic ecommerce styling
- Ignore whitespace

## CSS Variables (for custom CSS)

```css
/* Colors */
--background: #f6eadf
--foreground: #1f1a17
--brand-orange: #c96a32
--brand-gold: #d8a63d
--brand-olive: #6f7b52
--brand-berry: #7a3b45

/* Fonts */
--font-display: "Fraunces", serif
--font-body: "Inter", sans-serif

/* Sizes */
--display-2xl: 120px
--heading-1: 48px
--body-md: 18px
--caption: 14px

/* Line heights */
--lh-display: 0.95
--lh-heading: 1.1
--lh-body: 1.6

/* Letter spacing */
--ls-display: -0.04em
--ls-normal: 0
--ls-wide: 0.02em
```

## Resources

- Full Guide: `TYPOGRAPHY_GUIDE.md`
- Showcase Component: `src/components/typography-showcase.tsx`
- Global Styles: `src/styles/globals.css`
- Config: `tailwind.config.js`
