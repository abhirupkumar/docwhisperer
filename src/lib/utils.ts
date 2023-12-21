import { type ClassValue, clsx } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
    if (typeof window !== 'undefined') return path
    if (process.env.NEXT_PUBLIC_HOST)
        return `https://${process.env.NEXT_PUBLIC_HOST}${path}`
    return `http://localhost:${process.env.PORT ?? 3000}${path}`
}

export function constructMetadata({
    title = "DocWhisperer - the SaaS for students",
    description = "DocWhisperer is an SaaS application which makes chatting to your PDF files easy.",
    image = "/thumbnail.png",
    icons = "/favicon.ico",
    noIndex = false
}: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image
                }
            ]
        },
        icons,
        metadataBase: new URL('https://docwhisperer.me'),
        themeColor: '#FFF',
        ...(noIndex && {
            robots: {
                index: false,
                follow: false
            }
        })
    }
}