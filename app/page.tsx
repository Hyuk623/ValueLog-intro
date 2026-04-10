"use client";

import {
  ArrowRight,
  PenTool,
  Zap,
  Users,
  BookOpen,
  Heart,
  GraduationCap,
  HelpCircle,
  Database,
  Search,
} from "lucide-react";
import { motion } from "motion/react";

/* ─────────────────────────────── Logo ─────────────────────────────── */
type LogoSize = "sm" | "md" | "lg" | "xl";

const Logo = ({
  size = "md",
  className = "",
}: {
  size?: LogoSize;
  className?: string;
}) => {
  const sizes: Record<LogoSize, string> = {
    sm: "w-8 h-8 text-[14px]",
    md: "w-10 h-10 text-[18px]",
    lg: "w-12 h-12 text-[22px]",
    xl: "w-32 h-32 text-[56px]",
  };
  return (
    <div
      className={`${sizes[size]} bg-[#333333] rounded-full flex flex-col items-center justify-center text-white leading-none shrink-0 ${className}`}
    >
      <div className="font-black flex items-center tracking-tighter">
        <span>V</span>
        <span className="-ml-0.5">L</span>
      </div>
      <div className="text-[0.32em] font-bold tracking-tight -mt-0.5">
        ValueLog
      </div>
    </div>
  );
};

/* ──────────────────────────────── Page ──────────────────────────── */
const APP_URL = "https://valuelog-app-v2-2026.web.app";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

/* Problem cards data */
const problems = [
  {
    icon: HelpCircle,
    title: "기억이 흐려진다",
    desc: "시간이 지날수록 경험의 세부 내용과 감정이 빠르게 휘발됩니다.",
  },
  {
    icon: Database,
    title: "파편화된 기록",
    desc: "메모장, 카카오톡, 노션 등 여기저기 흩어진 기록을 활용하기 어렵습니다.",
  },
  {
    icon: Search,
    title: "재활용이 안 된다",
    desc: "막상 자소서·포트폴리오를 쓸 때 어디서 뭘 했는지 찾기 힘들어집니다.",
  },
];

/* Solution steps */
const steps = [
  {
    icon: PenTool,
    num: "01",
    title: "상황 & 배경 기록",
    desc: "언제, 어디서, 어떤 맥락에서 경험했는지를 먼저 적습니다.",
  },
  {
    icon: Zap,
    num: "02",
    title: "내 행동 & 역할",
    desc: "내가 직접 한 행동과 맡은 역할을 구체적으로 서술합니다.",
  },
  {
    icon: BookOpen,
    num: "03",
    title: "결과 & 배움",
    desc: "어떤 결과가 있었는지, 무엇을 배웠는지 정리해 완성합니다.",
  },
];

/* Use cases */
const cases = [
  {
    title: "역사 박물관 체험",
    badge: "현장 학습",
    color: "bg-blue-50 text-blue-700",
    fields: [
      { label: "인상 깊었던 점", value: "실제 유물을 보니 실감이 났다" },
      { label: "내 생각", value: "생존의 문제였겠다는 생각이 들었다" },
      { label: "배운 점", value: "역사는 교과서 밖에서도 배울 수 있다" },
    ],
  },
  {
    title: "팀 프로젝트 발표",
    badge: "협업 경험",
    color: "bg-violet-50 text-violet-700",
    fields: [
      { label: "내 역할", value: "발표 자료 정리와 흐름 구성" },
      { label: "어려웠던 점", value: "의견 차이를 조율하는 과정이 힘들었다" },
      { label: "배운 점", value: "전달 구조를 맞추는 게 중요했다" },
    ],
  },
  {
    title: "가족 도예 체험",
    badge: "가족 활동",
    color: "bg-emerald-50 text-emerald-700",
    fields: [
      { label: "기억에 남는 순간", value: "직접 만드는 과정이 어려웠다" },
      { label: "느낀 점", value: "직접 해보는 것을 더 오래 기억한다" },
      { label: "다음엔", value: "더 복잡한 형태에 도전해보고 싶다" },
    ],
  },
];

