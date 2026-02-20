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
            ? 'bg-white shadow-md'
            : 'bg-white/80 backdrop-blur-md'
        } border-b border-stone-100`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-[70px]">
            <Link
              href="/"
              className="text-2xl font-bold text-teal-700 flex items-center gap-2"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-teal-600">
                <rect width="32" height="32" rx="10" fill="currentColor"/>
                <path d="M10 12C10 10.8954 10.8954 10 12 10H20C21.1046 10 22 10.8954 22 12V18C22 19.1046 21.1046 20 20 20H18L14 24V20H12C10.8954 20 10 19.1046 10 18V12Z" fill="white"/>
                <circle cx="14" cy="15" r="1" fill="currentColor"/>
                <circle cx="18" cy="15" r="1" fill="currentColor"/>
              </svg>
              ChatBot Pro
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {[
                { href: '/', label: '홈' },
                { href: '/features', label: '기능' },
                { href: '/demo', label: '데모' },
                { href: '/pricing', label: '가격' },
                { href: '/contact', label: '문의' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-stone-600 hover:text-teal-600 px-4 py-2 rounded-xl text-[15px] font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/demo"
                className="hidden lg:block bg-teal-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-teal-700 transition-colors text-sm"
              >
                무료 체험
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2"
                aria-label="메뉴 열기"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`block h-0.5 w-full bg-stone-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`block h-0.5 w-full bg-stone-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block h-0.5 w-full bg-stone-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" style={{ top: '70px' }}>
          <div
            className="absolute inset-0 bg-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <nav className="px-6 py-8">
              <ul className="space-y-2">
                {[
                  { href: '/', label: '홈' },
                  { href: '/features', label: '기능' },
                  { href: '/demo', label: '데모' },
                  { href: '/pricing', label: '가격' },
                  { href: '/contact', label: '문의' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-lg font-semibold text-stone-800 hover:text-teal-600 transition-colors py-3 border-b border-stone-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/demo"
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 block w-full text-center bg-teal-600 text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-teal-700 transition-colors"
              >
                무료 체험
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
