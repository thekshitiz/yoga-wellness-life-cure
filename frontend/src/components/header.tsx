"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const navItems = [
  { name: "Home", href: "#" },
  { name: "Yoga", href: "#yoga" },
  { name: "Plants", href: "#plants" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Wellness Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-green-600 font-medium">
              Services
            </Link>
            <Link href="/packages" className="text-gray-700 hover:text-green-600 font-medium">
              Packages
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-green-600 font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-colors">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
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
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium">
                About Us
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-green-600 font-medium">
                Services
              </Link>
              <Link href="/packages" className="text-gray-700 hover:text-green-600 font-medium">
                Packages
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-green-600 font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium">
                Contact
              </Link>
              <button className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-colors w-full">
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

