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
    <section id="metodo" className="py-24 md:py-36 bg-white">
      <div ref={ref} className={`container mx-auto px-6 max-w-6xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <span className="section-label">— Nosso Método —</span>
          <h2 className="section-title text-slate-900">
            Método Chordata · RP3
          </h2>
          <p className="text-slate-500 section-subtitle max-w-2xl mx-auto">
            Uma metodologia proprietária que garante resultados consistentes em qualquer negócio do setor veterinário.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 stagger-children ${isVisible ? 'visible' : ''}`}>
          {pillars.map((p) => (
            <div key={p.title} className="card-clean p-8">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                <p.icon className="text-blue-500" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-1">{p.title}</h3>
              <p className="text-blue-500 text-sm mb-6 font-medium">{p.subtitle}</p>
              <ul className="space-y-4">
                {p.items.map((item, j) => (
                  <li key={j} className="text-sm text-slate-500 leading-relaxed">
                    <span className="font-semibold text-slate-700">{item.bold}</span> {item.text}
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
