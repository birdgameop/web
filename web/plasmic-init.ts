import { initPlasmicLoader } from '@plasmicapp/loader-nextjs'

// Initialize Plasmic with your project ID and API token
// These values come from environment variables
// Note: For Next.js, use NEXT_PUBLIC_ prefix for client-side access, or access server-side only
const projectId = process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID || process.env.PLASMIC_PROJECT_ID || ''
const projectToken = process.env.NEXT_PUBLIC_PLASMIC_PROJECT_API_TOKEN || process.env.PLASMIC_PROJECT_API_TOKEN || ''

if (!projectId || !projectToken) {
  console.warn('Plasmic: Missing PLASMIC_PROJECT_ID or PLASMIC_PROJECT_API_TOKEN environment variables')
}

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectToken,
    },
  ],
  preview: true, // Enable preview mode to work with Plasmic host
  host: process.env.NEXT_PUBLIC_PLASMIC_HOST || process.env.PLASMIC_HOST || 'https://studio.plasmic.app', // Plasmic host endpoint
})

