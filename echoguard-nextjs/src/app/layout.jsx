import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EchoGuard - Your Personal Privacy Command Center',
  description: 'Take complete control of your Android device\'s privacy with real-time permission monitoring, live access logs, and instant alerts.',
  keywords: ['Android privacy', 'app permissions', 'permission monitor', 'privacy app', 'data protection'],
  authors: [{ name: 'EchoGuard Team' }],
  openGraph: {
    title: 'EchoGuard - Personal Privacy Command Center',
    description: 'See exactly what your Android apps are doing. Real-time permission monitoring and instant privacy alerts.',
    url: 'https://echoguard.app',
    siteName: 'EchoGuard',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EchoGuard Privacy App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EchoGuard - Personal Privacy Command Center',
    description: 'See exactly what your Android apps are doing. Real-time permission monitoring and instant privacy alerts.',
    images: ['/images/twitter-card.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-bg text-text-primary antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
