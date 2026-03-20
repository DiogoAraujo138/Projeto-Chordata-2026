import { ChevronDown } from 'lucide-react';
import Logo from '@/components/Logo';

const HeroSection = () => {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-10 flex justify-center opacity-0 animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
          <Logo variant="principal" size="hero" glow />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-blue-400 text-xs sm:text-sm font-medium tracking-wide">5 soluções · 1 ecossistema · Transformação completa</span>
        </div>

        {/* Heading */}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          O Ecossistema que{' '}
          <span className="text-blue-400">
            Transforma Negócios Veterinários
          </span>
        </h1>

        <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Consultoria, dados, saúde mental, conformidade jurídica e conexão — tudo integrado para levar sua clínica, hospital ou empresa veterinária ao próximo nível.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <button
            onClick={() => handleScroll('#ecossistema')}
            className="btn-primary px-8 py-4 text-base"
          >
            Conheça o Ecossistema ↓
          </button>
          <button
            onClick={() => handleScroll('#contato')}
            className="btn-outline-light px-8 py-4 text-base"
          >
            Agendar Conversa
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 chevron-pulse">
        <ChevronDown size={28} className="text-slate-500" />
      </div>
    </section>
  );
};

export default HeroSection;
