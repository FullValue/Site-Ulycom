import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Leaf } from "lucide-react";

export function BottomNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-[420px] transition-all duration-500 animate-slide-up">
      <div className="liquid-glass-strong px-4 py-2.5 rounded-full shadow-[0_24px_48px_rgba(0,0,0,0.4)] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-medium text-xs text-white leading-none mb-0.5">
              Ulycom
            </span>
            <span className="font-mono text-[9px] text-white/50 uppercase tracking-widest flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-white/80 animate-pulse" />{" "}
              croissance neurale
            </span>
          </div>
        </Link>

        <Link
          to="/contact"
          className="py-2.5 px-5 rounded-full bg-white text-black font-sans font-medium text-xs hover:bg-white/90 transition-colors cursor-pointer select-none"
        >
          Démarrer
        </Link>
      </div>
    </div>
  );
}
