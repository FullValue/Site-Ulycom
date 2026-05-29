import { Link } from "react-router-dom";
import { ArrowUpRight, Leaf, Cpu, Globe, HeartHandshake } from "lucide-react";

const VALUES = [
  {
    icon: Leaf,
    title: "Vivant d'abord",
    description:
      "Chaque création place le végétal et le bien-être au cœur de l'expérience, jamais en décoration.",
  },
  {
    icon: Cpu,
    title: "Ingénierie de pointe",
    description:
      "Réseaux neuronaux, simulation et génération procédurale : la technologie au service de la beauté.",
  },
  {
    icon: Globe,
    title: "Durabilité",
    description:
      "Des systèmes autonomes qui consomment moins, durent plus et régénèrent leur environnement.",
  },
  {
    icon: HeartHandshake,
    title: "Sur mesure",
    description:
      "Pas de catalogue figé : chaque projet est une collaboration unique, du concept au déploiement.",
  },
];

const STATS = [
  { value: "2019", label: "année de création" },
  { value: "120+", label: "projets déployés" },
  { value: "9", label: "pays" },
  { value: "4.9/5", label: "satisfaction client" },
];

export function About() {
  return (
    <main className="px-4 sm:px-6 pt-28 sm:pt-36 pb-24 max-w-6xl mx-auto">
      {/* Hero */}
      <div className="max-w-3xl mb-16 animate-fade-in-up">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-4">
          — À PROPOS D'ULYCOM
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-white leading-[1.05] mb-6">
          Nous cultivons l'union du{" "}
          <span className="font-serif italic text-white/80 font-normal">vivant</span> et de
          la{" "}
          <span className="font-serif italic text-white/80 font-normal">machine</span>.
        </h1>
        <p className="text-white/70 text-base md:text-lg leading-relaxed">
          Ulycom est un studio de design biophilique augmenté par l'intelligence
          artificielle. Nous concevons des installations végétales vivantes,
          autonomes et génératives, à la frontière de l'architecture, de la
          botanique et de l'ingénierie logicielle.
        </p>
      </div>

      {/* Chiffres */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
        {STATS.map((stat, i) => (
          <div key={i} className="liquid-glass rounded-2xl p-6 sm:p-8">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-sans font-semibold tracking-tight text-white mb-2">
              {stat.value}
            </div>
            <div className="text-white/50 text-xs font-mono uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Récit */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-20">
        <div className="rounded-3xl overflow-hidden aspect-[4/5] liquid-glass relative">
          <img
            src="https://picsum.photos/seed/ulycom-studio/800/1000"
            alt="L'atelier Ulycom"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight">
            Notre{" "}
            <span className="font-serif italic text-white/80 font-normal">histoire</span>.
          </h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Née de la rencontre entre une architecte paysagiste et une équipe de
            chercheurs en apprentissage profond, Ulycom est partie d'une intuition
            simple : et si les espaces pouvaient grandir, respirer et prendre soin
            d'eux-mêmes ?
          </p>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Depuis, nous avons développé un moteur génératif unique capable de
            sculpter, simuler et entretenir des écosystèmes végétaux. Des halls
            d'hôtels aux pavillons d'exposition, nos créations transforment la
            relation entre les lieux et celles et ceux qui les habitent.
          </p>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Notre conviction : la technologie la plus avancée est celle qui se fait
            oublier pour laisser place à l'émerveillement.
          </p>
        </div>
      </section>

      {/* Valeurs */}
      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight mb-10">
          Nos{" "}
          <span className="font-serif italic text-white/80 font-normal">valeurs</span>.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {VALUES.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={i}
                className="liquid-glass rounded-2xl p-7 sm:p-8 flex gap-5 hover:scale-[1.02] transition-transform duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-sans font-medium text-white tracking-tight mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl liquid-glass-strong p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight mb-2">
            Travaillons ensemble.
          </h3>
          <p className="text-white/60 text-sm md:text-base max-w-md">
            Vous avez un lieu, une vision, une contrainte ? Nous avons la méthode.
          </p>
        </div>
        <Link
          to="/contact"
          className="shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-black text-sm font-medium hover:scale-105 active:scale-95 transition-transform"
        >
          Nous contacter
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
