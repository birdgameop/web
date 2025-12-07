'use client'

import { useEffect, useState } from 'react'
import { PLASMIC } from '@/plasmic-init'

// Debug component to list available Plasmic components
export function DebugPlasmic() {
  const [error, setError] = useState<string>('')
  const [projectId, setProjectId] = useState<string>('')
  const [hasLoader, setHasLoader] = useState<boolean>(false)

  useEffect(() => {
    // Get project ID from client-side env var
    const id = process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID || ''
    setProjectId(id || 'Not set (check env vars)')
    setHasLoader(!!PLASMIC)

    if (!PLASMIC) {
      setError('Plasmic loader not initialized - check environment variables')
      return
    }

    async function fetchComponents() {
      if (!PLASMIC) {
        setError('Plasmic loader not initialized - check environment variables')
        return
      }
      
      try {
        // Try to fetch component data to see what's available
        const data = await PLASMIC.fetchComponentData('Homepage')
        console.log('Plasmic data:', data)
      } catch (err: any) {
        setError(err.message)
        console.error('Error fetching Plasmic components:', err)
      }
    }
    fetchComponents()
  }, [])

  if (error || !hasLoader) {
    const isProjectNotFound = error?.includes('not found') || error?.includes('Project with ID')
    const isComponentNotFound = error?.includes('Unable to find components') || error?.includes('not found')
    return (
      <div style={{ padding: '20px', background: '#fee', border: '1px solid #fcc', margin: '20px', borderRadius: '8px' }}>
        <h2 style={{ marginTop: 0 }}>⚠️ Plasmic Debug Info</h2>
        <p><strong>Error:</strong> {error || 'Plasmic loader not initialized'}</p>
        <p><strong>Project ID:</strong> {projectId}</p>
        <p><strong>Loader Status:</strong> {hasLoader ? '✓ Initialized' : '✗ Not initialized'}</p>
        {isComponentNotFound && (
          <div style={{ marginTop: '15px', padding: '15px', background: '#fff3cd', borderRadius: '4px', border: '1px solid #ffc107' }}>
            <p><strong>⚠️ Component Not Found:</strong></p>
            <p>The component name "HomePage" doesn't exist in your Plasmic project.</p>
            <ul style={{ textAlign: 'left', marginTop: '10px' }}>
              <li>Open your Plasmic project and check the <strong>component name</strong> in the component tree</li>
              <li>Common names: "Home", "Page", "Index", or check what you named your main page component</li>
              <li>Update the component name in <code>web/app/page.tsx</code> (line 30)</li>
            </ul>
          </div>
        )}
        {isProjectNotFound && !isComponentNotFound && (
          <div style={{ marginTop: '15px', padding: '15px', background: '#fff3cd', borderRadius: '4px', border: '1px solid #ffc107' }}>
            <p><strong>⚠️ Project Not Found Error:</strong></p>
            <ul style={{ textAlign: 'left', marginTop: '10px' }}>
              <li>Verify the <strong>Project ID</strong> is correct in your Plasmic project settings</li>
              <li>Verify the <strong>API Token</strong> has access to this project</li>
              <li>Check if the project is in a different Plasmic workspace</li>
              <li>If using a custom host (like birdgame.app), add <code>NEXT_PUBLIC_PLASMIC_HOST</code> in Vercel</li>
            </ul>
          </div>
        )}
        <div style={{ marginTop: '20px', padding: '15px', background: '#fff', borderRadius: '4px' }}>
          <p><strong>🔧 To Fix:</strong></p>
          <ol style={{ textAlign: 'left' }}>
            <li>Go to Vercel Dashboard → Your Project → Settings → Environment Variables</li>
            <li>Verify these variables are set correctly:</li>
            <ul>
              <li><code style={{ background: '#f0f0f0', padding: '2px 6px', borderRadius: '3px' }}>NEXT_PUBLIC_PLASMIC_PROJECT_ID</code></li>
              <li><code style={{ background: '#f0f0f0', padding: '2px 6px', borderRadius: '3px' }}>NEXT_PUBLIC_PLASMIC_PROJECT_API_TOKEN</code></li>
              <li><code style={{ background: '#f0f0f0', padding: '2px 6px', borderRadius: '3px' }}>NEXT_PUBLIC_PLASMIC_HOST</code> (if using custom host)</li>
            </ul>
            <li>Enable for: Production, Preview, and Development</li>
            <li><strong>Redeploy</strong> your site after adding the variables</li>
          </ol>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px', background: '#efe', border: '1px solid #cfc', margin: '20px', borderRadius: '8px' }}>
      <h2 style={{ marginTop: 0 }}>✓ Plasmic Connected</h2>
      <p><strong>Project ID:</strong> {projectId}</p>
      <p>Check the browser console for component data.</p>
    </div>
  )
}

