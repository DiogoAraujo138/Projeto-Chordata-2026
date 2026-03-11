import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-chordata-navy/80 text-white shadow-lg hover:bg-chordata-navy transition-all duration-200 backdrop-blur"
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
