import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Ashutosh Sonel | Full-Stack Developer & IT Engineer',
  description: 'IT Engineer with professional experience in Full-Stack Web Development, skilled in React, Next.js, Node.js, and modern web technologies. Currently pursuing M.Tech CSE at IIT Jodhpur.',
  keywords: ['Ashutosh Sonel', 'Full-Stack Developer', 'Web Developer', 'React', 'Next.js', 'Node.js', 'IIT Jodhpur', 'Software Engineer'],
  authors: [{ name: 'Ashutosh Sonel' }],
  creator: 'Ashutosh Sonel',
  verification: {
    google: 'NosJ4uchaJsRC11izYWY7qRXxzNCtPEwFZjEcAjWch0',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashutoshsonel.dev',
    title: 'Ashutosh Sonel | Full-Stack Developer',
    description: 'IT Engineer with professional experience in Full-Stack Web Development',
    siteName: 'Ashutosh Sonel Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashutosh Sonel | Full-Stack Developer',
    description: 'IT Engineer with professional experience in Full-Stack Web Development',
    creator: '@ashutoshsonel',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
