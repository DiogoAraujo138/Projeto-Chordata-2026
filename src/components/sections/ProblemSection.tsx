import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { FileText, Brain, Scale, BookOpen, BarChart3, RefreshCw } from 'lucide-react';

const problems = [
  { icon: FileText, title: 'Gestão financeira complexa' },
  { icon: Brain, title: 'Saúde mental da equipe' },
  { icon: Scale, title: 'Conformidade jurídica' },
  { icon: BookOpen, title: 'Educação continuada' },
  { icon: BarChart3, title: 'Tomada de decisão baseada em dados' },
  { icon: RefreshCw, title: 'Processos desorganizados' },
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-chordata-navy relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-chordata-teal/30 to-transparent" />

      <div ref={ref} className={`container mx-auto px-4 sm:px-6 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="section-label">— Por que Chordata? —</span>
          <h2 className="section-title text-white mb-4">
            Gerenciar uma clínica ou hospital veterinário vai muito além da medicina.
          </h2>
          <p className="text-white/55 section-subtitle">Você precisa lidar com:</p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children ${isVisible ? 'visible' : ''}`}>
          {problems.map((p, i) => (
            <div
              key={i}
              className="card-interactive p-6 group cursor-default"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-chordata-teal/10 flex items-center justify-center shrink-0 group-hover:bg-chordata-teal/20 group-hover:scale-110 transition-all duration-300">
                  <p.icon className="text-chordata-teal" size={22} />
                </div>
                <p className="text-white font-inter font-medium text-sm md:text-base">{p.title}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-chordata-teal font-inter mt-10 text-base md:text-lg opacity-90">
          Por isso, criamos um ecossistema onde cada solução se potencializa com as outras.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
