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
    destaque: true,
  },
  {
    ano: 2023,
    nome: 'Chordata Analytics',
    descricao:
      'Soluções de Power BI para o mercado veterinário. Transforma dados complexos em insights claros para decisões assertivas.',
    logo: logoAnalytics,
    icon: BarChart3,
    destaque: false,
  },
  {
    ano: 2024,
    nome: 'Chordata Digital',
    descricao:
      'Braço digital do ecossistema, voltado a soluções digitais inovadoras para o setor pet & vet.',
    logo: null,
    icon: Globe,
    destaque: false,
  },
  {
    ano: 2024,
    nome: 'Chordata Tech',
    descricao:
      'Braço de tecnologia focado no desenvolvimento de soluções tecnológicas para o setor veterinário.',
    logo: null,
    icon: Cpu,
    destaque: false,
  },
  {
    ano: 2024,
    nome: 'Chordata Ventures',
    descricao:
      'Venture builder que cria e desenvolve empresas de tecnologia, construindo um ecossistema de soluções inovadoras para o mercado pet & vet.',
    logo: null,
    icon: Lightbulb,
    destaque: false,
  },
  {
    ano: 2025,
    nome: 'JurídicoPet Digital',
    descricao:
      'Plataforma de assinatura eletrônica exclusiva para o setor pet & vet. Contratos, termos de consentimento e documentos digitais com validade jurídica.',
    logo: null,
    icon: Scale,
    destaque: false,
  },
];

const TimelineItem = ({
  item,
  index,
}: {
  item: (typeof timelineData)[0];
  index: number;
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
      className={`relative flex items-center w-full mb-8 md:mb-12 transition-all duration-600 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Desktop: alternating sides */}
      <div className={`hidden md:flex w-full items-center ${isLeft ? '' : 'flex-row-reverse'}`}>
        <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
          <div
            className={`group relative p-6 rounded-xl bg-slate-800/50 border border-slate-700/50
            hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-200
            ${item.destaque ? 'ring-1 ring-blue-500/20' : ''}`}
          >
            {item.destaque && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-500 text-[10px] font-bold uppercase tracking-wider text-white">
                Ponto de Partida
              </span>
            )}

            <div className={`mb-3 flex ${isLeft ? 'justify-end' : 'justify-start'}`}>
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.nome}
                  className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              ) : (
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Icon size={20} className="text-blue-400" />
                </div>
              )}
            </div>

            <h3 className="font-heading text-base font-semibold text-white mb-1">
              {item.nome}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {item.descricao}
            </p>
          </div>
        </div>

        <div className="w-2/12 flex justify-center relative">
          <div
            className={`w-12 h-12 rounded-full bg-slate-800 border-2 border-blue-500 flex items-center justify-center
            z-10 transition-transform duration-200 hover:scale-105
            ${item.destaque ? 'w-14 h-14 ring-2 ring-blue-500/20 ring-offset-2 ring-offset-slate-900' : ''}`}
          >
            <span className="text-blue-400 font-heading font-bold text-sm">{item.ano}</span>
          </div>
        </div>

        <div className="w-5/12" />
      </div>

      {/* Mobile: single column */}
      <div className="flex md:hidden w-full items-start gap-4">
        <div className="flex flex-col items-center flex-shrink-0">
          <div
            className={`w-11 h-11 rounded-full bg-slate-800 border-2 border-blue-500 flex items-center justify-center z-10
            ${item.destaque ? 'ring-2 ring-blue-500/20 ring-offset-2 ring-offset-slate-900' : ''}`}
          >
            <span className="text-blue-400 font-heading font-bold text-xs">{item.ano}</span>
          </div>
          {index < timelineData.length - 1 && (
            <div className="w-px h-full min-h-[40px] bg-slate-700 mt-2" />
          )}
        </div>

        <div
          className={`flex-1 p-5 rounded-xl bg-slate-800/50 border border-slate-700/50
          ${item.destaque ? 'ring-1 ring-blue-500/20' : ''}`}
        >
          {item.destaque && (
            <span className="inline-block mb-2 px-3 py-0.5 rounded-full bg-blue-500 text-[10px] font-bold uppercase tracking-wider text-white">
              Ponto de Partida
            </span>
          )}

          <div className="flex items-center gap-3 mb-2">
            {item.logo ? (
              <img src={item.logo} alt={item.nome} className="h-8 w-auto object-contain" loading="lazy" />
            ) : (
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-blue-400" />
              </div>
            )}
            <h3 className="font-heading text-sm font-semibold text-white">{item.nome}</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">{item.descricao}</p>
        </div>
      </div>
    </div>
  );
};

const TimelineSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-36 bg-slate-900">
      <div ref={ref} className={`container mx-auto px-6 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <span className="section-label">— Linha do Tempo —</span>
          <h2 className="section-title text-white">
            A Evolução do Ecossistema{' '}
            <span className="text-blue-400">Chordata</span>
          </h2>
          <p className="text-slate-400 section-subtitle max-w-2xl mx-auto">
            Do nascimento da consultoria à construção de um ecossistema completo de soluções para o mercado veterinário.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-700" />

          {timelineData.map((item, idx) => (
            <TimelineItem key={item.nome} item={item} index={idx} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-slate-500 italic">
            Um ecossistema em constante evolução — construído para transformar o mercado veterinário.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
