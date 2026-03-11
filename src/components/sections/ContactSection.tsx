import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Globe, Linkedin, Instagram } from 'lucide-react';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only validation
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-chordata-navy">
      <div ref={ref} className={`container mx-auto px-4 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="text-chordata-teal text-sm font-semibold tracking-[0.25em] uppercase font-inter mb-4 block">
            — Contato —
          </span>
          <h2 className="font-sora text-2xl md:text-4xl font-bold text-white mb-3">
            Vamos começar a sua transformação?
          </h2>
          <p className="text-white/60 font-inter max-w-2xl mx-auto">
            Se você é gestor de uma clínica ou hospital veterinário e quer reduzir custos, reter talentos, garantir conformidade jurídica e tomar decisões baseadas em dados, o Ecossistema Chordata é para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-chordata-teal/20 flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-chordata-teal" size={28} />
                </div>
                <h3 className="font-sora font-bold text-white text-xl mb-2">Mensagem enviada!</h3>
                <p className="text-white/60 font-inter text-sm">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-inter text-sm focus:outline-none focus:border-chordata-teal transition"
                />
                <input
                  type="email"
                  placeholder="Seu email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-inter text-sm focus:outline-none focus:border-chordata-teal transition"
                />
                <input
                  type="tel"
                  placeholder="Telefone (opcional)"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-inter text-sm focus:outline-none focus:border-chordata-teal transition"
                />
                <textarea
                  placeholder="Sua mensagem"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-inter text-sm focus:outline-none focus:border-chordata-teal transition resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-chordata-teal text-chordata-navy font-semibold py-3 rounded-xl hover:brightness-110 transition font-inter"
                >
                  Agendar uma Conversa Gratuita
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <a href="mailto:contato@chordataconsultoria.com" className="flex items-center gap-4 text-white/80 hover:text-chordata-teal transition group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-chordata-teal/10 transition">
                <Mail size={18} className="text-chordata-teal" />
              </div>
              <span className="font-inter text-sm">contato@chordataconsultoria.com</span>
            </a>

            <div className="flex items-center gap-4 text-white/80">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <Phone size={18} className="text-chordata-teal" />
              </div>
              <div className="font-inter text-sm">
                <p>Mikael Cattani: (51) 97622-7070</p>
                <p>Thales Altieri: (51) 91196-578</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-white/80">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <MapPin size={18} className="text-chordata-teal" />
              </div>
              <span className="font-inter text-sm">Instituto Caldeira — Tv. São José, 455, Navegantes, Porto Alegre - RS</span>
            </div>

            <a href="https://chordataconsultoria.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-chordata-teal transition group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-chordata-teal/10 transition">
                <Globe size={18} className="text-chordata-teal" />
              </div>
              <span className="font-inter text-sm">chordataconsultoria.com</span>
            </a>

            <div className="flex gap-3 pt-4">
              <a href="https://linkedin.com/company/chordata-consultoria" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-chordata-teal/10 hover:text-chordata-teal transition" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com/chordataconsultoria" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-chordata-teal/10 hover:text-chordata-teal transition" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 font-inter text-sm">© 2025 Chordata Consultoria · Todos os direitos reservados</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
