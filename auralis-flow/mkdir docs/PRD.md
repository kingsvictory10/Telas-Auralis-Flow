PRD — Auralis Flow (Protótipo Hackathon)
Contexto do produto
Auralis Flow é uma plataforma B2B de monitoramento de bem-estar ocupacional que permite às empresas avaliarem a saúde mental de seus colaboradores de forma contínua, em conformidade com os fatores de risco psicossociais da NR-1 (Portaria MTE nº 1.419/2024). O produto é vendido para empresas e indústrias; o colaborador é o usuário final do app.
Objetivo do protótipo
Construir 3 telas estáticas com dados mockados para apresentação em hackathon. Sem backend, sem banco de dados. Toda interação usa estado local (React useState).
Stack
React + Vite + Tailwind CSS
Identidade visual: cor primária #1A73E8 (azul confiança) + #F0F4FF (fundo suave) + branco. Tipografia: Inter. Tom: profissional, limpo, acolhedor.

TELA 1 — Login

Logo + nome "Auralis Flow" centralizado
Subtítulo: "Bem-estar no trabalho começa com você"
Campo: E-mail (placeholder: colaborador@empresa.com)
Campo: Senha (placeholder: ••••••••)
Botão "Entrar" — qualquer senha avança para a Tela 2
Texto pequeno abaixo: "Acesso fornecido pela sua empresa"

TELA 2 — Check-in diário
Fluxo em etapas (stepper simples, não precisa ser animado):
Etapa 1 — Como você está hoje?

5 emojis clicáveis: 😀 Muito bem / 🙂 Bem / 😐 Neutro / 😕 Mal / 😣 Muito mal
Ao clicar em um emoji, ele fica destacado (borda colorida)

Etapa 2 — O que mais influenciou seu dia?

Múltipla escolha (checkboxes estilizados como chips/tags):

Carga de trabalho, Prazo/pressão, Liderança, Colegas, Reconhecimento, Equilíbrio trabalho-vida, Sono/cansaço, Questões pessoais, Ambiente de trabalho, Outro


Botão "Próximo"

Etapa 3 — Gostaria de comentar algo? (opcional)

Textarea com placeholder: "Escreva aqui se quiser compartilhar mais..."
Botão "Enviar check-in" → avança para Tela 3

TELA 3 — Agradecimento / Encerramento

Ícone de coração ou check grande centralizado
Título: "Obrigado pela sua participação!"
Parágrafo: "Seu registro foi enviado com sucesso. Suas respostas ajudam sua empresa a cuidar melhor de você e de todos os colaboradores."
Informação discreta: "Próximo check-in: amanhã às 08h00"
Botão "Voltar ao início" (retorna à tela de login para fins de demonstração)


Navegação
Login → Check-in (Tela 2) → Agradecimento (Tela 3) → Login
Usar React Router ou condicional simples com useState (preferir o mais simples).
Regras gerais

Totalmente responsivo (mobile-first, pois será apresentado possivelmente em celular ou projetado)
Sem chamadas de API, sem localStorage, tudo em memória
Código em inglês, textos da interface em português