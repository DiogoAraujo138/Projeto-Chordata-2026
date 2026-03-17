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
      className={`fixed bottom-6 left-6 z-50 flex items-center justify-center w-11 h-11 rounded-lg
        bg-slate-800 text-slate-300 border border-slate-700
        shadow-lg hover:bg-slate-700 hover:text-white
        transition-all duration-200
        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={18} />
    </button>
  );
};

export default BackToTop;
