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
        const data = await PLASMIC.fetchComponentData('HomePage')
        console.log('Plasmic data:', data)
      } catch (err: any) {
        setError(err.message)
        console.error('Error fetching Plasmic components:', err)
      }
    }
    fetchComponents()
  }, [])

  if (error || !hasLoader) {
    return (
      <div style={{ padding: '20px', background: '#fee', border: '1px solid #fcc', margin: '20px', borderRadius: '8px' }}>
        <h2 style={{ marginTop: 0 }}>⚠️ Plasmic Debug Info</h2>
        <p><strong>Error:</strong> {error || 'Plasmic loader not initialized'}</p>
        <p><strong>Project ID:</strong> {projectId}</p>
        <p><strong>Loader Status:</strong> {hasLoader ? '✓ Initialized' : '✗ Not initialized'}</p>
        <div style={{ marginTop: '20px', padding: '15px', background: '#fff', borderRadius: '4px' }}>
          <p><strong>🔧 To Fix:</strong></p>
          <ol style={{ textAlign: 'left' }}>
            <li>Go to Vercel Dashboard → Your Project → Settings → Environment Variables</li>
            <li>Add these <strong>exact</strong> variable names (case-sensitive):</li>
            <ul>
              <li><code style={{ background: '#f0f0f0', padding: '2px 6px', borderRadius: '3px' }}>NEXT_PUBLIC_PLASMIC_PROJECT_ID</code></li>
              <li><code style={{ background: '#f0f0f0', padding: '2px 6px', borderRadius: '3px' }}>NEXT_PUBLIC_PLASMIC_PROJECT_API_TOKEN</code></li>
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

