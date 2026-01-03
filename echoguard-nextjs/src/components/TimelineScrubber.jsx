'use client'

import { useState, useEffect } from 'react'

const events = [
  { time: '9:41 AM', app: 'WhatsApp', permission: 'Microphone', icon: '🎤' },
  { time: '9:38 AM', app: 'Maps', permission: 'Location', icon: '📍' },
  { time: '9:35 AM', app: 'Instagram', permission: 'Camera', icon: '📷' },
  { time: '9:30 AM', app: 'Chrome', permission: 'Location', icon: '📍' },
  { time: '9:25 AM', app: 'Spotify', permission: 'Storage', icon: '💾' },
  { time: '9:20 AM', app: 'Gmail', permission: 'Contacts', icon: '👥' },
  { time: '9:15 AM', app: 'Facebook', permission: 'Camera', icon: '📷' },
  { time: '9:10 AM', app: 'WhatsApp', permission: 'Microphone', icon: '🎤' },
]

export default function TimelineScrubber() {
  const [value, setValue] = useState(100)
  const [isPlaying, setIsPlaying] = useState(false)

  const index = Math.floor((value / 100) * (events.length - 1))
  const currentEvent = events[index]

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setValue(prev => {
        if (prev <= 0) return 100
        return prev - 2
      })
    }, 150)

    return () => clearInterval(interval)
  }, [isPlaying])

  // Auto-play when component mounts
  useEffect(() => {
    setIsPlaying(true)
  }, [])

  return (
    <div>
      <h3 className="text-xl font-bold mb-6 text-center">Recent Activity</h3>
      
      {/* Timeline slider */}
      <div className="mb-6">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => {
            setValue(Number(e.target.value))
            setIsPlaying(false)
          }}
          className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-accent"
          style={{
            background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${value}%, #27272a ${value}%, #27272a 100%)`
          }}
        />
      </div>

      {/* Current event display */}
      <div className="bg-bg p-4 rounded-lg border border-border">
        <div className="flex items-center justify-between">
          <span className="text-sm text-text-muted">{currentEvent.time}</span>
          <div className="flex items-center gap-2">
            <span className="text-xl">{currentEvent.icon}</span>
            <span className="font-semibold">{currentEvent.app}</span>
          </div>
          <span className="text-sm text-accent">{currentEvent.permission}</span>
        </div>
      </div>

      {/* Play/Pause button */}
      <div className="mt-4 text-center">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          {isPlaying ? '⏸️ Pause' : '▶️ Play'} Timeline
        </button>
      </div>
    </div>
  )
}
