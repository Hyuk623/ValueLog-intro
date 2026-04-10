import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ValueLog – 경험이 사라지기 전에, 나를 설명할 기록으로 남기세요",
  description:
    "ValueLog는 체험, 프로젝트, 활동, 도전의 순간을 기억에서 사라지기 전에 기록하고, 자기소개·포트폴리오·회고·성장 정리에 다시 활용할 수 있도록 돕는 경험 기록 서비스입니다.",
  keywords: ["경험 기록", "포트폴리오", "자기소개", "성장 일지", "ValueLog"],
  openGraph: {
    title: "ValueLog – 경험이 사라지기 전에",
    description: "나를 설명할 기록으로 남기세요",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
