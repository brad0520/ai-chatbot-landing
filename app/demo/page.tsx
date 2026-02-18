import Header from '@/components/Header'
import ChatBot from '@/components/ChatBot'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function DemoPage() {
  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80"
        alt="AI 휴머노이드 배경"
        fill
        className="object-cover opacity-15"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-violet-800/85 to-purple-900/95" />

      <div className="relative z-10">
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
                  image: 'https://images.unsplash.com/photo-1531746790095-6c11a7b97a19?w=600&q=80',
                  imageAlt: '실시간 대화 AI',
                  title: '실시간 대화',
                  description: '실제 챗봇처럼 질문하고 답변을 받아보세요',
                },
                {
                  image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80',
                  imageAlt: '빠른 데이터 처리',
                  title: '빠른 응답',
                  description: '1초 이내에 정확한 답변을 제공합니다',
                },
                {
                  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
                  imageAlt: '빠른 질문 인터페이스',
                  title: '빠른 질문 버튼',
                  description: '자주 묻는 질문을 클릭 한 번으로 확인하세요',
                },
                {
                  image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
                  imageAlt: '친근한 팀 대화',
                  title: '친근한 대화',
                  description: '사람처럼 자연스러운 대화 경험',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
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
