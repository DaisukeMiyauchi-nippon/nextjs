import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './compornents/Header'
import Footer from './compornents/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'ProjectZ',
  description: '新しい仲間、趣味、場所を見つけるサイトです',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
       {children}
        <Footer />

      </body>
    </html>
  )
}
