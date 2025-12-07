import type { Metadata } from 'next'
import { PlasmicRootProvider } from '@plasmicapp/loader-nextjs'
import { PLASMIC } from '@/plasmic-init'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crypto Site',
  description: 'Crypto site built with Plasmic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <PlasmicRootProvider loader={PLASMIC}>
          {children}
        </PlasmicRootProvider>
      </body>
    </html>
  )
}

