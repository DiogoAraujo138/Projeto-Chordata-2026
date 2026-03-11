import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Stethoscope, PawPrint, Scissors, Tractor, Factory, Cpu } from 'lucide-react';

const states = ['Rio Grande do Sul (sede)', 'Santa Catarina', 'São Paulo', 'Pará', 'Maranhão'];

const segments = [
  { icon: Stethoscope, label: 'Clínicas e Hospitais Veterinários' },
  { icon: PawPrint, label: 'Petshops' },
  { icon: Scissors, label: 'Banho e Tosa' },
  { icon: Tractor, label: 'Agropecuária' },
  { icon: Factory, label: 'Distribuidoras' },
  { icon: PawPrint, label: 'Produção Animal' },
  { icon: Cpu, label: 'Aplicações e Tecnologia' },
];

const LocationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-chordata-light">
      <div ref={ref} className={`container mx-auto px-4 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="text-chordata-teal text-sm font-semibold tracking-[0.25em] uppercase font-inter mb-4 block">
            — Onde Atuamos —
          </span>
          <h2 className="font-sora text-2xl md:text-4xl font-bold text-primary">
            Onde Atuamos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* States */}
          <div>
            <h3 className="font-sora font-bold text-primary text-lg mb-5 flex items-center gap-2">
              <MapPin className="text-chordata-teal" size={20} /> Presença Geográfica
            </h3>
            <div className="space-y-3">
              {states.map((s) => (
                <div key={s} className="flex items-center gap-3 bg-card rounded-xl px-4 py-3 shadow-sm border border-border">
                  <div className="w-2 h-2 rounded-full bg-chordata-teal" />
                  <span className="font-inter text-sm text-primary">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Segments */}
          <div>
            <h3 className="font-sora font-bold text-primary text-lg mb-5">Segmentos Atendidos</h3>
            <div className="space-y-3">
              {segments.map((s) => (
                <div key={s.label} className="flex items-center gap-3 bg-card rounded-xl px-4 py-3 shadow-sm border border-border">
                  <div className="w-8 h-8 rounded-lg bg-chordata-teal/10 flex items-center justify-center">
                    <s.icon className="text-chordata-teal" size={16} />
                  </div>
                  <span className="font-inter text-sm text-primary">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
