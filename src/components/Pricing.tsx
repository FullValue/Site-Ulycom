import React from "react";
import { useInView } from "../hooks/useInView";
import { Check, Shield } from "lucide-react";

export function Pricing() {
  const { ref, className } = useInView(0.05);

  const handleCTA = () => {
    alert("Démarrage du processus de souscription Bloom AI. Redirection vers la passerelle sécurisée intégrée...");
  };

  return (
    <section id="pricing" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Intro text column */}
        <div ref={ref as any} className={`lg:col-span-4 ${className}`}>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-4">
            — ABONNEMENTS ET INFRASTRUCTURES
          </p>
          <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-white leading-tight mb-6">
            Votre incubateur de design floral à la{" "}
            <span className="font-serif italic text-white/80 font-normal">demande</span>.
          </h2>
          <p className="text-white/60 mb-8 text-sm md:text-base leading-relaxed">
            Profitez de ressources de calculs et d'algorithmes de modélisation haut de gamme sans coûts additionnels. Des livraisons de rendus constants pour asseoir vos projets.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-white/80 font-medium">
              <Shield className="w-5 h-5 text-white/40 shrink-0" />
              <span>Garantie de livraison sous 48h</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/80 font-medium">
              <Shield className="w-5 h-5 text-white/40 shrink-0" />
              <span>Modèles CAO et droits exclusifs</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="lg:col-span-8 flex flex-col md:flex-row gap-8 w-full max-w-4xl mx-auto justify-end">
          
          {/* Card 1: Low-Alpha Glass */}
          <div className="flex-1 p-8 md:p-10 rounded-2xl liquid-glass flex flex-col justify-between hover:scale-[1.015] transition-transform duration-500">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-sans font-medium text-white mb-1">Seed Growth</h3>
                  <p className="text-white/40 text-[10px] font-mono uppercase tracking-wider">Créateurs & Studios</p>
                </div>
              </div>

              <p className="text-white/70 text-xs md:text-sm mb-6 leading-relaxed">
                Idéal pour les designers d'intérieurs et agences cherchant à enrichir leurs présentations architecturales.
              </p>

              <div className="mb-8">
                <span className="text-4xl font-sans font-semibold tracking-tight text-white">4 500 €</span>
                <span className="text-white/60 text-sm font-light"> / mois</span>
              </div>

              <div className="border-t border-white/10 pt-6 mb-8 space-y-3.5">
                {[
                  "Un rendu de structure 3D simultané",
                  "Mise à jour sous 48 heures ouvrées",
                  "Modifications illimitées de densité",
                  "Support technique prioritaire par Slack",
                  "Fichiers CAO (.obj, .fbx, .max)",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-white/80">
                    <Check className="w-4 h-4 text-white/50 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={handleCTA}
              className="w-full py-3.5 px-6 rounded-full liquid-glass-strong text-xs uppercase font-mono tracking-widest text-white hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              DÉMARRER LE DESSIN
            </button>
          </div>

          {/* Card 2: Heavy Strong Glass (Featured Plan) */}
          <div className="flex-1 p-8 md:p-10 rounded-2xl liquid-glass-strong flex flex-col justify-between border-t border-white/20 hover:scale-[1.015] transition-transform duration-500 relative">
            
            {/* Specular glowing badge */}
            <div className="absolute top-4 right-4 bg-white/15 text-white font-mono text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-white/20">
              POPULAIRE
            </div>

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-sans font-medium text-white mb-1">Eden Universe</h3>
                  <p className="text-white/50 text-[10px] font-mono uppercase tracking-wider">Entreprises & Espaces</p>
                </div>
              </div>

              <p className="text-white/70 text-xs md:text-sm mb-6 leading-relaxed">
                Notre plan élite conçu pour les constructeurs intégrant des jardins d'IA immersifs de grande envergure.
              </p>

              <div className="mb-8">
                <span className="text-4xl font-sans font-semibold tracking-tight text-white">7 900 €</span>
                <span className="text-white/60 text-sm font-light"> / mois</span>
              </div>

              <div className="border-t border-white/10 pt-6 mb-8 space-y-3.5">
                {[
                  "Rendus illimités complexes",
                  "Génération d'actifs temps réel (WebGL)",
                  "Intégration et API sémantique",
                  "Accompagnement d'un architecte senior",
                  "Licences de déploiements commerciaux",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-white/95">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={handleCTA}
              className="w-full py-3.5 px-6 rounded-full bg-white text-black hover:bg-white/90 text-xs uppercase font-mono tracking-widest hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              ÉVALUATION D'EDEN
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
