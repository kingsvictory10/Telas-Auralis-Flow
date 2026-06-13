import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

// ── Mock data ────────────────────────────────────────────────────────────────

const MOOD_DATA = [
  { day: "Seg", value: 72 },
  { day: "Ter", value: 68 },
  { day: "Qua", value: 65 },
  { day: "Qui", value: 60 },
  { day: "Sex", value: 74 },
  { day: "Sáb", value: 78 },
  { day: "Dom", value: 80 },
];

const FACTORS_DATA = [
  { factor: "Carga de trabalho",          count: 18 },
  { factor: "Sono / cansaço",             count: 14 },
  { factor: "Prazo / pressão",            count: 12 },
  { factor: "Equilíbrio vida-trabalho",   count: 10 },
  { factor: "Relac. com liderança",       count: 8  },
  { factor: "Reconhecimento",             count: 7  },
  { factor: "Ambiente de trabalho",       count: 5  },
];

const WEEKLY_INDEX = [
  { dimension: "Sobrecarga",               avg: 2.8, status: "red"    },
  { dimension: "Autonomia",                avg: 3.5, status: "yellow" },
  { dimension: "Apoio da liderança",       avg: 3.1, status: "yellow" },
  { dimension: "Reconhecimento",           avg: 2.6, status: "red"    },
  { dimension: "Segurança psicológica",    avg: 3.8, status: "green"  },
  { dimension: "Exaustão emocional",       avg: 3.9, status: "red"    },
  { dimension: "Equilíbrio vida-trabalho", avg: 3.2, status: "yellow" },
];

const STATUS_CONFIG = {
  red:    { emoji: "🔴", label: "Atenção",   bg: "#FEF2F2", color: "#DC2626" },
  yellow: { emoji: "🟡", label: "Moderado",  bg: "#FFFBEB", color: "#D97706" },
  green:  { emoji: "🟢", label: "Positivo",  bg: "#F0FDF4", color: "#16A34A" },
};

const SUMMARY_CARDS = [
  { emoji: "👥", value: "32 colaboradores",      sub: "responderam esta semana"        },
  { emoji: "😟", value: "8 em atenção",           sub: "sinais de alerta identificados" },
  { emoji: "📈", value: "74% bem-estar positivo", sub: "índice geral da semana"         },
  { emoji: "⚠️", value: "3 críticos",             sub: "precisam de acompanhamento"     },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionTitle({ children }) {
  return (
    <h2 className="text-base font-bold text-gray-800 mb-3">{children}</h2>
  );
}

function Card({ children, style }) {
  return (
    <div
      className="bg-white rounded-2xl p-4"
      style={{ border: "1px solid #e0eaff", boxShadow: "0 2px 12px rgba(26,115,232,0.07)", ...style }}
    >
      {children}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function DashboardScreen({ onLogout }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F0F4FF" }}>

      {/* Header */}
      <header
        className="bg-white px-4 py-3 flex items-center justify-between"
        style={{ borderBottom: "1px solid #e0eaff", boxShadow: "0 1px 4px rgba(26,115,232,0.06)" }}
      >
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold" style={{ color: "#1A73E8" }}>Auralis Flow</span>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <span className="text-xs text-gray-500 hidden sm:inline">Painel do Gestor</span>
        </div>
        <span className="text-xs text-gray-400">Empresa: TechCorp Ltda</span>
      </header>

      {/* Content */}
      <main className="px-4 py-6 max-w-2xl mx-auto space-y-6">

        {/* Section 1 — Summary cards */}
        <section>
          <SectionTitle>Resumo da semana</SectionTitle>
          <div className="grid grid-cols-2 gap-3">
            {SUMMARY_CARDS.map(({ emoji, value, sub }) => (
              <Card key={value}>
                <div className="text-2xl mb-1">{emoji}</div>
                <p className="text-sm font-bold text-gray-900 leading-tight">{value}</p>
                <p className="text-xs text-gray-400 mt-0.5 leading-snug">{sub}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 2 — AI alert */}
        <section>
          <SectionTitle>Análise da IA</SectionTitle>
          <div
            className="rounded-2xl p-4"
            style={{ backgroundColor: "#FFFBEB", border: "1.5px solid #FCD34D" }}
          >
            <p className="text-sm font-semibold text-yellow-800 mb-1">🤖 Análise da IA</p>
            <p className="text-sm text-yellow-900 leading-relaxed">
              Esta semana, 3 colaboradores apresentaram padrão de exaustão emocional elevada
              combinada com baixo reconhecimento profissional. Recomenda-se contato preventivo
              com as lideranças das áreas de <strong>Logística</strong> e <strong>Operações</strong>.
            </p>
          </div>
        </section>

        {/* Section 3 — Mood line chart */}
        <section>
          <SectionTitle>Humor geral da equipe — últimos 7 dias</SectionTitle>
          <Card>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={MOOD_DATA} margin={{ top: 8, right: 12, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F0F4FF" />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: "10px", border: "1px solid #e0eaff", fontSize: "12px" }}
                  formatter={(v) => [`${v}`, "Índice"]}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#1A73E8"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: "#1A73E8", strokeWidth: 0 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </section>

        {/* Section 4 — Factors bar chart */}
        <section>
          <SectionTitle>Fatores que mais influenciaram os colaboradores</SectionTitle>
          <Card>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart
                data={FACTORS_DATA}
                layout="vertical"
                margin={{ top: 0, right: 16, left: 4, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#F0F4FF" />
                <XAxis type="number" tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
                <YAxis
                  type="category"
                  dataKey="factor"
                  width={148}
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{ borderRadius: "10px", border: "1px solid #e0eaff", fontSize: "12px" }}
                  formatter={(v) => [`${v} relatos`, ""]}
                />
                <Bar dataKey="count" fill="#1A73E8" radius={[0, 6, 6, 0]} barSize={14} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </section>

        {/* Section 5 — Weekly index table */}
        <section>
          <SectionTitle>Índices do check-in semanal</SectionTitle>
          <Card style={{ padding: 0, overflow: "hidden" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#F8FAFF", borderBottom: "1px solid #e0eaff" }}>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500">Dimensão</th>
                  <th className="text-center px-3 py-3 text-xs font-semibold text-gray-500">Média</th>
                  <th className="text-center px-3 py-3 text-xs font-semibold text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                {WEEKLY_INDEX.map(({ dimension, avg, status }, i) => {
                  const cfg = STATUS_CONFIG[status];
                  return (
                    <tr
                      key={dimension}
                      style={{ borderBottom: i < WEEKLY_INDEX.length - 1 ? "1px solid #f0f4ff" : "none" }}
                    >
                      <td className="px-4 py-3 text-gray-800 font-medium">{dimension}</td>
                      <td className="px-3 py-3 text-center text-gray-600">{avg.toFixed(1)}</td>
                      <td className="px-3 py-3 text-center">
                        <span
                          className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold"
                          style={{ backgroundColor: cfg.bg, color: cfg.color }}
                        >
                          {cfg.emoji} {cfg.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </section>

        {/* Section 6 — Logout */}
        <section className="pb-6">
          <button
            type="button"
            onClick={onLogout}
            className="w-full rounded-xl py-3 text-sm font-semibold transition-all"
            style={{ backgroundColor: "#FEF2F2", color: "#DC2626", border: "1px solid #FECACA" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FEE2E2")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FEF2F2")}
          >
            Encerrar sessão
          </button>
        </section>

      </main>
    </div>
  );
}
