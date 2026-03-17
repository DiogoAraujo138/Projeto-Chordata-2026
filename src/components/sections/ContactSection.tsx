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
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1200);
    }
  };

  return (
    <section id="contato" className="py-24 md:py-36 bg-slate-900">
      <div ref={ref} className={`container mx-auto px-6 max-w-5xl scroll-fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <span className="section-label">— Contato —</span>
          <h2 className="section-title text-white">
            Vamos começar a sua transformação?
          </h2>
          <p className="text-slate-400 section-subtitle max-w-2xl mx-auto">
            Se você é gestor de uma clínica ou hospital veterinário e quer reduzir custos, reter talentos, garantir conformidade jurídica e tomar decisões baseadas em dados, o Ecossistema Chordata é para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <div className="card-dark p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-12 animate-scale-in">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-blue-500" size={28} />
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-2">Mensagem enviada!</h3>
                <p className="text-slate-400 text-sm">Entraremos em contato em breve.</p>
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
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3.5 text-white placeholder:text-slate-500 text-sm
                      focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20
                      transition-all duration-200"
                  />
                ))}
                <textarea
                  placeholder="Sua mensagem"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3.5 text-white placeholder:text-slate-500 text-sm
                    focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20
                    transition-all duration-200 resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-3.5 flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
              <a key={item.text} href={item.href} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-11 h-11 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 group-hover:border-blue-500/30 transition-colors duration-200">
                  <item.icon size={18} className="text-blue-400" />
                </div>
                <span className="text-sm">{item.text}</span>
              </a>
            ))}

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-11 h-11 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-blue-400" />
              </div>
              <div className="text-sm space-y-0.5">
                <p>Mikael Cattani: (51) 97622-7070</p>
                <p>Thales Altieri: (51) 91196-578</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-11 h-11 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-blue-400" />
              </div>
              <span className="text-sm">Instituto Caldeira — Tv. São José, 455, Navegantes, Porto Alegre - RS</span>
            </div>

            <a href="https://chordataconsultoria.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
              <div className="w-11 h-11 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 group-hover:border-blue-500/30 transition-colors duration-200">
                <Globe size={18} className="text-blue-400" />
              </div>
              <span className="text-sm">chordataconsultoria.com</span>
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
                  className="w-11 h-11 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400
                    hover:border-blue-500/30 hover:text-blue-400
                    transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">© 2025 Chordata Consultoria · Todos os direitos reservados</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
