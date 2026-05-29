import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BottomNav } from "./BottomNav";

/** Remet le scroll en haut à chaque changement de page. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export function Layout() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white selection:bg-white/20">
      <ScrollToTop />

      {/* FOND : vidéo fixe en boucle, muette */}
      <div className="fixed inset-0 z-0">
        <video
          className="h-full w-full object-cover opacity-85 pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          referrerPolicy="no-referrer"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
            type="video/mp4"
          />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none" />
      </div>

      {/* CONTENU */}
      <div className="relative z-10 w-full">
        <Navbar />
        <Outlet />
        <Footer />
      </div>

      <BottomNav />
    </div>
  );
}
