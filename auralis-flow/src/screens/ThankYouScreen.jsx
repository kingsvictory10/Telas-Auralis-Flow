export default function ThankYouScreen({ onRestart }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ backgroundColor: "#F0F4FF" }}
    >
      <div className="w-full" style={{ maxWidth: "420px" }}>
        <div
          className="bg-white rounded-2xl px-6 py-12 text-center"
          style={{
            boxShadow: "0 4px 24px rgba(26,115,232,0.10)",
            border: "1px solid #e0eaff",
          }}
        >
          {/* Check icon */}
          <div
            className="mx-auto mb-6 flex items-center justify-center rounded-full"
            style={{ width: "72px", height: "72px", backgroundColor: "#DCFCE7" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#16A34A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "36px", height: "36px" }}
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 leading-snug mb-4">
            Obrigado pela sua participação!
          </h1>

          {/* Body text */}
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Seu registro foi enviado com sucesso. Suas respostas ajudam sua
            empresa a cuidar melhor de você e de todos os colaboradores.
          </p>

          {/* Next check-in pill */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 text-xs font-medium text-gray-500"
            style={{ backgroundColor: "#F0F4FF", border: "1px solid #e0eaff" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "14px", height: "14px", flexShrink: 0 }}
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Próximo check-in: amanhã às 08h00
          </div>

          {/* CTA button */}
          <button
            type="button"
            onClick={onRestart}
            className="w-full rounded-xl py-3 text-sm font-semibold text-white transition-all"
            style={{ backgroundColor: "#1A73E8" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1558B0")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1A73E8")}
          >
            Voltar ao início
          </button>

          {/* Site link — fora do botão */}
          <div className="mt-4">
            <a
              href="https://telas-auralis-flow.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              telas-auralis-flow.vercel.app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
