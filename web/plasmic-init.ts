import { initPlasmicLoader } from '@plasmicapp/loader-nextjs'

// Initialize Plasmic with your project ID and API token
// These values come from environment variables
const projectId = process.env.PLASMIC_PROJECT_ID
const projectToken = process.env.PLASMIC_PROJECT_API_TOKEN

// Only initialize if we have the required credentials
export const PLASMIC = projectId && projectToken
  ? initPlasmicLoader({
      projects: [
        {
          id: projectId,
          token: projectToken,
        },
      ],
      preview: false,
    })
  : null

