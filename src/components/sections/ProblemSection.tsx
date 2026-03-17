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
    <section className="py-24 md:py-36 bg-slate-900">
      <div ref={ref} className={`container mx-auto px-6 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <span className="section-label">— Por que Chordata? —</span>
          <h2 className="section-title text-white mb-4">
            Gerenciar uma clínica ou hospital veterinário vai muito além da medicina.
          </h2>
          <p className="text-slate-400 section-subtitle">Você precisa lidar com:</p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children ${isVisible ? 'visible' : ''}`}>
          {problems.map((p, i) => (
            <div
              key={i}
              className="card-dark p-6 group cursor-default"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/15 transition-colors duration-200">
                  <p.icon className="text-blue-400" size={20} />
                </div>
                <p className="text-slate-200 font-medium text-sm">{p.title}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-blue-400 mt-12 text-base">
          Por isso, criamos um ecossistema onde cada solução se potencializa com as outras.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
