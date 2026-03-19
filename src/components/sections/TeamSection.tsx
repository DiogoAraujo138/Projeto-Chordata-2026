import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import photoThales from '@/assets/team/thales-rodrigues.jpeg';
import photoDiogo from '@/assets/team/diogo-araujo.jpg';
import photoEliz from '@/assets/team/eliz-modena.jpg';
import photoMikael from '@/assets/team/mikael-cattani.jpeg';
import photoEduardo from '@/assets/team/eduardo-monteiro.png';

const team = [
  {
    initials: 'TA',
    name: 'Thales Altieri',
    role: 'Co-Fundador, Diretor e Consultor',
    image: photoThales,
  },
  {
    initials: 'MC',
    name: 'Mikael Cattani',
    role: 'Co-Fundador, Diretor e Consultor',
    image: photoMikael,
  },
  {
    initials: 'EM',
    name: 'Eduardo Monteiro',
    role: 'Psicólogo e Consultor Associado',
    image: photoEduardo,
  },
  {
    initials: 'EM',
    name: 'Eliz Modena',
    role: 'Psicóloga e Consultora Associada',
    image: photoEliz,
  },
  {
    initials: 'DA',
    name: 'Diogo Araújo',
    role: 'Analista de dados e Consultor Associado',
    image: photoDiogo,
  },
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
              <div className="w-18 h-18 md:w-20 md:h-20 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center bg-slate-900 ring-2 ring-slate-200 group-hover:ring-blue-300 transition-all duration-200">
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="font-heading text-lg md:text-xl font-bold text-white">
                    {m.initials}
                  </span>
                )}
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
