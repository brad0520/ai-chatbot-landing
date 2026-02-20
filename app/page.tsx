import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 text-teal-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-teal-500 rounded-full" />
                AI 기반 챗봇 솔루션
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
                고객과의 대화를<br />
                <span className="text-teal-600">AI로 혁신</span>하세요
              </h1>
              <p className="text-lg text-stone-500 mb-8 max-w-lg leading-relaxed">
                24시간 실시간 응답, 다국어 지원, 감정 분석까지. 스마트 챗봇으로
                고객 만족도를 높이고 운영 비용을 절감하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/demo"
                  className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-teal-700 transition-colors"
                >
                  무료 체험 시작하기
                </Link>
                <Link
                  href="/features"
                  className="border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-full font-semibold text-center hover:border-teal-600 hover:text-teal-600 transition-colors"
                >
                  기능 살펴보기
                </Link>
              </div>
            </div>

            {/* Floating Chat Bubbles */}
            <div className="relative h-[400px] lg:h-[500px] hidden md:block">
              {/* Main chat window */}
              <div className="absolute top-8 right-0 w-[320px] bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden animate-float">
                <div className="bg-teal-600 px-5 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-white/30 rounded-full" />
                  <span className="text-white text-sm font-medium">ChatBot Pro</span>
                </div>
                <div className="p-4 space-y-3">
                  <div className="chat-bubble-ai px-3 py-2 text-sm max-w-[80%]">
                    안녕하세요! 무엇을 도와드릴까요?
                  </div>
                  <div className="chat-bubble-user px-3 py-2 text-sm max-w-[80%] ml-auto">
                    배송 현황을 알고 싶어요
                  </div>
                  <div className="chat-bubble-ai px-3 py-2 text-sm max-w-[80%]">
                    주문번호를 알려주시면 바로 확인해드릴게요!
                  </div>
                </div>
              </div>

              {/* Floating stat bubble */}
              <div className="absolute bottom-16 left-0 bg-white rounded-2xl shadow-lg border border-stone-200 px-5 py-4 animate-float-delay">
                <div className="text-2xl font-bold text-teal-600">98.5%</div>
                <div className="text-stone-500 text-sm">응답 정확도</div>
              </div>

              {/* Another floating bubble */}
              <div className="absolute top-4 left-8 bg-white rounded-2xl shadow-lg border border-stone-200 px-5 py-4 animate-float-delay-2">
                <div className="text-2xl font-bold text-teal-600">0.3초</div>
                <div className="text-stone-500 text-sm">평균 응답 시간</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: '기업 고객' },
              { value: '1M+', label: '월간 대화' },
              { value: '99.9%', label: '서비스 가동률' },
              { value: '4.9/5', label: '고객 만족도' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-teal-600">{stat.value}</div>
                <div className="text-stone-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-green-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              왜 ChatBot Pro인가요?
            </h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">
              AI 기술로 고객 서비스를 혁신하세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: 'https://images.unsplash.com/photo-1531746790095-6c11a7b97a19?w=600&q=80',
                imageAlt: 'AI 로봇 기술',
                title: '빠른 응답',
                description: '고객 질문에 즉시 응답하여 만족도를 높입니다',
              },
              {
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
                imageAlt: '데이터 대시보드 분석',
                title: '정확한 답변',
                description: 'AI 학습을 통해 정확하고 유용한 답변을 제공합니다',
              },
              {
                image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
                imageAlt: '비용 절감 전략',
                title: '비용 절감',
                description: '24시간 자동 응답으로 인건비를 크게 절감합니다',
              },
              {
                image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80',
                imageAlt: '다국어 코드 매트릭스',
                title: '다국어 지원',
                description: '전 세계 고객과 자유롭게 소통하세요',
              },
              {
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
                imageAlt: '데이터 분석 차트',
                title: '데이터 분석',
                description: '고객 대화 데이터를 분석하여 인사이트를 얻으세요',
              },
              {
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
                imageAlt: '클라우드 서버 연동',
                title: '간편한 연동',
                description: '웹사이트, 앱, SNS 등 어디든 쉽게 연동 가능합니다',
              },
            ].map((feature, index) => (
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
                  <p className="text-stone-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Team Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="팀 협업 모습"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                신뢰할 수 있는 AI 파트너
              </h2>
              <p className="text-lg text-stone-500 mb-8 leading-relaxed">
                전문 엔지니어 팀이 최첨단 AI 기술로 비즈니스의 고객 소통을 혁신합니다.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-teal-50 rounded-2xl">
                  <div className="text-2xl font-bold text-teal-600">500+</div>
                  <div className="text-stone-500 text-sm mt-1">기업 고객</div>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-2xl">
                  <div className="text-2xl font-bold text-teal-600">99.9%</div>
                  <div className="text-stone-500 text-sm mt-1">가동률</div>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-2xl">
                  <div className="text-2xl font-bold text-teal-600">24/7</div>
                  <div className="text-stone-500 text-sm mt-1">기술 지원</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            14일 무료 체험으로 ChatBot Pro의 강력한 기능을 경험해보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-white text-teal-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-50 transition-colors"
            >
              무료 체험 시작하기
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              가격 알아보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
