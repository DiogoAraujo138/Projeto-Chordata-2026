import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5551976227070"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white
      shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:shadow-[0_6px_28px_rgba(34,197,94,0.5)]
      hover:bg-green-600 hover:scale-110 active:scale-100
      transition-all duration-300 ease-out group"
    aria-label="Fale conosco pelo WhatsApp"
  >
    <MessageCircle size={28} fill="white" className="transition-transform group-hover:rotate-12" />
    <span className="absolute right-[calc(100%+0.75rem)] bg-chordata-navy/95 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-xl
      opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0
      transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg border border-white/10">
      Fale conosco
    </span>
  </a>
);

export default WhatsAppButton;
