import { ChevronDown } from 'lucide-react';
import Logo from '@/components/Logo';

const HeroSection = () => {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-chordata-navy overflow-hidden">
      {/* Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="particle bg-chordata-teal/30"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-chordata-navy via-chordata-navy/90 to-chordata-royal/30" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-chordata-teal/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Logo image */}
        <div className="mb-8 flex justify-center animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
          <Logo variant="principal" size="hero" glow />
        </div>

        {/* Tagline */}
        <h1 className="font-sora text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          O Ecossistema Completo para{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-chordata-teal to-chordata-green">
            Transformar seu Negócio Veterinário
          </span>
        </h1>

        <p className="text-white/65 text-base sm:text-lg md:text-xl font-inter max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Do diagnóstico à transformação — somos o ecossistema completo para clínicas, hospitais e negócios do setor pet/vet.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <button
            onClick={() => handleScroll('#ecossistema')}
            className="btn-primary px-8 py-4 text-lg shadow-lg shadow-chordata-teal/20"
          >
            Conheça o Ecossistema ↓
          </button>
          <button
            onClick={() => handleScroll('#contato')}
            className="btn-outline px-8 py-4 text-lg"
          >
            Agendar Conversa
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 chevron-pulse">
        <ChevronDown size={32} className="text-white/50" />
      </div>
    </section>
  );
};

export default HeroSection;
