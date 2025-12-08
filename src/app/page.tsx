import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GreenChainGo',
  description: 'GreenChainGo is a Web3-based sustainability tracking platform for e-commerce businesses that uses AI to provide real-time carbon footprint analysis and blockchain transparency to enhance customer trust in sustainable products.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">GreenChainGo</h1>
      <p className="mt-4 text-lg">GreenChainGo is a Web3-based sustainability tracking platform for e-commerce businesses that uses AI to provide real-time carbon footprint analysis and blockchain transparency to enhance customer trust in sustainable products.</p>
    </main>
  )
}
