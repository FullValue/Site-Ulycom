import { Link } from "react-router-dom";
import { Home, ArrowUpRight } from "lucide-react";

export function NotFound() {
  return (
    <main className="px-4 sm:px-6 pt-36 pb-24 max-w-3xl mx-auto min-h-[70vh] flex flex-col items-center justify-center text-center animate-fade-in-up">
      <p className="font-serif italic text-7xl sm:text-9xl text-white/80 mb-6">404</p>
      <h1 className="text-3xl sm:text-4xl font-sans font-medium tracking-tight text-white mb-4">
        Cette page n'a pas encore{" "}
        <span className="font-serif italic text-white/80 font-normal">éclos</span>.
      </h1>
      <p className="text-white/60 mb-10 max-w-md">
        La page que vous cherchez est introuvable ou a été déplacée. Revenons sur un
        terrain fertile.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-black text-sm font-medium hover:scale-105 active:scale-95 transition-transform"
        >
          <Home className="w-4 h-4" />
          Retour à l'accueil
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full liquid-glass text-white text-sm font-medium hover:scale-105 active:scale-95 transition-transform"
        >
          Voir nos services
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}
