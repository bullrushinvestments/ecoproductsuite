import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoProductSuite',
  description: 'A one-stop platform for small businesses to find and integrate eco-friendly products and services through an AI-powered marketplace and suite of climate tech tools.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoProductSuite</h1>
      <p className="mt-4 text-lg">A one-stop platform for small businesses to find and integrate eco-friendly products and services through an AI-powered marketplace and suite of climate tech tools.</p>
    </main>
  )
}
