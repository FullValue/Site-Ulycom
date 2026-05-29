import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { SERVICES } from "../data/services";

export function Services() {
  const { ref, className } = useInView(0.05);

  return (
    <section id="services" className="py-20 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
      <div ref={ref as any} className={`text-center max-w-3xl mx-auto mb-14 sm:mb-20 ${className}`}>
        <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-4">
          — NOTRE CHAMP D'EXPERTISE
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-white leading-tight mb-6">
          Architectures botaniques façonnées par l'{" "}
          <span className="font-serif italic text-white/80 font-normal">intelligence artificielle</span>.
        </h2>
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
          Nous repoussons les limites du design biophilique en fusionnant l'ingénierie logicielle avancée et les motifs organiques de la nature.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              to={`/services/${service.slug}`}
              key={service.slug}
              className="liquid-glass p-7 sm:p-8 flex flex-col justify-between min-h-[18rem] rounded-2xl group hover:scale-[1.02] transition-transform duration-500"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-2xl font-sans font-medium text-white mb-3 tracking-tight">
                  {service.title}
                  <span className="font-serif italic text-white/80 font-normal block md:inline-block">
                    {service.serifAccent}
                  </span>
                </h3>

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
    </section>
  );
}
