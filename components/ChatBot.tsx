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
      content: '안녕하세요! 무엇을 도와드릴까요?',
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom()
    }
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      type: 'user',
      content: inputValue,
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue('')

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
      return '더 자세한 내용은 관련 페이지를 참고하시거나, 구체적인 질문을 해주세요!'
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
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-stone-200 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-teal-600 p-6 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold">ChatBot Pro 체험</div>
                <div className="text-teal-100 text-sm">궁금한 것이 있으시면 언제든 물어보세요</div>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-[400px] overflow-y-auto p-6 space-y-4 bg-stone-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-end gap-3 ${
                  message.type === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    message.type === 'bot'
                      ? 'bg-teal-600 text-white'
                      : 'bg-stone-300 text-stone-600'
                  }`}
                >
                  {message.type === 'bot' ? 'AI' : 'U'}
                </div>
                <div
                  className={`max-w-[70%] px-4 py-3 text-sm leading-relaxed ${
                    message.type === 'bot'
                      ? 'chat-bubble-ai'
                      : 'chat-bubble-user'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-end gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm">
                  AI
                </div>
                <div className="chat-bubble-ai px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-t border-stone-200 bg-white">
            <div className="text-stone-500 text-xs mb-2">빠른 질문:</div>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.query)}
                  className="px-3 py-1.5 bg-teal-50 hover:bg-teal-100 text-teal-700 rounded-full text-xs font-medium transition-colors border border-teal-200"
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-stone-200 bg-white">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="메시지를 입력하세요..."
                className="flex-1 bg-stone-100 border border-stone-200 rounded-full px-5 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                전송
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
