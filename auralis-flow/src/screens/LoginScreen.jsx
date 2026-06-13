import { useState } from "react";

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Preencha o e-mail e a senha para continuar.");
      return;
    }
    setError("");
    onLogin();
  }

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
          <p className="mt-3 text-sm text-gray-500 leading-snug">
            Bem-estar no trabalho começa com você
          </p>
        </div>

        {/* Card */}
        <div
          className="bg-white rounded-2xl px-6 py-8"
          style={{ boxShadow: "0 4px 24px rgba(26,115,232,0.10)", border: "1px solid #e0eaff" }}
        >
          <form onSubmit={handleSubmit} noValidate>

            {/* E-mail */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="colaborador@empresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors"
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
            </div>

            {/* Senha */}
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors"
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
              Entrar
            </button>
          </form>
        </div>

        {/* Rodapé */}
        <p className="mt-5 text-center text-xs text-gray-400">
          Acesso fornecido pela sua empresa
        </p>

      </div>
    </div>
  );
}