/* Target users */
const targets = [
  {
    icon: GraduationCap,
    title: "학생",
    desc: "학교생활, 동아리, 체험 활동을 성장 기록으로 정리하고 싶은 분",
  },
  {
    icon: Users,
    title: "취준생 · 이직자",
    desc: "지난 프로젝트와 경험을 자소서·면접에 바로 활용하고 싶은 분",
  },
  {
    icon: Heart,
    title: "부모 · 가족",
    desc: "아이의 소중한 순간과 성장을 체계적으로 남기고 싶은 분",
  },
];

/* ─────────────────────────────── Main ─────────────────────────────── */
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* ── Nav ── */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            id="nav-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Logo size="sm" />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold text-slate-900">ValueLog</span>
              <span className="text-[10px] font-bold text-[#4F6EF7]/60 tracking-wider">
                BETA
              </span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {(
              [
                ["problem", "문제 인식"],
                ["solution", "기록 방식"],
                ["cases", "활용 사례"],
                ["target", "사용 대상"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                id={`nav-${id}`}
                onClick={() => scrollTo(id)}
                className="hover:text-[#4F6EF7] transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          <a
            id="nav-cta"
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4F6EF7] hover:bg-[#3a57e8] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-[#4F6EF7]/20"
          >
            시작하기
          </a>
        </div>
      </nav>

      <main className="flex-grow pt-16">
        {/* ── Hero ── */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#4F6EF7]/5 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-200/30 blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left copy */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-[#4F6EF7]/10 text-[#4F6EF7] px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                >
                  ✨ 지금 무료 베타 운영 중
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6"
                >
                  경험이 사라지기 전에,
                  <br />
                  <span className="text-[#4F6EF7]">나를 설명할 기록</span>
                  으로&nbsp;남기세요
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl"
                >
                  ValueLog는 체험, 프로젝트, 활동, 도전의 순간을 기억에서
                  사라지기 전에 기록하고, 나중에 자기소개, 포트폴리오, 회고,
                  성장 정리에 다시 활용할 수 있도록 돕는 경험 기록
                  서비스입니다.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <button
                    id="hero-solution-btn"
                    onClick={() => scrollTo("solution")}
                    className="bg-[#4F6EF7] hover:bg-[#3a57e8] text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-xl shadow-[#4F6EF7]/25 flex items-center gap-2 group"
                  >
                    기록 방식 보기
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    id="hero-cases-btn"
                    onClick={() => scrollTo("cases")}
                    className="bg-white border border-slate-200 hover:border-[#4F6EF7] hover:text-[#4F6EF7] text-slate-600 px-8 py-4 rounded-xl text-base font-bold transition-all"
                  >
                    활용 예시 보기
                  </button>
                </motion.div>
              </div>

              {/* Right mock UI */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-800 relative">
                  {/* Window chrome */}
                  <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-slate-500 text-xs font-mono">
                      valuelog_archive.v2
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        tag: "Today's Experience",
                        date: "2026.04.10",
                        title: "팀 프로젝트 갈등 해결 과정",
                        body: "의견 차이가 있었지만, 데이터 기반으로 설득하여 방향성을 일치시켰습니다...",
                        glow: true,
                      },
                      {
                        tag: "Last Week",
                        date: "2026.04.03",
                        title: "역사 박물관 체험 학습",
                        body: "실제 유물을 통해 역사의 생동감을 느꼈습니다. 교과서와 달리...",
                        glow: false,
                      },
                    ].map((card, i) => (
                      <div
                        key={i}
                        className={`p-4 rounded-xl border ${card.glow ? "bg-slate-800/80 border-[#4F6EF7]/40 shadow-lg shadow-[#4F6EF7]/10" : "bg-slate-800/40 border-slate-700/60"}`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[#a5b4fc] text-[10px] font-bold uppercase tracking-wider">
                            {card.tag}
                          </span>
                          <span className="text-slate-400 text-[10px]">
                            {card.date}
                          </span>
                        </div>
                        <h4 className="text-white font-bold text-sm mb-1.5">
                          {card.title}
                        </h4>
                        <p className="text-slate-400 text-xs line-clamp-2">
                          {card.body}
                        </p>
                      </div>
                    ))}

                    <div className="flex items-center gap-3 pt-2">
                      <div className="flex-1 h-px bg-slate-800" />
                      <span className="text-slate-600 text-xs">
                        총 47개의 기록
                      </span>
                      <div className="flex-1 h-px bg-slate-800" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Problem ── */}
        <section id="problem" className="py-24 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
                우리는 많은 경험을 하지만,
                <br />
                대부분 남기지 못합니다
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                시간이 지나면 경험은 빠르게 흐려집니다. ValueLog는 그
                휘발되는 경험을 붙잡습니다.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((p, i) => (
                <motion.div
                  key={i}
                  {...fadeIn}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#4F6EF7]/10 flex items-center justify-center mb-5">
                    <p.icon className="w-6 h-6 text-[#4F6EF7]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Solution ── */}
        <section id="solution" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
                ValueLog는 단순한 메모장이 아닙니다
              </h2>
              <p className="text-lg text-slate-600">
                경험을{" "}
                <span className="text-[#4F6EF7] font-bold">
                  상황 → 행동 → 역할 → 결과 → 배움
                </span>
                의 흐름으로 정리합니다.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  {...fadeIn}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative group"
                >
                  <div className="bg-slate-900 text-white p-8 rounded-3xl h-full hover:bg-[#4F6EF7] transition-colors duration-300">
                    <div className="text-5xl font-black text-white/10 mb-4 leading-none">
                      {s.num}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                      <s.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                    <p className="text-slate-300 group-hover:text-white/80 transition-colors leading-relaxed text-sm">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <a
                id="solution-cta"
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#4F6EF7] hover:bg-[#3a57e8] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-[#4F6EF7]/25 group"
              >
                지금 기록 시작하기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── Cases ── */}
        <section id="cases" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
                이렇게 사용할 수 있습니다
              </h2>
              <p className="text-lg text-slate-600">
                어떤 경험이든, ValueLog로 오래 기억할 수 있는 기록이 됩니다.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {cases.map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeIn}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-start justify-between mb-6">
                    <h4 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${item.color}`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <div className="space-y-4">
                    {item.fields.map((f, j) => (
                      <div key={j}>
                        <p className="text-[10px] font-bold text-[#4F6EF7]/50 uppercase tracking-wider mb-1">
                          {f.label}
                        </p>
                        <p className="text-slate-700 text-sm font-medium leading-snug">
                          {f.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Target ── */}
        <section id="target" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
                이런 분들께 특히 유용합니다
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {targets.map((t, i) => (
                <motion.div
                  key={i}
                  {...fadeIn}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-center p-8 rounded-3xl border border-slate-100 hover:border-[#4F6EF7]/30 hover:shadow-md transition-all"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#4F6EF7]/10 flex items-center justify-center mb-6">
                    <t.icon className="w-8 h-8 text-[#4F6EF7]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {t.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {t.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-[#1e2a6e] to-slate-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeIn}>
              <Logo size="xl" className="mx-auto mb-8 opacity-90" />
              <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                오늘의 경험은
                <br />
                내일의 나를 만든다
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                지금 이 순간부터 기록을 시작하세요.
                <br />
                ValueLog가 당신의 경험을 의미 있는 기록으로 남겨드립니다.
              </p>
              <a
                id="final-cta"
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#4F6EF7] hover:bg-[#3a57e8] text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-[#4F6EF7]/30 group"
              >
                무료로 시작하기
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-slate-500 text-sm mt-6">
                회원가입 무료 · 언제든 기록 가능
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Logo size="sm" />
            <span className="text-lg font-bold text-slate-900">ValueLog</span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2026 ValueLog. All rights reserved.
          </p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#4F6EF7] hover:underline font-medium"
          >
            앱 바로가기 →
          </a>
        </div>
      </footer>
    </div>
  );
}
