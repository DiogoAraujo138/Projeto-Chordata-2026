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
    <section id="time" className="py-24 md:py-36 bg-slate-50">
      <div ref={ref} className={`container mx-auto px-6 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <span className="section-label">— Nosso Time —</span>
          <h2 className="section-title text-slate-900">
            Time de Consultores
          </h2>
          <p className="text-slate-500 section-subtitle max-w-2xl mx-auto">
            Uma equipe multidisciplinar com especialistas em gestão, dados, saúde mental e psicologia organizacional para o mercado veterinário.
          </p>
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 stagger-children ${isVisible ? 'visible' : ''}`}>
          {team.map((m) => (
            <div key={m.name} className="card-clean p-6 text-center group">
              <div className="w-16 h-16 md:w-18 md:h-18 rounded-full bg-slate-900 mx-auto mb-4 flex items-center justify-center">
                <span className="font-heading text-base md:text-lg font-bold text-white">{m.initials}</span>
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-sm mb-1">{m.name}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
