import Header from '@/components/Header'
import ChatBot from '@/components/ChatBot'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      <Image
        src="/images/hero.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-violet-600/90 to-purple-700/90"></div>
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
                icon: '🚀',
                title: '빠른 응답',
                description: '고객 질문에 즉시 응답하여 만족도를 높입니다',
              },
              {
                icon: '🎯',
                title: '정확한 답변',
                description: 'AI 학습을 통해 정확하고 유용한 답변을 제공합니다',
              },
              {
                icon: '💰',
                title: '비용 절감',
                description: '24시간 자동 응답으로 인건비를 크게 절감합니다',
              },
              {
                icon: '🌍',
                title: '다국어 지원',
                description: '전 세계 고객과 자유롭게 소통하세요',
              },
              {
                icon: '📊',
                title: '데이터 분석',
                description: '고객 대화 데이터를 분석하여 인사이트를 얻으세요',
              },
              {
                icon: '🔗',
                title: '간편한 연동',
                description: '웹사이트, 앱, SNS 등 어디든 쉽게 연동 가능합니다',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
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
