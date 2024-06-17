import { ReactQueryClientProvider } from "@/providers/query-provider"
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
            <body>
                <ReactQueryClientProvider>
                    {children}
                </ReactQueryClientProvider>
            </body>
        </html>
    )
}