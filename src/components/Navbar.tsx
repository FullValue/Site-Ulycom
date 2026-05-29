import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Accueil", end: true },
  { to: "/services", label: "Services", end: false },
  { to: "/a-propos", label: "À propos", end: false },
  { to: "/contact", label: "Contact", end: false },
];

function FlowerLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={`${className} text-white`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8a2.5 2.5 0 0 0-2.5 2.5c0 1.5 2.5 3.5 2.5 3.5s2.5-2 2.5-3.5A2.5 2.5 0 0 0 12 8z" />
      <path d="M12 2v6" />
      <path d="M17 11h5" />
      <path d="M2 11h5" />
    </svg>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Ferme le menu mobile à chaque navigation.
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Bloque le scroll du body quand le menu mobile est ouvert.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-4">
      <nav
        className={`max-w-7xl mx-auto flex items-center justify-between gap-4 rounded-full liquid-glass-strong pl-5 pr-3 py-2.5 transition-shadow duration-500 ${
          scrolled ? "shadow-[0_16px_40px_rgba(0,0,0,0.45)]" : ""
        }`}
      >
        {/* Marque */}
        <Link
          to="/"
          className="flex items-center gap-2.5 shrink-0 group"
          aria-label="Ulycom — Accueil"
        >
          <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-md group-hover:scale-105 transition-transform">
            <FlowerLogo className="w-5 h-5 text-white" />
          </span>
          <span className="font-sans font-medium text-xl tracking-tighter text-white">
            Ulycom
          </span>
        </Link>

        {/* Liens desktop */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/15 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA desktop + hamburger mobile */}
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:scale-105 active:scale-95 transition-transform"
          >
            <Sparkles className="w-4 h-4" />
            Démarrer
          </Link>

          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden w-11 h-11 rounded-full liquid-glass flex items-center justify-center text-white active:scale-90 transition-transform"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile plein écran */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-0 z-40 pt-24 px-4 animate-fade-in-up">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative rounded-3xl liquid-glass-strong p-5 flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `px-5 py-4 rounded-2xl text-lg font-medium transition-colors ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-white/80 hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 px-5 py-4 rounded-2xl bg-white text-black text-lg font-medium text-center flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <Sparkles className="w-5 h-5" />
              Démarrer un projet
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
