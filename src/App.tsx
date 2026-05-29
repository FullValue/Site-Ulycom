import React, { useState } from "react";
import { 
  Sparkles, 
  Download, 
  Wand2, 
  BookOpen, 
  ArrowRight, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Menu,
  Plus,
  Compass,
  Layers,
  Leaf,
  Flower2
} from "lucide-react";

import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Process } from "./components/Process";
import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { Pricing } from "./components/Pricing";
import { PartnerCTA } from "./components/PartnerCTA";
import { Footer } from "./components/Footer";
import { BottomNav } from "./components/BottomNav";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Elegant Vector Minimal Flower Logo Component
  const FlowerLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
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

  return (
    <main className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden bg-black text-white selection:bg-white/20 select-none scroll-smooth">
      
      {/* BACKGROUND GRAPHICS: Fixed, autoplaying, muted, looping video */}
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
          Your browser does not support the video tag.
        </video>
        {/* Soft dark vignetting layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none" />
      </div>

      {/* OVERALL CONTENT LAYER */}
      <div className="relative z-10 w-full">
        
        {/* ==================== HERO VIEWPORT (Duo Panel) ==================== */}
        <div className="min-h-screen w-full flex flex-col lg:flex-row p-4 lg:p-6 gap-6">
          
          {/* ==================== LEFT PANEL ==================== */}
          <section className="relative flex-1 lg:w-[52%] min-h-[calc(100vh-2rem)] flex flex-col rounded-3xl liquid-glass-strong p-6 md:p-8 lg:p-10">
            
            {/* Top Header Navigation */}
            <header className="flex items-center justify-between w-full h-14 shrink-0 transition-all">
              <div className="flex items-center gap-3">
                {/* Floral Logo */}
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-md">
                  <FlowerLogo className="w-5 h-5 text-white" />
                </div>
                <span className="font-sans font-medium text-2xl tracking-tighter text-white">
                  bloom
                </span>
              </div>

              {/* Menu Trigger */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="px-5 py-2.5 rounded-full liquid-glass flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform text-sm text-white/90 cursor-pointer"
              >
                <Menu className="w-4 h-4" />
                <span className="font-sans font-medium">Menu</span>
              </button>
            </header>

            {/* Expanded Menu Dropdown Panel (Overlay) */}
            {isMenuOpen && (
              <div className="absolute top-20 left-6 right-6 z-50 rounded-2xl liquid-glass p-6 text-left animate-fade-in-up">
                <p className="text-xs font-mono tracking-widest text-[#9c9c9c] uppercase mb-4">
                  — Navigate Bloom AI Ecosystem
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-sm text-white/80 hover:text-white transition-colors">Artistic Gallery & Capabilities</a>
                    <a href="#work" onClick={() => setIsMenuOpen(false)} className="block text-sm text-white/80 hover:text-white transition-colors">AI Generative Sandbox</a>
                    <a href="#process" onClick={() => setIsMenuOpen(false)} className="block text-sm text-white/80 hover:text-white transition-colors">3D Structural Sculptures</a>
                  </div>
                  <div className="space-y-2">
                    <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block text-sm text-white/80 hover:text-white transition-colors">Growth Documentation</a>
                    <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-sm text-white/80 hover:text-white transition-colors">Neural Processing Pipeline</a>
                    <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block text-sm text-white/80 hover:text-white transition-colors">Community Sandbox Contact</a>
                  </div>
                </div>
              </div>
            )}

            {/* Main Hero Center Content block */}
            <div className="flex-1 flex flex-col justify-center items-start text-left max-w-xl py-8">
              
              {/* Display large Logo */}
              <div className="w-20 h-20 rounded-2xl liquid-glass flex items-center justify-center mb-8 hover:rotate-12 transition-transform duration-500">
                <Flower2 className="w-12 h-12 text-white/90" />
              </div>

              {/* Bloom Heading Section */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-medium tracking-[-0.05em] text-white leading-[1.05] mb-8">
                Innovating the <br />
                <span className="font-serif italic font-normal text-white/80">spirit of bloom AI</span>
              </h1>

              {/* Three floating badge pills */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                {["Artistic Gallery", "AI Generation", "3D Structures"].map((pill, idx) => (
                  <div 
                    key={idx}
                    className="px-4 py-2 text-xs font-sans text-white/80 rounded-full liquid-glass hover:scale-105 transition-transform"
                  >
                    {pill}
                  </div>
                ))}
              </div>

              {/* Elegant Call to Action trigger */}
              <button 
                onClick={() => {
                  const element = document.getElementById("services");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full liquid-glass-strong hover:scale-105 active:scale-95 transition-all text-sm font-medium text-white cursor-pointer select-none"
              >
                <span>Explore Now</span>
                <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Download className="w-4 h-4 text-white" />
                </div>
              </button>

            </div>

            {/* Bottom Visionary Quote footer block */}
            <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-3">
              <p className="text-[10px] tracking-widest uppercase text-white/50 font-mono">
                VISIONARY DESIGN
              </p>
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-sans">
                “We imagined a <span className="font-serif italic text-white/80">realm</span> with no <span className="font-serif italic text-white/80">ending</span>.”
              </p>

              {/* Author Credit */}
              <div className="flex items-center gap-4 mt-2">
                <div className="h-[1px] flex-1 bg-white/10" />
                <span className="font-mono text-[9px] tracking-widest text-[#9c9c9c] uppercase shrink-0">
                  MARCUS AURELIO
                </span>
                <div className="h-[1px] flex-1 bg-white/10" />
              </div>
            </div>

          </section>

          {/* ==================== RIGHT PANEL ==================== */}
          <section className="hidden lg:flex lg:w-[48%] flex-col gap-6">
            
            {/* Top Bar navigation row */}
            <div className="flex justify-between items-center w-full shrink-0">
              
              {/* Social pills grouped */}
              <div className="flex items-center gap-4 py-2.5 px-5 rounded-full liquid-glass">
                <div className="flex items-center gap-3">
                  <a 
                    href="https://x.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-white/80 hover:scale-105 transition-all"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-white/80 hover:scale-105 transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-white/80 hover:scale-105 transition-all"
                    aria-label="Instagram Profile"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
                <ArrowRight className="w-4 h-4 text-white/60 animate-pulse" />
              </div>

              {/* Smart Account Trigger button */}
              <button 
                onClick={() => {
                  const element = document.getElementById("pricing");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center hover:scale-105 active:scale-95 transition-transform text-white/90 cursor-pointer"
              >
                <Sparkles className="w-5 h-5" />
              </button>
            </div>

            {/* Ecosystem Community call-out card */}
            <div className="w-full flex justify-end">
              <div className="w-56 p-5 rounded-2xl liquid-glass text-left flex flex-col gap-2 hover:scale-[1.02] transition-transform">
                <h4 className="text-xs font-mono uppercase tracking-wider text-white/50">
                  — SANDBOX
                </h4>
                <p className="text-sm font-medium text-white">
                  Enter our ecosystem
                </p>
                <p className="text-xs text-white/70 leading-relaxed">
                  Connect your workspace parameters to feed the autonomous neural growth engine.
                </p>
              </div>
            </div>

            {/* Bottom Features Showcase Area */}
            <div className="mt-auto p-4 rounded-[2.5rem] liquid-glass flex flex-col gap-4">
              
              {/* Two Side-By-Side processing cards */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Card 1: Processing */}
                <div 
                  onClick={() => {
                    const el = document.getElementById("process");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="p-5 rounded-3xl liquid-glass flex flex-col items-start text-left gap-4 hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <Wand2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-sans font-medium text-sm text-white">Processing</h5>
                    <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                      Analyzing bio-geometry metrics with zero latency.
                    </p>
                  </div>
                </div>

                {/* Card 2: Growth Archive */}
                <div 
                  onClick={() => {
                    const el = document.getElementById("work");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="p-5 rounded-3xl liquid-glass flex flex-col items-start text-left gap-4 hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-sans font-medium text-sm text-white">Growth Archive</h5>
                    <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                      Historic logs of digital floral architecture drafts.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Primary feature section card */}
              <div 
                onClick={() => {
                  const el = document.getElementById("work");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="p-4 rounded-3xl liquid-glass flex items-center gap-4 text-left hover:scale-[1.01] transition-transform cursor-pointer"
              >
                
                {/* Flower thumbnail container */}
                <div className="w-24 h-16 rounded-xl overflow-hidden bg-white/5 flex-shrink-0 relative border border-white/10">
                  <img 
                    src="https://picsum.photos/seed/bloom-plant/300/200"
                    alt="Advanced Plant Sculpting preview"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-transparent" />
                </div>

                {/* Title & Description details */}
                <div className="flex-1">
                  <h5 className="font-sans font-medium text-xs text-white">
                    Advanced Plant Sculpting
                  </h5>
                  <p className="text-[10px] text-white/60 mt-0.5 leading-relaxed">
                    Generative neural nodes shaping custom botanical designs.
                  </p>
                </div>

                {/* Expand/Plus trigger button */}
                <button className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all shrink-0 cursor-pointer">
                  <Plus className="w-4 h-4" />
                </button>

              </div>

            </div>

          </section>

        </div>

        {/* ==================== SUBSEQUENT SECTIONS (AUTONOMOUS DEPTH SCROLL) ==================== */}
        
        {/* Soft layout transitions overlay */}
        <div className="bg-gradient-to-b from-transparent via-black/40 to-black/90 relative z-15">
          
          {/* Services Portfolio section */}
          <Services />

          {/* Project Portfolio row sections */}
          <Projects />

          {/* Symmetrical step methodology */}
          <Process />

          {/* Grayscale Client review quote carousel */}
          <TestimonialCarousel />

          {/* Dual Glass pricing grids */}
          <Pricing />

          {/* Spark tracking mouse vignette spawning landscape */}
          <PartnerCTA />

          {/* Signature detailed Footer */}
          <Footer />

        </div>

      </div>

      {/* Persistent floating pill trigger navigation */}
      <BottomNav />
      
    </main>
  );
}
