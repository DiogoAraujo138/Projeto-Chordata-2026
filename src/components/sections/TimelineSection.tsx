import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useRef, useEffect } from 'react';
import { Rocket, BarChart3, Heart, Handshake, Scale, PartyPopper, Building2, Globe } from 'lucide-react';

import logoChordataConsultoria from '@/assets/logos/chordata-consultoria-new.png';
import logoAnalytics from '@/assets/logos/chordata-analytics-new2.png';
import logoMentall from '@/assets/logos/mentall-new.png';
import logoVetconnection from '@/assets/logos/vetconnection-new2.png';
import logoJuridicoPet from '@/assets/logos/juridico-pet-new.png';

const timelineData = [
  {
    ano: '2020–2021',
    titulo: 'Início do Projeto',
    descricao:
      'Iniciamos o projeto da Chordata Consultoria, com o desenvolvimento de um projeto de precificação e processos operacionais e administrativos para o Centro Veterinário Welpen (São Leopoldo - RS).',
    logo: null,
    icon: Rocket,
    destaque: true,
  },
  {
    ano: '2022',
    titulo: 'Institucionalização da Chordata',
    descricao:
      'Foi instituída a empresa Chordata Consultoria e Assessoria Ltda, com sede em Porto Alegre - RS, dando início ao seu ecossistema de parceiros, formação de equipe de consultores e início da construção de uma ferramenta de Business Intelligence para clínicas e hospitais veterinários.',
    logo: logoChordataConsultoria,
    icon: Building2,
    destaque: false,
  },
  {
    ano: '2023',
    titulo: 'Expansão e Estruturação do Ecossistema',
    descricao:
      'A Chordata já se torna presente em 4 estados (RS, SC, PA, MA), instituindo a empresa spin-off Chordata Analytics, desenvolvendo o MVP da MentALL.Vet com seu 1º Simpósio de Saúde Mental na Medicina Veterinária e Mercado de Trabalho (Caxias do Sul - RS).',
    logo: null,
    icon: Globe,
    destaque: false,
  },
  {
    ano: '2023',
    titulo: 'Lançamento da Chordata Analytics',
    descricao:
      'Lançamento da primeira solução de Business Intelligence em dashboards de gestão para o mercado veterinário, por meio da Chordata Analytics.',
    logo: logoAnalytics,
    icon: BarChart3,
    destaque: false,
  },
  {
    ano: '2024',
    titulo: 'MentALL.Vet',
    descricao:
      'A saúde mental entra no ecossistema. O que era um projeto consultivo se tornou uma plataforma. Atendimento psicológico individual, programas corporativos e treinamentos voltados ao bem-estar de equipes veterinárias — porque equipes saudáveis constroem negócios sustentáveis.',
    logo: logoMentall,
    icon: Heart,
    destaque: false,
  },
  {
    ano: '2024',
    titulo: 'Parceria PAVE/ABHV',
    subtitulo: '2º semestre',
    descricao:
      'A Chordata se torna a mais nova parceira do PAVE - Programa de Apoio ao Veterinário Empreendedor da ABHV, buscando fortalecer o empreendedorismo no setor, oferecer soluções de ponta e contribuir para a atuação profissional no mercado veterinário.',
    logo: null,
    icon: Handshake,
    destaque: false,
  },
  {
    ano: '2025',
    titulo: 'Jurídico Pet Digital',
    descricao:
      'Em parceria com a empresa de assessoria jurídica Jurídico Pet, foi lançada a plataforma de assinatura eletrônica e conformidade jurídica para o setor pet & vet. Termos de consentimento, contratos e autorizações de forma digital, segura e rastreável.',
    logo: logoJuridicoPet,
    icon: Scale,
    destaque: false,
  },
  {
    ano: '2025',
    titulo: 'Evento Vet Connection',
    descricao:
      'Realização do evento Vet Connection 2025 — projeto que promete ser a maior plataforma de conexão e inovação do mercado veterinário do Sul do Brasil. Seu primeiro evento ocorreu em Porto Alegre - RS, reunindo 5 mil visitantes, dentre eles 1.500 médicos veterinários, mais de 100 palestrantes distribuídos em 16 simpósios e mais de 60 expositores. O evento também contou com uma batalha de startups com premiação concedida pela VENTIUR Smart Capital.',
    logo: logoVetconnection,
    icon: PartyPopper,
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
  const isFirst = index === 0;
  const isLast = index === timelineData.length - 1;

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
            {isFirst && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-500 text-[10px] font-bold uppercase tracking-wider text-white">
                Ponto de Partida
              </span>
            )}
            {isLast && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-500 text-[10px] font-bold uppercase tracking-wider text-white whitespace-nowrap">
                Maior Evento Vet do Sul
              </span>
            )}

            <div className={`mb-3 flex items-center gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.titulo}
                  className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              ) : (
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Icon size={20} className="text-blue-400" />
                </div>
              )}
            </div>

            {'subtitulo' in item && item.subtitulo && (
              <span className="inline-block mb-1 px-2 py-0.5 rounded bg-blue-500/10 text-[10px] font-semibold text-blue-400 uppercase tracking-wide">
                {item.subtitulo}
              </span>
            )}

            <h3 className="font-heading text-base font-semibold text-white mb-1">
              {item.titulo}
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
            <span className="text-blue-400 font-heading font-bold text-xs leading-none text-center">
              <span className="text-[11px]">{item.ano}</span>
            </span>
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
            <span className="text-blue-400 font-heading font-bold text-[9px] leading-none text-center">
              <span className="text-[10px]">{item.ano}</span>
            </span>
          </div>
          {index < timelineData.length - 1 && (
            <div className="w-px h-full min-h-[40px] bg-slate-700 mt-2" />
          )}
        </div>

        <div
          className={`flex-1 p-4 sm:p-5 rounded-xl bg-slate-800/50 border border-slate-700/50
          ${item.destaque ? 'ring-1 ring-blue-500/20' : ''}`}
        >
          {isFirst && (
            <span className="inline-block mb-2 px-3 py-0.5 rounded-full bg-blue-500 text-[10px] font-bold uppercase tracking-wider text-white">
              Ponto de Partida
            </span>
          )}
          {isLast && (
            <span className="inline-block mb-2 px-3 py-0.5 rounded-full bg-blue-500 text-[10px] font-bold uppercase tracking-wider text-white">
              Maior Evento Vet do Sul
            </span>
          )}

          <div className="flex items-center gap-3 mb-2 flex-wrap">
            {item.logo ? (
              <img src={item.logo} alt={item.titulo} className="h-8 w-auto object-contain" loading="lazy" />
            ) : (
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-blue-400" />
              </div>
            )}
            <h3 className="font-heading text-sm font-semibold text-white">{item.titulo}</h3>
          </div>

          {'subtitulo' in item && item.subtitulo && (
            <span className="inline-block mb-2 px-2 py-0.5 rounded bg-blue-500/10 text-[10px] font-semibold text-blue-400 uppercase tracking-wide">
              {item.subtitulo}
            </span>
          )}

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
            <TimelineItem key={`${item.ano}-${item.titulo}`} item={item} index={idx} />
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
