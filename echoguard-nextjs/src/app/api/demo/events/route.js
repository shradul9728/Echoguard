import { NextResponse } from 'next/server'

// Simulated timeline events data
const events = [
  { id: 1, time: '9:41 AM', timestamp: 1700058060000, app: 'WhatsApp', permission: 'Microphone', icon: '🎤', risk: 'low' },
  { id: 2, time: '9:38 AM', timestamp: 1700057880000, app: 'Maps', permission: 'Location', icon: '📍', risk: 'medium' },
  { id: 3, time: '9:35 AM', timestamp: 1700057700000, app: 'Instagram', permission: 'Camera', icon: '📷', risk: 'low' },
  { id: 4, time: '9:30 AM', timestamp: 1700057400000, app: 'Chrome', permission: 'Location', icon: '📍', risk: 'medium' },
  { id: 5, time: '9:25 AM', timestamp: 1700057100000, app: 'Spotify', permission: 'Storage', icon: '💾', risk: 'low' },
  { id: 6, time: '9:20 AM', timestamp: 1700056800000, app: 'Gmail', permission: 'Contacts', icon: '👥', risk: 'high' },
  { id: 7, time: '9:15 AM', timestamp: 1700056500000, app: 'Facebook', permission: 'Camera', icon: '📷', risk: 'medium' },
  { id: 8, time: '9:10 AM', timestamp: 1700056200000, app: 'WhatsApp', permission: 'Microphone', icon: '🎤', risk: 'low' },
  { id: 9, time: '9:05 AM', timestamp: 1700055900000, app: 'Weather', permission: 'Location', icon: '📍', risk: 'low' },
  { id: 10, time: '9:00 AM', timestamp: 1700055600000, app: 'Calendar', permission: 'Calendar', icon: '📅', risk: 'low' },
]

export async function GET(request) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100))

  // Get query parameters for filtering (optional)
  const { searchParams } = new URL(request.url)
  const limit = searchParams.get('limit')
  const riskFilter = searchParams.get('risk')

  let filteredEvents = [...events]

  // Filter by risk level if specified
  if (riskFilter) {
    filteredEvents = filteredEvents.filter(e => e.risk === riskFilter)
  }

  // Limit results if specified
  if (limit) {
    filteredEvents = filteredEvents.slice(0, parseInt(limit))
  }

  return NextResponse.json({
    success: true,
    data: filteredEvents,
    meta: {
      total: filteredEvents.length,
      timestamp: new Date().toISOString(),
    }
  })
}
