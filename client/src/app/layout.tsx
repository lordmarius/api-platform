import Providers from "@/providers/providers"
// import { ReactQueryClientProvider } from "@/providers/query-provider"
import "@/styles/globals.css"
import { QueryClientProvider } from "@tanstack/react-query"

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
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}