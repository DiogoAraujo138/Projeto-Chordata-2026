import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 left-6 z-50 flex items-center justify-center w-12 h-12 rounded-full
        bg-chordata-navy/80 backdrop-blur-sm text-white border border-white/10
        shadow-lg hover:bg-chordata-navy hover:border-white/20 hover:scale-110
        transition-all duration-300 ease-out
        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
