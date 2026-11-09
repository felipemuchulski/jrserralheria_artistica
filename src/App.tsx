
function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-100 px-5">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-zinc-900">
          JR Serralheria Artística
        </h1>

        <p className="mt-4 text-lg text-zinc-600">
          Transformando metal em projetos únicos.
        </p>

        <button
          type="button"
          className="mt-6 rounded-lg bg-zinc-900 px-6 py-3 font-medium text-white transition-colors hover:bg-amber-800"
        >
          Conheça nossos projetos
        </button>
      </div>
    </main>
  )
}

export default App
