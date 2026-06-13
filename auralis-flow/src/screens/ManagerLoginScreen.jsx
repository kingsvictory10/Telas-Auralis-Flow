import { useState } from "react";

export default function ManagerLoginScreen({ onLogin, onBack }) {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Preencha o e-mail e a senha para continuar.");
      return;
    }
    setError("");
    onLogin();
  }

  const focusStyle = (e) => {
    e.target.style.borderColor     = "#1A73E8";
    e.target.style.backgroundColor = "#fff";
    e.target.style.boxShadow       = "0 0 0 3px rgba(26,115,232,0.15)";
  };
  const blurStyle = (e) => {
    e.target.style.borderColor     = "";
    e.target.style.backgroundColor = "";
    e.target.style.boxShadow       = "";
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ backgroundColor: "#F0F4FF" }}
    >
      <div className="w-full" style={{ maxWidth: "400px" }}>

        {/* Logo */}
        <div className="text-center mb-8">
          <h1
            className="text-4xl font-bold tracking-tight"
            style={{ color: "#1A73E8" }}
          >
            Auralis Flow
          </h1>
          <div className="text-3xl mt-2"></div>
        </div>

        {/* Card */}
        <div
          className="bg-white rounded-2xl px-6 py-8"
          style={{
            boxShadow: "0 4px 24px rgba(26,115,232,0.12)",
            border: "1.5px solid #BFDBFE",
          }}
        >
          {/* Área do Gestor badge */}
          <div className="flex justify-center mb-6">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: "#DBEAFE", color: "#1A73E8" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: "12px", height: "12px" }}
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Área do Gestor
            </span>
          </div>

          <form onSubmit={handleSubmit} noValidate>

            {/* E-mail */}
            <div className="mb-4">
              <label
                htmlFor="mgr-email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                E-mail
              </label>
              <input
                id="mgr-email"
                type="email"
                autoComplete="email"
                placeholder="gestor@empresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors"
                onFocus={focusStyle}
                onBlur={blurStyle}
              />
            </div>

            {/* Senha */}
            <div className="mb-5">
              <label
                htmlFor="mgr-password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Senha
              </label>
              <input
                id="mgr-password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors"
                onFocus={focusStyle}
                onBlur={blurStyle}
              />
            </div>

            {/* Erro */}
            {error && (
              <p className="text-xs text-red-500 mb-4 -mt-2">{error}</p>
            )}

            {/* Botão */}
            <button
              type="submit"
              className="w-full rounded-xl py-3 text-sm font-semibold text-white transition-all"
              style={{ backgroundColor: "#1A73E8" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1558B0")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1A73E8")}
            >
              Entrar como Gestor
            </button>
          </form>
        </div>

        {/* Voltar */}
        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={onBack}
            className="text-xs text-gray-400 transition-colors"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#6B7280")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            ← Voltar para o login do colaborador
          </button>
        </div>

      </div>
    </div>
  );
}
