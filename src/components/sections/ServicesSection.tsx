import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const tabs = [
  {
    label: 'Consultoria e Assessoria',
    items: [
      { title: 'Consultoria Artesanal', desc: 'Foco em um problema específico, resultado rápido' },
      { title: 'Consultoria Integrada', desc: 'Trabalho sistêmico, todos os elos do negócio, médio prazo' },
      { title: 'Consultoria Integrada Total', desc: 'Longo prazo, projetos bem definidos, transformação completa' },
      { title: 'Consultoria para Abertura de Novos Negócios', desc: 'Plano de negócio, primeiros passos, parcerias' },
    ],
  },
  {
    label: 'Serviços Especializados',
    items: [
      { title: 'Diagnóstico Organizacional', desc: 'Análise externa, precisão técnica, parecer sobre problemas identificados' },
      { title: 'Planejamento Estratégico', desc: 'Diagnóstico + plano de ação + direcionamento específico' },
    ],
  },
  {
    label: 'Treinamentos',
    items: [
      { title: 'Programa de Capacitação de Gestores', desc: 'Visão gerencial, análise de cenários, gestão de equipe (reuniões semanais 1h30, online ou presencial)' },
      { title: 'Programa de Capacitação de Equipe', desc: 'Atendimento ao cliente, estratégias de vendas, comunicação assertiva' },
    ],
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicos" className="py-24 md:py-36 bg-slate-900">
      <div ref={ref} className={`container mx-auto px-6 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <span className="section-label">— Nossos Serviços —</span>
          <h2 className="section-title text-white">
            Nossos Serviços
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === i
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tabs[active].items.map((item, j) => (
            <div key={`${active}-${j}`} className="card-dark p-6 animate-fade-in" style={{ animationDelay: `${j * 80}ms` }}>
              <h3 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
