import { PlasmicComponent } from '@plasmicapp/loader-nextjs'
import { PLASMIC } from '@/plasmic-init'

export default async function Home() {
  // Preload Plasmic data
  const plasmicData = await PLASMIC.fetchComponentData('HomePage')
  
  return (
    <PlasmicComponent 
      component="HomePage"
      componentProps={plasmicData}
    />
  )
}

