import { initPlasmicLoader } from '@plasmicapp/loader-nextjs'

// Initialize Plasmic with your project ID and API token
// These values come from environment variables
// Note: For Next.js, use NEXT_PUBLIC_ prefix for client-side access
const projectId = 
  typeof window !== 'undefined' 
    ? (process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID || '')
    : (process.env.PLASMIC_PROJECT_ID || process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID || '')

const projectToken = 
  typeof window !== 'undefined'
    ? (process.env.NEXT_PUBLIC_PLASMIC_PROJECT_API_TOKEN || '')
    : (process.env.PLASMIC_PROJECT_API_TOKEN || process.env.NEXT_PUBLIC_PLASMIC_PROJECT_API_TOKEN || '')

const host = 
  typeof window !== 'undefined'
    ? (process.env.NEXT_PUBLIC_PLASMIC_HOST || 'https://studio.plasmic.app')
    : (process.env.PLASMIC_HOST || process.env.NEXT_PUBLIC_PLASMIC_HOST || 'https://studio.plasmic.app')

if (!projectId || !projectToken) {
  console.error('Plasmic: Missing environment variables!')
  console.error('Project ID:', projectId ? 'Set' : 'MISSING')
  console.error('Project Token:', projectToken ? 'Set' : 'MISSING')
  console.error('Make sure to add NEXT_PUBLIC_PLASMIC_PROJECT_ID and NEXT_PUBLIC_PLASMIC_PROJECT_API_TOKEN in Vercel')
}

// Only initialize if we have the required credentials
export const PLASMIC = projectId && projectToken
  ? initPlasmicLoader({
      projects: [
        {
          id: projectId,
          token: projectToken,
        },
      ],
      preview: true, // Enable preview mode to work with Plasmic host
      host: host,
    })
  : null

