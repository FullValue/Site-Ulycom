import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Testimonial } from "../types";

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Arthur de Saint-Exupéry",
    role: "Directeur de l'Innovation",
    company: "Verde Architecture",
    text: "La technologie Bloom de sculpture végétale s'est intégrée parfaitement à nos façades cinétiques ruelle-verte à Lyon. Le réalisme procédural est fantastique.",
    avatar: "https://picsum.photos/seed/arthur/120/120",
  },
  {
    name: "Sonia El Khoury",
    role: "Cofondatrice & Directrice Créative",
    company: "Onyx Design Studio",
    text: "Une simplicité déroutante. On connecte notre cahier des charges, et l'IA sculpte des structures botaniques en verre translucide qui ont séduit tous nos investisseurs.",
    avatar: "https://picsum.photos/seed/sonia_b/120/120",
  },
  {
    name: "Thomas Gressier",
    role: "Directeur Technique",
    company: "Aether Metaspace",
    text: "Le rendu de croissance temps réel est sidérant. Nos métamodèles 3D s'interfacent avec une rapidité incroyable grâce à l'exportation optimisée de Bloom.",
    avatar: "https://picsum.photos/seed/thomas_b/120/120",
  },
  {
    name: "Emma Bodin",
    role: "VP Expérience",
    company: "Hôtel L'Eden",
    text: "Nous cherchions une installation immersive hybride qui mélange nature réelle et technologie interactive. Bloom s'est imposé comme l'excellence absolue sur le marché.",
    avatar: "https://picsum.photos/seed/emma_b/120/120",
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = TESTIMONIALS.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 3500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <section 
      className="py-24 relative z-10 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-4">
            — PAROLES DE DESIGNERS
          </p>
          <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-white leading-tight">
            Validé par les{" "}
            <span className="font-serif italic text-white/80 font-normal">esprits créatifs</span> les plus exigeants.
          </h2>
        </div>

        {/* Dynamic Star Rating Header in Grayscale */}
        <div className="flex items-center gap-4 py-4 px-6 rounded-2xl liquid-glass shrink-0">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 text-white fill-white/80" />
            ))}
          </div>
          <div className="text-xs font-sans text-white/85 uppercase tracking-widest font-mono">
            Note de 4.9/5 — (54 avis)
          </div>
        </div>
      </div>

      {/* Slide Container Area */}
      <div className="relative max-w-7xl mx-auto px-6 h-[400px] flex items-center justify-center">
        {/* Navigation Buttons floating in Glass */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 z-30 w-11 h-11 rounded-full liquid-glass flex items-center justify-center text-white hover:scale-110 active:scale-90 transition-transform cursor-pointer"
          aria-label="Témoignage précédent"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 z-30 w-11 h-11 rounded-full liquid-glass flex items-center justify-center text-white hover:scale-110 active:scale-90 transition-transform cursor-pointer"
          aria-label="Témoignage suivant"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Carousel Window */}
        <div className="w-full overflow-hidden h-full flex items-center justify-center relative">
          <div 
            className="flex gap-8 transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 32}px))`,
              width: `${total * 100}%`
            }}
          >
            {TESTIMONIALS.map((testimonial, index) => {
              const active = index === currentIndex;
              return (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 flex items-center justify-center"
                  style={{ width: "100%" }}
                >
                  <div
                    className={`
                      w-full max-w-3xl p-8 md:p-12 rounded-3xl liquid-glass select-none
                      transition-all duration-500
                      ${active ? "opacity-100 scale-100" : "opacity-30 scale-95 pointer-events-none"}
                    `}
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      <div className="w-20 md:w-24 shrink-0 aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-lg relative bg-white/5">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-transparent" />
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <p className="text-lg md:text-xl font-sans text-white/90 leading-relaxed mb-6">
                          « {testimonial.text} »
                        </p>
                        
                        <div>
                          <h4 className="font-sans font-medium text-white text-base">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-white/50 font-mono mt-1">
                            {testimonial.role} — <span className="font-serif italic text-white/80">{testimonial.company}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pagination Dot Indicators */}
      <div className="flex justify-center gap-3 mt-4">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`
              h-1.5 rounded-full transition-all duration-500 cursor-pointer
              ${i === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/20 hover:bg-white/40"}
            `}
            aria-label={`Aller au témoignage ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
