'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  type: 'bot' | 'user'
  content: string
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: '안녕하세요! 무엇을 도와드릴까요? 😊',
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // 사용자 메시지 추가
    const userMessage: Message = {
      type: 'user',
      content: inputValue,
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue('')

    // 봇 응답 시뮬레이션
    setIsTyping(true)
    setTimeout(() => {
      const botResponse: Message = {
        type: 'bot',
        content: getBotResponse(inputValue),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()
    if (lowerInput.includes('서비스') || lowerInput.includes('소개')) {
      return '저희 ChatBot Pro는 AI 기반 고객 상담 솔루션입니다. 24시간 자동 응답, 다국어 지원, 맞춤형 학습 기능을 제공합니다!'
    } else if (lowerInput.includes('가격') || lowerInput.includes('비용')) {
      return '기본 플랜은 월 99,000원부터 시작합니다. 자세한 가격은 가격 페이지를 확인해주세요!'
    } else if (lowerInput.includes('기능')) {
      return '자동 응답, 감정 분석, 대화 기록 관리, API 연동, 맞춤형 학습 등 다양한 기능을 제공합니다.'
    } else if (lowerInput.includes('연락') || lowerInput.includes('문의')) {
      return '문의는 contact@chatbotpro.com 또는 02-1234-5678로 연락주세요!'
    } else {
      return '더 자세한 내용은 관련 페이지를 참고하시거나, 구체적인 질문을 해주세요! 😊'
    }
  }

  const quickActions = [
    { label: '서비스 소개', query: '서비스에 대해 알려주세요' },
    { label: '가격 문의', query: '가격이 어떻게 되나요?' },
    { label: '기능 설명', query: '어떤 기능이 있나요?' },
    { label: '연락처', query: '연락처를 알려주세요' },
  ]

  const handleQuickAction = (query: string) => {
    setInputValue(query)
    setTimeout(() => handleSendMessage(), 100)
  }

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-600 to-violet-600 p-6 text-white">
            <div className="text-2xl font-bold mb-2">안녕하세요! 👋</div>
            <div className="text-purple-100">궁금한 것이 있으시면 언제든 물어보세요</div>
          </div>

          {/* Chat Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  message.type === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                    message.type === 'bot'
                      ? 'bg-purple-500'
                      : 'bg-white/20'
                  }`}
                >
                  {message.type === 'bot' ? '🤖' : '😊'}
                </div>
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                    message.type === 'bot'
                      ? 'bg-white/90 text-gray-800'
                      : 'bg-purple-500 text-white'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-xl">
                  🤖
                </div>
                <div className="bg-white/90 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-t border-white/10">
            <div className="text-white/70 text-sm mb-3">빠른 질문:</div>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.query)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm transition-all"
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-6 border-t border-white/10">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="메시지를 입력하세요..."
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2"
              >
                📤 전송
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
