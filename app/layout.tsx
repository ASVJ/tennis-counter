import '@/styles/globals.scss'

import { Link } from '@nextui-org/link'
import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { PropsWithChildren } from 'react'
import { Providers } from './providers'
import { Seo } from '@/components/seo'
import clsx from 'clsx'
import { fontSans } from '@/config/fonts'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
}

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en" suppressHydrationWarning>
            <Seo />
            <body className={clsx('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
                <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
                    <div className="relative flex flex-col h-screen">
                        <Navbar />
                        <main className="container mx-auto max-w-7xl pt-6 px-6 flex-grow">{children}</main>
                        <footer className="w-full flex items-center justify-center py-3">
                            <Link
                                isExternal
                                className="flex items-center gap-1 text-current text-sm md:text-base"
                                href="https://github.com/ziracmo"
                                title="Roussange Alexandre GitHub"
                            >
                                <span className="text-default-600">Made by</span>
                                <p className="text-primary">Alexandre Roussange</p>
                            </Link>
                        </footer>
                    </div>
                </Providers>
            </body>
        </html>
    )
}
