import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5551976227070"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-200 group"
    aria-label="Fale conosco pelo WhatsApp"
  >
    <MessageCircle size={28} fill="white" />
    <span className="absolute right-16 bg-chordata-navy text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Fale conosco
    </span>
  </a>
);

export default WhatsAppButton;
