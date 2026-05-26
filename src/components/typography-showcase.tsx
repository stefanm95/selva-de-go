/**
 * Typography Showcase Component
 * Demonstrates the complete typography system and color palette
 * This is a reference component - remove or repurpose in production
 */
export function TypographyShowcase() {
  return (
    <div className="min-h-screen bg-primary text-text-primary p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="mb-16 border-b border-border pb-12">
          <h1 className="display-lg text-balance mb-4 text-brand-orange">
            Typography System Showcase
          </h1>
          <p className="body-lg text-secondary max-w-2xl">
            A complete reference for Selva de Go's luxury cinematic brand
            typography and color system.
          </p>
        </section>

        {/* Display Scale */}
        <section className="mb-16">
          <h2 className="h2 mb-8 text-brand-gold">Display Scale</h2>
          <div className="space-y-8">
            <div className="bg-secondary p-6 rounded-lg">
              <p className="text-xs text-muted mb-2 font-mono">
                display-2xl / 120px
              </p>
              <p className="display-2xl text-brand-orange">
                real meat. wild energy.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <p className="text-xs text-muted mb-2 font-mono">
                display-xl / 96px
              </p>
              <p className="display-xl">Premium Quality</p>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <p className="text-xs text-muted mb-2 font-mono">
                display-lg / 72px
              </p>
              <p className="display-lg">Organic & Fresh</p>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <p className="text-xs text-muted mb-2 font-mono">
                display-md / 56px
              </p>
              <p className="display-md">Delicious Meals</p>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <p className="text-xs text-muted mb-2 font-mono">
                display-sm / 40px
              </p>
              <p className="display-sm">Your Pet's Best Friend</p>
            </div>
          </div>
        </section>

        {/* Headings Scale */}
        <section className="mb-16">
          <h2 className="h2 mb-8 text-brand-gold">Heading Scale</h2>
          <div className="space-y-6 bg-secondary p-8 rounded-lg">
            <div>
              <p className="text-xs text-muted mb-2 font-mono">h1 / 48px</p>
              <h1>Ethical Sourcing</h1>
            </div>

            <div>
              <p className="text-xs text-muted mb-2 font-mono">h2 / 36px</p>
              <h2>Premium Ingredients</h2>
            </div>

            <div>
              <p className="text-xs text-muted mb-2 font-mono">h3 / 28px</p>
              <h3>Nutritionally Complete</h3>
            </div>

            <div>
              <p className="text-xs text-muted mb-2 font-mono">h4 / 22px</p>
              <h4>Made with Love</h4>
            </div>
          </div>
        </section>

        {/* Body Scale */}
        <section className="mb-16">
          <h2 className="h2 mb-8 text-brand-gold">Body Scale</h2>
          <div className="space-y-6">
            <div className="bg-secondary p-6 rounded-lg">
              <p className="text-xs text-muted mb-2 font-mono">
                body-lg / 20px
              </p>
              <p className="body-lg">
                Our premium pet food is crafted with ethically sourced
                ingredients from trusted suppliers.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <p className="text-xs text-muted mb-2 font-mono">
                body-md / 18px
              </p>
              <p className="body-md">
                Each recipe is nutritionally balanced to support your pet's
                health and vitality.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <p className="text-xs text-muted mb-2 font-mono">
                body-sm / 16px
              </p>
              <p className="body-sm">
                We believe in transparency and quality ingredients.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <p className="text-xs text-muted mb-2 font-mono">
                caption / 14px
              </p>
              <p className="caption">Batch #2024-001 • Made in Europe</p>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <p className="text-xs text-muted mb-2 font-mono">micro / 12px</p>
              <p className="micro">PREMIUM QUALITY • ETHICALLY SOURCED</p>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="h2 mb-8 text-brand-gold">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Base Cream */}
            <div className="rounded-lg overflow-hidden">
              <div className="h-24 bg-[#F6EADF] border-2 border-border"></div>
              <div className="bg-secondary p-4">
                <p className="font-semibold mb-1">Base Cream</p>
                <p className="text-xs text-muted font-mono">#F6EADF</p>
                <p className="text-xs text-secondary mt-2">
                  Primary background, warmth
                </p>
              </div>
            </div>

            {/* Dark Espresso */}
            <div className="rounded-lg overflow-hidden">
              <div className="h-24 bg-[#1F1A17]"></div>
              <div className="bg-secondary p-4">
                <p className="font-semibold mb-1">Dark Espresso</p>
                <p className="text-xs text-muted font-mono">#1F1A17</p>
                <p className="text-xs text-secondary mt-2">
                  Primary text, high contrast
                </p>
              </div>
            </div>

            {/* Burnt Orange */}
            <div className="rounded-lg overflow-hidden">
              <div className="h-24 bg-[#C96A32]"></div>
              <div className="bg-secondary p-4">
                <p className="font-semibold mb-1">Burnt Orange</p>
                <p className="text-xs text-muted font-mono">#C96A32</p>
                <p className="text-xs text-secondary mt-2">
                  Hero accent, brand energy
                </p>
              </div>
            </div>

            {/* Mustard Gold */}
            <div className="rounded-lg overflow-hidden">
              <div className="h-24 bg-[#D8A63D]"></div>
              <div className="bg-secondary p-4">
                <p className="font-semibold mb-1">Mustard Gold</p>
                <p className="text-xs text-muted font-mono">#D8A63D</p>
                <p className="text-xs text-secondary mt-2">
                  Retro premium highlight
                </p>
              </div>
            </div>

            {/* Olive Green */}
            <div className="rounded-lg overflow-hidden">
              <div className="h-24 bg-[#6F7B52]"></div>
              <div className="bg-secondary p-4">
                <p className="font-semibold mb-1">Olive Green</p>
                <p className="text-xs text-muted font-mono">#6F7B52</p>
                <p className="text-xs text-secondary mt-2">
                  Organic natural anchor
                </p>
              </div>
            </div>

            {/* Deep Berry */}
            <div className="rounded-lg overflow-hidden">
              <div className="h-24 bg-[#7A3B45]"></div>
              <div className="bg-secondary p-4">
                <p className="font-semibold mb-1">Deep Berry</p>
                <p className="text-xs text-muted font-mono">#7A3B45</p>
                <p className="text-xs text-secondary mt-2">
                  Luxury contrast accent
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Text Color Variants */}
        <section className="mb-16">
          <h2 className="h2 mb-8 text-brand-gold">Text Color Variants</h2>
          <div className="space-y-4 bg-secondary p-8 rounded-lg">
            <p className="text-primary font-semibold">Primary (default)</p>
            <p className="text-secondary">Secondary (reduced emphasis)</p>
            <p className="text-muted">Muted (disabled, metadata)</p>
            <div className="bg-text-primary p-4 rounded">
              <p className="text-inverse">Inverse (light on dark)</p>
            </div>
            <p className="text-brand-orange">Brand Orange</p>
            <p className="text-brand-gold">Brand Gold</p>
            <p className="text-brand-olive">Brand Olive</p>
            <p className="text-brand-berry">Brand Berry</p>
          </div>
        </section>

        {/* Font Weights */}
        <section className="mb-16">
          <h2 className="h2 mb-8 text-brand-gold">Font Weights</h2>
          <div className="space-y-4 bg-secondary p-8 rounded-lg">
            <p className="font-light">Font Light (300) - Delicate</p>
            <p className="font-normal">Font Normal (400) - Standard</p>
            <p className="font-medium">Font Medium (500) - Emphasized</p>
            <p className="font-semibold">Font Semibold (600) - Strong</p>
            <p className="font-bold">Font Bold (700) - Bold</p>
            <p className="font-black">Font Black (900) - Maximum Weight</p>
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mb-16">
          <h2 className="h2 mb-8 text-brand-gold">Practical Examples</h2>

          {/* Hero Section Example */}
          <div className="mb-8">
            <h3 className="h3 mb-4">Hero Section</h3>
            <div className="bg-bg-primary border-2 border-border rounded-lg p-12 text-center">
              <h1 className="display-lg text-balance text-brand-orange mb-6">
                Premium Pet Food
              </h1>
              <p className="body-lg text-secondary max-w-2xl mx-auto mb-8">
                Ethically sourced, nutritionally complete meals for your beloved
                companion.
              </p>
              <button className="px-8 py-3 bg-brand-gold text-text-primary font-semibold rounded-lg hover:bg-brand-orange transition-colors">
                Shop Now
              </button>
            </div>
          </div>

          {/* Product Card Example */}
          <div className="mb-8">
            <h3 className="h3 mb-4">Product Card</h3>
            <div className="bg-bg-elevated border border-border rounded-lg p-6 max-w-sm">
              <h4 className="h4 mb-3">Grass-Fed Beef Recipe</h4>
              <p className="body-sm text-secondary mb-4">
                Rich in protein and essential nutrients. Sourced from grass-fed
                cattle.
              </p>
              <div className="flex justify-between items-center">
                <p className="caption text-muted">350 cal per serving</p>
                <button className="px-4 py-2 bg-brand-orange text-text-inverse font-medium rounded hover:bg-brand-berry transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="mb-16">
          <h2 className="h2 mb-8 text-brand-gold">Design Principles</h2>
          <div className="bg-secondary p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="h4 mb-4 text-brand-berry">Luxury Through</h4>
                <ul className="space-y-2 text-secondary">
                  <li>✓ Spacing & breathing room</li>
                  <li>✓ Typography confidence</li>
                  <li>✓ Product framing</li>
                  <li>✓ Visual rhythm</li>
                  <li>✓ Restraint & minimalism</li>
                </ul>
              </div>
              <div>
                <h4 className="h4 mb-4 text-brand-berry">Avoid</h4>
                <ul className="space-y-2 text-secondary">
                  <li>✗ Too many colors</li>
                  <li>✗ Excessive gradients</li>
                  <li>✗ Unnecessary animations</li>
                  <li>✗ Visual clutter</li>
                  <li>✗ Generic styling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
