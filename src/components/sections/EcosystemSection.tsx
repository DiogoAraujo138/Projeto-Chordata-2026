import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Shield, ChevronDown, X } from 'lucide-react';
import logoChordataEcossistema from '@/assets/logos/chordata-ecossistema-branco.png';
import logoChordataPrincipal from '@/assets/logos/chordata-consultoria-new.png';
import logoMentallvet from '@/assets/logos/mentall-new.png';
import logoAnalytics from '@/assets/logos/chordata-analytics-new2.png';
import logoVetconnection from '@/assets/logos/vetconnection-new2.png';
import logoJuridicoPet from '@/assets/logos/juridico-pet-new.png';

const satellites = [
  {
    name: 'Chordata Consultoria',
    tagline: 'Estratégia e Gestão',
    logo: logoChordataPrincipal,
    desc: 'Estratégia, gestão e desenvolvimento de negócios para clínicas, hospitais e empresas do mercado veterinário.',
  },
  {
    name: 'Chordata Analytics',
    tagline: 'Inteligência de Dados',
    logo: logoAnalytics,
    desc: 'Inteligência de dados, dashboards de gestão e soluções de BI para tomada de decisão no mercado veterinário.',
  },
  {
    name: 'MentAll.Vet',
    tagline: 'Saúde Mental Veterinária',
    logo: logoMentallvet,
    desc: 'Soluções voltadas à saúde mental, bem-estar corporativo e desenvolvimento humano para profissionais e empresas do setor veterinário.',
  },
  {
    name: 'JurídicoPet Digital',
    tagline: 'Conformidade Jurídica',
    logo: logoJuridicoPet,
    desc: 'Assinatura eletrônica e conformidade jurídica digital.',
  },
  {
    name: 'VetConnection',
    tagline: 'Feiras e Eventos',
    logo: logoVetconnection,
    desc: 'Feiras, congressos e eventos veterinários.',
  },
];

const EcosystemSection = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const handleSelect = (i: number) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <section id="ecossistema" className="py-24 md:py-36 bg-slate-800">
      <div ref={ref} className={`container mx-auto px-6 max-w-6xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <span className="section-label">— O Ecossistema —</span>
          <h2 className="section-title text-white">
            Gestão Integrada para o Mercado Veterinário
          </h2>
          <p className="text-slate-400 section-subtitle">5 soluções integradas. Um único ecossistema. Transformação completa.</p>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:block">
          {/* Logo central */}
          <div className="flex justify-center mb-10">
            <div className="w-28 h-28 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shadow-xl p-5">
              <img src={logoChordataEcossistema} alt="Ecossistema Chordata" className="w-full h-full object-contain" loading="lazy" decoding="async" />
            </div>
          </div>

          {/* Grid of companies */}
          <div className="grid grid-cols-5 gap-4 max-w-4xl mx-auto mb-8">
            {satellites.map((sat, i) => (
              <button
                key={i}
                className={`rounded-xl border flex flex-col items-center justify-center gap-2 p-5 transition-all duration-200 cursor-pointer hover:scale-105 ${
                  selected === i
                    ? 'bg-blue-500/10 border-blue-500 shadow-lg shadow-blue-500/10'
                    : 'bg-slate-800 border-slate-700 hover:border-blue-400'
                }`}
                onClick={() => handleSelect(i)}
              >
                <img src={sat.logo} alt={sat.name} className="w-20 h-16 object-contain rounded" loading="lazy" decoding="async" />
                <span className={`text-[11px] font-heading font-semibold text-center leading-tight ${
                  selected === i ? 'text-blue-400' : 'text-slate-400'
                }`}>
                  {sat.name}
                </span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${selected === i ? 'rotate-180 text-blue-400' : 'text-slate-500'}`} />
              </button>
            ))}
          </div>

          {/* Detail panel desktop */}
          {selected !== null && (
            <div className="max-w-2xl mx-auto mb-4 card-dark p-6 text-center animate-fade-in relative">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-slate-500 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <X size={16} />
              </button>
              <h3 className="font-heading font-bold text-lg mb-1 text-blue-400">
                {satellites[selected].name}
              </h3>
              <p className="text-slate-400 text-sm mb-3">{satellites[selected].tagline}</p>
              <p className="text-slate-300 text-sm leading-relaxed">{satellites[selected].desc}</p>
            </div>
          )}
        </div>

        {/* Mobile cards - click to expand */}
        <div className={`lg:hidden space-y-3 stagger-children ${isVisible ? 'visible' : ''}`}>
          {/* Mobile logo */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shadow-xl p-4">
              <img src={logoChordataEcossistema} alt="Ecossistema Chordata" className="w-full h-full object-contain" loading="lazy" decoding="async" />
            </div>
          </div>

          {satellites.map((sat, i) => (
            <div
              key={i}
              className={`card-dark overflow-hidden transition-all duration-200 ${
                selected === i ? 'ring-1 ring-blue-500/30' : ''
              }`}
            >
              <button
                className="w-full p-4 flex items-center gap-3 text-left"
                onClick={() => handleSelect(i)}
              >
                <div className="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center overflow-hidden shrink-0">
                  <img src={sat.logo} alt={sat.name} className="w-10 h-10 object-contain" loading="lazy" decoding="async" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-sm text-white">{sat.name}</h3>
                  <p className="text-xs text-blue-400">{sat.tagline}</p>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                    selected === i ? 'rotate-180 text-blue-400' : ''
                  }`}
                />
              </button>
              {selected === i && (
                <div className="px-4 pb-4 animate-fade-in">
                  <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-700/50 pt-3">
                    {sat.desc}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
