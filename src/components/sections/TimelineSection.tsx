import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useRef, useEffect } from 'react';
import { Rocket, BarChart3, Globe, Cpu, Lightbulb, Scale } from 'lucide-react';

import logoChordataPrincipal from '@/assets/logos/chordata-principal.png';
import logoAnalytics from '@/assets/logos/chordata-analytics.png';

const timelineData = [
  {
    ano: 2022,
    nome: 'Chordata Consultoria e Assessoria',
    descricao:
      'Empresa principal do ecossistema. Consultoria estratégica em gestão empresarial para o mercado veterinário e pet, fundada em Porto Alegre/RS.',
    logo: logoChordataPrincipal,
    icon: Rocket,
    color: 'from-blue-500 to-blue-700',
    accent: 'border-blue-500',
    glow: 'shadow-blue-500/20',
    destaque: true,
  },
  {
    ano: 2023,
    nome: 'Chordata Analytics',
    descricao:
      'Soluções de Power BI para o mercado veterinário. Transforma dados complexos em insights claros para decisões assertivas.',
    logo: logoAnalytics,
    icon: BarChart3,
    color: 'from-teal-400 to-teal-600',
    accent: 'border-teal-400',
    glow: 'shadow-teal-400/20',
    destaque: false,
  },
  {
    ano: 2024,
    nome: 'Chordata Digital',
    descricao:
      'Braço digital do ecossistema, voltado a soluções digitais inovadoras para o setor pet & vet.',
    logo: null,
    icon: Globe,
    color: 'from-purple-400 to-purple-600',
    accent: 'border-purple-400',
    glow: 'shadow-purple-400/20',
    destaque: false,
  },
  {
    ano: 2024,
    nome: 'Chordata Tech',
    descricao:
      'Braço de tecnologia focado no desenvolvimento de soluções tecnológicas para o setor veterinário.',
    logo: null,
    icon: Cpu,
    color: 'from-cyan-400 to-cyan-600',
    accent: 'border-cyan-400',
    glow: 'shadow-cyan-400/20',
    destaque: false,
  },
  {
    ano: 2024,
    nome: 'Chordata Ventures',
    descricao:
      'Venture builder que cria e desenvolve empresas de tecnologia, construindo um ecossistema de soluções inovadoras para o mercado pet & vet.',
    logo: null,
    icon: Lightbulb,
    color: 'from-amber-400 to-amber-600',
    accent: 'border-amber-400',
    glow: 'shadow-amber-400/20',
    destaque: false,
  },
  {
    ano: 2025,
    nome: 'JurídicoPet Digital',
    descricao:
      'Plataforma de assinatura eletrônica exclusiva para o setor pet & vet. Contratos, termos de consentimento e documentos digitais com validade jurídica.',
    logo: null,
    icon: Scale,
    color: 'from-emerald-400 to-emerald-600',
    accent: 'border-emerald-400',
    glow: 'shadow-emerald-400/20',
    destaque: false,
  },
];

const TimelineItem = ({
  item,
  index,
  isVisible,
}: {
  item: (typeof timelineData)[0];
  index: number;
  isVisible: boolean;
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { rootMargin: '0px 0px -60px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isLeft = index % 2 === 0;
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      className={`relative flex items-center w-full mb-8 md:mb-12 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Desktop: alternating sides */}
      <div className={`hidden md:flex w-full items-center ${isLeft ? '' : 'flex-row-reverse'}`}>
        {/* Content card */}
        <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
          <div
            className={`group relative p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm
            hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500
            hover:${item.glow} hover:shadow-lg ${item.destaque ? 'ring-1 ring-blue-500/30' : ''}`}
          >
            {item.destaque && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-[10px] font-bold uppercase tracking-wider text-white">
                Ponto de Partida
              </span>
            )}

            {/* Logo or Icon */}
            <div className={`mb-3 flex ${isLeft ? 'justify-end' : 'justify-start'}`}>
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.nome}
                  className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              ) : (
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <Icon size={20} className="text-white" />
                </div>
              )}
            </div>

            <h3 className="font-sora text-base font-semibold text-white mb-1">
              {item.nome}
            </h3>
            <p className="font-inter text-sm text-white/55 leading-relaxed">
              {item.descricao}
            </p>
          </div>
        </div>

        {/* Center node */}
        <div className="w-2/12 flex justify-center relative">
          <div
            className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center
            border-4 border-chordata-navy z-10 shadow-lg transition-transform duration-300 hover:scale-110
            ${item.destaque ? 'w-16 h-16 ring-2 ring-blue-400/40 ring-offset-2 ring-offset-chordata-navy' : ''}`}
          >
            <span className="text-white font-sora font-bold text-sm">{item.ano}</span>
          </div>
        </div>

        {/* Empty side */}
        <div className="w-5/12" />
      </div>

      {/* Mobile: single column */}
      <div className="flex md:hidden w-full items-start gap-4">
        {/* Node */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div
            className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center
            border-3 border-chordata-navy z-10 shadow-lg
            ${item.destaque ? 'ring-2 ring-blue-400/40 ring-offset-2 ring-offset-chordata-navy' : ''}`}
          >
            <span className="text-white font-sora font-bold text-xs">{item.ano}</span>
          </div>
          {index < timelineData.length - 1 && (
            <div className="w-px h-full min-h-[40px] bg-gradient-to-b from-white/20 to-transparent mt-2" />
          )}
        </div>

        {/* Card */}
        <div
          className={`flex-1 p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm
          ${item.destaque ? 'ring-1 ring-blue-500/30' : ''}`}
        >
          {item.destaque && (
            <span className="inline-block mb-2 px-3 py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-[10px] font-bold uppercase tracking-wider text-white">
              Ponto de Partida
            </span>
          )}

          <div className="flex items-center gap-3 mb-2">
            {item.logo ? (
              <img src={item.logo} alt={item.nome} className="h-8 w-auto object-contain" loading="lazy" />
            ) : (
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                <Icon size={16} className="text-white" />
              </div>
            )}
            <h3 className="font-sora text-sm font-semibold text-white">{item.nome}</h3>
          </div>
          <p className="font-inter text-xs text-white/55 leading-relaxed">{item.descricao}</p>
        </div>
      </div>
    </div>
  );
};

const TimelineSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-chordata-navy via-chordata-royal/10 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-chordata-teal/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className={`container mx-auto px-4 sm:px-6 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <span className="section-label">— Linha do Tempo —</span>
          <h2 className="section-title text-white">
            A Evolução do Ecossistema{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-chordata-teal to-chordata-green">
              Chordata
            </span>
          </h2>
          <p className="text-white/55 section-subtitle max-w-2xl mx-auto">
            Do nascimento da consultoria à construção de um ecossistema completo de soluções para o mercado veterinário.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {timelineData.map((item, idx) => (
            <TimelineItem key={item.nome} item={item} index={idx} isVisible={isVisible} />
          ))}
        </div>

        {/* Footer text */}
        <div className="text-center mt-12">
          <p className="font-inter text-sm text-white/40 italic">
            Um ecossistema em constante evolução — construído para transformar o mercado veterinário.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
