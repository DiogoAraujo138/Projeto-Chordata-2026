import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Search, Handshake, LayoutDashboard } from 'lucide-react';

const pillars = [
  {
    icon: Search,
    title: 'Processos',
    subtitle: 'Medir e Analisar',
    gradient: 'from-chordata-teal/10 to-chordata-green/5',
    items: [
      { bold: 'Diagnóstico de Precisão:', text: 'identifica pontos de ruptura no sistema financeiro e administrativo' },
      { bold: 'Análise de Dados:', text: 'parâmetros estatísticos e controle de sistemas' },
      { bold: 'Integração Comercial:', text: 'controle de compras, estoques e vendas' },
    ],
  },
  {
    icon: Handshake,
    title: 'Pessoas',
    subtitle: 'Pessoas desenvolvem pessoas',
    gradient: 'from-chordata-royal/10 to-chordata-teal/5',
    items: [
      { bold: 'Habilidade de Gestor:', text: 'capacidade gerencial, visão estratégica e liderança' },
      { bold: 'Solidificação da Base:', text: 'engajamento e retenção de colaboradores' },
      { bold: 'Estruturação de Cargos:', text: 'recrutamento focado em competências específicas' },
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'Planejamento',
    subtitle: 'Manter o controle do todo',
    gradient: 'from-chordata-green/10 to-chordata-yellow/5',
    items: [
      { bold: 'Planejamento e Controle:', text: 'controle de compras e estoque' },
      { bold: 'Planejamento Financeiro:', text: 'projeção de despesas e receitas' },
      { bold: 'Planejamento Comercial:', text: 'ações e campanhas para melhorar lucratividade' },
    ],
  },
];

const MethodSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="metodo" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsla(180,50%,50%,0.03),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsla(216,56%,41%,0.03),transparent_50%)] pointer-events-none" />

      <div ref={ref} className={`container mx-auto px-4 sm:px-6 max-w-6xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="section-label">— Nosso Método —</span>
          <h2 className="section-title text-primary">
            Método Chordata · RP3
          </h2>
          <p className="text-muted-foreground section-subtitle max-w-2xl mx-auto">
            Uma metodologia proprietária que garante resultados consistentes em qualquer negócio do setor veterinário.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 stagger-children ${isVisible ? 'visible' : ''}`}>
          {pillars.map((p) => (
            <div key={p.title} className={`card-light-interactive p-8 bg-gradient-to-br ${p.gradient}`}>
              <div className="w-14 h-14 rounded-2xl bg-chordata-teal/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <p.icon className="text-chordata-teal" size={28} />
              </div>
              <h3 className="font-sora text-xl font-bold text-primary mb-1">{p.title}</h3>
              <p className="text-chordata-royal font-inter text-sm mb-5 font-medium">{p.subtitle}</p>
              <ul className="space-y-3">
                {p.items.map((item, j) => (
                  <li key={j} className="text-sm font-inter text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-primary">{item.bold}</span> {item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
