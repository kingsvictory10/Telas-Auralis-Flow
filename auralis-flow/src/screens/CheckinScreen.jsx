import { useState } from "react";

const MOODS = [
  { emoji: "😀", label: "Muito bem", value: "muito_bem" },
  { emoji: "🙂", label: "Bem",       value: "bem"       },
  { emoji: "😐", label: "Neutro",    value: "neutro"    },
  { emoji: "😕", label: "Mal",       value: "mal"       },
  { emoji: "😣", label: "Muito mal", value: "muito_mal" },
];

const FACTORS = [
  "Carga de trabalho",
  "Prazo / pressão",
  "Relacionamento com liderança",
  "Relacionamento com colegas",
  "Reconhecimento profissional",
  "Equilíbrio trabalho-vida pessoal",
  "Sono / cansaço físico",
  "Questões pessoais ou familiares",
  "Ambiente de trabalho",
  "Outro",
];

const TOTAL_STEPS = 3;

export default function CheckinScreen({ onComplete }) {
  const [step, setStep]             = useState(1);
  const [mood, setMood]             = useState(null);
  const [factors, setFactors]       = useState([]);
  const [comment, setComment]       = useState("");

  function toggleFactor(factor) {
    setFactors((prev) =>
      prev.includes(factor)
        ? prev.filter((f) => f !== factor)
        : [...prev, factor]
    );
  }

  function nextStep() {
    setStep((s) => s + 1);
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ backgroundColor: "#F0F4FF" }}
    >
      <div className="w-full" style={{ maxWidth: "480px" }}>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
              Etapa {step} de {TOTAL_STEPS}
            </span>
            <span className="text-xs text-gray-400">
              {Math.round((step / TOTAL_STEPS) * 100)}%
            </span>
          </div>
          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(step / TOTAL_STEPS) * 100}%`,
                backgroundColor: "#1A73E8",
              }}
            />
          </div>
        </div>

        {/* Card */}
        <div
          className="bg-white rounded-2xl px-6 py-8"
          style={{ boxShadow: "0 4px 24px rgba(26,115,232,0.10)", border: "1px solid #e0eaff" }}
        >
          {/* ── ETAPA 1 ── */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 leading-snug">
                Como você está se sentindo hoje?
              </h2>

              <div className="flex flex-col gap-3">
                {MOODS.map(({ emoji, label, value }) => {
                  const selected = mood === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setMood(value)}
                      className="flex items-center gap-4 w-full rounded-xl px-4 py-3.5 text-left transition-all"
                      style={{
                        border: selected ? "2px solid #1A73E8" : "2px solid #e5e7eb",
                        backgroundColor: selected ? "#EFF6FF" : "#F9FAFB",
                      }}
                    >
                      <span className="text-2xl leading-none">{emoji}</span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: selected ? "#1A73E8" : "#374151" }}
                      >
                        {label}
                      </span>
                      {selected && (
                        <span className="ml-auto text-xs font-semibold" style={{ color: "#1A73E8" }}>
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={nextStep}
                disabled={!mood}
                className="mt-6 w-full rounded-xl py-3 text-sm font-semibold text-white transition-all"
                style={{
                  backgroundColor: mood ? "#1A73E8" : "#93c5fd",
                  cursor: mood ? "pointer" : "not-allowed",
                }}
                onMouseEnter={(e) => { if (mood) e.currentTarget.style.backgroundColor = "#1558B0"; }}
                onMouseLeave={(e) => { if (mood) e.currentTarget.style.backgroundColor = "#1A73E8"; }}
              >
                Próximo
              </button>
            </div>
          )}

          {/* ── ETAPA 2 ── */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1 leading-snug">
                O que mais influenciou seu dia hoje?
              </h2>
              <p className="text-sm text-gray-400 mb-5">Selecione quantas quiser</p>

              <div className="flex flex-wrap gap-2">
                {FACTORS.map((factor) => {
                  const selected = factors.includes(factor);
                  return (
                    <button
                      key={factor}
                      type="button"
                      onClick={() => toggleFactor(factor)}
                      className="rounded-full px-4 py-2 text-sm font-medium transition-all"
                      style={{
                        backgroundColor: selected ? "#1A73E8" : "#F3F4F6",
                        color: selected ? "#ffffff" : "#374151",
                        border: selected ? "1.5px solid #1A73E8" : "1.5px solid #e5e7eb",
                      }}
                    >
                      {factor}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={nextStep}
                className="mt-6 w-full rounded-xl py-3 text-sm font-semibold text-white transition-all"
                style={{ backgroundColor: "#1A73E8" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1558B0")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1A73E8")}
              >
                Próximo
              </button>
            </div>
          )}

          {/* ── ETAPA 3 ── */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1 leading-snug">
                Gostaria de comentar algo?
              </h2>
              <p className="text-sm text-gray-400 mb-5">
                Opcional — suas respostas são confidenciais
              </p>

              <textarea
                rows={5}
                placeholder="Escreva aqui se quiser compartilhar mais sobre como está se sentindo..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none resize-none transition-colors"
                style={{ lineHeight: "1.6" }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#1A73E8";
                  e.target.style.backgroundColor = "#fff";
                  e.target.style.boxShadow = "0 0 0 3px rgba(26,115,232,0.15)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "";
                  e.target.style.backgroundColor = "";
                  e.target.style.boxShadow = "";
                }}
              />

              <button
                type="button"
                onClick={onComplete}
                className="mt-5 w-full rounded-xl py-3 text-sm font-semibold text-white transition-all"
                style={{ backgroundColor: "#1A73E8" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1558B0")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1A73E8")}
              >
                Enviar check-in
              </button>
            </div>
          )}
        </div>

        {/* Back link */}
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="mt-4 w-full text-center text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            ← Voltar
          </button>
        )}

      </div>
    </div>
  );
}
