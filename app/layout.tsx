import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Adarsh Kumar - Portfolio',
  description: 'Award-winning portfolio of Adarsh Kumar - MCA Student, Problem Solver & Future Software Engineer',
  keywords: ['portfolio', 'developer', 'MCA', 'Python', 'JavaScript', 'full-stack'],
  authors: [{ name: 'Adarsh Kumar' }],
  openGraph: {
    title: 'Adarsh Kumar - Portfolio',
    description: 'MCA Student | Computer Science Enthusiast | Problem Solver',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0a0e27',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="font-sans antialiased bg-[#0a0e27] text-slate-100">
        {children}
      </body>
    </html>
  )
}
