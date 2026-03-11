import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TrendingUp, Heart, BarChart3, Smartphone, Shield, Network } from 'lucide-react';

const satellites = [
  {
    name: 'Chordata Consultoria',
    tagline: 'Estratégia e Gestão',
    color: 'hsl(216 56% 41%)',
    icon: TrendingUp,
    desc: 'Consultoria estratégica especializada em gestão de clínicas e hospitais veterinários. Análise de processos, otimização operacional, desenvolvimento de equipes e planos estratégicos customizados. É o núcleo que integra todas as outras soluções.',
  },
  {
    name: 'MentAll.Vet',
    tagline: 'Saúde Mental Veterinária',
    color: 'hsl(90 52% 51%)',
    icon: Heart,
    desc: 'Equipes Saudáveis Constroem Negócios Sustentáveis. Atendimento psicológico individual, programas corporativos de gestão de equipes e treinamentos em saúde mental. Resultado: redução de rotatividade em até 30%, maior engajamento e clima organizacional melhorado.',
  },
  {
    name: 'Chordata Analytics',
    tagline: 'Inteligência de Dados',
    color: 'hsl(180 50% 50%)',
    icon: BarChart3,
    desc: 'Dados transformados em decisões. Nossa plataforma de inteligência de dados transforma métricas em estratégia em tempo real. O que está funcionando e o que precisa mudar, decidindo com números, não com intuição.',
  },
  {
    name: 'DescomplicaVet',
    tagline: 'Teleconsultoria e Educação',
    color: 'hsl(42 92% 63%)',
    icon: Smartphone,
    desc: 'Teleconsultoria e educação continuada ao alcance de um clique. Aplicativo que conecta sua equipe com especialistas veterinários 24/7. Auxílio em diagnósticos, interpretação de exames, protocolos clínicos atualizados.',
  },
  {
    name: 'JurídicoPet Digital',
    tagline: 'Conformidade Jurídica',
    color: 'hsl(261 33% 47%)',
    icon: Shield,
    desc: 'Conformidade jurídica sem burocracia. Assinatura eletrônica segura e válida para documentos veterinários. Termos de consentimento, contratos, autorizações — tudo digital, seguro e rastreável.',
  },
  {
    name: 'VetConnection',
    tagline: 'Feira e Eventos',
    color: 'hsl(200 50% 45%)',
    icon: Network,
    desc: 'A maior plataforma de conexão do mercado veterinário do Sul do Brasil. Dos criadores da Health Meeting Brasil (15 mil visitantes, 16 estados, 6 países), reunindo profissionais, estudantes, gestores e a indústria vet e pet.',
  },
];

const EcosystemSection = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="ecossistema" className="py-20 md:py-32 bg-gradient-to-b from-chordata-navy via-chordata-royal/20 to-chordata-navy">
      <div ref={ref} className={`container mx-auto px-4 max-w-6xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="text-chordata-teal text-sm font-semibold tracking-[0.25em] uppercase font-inter mb-4 block">
            — O Ecossistema —
          </span>
          <h2 className="font-sora text-2xl md:text-4xl font-bold text-white mb-3">
            Gestão 360° para o Mercado Veterinário
          </h2>
          <p className="text-white/60 font-inter text-lg">6 soluções integradas. Um único ecossistema. Transformação completa.</p>
        </div>

        {/* Desktop orbital diagram */}
        <div className="hidden lg:block relative w-full max-w-2xl mx-auto aspect-square mb-8">
          {/* Center hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-chordata-navy border-2 border-chordata-teal/40 flex items-center justify-center orbit-glow z-10">
            <div className="text-center">
              <p className="font-sora text-white font-bold text-sm">Ecossistema</p>
              <p className="font-sora text-chordata-teal font-bold text-sm">Chordata</p>
            </div>
          </div>

          {/* Orbit ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-white/10" />

          {/* Satellites */}
          {satellites.map((sat, i) => {
            const angle = (i * 60 - 90) * (Math.PI / 180);
            const radius = 42;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);

            return (
              <button
                key={i}
                className={`absolute w-28 h-28 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 flex flex-col items-center justify-center gap-1 transition-all duration-300 cursor-pointer hover:scale-110 ${
                  selected === i ? 'scale-110 shadow-xl' : ''
                }`}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  borderColor: sat.color,
                  backgroundColor: selected === i ? sat.color : `${sat.color}22`,
                }}
                onClick={() => setSelected(selected === i ? null : i)}
              >
                <sat.icon size={24} style={{ color: selected === i ? 'white' : sat.color }} />
                <span className={`text-[10px] font-sora font-semibold text-center leading-tight px-1 ${selected === i ? 'text-white' : ''}`}
                  style={{ color: selected === i ? 'white' : sat.color }}>
                  {sat.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected detail (desktop) */}
        {selected !== null && (
          <div className="hidden lg:block max-w-xl mx-auto mb-8 bg-white/5 border border-white/10 rounded-2xl p-6 text-center animate-fade-in">
            <h3 className="font-sora font-bold text-lg mb-1" style={{ color: satellites[selected].color }}>
              {satellites[selected].name}
            </h3>
            <p className="text-white/60 text-sm mb-3 font-inter">{satellites[selected].tagline}</p>
            <p className="text-white/80 font-inter text-sm leading-relaxed">{satellites[selected].desc}</p>
          </div>
        )}

        {/* Mobile cards */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {satellites.map((sat, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all cursor-pointer"
              onClick={() => setSelected(selected === i ? null : i)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${sat.color}22` }}>
                  <sat.icon size={20} style={{ color: sat.color }} />
                </div>
                <div>
                  <h3 className="font-sora font-bold text-sm text-white">{sat.name}</h3>
                  <p className="text-xs font-inter" style={{ color: sat.color }}>{sat.tagline}</p>
                </div>
              </div>
              {selected === i && (
                <p className="text-white/70 font-inter text-sm leading-relaxed animate-fade-in">{sat.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
