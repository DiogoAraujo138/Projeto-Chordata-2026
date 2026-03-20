import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Wifi, Users } from 'lucide-react';

const PurposeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="proposito" className="py-24 md:py-36 bg-white">
      <div ref={ref} className={`container mx-auto px-6 text-center max-w-4xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <span className="section-label">— Nosso Propósito —</span>

        <p className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 leading-relaxed mb-16">
          Trazer protagonismo ao gestor e ao atuante no mercado pet/vet de forma orgânica por meio da{' '}
          <span className="text-blue-500 underline underline-offset-4 decoration-blue-500/30">profissionalização</span>,{' '}
          <span className="text-blue-500 underline underline-offset-4 decoration-blue-500/30">digitalização</span> e da{' '}
          <span className="text-blue-500 underline underline-offset-4 decoration-blue-500/30">conexão</span>{' '}
          entre pessoas e empresas.
        </p>

        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 stagger-children ${isVisible ? 'visible' : ''}`}>
          {[
            { icon: GraduationCap, label: 'Profissionalização', desc: 'Capacitação e gestão de excelência' },
            { icon: Wifi, label: 'Digitalização', desc: 'Tecnologia e dados para decisões' },
            { icon: Users, label: 'Conexão', desc: 'Pessoas e empresas integradas' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-4 group p-8 rounded-xl transition-all duration-200 hover:bg-white hover:shadow-md">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
                <item.icon className="text-blue-500" size={26} />
              </div>
              <h3 className="font-heading font-semibold text-slate-900 text-lg">{item.label}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
