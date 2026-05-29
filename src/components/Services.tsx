import React from "react";
import { useInView } from "../hooks/useInView";
import { ServiceItem } from "../types";
import { Compass, Cpu, Layers, Sparkles, Orbit, Leaf, ArrowRight } from "lucide-react";

const SERVICES_DATA: (ServiceItem & { icon: React.ComponentType<{ className?: string }> })[] = [
  {
    icon: Compass,
    title: "Sculpture Botanique ",
    serifAccent: "3D",
    description: "Conception de modèles floraux cinétiques générés par IA algorithmique, prêts pour l'impression sémantique ou l'intégration métavers.",
  },
  {
    icon: Sparkles,
    title: "Génération de croissance ",
    serifAccent: "Neurale",
    description: "Modélisation de structures vivantes dynamiques réagissant en temps réel à l'hygrométrie et aux stimuli sonores extérieurs.",
  },
  {
    icon: Layers,
    title: "Architecture ",
    serifAccent: "Bio-Spatiale",
    description: "Hybridation d'habitats physiques contemporains et d'écosystèmes végétaux autonomes pour espaces végétalisés intelligents.",
  },
  {
    icon: Cpu,
    title: "Calcul de micro-climat ",
    serifAccent: "Prédictif",
    description: "Analyse automatisée de l'exposition lumineuse et du débit d'oxygène par réseau de neurones convolutifs.",
  },
  {
    icon: Orbit,
    title: "Simulations ",
    serifAccent: "Environnementales",
    description: "Modèles prédictifs reproduisant l'interaction symbiotique des essences de flore avec les matériaux bruts environnants.",
  },
  {
    icon: Leaf,
    title: "Systèmes de soin ",
    serifAccent: "Autonome",
    description: "Intégration d'agents intelligents gérant l'irrigation, la nutrition racinaire et la purification sans intervention humaine.",
  }
];

export function Services() {
  const { ref, className } = useInView(0.05);

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <div ref={ref as any} className={`text-center max-w-3xl mx-auto mb-20 ${className}`}>
        <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-4">
          — NOTRE CHAMP D'EXPERTISE
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-white leading-tight mb-6">
          Architectures botaniques façonnées par l'{" "}
          <span className="font-serif italic text-white/80 font-normal">intelligence artificielle</span>.
        </h2>
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
          Nous repoussons les limites du design biophilique en fusionnant l'ingénierie logicielle avancée et les motifs organiques de la nature.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_DATA.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="liquid-glass p-8 flex flex-col justify-between h-80 rounded-2xl group hover:scale-[1.02] transition-transform duration-500 cursor-default"
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

              <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-white/50 uppercase group-hover:text-white transition-colors">
                <span>EXPLORER LA NOTE TECHNIQUE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
