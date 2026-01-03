'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-xl font-bold">
            <span className="text-3xl">🛡️</span>
            <span>EchoGuard</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-text-secondary hover:text-text-primary transition-colors">
              Features
            </Link>
            <Link href="/demo" className="text-text-secondary hover:text-text-primary transition-colors">
              Demo
            </Link>
            <Link href="/faq" className="text-text-secondary hover:text-text-primary transition-colors">
              FAQ
            </Link>
            <Link href="/download" className="bg-gradient-to-r from-primary to-accent px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all">
              Download
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/#features" className="block text-text-secondary hover:text-text-primary" onClick={() => setIsOpen(false)}>
              Features
            </Link>
            <Link href="/demo" className="block text-text-secondary hover:text-text-primary" onClick={() => setIsOpen(false)}>
              Demo
            </Link>
            <Link href="/faq" className="block text-text-secondary hover:text-text-primary" onClick={() => setIsOpen(false)}>
              FAQ
            </Link>
            <Link href="/download" className="block bg-gradient-to-r from-primary to-accent px-6 py-2 rounded-full font-semibold text-center" onClick={() => setIsOpen(false)}>
              Download
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
