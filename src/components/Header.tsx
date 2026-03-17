import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';

const navItems = [
  { label: 'Propósito', href: '#proposito' },
  { label: 'Ecossistema', href: '#ecossistema' },
  { label: 'Método', href: '#metodo' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Resultados', href: '#atuacao' },
  { label: 'Time', href: '#time' },
  { label: 'Contato', href: '#contato' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-chordata-navy/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3 md:py-4">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center group"
          aria-label="Voltar ao topo"
        >
          <Logo
            variant="principal"
            size="sm"
            className="md:hidden group-hover:drop-shadow-[0_0_8px_hsla(180,50%,50%,0.4)] transition-all duration-300"
          />
          <Logo
            variant="principal"
            size="md"
            className="hidden md:inline-flex group-hover:drop-shadow-[0_0_8px_hsla(180,50%,50%,0.4)] transition-all duration-300"
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="relative text-white/75 hover:text-white text-sm font-inter font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/5 group"
            >
              {item.label}
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-chordata-teal rounded-full transition-all duration-300 group-hover:w-4/5" />
            </button>
          ))}
          <button
            onClick={() => handleClick('#contato')}
            className="btn-primary ml-3 px-5 py-2.5 text-sm"
          >
            Agendar Conversa
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <div className="relative w-6 h-6">
            <Menu
              size={24}
              className={`absolute inset-0 transition-all duration-300 ${
                mobileOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
              }`}
            />
            <X
              size={24}
              className={`absolute inset-0 transition-all duration-300 ${
                mobileOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-chordata-navy/98 backdrop-blur-xl border-t border-white/10">
          <nav className="flex flex-col px-4 sm:px-6 py-4 gap-1">
            {navItems.map((item, i) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="text-white/80 hover:text-white hover:bg-white/5 text-left py-3 px-3 font-inter rounded-xl transition-all duration-200"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleClick('#contato')}
              className="btn-primary px-4 py-3 text-sm mt-3"
            >
              Agendar Conversa
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
