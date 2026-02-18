import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function PricingPage() {
  const plans = [
    {
      name: '스타터',
      price: '99,000',
      period: '월',
      description: '개인 및 소규모 비즈니스를 위한 기본 플랜',
      features: [
        '월 1,000건 대화',
        '기본 AI 응답',
        '웹사이트 위젯',
        '이메일 지원',
        '대화 기록 30일',
      ],
      popular: false,
    },
    {
      name: '프로',
      price: '299,000',
      period: '월',
      description: '성장하는 비즈니스를 위한 전문 플랜',
      features: [
        '월 10,000건 대화',
        '고급 AI 응답 + 감정 분석',
        '모든 채널 지원',
        '우선 지원',
        '대화 기록 무제한',
        'API 연동',
        '맞춤형 학습',
      ],
      popular: true,
    },
    {
      name: '엔터프라이즈',
      price: '협의',
      period: '',
      description: '대기업을 위한 맞춤형 솔루션',
      features: [
        '무제한 대화',
        '전용 AI 모델',
        '모든 기능 + 커스터마이징',
        '24/7 전담 지원',
        '온프레미스 설치 가능',
        'SLA 보장',
        '전담 계정 매니저',
      ],
      popular: false,
    },
  ]

  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
        alt="비즈니스 전략 배경"
        fill
        className="object-cover opacity-15"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-violet-800/85 to-purple-900/95" />

      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              합리적인 <span className="text-purple-200">가격</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              비즈니스 규모에 맞는 최적의 플랜을 선택하세요
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 border ${
                    plan.popular
                      ? 'border-white/40 ring-4 ring-white/20 relative'
                      : 'border-white/20'
                  } transition-all hover:bg-white/15`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-6 py-1 rounded-full text-sm font-semibold">
                      인기
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-6">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-white">
                      ₩{plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-white/70 ml-2">/ {plan.period}</span>
                    )}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-white/80">
                        <span className="text-purple-300 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 rounded-full font-semibold text-lg transition-all ${
                    plan.popular
                      ? 'bg-white text-purple-600 hover:bg-white/90'
                      : 'bg-white/10 text-white border-2 border-white hover:bg-white/20'
                  }`}>
                    {plan.name === '엔터프라이즈' ? '영업팀 문의' : '시작하기'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="relative py-16 px-6">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
              alt="신뢰할 수 있는 기업 파트너"
              fill
              className="object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-violet-900/80" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/60 text-sm mt-1">기업 고객</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1M+</div>
                <div className="text-white/60 text-sm mt-1">월간 대화</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-white/60 text-sm mt-1">가동률</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">4.9/5</div>
                <div className="text-white/60 text-sm mt-1">고객 만족도</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              자주 묻는 질문
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: '무료 체험 기간은 얼마나 되나요?',
                  a: '모든 플랜에서 14일 무료 체험을 제공합니다. 신용카드 등록 없이 바로 시작할 수 있습니다.',
                },
                {
                  q: '언제든지 플랜을 변경할 수 있나요?',
                  a: '네, 언제든지 플랜을 업그레이드하거나 다운그레이드할 수 있습니다. 변경 사항은 즉시 적용됩니다.',
                },
                {
                  q: '환불 정책은 어떻게 되나요?',
                  a: '구독 후 30일 이내에 만족하지 못하실 경우 전액 환불해드립니다.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.q}</h3>
                  <p className="text-white/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
