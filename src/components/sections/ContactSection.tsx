import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Globe, Linkedin, Instagram, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setLoading(true);
      // Simulating API call
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1200);
    }
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-chordata-navy relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-chordata-teal/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-chordata-teal/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className={`container mx-auto px-4 sm:px-6 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="section-label">— Contato —</span>
          <h2 className="section-title text-white">
            Vamos começar a sua transformação?
          </h2>
          <p className="text-white/55 section-subtitle max-w-2xl mx-auto">
            Se você é gestor de uma clínica ou hospital veterinário e quer reduzir custos, reter talentos, garantir conformidade jurídica e tomar decisões baseadas em dados, o Ecossistema Chordata é para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Form */}
          <div className="glass-card p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-12 animate-scale-in">
                <div className="w-16 h-16 rounded-full bg-chordata-teal/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-chordata-teal" size={32} />
                </div>
                <h3 className="font-sora font-bold text-white text-xl mb-2">Mensagem enviada!</h3>
                <p className="text-white/55 font-inter text-sm">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: 'name', type: 'text', placeholder: 'Seu nome', required: true },
                  { name: 'email', type: 'email', placeholder: 'Seu email', required: true },
                  { name: 'phone', type: 'tel', placeholder: 'Telefone (opcional)', required: false },
                ].map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={form[field.name as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 font-inter text-sm
                      focus:outline-none focus:border-chordata-teal/60 focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_hsla(180,50%,50%,0.1)]
                      transition-all duration-300"
                  />
                ))}
                <textarea
                  placeholder="Sua mensagem"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 font-inter text-sm
                    focus:outline-none focus:border-chordata-teal/60 focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_hsla(180,50%,50%,0.1)]
                    transition-all duration-300 resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-3.5 flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-chordata-navy/30 border-t-chordata-navy rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      Agendar uma Conversa Gratuita
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-5">
            {[
              { icon: Mail, href: 'mailto:contato@chordataconsultoria.com', text: 'contato@chordataconsultoria.com', isLink: true },
            ].map((item) => (
              <a key={item.text} href={item.href} className="flex items-center gap-4 text-white/75 hover:text-white transition-colors group">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-chordata-teal/10 group-hover:border-chordata-teal/30 transition-all duration-300">
                  <item.icon size={18} className="text-chordata-teal" />
                </div>
                <span className="font-inter text-sm">{item.text}</span>
              </a>
            ))}

            <div className="flex items-center gap-4 text-white/75">
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-chordata-teal" />
              </div>
              <div className="font-inter text-sm space-y-0.5">
                <p>Mikael Cattani: (51) 97622-7070</p>
                <p>Thales Altieri: (51) 91196-578</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-white/75">
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-chordata-teal" />
              </div>
              <span className="font-inter text-sm">Instituto Caldeira — Tv. São José, 455, Navegantes, Porto Alegre - RS</span>
            </div>

            <a href="https://chordataconsultoria.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/75 hover:text-white transition-colors group">
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-chordata-teal/10 group-hover:border-chordata-teal/30 transition-all duration-300">
                <Globe size={18} className="text-chordata-teal" />
              </div>
              <span className="font-inter text-sm">chordataconsultoria.com</span>
            </a>

            <div className="flex gap-3 pt-4">
              {[
                { icon: Linkedin, href: 'https://linkedin.com/company/chordata-consultoria', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://instagram.com/chordataconsultoria', label: 'Instagram' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50
                    hover:bg-chordata-teal/10 hover:border-chordata-teal/30 hover:text-chordata-teal
                    transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/35 font-inter text-sm">© 2025 Chordata Consultoria · Todos os direitos reservados</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
