import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Propósito', href: '#proposito' },
  { label: 'Ecossistema', href: '#ecossistema' },
  { label: 'Método', href: '#metodo' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Resultados', href: '#impacto' },
  { label: 'Time', href: '#time' },
  { label: 'Contato', href: '#contato' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-chordata-navy/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-1 text-white">
          <span className="font-sora text-xl font-light tracking-wide">CHOR</span>
          <span className="font-sora text-xl font-bold">data</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="text-white/80 hover:text-chordata-teal text-sm font-inter transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('#contato')}
            className="bg-chordata-teal text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:brightness-110 transition"
          >
            Agendar Conversa
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-chordata-navy/98 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="text-white/80 hover:text-chordata-teal text-left py-2 font-inter transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleClick('#contato')}
              className="bg-chordata-teal text-primary-foreground px-4 py-3 rounded-lg text-sm font-semibold mt-2"
            >
              Agendar Conversa
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
