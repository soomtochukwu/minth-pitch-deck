import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { PresentationProvider } from "@/contexts/presentation-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Minth - Interactive Pitch Deck",
  description: "Turn Your Imagination Into NFTs - Built for Celo Blockchain",
  keywords: "NFT, Celo, Blockchain, Digital Art, Minting, Web3",
  authors: [{ name: "Minth Team" }],
  openGraph: {
    title: "Minth - Interactive Pitch Deck",
    description: "Turn Your Imagination Into NFTs - Built for Celo Blockchain",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PresentationProvider>{children}</PresentationProvider>
      </body>
    </html>
  )
}
