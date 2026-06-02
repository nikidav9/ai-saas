import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI SaaS',
  description: 'AI-powered SaaS platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
