'use client'

import { PlasmicRootProvider } from '@plasmicapp/loader-nextjs'
import { PLASMIC } from '@/plasmic-init'

export function PlasmicProvider({ children }: { children: React.ReactNode }) {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      {children}
    </PlasmicRootProvider>
  )
}

