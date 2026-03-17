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
    <section id="time" className="py-20 md:py-32 bg-chordata-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,hsla(180,50%,50%,0.03),transparent_40%)] pointer-events-none" />

      <div ref={ref} className={`container mx-auto px-4 sm:px-6 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="section-label">— Nosso Time —</span>
          <h2 className="section-title text-primary">
            Time de Consultores
          </h2>
          <p className="text-muted-foreground section-subtitle max-w-2xl mx-auto">
            Uma equipe multidisciplinar com especialistas em gestão, dados, saúde mental e psicologia organizacional para o mercado veterinário.
          </p>
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 stagger-children ${isVisible ? 'visible' : ''}`}>
          {team.map((m) => (
            <div key={m.name} className="card-light-interactive p-5 md:p-6 text-center group">
              <div className="w-18 h-18 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-chordata-teal to-chordata-royal mx-auto mb-4 flex items-center justify-center group-hover:shadow-[0_0_24px_hsla(180,50%,50%,0.3)] transition-shadow duration-300">
                <span className="font-sora text-lg md:text-xl font-bold text-white">{m.initials}</span>
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
