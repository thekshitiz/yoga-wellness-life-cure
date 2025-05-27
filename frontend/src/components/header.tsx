"use client"

import { useState } from "react"
import Link from "next/link"
import Image from 'next/image'

const navItems = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Wellness", href: "/wellness" },
  { name: "Community", href: "/community" },
  { name: "About", href: "/about" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full z-50">
      <div className="glass-effect">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-neutral-900">
                Wellness
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-600 hover:text-neutral-900 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Book Now Button */}
            <div className="hidden md:block">
              <button className="btn-primary">
                Join Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-neutral-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-neutral-600 hover:text-neutral-900 font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <button className="btn-primary w-full">
                  Join Now
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

