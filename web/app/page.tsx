import { PlasmicComponent } from '@plasmicapp/loader-nextjs'

export default function Home() {
  // Render Plasmic component - loader is provided by PlasmicRootProvider in layout
  return (
    <PlasmicComponent
      component="HomePage"
    />
  )
}

