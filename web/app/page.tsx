import { PlasmicComponent } from '@plasmicapp/loader-nextjs'

export default function Home() {
  // Render Plasmic component using project ID from environment
  return (
    <PlasmicComponent
      component="HomePage"
      projectId={process.env.PLASMIC_PROJECT_ID}
    />
  )
}

