import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram } from 'lucide-react';
import Logo from './Logo';

import heroImage01 from '../assets/images/hero_image_01.jpg';
import heroImage02 from '../assets/images/hero_image_02.jpg';
import heroImage03 from '../assets/images/hero_image_03.jpg';
import heroImage04 from '../assets/images/hero_image_04.jpg';

const WHATSAPP_URL = 'https://wa.me/27686313538?text=Hi%20Angelique-Mari%2C%20I%27d%20like%20to%20talk%20about%20a%20shoot%20with%20AM%20Photography.';

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  );
}

const HERO_IMAGES = [heroImage01, heroImage02, heroImage03, heroImage04];

interface HeroProps {
  onBookClick?: () => void;
}

export default function Hero({ onBookClick }: HeroProps = {}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeImage = HERO_IMAGES[currentSlide];

  const handleScrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between bg-black text-[#FF6800] overflow-hidden z-10">
      
      {/* 1. Cinematic Ambient Background (Lightweight, GPU-friendly) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={activeImage}
            alt=""
            referrerPolicy="no-referrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'linear' }}
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black z-10" />
      </div>

      {/* 2. Sleek Top Navigation Header */}
      <header className="relative w-full z-40 px-4 sm:px-6 py-3.5 sm:py-4 md:px-12 flex justify-between items-center border-b border-[#FF6800]/20 bg-black/60 backdrop-blur-md">
        {/* Brand Lockup */}
        <div 
          className="flex items-center gap-3 sm:gap-4 md:gap-5 cursor-pointer group py-1" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="AM Studio — Angelique-Mari Photography"
        >
          <Logo 
            mode="full" 
            variant="orange" 
            size="md" 
            className="h-10 sm:h-12 md:h-14 group-hover:scale-[1.02] transition-transform duration-300 ease-out" 
          />

          {/* Archival Studio Badge */}
          <div className="hidden sm:flex flex-col justify-center border border-[#FF6800] px-3 py-1.5 sm:px-3.5 sm:py-2 bg-black/60 backdrop-blur-sm select-none">
            <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.22em] font-semibold text-[#FF6800] leading-tight">
              FROM THE STUDIO OF
            </span>
            <span className="font-sans text-xs sm:text-[13px] uppercase tracking-[0.16em] font-extrabold text-white leading-tight mt-0.5">
              ANGELIQUE-MARI
            </span>
          </div>
        </div>

        {/* Recessed Pill Depression / Cavity ("Hole in the wall" depth effect) with Hamburger Icon */}
        <div className="p-[3px] rounded-full bg-[#050505] shadow-[0_6px_20px_rgba(0,0,0,0.95),inset_0_4px_12px_rgba(0,0,0,1),inset_0_-1px_1px_rgba(255,255,255,0.1)] border-t border-black border-b border-white/15">
          <button
            id="header-nav-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="group relative inline-flex items-center justify-center px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full bg-[#1c1c1e] hover:bg-[#232326] shadow-[inset_0_5px_12px_rgba(0,0,0,0.95),inset_0_1px_3px_rgba(0,0,0,1),inset_0_-1px_2px_rgba(255,255,255,0.12)] border-t border-black/80 border-b border-white/10 transition-all duration-300 active:scale-[0.96] cursor-pointer"
          >
            <div className="flex flex-col gap-1 sm:gap-1.5 justify-center items-center w-5 h-3.5 sm:h-4">
              <span className={`h-[2px] bg-[#FF6800] group-hover:bg-white transition-all duration-300 rounded-full ${menuOpen ? 'w-5 rotate-45 translate-y-[5.5px]' : 'w-5'}`} />
              <span className={`h-[2px] bg-[#FF6800] group-hover:bg-white transition-all duration-300 rounded-full ${menuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
              <span className={`h-[2px] bg-[#FF6800] group-hover:bg-white transition-all duration-300 rounded-full ${menuOpen ? 'w-5 -rotate-45 -translate-y-[5.5px]' : 'w-5'}`} />
            </div>
          </button>
        </div>
      </header>

      {/* 3. Navigation Drawer & Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 240 }}
              className="fixed inset-y-0 right-0 w-full sm:w-[380px] bg-black/98 border-l border-[#FF6800]/30 z-50 p-8 flex flex-col justify-between backdrop-blur-2xl text-[#FF6800]"
            >
            <div className="flex flex-col gap-4 border-b border-[#FF6800]/20 pb-6">
              {/* Row 1: Logo & [ CLOSE ] */}
              <div className="flex justify-between items-center w-full">
                <Logo mode="full" variant="orange" size="md" className="h-10 sm:h-12" />
                <div className="w-20 flex justify-center">
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="font-sans text-xs uppercase text-[#FF6800] hover:text-white transition-colors tracking-widest cursor-pointer font-bold"
                  >
                    [ CLOSE ]
                  </button>
                </div>
              </div>

              {/* Row 2: Studio Badge & Instagram Icon */}
              <div className="flex justify-between items-center w-full">
                {/* Studio Badge for Drawer */}
                <div className="border border-[#FF6800] px-3 py-1.5 self-start bg-black/60">
                  <span className="font-sans text-[9px] uppercase tracking-[0.22em] font-semibold text-[#FF6800] block leading-tight">
                    FROM THE STUDIO OF
                  </span>
                  <span className="font-sans text-xs uppercase tracking-[0.16em] font-extrabold text-white block leading-tight mt-0.5">
                    ANGELIQUE-MARI
                  </span>
                </div>

                {/* Instagram Icon (Vertically aligned with [CLOSE], Horizontally aligned with Studio Badge) */}
                <div className="w-20 flex justify-center">
                  <a
                    href="https://www.instagram.com/iambrandthecreative"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF6800] hover:text-white transition-all duration-300 p-1.5 hover:scale-110 flex items-center justify-center"
                    aria-label="Follow AM Studio on Instagram"
                    title="Instagram @iambrandthecreative"
                  >
                    <Instagram className="w-5 h-5 stroke-[1.75]" />
                  </a>
                </div>
              </div>
            </div>

            <nav className="flex flex-col gap-8 text-2xl sm:text-3xl font-serif uppercase tracking-tight my-auto text-[#FF6800]">
              <a
                href="#portfolio"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition-colors pl-3 border-l-2 border-transparent hover:border-[#FF6800] flex items-baseline gap-3"
              >
                <span className="font-sans text-xs text-[#FF6800]/50">01 /</span>
                <span>COLLECTION</span>
              </a>
              <a
                href="#booking"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition-colors pl-3 border-l-2 border-transparent hover:border-[#FF6800] flex items-baseline gap-3"
              >
                <span className="font-sans text-xs text-[#FF6800]/50">02 /</span>
                <span>ENQUIRE</span>
              </a>
            </nav>

            {/* Nav Drawer Footer: Right-Aligned WhatsApp CTA with same pill depth as hero CTA, no text */}
            <div className="border-t border-[#FF6800]/20 pt-6 flex justify-end items-center">
              <div className="p-[3px] rounded-full bg-[#050505] shadow-[0_6px_20px_rgba(0,0,0,0.95),inset_0_4px_12px_rgba(0,0,0,1),inset_0_-1px_1px_rgba(255,255,255,0.1)] border-t border-black border-b border-white/15">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Direct on WhatsApp with AM Studio"
                  title="WhatsApp: +27 68 631 3538"
                  className="group relative inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#1c1c1e] hover:bg-[#232326] shadow-[inset_0_5px_12px_rgba(0,0,0,0.95),inset_0_1px_3px_rgba(0,0,0,1),inset_0_-1px_2px_rgba(255,255,255,0.12)] border-t border-black/80 border-b border-white/10 transition-all duration-300 active:scale-[0.96] text-[#FF6800] hover:text-white cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>

      {/* 4. Minimal, Cinematic Editorial Hero Stage */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-20 px-6 py-8 sm:py-12 md:py-16">
        
        {/* Crisp Museum Print Centerpiece — The Hero Statement */}
        <div 
          className="relative group cursor-pointer"
          onClick={handleScrollToPortfolio}
          title="View Portfolio"
        >
          {/* Subtle Archival Corner Brackets */}
          <div className="absolute -top-3 -left-3 w-5 h-5 border-t-2 border-l-2 border-[#FF6800] z-30 pointer-events-none" />
          <div className="absolute -top-3 -right-3 w-5 h-5 border-t-2 border-r-2 border-[#FF6800] z-30 pointer-events-none" />
          <div className="absolute -bottom-3 -left-3 w-5 h-5 border-b-2 border-l-2 border-[#FF6800] z-30 pointer-events-none" />
          <div className="absolute -bottom-3 -right-3 w-5 h-5 border-b-2 border-r-2 border-[#FF6800] z-30 pointer-events-none" />

          {/* Center Target Crosshair */}
          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
            <span className="text-[#FF6800] text-xl font-sans font-light select-none tracking-widest opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500">
              +
            </span>
          </div>

          {/* Crisp White Museum Matting Frame */}
          <div className="w-[290px] h-[360px] sm:w-[350px] sm:h-[440px] md:w-[410px] md:h-[510px] lg:w-[450px] lg:h-[560px] max-h-[64vh] bg-white p-2.5 sm:p-3.5 border-4 border-white shadow-[0_30px_90px_rgba(0,0,0,0.98)] relative overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.015]">
            <div className="relative w-full h-full overflow-hidden bg-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={activeImage}
                  alt="Editorial Photography"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.9 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Recessed Pill Depression / Cavity ("Hole in the wall" depth effect) */}
        <div className="mt-10 sm:mt-12 p-[3px] rounded-full bg-[#050505] shadow-[0_6px_20px_rgba(0,0,0,0.95),inset_0_4px_12px_rgba(0,0,0,1),inset_0_-1px_1px_rgba(255,255,255,0.1)] border-t border-black border-b border-white/15">
          <a
            href="#portfolio"
            id="hero-view-portfolio-cta"
            aria-label="View portfolio of works"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#1c1c1e] hover:bg-[#232326] shadow-[inset_0_5px_12px_rgba(0,0,0,0.95),inset_0_1px_3px_rgba(0,0,0,1),inset_0_-1px_2px_rgba(255,255,255,0.12)] border-t border-black/80 border-b border-white/10 transition-all duration-300 active:scale-[0.98]"
          >
            <div className="relative flex flex-col">
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.24em] font-bold text-[#FF6800] group-hover:text-white transition-colors pb-0.5">
                VIEW PORTFOLIO
              </span>
              <span className="relative w-full h-[1.5px] bg-[#FF6800]/25 overflow-hidden block">
                <motion.span
                  className="absolute top-0 bottom-0 w-full bg-[#FF6800] group-hover:bg-white block shadow-[0_0_6px_rgba(255,104,0,0.8)]"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.8,
                    ease: 'easeInOut',
                  }}
                />
              </span>
            </div>
            <span className="text-[#FF6800] group-hover:text-white text-xs sm:text-sm font-bold transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </span>
          </a>
        </div>

      </div>

    </section>
  );
}
