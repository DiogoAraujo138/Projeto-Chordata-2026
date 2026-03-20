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
      { title: 'Valuation para Clínicas e Hospitais', desc: 'Avaliação estratégica de negócios veterinários, com apoio na estruturação da operação para valorização do ativo e suporte comercial na busca por compradores.' },
    ],
  },
  {
    label: 'Treinamentos',
    items: [
      { title: 'Programa de Capacitação de Gestores', desc: 'Visão gerencial, análise de cenários, gestão de equipe (reuniões semanais 1h30, online ou presencial)' },
      { title: 'Programa de Capacitação de Equipe', desc: 'Atendimento ao cliente, estratégias de vendas, comunicação assertiva' },
    ],
  },
  {
    label: 'MentAll.Vet',
    items: [
      { title: 'Atendimento Individual de Fácil Acesso', desc: 'A plataforma conta com psicólogos e psicanalistas especializados e empáticos às demandas e rotinas dos profissionais da área veterinária.' },
      { title: 'MentALL.Vet para Empresas', desc: 'Programa para clínicas e hospitais parceiros que desejam contribuir para o bem-estar e saúde mental das suas equipes e profissionais.' },
      { title: 'Regularização NR-1', desc: 'Programa dinâmico de regularização da NR-1 e avaliação de riscos psicossociais e soluções especializadas para clínicas e hospitais.' },
      { title: 'Programas de Gestão de Pessoas', desc: 'Programas especializados para desenvolvimento de equipes, lideranças e processos de recursos humanos para empresas.' },
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
              className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
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
