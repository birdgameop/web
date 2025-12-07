'use client'

import { useEffect, useState } from 'react'
import { PLASMIC } from '@/plasmic-init'

// Debug component to list available Plasmic components
export function DebugPlasmic() {
  const [components, setComponents] = useState<string[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    async function fetchComponents() {
      try {
        // Try to fetch component data to see what's available
        const data = await PLASMIC.fetchComponentData('*')
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
      <div style={{ padding: '20px', background: '#fee', border: '1px solid #fcc' }}>
        <h2>Plasmic Debug Info</h2>
        <p><strong>Error:</strong> {error}</p>
        <p><strong>Project ID:</strong> {process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID || 'Not set'}</p>
        <p>Check your environment variables and component name.</p>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px', background: '#efe', border: '1px solid #cfc' }}>
      <h2>Plasmic Connected</h2>
      <p>Check the browser console for component data.</p>
    </div>
  )
}

