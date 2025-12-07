import { initPlasmicLoader } from '@plasmicapp/loader-nextjs'

// Initialize Plasmic with your project ID and API token
// IMPORTANT: These MUST be prefixed with NEXT_PUBLIC_ to work in Next.js client components
const projectId = process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID || ''
const projectToken = process.env.NEXT_PUBLIC_PLASMIC_PROJECT_API_TOKEN || ''
const host = process.env.NEXT_PUBLIC_PLASMIC_HOST || 'https://studio.plasmic.app'

// Only initialize on client side to avoid build-time errors
let PLASMIC: ReturnType<typeof initPlasmicLoader> | null = null

if (typeof window !== 'undefined') {
  // Log for debugging (will show in browser console)
  console.log('Plasmic Init - Project ID:', projectId ? '✓ Set' : '✗ MISSING')
  console.log('Plasmic Init - Token:', projectToken ? '✓ Set' : '✗ MISSING')
  
  if (!projectId || !projectToken) {
    console.error('⚠️ Plasmic environment variables are missing!')
    console.error('Add these in Vercel: NEXT_PUBLIC_PLASMIC_PROJECT_ID and NEXT_PUBLIC_PLASMIC_PROJECT_API_TOKEN')
  } else {
    // Initialize Plasmic loader only on client side
    PLASMIC = initPlasmicLoader({
      projects: [
        {
          id: projectId,
          token: projectToken,
        },
      ],
      preview: true, // Enable preview mode to work with Plasmic host
      host: host,
    })
  }
}

export { PLASMIC }

