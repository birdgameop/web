import { PlasmicComponent } from '@plasmicapp/loader-nextjs'
import { PLASMIC } from '@/plasmic-init'

export default async function Home() {
  // Preload Plasmic data for the component
  const plasmicData = await PLASMIC.fetchComponentData('HomePage')
  
  return (
    <PlasmicComponent
      loader={PLASMIC}
      component="HomePage"
    />
  )
}

