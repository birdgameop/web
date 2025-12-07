import { initPlasmicLoader } from '@plasmicapp/react-web'

// Initialize Plasmic with your project ID and API token
// These values come from environment variables
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.PLASMIC_PROJECT_ID || '',
      token: process.env.PLASMIC_PROJECT_API_TOKEN || '',
    },
  ],
  preview: false,
})

