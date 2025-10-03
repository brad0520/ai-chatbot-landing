import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white/5 backdrop-blur-lg border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              <span>🤖</span>
              ChatBot Pro
            </div>
            <p className="text-white/60 text-sm">
              AI 기반 고객 상담 솔루션으로<br />
              비즈니스 성장을 가속화하세요
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">제품</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-white/60 hover:text-white text-sm transition-colors">
                  주요 기능
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-white/60 hover:text-white text-sm transition-colors">
                  데모 체험
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/60 hover:text-white text-sm transition-colors">
                  가격 정책
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">회사</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                  회사 소개
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                  블로그
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white text-sm transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>이메일: contact@chatbotpro.com</li>
              <li>전화: 02-1234-5678</li>
              <li>주소: 서울시 강남구 테헤란로 123</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2025 ChatBot Pro. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              개인정보 처리방침
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
