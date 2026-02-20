import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-xl font-bold text-teal-700 flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="text-teal-600">
                <rect width="32" height="32" rx="10" fill="currentColor"/>
                <path d="M10 12C10 10.8954 10.8954 10 12 10H20C21.1046 10 22 10.8954 22 12V18C22 19.1046 21.1046 20 20 20H18L14 24V20H12C10.8954 20 10 19.1046 10 18V12Z" fill="white"/>
                <circle cx="14" cy="15" r="1" fill="currentColor"/>
                <circle cx="18" cy="15" r="1" fill="currentColor"/>
              </svg>
              ChatBot Pro
            </div>
            <p className="text-stone-500 text-sm leading-relaxed">
              AI 기반 고객 상담 솔루션으로<br />
              비즈니스 성장을 가속화하세요
            </p>
          </div>

          <div>
            <h4 className="text-stone-900 font-semibold mb-4">제품</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-stone-500 hover:text-teal-600 text-sm transition-colors">
                  주요 기능
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-stone-500 hover:text-teal-600 text-sm transition-colors">
                  데모 체험
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-stone-500 hover:text-teal-600 text-sm transition-colors">
                  가격 정책
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-900 font-semibold mb-4">회사</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-stone-500 hover:text-teal-600 text-sm transition-colors">
                  회사 소개
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-500 hover:text-teal-600 text-sm transition-colors">
                  블로그
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-stone-500 hover:text-teal-600 text-sm transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-900 font-semibold mb-4">연락처</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              <li>이메일: contact@chatbotpro.com</li>
              <li>전화: 02-1234-5678</li>
              <li>주소: 서울시 강남구 테헤란로 123</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-400 text-sm">
            &copy; 2025 ChatBot Pro. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-stone-400 hover:text-teal-600 transition-colors">
              개인정보 처리방침
            </a>
            <a href="#" className="text-stone-400 hover:text-teal-600 transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
