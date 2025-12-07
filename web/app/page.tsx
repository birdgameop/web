import { PlasmicComponent } from '@plasmicapp/loader-nextjs'
import { DebugPlasmic } from './debug-plasmic'

export default function Home() {
  // Render Plasmic component - loader is provided by PlasmicRootProvider in layout
  // Replace "HomePage" with your actual Plasmic component name
  // Common names: "Home", "Page", or check your Plasmic project for the exact name
  return (
    <>
      <DebugPlasmic />
      <PlasmicComponent
        component="HomePage"
      />
    </>
  )
}
