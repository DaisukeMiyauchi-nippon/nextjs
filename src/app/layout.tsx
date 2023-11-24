import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Header'
import Footer from './Footer'
import LoginControl from './LoginControl'
import './globals.css'
import NextAuthProvider from './providers/NextAuth'

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
       {/* <LoginControl /> */}
       {children}
        <Footer />

      </body>
    </html>
  )
}
