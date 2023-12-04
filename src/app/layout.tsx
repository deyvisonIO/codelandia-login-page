import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'


const lato = Lato({ weight: ["400","700"], subsets: ['latin']  })

export const metadata: Metadata = {
  title: 'Login Page',
  description: 'A simple login page.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
