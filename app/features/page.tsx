import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturesPage() {
  const features = [
    {
      title: 'AI 자동 응답',
      description: '고객 질문을 분석하여 24시간 자동으로 응답합니다',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
      imageAlt: 'AI 자동 응답 기술',
      details: [
        '자연어 처리 (NLP) 기술',
        '문맥 이해 및 적절한 답변',
        '다국어 자동 번역',
        '지속적인 학습 개선',
      ],
    },
    {
      title: '감정 분석',
      description: '고객의 감정 상태를 파악하여 최적의 응대를 제공합니다',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      imageAlt: '감정 분석 데이터 대시보드',
      details: [
        '실시간 감정 인식',
        '긍정/부정/중립 분석',
        '감정에 맞는 응답 톤',
        '불만 고객 자동 에스컬레이션',
      ],
    },
    {
      title: '대화 기록 관리',
      description: '모든 대화 내용을 저장하고 검색할 수 있습니다',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      imageAlt: '대화 기록 관리 화면',
      details: [
        '전체 대화 기록 저장',
        '키워드 검색 기능',
        'CSV/Excel 내보내기',
        '통계 및 분석 리포트',
      ],
    },
    {
      title: 'API 연동',
      description: '다양한 시스템과 쉽게 연동할 수 있습니다',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
      imageAlt: '서버 및 클라우드 인프라',
      details: [
        'RESTful API 제공',
        'Webhook 지원',
        'CRM 연동',
        '전자상거래 플랫폼 연동',
      ],
    },
    {
      title: '맞춤형 학습',
      description: '우리 비즈니스에 맞게 챗봇을 훈련시킬 수 있습니다',
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&q=80',
      imageAlt: 'AI 머신러닝 학습',
      details: [
        '업종별 템플릿 제공',
        '자체 데이터 학습',
        '질문-답변 직접 등록',
        '지속적인 개선',
      ],
    },
    {
      title: '다양한 채널 지원',
      description: '웹사이트, 앱, SNS 등 어디서든 사용 가능합니다',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
      imageAlt: '다양한 디바이스 채널',
      details: [
        '웹사이트 위젯',
        '모바일 앱 SDK',
        '메신저 연동',
        '페이스북 메신저',
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            강력한 <span className="text-teal-600">기능</span>
          </h1>
          <p className="text-lg text-stone-500 max-w-3xl mx-auto">
            ChatBot Pro가 제공하는 AI 기반 고객 상담 솔루션의 모든 기능을 확인하세요
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all group"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-stone-500 text-sm mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-stone-600 text-sm">
                        <span className="text-teal-500 mr-2 font-bold">&#10003;</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6 bg-green-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                최첨단 AI 기술 스택
              </h2>
              <p className="text-lg text-stone-500 mb-8 leading-relaxed">
                GPT 기반 대규모 언어 모델과 자체 개발 NLP 엔진을 결합하여 업계 최고 수준의 정확도를 제공합니다.
              </p>
              <div className="space-y-4">
                {['자연어 이해 (NLU) 정확도 98.5%', '응답 생성 시간 평균 0.3초', '다국어 지원 40개 이상 언어', '컨텍스트 유지 최대 100턴'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-stone-600">
                    <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80"
                alt="보안 기술 인프라"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-teal-100 mb-8">
            14일 무료 체험으로 모든 기능을 경험해보세요
          </p>
          <Link
            href="/demo"
            className="inline-block bg-white text-teal-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-50 transition-colors"
          >
            무료 체험 시작하기
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
