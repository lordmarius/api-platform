import "@/styles/globals.css"

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tryp & Go',
    description: 'Bienvenido/as a Tryp & Go'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    )
}