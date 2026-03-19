import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/555197622707"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white
      shadow-lg hover:bg-green-600 hover:scale-105 active:scale-100
      transition-all duration-200 group"
    aria-label="Fale conosco pelo WhatsApp"
  >
    <MessageCircle size={28} fill="white" className="transition-transform group-hover:rotate-6" />
    <span className="absolute right-[calc(100%+0.75rem)] bg-slate-900 text-white text-xs px-3 py-2 rounded-lg
      opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0
      transition-all duration-200 whitespace-nowrap pointer-events-none shadow-lg border border-slate-700">
      Fale conosco
    </span>
  </a>
);

export default WhatsAppButton;
