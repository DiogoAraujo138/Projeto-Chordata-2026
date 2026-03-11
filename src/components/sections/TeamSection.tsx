import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const team = [
  { initials: 'TA', name: 'Thales Altieri', role: 'Co-Fundador, Diretor e Consultor' },
  { initials: 'MC', name: 'Mikael Cattani', role: 'Co-Fundador, Diretor e Consultor' },
  { initials: 'EM', name: 'Eduardo Monteiro', role: 'Consultor Associado' },
  { initials: 'EM', name: 'Eliz Modena', role: 'Psicóloga e Consultora Organizacional de Clínicas e Hospitais Veterinários' },
  { initials: 'DA', name: 'Diogo Araújo', role: 'Analista de Dados' },
];

const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="time" className="py-20 md:py-32 bg-chordata-light">
      <div ref={ref} className={`container mx-auto px-4 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="text-chordata-teal text-sm font-semibold tracking-[0.25em] uppercase font-inter mb-4 block">
            — Nosso Time —
          </span>
          <h2 className="font-sora text-2xl md:text-4xl font-bold text-primary mb-3">
            Time de Consultores
          </h2>
          <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
            Uma equipe multidisciplinar com especialistas em gestão, dados, saúde mental e psicologia organizacional para o mercado veterinário.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((m) => (
            <div key={m.name} className="bg-card rounded-2xl p-6 text-center shadow-[0_8px_32px_rgba(27,43,94,0.08)] border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-chordata-teal to-chordata-royal mx-auto mb-4 flex items-center justify-center">
                <span className="font-sora text-xl font-bold text-white">{m.initials}</span>
              </div>
              <h3 className="font-sora font-bold text-primary text-sm mb-1">{m.name}</h3>
              <p className="text-muted-foreground font-inter text-xs leading-relaxed">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
