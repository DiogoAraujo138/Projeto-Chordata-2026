

# Plano de Implementacao -- Chordata Consultoria Pitch Deck Web

## Resumo

Criar uma apresentacao interativa one-page scroll com 12 secoes para a Chordata Consultoria, usando React + Tailwind CSS. O site substitui um PowerPoint por um link compartilhavel.

## Estrutura de Arquivos

```text
src/
├── components/
│   ├── Header.tsx            (nav fixa + menu hamburguer mobile)
│   ├── ScrollProgress.tsx    (barra de progresso no topo)
│   ├── WhatsAppButton.tsx    (botao flutuante)
│   ├── BackToTop.tsx         (botao voltar ao topo)
│   ├── AnimatedCounter.tsx   (contador animado com Intersection Observer)
│   ├── useScrollAnimation.ts (hook para fade-up no scroll)
│   └── sections/
│       ├── HeroSection.tsx        (S1 - capa com particulas CSS)
│       ├── PurposeSection.tsx     (S2 - proposito)
│       ├── ProblemSection.tsx     (S3 - 6 cards de dores)
│       ├── EcosystemSection.tsx   (S4 - diagrama orbital interativo)
│       ├── MethodSection.tsx      (S5 - metodo RP3, 3 colunas)
│       ├── ServicesSection.tsx    (S6 - tabs 3 categorias)
│       ├── LocationSection.tsx    (S7 - mapa + segmentos)
│       ├── ImpactSection.tsx      (S8 - contadores animados)
│       ├── ClientsSection.tsx     (S9 - grid/carrossel logos)
│       ├── TestimonialsSection.tsx (S10 - carrossel depoimentos)
│       ├── TeamSection.tsx        (S11 - 5 cards equipe)
│       └── ContactSection.tsx     (S12 - formulario + CTA)
├── pages/Index.tsx           (composicao de todas as secoes)
└── index.css                 (variaveis CSS da paleta + Google Fonts)
```

## Identidade Visual

- **Paleta como CSS variables**: `--chordata-navy: #1B2B5E`, `--chordata-royal: #2E5FA3`, `--chordata-teal: #3FC1C0`, `--chordata-green: #8DC63F`, `--chordata-yellow: #F7C948`, `--chordata-purple: #6B4FA0`, `--chordata-light: #F5F7FA`
- **Fontes**: Sora (titulos) + Inter (corpo) via Google Fonts
- **Cards**: border-radius 16px, sombra suave
- **Secoes alternam** fundo escuro (#1B2B5E) e claro (#F5F7FA/branco)

## Funcionalidades Interativas

1. **Diagrama Orbital (S4)**: CSS posicionamento circular com 6 satelites clicaveis ao redor do hub central. Hover expande card com descricao. No mobile vira grid de cards empilhados.
2. **Contadores Animados (S8)**: Intersection Observer dispara contagem de 0 ate valor final.
3. **Carrossel Depoimentos (S10)**: Navegacao com setas + dots, 4 depoimentos.
4. **Tabs Servicos (S6)**: 3 abas (Consultoria, Especializados, Treinamentos) usando Radix Tabs.
5. **Scroll suave**: ancoras no header com `scrollIntoView({ behavior: 'smooth' })`.
6. **Barra de progresso**: linha fina no topo com gradiente teal-verde.
7. **Botao WhatsApp flutuante**: link para `wa.me/5551976227070`.
8. **Back to top**: aparece apos 500px de scroll.
9. **Animacoes de scroll**: hook com Intersection Observer para fade-up em cada secao.
10. **Formulario de contato (S12)**: validacao frontend, sem backend.

## Responsividade

- Mobile-first com breakpoints: `<768px`, `768-1024px`, `>1024px`
- Menu hamburguer no mobile
- Diagrama orbital vira grid 2 colunas no mobile
- Metricas em grid 2x2 no mobile

## Secoes Detalhadas

| # | Secao | Fundo | Conteudo Principal |
|---|-------|-------|--------------------|
| 1 | Hero | #1B2B5E + particulas CSS | Logo CHORdata + tagline + 2 CTAs |
| 2 | Proposito | #F5F7FA | Frase grande + 3 icones pilares |
| 3 | Problema | #1B2B5E | 6 cards com dores do gestor vet |
| 4 | Ecossistema | Gradiente | Diagrama orbital 6 empresas |
| 5 | Metodo RP3 | Branco | 3 colunas Processos/Pessoas/Planejamento |
| 6 | Servicos | #1B2B5E | Tabs com 3 categorias |
| 7 | Atuacao | #F5F7FA | Estados + 7 segmentos com icones |
| 8 | Impacto | #1B2B5E | 4 contadores animados + logos |
| 9 | Clientes | Branco | Grid de 23 logos com hover |
| 10 | Depoimentos | #1B2B5E | Carrossel 4 depoimentos |
| 11 | Time | #F5F7FA | 5 cards com iniciais placeholder |
| 12 | Contato/CTA | #1B2B5E | Formulario + dados + redes sociais |

## Implementacao

Sera feito em uma unica passagem: configurar tailwind com cores custom + Google Fonts, criar todos os componentes e montar a pagina Index com todas as 12 secoes. Todo o conteudo textual vem dos documentos fornecidos -- sem placeholders genericos.

