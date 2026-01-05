'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/10 backdrop-blur-xl shadow-lg'
            : 'bg-white/5 backdrop-blur-lg'
        } border-b border-white/20`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-[70px]">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-white flex items-center gap-2"
            >
              <span className="text-3xl animate-bounce">🤖</span>
              ChatBot Pro
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex space-x-8">
                <li>
                  <Link
                    href="/"
                    className="text-white/90 hover:text-white hover:bg-white/20 px-4 py-2 rounded-full transition-all hover:-translate-y-0.5"
                  >
                    홈
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-white/90 hover:text-white hover:bg-white/20 px-4 py-2 rounded-full transition-all hover:-translate-y-0.5"
                  >
                    기능
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demo"
                    className="text-white/90 hover:text-white hover:bg-white/20 px-4 py-2 rounded-full transition-all hover:-translate-y-0.5"
                  >
                    데모
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-white/90 hover:text-white hover:bg-white/20 px-4 py-2 rounded-full transition-all hover:-translate-y-0.5"
                  >
                    가격
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/90 hover:text-white hover:bg-white/20 px-4 py-2 rounded-full transition-all hover:-translate-y-0.5"
                  >
                    문의
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {/* Desktop CTA Button */}
              <Link
                href="/demo"
                className="hidden lg:block bg-white text-purple-600 px-6 py-2.5 rounded-full font-semibold hover:bg-white/90 hover:shadow-lg transition-all"
              >
                무료 체험
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`block h-0.5 w-full bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`block h-0.5 w-full bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block h-0.5 w-full bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" style={{ top: '70px' }}>
          <div className="absolute inset-0 bg-purple-900/95 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)}>
            <nav className="px-6 py-8">
              <ul className="space-y-4">
                <li>
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className="block text-2xl font-bold text-white hover:text-purple-300 transition-colors py-3">
                    홈
                  </Link>
                </li>
                <li>
                  <Link href="/features" onClick={() => setIsMenuOpen(false)} className="block text-2xl font-bold text-white hover:text-purple-300 transition-colors py-3">
                    기능
                  </Link>
                </li>
                <li>
                  <Link href="/demo" onClick={() => setIsMenuOpen(false)} className="block text-2xl font-bold text-white hover:text-purple-300 transition-colors py-3">
                    데모
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" onClick={() => setIsMenuOpen(false)} className="block text-2xl font-bold text-white hover:text-purple-300 transition-colors py-3">
                    가격
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block text-2xl font-bold text-white hover:text-purple-300 transition-colors py-3">
                    문의
                  </Link>
                </li>
              </ul>
              <Link href="/demo" onClick={() => setIsMenuOpen(false)} className="mt-8 block w-full text-center bg-white text-purple-600 px-6 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all">
                무료 체험
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="fixed top-[70px] left-0 right-0 h-1 bg-white/10 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300"
          style={{
            width: scrolled ? '30%' : '0%',
          }}
        />
      </div>
    </>
  )
}
