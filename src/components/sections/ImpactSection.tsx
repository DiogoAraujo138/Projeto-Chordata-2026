import AnimatedCounter from '@/components/AnimatedCounter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ImpactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="impacto" className="py-20 md:py-32 bg-chordata-navy">
      <div ref={ref} className={`container mx-auto px-4 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="text-chordata-teal text-sm font-semibold tracking-[0.25em] uppercase font-inter mb-4 block">
            — Nossos Números —
          </span>
          <h2 className="font-sora text-2xl md:text-4xl font-bold text-white">
            Impacto que nosso trabalho já gerou
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter target={40} prefix="+" label="Projetos Realizados" />
          <AnimatedCounter target={300} prefix="+" label="Pessoas Envolvidas" />
          <AnimatedCounter target={100} prefix="+" label="Colaboradores Capacitados" />
          <AnimatedCounter target={5} label="Estados Atendidos" />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
