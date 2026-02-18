import Header from '@/components/Header'
import ChatBot from '@/components/ChatBot'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      <Image
        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80"
        alt="AI 기술 추상 배경"
        fill
        className="object-cover opacity-25"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-violet-800/85 to-purple-900/90" />
      <div className="relative z-10">
      <Header />
      <ChatBot />

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              왜 ChatBot Pro인가요?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              AI 기술로 고객 서비스를 혁신하세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
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
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Trust Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="팀 협업 모습"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-transparent" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                신뢰할 수 있는 AI 파트너
              </h2>
              <p className="text-xl text-white/80 mb-6">
                전문 엔지니어 팀이 최첨단 AI 기술로 비즈니스의 고객 소통을 혁신합니다.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-white/60 text-sm">기업 고객</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-white/60 text-sm">가동률</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-white/60 text-sm">기술 지원</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80"
            alt="AI 두뇌 배경"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              지금 바로 시작하세요
            </h2>
            <p className="text-xl text-white/80 mb-8">
              14일 무료 체험으로 ChatBot Pro의 강력한 기능을 경험해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 hover:shadow-lg transition-all"
              >
                무료 체험 시작하기
              </a>
              <a
                href="/pricing"
                className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
              >
                가격 알아보기
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </main>
  )
}
