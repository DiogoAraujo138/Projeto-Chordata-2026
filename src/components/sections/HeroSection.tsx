import { ChevronDown } from 'lucide-react';
import chordataLogo from '@/assets/logos/chordata-principal.png';

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

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo image */}
        <div className="mb-8 flex justify-center">
          <img src={chordataLogo} alt="CHORdata - Soluções em Negócios Veterinários" className="h-16 md:h-20 w-auto" />
        </div>

        {/* Tagline */}
        <h1 className="font-sora text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          O Ecossistema Completo para{' '}
          <span className="text-chordata-teal">Transformar seu Negócio Veterinário</span>
        </h1>

        <p className="text-white/70 text-lg md:text-xl font-inter max-w-2xl mx-auto mb-10 leading-relaxed">
          Do diagnóstico à transformação — somos o ecossistema completo para clínicas, hospitais e negócios do setor pet/vet.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleScroll('#ecossistema')}
            className="bg-chordata-teal text-chordata-navy font-semibold px-8 py-4 rounded-xl text-lg hover:brightness-110 transition-all shadow-lg shadow-chordata-teal/20"
          >
            Conheça o Ecossistema ↓
          </button>
          <button
            onClick={() => handleScroll('#contato')}
            className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-all"
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
