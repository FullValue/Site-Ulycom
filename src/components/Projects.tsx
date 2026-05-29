import React from "react";
import { useInView } from "../hooks/useInView";
import { Project } from "../types";

const PROJECTS_DATA: Project[] = [
  {
    id: "01",
    name: "Structure 09 — Onyx & ",
    serifAccent: "Fougères",
    tagline: "Scénographie Interactive & Rétroaction",
    description: "Installation cinétique végétale intégrant un réseau neuronal autonome. Les fougères réagissent au passage des utilisateurs grâce à des capteurs sensitifs discrets intégrés aux socles de pierre brute.",
    image: "https://picsum.photos/seed/bloom-p1/1200/680",
    client: "Chambre Syndicale du Design",
  },
  {
    id: "02",
    name: "Archived Botanic — Curation d' ",
    serifAccent: "Essences Rare",
    tagline: "Atlas Numérique & Indexation Vectorielle",
    description: "Développement d'une bibliothèque sémantique interactive archivigénique. Recherche morphologique instantanée permettant aux restaurateurs d'étudier l'évolution géométrique des espèces florales protégées.",
    image: "https://picsum.photos/seed/bloom-p2/1200/680",
    client: "Muséum National d'Histoire Naturelle",
  },
  {
    id: "03",
    name: "Chrysanthemum — Symbiose ",
    serifAccent: "Neurale",
    tagline: "Dôme Bioclimatique & Modèles Génératifs",
    description: "Conception architecturale d'un pavillon à croissance contrôlée. Le toit translucide interagit avec des algorithmes sémantiques qui orientent l'ensoleillement optimal des espèces végétales rares.",
    image: "https://picsum.photos/seed/bloom-p3/1200/680",
    client: "Espaces Biosphères de demain",
  },
];

export function Projects() {
  return (
    <section id="work" className="py-24 px-6 max-w-[1240px] mx-auto overflow-hidden relative z-10">
      <div className="mb-20">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-4">
          — ARCHIVES ET REALISATIONS
        </p>
        <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-white leading-none">
          Des structures nées pour{" "}
          <span className="font-serif italic text-white/80 font-normal">redéfinir l'espace</span>.
        </h2>
      </div>

      <div className="flex flex-col gap-28">
        {PROJECTS_DATA.map((project, index) => {
          return <ProjectRow key={project.id} project={project} index={index} />;
        })}
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number; key?: string }) {
  const { ref, className } = useInView(0.1);

  return (
    <div 
      ref={ref as any}
      className={`flex flex-col gap-8 transition-all duration-1000 ${className}`}
    >
      {/* Visual Image container with subtle depth shadow */}
      <div className="relative group w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
        <img
          src={project.image}
          alt={project.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-[1.015] transition-transform duration-[1200ms] ease-out pointer-events-none"
        />
        <div className="absolute inset-0 bg-transparent" />
        
        {/* Absolute floating project badge */}
        <div className="absolute top-6 left-6 font-mono text-[9px] text-white bg-black/60 backdrop-blur-md px-4 py-2 rounded-full uppercase tracking-widest border border-white/10">
          PROJET {project.id} — IA & BIO-DESIGN
        </div>
      </div>

      {/* Styled text layout offset block */}
      <div className="ml-4 md:ml-24 max-w-2xl mt-4">
        <span className="text-xs font-mono font-medium text-white/50 uppercase tracking-widest block mb-2">
          {project.tagline}
        </span>
        
        <h3 className="text-3xl md:text-4xl font-sans font-medium text-white mb-4 leading-tight">
          {project.name}
          <span className="font-serif italic text-white/80 block sm:inline font-normal">
            {project.serifAccent}
          </span>
        </h3>
        
        <p className="text-white/75 text-sm md:text-base leading-relaxed mb-6 font-light">
          {project.description}
        </p>

        <div className="flex items-center gap-6 font-mono text-[10px] text-white/40 border-t border-white/10 pt-4">
          <span>PARTENAIRE — {project.client}</span>
          <span>●</span>
          <span>SYMPOSIUM DE DESIGN BIOPHILE</span>
        </div>
      </div>
    </div>
  );
}
