import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Shield } from 'lucide-react';

import logoChordataPrincipal from '@/assets/logos/chordata-principal.png';
import logoAnalytics from '@/assets/logos/chordata-analytics.png';
import logoAnalyticsWhite from '@/assets/logos/chordata-analytics-white.png';
import logoMentallvet from '@/assets/logos/mentallvet.png';
import logoDescomplicavet from '@/assets/logos/descomplicavet.png';
import logoVetconnection from '@/assets/logos/vetconnection.png';

const brands = [
  {
    name: 'Chordata Consultoria',
    description: 'Consultoria estratégica em gestão',
    logo: logoChordataPrincipal,
    darkBg: true,
  },
  {
    name: 'Chordata Analytics',
    description: 'Inteligência de dados e Power BI',
    logo: logoAnalytics,
    darkBg: false,
  },
  {
    name: 'MentAll.Vet',
    description: 'Saúde mental veterinária',
    logo: logoMentallvet,
    darkBg: true,
  },
  {
    name: 'JurídicoPet Digital',
    description: 'Conformidade jurídica digital',
    logo: null,
    darkBg: false,
  },
  {
    name: 'DescomplicaVet',
    description: 'Teleconsultoria e educação',
    logo: logoDescomplicavet,
    darkBg: false,
  },
  {
    name: 'VetConnection',
    description: 'Feiras e eventos veterinários',
    logo: logoVetconnection,
    darkBg: false,
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

        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 stagger-children ${isVisible ? 'visible' : ''}`}>
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex flex-col items-center text-center"
            >
              <div
                className={`w-24 h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center p-4 mb-3 transition-all duration-200
                  border shadow-sm group-hover:shadow-md group-hover:scale-105
                  ${brand.darkBg
                    ? 'bg-slate-900 border-slate-800 group-hover:border-slate-700'
                    : 'bg-white border-slate-200 group-hover:border-blue-300'
                  }`}
              >
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-1">
                    <Shield size={28} className="text-blue-500" />
                    <span className="text-[9px] font-heading font-bold text-slate-700 leading-tight">
                      JurídicoPet
                    </span>
                  </div>
                )}
              </div>
              <h3 className="font-heading text-xs md:text-sm font-semibold text-slate-800 mb-0.5">
                {brand.name}
              </h3>
              <p className="text-[10px] md:text-xs text-slate-500 leading-tight">
                {brand.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
