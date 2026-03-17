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
    <section id="servicos" className="py-20 md:py-32 bg-chordata-navy relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-chordata-teal/20 to-transparent" />

      <div ref={ref} className={`container mx-auto px-4 sm:px-6 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="section-label">— Nossos Serviços —</span>
          <h2 className="section-title text-white">
            Nossos Serviços
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-inter font-medium transition-all duration-300 ${
                active === i
                  ? 'bg-chordata-teal text-chordata-navy shadow-[0_4px_16px_hsla(180,50%,50%,0.3)]'
                  : 'bg-white/5 text-white/65 hover:bg-white/10 hover:text-white/90'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tabs[active].items.map((item, j) => (
            <div key={`${active}-${j}`} className="card-interactive p-6 animate-fade-in" style={{ animationDelay: `${j * 80}ms` }}>
              <h3 className="font-sora font-bold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-white/55 font-inter text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
