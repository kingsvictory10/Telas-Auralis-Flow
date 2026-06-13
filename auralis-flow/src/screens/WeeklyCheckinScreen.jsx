import { useState } from "react";

const QUESTIONS = [
  {
    id: "workload",
    category: "Sobrecarga",
    text: "Esta semana senti que a quantidade de trabalho estava adequada.",
  },
  {
    id: "autonomy",
    category: "Autonomia",
    text: "Tenho autonomia para organizar minhas atividades.",
  },
  {
    id: "leadership",
    category: "Apoio da liderança",
    text: "Sinto que recebo apoio quando enfrento dificuldades no trabalho.",
  },
  {
    id: "recognition",
    category: "Reconhecimento",
    text: "Meu trabalho é valorizado e reconhecido.",
  },
  {
    id: "safety",
    category: "Segurança psicológica",
    text: "Sinto que posso expressar opiniões e preocupações sem medo.",
  },
  {
    id: "exhaustion",
    category: "Exaustão emocional",
    text: "Terminei a semana emocionalmente esgotado.",
  },
  {
    id: "balance",
    category: "Equilíbrio vida-trabalho",
    text: "Consegui equilibrar minhas demandas profissionais e pessoais.",
  },
];

const SCALE = [
  { value: 1, emoji: "1️⃣", label: "Discordo totalmente" },
  { value: 2, emoji: "2️⃣", label: "Discordo"            },
  { value: 3, emoji: "3️⃣", label: "Neutro"              },
  { value: 4, emoji: "4️⃣", label: "Concordo"            },
  { value: 5, emoji: "5️⃣", label: "Concordo totalmente" },
];

const TOTAL = QUESTIONS.length;

export default function WeeklyCheckinScreen({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const question = QUESTIONS[currentIndex];
  const selected = answers[question.id] ?? null;
  const isLast   = currentIndex === TOTAL - 1;
  const progress = ((currentIndex + 1) / TOTAL) * 100;

  function selectAnswer(value) {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
  }

  function handleNext() {
    if (isLast) {
      onComplete();
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }

  function handleBack() {
    setCurrentIndex((i) => i - 1);
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ backgroundColor: "#F0F4FF" }}
    >
      <div className="w-full" style={{ maxWidth: "480px" }}>

        {/* Header */}
        <div className="mb-2 text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
            style={{ backgroundColor: "#DBEAFE", color: "#1A73E8" }}
          >
            Check-in semanal
          </span>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
              Pergunta {currentIndex + 1} de {TOTAL}
            </span>
            <span className="text-xs text-gray-400">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, backgroundColor: "#1A73E8" }}
            />
          </div>
        </div>

        {/* Card */}
        <div
          className="bg-white rounded-2xl px-6 py-8"
          style={{
            boxShadow: "0 4px 24px rgba(26,115,232,0.10)",
            border: "1px solid #e0eaff",
          }}
        >
          {/* Category badge */}
          <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#1A73E8" }}>
            {question.category}
          </p>

          {/* Question text */}
          <h2 className="text-lg font-bold text-gray-900 leading-snug mb-6">
            {question.text}
          </h2>

          {/* Scale options */}
          <div className="flex flex-col gap-2.5">
            {SCALE.map(({ value, emoji, label }) => {
              const isSelected = selected === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => selectAnswer(value)}
                  className="flex items-center gap-3 w-full rounded-xl px-4 py-3 text-left transition-all"
                  style={{
                    border: isSelected ? "2px solid #1A73E8" : "2px solid #e5e7eb",
                    backgroundColor: isSelected ? "#EFF6FF" : "#F9FAFB",
                  }}
                >
                  <span className="text-xl leading-none flex-shrink-0">{emoji}</span>
                  <span
                    className="text-sm font-medium leading-tight"
                    style={{ color: isSelected ? "#1A73E8" : "#374151" }}
                  >
                    {label}
                  </span>
                  {isSelected && (
                    <span
                      className="ml-auto text-xs font-bold flex-shrink-0"
                      style={{ color: "#1A73E8" }}
                    >
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Next / Finish button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={selected === null}
            className="mt-6 w-full rounded-xl py-3 text-sm font-semibold text-white transition-all"
            style={{
              backgroundColor: selected !== null ? "#1A73E8" : "#93c5fd",
              cursor: selected !== null ? "pointer" : "not-allowed",
            }}
            onMouseEnter={(e) => {
              if (selected !== null) e.currentTarget.style.backgroundColor = "#1558B0";
            }}
            onMouseLeave={(e) => {
              if (selected !== null) e.currentTarget.style.backgroundColor = "#1A73E8";
            }}
          >
            {isLast ? "Finalizar" : "Próximo"}
          </button>
        </div>

        {/* Back link */}
        {currentIndex > 0 && (
          <button
            type="button"
            onClick={handleBack}
            className="mt-4 w-full text-center text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            ← Voltar
          </button>
        )}

      </div>
    </div>
  );
}
