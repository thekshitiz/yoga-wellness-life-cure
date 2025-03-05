import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Yoga Wellness Life Cure',
    description: 'Find balance and healing through yoga and plants',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-background font-sans antialiased">
                {children}
            </body>
        </html>
    )
}
