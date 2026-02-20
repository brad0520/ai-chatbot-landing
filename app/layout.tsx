import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ChatBot Pro - AI 기반 지능형 챗봇 솔루션",
    template: "%s | ChatBot Pro",
  },
  description: "최첨단 AI 기술로 고객 응대를 자동화하세요. 24/7 실시간 응답, 다국어 지원, 감정 분석까지 가능한 스마트 챗봇으로 고객 만족도를 높이세요.",
  keywords: ["AI 챗봇", "인공지능", "고객 응대 자동화", "챗봇 솔루션", "대화형 AI", "자연어 처리", "NLP", "고객 서비스", "24시간 상담", "AI 비서"],
  authors: [{ name: "ChatBot Pro" }],
  creator: "ChatBot Pro",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://chatbot-pro.ai",
    siteName: "ChatBot Pro",
    title: "ChatBot Pro - AI 기반 지능형 챗봇 솔루션",
    description: "최첨단 AI 기술로 고객 응대를 자동화하세요. 24/7 실시간 응답, 다국어 지원",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ChatBot Pro AI Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatBot Pro - AI 기반 지능형 챗봇 솔루션",
    description: "최첨단 AI 기술로 고객 응대를 자동화하세요",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="canonical" href="https://chatbot-pro.ai" />
        <meta name="theme-color" content="#0D9488" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${inter.variable} font-sans bg-white text-stone-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
