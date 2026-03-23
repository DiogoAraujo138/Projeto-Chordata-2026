import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Search, Handshake, LayoutDashboard, ArrowRight, ChevronRight } from 'lucide-react';

const pillars = [
  {
    icon: Search,
    step: '01',
    title: 'Processos',
    subtitle: 'Medir e Analisar',
    accent: 'blue',
    description: 'O primeiro passo é enxergar com clareza. Mergulhamos nos dados e nos processos para identificar onde estão os gargalos.',
    items: [
      { bold: 'Diagnóstico de Precisão:', text: 'identifica pontos de ruptura no sistema financeiro e administrativo' },
      { bold: 'Análise de Dados:', text: 'parâmetros estatísticos e controle sistêmico para decisões estratégicas' },
      { bold: 'Integração Comercial:', text: 'controle inteligente de compras, estoques e vendas' },
    ],
  },
  {
    icon: Handshake,
    step: '02',
    title: 'Pessoas',
    subtitle: 'Desenvolver e Engajar',
    accent: 'emerald',
    description: 'Pessoas desenvolvem pessoas. Capacitamos líderes e equipes para que o negócio cresça de dentro para fora.',
    items: [
      { bold: 'Habilidade de Gestor:', text: 'capacidade gerencial, visão estratégica e liderança de alto impacto' },
      { bold: 'Solidificação da Base:', text: 'engajamento, retenção e cultura organizacional' },
      { bold: 'Estruturação de Cargos:', text: 'recrutamento focado em competências específicas do setor' },
    ],
  },
  {
    icon: LayoutDashboard,
    step: '03',
    title: 'Planejamento',
    subtitle: 'Controlar e Crescer',
    accent: 'amber',
    description: 'Com processos mapeados e pessoas preparadas, construímos o planejamento que transforma visão em resultado.',
    items: [
      { bold: 'Planejamento Operacional:', text: 'controle de compras, estoques e logística' },
      { bold: 'Planejamento Financeiro:', text: 'projeção de despesas, receitas e metas de crescimento' },
      { bold: 'Planejamento Comercial:', text: 'ações e campanhas estratégicas para maximizar lucratividade' },
    ],
  },
];

const accentClasses: Record<string, { text: string; bg: string; border: string; step: string }> = {
  blue: {
    text: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    step: 'text-blue-400/20',
  },
  emerald: {
    text: 'text-emerald-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    step: 'text-emerald-400/20',
  },
  amber: {
    text: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    step: 'text-amber-400/20',
  },
};

const MethodSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="metodo" className="py-24 md:py-36 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #1e293b 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div ref={ref} className={`container mx-auto px-6 max-w-6xl scroll-fade-up relative ${isVisible ? 'visible' : ''}`}>
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="section-label">— Nosso Método —</span>
          <h2 className="section-title text-slate-900">
            Método Chordata · RP3
          </h2>
          <p className="text-slate-500 section-subtitle max-w-2xl mx-auto">
            Nossa metodologia proprietária atua nos três pilares fundamentais de qualquer negócio veterinário — integrando processos, pessoas e planejamento para gerar resultados consistentes e sustentáveis.
          </p>
        </div>

        {/* Flow indicator - desktop */}
        <div className="hidden md:flex items-center justify-center gap-2 mb-12">
          {pillars.map((p, i) => {
            const colors = accentClasses[p.accent];
            return (
              <div key={p.title} className="flex items-center gap-2">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${colors.bg} border ${colors.border}`}>
                  <p.icon size={16} className={colors.text} />
                  <span className={`text-sm font-semibold ${colors.text}`}>{p.title}</span>
                </div>
                {i < pillars.length - 1 && (
                  <ArrowRight size={16} className="text-slate-300 mx-1" />
                )}
              </div>
            );
          })}
        </div>

        {/* Pillar Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 stagger-children ${isVisible ? 'visible' : ''}`}>
          {pillars.map((p) => {
            const colors = accentClasses[p.accent];
            return (
              <div key={p.title} className="card-clean p-7 md:p-8 relative group hover:shadow-lg transition-shadow duration-300">
                {/* Step number background */}
                <span className={`absolute top-4 right-4 font-heading font-black text-5xl ${colors.step} select-none`}>
                  {p.step}
                </span>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5 border ${colors.border}`}>
                  <p.icon className={colors.text} size={22} />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-1">{p.title}</h3>
                <p className={`${colors.text} text-sm mb-4 font-semibold`}>{p.subtitle}</p>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6 border-b border-slate-100 pb-5">
                  {p.description}
                </p>

                {/* Items */}
                <ul className="space-y-4">
                  {p.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-500 leading-relaxed">
                      <ChevronRight size={14} className={`${colors.text} mt-0.5 flex-shrink-0 opacity-60`} />
                      <span>
                        <span className="font-semibold text-slate-700">{item.bold}</span>{' '}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Ecosystem connection tagline */}
        <div className="mt-14 md:mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-full border border-slate-200">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <p className="text-slate-600 text-sm font-medium">
              O RP3 é a base que sustenta todas as soluções do ecossistema Chordata
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
