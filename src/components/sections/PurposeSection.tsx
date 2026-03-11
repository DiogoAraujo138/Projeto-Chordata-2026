import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Wifi, Users } from 'lucide-react';

const PurposeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="proposito" className="py-20 md:py-32 bg-chordata-light">
      <div ref={ref} className={`container mx-auto px-4 text-center max-w-4xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <span className="text-chordata-teal text-sm font-semibold tracking-[0.25em] uppercase font-inter mb-6 block">
          — Nosso Propósito —
        </span>

        <p className="font-sora text-2xl md:text-3xl lg:text-4xl font-semibold text-primary leading-relaxed mb-12">
          Trazer protagonismo ao gestor e ao atuante no mercado pet/vet de forma orgânica por meio da{' '}
          <span className="text-chordata-teal underline decoration-chordata-teal/40 underline-offset-4">profissionalização</span>,{' '}
          <span className="text-chordata-teal underline decoration-chordata-teal/40 underline-offset-4">digitalização</span> e da{' '}
          <span className="text-chordata-teal underline decoration-chordata-teal/40 underline-offset-4">conexão</span>{' '}
          entre pessoas e empresas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: GraduationCap, label: 'Profissionalização', desc: 'Capacitação e gestão de excelência' },
            { icon: Wifi, label: 'Digitalização', desc: 'Tecnologia e dados para decisões' },
            { icon: Users, label: 'Conexão', desc: 'Pessoas e empresas integradas' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-chordata-teal/10 flex items-center justify-center">
                <item.icon className="text-chordata-teal" size={28} />
              </div>
              <h3 className="font-sora font-semibold text-primary text-lg">{item.label}</h3>
              <p className="text-muted-foreground font-inter text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
