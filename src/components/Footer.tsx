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
              Health and Wellness powered by Intelligence
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Contact</h4>
            <p className="text-primary-600">sintabu@yahoo.com</p>
            <p className="text-primary-600">Fort Lauderdale, FL</p>
            <p className="text-primary-600">San Diego, CA</p>
            <p className="text-primary-600">Austin, TX</p>
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
          
          {/* Removed Newsletter Section */}

        </div>
        <div className="border-t border-primary-800 mt-8 pt-8 text-center text-primary-600">
          <p>© {new Date().getFullYear()} ZenRider. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 