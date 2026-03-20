import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Shield } from 'lucide-react';
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
    name: 'MentAll.Vet',
    tagline: 'Saúde Mental Veterinária',
    logo: logoMentallvet,
    desc: 'Soluções voltadas à saúde mental, bem-estar corporativo e desenvolvimento humano para profissionais e empresas do setor veterinário.',
  },
  {
    name: 'Chordata Analytics',
    tagline: 'Inteligência de Dados',
    logo: logoAnalytics,
    desc: 'Inteligência de dados, dashboards de gestão e soluções de BI para tomada de decisão no mercado veterinário.',
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

        {/* Desktop orbital diagram */}
        <div className="hidden lg:block relative w-full max-w-2xl mx-auto aspect-square mb-8">
          {/* Orbit ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-slate-700/50" />

          {/* Center hub — shows description when selected, empty otherwise */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shadow-xl z-10 p-6 transition-all duration-500">
            {selected !== null ? (
              <div className="text-center animate-fade-in flex flex-col items-center justify-center">
                <h4 className="font-heading font-bold text-xs leading-tight text-blue-400 mb-2">
                  {satellites[selected].name}
                </h4>
                <p className="text-[10px] leading-relaxed text-slate-300">
                  {satellites[selected].desc}
                </p>
              </div>
            ) : (
              <div className="text-center text-slate-500">
                <p className="text-xs font-medium">Clique em uma<br />solução</p>
              </div>
            )}
          </div>

          {/* Satellites */}
          {satellites.map((sat, i) => {
            const angle = (i * (360 / satellites.length) - 90) * (Math.PI / 180);
            const radius = 42;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            const isSelected = selected === i;

            return (
              <button
                key={i}
                className={`absolute w-28 h-28 -translate-x-1/2 -translate-y-1/2 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all duration-300 cursor-pointer hover:scale-105 ${
                  isSelected
                    ? 'scale-110 bg-slate-700 border-blue-500 shadow-lg shadow-blue-500/20 ring-2 ring-blue-500/40'
                    : 'bg-slate-800 border-slate-700 hover:border-blue-400'
                }`}
                style={{ left: `${x}%`, top: `${y}%` }}
                onClick={() => setSelected(selected === i ? null : i)}
              >
                <img
                  src={sat.logo}
                  alt={sat.name}
                  className="w-20 h-16 object-contain rounded"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            );
          })}
        </div>

        {/* Desktop — instruction text */}
        <div className="hidden lg:block text-center mb-8">
          <p className="text-slate-500 text-xs">
            {selected !== null
              ? 'Clique novamente para desselecionar'
              : 'Selecione uma solução para saber mais'}
          </p>
        </div>

        {/* Mobile cards */}
        <div className={`lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children ${isVisible ? 'visible' : ''}`}>
          {satellites.map((sat, i) => {
            const isSelected = selected === i;
            return (
              <div
                key={i}
                className={`card-dark p-5 cursor-pointer transition-all duration-300 ${
                  isSelected ? 'border-blue-500/60 bg-blue-500/5 shadow-lg' : ''
                }`}
                onClick={() => setSelected(selected === i ? null : i)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden shrink-0 bg-slate-700">
                    <img
                      src={sat.logo}
                      alt={sat.name}
                      className="w-10 h-10 object-contain rounded"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-white">{sat.name}</h3>
                    <p className="text-xs text-blue-400">{sat.tagline}</p>
                  </div>
                </div>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isSelected ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-400 text-sm leading-relaxed">{sat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
