
function App() {
  return (
    <main className="min-h-screen bg-background px-5 py-16">
      <div className="mx-auto max-w-site">
        <span className="font-body text-sm font-semibold uppercase tracking-widest text-accent">
          JR Serralheria Artística
        </span>

        <h1 className="mt-4 font-heading text-4xl font-bold text-primary md:text-6xl">
          Transformando metal em projetos únicos.
        </h1>

        <p className="mt-6 max-w-xl font-body text-base text-muted md:text-lg">
          Projetos personalizados que unem qualidade,
          resistência e acabamento.
        </p>

        <button
          type="button"
          className="mt-8 min-h-11 rounded-button bg-primary px-6 py-3 font-body font-medium text-white transition-colors hover:bg-accent"
        >
          Conheça nossos projetos
        </button>
      </div>
    </main>
  );
}

export default App;
