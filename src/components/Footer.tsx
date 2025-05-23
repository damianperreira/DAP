import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-500 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">ZenRider</h3>
            <p className="text-primary-600">
              Business Sustainability powered by Soil Intelligence
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Contact</h4>
            <p className="text-primary-600">contact@zenrider.live</p>
            <p className="text-primary-600">9 rue Saint-Fiacre</p>
            <p className="text-primary-600">75002 Paris, France</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#solutions" className="text-primary-600 hover:text-primary-400">
                  Your Data. Your Journey.
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-primary-600 hover:text-primary-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-primary-600 hover:text-primary-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Newsletter</h4>
            <p className="text-primary-600 mb-4">
              Don't miss what's next.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg w-full text-primary-900 bg-primary-500"
              />
              <button className="bg-primary-400 text-primary-900 px-4 py-2 rounded-r-lg hover:bg-primary-300 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-8 pt-8 text-center text-primary-600">
          <p>© {new Date().getFullYear()} ZenRider. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 