import React from "react";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 py-20 px-6 relative z-10 select-none overflow-hidden bg-black/40">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Brand details */}
          <div className="md:col-span-6 flex flex-col items-start gap-6">
            <h3 className="font-sans text-3xl text-white font-medium tracking-tighter">
              bloom <span className="font-serif italic font-normal text-white/50 text-xl font-light">ai</span>
            </h3>
            
            <p className="text-sm text-white/60 max-w-sm font-light">
              Une exécution d'ingénierie implacable combinée à l'élégance du design system tactile d'Apple, entièrement déclinée aux motifs biophiliques de demain.
            </p>

            <button 
              onClick={scrollToTop}
              className="px-5 py-2.5 rounded-full bg-white/10 text-white hover:bg-white text-xs uppercase font-mono tracking-widest hover:text-black transition-all cursor-pointer flex items-center gap-2"
            >
              <span>REMONTER</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Navigation links */}
          <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
            <p className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1">— NAVIGATION</p>
            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-widest text-[#9c9c9c]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">Projets</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Processus</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Tarifs</a>
              </li>
            </ul>
          </div>

          {/* Social connections */}
          <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
            <p className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1">— SOCIAL</p>
            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-widest text-[#9c9c9c]">
              <li>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">X / TWITTER</a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">INSTAGRAM</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] font-mono text-white/40 uppercase tracking-widest">
          <div>
            <span>© {new Date().getFullYear()} BLOOM LABS INC. TOUS DROITS RÉSERVÉS.</span>
          </div>
          <div className="flex items-center gap-4">
            <span>PARIS, FR</span>
            <span>●</span>
            <span>BIOPHILIC AGENT WORKSPACE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
