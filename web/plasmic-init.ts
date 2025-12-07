import { initPlasmicLoader } from '@plasmicapp/loader-nextjs'

// Initialize Plasmic with your project ID and API token
// These values come from environment variables
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.PLASMIC_PROJECT_ID || process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID || '',
      token: process.env.PLASMIC_PROJECT_API_TOKEN || process.env.NEXT_PUBLIC_PLASMIC_PROJECT_API_TOKEN || '',
    },
  ],
  preview: false,
})

