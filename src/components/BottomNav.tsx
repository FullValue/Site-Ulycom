import { useState, useEffect } from "react";
import { Sparkles, Leaf } from "lucide-react";

export function BottomNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleCTA = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[420px] transition-all duration-500 animate-slide-up">
      <div className="liquid-glass-strong px-4 py-2.5 rounded-full shadow-[0_24px_48px_rgba(0,0,0,0.4)] flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Symmetrical Mini Leaf circular badge */}
          <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white">
            <Leaf className="w-4 h-4 text-white" />
          </div>

          <div className="flex flex-col text-left">
            <span className="font-sans font-medium text-xs text-white leading-none mb-0.5">bloom</span>
            <span className="font-mono text-[9px] text-white/50 uppercase tracking-widest flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-white/80 animate-pulse" /> neural growth
            </span>
          </div>
        </div>

        <button 
          onClick={handleCTA}
          className="py-2.5 px-5 rounded-full bg-white text-black font-sans font-medium text-xs hover:bg-white/90 transition-colors cursor-pointer select-none"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}
