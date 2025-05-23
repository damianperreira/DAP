import React from 'react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed w-full bg-primary-900/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-primary-500">
            ZenRider
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#solutions" className="text-primary-500 hover:text-primary-400">
              Your Data. Your Journey.
            </Link>
            <Link href="#about" className="text-primary-500 hover:text-primary-400">
              About
            </Link>
            <Link href="#contact" className="text-primary-500 hover:text-primary-400">
              Contact
            </Link>
          </div>

          <button className="md:hidden text-primary-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
} 