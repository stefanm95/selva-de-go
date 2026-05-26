export default function App() {
  return (
    <main className="bg-background text-text-primary overflow-hidden">
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <h1 className="display-lg text-balance text-brand-orange mb-6">
            real meat.
            <br />
            wild energy.
          </h1>
          <p className="body-lg text-secondary mb-8 max-w-2xl mx-auto">
            Premium pet food crafted with ethically sourced, organic
            ingredients. A luxury cinematic brand experience for your beloved
            companion.
          </p>
          <button className="px-8 py-4 bg-brand-gold text-text-primary font-semibold rounded-lg hover:bg-brand-orange transition-colors">
            Discover Our Food
          </button>
        </div>
      </section>
    </main>
  );
}
