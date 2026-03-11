import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Search, Handshake, LayoutDashboard } from 'lucide-react';

const pillars = [
  {
    icon: Search,
    title: 'Processos',
    subtitle: 'Medir e Analisar',
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
    <section id="metodo" className="py-20 md:py-32 bg-background">
      <div ref={ref} className={`container mx-auto px-4 max-w-6xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="text-chordata-teal text-sm font-semibold tracking-[0.25em] uppercase font-inter mb-4 block">
            — Nosso Método —
          </span>
          <h2 className="font-sora text-2xl md:text-4xl font-bold text-primary mb-3">
            Método Chordata · RP3
          </h2>
          <p className="text-muted-foreground font-inter text-lg max-w-2xl mx-auto">
            Uma metodologia proprietária que garante resultados consistentes em qualquer negócio do setor veterinário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="bg-card rounded-2xl p-8 shadow-[0_8px_32px_rgba(27,43,94,0.08)] border border-border hover:shadow-[0_8px_32px_rgba(27,43,94,0.16)] transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-chordata-teal/10 flex items-center justify-center mb-5">
                <p.icon className="text-chordata-teal" size={28} />
              </div>
              <h3 className="font-sora text-xl font-bold text-primary mb-1">{p.title}</h3>
              <p className="text-chordata-royal font-inter text-sm mb-5">{p.subtitle}</p>
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
