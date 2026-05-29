import React from "react";
import { useInView } from "../hooks/useInView";
import { ProcessStep } from "../types";
import { Award, Compass, Cpu, Leaf } from "lucide-react";

const STEPS: (ProcessStep & { icon: React.ComponentType<{ className?: string }> })[] = [
  {
    num: "01",
    icon: Compass,
    title: "Synthèse & ",
    serifAccent: "Cadrage",
    description: "Cartographie sémantique des essences florales de votre cahier des charges et calcul de réfraction des matières.",
  },
  {
    num: "02",
    icon: Cpu,
    title: "Modélisation ",
    serifAccent: "Neurale",
    description: "Génération de géométries complexes par apprentissage profond et simulation thermique de croissance.",
  },
  {
    num: "03",
    icon: Leaf,
    title: "Floraison ",
    serifAccent: "Algorithmique",
    description: "Éclosion procédurale des structures modélisées et optimisation des micro-détails sous contraintes mécaniques.",
  },
  {
    num: "04",
    icon: Award,
    title: "Déploiement ",
    serifAccent: "Symbiotique",
    description: "Insertion finale dans les architectures réelles ou virtuelles avec surveillance adaptative permanente.",
  }
];

export function Process() {
  const { ref, className } = useInView(0.05);

  return (
    <section id="process" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div ref={ref as any} className={`text-center max-w-2xl mx-auto mb-20 ${className}`}>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-4">
            — METHODOLOGIE DE CONCEPTION
          </p>
          <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-white leading-tight mb-6">
            L'épanouissement guidé par la{" "}
            <span className="font-serif italic text-white/80 font-normal">rigueur mathématique</span>.
          </h2>
          <p className="text-white/60 text-base">
            De la graine sémantique à l'intégration d'un écosystème floral complexe, notre protocole garantit une exécution harmonieuse, durable et résiliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div
                key={index}
                className="liquid-glass p-8 flex flex-col justify-between h-84 rounded-2xl relative hover:scale-[1.02] transition-transform duration-500Group"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="font-mono text-xs font-semibold text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      Étape {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70">
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-sans font-medium text-white mb-4 leading-tight tracking-tight">
                    {step.title}
                    <span className="font-serif italic font-normal text-white/80 block">
                      {step.serifAccent}
                    </span>
                  </h3>
                </div>

                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
