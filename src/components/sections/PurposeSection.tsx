import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { FolderKanban, Users, BrainCircuit, CalendarCheck } from 'lucide-react';

const complements = [
  {
    icon: FolderKanban,
    label: 'Projetos de Desenvolvimento',
    desc: 'Desenvolvimento estratégico de negócios veterinários',
  },
  {
    icon: Users,
    label: 'Consultoria & Assessoria',
    desc: 'Serviços de consultoria e assessoria organizacional',
  },
  {
    icon: BrainCircuit,
    label: 'Ferramentas de Inteligência',
    desc: 'Desenvolvimento de ferramentas de inteligência de dados',
  },
  {
    icon: CalendarCheck,
    label: 'Eventos de Networking',
    desc: 'Eventos de networking de alto impacto para o setor',
  },
];

const PurposeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="proposito" className="py-24 md:py-36 bg-white">
      <div ref={ref} className={`container mx-auto px-6 text-center max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <span className="section-label">— Nosso Propósito —</span>

        <p className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 leading-relaxed mb-6">
          Proporcionar ao mercado veterinário{' '}
          <span className="text-blue-500 underline underline-offset-4 decoration-blue-500/30">profissionalização</span>,{' '}
          <span className="text-blue-500 underline underline-offset-4 decoration-blue-500/30">conhecimento de negócios e de gestão</span>,{' '}
          adaptação ao{' '}
          <span className="text-blue-500 underline underline-offset-4 decoration-blue-500/30">mercado digital</span>{' '}
          e{' '}
          <span className="text-blue-500 underline underline-offset-4 decoration-blue-500/30">conexões</span>{' '}
          entre pessoas e negócios.
        </p>

        <p className="text-slate-500 text-base sm:text-lg md:text-xl italic mb-16 max-w-3xl mx-auto">
          "Somos o que conecta conhecimento, estratégia e oportunidades no setor veterinário."
        </p>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children ${isVisible ? 'visible' : ''}`}>
          {complements.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-4 group p-6 rounded-xl transition-all duration-200 hover:bg-slate-50 hover:shadow-md border border-transparent hover:border-slate-200"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
                <item.icon className="text-blue-500" size={26} />
              </div>
              <h3 className="font-heading font-semibold text-slate-900 text-base leading-tight">{item.label}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
