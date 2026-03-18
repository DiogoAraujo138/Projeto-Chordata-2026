# 🐾 Chordata Consultoria — Site Institucional

**O Ecossistema Completo para Transformar seu Negócio Veterinário**

Site institucional da Chordata Consultoria, apresentando o ecossistema de marcas voltado para a gestão integrada do mercado veterinário.

---

## 🚀 Tech Stack

- **React 18** — Biblioteca de UI
- **TypeScript** — Tipagem estática
- **Vite** — Build tool ultrarrápido
- **Tailwind CSS** — Framework de estilos utilitários
- **Lucide React** — Ícones SVG
- **shadcn/ui** — Componentes de UI acessíveis

## 📦 Instalação

```bash
# Clonar o repositório
git clone https://github.com/DiogoAraujo138/Projeto-Chordata-2026.git
cd Projeto-Chordata-2026

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🏗️ Estrutura do Projeto

```
src/
├── assets/
│   ├── logos/          # Logos das marcas do ecossistema
│   └── team/           # Fotos da equipe
├── components/
│   ├── sections/       # Seções da página
│   │   ├── HeroSection.tsx
│   │   ├── PurposeSection.tsx
│   │   ├── EcosystemSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── MethodSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TimelineSection.tsx
│   │   ├── BrandsSection.tsx
│   │   ├── LocationSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── TeamSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/             # Componentes base (shadcn/ui)
│   ├── Header.tsx
│   ├── Logo.tsx
│   ├── WhatsAppButton.tsx
│   ├── BackToTop.tsx
│   └── ScrollProgress.tsx
├── hooks/              # Custom hooks (useScrollAnimation, etc)
├── lib/                # Utilitários
├── pages/
│   └── Index.tsx       # Página principal
└── index.css           # Estilos globais e design system
```

## 🎨 Design System

- **Paleta:** Slate (backgrounds) + Blue (#3B82F6 como accent)
- **Tipografia:** Montserrat (headings) + Inter (corpo)
- **Tema:** Dark (hero/seções) + Light (seções alternadas)

## 🌐 Marcas do Ecossistema

| Marca | Descrição |
|-------|-----------|
| **Chordata Consultoria** | Consultoria estratégica em gestão |
| **Chordata Analytics** | Inteligência de dados e Power BI |
| **MentAll.Vet** | Saúde mental veterinária |
| **JurídicoPet Digital** | Conformidade jurídica digital |
| **VetConnection** | Feiras e eventos veterinários |

## 🚀 Deploy na Vercel

### Opção 1: Via Dashboard Vercel
1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"Add New Project"**
3. Importe o repositório `DiogoAraujo138/Projeto-Chordata-2026`
4. As configurações serão detectadas automaticamente via `vercel.json`
5. Clique em **"Deploy"**

### Opção 2: Via Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Configurações de Deploy
- **Framework:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node Version:** 18+

## 📋 Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Animações de scroll suaves
- ✅ Formulário de contato com validação
- ✅ Botão WhatsApp flutuante
- ✅ Contador animado de métricas
- ✅ Mapa interativo do Brasil
- ✅ Carrossel de depoimentos
- ✅ Timeline histórica interativa
- ✅ Ecossistema orbital animado
- ✅ Otimizado para SEO
- ✅ Code splitting para performance

## 📄 Licença

Projeto proprietário — Chordata Consultoria © 2026
