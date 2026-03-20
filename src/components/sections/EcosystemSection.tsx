import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronRight, BarChart3, Brain, Scale, Users, Briefcase } from 'lucide-react';
import logoChordataPrincipal from '@/assets/logos/chordata-consultoria-new.png';
import logoMentallvet from '@/assets/logos/mentall-new.png';
import logoAnalytics from '@/assets/logos/chordata-analytics-new2.png';
import logoVetconnection from '@/assets/logos/vetconnection-new2.png';
import logoJuridicoPet from '@/assets/logos/juridico-pet-new.png';

const brands = [
  {
    name: 'Chordata Consultoria',
    tagline: 'Estratégia e Gestão',
    logo: logoChordataPrincipal,
    icon: Briefcase,
    color: 'blue',
    desc: 'Estratégia, gestão e desenvolvimento de negócios para clínicas, hospitais e empresas do mercado veterinário.',
  },
  {
    name: 'Chordata Analytics',
    tagline: 'Inteligência de Dados',
    logo: logoAnalytics,
    icon: BarChart3,
    color: 'cyan',
    desc: 'Inteligência de dados, dashboards de gestão e soluções de BI para tomada de decisão no mercado veterinário.',
  },
  {
    name: 'MentAll.Vet',
    tagline: 'Saúde Mental Veterinária',
    logo: logoMentallvet,
    icon: Brain,
    color: 'emerald',
    desc: 'Soluções voltadas à saúde mental, bem-estar corporativo e desenvolvimento humano para profissionais e empresas do setor veterinário.',
  },
  {
    name: 'JurídicoPet Digital',
    tagline: 'Conformidade Jurídica',
    logo: logoJuridicoPet,
    icon: Scale,
    color: 'amber',
    desc: 'Assinatura eletrônica e conformidade jurídica digital.',
  },
  {
    name: 'VetConnection',
    tagline: 'Feiras e Eventos',
    logo: logoVetconnection,
    icon: Users,
    color: 'violet',
    desc: 'Feiras, congressos e eventos veterinários.',
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  blue:    { border: 'border-blue-500/60',    bg: 'bg-blue-500/10',    text: 'text-blue-400',    glow: 'shadow-blue-500/10' },
  cyan:    { border: 'border-cyan-500/60',    bg: 'bg-cyan-500/10',    text: 'text-cyan-400',    glow: 'shadow-cyan-500/10' },
  emerald: { border: 'border-emerald-500/60', bg: 'bg-emerald-500/10', text: 'text-emerald-400', glow: 'shadow-emerald-500/10' },
  amber:   { border: 'border-amber-500/60',   bg: 'bg-amber-500/10',   text: 'text-amber-400',   glow: 'shadow-amber-500/10' },
  violet:  { border: 'border-violet-500/60',  bg: 'bg-violet-500/10',  text: 'text-violet-400',  glow: 'shadow-violet-500/10' },
};

const EcosystemSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const toggle = (i: number) => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };

  return (
    <section id="ecossistema" className="py-24 md:py-36 bg-slate-800">
      <div ref={ref} className={`container mx-auto px-6 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">— O Ecossistema —</span>
          <h2 className="section-title text-white">
            Gestão Integrada para o Mercado Veterinário
          </h2>
          <p className="text-slate-400 section-subtitle max-w-2xl mx-auto">
            5 soluções especializadas trabalhando juntas. Um ecossistema único para a transformação completa do seu negócio.
          </p>
        </div>

        {/* Brand Cards — Accordion style */}
        <div className={`flex flex-col gap-3 stagger-children ${isVisible ? 'visible' : ''}`}>
          {brands.map((brand, i) => {
            const isOpen = expandedIndex === i;
            const colors = colorMap[brand.color];
            const Icon = brand.icon;

            return (
              <div
                key={i}
                className={`
                  rounded-xl border transition-all duration-300 ease-out overflow-hidden
                  ${isOpen
                    ? `${colors.border} ${colors.bg} shadow-lg ${colors.glow}`
                    : 'border-slate-700/50 bg-slate-800/50 hover:bg-slate-800/70 hover:border-slate-600/50'
                  }
                `}
              >
                {/* Clickable Header */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  {/* Logo / Icon */}
                  <div className={`
                    w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-lg flex items-center justify-center overflow-hidden
                    transition-colors duration-300
                    ${isOpen ? colors.bg : 'bg-slate-700/50'}
                  `}>
                    {brand.logo ? (
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <Icon size={24} className={isOpen ? colors.text : 'text-slate-400'} />
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-heading font-bold text-sm sm:text-base transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                      {brand.name}
                    </h3>
                    <p className={`text-xs sm:text-sm transition-colors duration-300 ${isOpen ? colors.text : 'text-slate-500'}`}>
                      {brand.tagline}
                    </p>
                  </div>

                  {/* Chevron */}
                  <ChevronRight
                    size={20}
                    className={`shrink-0 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'group-hover:text-slate-300'}`}
                  />
                </button>

                {/* Expandable Content */}
                <div
                  className={`
                    transition-all duration-300 ease-out overflow-hidden
                    ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pl-[4.75rem] sm:pl-[5.5rem]">
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {brand.desc}
                    </p>
                  </div>
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
