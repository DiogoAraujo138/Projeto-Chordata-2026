import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useRef, useEffect } from 'react';
import { Rocket, Building2, Globe2, BarChart3, Heart, Handshake, Scale, CalendarCheck } from 'lucide-react';

const timelineData = [
  {
    ano: '2020–2021',
    titulo: 'Início do Projeto',
    descricao:
      'Iniciamos o projeto da Chordata Consultoria, com o desenvolvimento de um projeto de precificação e processos operacionais e administrativos para o Centro Veterinário Welpen (São Leopoldo - RS).',
    icon: Rocket,
    destaque: true,
  },
  {
    ano: '2022',
    titulo: 'Institucionalização da Chordata',
    descricao:
      'Foi instituída a empresa Chordata Consultoria e Assessoria Ltda, com sede em Porto Alegre - RS, dando início ao seu ecossistema de parceiros, formação de equipe de consultores e início da construção de uma ferramenta de Business Intelligence para clínicas e hospitais veterinários.',
    icon: Building2,
    destaque: false,
  },
  {
    ano: '2023',
    titulo: 'Expansão e Estruturação do Ecossistema',
    descricao:
      'A Chordata já se torna presente em 4 estados (RS, SC, PA, MA), instituindo a empresa spin-off Chordata Analytics, desenvolvendo o MVP da MentAll.Vet com seu 1º Simpósio de Saúde Mental na Medicina Veterinária e Mercado de Trabalho (Caxias do Sul - RS).',
    icon: Globe2,
    destaque: false,
  },
  {
    ano: '2023',
    titulo: 'Lançamento da Chordata Analytics',
    descricao:
      'Lançamento da primeira solução de Business Intelligence em dashboards de gestão para o mercado veterinário.',
    icon: BarChart3,
    destaque: false,
  },
  {
    ano: '2024',
    titulo: 'MentAll.Vet',
    descricao:
      'A saúde mental entra no ecossistema. O que era um projeto consultivo se tornou uma plataforma. Atendimento psicológico individual, programas corporativos e treinamentos voltados ao bem-estar de equipes veterinárias — porque equipes saudáveis constroem negócios sustentáveis.',
    icon: Heart,
    destaque: false,
  },
  {
    ano: '2024',
    titulo: 'Parceiro PAVE — ABHV',
    descricao:
      'A Chordata se torna a mais nova parceira do PAVE — Programa de Apoio ao Veterinário Empreendedor da ABHV, buscando fortalecer o empreendedorismo no setor oferecendo soluções de ponta e contribuições à sua atuação profissional.',
    icon: Handshake,
    destaque: false,
  },
  {
    ano: '2025',
    titulo: 'Jurídico Pet Digital',
    descricao:
      'Em parceria com a empresa de assessoria jurídica Jurídico Pet, foi lançada a plataforma de assinatura eletrônica e conformidade jurídica para o setor pet & vet. Termos de consentimento, contratos e autorizações de formato digital, seguro e rastreável.',
    icon: Scale,
    destaque: false,
  },
  {
    ano: '2025',
    titulo: 'Evento Vet Connection',
    descricao:
      'Realização do evento Vet Connection 2025 — projeto que promete ser a maior plataforma de conexão e inovação do mercado veterinário do Sul do Brasil. Seu primeiro evento ocorreu em Porto Alegre - RS, reunindo 5 mil visitantes, dentre eles 1.500 médicos veterinários, mais de 100 palestrantes distribuídos em 16 simpósios e mais de 60 expositores. O evento também contou com uma batalha de startups com premiação concedida pela VENTIUR Smart Capital.',
    icon: CalendarCheck,
    destaque: true,
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
      className={`relative flex items-start w-full mb-6 md:mb-10 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Desktop: alternating sides */}
      <div className={`hidden md:flex w-full items-start ${isLeft ? '' : 'flex-row-reverse'}`}>
        <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
          <div
            className={`group relative p-6 rounded-2xl bg-slate-800/60 border border-slate-700/50 backdrop-blur-sm
            hover:bg-slate-800/80 hover:border-blue-500/30 transition-all duration-300
            ${item.destaque ? 'ring-1 ring-blue-500/20 border-blue-500/20' : ''}`}
          >
            <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wide">
                {item.ano}
              </span>
            </div>

            <h3 className="font-heading text-base md:text-lg font-semibold text-white mb-2">
              {item.titulo}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {item.descricao}
            </p>
          </div>
        </div>

        {/* Center node */}
        <div className="w-2/12 flex justify-center relative">
          <div
            className={`w-12 h-12 rounded-full bg-slate-800 border-2 flex items-center justify-center
            z-10 transition-all duration-300 hover:scale-110 shadow-lg shadow-blue-500/5
            ${item.destaque
              ? 'border-blue-400 ring-2 ring-blue-500/20 ring-offset-2 ring-offset-slate-900'
              : 'border-blue-500/50 hover:border-blue-400'
            }`}
          >
            <Icon size={18} className="text-blue-400" />
          </div>
        </div>

        <div className="w-5/12" />
      </div>

      {/* Mobile: single column */}
      <div className="flex md:hidden w-full items-start gap-4">
        <div className="flex flex-col items-center flex-shrink-0">
          <div
            className={`w-10 h-10 rounded-full bg-slate-800 border-2 flex items-center justify-center z-10
            ${item.destaque
              ? 'border-blue-400 ring-2 ring-blue-500/20 ring-offset-2 ring-offset-slate-900'
              : 'border-blue-500/50'
            }`}
          >
            <Icon size={16} className="text-blue-400" />
          </div>
          {index < timelineData.length - 1 && (
            <div className="w-px h-full min-h-[40px] bg-gradient-to-b from-blue-500/30 to-slate-700/30 mt-2" />
          )}
        </div>

        <div
          className={`flex-1 p-5 rounded-xl bg-slate-800/60 border border-slate-700/50
          ${item.destaque ? 'ring-1 ring-blue-500/20 border-blue-500/20' : ''}`}
        >
          <span className="inline-block mb-2 px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[11px] font-bold tracking-wide">
            {item.ano}
          </span>

          <h3 className="font-heading text-sm font-semibold text-white mb-1.5">{item.titulo}</h3>
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
          <span className="section-label">— Nossa Trajetória —</span>
          <h2 className="section-title text-white">
            A Evolução do Ecossistema{' '}
            <span className="text-blue-400">Chordata</span>
          </h2>
          <p className="text-slate-400 section-subtitle max-w-2xl mx-auto">
            De um projeto de consultoria a um ecossistema completo de soluções para o mercado veterinário.
          </p>
        </div>

        <div className="relative">
          {/* Desktop vertical line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-slate-700 to-blue-500/40" />

          {timelineData.map((item, idx) => (
            <TimelineItem key={`${item.ano}-${item.titulo}`} item={item} index={idx} />
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-sm text-slate-500 italic">
            Um ecossistema em constante evolução — construído para transformar o mercado veterinário.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
