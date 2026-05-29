import { useState, useRef, useEffect, MouseEvent } from "react";
import { useInView } from "../hooks/useInView";

interface Vignette {
  id: number;
  x: number;
  y: number;
  rotation: number;
  image: string;
  createdAt: number;
  life: number; // 1 (newborn) to 0 (dead)
}

const SPAWN_IMAGES = [
  "https://picsum.photos/seed/bp1/300/200",
  "https://picsum.photos/seed/bp2/300/200",
  "https://picsum.photos/seed/bp3/300/200",
  "https://picsum.photos/seed/bp4/300/200",
  "https://picsum.photos/seed/bp5/300/200",
  "https://picsum.photos/seed/bp6/300/200",
  "https://picsum.photos/seed/bp7/300/200",
  "https://picsum.photos/seed/bp8/300/200",
];

export function PartnerCTA() {
  const [vignettes, setVignettes] = useState<Vignette[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastSpawnTime = useRef<number>(0);
  const spawnCounter = useRef<number>(0);
  const { ref: animRef, className: animClass } = useInView(0.05);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const now = Date.now();
    
    // Throttle spawn to once every 75ms
    if (now - lastSpawnTime.current < 75) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotation = Math.random() * 24 - 12; // -12deg to +12deg
    const nextIdx = spawnCounter.current % SPAWN_IMAGES.length;
    spawnCounter.current += 1;

    const newVignette: Vignette = {
      id: now + Math.random(),
      x,
      y,
      rotation,
      image: SPAWN_IMAGES[nextIdx],
      createdAt: now,
      life: 1.0,
    };

    setVignettes((prev) => [...prev, newVignette]);
    lastSpawnTime.current = now;
  };

  useEffect(() => {
    let animationFrameId: number;

    const updateVignettes = () => {
      const now = Date.now();
      setVignettes((prev) => {
        const filtered = prev.filter((v) => now - v.createdAt < 900);
        return filtered.map((v) => {
          const elapsed = now - v.createdAt;
          const life = Math.max(0, 1 - elapsed / 900); // 1 to 0 over 900ms
          return { ...v, life };
        });
      });
      animationFrameId = requestAnimationFrame(updateVignettes);
    };

    animationFrameId = requestAnimationFrame(updateVignettes);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleScrollToPlans = () => {
    const plansElem = document.getElementById("pricing");
    if (plansElem) {
      plansElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={animRef as any}
      className={`py-12 px-6 max-w-7xl mx-auto overflow-hidden relative z-10 ${animClass}`}
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="w-full py-32 md:py-40 px-8 rounded-3xl text-center flex flex-col items-center justify-center relative liquid-glass-strong cursor-crosshair select-none overflow-hidden"
      >
        {/* Spawn Vignette renders */}
        {vignettes.map((v) => (
          <div
            key={v.id}
            className="absolute pointer-events-none origin-center"
            style={{
              left: v.x,
              top: v.y,
              transform: `translate(-50%, -50%) scale(${0.35 + v.life * 0.65}) rotate(${v.rotation}deg)`,
              opacity: v.life,
              transition: "transform 0.04s linear",
              width: "110px",
              height: "74px",
              zIndex: 30,
            }}
          >
            <div className="w-full h-full rounded-lg overflow-hidden border border-white/20 shadow-2xl bg-black relative">
              <img
                src={v.image}
                alt="Studio Sculpture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-90"
              />
              <div className="absolute inset-0 bg-transparent" />
            </div>
          </div>
        ))}

        <div className="max-w-3xl relative z-10 pointer-events-none select-none">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-mono mb-6">
            — ECO-PROTOTYPES INTERACTIFS
          </p>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-medium tracking-tight text-white leading-none mb-10">
            Faites éclore votre{" "}
            <span className="font-serif italic text-white/80 font-normal block sm:inline">prochaine pensée</span>.
          </h2>

          <p className="text-white/60 max-w-lg mx-auto text-sm md:text-base leading-relaxed mb-12">
            Notre bande passante d'entraînement est limitée afin de garantir un niveau d'osmose absolue. Activez votre licence stratégique dès maintenant.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
            <button 
              onClick={handleScrollToPlans}
              className="px-8 py-4 text-xs tracking-widest uppercase font-mono rounded-full bg-white text-black hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg"
            >
              DÉPLOYER VOTRE PROJET
            </button>

            <button 
              onClick={() => {
                const element = document.getElementById("services");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-4 text-xs tracking-widest uppercase font-mono rounded-full liquid-glass hover:scale-105 active:scale-95 transition-all text-white cursor-pointer"
            >
              NOS CAPABILITÉS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
