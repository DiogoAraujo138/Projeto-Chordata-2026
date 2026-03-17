import { useState, useEffect, useCallback } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Glaziete Pinto',
    role: 'Diretora do CPEA — Centro Profissionalizante de Estética Animal',
    text: 'O trabalho da Chordata trouxe uma visão estratégica que transformou a forma como gerenciamos nosso centro. Profissionalismo e resultados reais.',
  },
  {
    name: 'Wanessa Beheregaray',
    role: 'Integrar Vet — Doutora em Ciências Veterinárias',
    text: 'É uma empresa transparente, engajada no trabalho e aberta para parcerias. Ela propõe um projeto que valoriza as trocas e traz ferramentas que irão facilitar a gestão do negócio. A Chordata tem sido uma excelente parceira.',
  },
  {
    name: 'Gilson de Andrade',
    role: 'Representante Comercial — 24 anos de atuação no mercado',
    text: 'O profissional do futuro é o que auxilia seus colaboradores a atingirem seu melhor resultado!',
  },
  {
    name: 'Edison Ben Hur Garcia',
    role: 'Diretor — BioSul Importadora e Distribuidora Agropecuária',
    text: 'Estamos registrando nosso agradecimento à Chordata pela consultoria prestada. Foi de grande importância o trabalho e conhecimento que nos trouxe para seguirmos nossos planos com dedicação em cima do que foi diagnosticado e avaliado.',
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const { ref, isVisible } = useScrollAnimation();

  const next = useCallback(() => {
    setDirection('right');
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  }, []);

  const prev = useCallback(() => {
    setDirection('left');
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-20 md:py-32 bg-chordata-navy relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-chordata-teal/20 to-transparent" />

      <div ref={ref} className={`container mx-auto px-4 sm:px-6 max-w-4xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="section-label">— Depoimentos —</span>
          <h2 className="section-title text-white">
            O que nossos clientes e parceiros estão falando de nós
          </h2>
        </div>

        <div className="relative">
          <div className="glass-card p-8 md:p-12 text-center min-h-[280px] flex flex-col items-center justify-center">
            <Quote className="text-chordata-teal/25 mb-6" size={40} />
            <p
              className={`text-white/90 font-inter text-base sm:text-lg md:text-xl leading-relaxed mb-8 italic max-w-2xl ${
                direction === 'right' ? 'animate-fade-in-right' : 'animate-fade-in-left'
              }`}
              key={current}
            >
              “{testimonials[current].text}”
            </p>
            <div className="animate-fade-in" key={`name-${current}`}>
              <p className="font-sora font-bold text-white text-lg">{testimonials[current].name}</p>
              <p className="text-chordata-teal font-inter text-sm mt-0.5">{testimonials[current].role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 'right' : 'left');
                    setCurrent(i);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-chordata-teal w-8' : 'bg-white/20 w-2.5 hover:bg-white/40'}`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
