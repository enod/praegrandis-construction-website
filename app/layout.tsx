import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Praegrandis Construction - Premium Building Services Sydney',
  description: 'Award-winning construction company delivering exceptional residential and commercial projects across Sydney with uncompromising quality and innovative design solutions.',
  keywords: 'construction, building, Sydney, residential, commercial, renovation, extension, licensed builder',
  authors: [{ name: 'Praegrandis Construction' }],
  creator: 'Praegrandis Construction',
  publisher: 'Praegrandis Construction',
  metadataBase: new URL('https://praegrandisconstruction.com.au'),
  openGraph: {
    title: 'Praegrandis Construction - Premium Building Services Sydney',
    description: 'Award-winning construction company delivering exceptional residential and commercial projects across Sydney with uncompromising quality and innovative design solutions.',
    url: 'https://praegrandisconstruction.com.au',
    siteName: 'Praegrandis Construction',
    images: [
      {
        url: '/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Praegrandis Construction - Premium Building Services Sydney',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Praegrandis Construction - Premium Building Services Sydney',
    description: 'Award-winning construction company delivering exceptional residential and commercial projects across Sydney.',
    images: ['/thumbnail.png'],
  },
  icons: {
    icon: '/thumbnail.png',
    shortcut: '/thumbnail.png',
    apple: '/thumbnail.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}