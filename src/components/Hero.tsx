import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import BackgroundParticles from './BackgroundParticles';

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
    <section className="relative min-h-screen w-full flex flex-col justify-between bg-warm-50 text-warm-950 overflow-hidden z-10">
      
      {/* 1. Full-width Slideshow Background (Blurred, low-key, gritty feel) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.12, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={activeSlide.image}
              alt=""
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter blur-lg scale-110 grayscale brightness-125"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Light subtle overlay and film vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-warm-50/80 via-warm-50/45 to-warm-50 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#FAF9F5_90%)] z-10 pointer-events-none" />
      </div>

      {/* Background Anime Particles & Light Leaks */}
      <BackgroundParticles />

      {/* 2. Merged Overlay Header Navigation */}
      <header className="relative w-full z-40 px-6 py-6 md:px-12 flex justify-between items-center border-b border-warm-900/10 bg-gradient-to-b from-warm-50/60 to-transparent">
        {/* Logo / Brand signature */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="flex flex-col">
            <span className="font-display font-black text-xl tracking-tighter text-warm-950 hover:text-amber-700 transition-colors">
              AM
            </span>
            <span className="font-mono text-[8px] lg:text-[10px] uppercase tracking-widest text-warm-500">
              brand creative
            </span>
          </div>
          
          {/* Gritty punk ticket badge */}
          <span className="inline-flex flex-col font-mono text-[9px] lg:text-[11px] leading-tight border border-red-600/30 text-red-600 px-2.5 lg:px-3 py-1 lg:py-1.5 rounded uppercase tracking-wider animate-pulse">
            <span>FROM THE STUDIO OF</span>
            <span className="font-semibold text-[11px] lg:text-xs text-warm-950">ANGELIQUE-MARI</span>
          </span>
        </div>

        {/* Header Right Trigger Controls */}
        <div className="flex items-center gap-6">
          <button
            onClick={onBookClick}
            className="hidden sm:block px-4 py-2 border border-warm-900/20 bg-warm-900/5 hover:bg-warm-900 hover:text-warm-50 font-mono text-[9px] lg:text-xs uppercase tracking-widest transition-all duration-300 rounded text-warm-900"
          >
            [ Book Experience ]
          </button>

          {/* Hamburger Menu Trigger */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 justify-center items-end w-8 h-8 group focus:outline-none"
          >
            <span className={`h-[1.5px] bg-warm-900 transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6 group-hover:w-8'}`} />
            <span className={`h-[1.5px] bg-warm-900 transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-4 group-hover:w-8'}`} />
            <span className={`h-[1.5px] bg-warm-900 transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5 group-hover:w-8'}`} />
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
            className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-warm-50/95 border-l border-warm-900/10 z-50 p-8 flex flex-col justify-between backdrop-blur-xl text-warm-950"
          >
            <div className="flex justify-between items-center border-b border-warm-900/10 pb-6">
              <span className="h-[1px] w-16 bg-warm-400 block" aria-hidden="true" />
              <button
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs uppercase text-amber-700 hover:text-warm-950 transition-colors"
              >
                [ CLOSE ]
              </button>
            </div>

            <nav className="flex flex-col gap-8 text-3xl font-serif uppercase tracking-tight my-auto text-warm-900">
              <a
                href="#portfolio"
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-700 transition-colors pl-2 border-l-2 border-transparent hover:border-amber-700 flex items-baseline gap-4"
              >
                <span className="font-mono text-xs text-warm-400">01 /</span>
                <span>COLLECTION</span>
              </a>
              <a
                href="#testimonials"
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-700 transition-colors pl-2 border-l-2 border-transparent hover:border-amber-700 flex items-baseline gap-4"
              >
                <span className="font-mono text-xs text-warm-400">02 /</span>
                <span>REVIEWS</span>
              </a>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onBookClick();
                }}
                className="text-left hover:text-amber-700 transition-colors pl-2 border-l-2 border-transparent hover:border-amber-700 uppercase focus:outline-none flex items-baseline gap-4"
              >
                <span className="font-mono text-xs text-warm-400">03 /</span>
                <span>INQUIRE</span>
              </button>
            </nav>

            <div className="border-t border-warm-900/10 pt-6 flex flex-col gap-4">
              <p className="font-mono text-[9px] lg:text-[11px] text-warm-500 uppercase leading-relaxed text-right">
                FOR THOSE WHO'D RATHER BE REMEMBERED THAN SEEN.
              </p>
              <div className="flex justify-between items-center font-mono text-[9px] lg:text-[11px] text-warm-500">
                <span className="h-[1px] w-12 bg-warm-400 block" aria-hidden="true" />
                <a 
                  href="mailto:ambrandcreatives@gmail.com" 
                  className="hover:text-amber-700 transition-colors uppercase tracking-wider underline"
                >
                  AMBRANDCREATIVES@GMAIL.COM
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Centerpiece: Sharp focused rectangle overlay (Just like the tattoo studio eye crop) */}
      <div className="my-auto w-full flex flex-col items-center justify-center relative z-20 px-6 py-12">
        
        {/* Subtle background punk sticker markers */}
        <div className="absolute top-12 left-12 hidden xl:flex flex-col font-mono text-[10px] lg:text-xs text-warm-600 uppercase tracking-widest gap-2.5 z-30">
          <a href="#portfolio" className="hover:text-amber-700 transition-colors flex items-center gap-2">
            <span className="text-red-600 font-bold">// 001</span>
            <span>SELECTED WORKS</span>
          </a>
          <a href="#testimonials" className="hover:text-amber-700 transition-colors flex items-center gap-2">
            <span className="text-red-600 font-bold">// 002</span>
            <span>CLIENT VOICES</span>
          </a>
          <button onClick={onBookClick} className="hover:text-amber-700 transition-colors flex items-center gap-2 text-left cursor-pointer focus:outline-none">
            <span className="text-red-600 font-bold">// 003</span>
            <span>BOOK SESSION</span>
          </button>
        </div>

        <div className="absolute top-12 right-12 hidden xl:flex flex-col items-end font-mono text-[9px] lg:text-[11px] text-warm-600 uppercase tracking-widest gap-2">
          <span>Johannesburg / South Africa</span>
          <span className="text-amber-700">EXHIBITING // 0{currentSlide + 1}</span>
        </div>

        {/* Centerpiece Container with crosshairs and crop lines */}
        <div className="relative group cursor-pointer" onClick={onBookClick}>
          
          {/* Top-Left Corner indicator */}
          <div className="absolute -top-3 -left-3 w-5 h-5 border-t border-l border-warm-900 z-30 pointer-events-none" />
          {/* Top-Right Corner indicator */}
          <div className="absolute -top-3 -right-3 w-5 h-5 border-t border-r border-warm-900 z-30 pointer-events-none" />
          {/* Bottom-Left Corner indicator */}
          <div className="absolute -bottom-3 -left-3 w-5 h-5 border-b border-l border-warm-900 z-30 pointer-events-none" />
          {/* Bottom-Right Corner indicator */}
          <div className="absolute -bottom-3 -right-3 w-5 h-5 border-b border-r border-warm-900 z-30 pointer-events-none" />

          {/* Inner Central Target Plus Crosshair */}
          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
            <span className="text-warm-900 text-lg font-mono font-light select-none tracking-widest opacity-80 group-hover:scale-125 transition-transform duration-500">
              +
            </span>
          </div>

          {/* Sharp focused centerpiece window */}
          <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-warm-100 border border-warm-900/10 overflow-hidden shadow-[0_15px_50px_rgba(27,26,23,0.12)] relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={activeSlide.image}
                alt={activeSlide.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.2s] ease-[0.16,1,0.3,1]"
                initial={{ opacity: 0, scale: 1.12 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>

            {/* Inner subtle vintage overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
          </div>

          {/* Mini overlay label under crop frame */}
          <div className="absolute -bottom-8 left-0 right-0 text-center font-mono text-[8px] lg:text-[10px] uppercase tracking-[0.25em] text-warm-600">
            [ IMAGE SPEAKS // WORDS FOLLOW ]
          </div>
        </div>

        {/* Minimal text descriptors below centerpiece */}
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
              <h2 className="text-lg sm:text-2xl font-serif tracking-tight text-warm-950 select-none">
                {activeSlide.title}
              </h2>

              <p className="font-sans text-xs sm:text-sm lg:text-base text-warm-600 max-w-md leading-relaxed select-none">
                {activeSlide.tagline}
              </p>
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
              className={`h-1.5 transition-all duration-500 rounded-full ${currentSlide === idx ? 'w-10 bg-warm-900' : 'w-2 bg-warm-900/20 hover:bg-warm-900/40'}`}
              title={`Switch to Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 5. Gritty, Informative Ticker Footer */}
      <footer className="relative w-full z-20 px-6 py-6 md:px-12 border-t border-warm-900/10 bg-gradient-to-t from-warm-50/60 to-transparent flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-6 font-mono text-[9px] lg:text-[11px] text-warm-600 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
            <span className="text-red-600 font-bold">CURATED WITH INTENTION</span>
          </div>
          <span>/ VISUAL CONVICTION</span>
        </div>

        <button
          onClick={onBookClick}
          className="group flex items-center gap-3 font-mono text-[10px] lg:text-xs uppercase tracking-widest text-warm-900 hover:text-amber-700 transition-colors"
        >
          <span>LET'S CREATE</span>
          <span className="w-8 h-[1.5px] bg-warm-900 group-hover:bg-amber-700 group-hover:w-16 transition-all duration-300" />
        </button>
      </footer>

    </section>
  );
}
