'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

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

            {/* Navigation */}
            <nav className="hidden md:block">
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

            {/* CTA Button */}
            <Link
              href="/demo"
              className="bg-white text-purple-600 px-6 py-2.5 rounded-full font-semibold hover:bg-white/90 hover:shadow-lg transition-all"
            >
              무료 체험
            </Link>
          </div>
        </div>
      </header>

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
