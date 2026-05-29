import { useState, FormEvent } from "react";
import { Mail, MapPin, Phone, Send, Check } from "lucide-react";

const SUBJECTS = [
  "Nouveau projet",
  "Devis & tarifs",
  "Partenariat",
  "Presse",
  "Autre",
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: SUBJECTS[0],
    message: "",
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Démo : pas de backend. On affiche une confirmation côté client.
    // Brancher ici un service d'envoi (Formspree, Resend, API maison...).
    setSent(true);
  };

  const inputClass =
    "w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/40 focus:bg-white/10 transition-colors";

  return (
    <main className="px-4 sm:px-6 pt-28 sm:pt-36 pb-24 max-w-6xl mx-auto">
      {/* Hero */}
      <div className="max-w-3xl mb-14 animate-fade-in-up">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-4">
          — CONTACT
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-white leading-[1.05] mb-6">
          Faisons{" "}
          <span className="font-serif italic text-white/80 font-normal">éclore</span> votre
          idée.
        </h1>
        <p className="text-white/70 text-base md:text-lg leading-relaxed">
          Décrivez-nous votre projet, votre lieu ou votre intuition. Nous revenons
          vers vous sous 48 heures ouvrées.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
        {/* Coordonnées */}
        <aside className="lg:col-span-2 flex flex-col gap-4">
          <a
            href="mailto:contact@ulycom.com"
            className="liquid-glass rounded-2xl p-6 flex items-center gap-4 hover:scale-[1.02] transition-transform"
          >
            <span className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
              <Mail className="w-5 h-5" />
            </span>
            <div className="min-w-0">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                Email
              </div>
              <div className="text-white text-sm truncate">contact@ulycom.com</div>
            </div>
          </a>

          <a
            href="tel:+33100000000"
            className="liquid-glass rounded-2xl p-6 flex items-center gap-4 hover:scale-[1.02] transition-transform"
          >
            <span className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
              <Phone className="w-5 h-5" />
            </span>
            <div className="min-w-0">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                Téléphone
              </div>
              <div className="text-white text-sm">+33 1 00 00 00 00</div>
            </div>
          </a>

          <div className="liquid-glass rounded-2xl p-6 flex items-center gap-4">
            <span className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
              <MapPin className="w-5 h-5" />
            </span>
            <div className="min-w-0">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                Atelier
              </div>
              <div className="text-white text-sm">Paris, France</div>
            </div>
          </div>
        </aside>

        {/* Formulaire */}
        <div className="lg:col-span-3 rounded-3xl liquid-glass-strong p-6 sm:p-8 lg:p-10">
          {sent ? (
            <div className="flex flex-col items-center text-center py-10 animate-fade-in-up">
              <span className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center text-white mb-6">
                <Check className="w-8 h-8" />
              </span>
              <h2 className="text-2xl font-sans font-medium text-white mb-3">
                Message envoyé !
              </h2>
              <p className="text-white/60 text-sm max-w-sm">
                Merci {form.name || ""}, nous avons bien reçu votre message et
                revenons vers vous très vite.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", subject: SUBJECTS[0], message: "" });
                }}
                className="mt-8 px-6 py-3 rounded-full liquid-glass text-white text-sm hover:scale-105 active:scale-95 transition-transform"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2"
                  >
                    Nom
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Votre nom"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="vous@exemple.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2"
                >
                  Sujet
                </label>
                <select
                  id="subject"
                  value={form.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s} className="bg-neutral-900 text-white">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Parlez-nous de votre projet…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="self-start inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-sm font-medium hover:scale-105 active:scale-95 transition-transform"
              >
                Envoyer le message
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
