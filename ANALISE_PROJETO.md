# 📋 Análise Completa do Projeto Chordata 2026

## 1. Framework e Tecnologias

| Item | Detalhes |
|------|---------|
| **Framework** | React 18.3.1 (SPA, **não** é NextJS) |
| **Bundler** | Vite 5.4.19 com plugin `@vitejs/plugin-react-swc` |
| **Linguagem** | TypeScript 5.8.3 |
| **Roteamento** | React Router DOM 6.30.1 |
| **Estilização** | Tailwind CSS 3.4.17 + CSS Variables (HSL) + tailwindcss-animate |
| **Componentes UI** | shadcn/ui (estilo default, baseColor slate) |
| **Ícones** | Lucide React 0.462.0 |
| **Fontes** | Montserrat (headings) + Inter (body) |
| **State Management** | TanStack React Query 5.83 (mínimo uso) |
| **Formulários** | React Hook Form + Zod |
| **Deploy** | Vercel (vercel.json presente) |
| **Testes** | Vitest + Playwright |

## 2. Estrutura de Pastas

```
projeto-chordata-2026/
├── public/                          # Arquivos estáticos (favicon, robots.txt)
├── src/
│   ├── assets/
│   │   ├── logos/                   # 20+ logos das marcas do ecossistema
│   │   └── team/                   # 5 fotos do time
│   ├── components/
│   │   ├── sections/               # 14 seções da landing page
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PurposeSection.tsx
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── EcosystemSection.tsx
│   │   │   ├── MethodSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── LocationSection.tsx
│   │   │   ├── TimelineSection.tsx
│   │   │   ├── BrandsSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── ImpactSection.tsx     # (não usado na Index)
│   │   │   └── ClientsSection.tsx    # (não usado na Index)
│   │   ├── ui/                     # ~45 componentes shadcn/ui
│   │   ├── Header.tsx
│   │   ├── Logo.tsx
│   │   ├── NavLink.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── WhatsAppButton.tsx
│   │   └── BackToTop.tsx
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/utils.ts
│   ├── pages/
│   │   ├── Index.tsx               # Página principal (landing page)
│   │   └── NotFound.tsx
│   ├── App.tsx                     # Router principal
│   ├── App.css
│   ├── index.css                   # CSS global + variáveis + animações
│   └── main.tsx                    # Entry point
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── components.json                 # Config shadcn/ui
└── vercel.json
```

## 3. Ordem Atual das Seções na Landing Page

| # | Seção | Arquivo | id (anchor) |
|---|-------|---------|-------------|
| 1 | Hero | `HeroSection.tsx` | — (topo) |
| 2 | Propósito | `PurposeSection.tsx` | `#proposito` |
| 3 | Problemas | `ProblemSection.tsx` | — |
| 4 | Ecossistema | `EcosystemSection.tsx` | `#ecossistema` |
| 5 | Método | `MethodSection.tsx` | `#metodo` |
| 6 | Serviços | `ServicesSection.tsx` | `#servicos` |
| 7 | Localização/Atuação | `LocationSection.tsx` | `#atuacao` |
| 8 | Timeline | `TimelineSection.tsx` | — |
| 9 | Marcas | `BrandsSection.tsx` | — |
| 10 | Depoimentos | `TestimonialsSection.tsx` | — |
| 11 | Time | `TeamSection.tsx` | `#time` |
| 12 | Contato | `ContactSection.tsx` | `#contato` |

**Não usados atualmente:** `ImpactSection.tsx`, `ClientsSection.tsx`

## 4. Navegação (Header)

Links atuais: Propósito → Ecossistema → Método → Serviços → Resultados → Time → Contato

## 5. Build e Dev

```bash
npm install          # Instala dependências
npm run dev          # Dev server em localhost:8080
npm run build        # Build de produção (dist/)
npm run preview      # Preview do build
```

---

## 6. Arquivos que Precisarão ser Modificados

### Baseado no documento de melhorias solicitado:

| Alteração | Arquivo(s) |
|-----------|-----------|
| **Reordenar seções** (nova ordem: Hero → Ecossistema → Serviços → Método → Atuação → Time → Propósito → Problemas → Depoimentos → Timeline → Contato) | `src/pages/Index.tsx`, `src/components/Header.tsx` |
| **EcosystemSection** — remover círculo azul central, mostrar descrição ao clicar na empresa, melhorar mobile | `src/components/sections/EcosystemSection.tsx` |
| **TeamSection** — corrigir fotos Mikael/Eliz no mobile, alterar descrição Eduardo para "CEO MentAll.Vet" | `src/components/sections/TeamSection.tsx` |
| **TimelineSection** — reescrever completamente com novos dados (2020-2025) | `src/components/sections/TimelineSection.tsx` |
| **PurposeSection** — alterar missão e adicionar 4 pilares novos | `src/components/sections/PurposeSection.tsx` |
| **TestimonialsSection** — remover depoimento da Wanessa | `src/components/sections/TestimonialsSection.tsx` |
| **BrandsSection** — alterar descrições JuridicoPet e VetConnection | `src/components/sections/BrandsSection.tsx` |
| **ContactSection** — trocar telefones, remover site | `src/components/sections/ContactSection.tsx` |
| **ServicesSection** — adicionar aba MentAll.Vet com 4 serviços + adicionar Valuation em serviços especializados | `src/components/sections/ServicesSection.tsx` |
| **Header** — ajustar navegação para nova ordem das seções | `src/components/Header.tsx` |

### Total: ~12 arquivos a modificar

---

## 7. Status

- ✅ Repositório clonado em `/home/ubuntu/projeto-chordata-2026`
- ✅ Backup criado em `/home/ubuntu/projeto-chordata-2026-backup`
- ✅ Build de produção: **OK** (5.76s)
- ✅ Dev server: **OK** (porta 5173 ativa)
- ✅ Todas as dependências instaladas
