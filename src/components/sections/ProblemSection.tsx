import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { FileText, Brain, Scale, BookOpen, BarChart3, RefreshCw } from 'lucide-react';

const problems = [
  { icon: FileText, title: 'Gestão financeira complexa', emoji: '🧾' },
  { icon: Brain, title: 'Saúde mental da equipe', emoji: '🧠' },
  { icon: Scale, title: 'Conformidade jurídica', emoji: '⚖️' },
  { icon: BookOpen, title: 'Educação continuada', emoji: '📚' },
  { icon: BarChart3, title: 'Tomada de decisão baseada em dados', emoji: '📊' },
  { icon: RefreshCw, title: 'Processos desorganizados', emoji: '🌀' },
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-chordata-navy">
      <div ref={ref} className={`container mx-auto px-4 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="text-chordata-teal text-sm font-semibold tracking-[0.25em] uppercase font-inter mb-4 block">
            — Por que Chordata? —
          </span>
          <h2 className="font-sora text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Gerenciar uma clínica ou hospital veterinário vai muito além da medicina.
          </h2>
          <p className="text-white/60 font-inter text-lg">Você precisa lidar com:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-chordata-teal/30 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-chordata-teal/10 flex items-center justify-center group-hover:bg-chordata-teal/20 transition-colors">
                  <p.icon className="text-chordata-teal" size={22} />
                </div>
                <p className="text-white font-inter font-medium text-sm md:text-base">{p.title}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-chordata-teal font-inter mt-10 text-lg">
          Por isso, criamos um ecossistema onde cada solução se potencializa com as outras.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
