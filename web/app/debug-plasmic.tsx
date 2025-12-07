'use client'

import { useEffect, useState } from 'react'
import { PLASMIC } from '@/plasmic-init'

// Debug component to list available Plasmic components
export function DebugPlasmic() {
  const [error, setError] = useState<string>('')
  const [projectId, setProjectId] = useState<string>('')

  useEffect(() => {
    // Get project ID from client-side env var
    const id = process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID || 'Not set (check env vars)'
    setProjectId(id)

    async function fetchComponents() {
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

  if (error) {
    return (
      <div style={{ padding: '20px', background: '#fee', border: '1px solid #fcc', margin: '20px' }}>
        <h2>Plasmic Debug Info</h2>
        <p><strong>Error:</strong> {error}</p>
        <p><strong>Project ID:</strong> {projectId}</p>
        <p><strong>Note:</strong> Make sure you've added environment variables in Vercel with <code>NEXT_PUBLIC_</code> prefix:</p>
        <ul>
          <li><code>NEXT_PUBLIC_PLASMIC_PROJECT_ID</code></li>
          <li><code>NEXT_PUBLIC_PLASMIC_PROJECT_API_TOKEN</code></li>
        </ul>
        <p>Or use server-side only variables (without NEXT_PUBLIC_) if accessing server-side only.</p>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px', background: '#efe', border: '1px solid #cfc', margin: '20px' }}>
      <h2>Plasmic Connected ✓</h2>
      <p><strong>Project ID:</strong> {projectId}</p>
      <p>Check the browser console for component data.</p>
    </div>
  )
}

