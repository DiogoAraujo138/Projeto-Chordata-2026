import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Shield } from 'lucide-react';
import logoChordataPrincipal from '@/assets/logos/chordata-principal.png';
import logoMentallvet from '@/assets/logos/mentallvet.png';
import logoAnalytics from '@/assets/logos/chordata-analytics.png';
import logoVetconnection from '@/assets/logos/vetconnection.png';
import logoDescomplicavet from '@/assets/logos/descomplicavet.png';

const satellites = [
  {
    name: 'Chordata Consultoria',
    tagline: 'Estratégia e Gestão',
    logo: logoChordataPrincipal,
    desc: 'Consultoria estratégica especializada em gestão de clínicas e hospitais veterinários. Análise de processos, otimização operacional, desenvolvimento de equipes e planos estratégicos customizados. É o núcleo que integra todas as outras soluções.',
  },
  {
    name: 'MentAll.Vet',
    tagline: 'Saúde Mental Veterinária',
    logo: logoMentallvet,
    desc: 'Equipes Saudáveis Constroem Negócios Sustentáveis. Atendimento psicológico individual, programas corporativos de gestão de equipes e treinamentos em saúde mental. Resultado: redução de rotatividade em até 30%, maior engajamento e clima organizacional melhorado.',
  },
  {
    name: 'Chordata Analytics',
    tagline: 'Inteligência de Dados',
    logo: logoAnalytics,
    desc: 'Dados transformados em decisões. Nossa plataforma de inteligência de dados transforma métricas em estratégia em tempo real. O que está funcionando e o que precisa mudar, decidindo com números, não com intuição.',
  },
  {
    name: 'DescomplicaVet',
    tagline: 'Teleconsultoria e Educação',
    logo: logoDescomplicavet,
    desc: 'Teleconsultoria e educação continuada ao alcance de um clique. Aplicativo que conecta sua equipe com especialistas veterinários 24/7. Auxílio em diagnósticos, interpretação de exames, protocolos clínicos atualizados.',
  },
  {
    name: 'JurídicoPet Digital',
    tagline: 'Conformidade Jurídica',
    logo: null,
    desc: 'Conformidade jurídica sem burocracia. Assinatura eletrônica segura e válida para documentos veterinários. Termos de consentimento, contratos, autorizações — tudo digital, seguro e rastreável.',
  },
  {
    name: 'VetConnection',
    tagline: 'Feira e Eventos',
    logo: logoVetconnection,
    desc: 'A maior plataforma de conexão do mercado veterinário do Sul do Brasil. Dos criadores da Health Meeting Brasil (15 mil visitantes, 16 estados, 6 países), reunindo profissionais, estudantes, gestores e a indústria vet e pet.',
  },
];

const SatelliteIcon = ({ sat, size, selected }: { sat: typeof satellites[0]; size: number; selected: boolean }) => {
  if (sat.logo) {
    return (
      <img
        src={sat.logo}
        alt={sat.name}
        className="object-contain rounded-lg"
        style={{ width: size, height: size }}
        loading="lazy"
        decoding="async"
      />
    );
  }
  return <Shield size={size} className={selected ? 'text-white' : 'text-blue-400'} />;
};

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
          <p className="text-slate-400 section-subtitle">6 soluções integradas. Um único ecossistema. Transformação completa.</p>
        </div>

        {/* Desktop orbital diagram */}
        <div className="hidden lg:block relative w-full max-w-2xl mx-auto aspect-square mb-8">
          {/* Center hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-lg z-10 p-4">
            <img src={logoChordataPrincipal} alt="Chordata" className="w-full h-full object-contain" loading="lazy" decoding="async" />
          </div>

          {/* Orbit ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-slate-700/50" />

          {/* Satellites */}
          {satellites.map((sat, i) => {
            const angle = (i * 60 - 90) * (Math.PI / 180);
            const radius = 42;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);

            return (
              <button
                key={i}
                className={`absolute w-28 h-28 -translate-x-1/2 -translate-y-1/2 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all duration-200 cursor-pointer hover:scale-105 ${
                  selected === i
                    ? 'scale-105 bg-blue-500 border-blue-500 shadow-lg'
                    : sat.logo
                    ? 'bg-white border-slate-200 hover:border-blue-300'
                    : 'bg-slate-700 border-slate-600 hover:border-blue-400'
                }`}
                style={{ left: `${x}%`, top: `${y}%` }}
                onClick={() => setSelected(selected === i ? null : i)}
              >
                {sat.logo ? (
                  <img src={sat.logo} alt={sat.name} className="w-20 h-16 object-contain rounded" loading="lazy" decoding="async" />
                ) : (
                  <>
                    <Shield size={22} className={selected === i ? 'text-white' : 'text-blue-400'} />
                    <span className={`text-[10px] font-heading font-semibold text-center leading-tight px-1 ${
                      selected === i ? 'text-white' : 'text-slate-300'
                    }`}>
                      {sat.name}
                    </span>
                  </>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected detail (desktop) */}
        {selected !== null && (
          <div className="hidden lg:block max-w-xl mx-auto mb-8 card-dark p-6 text-center animate-fade-in">
            <h3 className="font-heading font-bold text-lg mb-1 text-blue-400">
              {satellites[selected].name}
            </h3>
            <p className="text-slate-400 text-sm mb-3">{satellites[selected].tagline}</p>
            <p className="text-slate-300 text-sm leading-relaxed">{satellites[selected].desc}</p>
          </div>
        )}

        {/* Mobile cards */}
        <div className={`lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children ${isVisible ? 'visible' : ''}`}>
          {satellites.map((sat, i) => (
            <div
              key={i}
              className="card-dark p-5 cursor-pointer"
              onClick={() => setSelected(selected === i ? null : i)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden shrink-0 ${
                  sat.logo ? 'bg-white' : 'bg-slate-700'
                }`}>
                  <SatelliteIcon sat={sat} size={sat.logo ? 40 : 20} selected={selected === i} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-white">{sat.name}</h3>
                  <p className="text-xs text-blue-400">{sat.tagline}</p>
                </div>
              </div>
              {selected === i && (
                <p className="text-slate-400 text-sm leading-relaxed animate-fade-in">{sat.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
