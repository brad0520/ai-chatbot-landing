import Header from '@/components/Header'
import ChatBot from '@/components/ChatBot'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-10 px-6 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            제품 <span className="text-teal-600">데모</span>
          </h1>
          <p className="text-lg text-stone-500 max-w-3xl mx-auto">
            실제로 작동하는 ChatBot Pro를 직접 체험해보세요
          </p>
        </div>
      </section>

      {/* Interactive Demo */}
      <ChatBot />

      {/* Demo Features */}
      <section className="py-20 px-6 bg-green-50/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 text-center mb-12">
            데모에서 체험할 수 있는 기능
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
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
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
