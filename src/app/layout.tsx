import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'simplebar-react/dist/simplebar.min.css';
import { cn, constructMetadata } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import Providers from '@/components/Providers';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <Providers>
        <body
          className={cn(
            'min-h-screen font-sans antialiased grainy',
            inter.className
          )}>
          <NextTopLoader showSpinner={false} />
          <Toaster />
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  )
}
