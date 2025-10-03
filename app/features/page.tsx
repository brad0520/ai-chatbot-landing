import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FeaturesPage() {
  const features = [
    {
      icon: '🤖',
      title: 'AI 자동 응답',
      description: '고객 질문을 분석하여 24시간 자동으로 응답합니다',
      details: [
        '자연어 처리 (NLP) 기술',
        '문맥 이해 및 적절한 답변',
        '다국어 자동 번역',
        '지속적인 학습 개선',
      ],
    },
    {
      icon: '😊',
      title: '감정 분석',
      description: '고객의 감정 상태를 파악하여 최적의 응대를 제공합니다',
      details: [
        '실시간 감정 인식',
        '긍정/부정/중립 분석',
        '감정에 맞는 응답 톤',
        '불만 고객 자동 에스컬레이션',
      ],
    },
    {
      icon: '📝',
      title: '대화 기록 관리',
      description: '모든 대화 내용을 저장하고 검색할 수 있습니다',
      details: [
        '전체 대화 기록 저장',
        '키워드 검색 기능',
        'CSV/Excel 내보내기',
        '통계 및 분석 리포트',
      ],
    },
    {
      icon: '🔌',
      title: 'API 연동',
      description: '다양한 시스템과 쉽게 연동할 수 있습니다',
      details: [
        'RESTful API 제공',
        'Webhook 지원',
        'CRM 연동',
        '전자상거래 플랫폼 연동',
      ],
    },
    {
      icon: '🎓',
      title: '맞춤형 학습',
      description: '우리 비즈니스에 맞게 챗봇을 훈련시킬 수 있습니다',
      details: [
        '업종별 템플릿 제공',
        '자체 데이터 학습',
        '질문-답변 직접 등록',
        '지속적인 개선',
      ],
    },
    {
      icon: '📱',
      title: '다양한 채널 지원',
      description: '웹사이트, 앱, SNS 등 어디서든 사용 가능합니다',
      details: [
        '웹사이트 위젯',
        '모바일 앱 SDK',
        '카카오톡/라인 연동',
        '페이스북 메신저',
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            강력한 <span className="text-purple-200">기능</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            ChatBot Pro가 제공하는 AI 기반 고객 상담 솔루션의 모든 기능을 확인하세요
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/80 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-white/70 text-sm">
                      <span className="text-purple-300 mr-2">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl text-white/80 mb-8">
            14일 무료 체험으로 모든 기능을 경험해보세요
          </p>
          <a
            href="/demo"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 hover:shadow-lg transition-all"
          >
            무료 체험 시작하기
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
