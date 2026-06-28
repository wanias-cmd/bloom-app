export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-rose-50">
      <h1 className="text-5xl font-bold text-rose-500 mb-4">Bloom</h1>
      <p className="text-xl text-rose-400 mb-8">Send virtual flowers to people you love</p>
      <a href="/create" className="bg-rose-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-500 transition-colors">
        Create a Bouquet
      </a>
    </main>
  )
}