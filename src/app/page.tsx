"use client";

import React from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
// import ResilienceSoilStats from '@/components/ResilienceSoilStats'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ backgroundImage: 'url(/hero-bg.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="container mx-auto px-0 text-center relative z-20 flex justify-center items-center h-full w-full">
          <div
            style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(3px)',
              borderRadius: '3rem',
            }}
            className="overflow-hidden shadow-lg py-16 px-4 md:px-24 w-full flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-primary-900 mb-6 drop-shadow-xl">
              Live Intentionally
              <br />
              <span className="text-primary-800"> </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-800 mb-8 max-w-4xl mx-auto drop-shadow-lg">
              An open dashboard of movement, creativity, and purpose — blending your health, wellbeing and creativity as you share your life experience, and insights creating one living, breathing digital story.
            </p>
          </div>
        </div>
      </section>
      {/* <ResilienceSoilStats /> */}

      {/* Solutions Section */}
      <section className="py-20 bg-primary-700">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-500">Your Data. Your Journey.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary-500">For Industrials</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-primary-500">
                  <span className="text-primary-400 mr-2">✓</span>
                  Strategic planning for sustainable sourcing
                </li>
                <li className="flex items-center text-primary-500">
                  <span className="text-primary-400 mr-2">✓</span>
                  Get impact data specific to your sourcing
                </li>
                <li className="flex items-center text-primary-500">
                  <span className="text-primary-400 mr-2">✓</span>
                  Create your baseline, identify areas for improvement
                </li>
              </ul>
            </div>
            <div className="bg-primary-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary-500">For Suppliers</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-primary-500">
                  <span className="text-primary-400 mr-2">✓</span>
                  Promoting sustainable value chains
                </li>
                <li className="flex items-center text-primary-500">
                  <span className="text-primary-400 mr-2">✓</span>
                  Get unprecedented control over data attached to the raw materials production
                </li>
                <li className="flex items-center text-primary-500">
                  <span className="text-primary-400 mr-2">✓</span>
                  Spot the best agricultural practices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 