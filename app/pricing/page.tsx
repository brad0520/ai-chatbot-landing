import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

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
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            합리적인 <span className="text-teal-600">가격</span>
          </h1>
          <p className="text-lg text-stone-500 max-w-3xl mx-auto">
            비즈니스 규모에 맞는 최적의 플랜을 선택하세요
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border ${
                  plan.popular
                    ? 'border-teal-500 ring-2 ring-teal-100 relative shadow-lg'
                    : 'border-stone-200 shadow-sm'
                } transition-all hover:shadow-md`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white px-5 py-1 rounded-full text-sm font-semibold">
                    인기
                  </div>
                )}
                <h3 className="text-2xl font-bold text-stone-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-stone-500 text-sm mb-6">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-stone-900">
                    {plan.price === '협의' ? '' : '\u20A9'}{plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-stone-500 ml-2">/ {plan.period}</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-stone-600 text-sm">
                      <span className="text-teal-500 mr-2 font-bold mt-0.5">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.name === '엔터프라이즈' ? '/contact' : '/demo'}
                  className={`block w-full py-3.5 rounded-full font-semibold text-center transition-colors ${
                    plan.popular
                      ? 'bg-teal-600 text-white hover:bg-teal-700'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {plan.name === '엔터프라이즈' ? '영업팀 문의' : '시작하기'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 px-6 bg-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-600">500+</div>
              <div className="text-stone-500 text-sm mt-1">기업 고객</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">1M+</div>
              <div className="text-stone-500 text-sm mt-1">월간 대화</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">99.9%</div>
              <div className="text-stone-500 text-sm mt-1">가동률</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">4.9/5</div>
              <div className="text-stone-500 text-sm mt-1">고객 만족도</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 text-center mb-12">
            자주 묻는 질문
          </h2>
          <div className="space-y-4">
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
                className="bg-stone-50 rounded-2xl p-6 border border-stone-200"
              >
                <h3 className="text-lg font-bold text-stone-900 mb-2">{faq.q}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
