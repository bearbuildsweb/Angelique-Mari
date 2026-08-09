import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import BackgroundParticles from './BackgroundParticles';
import Logo from './Logo';

import heroImage01 from '../assets/images/hero_image_01.jpg';
import heroImage02 from '../assets/images/hero_image_02.jpg';
import heroImage03 from '../assets/images/hero_image_03.jpg';
import heroImage04 from '../assets/images/hero_image_04.jpg';

interface HeroProps {
  onBookClick: () => void;
}

const HERO_SLIDES = [
  {
    image: heroImage01,
    title: 'Images That Refuse To Whisper',
    tagline: 'Editorial photography for brands, artists and people who would rather be remembered than simply seen.'
  },
  {
    image: heroImage02,
    title: 'Built For The Unforgettable.',
    tagline: 'Visual campaigns where fashion, culture and identity collide. Every frame deserves wall space.'
  },
  {
    image: heroImage03,
    title: 'Every Frame Is A Statement.',
    tagline: 'Photography influenced by editorial culture, contemporary art and beautiful imperfection.'
  },
  {
    image: heroImage04,
    title: 'Leave Ordinary Outside.',
    tagline: 'Creative direction and photography that belongs in galleries, not algorithms.'
  }
];

export default function Hero({ onBookClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // Autoplay every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between bg-black text-[#FF6800] overflow-hidden z-10">
      
      {/* 1. Full-width Slideshow Background (Blurred, low-key, dark atmosphere) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={activeSlide.image}
              alt=""
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter blur-lg scale-110 grayscale brightness-75 contrast-125"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Light subtle overlay and film vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_90%)] z-10 pointer-events-none" />
      </div>

      {/* Background Particles & Light Leaks */}
      <BackgroundParticles />

      {/* 2. Merged Overlay Header Navigation */}
      <header className="relative w-full z-40 px-4 sm:px-6 py-3 sm:py-5 md:px-12 flex justify-between items-center border-b border-[#FF6800]/20 bg-black/60 backdrop-blur-md">
        {/* Navigation Logo: Full Brand Lockup (ANGELIQUE-MARI + AM Monogram + PHOTOGRAPHY) */}
        <div 
          className="flex items-center gap-2 sm:gap-4 cursor-pointer group py-1" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Angelique-Mari Photography"
        >
          <Logo 
            mode="full" 
            variant="orange" 
            size="md" 
            className="h-12 sm:h-16 md:h-20 lg:h-24 group-hover:scale-[1.03] transition-transform duration-300 ease-out" 
          />
          
          {/* Studio ticket badge */}
          <span className="inline-flex flex-col font-sans border border-[#FF6800]/70 bg-black/80 text-[#FF6800] px-2 py-1 sm:px-3 sm:py-1.5 rounded-none uppercase tracking-widest backdrop-blur-md shadow-md">
            <span className="font-bold text-[8px] xs:text-[9px] sm:text-[10px] lg:text-[11px] text-[#FF7711] tracking-widest leading-none">FROM THE STUDIO OF</span>
            <span className="font-extrabold text-[10px] xs:text-[11px] sm:text-[12px] lg:text-[13px] text-white tracking-wider leading-tight mt-0.5 sm:mt-1">ANGELIQUE-MARI</span>
          </span>
        </div>

        {/* Header Right Trigger Controls */}
        <div className="flex items-center gap-6">
          <button
            onClick={onBookClick}
            className="hidden sm:block px-5 py-2.5 border border-[#FF6800] bg-transparent hover:bg-[#FF6800] hover:text-black font-sans text-[10px] lg:text-xs uppercase tracking-widest transition-all duration-300 font-bold text-[#FF6800] cursor-pointer"
          >
            [ LET'S CREATE ]
          </button>

          {/* Hamburger Menu Trigger */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 justify-center items-end w-8 h-8 group focus:outline-none cursor-pointer"
          >
            <span className={`h-[2px] bg-[#FF6800] transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2 bg-white' : 'w-6 group-hover:w-8 group-hover:bg-white'}`} />
            <span className={`h-[2px] bg-[#FF6800] transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-4 group-hover:w-8 group-hover:bg-white'}`} />
            <span className={`h-[2px] bg-[#FF6800] transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2 bg-white' : 'w-5 group-hover:w-8 group-hover:bg-white'}`} />
          </button>
        </div>
      </header>

      {/* 3. Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 220 }}
            className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-black/95 border-l border-[#FF6800]/30 z-50 p-8 flex flex-col justify-between backdrop-blur-2xl text-[#FF6800]"
          >
            <div className="flex justify-between items-center border-b border-[#FF6800]/20 pb-6">
              <Logo mode="full" variant="orange" size="md" className="h-16 sm:h-20 md:h-24" />
              <button
                onClick={() => setMenuOpen(false)}
                className="font-sans text-xs uppercase text-[#FF6800] hover:text-white transition-colors tracking-widest cursor-pointer font-bold"
              >
                [ CLOSE ]
              </button>
            </div>

            <nav className="flex flex-col gap-8 text-3xl font-serif uppercase tracking-tight my-auto text-[#FF6800]">
              <a
                href="#portfolio"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition-colors pl-2 border-l-2 border-transparent hover:border-[#FF6800] flex items-baseline gap-4"
              >
                <span className="font-sans text-xs text-[#FF6800]/60">01 /</span>
                <span>COLLECTION</span>
              </a>
              <a
                href="#testimonials"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition-colors pl-2 border-l-2 border-transparent hover:border-[#FF6800] flex items-baseline gap-4"
              >
                <span className="font-sans text-xs text-[#FF6800]/60">02 /</span>
                <span>REVIEWS</span>
              </a>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onBookClick();
                }}
                className="text-left hover:text-white transition-colors pl-2 border-l-2 border-transparent hover:border-[#FF6800] uppercase focus:outline-none flex items-baseline gap-4 cursor-pointer"
              >
                <span className="font-sans text-xs text-[#FF6800]/60">03 /</span>
                <span>INQUIRE</span>
              </button>
            </nav>

            <div className="border-t border-[#FF6800]/20 pt-6 flex flex-col gap-4">
              <p className="font-sans text-[10px] lg:text-[11px] text-neutral-400 uppercase leading-relaxed text-right">
                FOR THOSE WHO'D RATHER BE REMEMBERED THAN SEEN.
              </p>
              <div className="flex justify-between items-center font-sans text-[10px] lg:text-[11px] text-[#FF6800]">
                <span className="h-[1px] w-12 bg-[#FF6800]/40 block" aria-hidden="true" />
                <a 
                  href="mailto:ambrandcreatives@gmail.com" 
                  className="hover:text-white transition-colors uppercase tracking-wider underline underline-offset-4"
                >
                  AMBRANDCREATIVES@GMAIL.COM
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Centerpiece: Sharp focused rectangle overlay with Museum Print Framing */}
      <div className="my-auto w-full flex flex-col items-center justify-center relative z-20 px-6 py-12">
        
        {/* Left and Right side links */}
        <div className="absolute top-12 left-8 lg:left-12 xl:left-20 hidden xl:flex flex-col font-sans text-xs text-[#FF6800] uppercase tracking-widest gap-4 z-30">
          <a href="#portfolio" className="hover:text-white transition-colors flex items-center gap-2 group">
            <span className="text-white font-bold group-hover:translate-x-1 transition-transform">// 001</span>
            <span>FEATURED WORKS</span>
          </a>
          <a href="#testimonials" className="hover:text-white transition-colors flex items-center gap-2 group">
            <span className="text-white font-bold group-hover:translate-x-1 transition-transform">// 002</span>
            <span>CLIENT VOICES</span>
          </a>
          <button onClick={onBookClick} className="hover:text-white transition-colors flex items-center gap-2 text-left cursor-pointer focus:outline-none group">
            <span className="text-white font-bold group-hover:translate-x-1 transition-transform">// 003</span>
            <span>BOOK SESSION</span>
          </button>
        </div>

        <div className="absolute top-12 right-8 lg:right-12 xl:right-20 hidden xl:flex flex-col items-end font-sans text-xs text-[#FF6800] uppercase tracking-widest gap-2.5 z-30 text-right">
          <span className="text-white font-bold">ANGELIQUE-MARI</span>
          <span className="text-[#FF6800]/80 text-[10px] lg:text-xs">Johannesburg / South Africa</span>
          <span className="text-white font-bold">EXHIBITING // 0{currentSlide + 1}</span>
        </div>

        {/* Centerpiece Container with crosshairs and crop lines */}
        <div className="relative group cursor-pointer" onClick={onBookClick}>
          
          {/* Top-Left Corner indicator */}
          <div className="absolute -top-3 -left-3 w-5 h-5 border-t-2 border-l-2 border-[#FF6800] z-30 pointer-events-none" />
          {/* Top-Right Corner indicator */}
          <div className="absolute -top-3 -right-3 w-5 h-5 border-t-2 border-r-2 border-[#FF6800] z-30 pointer-events-none" />
          {/* Bottom-Left Corner indicator */}
          <div className="absolute -bottom-3 -left-3 w-5 h-5 border-b-2 border-l-2 border-[#FF6800] z-30 pointer-events-none" />
          {/* Bottom-Right Corner indicator */}
          <div className="absolute -bottom-3 -right-3 w-5 h-5 border-b-2 border-r-2 border-[#FF6800] z-30 pointer-events-none" />

          {/* Inner Central Target Plus Crosshair */}
          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
            <span className="text-[#FF6800] text-xl font-sans font-light select-none tracking-widest opacity-90 group-hover:scale-125 transition-transform duration-500">
              +
            </span>
          </div>

          {/* Sharp focused centerpiece window with CRISP WHITE MUSEUM FRAME */}
          <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-black p-3 bg-white border-4 border-white shadow-[0_20px_60px_rgba(0,0,0,0.95)] relative overflow-hidden">
            <div className="relative w-full h-full overflow-hidden bg-black border border-neutral-900">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.2s] ease-[0.16,1,0.3,1]"
                  initial={{ opacity: 0, scale: 1.12 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1 }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Mini overlay label under crop frame */}
          <div className="absolute -bottom-8 left-0 right-0 text-center font-sans text-[8px] lg:text-[10px] uppercase tracking-[0.25em] text-[#FF6800]">
            [ IMAGE SPEAKS // WORDS FOLLOW ]
          </div>
        </div>

        {/* Text descriptors below centerpiece */}
        <div className="w-full max-w-xl mt-12 text-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-3"
            >
              <h2 className="text-2xl sm:text-4xl font-serif tracking-tight text-white select-none uppercase">
                {activeSlide.title}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimalist interactive indicators */}
        <div className="flex gap-2.5 mt-8 items-center justify-center">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              id={`slide-dot-${idx}`}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-500 rounded-none cursor-pointer ${currentSlide === idx ? 'w-10 bg-[#FF6800]' : 'w-3 bg-white/20 hover:bg-[#FF6800]/60'}`}
              title={`Switch to Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 5. Informative Ticker Footer */}
      <footer className="relative w-full z-20 px-6 py-6 md:px-12 border-t border-[#FF6800]/20 bg-black flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-6 font-sans text-[9px] lg:text-[11px] text-[#FF6800] uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FF6800] rounded-full animate-ping" />
            <span className="text-[#FF6800] font-bold">CURATED WITH INTENTION</span>
          </div>
          <span className="text-white">//</span>
        </div>

        <button
          onClick={onBookClick}
          className="group flex items-center gap-3 font-sans text-[10px] lg:text-xs uppercase tracking-widest text-[#FF6800] hover:text-white transition-colors cursor-pointer"
        >
          <span>LET'S CREATE</span>
          <span className="w-8 h-[2px] bg-[#FF6800] group-hover:bg-white group-hover:w-16 transition-all duration-300" />
        </button>
      </footer>

    </section>
  );
}
