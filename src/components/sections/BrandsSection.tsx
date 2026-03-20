import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import logoChordataConsultoria from '@/assets/logos/chordata-consultoria-new.png';
import logoAnalytics from '@/assets/logos/chordata-analytics-new2.png';
import logoMentall from '@/assets/logos/mentall-new.png';
import logoJuridicoPet from '@/assets/logos/juridico-pet-new.png';
import logoVetconnection from '@/assets/logos/vetconnection-new2.png';

const brands = [
  {
    name: 'Chordata Consultoria',
    description: 'Consultoria estratégica em gestão',
    logo: logoChordataConsultoria,
    darkBg: false,
    url: 'https://chordataconsultoria.com/',
  },
  {
    name: 'Chordata Analytics',
    description: 'Inteligência de dados e Power BI',
    logo: logoAnalytics,
    darkBg: false,
    url: 'https://chordataanalytics.com.br/',
  },
  {
    name: 'MentAll.Vet',
    description: 'Saúde mental veterinária',
    logo: logoMentall,
    darkBg: false,
    url: 'https://www.mentall.vet/',
  },
  {
    name: 'JurídicoPet Digital',
    description: 'Assinatura eletrônica e conformidade jurídica digital',
    logo: logoJuridicoPet,
    darkBg: false,
    url: 'https://juridicopetdigital.com.br/',
  },
  {
    name: 'VetConnection',
    description: 'Feiras, congressos e eventos veterinários',
    logo: logoVetconnection,
    darkBg: false,
    url: 'https://brasilfeiras.vet/',
  },
];

const BrandsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div ref={ref} className={`container mx-auto px-6 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="section-label">— Nossas Marcas —</span>
          <h2 className="section-title text-slate-900">
            Marcas do Ecossistema{' '}
            <span className="text-blue-500">Chordata</span>
          </h2>
          <p className="text-slate-500 section-subtitle max-w-2xl mx-auto">
            Cada marca com sua especialidade, todas conectadas por um propósito: transformar a gestão do mercado veterinário.
          </p>
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 stagger-children ${isVisible ? 'visible' : ''}`}>
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center no-underline"
            >
              <div
                className="w-24 h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center p-4 mb-3 transition-all duration-200
                  border shadow-sm group-hover:shadow-md group-hover:scale-105
                  bg-slate-800 border-slate-700 group-hover:border-blue-400"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="font-heading text-xs md:text-sm font-semibold text-slate-800 mb-0.5 group-hover:text-blue-500 transition-colors duration-200">
                {brand.name}
              </h3>
              <p className="text-[10px] md:text-xs text-slate-500 leading-tight">
                {brand.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
