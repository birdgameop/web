'use client'

import { PlasmicRootProvider, PlasmicComponent } from '@plasmicapp/react-web'
import { PLASMIC } from '@/plasmic-init'

export default function Home() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      {/* Replace "HomePage" with your actual Plasmic component name */}
      <PlasmicComponent component="HomePage" />
    </PlasmicRootProvider>
  )
}

