'use client'

import { useEffect, useState } from 'react'

export default function PrivacyScore() {
  const [score, setScore] = useState(0)
  const targetScore = 87

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const increment = targetScore / (duration / 16) // 60fps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= targetScore) {
        setScore(targetScore)
        clearInterval(timer)
      } else {
        setScore(Math.round(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [])

  const circumference = 2 * Math.PI * 80
  const offset = circumference - (circumference * score / 100)

  return (
    <div className="text-center">
      <h3 className="text-xl font-bold mb-6">Privacy Score</h3>
      <div className="relative w-48 h-48 mx-auto">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="16"
            className="text-surface"
          />
          {/* Progress circle */}
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="16"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="text-accent transition-all duration-1000 ease-out"
            style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
          />
        </svg>
        {/* Score text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-5xl font-extrabold text-accent">{score}</div>
          <div className="text-sm text-text-secondary">Privacy Score</div>
        </div>
      </div>
      <p className="mt-6 text-sm text-text-secondary">
        Your device is well protected. Keep it up!
      </p>
    </div>
  )
}
