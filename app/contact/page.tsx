'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            문의하기
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            궁금하신 점이 있으신가요? 언제든지 연락주세요
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                연락처 정보
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📧</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      이메일
                    </h3>
                    <p className="text-white/80">contact@chatbotpro.com</p>
                    <p className="text-white/80">support@chatbotpro.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-4xl">📞</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      전화
                    </h3>
                    <p className="text-white/80">02-1234-5678</p>
                    <p className="text-white/60 text-sm">평일 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      주소
                    </h3>
                    <p className="text-white/80">
                      서울특별시 강남구 테헤란로 123
                      <br />
                      테크빌딩 10층
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 h-64 flex items-center justify-center">
                <p className="text-white/60">🗺️ Google Maps</p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                메시지 보내기
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-lg"
                    placeholder="홍길동"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-lg"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    회사명
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-lg"
                    placeholder="테크코프"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    문의 내용 *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-lg resize-none"
                    placeholder="문의하실 내용을 입력해주세요..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-white/90 hover:shadow-lg transition-all"
                >
                  메시지 전송
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
