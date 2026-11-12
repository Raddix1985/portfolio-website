import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Christopher Owens | Cloud Infrastructure & Platform Engineer',
  description: 'Christopher Owens brings around 14 years of practical IT experience and is building toward cloud infrastructure and platform engineering through Azure, Terraform, containerization and automation.',
  openGraph: {
    title: 'Christopher Owens | Cloud Infrastructure & Platform Engineer',
    description: 'Engineering reliable infrastructure, automating operations and building cloud platforms through practical projects.',
    type: 'website',
    url: 'https://christopherowens.tech',
    siteName: 'Owens.tech',
  },
  twitter: {
    card: 'summary',
    title: 'Christopher Owens | Cloud Infrastructure & Platform Engineer',
    description: 'Practical IT experience, cloud infrastructure projects and a focus on platform engineering.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
