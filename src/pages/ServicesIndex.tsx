import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SERVICES } from "../data/services";

export function ServicesIndex() {
  return (
    <main className="px-4 sm:px-6 pt-28 sm:pt-36 pb-24 max-w-7xl mx-auto">
      {/* En-tête */}
      <div className="max-w-3xl mb-14 sm:mb-20 animate-fade-in-up">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-4">
          — NOS SERVICES
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-white leading-[1.05] mb-6">
          Six expertises au service du{" "}
          <span className="font-serif italic text-white/80 font-normal">vivant augmenté</span>.
        </h1>
        <p className="text-white/60 text-base md:text-lg leading-relaxed">
          De la sculpture générative aux écosystèmes autonomes, chaque service
          d'Ulycom fusionne ingénierie de pointe et intelligence du vivant. Explorez
          le détail de chaque expertise.
        </p>
      </div>

      {/* Grille services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              to={`/services/${service.slug}`}
              key={service.slug}
              className="liquid-glass p-7 sm:p-8 flex flex-col justify-between min-h-[19rem] rounded-2xl group hover:scale-[1.02] transition-transform duration-500"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-sans font-medium text-white mb-3 tracking-tight">
                  {service.title}
                  <span className="font-serif italic text-white/80 font-normal block md:inline-block">
                    {service.serifAccent}
                  </span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-white/50 uppercase group-hover:text-white transition-colors mt-6">
                <span>DÉCOUVRIR LE SERVICE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* CTA bas de page */}
      <div className="mt-16 sm:mt-20 rounded-3xl liquid-glass-strong p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight mb-2">
            Un projet en tête ?
          </h3>
          <p className="text-white/60 text-sm md:text-base max-w-md">
            Parlons de votre écosystème. Nous concevons des solutions sur mesure.
          </p>
        </div>
        <Link
          to="/contact"
          className="shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-black text-sm font-medium hover:scale-105 active:scale-95 transition-transform"
        >
          Démarrer un projet
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}
