import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="fixed w-full bg-primary-900/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-primary-500">
            ZenRider
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#contact-form" className="text-primary-500 hover:text-primary-400">
              Contact
            </Link>
            <a 
              style={{
                display: 'inline-block',
                backgroundColor: '#FC5200',
                color: '#fff',
                padding: '5px 10px 5px 30px',
                fontSize: '11px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '10px center',
                borderRadius: '3px',
                backgroundImage: 'url("https://badges.strava.com/logo-strava-echelon.png")'
              }}
              href="https://strava.com/athletes/1395439"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow me on
              <Image
                src="https://badges.strava.com/logo-strava.png"
                alt="Strava"
                style={{
                  marginLeft: '2px',
                  verticalAlign: 'text-bottom'
                }}
                height={13}
                width={51}
              />
            </a>
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