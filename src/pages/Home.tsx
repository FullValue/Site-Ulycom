import {
  Sparkles,
  Download,
  Wand2,
  BookOpen,
  ArrowRight,
  Twitter,
  Linkedin,
  Instagram,
  Plus,
  Flower2,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Services } from "../components/Services";
import { Projects } from "../components/Projects";
import { Process } from "../components/Process";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { Pricing } from "../components/Pricing";
import { PartnerCTA } from "../components/PartnerCTA";

export function Home() {
  return (
    <>
      {/* ==================== HERO (Duo Panel) ==================== */}
      <div className="min-h-screen w-full flex flex-col lg:flex-row p-4 lg:p-6 gap-6 pt-24 lg:pt-24">
        {/* ==================== PANNEAU GAUCHE ==================== */}
        <section className="relative flex-1 lg:w-[52%] min-h-[calc(100vh-7rem)] flex flex-col rounded-3xl liquid-glass-strong p-6 md:p-8 lg:p-10">
          {/* Contenu central du hero */}
          <div className="flex-1 flex flex-col justify-center items-start text-left max-w-xl py-8">
            {/* Grand logo */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl liquid-glass flex items-center justify-center mb-8 hover:rotate-12 transition-transform duration-500">
              <Flower2 className="w-10 h-10 sm:w-12 sm:h-12 text-white/90" />
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-medium tracking-[-0.05em] text-white leading-[1.05] mb-8">
              Réinventer l'
              <br />
              <span className="font-serif italic font-normal text-white/80">
                esprit d'Ulycom
              </span>
            </h1>

            {/* Pills */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {["Galerie artistique", "Génération IA", "Structures 3D"].map(
                (pill, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 text-xs font-sans text-white/80 rounded-full liquid-glass hover:scale-105 transition-transform"
                  >
                    {pill}
                  </div>
                )
              )}
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full liquid-glass-strong hover:scale-105 active:scale-95 transition-all text-sm font-medium text-white cursor-pointer select-none"
            >
              <span>Explorer</span>
              <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Download className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>

          {/* Citation visionnaire */}
          <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-3">
            <p className="text-[10px] tracking-widest uppercase text-white/50 font-mono">
              DESIGN VISIONNAIRE
            </p>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-sans">
              “Nous avons imaginé un{" "}
              <span className="font-serif italic text-white/80">royaume</span> sans{" "}
              <span className="font-serif italic text-white/80">fin</span>.”
            </p>

            <div className="flex items-center gap-4 mt-2">
              <div className="h-[1px] flex-1 bg-white/10" />
              <span className="font-mono text-[9px] tracking-widest text-[#9c9c9c] uppercase shrink-0">
                MARCUS AURELIO
              </span>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>
          </div>
        </section>

        {/* ==================== PANNEAU DROIT ==================== */}
        <section className="hidden lg:flex lg:w-[48%] flex-col gap-6">
          {/* Barre du haut */}
          <div className="flex justify-between items-center w-full shrink-0">
            <div className="flex items-center gap-4 py-2.5 px-5 rounded-full liquid-glass">
              <div className="flex items-center gap-3">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-white/80 hover:scale-105 transition-all"
                  aria-label="Profil Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-white/80 hover:scale-105 transition-all"
                  aria-label="Profil LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-white/80 hover:scale-105 transition-all"
                  aria-label="Profil Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
              <ArrowRight className="w-4 h-4 text-white/60 animate-pulse" />
            </div>

            <Link
              to="/services"
              className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center hover:scale-105 active:scale-95 transition-transform text-white/90 cursor-pointer"
              aria-label="Voir les services"
            >
              <Sparkles className="w-5 h-5" />
            </Link>
          </div>

          {/* Carte écosystème */}
          <div className="w-full flex justify-end">
            <div className="w-56 p-5 rounded-2xl liquid-glass text-left flex flex-col gap-2 hover:scale-[1.02] transition-transform">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/50">
                — BAC À SABLE
              </h4>
              <p className="text-sm font-medium text-white">
                Entrez dans notre écosystème
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                Connectez les paramètres de votre espace de travail pour
                alimenter le moteur de croissance neuronale autonome.
              </p>
            </div>
          </div>

          {/* Cartes de présentation */}
          <div className="mt-auto p-4 rounded-[2.5rem] liquid-glass flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <Link
                to="/services/microclimat-predictif"
                className="p-5 rounded-3xl liquid-glass flex flex-col items-start text-left gap-4 hover:scale-[1.02] transition-transform cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <Wand2 className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-sans font-medium text-sm text-white">
                    Traitement
                  </h5>
                  <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                    Analyse des métriques de bio-géométrie sans aucune latence.
                  </p>
                </div>
              </Link>

              <Link
                to="/services"
                className="p-5 rounded-3xl liquid-glass flex flex-col items-start text-left gap-4 hover:scale-[1.02] transition-transform cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-sans font-medium text-sm text-white">
                    Archive de croissance
                  </h5>
                  <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                    Journaux historiques des ébauches d'architecture florale
                    numérique.
                  </p>
                </div>
              </Link>
            </div>

            <Link
              to="/services/sculpture-botanique-3d"
              className="p-4 rounded-3xl liquid-glass flex items-center gap-4 text-left hover:scale-[1.01] transition-transform cursor-pointer"
            >
              <div className="w-24 h-16 rounded-xl overflow-hidden bg-white/5 flex-shrink-0 relative border border-white/10">
                <img
                  src="https://picsum.photos/seed/ulycom-plant/300/200"
                  alt="Aperçu Sculpture végétale avancée"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-transparent" />
              </div>

              <div className="flex-1">
                <h5 className="font-sans font-medium text-xs text-white">
                  Sculpture végétale avancée
                </h5>
                <p className="text-[10px] text-white/60 mt-0.5 leading-relaxed">
                  Des nœuds neuronaux génératifs façonnent des designs botaniques
                  sur mesure.
                </p>
              </div>

              <span className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all shrink-0">
                <Plus className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </section>
      </div>

      {/* ==================== SECTIONS ==================== */}
      <div className="bg-gradient-to-b from-transparent via-black/40 to-black/90 relative z-15">
        <Services />
        <Projects />
        <Process />
        <TestimonialCarousel />
        <Pricing />
        <PartnerCTA />
      </div>
    </>
  );
}
