import { Compass, Cpu, Layers, Sparkles, Orbit, Leaf } from "lucide-react";
import React from "react";

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  /** Première partie du titre (sans-serif) */
  title: string;
  /** Accent en serif italique */
  serifAccent: string;
  /** Résumé court (cartes & index) */
  description: string;
  /** Accroche affichée en haut de la page détail */
  tagline: string;
  /** Paragraphe d'introduction de la page détail */
  intro: string;
  /** Bénéfices clés détaillés */
  features: ServiceFeature[];
  /** Livrables concrets */
  deliverables: string[];
  /** Chiffres mis en avant */
  stats: { value: string; label: string }[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "sculpture-botanique-3d",
    icon: Compass,
    title: "Sculpture Botanique ",
    serifAccent: "3D",
    description:
      "Conception de modèles floraux cinétiques générés par IA algorithmique, prêts pour l'impression sémantique ou l'intégration métavers.",
    tagline: "Modélisation générative & impression volumétrique",
    intro:
      "Nous façonnons des structures florales tridimensionnelles entièrement générées par nos réseaux algorithmiques. Chaque sculpture naît d'une intention esthétique précise puis se déploie en géométries complexes, prêtes à être imprimées en volume ou intégrées dans vos univers virtuels.",
    features: [
      {
        title: "Géométrie procédurale",
        description:
          "Des milliers de variations florales générées à partir d'un seul paramètre directeur, pour explorer rapidement l'espace créatif.",
      },
      {
        title: "Export multi-format",
        description:
          "Fichiers CAO (.obj, .fbx, .glb) optimisés pour l'impression 3D, le rendu temps réel ou l'intégration métavers.",
      },
      {
        title: "Cinétique intégrée",
        description:
          "Articulations et points de pivot calculés pour des installations animées qui réagissent à leur environnement.",
      },
    ],
    deliverables: [
      "Modèle 3D haute densité prêt à l'impression",
      "Variations procédurales (jusqu'à 12 déclinaisons)",
      "Fichiers sources CAO et textures PBR",
      "Note technique de fabrication",
    ],
    stats: [
      { value: "12", label: "déclinaisons par concept" },
      { value: "4K", label: "résolution des textures" },
      { value: "48h", label: "premier rendu livré" },
    ],
  },
  {
    slug: "generation-croissance-neurale",
    icon: Sparkles,
    title: "Génération de croissance ",
    serifAccent: "Neurale",
    description:
      "Modélisation de structures vivantes dynamiques réagissant en temps réel à l'hygrométrie et aux stimuli sonores extérieurs.",
    tagline: "Structures vivantes & réseaux réactifs",
    intro:
      "Nos modèles de croissance neuronale simulent l'évolution organique du vivant. Les structures réagissent en temps réel à l'humidité, à la lumière et au son ambiant, donnant naissance à des installations qui ne cessent jamais d'évoluer.",
    features: [
      {
        title: "Croissance temps réel",
        description:
          "Les formes se développent en direct selon des règles biologiques apprises sur des milliers d'espèces.",
      },
      {
        title: "Capteurs environnementaux",
        description:
          "Intégration de l'hygrométrie, de la lumière et du son pour une réactivité sensorielle complète.",
      },
      {
        title: "Moteur autonome",
        description:
          "Un moteur de simulation léger qui tourne aussi bien sur écran que sur dispositif embarqué.",
      },
    ],
    deliverables: [
      "Moteur de croissance configurable (WebGL)",
      "Tableau de bord de pilotage des paramètres",
      "Bibliothèque de comportements réactifs",
      "Documentation d'intégration",
    ],
    stats: [
      { value: "60 fps", label: "rendu fluide garanti" },
      { value: "∞", label: "variations génératives" },
      { value: "3", label: "types de capteurs supportés" },
    ],
  },
  {
    slug: "architecture-bio-spatiale",
    icon: Layers,
    title: "Architecture ",
    serifAccent: "Bio-Spatiale",
    description:
      "Hybridation d'habitats physiques contemporains et d'écosystèmes végétaux autonomes pour espaces végétalisés intelligents.",
    tagline: "Habitats hybrides & écosystèmes intelligents",
    intro:
      "Nous concevons des espaces où l'architecture et le vivant ne font qu'un. Nos écosystèmes végétaux autonomes s'intègrent à vos volumes physiques pour créer des lieux qui respirent, s'adaptent et prennent soin de leurs occupants.",
    features: [
      {
        title: "Intégration structurelle",
        description:
          "Le végétal est pensé dès la conception comme un élément porteur de l'expérience spatiale.",
      },
      {
        title: "Écosystème autonome",
        description:
          "Irrigation, nutrition et lumière sont gérées par des agents intelligents sans intervention humaine.",
      },
      {
        title: "Confort biophilique",
        description:
          "Qualité de l'air, acoustique et lumière naturelle optimisées pour le bien-être des occupants.",
      },
    ],
    deliverables: [
      "Plans d'intégration bio-spatiale",
      "Schéma de l'écosystème autonome",
      "Maquette 3D de l'espace végétalisé",
      "Cahier de maintenance prévisionnelle",
    ],
    stats: [
      { value: "−40 %", label: "consommation d'eau" },
      { value: "100 %", label: "autonomie d'entretien" },
      { value: "+30 %", label: "qualité de l'air ressentie" },
    ],
  },
  {
    slug: "microclimat-predictif",
    icon: Cpu,
    title: "Calcul de micro-climat ",
    serifAccent: "Prédictif",
    description:
      "Analyse automatisée de l'exposition lumineuse et du débit d'oxygène par réseau de neurones convolutifs.",
    tagline: "Analyse environnementale & prédiction",
    intro:
      "Nos réseaux de neurones convolutifs cartographient et anticipent le micro-climat de vos espaces. Exposition lumineuse, hygrométrie, flux d'oxygène : chaque variable est analysée pour garantir des conditions optimales à votre écosystème.",
    features: [
      {
        title: "Cartographie lumineuse",
        description:
          "Simulation de l'ensoleillement heure par heure sur l'année complète.",
      },
      {
        title: "Prédiction d'oxygène",
        description:
          "Estimation du débit d'oxygène généré selon la densité et les espèces choisies.",
      },
      {
        title: "Alertes intelligentes",
        description:
          "Notifications anticipées en cas de dérive des conditions environnementales.",
      },
    ],
    deliverables: [
      "Rapport de cartographie micro-climatique",
      "Modèle prédictif personnalisé",
      "Tableau de bord de monitoring",
      "Recommandations d'optimisation",
    ],
    stats: [
      { value: "365 j", label: "de simulation annuelle" },
      { value: "92 %", label: "de précision prédictive" },
      { value: "24/7", label: "monitoring continu" },
    ],
  },
  {
    slug: "simulations-environnementales",
    icon: Orbit,
    title: "Simulations ",
    serifAccent: "Environnementales",
    description:
      "Modèles prédictifs reproduisant l'interaction symbiotique des essences de flore avec les matériaux bruts environnants.",
    tagline: "Modèles symbiotiques & matériaux",
    intro:
      "Avant la première graine, nous simulons. Nos modèles reproduisent l'interaction entre vos essences florales et les matériaux bruts qui les entourent, pour valider chaque choix esthétique et technique en amont.",
    features: [
      {
        title: "Symbiose matière-vivant",
        description:
          "Modélisation des échanges entre flore, pierre, métal et bois sur le long terme.",
      },
      {
        title: "Vieillissement simulé",
        description:
          "Projection de l'évolution de l'installation sur 1, 5 et 10 ans.",
      },
      {
        title: "Scénarios extrêmes",
        description:
          "Tests de résilience face aux conditions climatiques les plus rudes.",
      },
    ],
    deliverables: [
      "Rapport de simulation symbiotique",
      "Projections temporelles (1/5/10 ans)",
      "Recommandations de matériaux",
      "Visualisations comparatives",
    ],
    stats: [
      { value: "10 ans", label: "de projection" },
      { value: "50+", label: "matériaux référencés" },
      { value: "98 %", label: "fidélité physique" },
    ],
  },
  {
    slug: "soin-autonome",
    icon: Leaf,
    title: "Systèmes de soin ",
    serifAccent: "Autonome",
    description:
      "Intégration d'agents intelligents gérant l'irrigation, la nutrition racinaire et la purification sans intervention humaine.",
    tagline: "Agents autonomes & maintenance zéro",
    intro:
      "Une installation vivante ne devrait jamais dépendre d'une main humaine pour survivre. Nos agents intelligents orchestrent l'irrigation, la nutrition racinaire et la purification de l'air en totale autonomie, jour et nuit.",
    features: [
      {
        title: "Irrigation adaptative",
        description:
          "Chaque plante reçoit exactement l'eau dont elle a besoin, calculée en temps réel.",
      },
      {
        title: "Nutrition racinaire",
        description:
          "Dosage automatique des nutriments selon le stade de croissance détecté.",
      },
      {
        title: "Purification continue",
        description:
          "Filtration et régénération de l'air ambiant gérées par capteurs intelligents.",
      },
    ],
    deliverables: [
      "Système d'agents autonomes installé",
      "Application de supervision à distance",
      "Capteurs et actionneurs configurés",
      "Garantie de maintenance 12 mois",
    ],
    stats: [
      { value: "0", label: "intervention manuelle" },
      { value: "12 mois", label: "de garantie incluse" },
      { value: "−60 %", label: "ressources gaspillées" },
    ],
  },
];

export function getServiceBySlug(slug: string | undefined): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
