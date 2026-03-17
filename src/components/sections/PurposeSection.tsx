import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Wifi, Users } from 'lucide-react';

const PurposeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="proposito" className="py-20 md:py-32 bg-chordata-light relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-chordata-teal/[0.03] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-chordata-royal/[0.03] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div ref={ref} className={`container mx-auto px-4 sm:px-6 text-center max-w-4xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <span className="section-label">— Nosso Propósito —</span>

        <p className="font-sora text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary leading-relaxed mb-12">
          Trazer protagonismo ao gestor e ao atuante no mercado pet/vet de forma orgânica por meio da{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-chordata-teal to-chordata-green decoration-chordata-teal/40 underline underline-offset-4">profissionalização</span>,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-chordata-teal to-chordata-green decoration-chordata-teal/40 underline underline-offset-4">digitalização</span> e da{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-chordata-teal to-chordata-green decoration-chordata-teal/40 underline underline-offset-4">conexão</span>{' '}
          entre pessoas e empresas.
        </p>

        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 stagger-children ${isVisible ? 'visible' : ''}`}>
          {[
            { icon: GraduationCap, label: 'Profissionalização', desc: 'Capacitação e gestão de excelência' },
            { icon: Wifi, label: 'Digitalização', desc: 'Tecnologia e dados para decisões' },
            { icon: Users, label: 'Conexão', desc: 'Pessoas e empresas integradas' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3 group p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-[0_8px_32px_rgba(27,43,94,0.08)]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-chordata-teal/10 to-chordata-green/10 flex items-center justify-center group-hover:from-chordata-teal/20 group-hover:to-chordata-green/20 transition-all duration-300 group-hover:scale-110">
                <item.icon className="text-chordata-teal" size={28} />
              </div>
              <h3 className="font-sora font-semibold text-primary text-lg">{item.label}</h3>
              <p className="text-muted-foreground font-inter text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
