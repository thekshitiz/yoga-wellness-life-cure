import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Wellness Center - Holistic Health & Healing',
    description: 'Experience the perfect harmony of traditional wisdom and modern wellness practices at our center.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="min-h-screen flex flex-col">
                    {children}
                </div>
            </body>
        </html>
    )
}
