import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ShieldCheck, TrendingUp, Layers, Target, HeartHandshake, BarChart3 } from 'lucide-react';

const differentials = [
  {
    icon: Layers,
    title: 'Ecossistema Integrado',
    desc: 'Cinco soluções que se potencializam mutuamente — consultoria, analytics, saúde mental, conformidade jurídica e eventos — em uma plataforma única.',
  },
  {
    icon: Target,
    title: 'Especialização Setorial',
    desc: 'Foco exclusivo no mercado veterinário e pet. Entendemos a complexidade da gestão que vai muito além da medicina veterinária.',
  },
  {
    icon: BarChart3,
    title: 'Decisões Baseadas em Dados',
    desc: 'Ferramentas de Business Intelligence e dashboards que transformam dados complexos em insights acionáveis para o seu negócio.',
  },
  {
    icon: HeartHandshake,
    title: 'Cuidado com Pessoas',
    desc: 'A única empresa do setor com atendimento de saúde mental integrado — porque equipes saudáveis constroem negócios sustentáveis.',
  },
  {
    icon: ShieldCheck,
    title: 'Conformidade e Segurança',
    desc: 'Assinatura eletrônica e conformidade jurídica digital para garantir que seu negócio opere dentro da lei, com rastreabilidade e segurança.',
  },
  {
    icon: TrendingUp,
    title: 'Visão Integrada de Crescimento',
    desc: 'Do diagnóstico à execução: processos, pessoas e planejamento trabalhados em conjunto para resultados reais e mensuráveis.',
  },
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-36 bg-slate-900">
      <div ref={ref} className={`container mx-auto px-6 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-6">
          <span className="section-label">— Por que Chordata? —</span>
          <h2 className="section-title text-white mb-4">
            Gerenciar uma clínica ou hospital veterinário vai muito além da medicina.
          </h2>
          <p className="text-slate-400 section-subtitle max-w-3xl mx-auto">
            Gestão financeira, retenção de talentos, conformidade jurídica, saúde mental da equipe, 
            processos operacionais e tomada de decisão estratégica — são desafios que exigem uma abordagem integrada. 
            É por isso que o Ecossistema Chordata existe.
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14 stagger-children ${isVisible ? 'visible' : ''}`}>
          {differentials.map((d, i) => (
            <div
              key={i}
              className="card-dark p-6 group cursor-default hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors duration-200">
                  <d.icon className="text-blue-400" size={22} />
                </div>
                <div>
                  <h3 className="text-white font-heading font-semibold text-base mb-1.5">{d.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <p className="text-blue-400 text-sm font-medium">
              Cada solução se potencializa com as outras — essa é a vantagem competitiva do ecossistema.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
