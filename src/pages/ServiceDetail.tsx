import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SERVICES, getServiceBySlug } from "../data/services";

export function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  // Slug inconnu → on renvoie vers l'index des services.
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;
  const index = SERVICES.findIndex((s) => s.slug === service.slug);
  const prev = SERVICES[(index - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(index + 1) % SERVICES.length];

  return (
    <main className="px-4 sm:px-6 pt-28 sm:pt-36 pb-24 max-w-6xl mx-auto">
      {/* Fil d'Ariane / retour */}
      <Link
        to="/services"
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors mb-10"
      >
        <ArrowLeft className="w-4 h-4" />
        Tous les services
      </Link>

      {/* Hero du service */}
      <div className="animate-fade-in-up">
        <div className="w-16 h-16 rounded-2xl liquid-glass flex items-center justify-center text-white mb-8">
          <Icon className="w-8 h-8" />
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-4">
          — {service.tagline}
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-white leading-[1.05] mb-8">
          {service.title}
          <span className="font-serif italic text-white/80 font-normal">
            {service.serifAccent}
          </span>
        </h1>
        <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl font-light">
          {service.intro}
        </p>
      </div>

      {/* Chiffres clés */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-14">
        {service.stats.map((stat, i) => (
          <div
            key={i}
            className="liquid-glass rounded-2xl p-6 sm:p-8 text-center sm:text-left"
          >
            <div className="text-4xl sm:text-5xl font-sans font-semibold tracking-tight text-white mb-2">
              {stat.value}
            </div>
            <div className="text-white/50 text-xs font-mono uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Bénéfices */}
      <section className="mt-20">
        <h2 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight mb-10">
          Ce que nous{" "}
          <span className="font-serif italic text-white/80 font-normal">apportons</span>.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {service.features.map((feature, i) => (
            <div
              key={i}
              className="liquid-glass rounded-2xl p-7 sm:p-8 flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-500"
            >
              <span className="font-mono text-xs text-white/40">
                0{i + 1}
              </span>
              <h3 className="text-xl font-sans font-medium text-white tracking-tight">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Livrables */}
      <section className="mt-20 rounded-3xl liquid-glass-strong p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-4">
              — CE QUE VOUS RECEVEZ
            </p>
            <h2 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight">
              Des livrables{" "}
              <span className="font-serif italic text-white/80 font-normal">concrets</span>.
            </h2>
          </div>
          <ul className="space-y-4">
            {service.deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/85 text-sm sm:text-base">
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-sans font-medium text-white tracking-tight mb-6 leading-tight">
          Prêt à faire{" "}
          <span className="font-serif italic text-white/80 font-normal">éclore</span> ce projet ?
        </h2>
        <p className="text-white/60 mb-8 text-sm md:text-base">
          Discutons de votre besoin et construisons ensemble une solution sur mesure.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-sm font-medium hover:scale-105 active:scale-95 transition-transform"
        >
          Nous contacter
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Navigation prev / next */}
      <nav className="mt-20 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          to={`/services/${prev.slug}`}
          className="liquid-glass rounded-2xl p-6 flex items-center gap-3 hover:scale-[1.02] transition-transform group"
        >
          <ArrowLeft className="w-5 h-5 text-white/60 group-hover:text-white transition-colors shrink-0" />
          <div className="text-left">
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
              Précédent
            </div>
            <div className="text-white font-medium text-sm">
              {prev.title}
              {prev.serifAccent}
            </div>
          </div>
        </Link>
        <Link
          to={`/services/${next.slug}`}
          className="liquid-glass rounded-2xl p-6 flex items-center justify-end gap-3 hover:scale-[1.02] transition-transform group"
        >
          <div className="text-right">
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
              Suivant
            </div>
            <div className="text-white font-medium text-sm">
              {next.title}
              {next.serifAccent}
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors shrink-0" />
        </Link>
      </nav>
    </main>
  );
}
