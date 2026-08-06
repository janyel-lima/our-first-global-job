# 🌏🍀 Our First Global Job (OFGJ)

> **Empowering Brazilian tech talent to unlock global remote careers through practice, community, and spoken English confidence.**

[![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg?style=for-for-the-badge)](LICENSE)

---

## 📌 Sobre o Projeto | About

**Our First Global Job** é um projeto e comunidade open-source focada em ajudar profissionais de tecnologia do Brasil a superarem a barreira do inglês falado (*speaking anxiety*) e conquistarem sua primeira oportunidade profissional internacional.

A plataforma combina uma experiência web moderna, interativa e bilingue com recursos práticos de estudo, grupos de conversação via Discord e simulações de entrevistas técnicas.

---

## ✨ Funcionalidades Principais | Core Features

- 🎯 **3 Pilares Fundamentais**: Foco em Prática Diária, Comunidade Acolhedora e Feedback Construtivo.
- 🎙️ **Prática de Pronúncia & Estúdio de Voz**: Ferramenta interativa de gravação e reprodução de áudio para simulação de entrevistas comportamentais e técnicas.
- 🃏 **Vocabulary Builder & Cards**: Flashcards dinâmicos com expressões essenciais do mercado global de tecnologia.
- 💬 **Grupos de Estudo & Conversação**: Conexão direta com comunidades ativas (Discord, WhatsApp e encontros síncronos).
- 👥 **Equipe & Mentores**: Apresentação dos fundadores, voluntários e facilitadores de conversação.
- 📖 **Histórias & Depoimentos**: Relatos reais de membros da comunidade que conquistaram vagas internacionais.
- 🌐 **Internacionalização (i18n)**: Suporte fluido para Português (PT-BR) e Inglês (EN) em tempo real.
- 🌙 **Modo Claro & Escuro**: Interface adaptativa otimizada para conforto visual em qualquer ambiente.

---

## 🛠️ Tecnologias Utilizadas | Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API + `<script setup>`)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Ícones**: [Lucide Vue Next](https://lucide.dev/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Animações e Efeitos**: Custom Canvas Confetti & Transitions CSS

---

## 📁 Estrutura do Projeto | Project Structure

```text
our-first-global-job/
├── public/                     # Arquivos estáticos (SVGs, logos, favicons)
│   ├── logo-header.svg
│   ├── logo-footer.svg
│   └── logo-transparency.svg
├── src/
│   ├── components/             # Componentes modulares da interface
│   │   ├── Navbar.vue          # Barra de navegação responsiva com i18n
│   │   ├── Hero.vue            # Apresentação e chamada principal
│   │   ├── ObstaclesSection.vue# Desafios enfrentados pelos devs brasileiros
│   │   ├── PillarsSection.vue  # Os 3 pilares da iniciativa
│   │   ├── AppShowcaseSection.vue # Estúdio de prática interativo
│   │   ├── CommunityGroupsSection.vue # Hub de grupos no Discord
│   │   ├── MissionSection.vue  # Nossa missão & transparência voluntária
│   │   ├── TeamSection.vue     # Carrossel da liderança e mentores
│   │   ├── CommunityStories.vue# Histórias de sucesso da comunidade
│   │   ├── JoinModal.vue       # Modal de inscrição/participação
│   │   └── Footer.vue          # Rodapé informativo
│   ├── composables/
│   │   ├── useI18n.ts          # Composable de internacionalização (PT/EN)
│   │   └── useTheme.ts         # Composable de gerenciamento de tema (Dark/Light)
│   ├── App.vue                 # Componente raiz da aplicação
│   ├── main.tsx                # Ponto de entrada da aplicação
│   └── index.css               # Estilos globais e importações Tailwind
├── index.html                  # HTML principal
├── package.json                # Dependências e scripts
├── tsconfig.json               # Configurações do TypeScript
└── vite.config.ts              # Configurações do Vite (incluindo base path para gh-pages)
```

---

## 🚀 Como Executar Localmente | Getting Started

### Pré-requisitos
- **Node.js**: `v18.0.0` ou superior
- **npm** ou **pnpm** / **yarn**

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/janyel-lima/our-first-global-job.git
   cd our-first-global-job
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a aplicação no navegador em `http://localhost:3000`.

4. **Verifique os tipos e linters:**
   ```bash
   npm run lint
   ```

5. **Gere a build de produção:**
   ```bash
   npm run build
   ```

---

## 📦 Deploy no GitHub Pages | Deployment

O projeto está configurado com caminhos relativos de assets (`import.meta.env.BASE_URL`) para compatibilidade perfeita com subcaminhos como `https://<usuario>.github.io/our-first-global-job/`.

### Publicação rápida via `gh-pages`

```bash
# Executa a build e faz o deploy no branch gh-pages
npm run build
npx gh-pages -d dist
```

---

## 🤝 Como Contribuir | Contributing

Contribuições de todos os níveis são super bem-vindas! Seja corrigindo um erro de digitação, adicionando um novo card no vocabulário ou propondo uma nova funcionalidade.

1. Faça um **Fork** do projeto
2. Crie uma branch para a sua funcionalidade (`git checkout -b feature/MinhaFuncionalidade`)
3. Faça **Commit** das suas alterações (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Faça o **Push** para a branch (`git push origin feature/MinhaFuncionalidade`)
5. Abra um **Pull Request**

---

## 📄 Licença | License

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p center align="center">
  Desenvolvido com 💚 pela comunidade <strong>Our First Global Job</strong> 🍀
</p>
