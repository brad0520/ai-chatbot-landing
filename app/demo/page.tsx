import Header from '@/components/Header'
import ChatBot from '@/components/ChatBot'
import Footer from '@/components/Footer'

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            제품 <span className="text-purple-200">데모</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            실제로 작동하는 ChatBot Pro를 직접 체험해보세요
          </p>
        </div>
      </section>

      {/* Interactive Demo */}
      <ChatBot />

      {/* Demo Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            데모에서 체험할 수 있는 기능
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '💬',
                title: '실시간 대화',
                description: '실제 챗봇처럼 질문하고 답변을 받아보세요',
              },
              {
                icon: '⚡',
                title: '빠른 응답',
                description: '1초 이내에 정확한 답변을 제공합니다',
              },
              {
                icon: '🎯',
                title: '빠른 질문 버튼',
                description: '자주 묻는 질문을 클릭 한 번으로 확인하세요',
              },
              {
                icon: '🤝',
                title: '친근한 대화',
                description: '사람처럼 자연스러운 대화 경험',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
