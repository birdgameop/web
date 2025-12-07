'use client'

import { PlasmicRootProvider } from '@plasmicapp/loader-nextjs'
import { PLASMIC } from '@/plasmic-init'

export function PlasmicProvider({ children }: { children: React.ReactNode }) {
  // Only render provider if Plasmic is initialized
  if (!PLASMIC) {
    return <>{children}</>
  }
  
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      {children}
    </PlasmicRootProvider>
  )
}

