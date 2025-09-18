import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'NAOMI - Nonlinear Algorithmic Operations for Multi-platform Integration',
  description: 'Institutional-grade trading infrastructure powered by explainable machine learning, ensemble modeling, and cross-platform integration across global financial markets.',
  keywords: 'trading, machine learning, algorithmic trading, forex, crypto, stocks, bonds, ETFs, commodities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
