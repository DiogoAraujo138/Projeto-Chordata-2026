import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Briefcase, 
  Settings, 
  GraduationCap, 
  Heart,
  ChevronRight,
  TrendingUp,
  Building2,
  ShieldCheck,
  Users,
  Search,
  ClipboardList,
  BookOpen,
  UserCheck,
  Lightbulb,
  DollarSign
} from 'lucide-react';

interface ServiceItem {
  title: string;
  desc: string;
  icon: React.ElementType;
}

interface ServiceCategory {
  label: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  borderColor: string;
  items: ServiceItem[];
}

const tabs: ServiceCategory[] = [
  {
    label: 'Consultoria e Assessoria',
    icon: Briefcase,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    items: [
      { 
        title: 'Consultoria Artesanal', 
        desc: 'Foco em um problema específico, resultado rápido.',
        icon: Lightbulb
      },
      { 
        title: 'Consultoria Integrada', 
        desc: 'Trabalho sistêmico, todos os elos do negócio, médio prazo.',
        icon: Settings
      },
      { 
        title: 'Consultoria Integrada Total', 
        desc: 'Longo prazo, projetos bem definidos, transformação completa.',
        icon: TrendingUp
      },
      { 
        title: 'Consultoria para Abertura de Novos Negócios', 
        desc: 'Plano de negócio, primeiros passos, parcerias.',
        icon: Building2
      },
    ],
  },
  {
    label: 'Serviços Especializados',
    icon: Settings,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    items: [
      { 
        title: 'Diagnóstico Organizacional', 
        desc: 'Análise externa, precisão técnica, parecer sobre problemas identificados.',
        icon: Search
      },
      { 
        title: 'Planejamento Estratégico', 
        desc: 'Diagnóstico + plano de ação + direcionamento específico.',
        icon: ClipboardList
      },
      { 
        title: 'Valuation para Clínicas e Hospitais', 
        desc: 'Avaliação estratégica de negócios veterinários, com apoio na estruturação da operação para valorização do ativo e suporte comercial na busca por compradores.',
        icon: DollarSign
      },
    ],
  },
  {
    label: 'Treinamentos',
    icon: GraduationCap,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    items: [
      { 
        title: 'Programa de Capacitação de Gestores', 
        desc: 'Visão gerencial, análise de cenários, gestão de equipe (reuniões semanais 1h30, online ou presencial).',
        icon: BookOpen
      },
      { 
        title: 'Programa de Capacitação de Equipe', 
        desc: 'Atendimento ao cliente, estratégias de vendas, comunicação assertiva.',
        icon: UserCheck
      },
    ],
  },
  {
    label: 'MentAll.Vet',
    icon: Heart,
    color: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/30',
    items: [
      { 
        title: 'Atendimento Individual de Fácil Acesso', 
        desc: 'A plataforma conta com psicólogos e psicanalistas especializados e empáticos às demandas e rotinas dos profissionais da área veterinária.',
        icon: Heart
      },
      { 
        title: 'MentAll.Vet para Empresas', 
        desc: 'Programa para clínicas e hospitais parceiros que desejam contribuir para o bem-estar e saúde mental de suas equipes e profissionais.',
        icon: Building2
      },
      { 
        title: 'Regularização NR-1', 
        desc: 'Programa dinâmico de regularização da NR-1 e avaliação de riscos psicossociais e soluções especializadas para clínicas e hospitais.',
        icon: ShieldCheck
      },
      { 
        title: 'Programas de Gestão de Pessoas', 
        desc: 'Programas especializados para desenvolvimento de equipes, lideranças e processos de recursos humanos para empresas.',
        icon: Users
      },
    ],
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const activeTab = tabs[active];

  return (
    <section id="servicos" className="py-24 md:py-36 bg-slate-900">
      <div ref={ref} className={`container mx-auto px-6 max-w-6xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">— Nossos Serviços —</span>
          <h2 className="section-title text-white">
            Soluções para o Mercado Veterinário
          </h2>
          <p className="text-slate-400 section-subtitle max-w-2xl mx-auto">
            Serviços especializados que impulsionam a gestão, o crescimento e o bem-estar no setor veterinário.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {tabs.map((tab, i) => {
            const TabIcon = tab.icon;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`group flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  active === i
                    ? `bg-slate-800 ${tab.color} border ${tab.borderColor} shadow-lg`
                    : 'bg-slate-800/40 text-slate-400 border border-transparent hover:bg-slate-800/70 hover:text-slate-200'
                }`}
              >
                <TabIcon size={16} className={`transition-colors duration-300 ${active === i ? tab.color : 'text-slate-500 group-hover:text-slate-300'}`} />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}{tab.label.includes('.') ? '' : ''}</span>
              </button>
            );
          })}
        </div>

        {/* Category indicator */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className={`w-10 h-10 rounded-lg ${activeTab.bgColor} flex items-center justify-center`}>
            <activeTab.icon size={20} className={activeTab.color} />
          </div>
          <div>
            <h3 className={`font-heading font-bold text-lg ${activeTab.color}`}>
              {activeTab.label}
            </h3>
            <p className="text-slate-500 text-xs">
              {activeTab.items.length} {activeTab.items.length === 1 ? 'serviço' : 'serviços'}
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {activeTab.items.map((item, j) => {
            const ItemIcon = item.icon;
            return (
              <div 
                key={`${active}-${j}`} 
                className={`group card-dark p-6 lg:p-7 animate-fade-in border-l-2 ${activeTab.borderColor} hover:border-l-4 transition-all duration-200`}
                style={{ animationDelay: `${j * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg ${activeTab.bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <ItemIcon size={18} className={activeTab.color} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-heading font-bold text-white text-base lg:text-lg leading-tight">
                        {item.title}
                      </h4>
                      <ChevronRight size={14} className="text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100" />
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom counter */}
        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-4">
            {tabs.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  active === i ? `w-8 ${tabs[i].color.replace('text-', 'bg-')}` : 'bg-slate-700 hover:bg-slate-600'
                }`}
                aria-label={`Categoria ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
