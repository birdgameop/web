'use client'

import { PlasmicComponent } from '@plasmicapp/loader-nextjs'
import { DebugPlasmic } from './debug-plasmic'
import { PLASMIC } from '@/plasmic-init'

export default function Home() {
  // Render Plasmic component - loader is provided by PlasmicRootProvider in layout
  // Replace "HomePage" with your actual Plasmic component name
  // Common names: "Home", "Page", or check your Plasmic project for the exact name
  
  if (!PLASMIC) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Plasmic Not Configured</h1>
        <p>Please add environment variables in Vercel:</p>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>NEXT_PUBLIC_PLASMIC_PROJECT_ID</li>
          <li>NEXT_PUBLIC_PLASMIC_PROJECT_API_TOKEN</li>
        </ul>
        <DebugPlasmic />
      </div>
    )
  }
  
  return (
    <>
      <DebugPlasmic />
      <PlasmicComponent
        component="HomePage"
      />
    </>
  )
}
