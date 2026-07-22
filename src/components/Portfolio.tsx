import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Project } from '../types';
import { PROJECTS } from '../data';
import { X, Maximize2, ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Lock body scroll and listen for Escape key when gallery view is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
    };

    if (activeProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  // Parallax scroll controls for natural editorial depth
  const { scrollYProgress } = useScroll();
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const parallaxY3 = useTransform(scrollYProgress, [0, 1], [0, -35]);

  const p1 = PROJECTS[0]; // Atelier Miss Archive (16/9)
  const p2 = PROJECTS[1]; // Sartorial Brutalism (3/4)
  const p3 = PROJECTS[2]; // Silent Geometry (1/1)
  const p4 = PROJECTS[3]; // Serpent Bloom (16/10)
  const p5 = PROJECTS[4]; // Monochrome Poetics (4/5)
  const p6 = PROJECTS[5]; // Nocturne Couture (21/9)

  return (
    <section id="portfolio" className="relative w-full bg-warm-100 text-warm-950 py-24 md:py-36 px-6 md:px-12 z-10 border-t border-warm-900/10">
      
      {/* 1. Contemporary Exhibition Header (Inspired by ERT IOX Museum Mood Board) */}
      <div className="max-w-7xl mx-auto flex flex-col mb-24 md:mb-32">
        
        {/* Top Minimalist Eyebrow Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 w-full font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-warm-900 pb-4 border-b border-warm-900/15">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-700 animate-pulse" />
            <span className="font-bold tracking-widest">/ FEATURED WORK</span>
            <span className="text-warm-400 font-normal">VOL. I</span>
          </div>
          <div className="flex items-center gap-4 text-warm-500 font-mono text-[10px] sm:text-xs">
            <span>JOHANNESBURG</span>
            <span className="text-warm-300">•</span>
            <span>JSOUTH AFRICA</span>
          </div>
        </div>

        {/* Oversized Gallery Split Title Layout (Matching 'ERT IOX' Reference) */}
        <div className="pt-8 pb-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 border-b border-warm-900/10">
          <h2 className="text-6xl sm:text-8xl lg:text-9xl font-black font-sans tracking-tighter uppercase text-warm-950 leading-none select-none">
            FEAT
          </h2>

          {/* Center Informational Badge Box */}
          <div className="border border-warm-900/20 bg-warm-50/80 backdrop-blur-sm p-4 sm:p-5 max-w-md text-center flex flex-col items-center justify-center rounded">
            <span className="font-serif italic text-sm sm:text-base text-warm-950 font-medium tracking-wide mt-1.5">
              From the Lens of Angelique-Mari
            </span>
            <p className="font-sans text-xs text-warm-700 leading-relaxed font-medium uppercase tracking-wider">
              INSPIRED BY CULTURE, IDENTITY & FASHION.
            </p>
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-amber-800 font-bold mb-1">
              VISUAL ARCHIVE
            </span>
          </div>

          <h2 className="text-6xl sm:text-8xl lg:text-9xl font-black font-sans tracking-tighter uppercase text-warm-950 leading-none select-none">
            URED
          </h2>
        </div>

      </div>

      {/* 2. Asymmetrical Contemporary Gallery Layout */}
      <div className="max-w-7xl mx-auto space-y-28 md:space-y-44">
        
        {/* ==================== SPREAD I ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Work 1: Wide Hero (16/9) */}
          {p1 && (
            <motion.div 
              className="lg:col-span-8 group cursor-pointer"
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveProject(p1)}
            >
              <div className="relative w-full aspect-[16/9] bg-warm-200 overflow-hidden rounded border border-warm-900/10 shadow-lg">
                <motion.img 
                  src={p1.image} 
                  alt={p1.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] group-hover:brightness-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-white text-[9px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                  <Maximize2 className="w-3 h-3" />
                  <span>INSPECT</span>
                </div>
              </div>
              
              {/* Minimalist Museum Caption */}
              <div className="mt-3.5 flex justify-between items-baseline font-mono text-[11px] sm:text-xs text-warm-900 uppercase tracking-[0.15em]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-amber-800">{p1.title}</span>
                </div>
                <span className="text-warm-500 font-normal">{p1.museumNumber} • {p1.year}</span>
              </div>
            </motion.div>
          )}

          {/* Work 2: Floating Vertical Portrait (3/4) with Scroll Parallax */}
          {p2 && (
            <motion.div 
              style={{ y: parallaxY1 }}
              className="lg:col-span-4 lg:mt-20 group cursor-pointer"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveProject(p2)}
            >
              <div className="relative w-full aspect-[3/4] bg-warm-200 overflow-hidden rounded border border-warm-900/10 shadow-xl">
                <motion.img 
                  src={p2.image} 
                  alt={p2.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-[1.03] group-hover:brightness-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-white text-[9px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                  <Maximize2 className="w-3 h-3" />
                  <span>VIEW</span>
                </div>
              </div>

              {/* Minimalist Museum Caption */}
              <div className="mt-3.5 flex justify-between items-baseline font-mono text-[11px] sm:text-xs text-warm-900 uppercase tracking-[0.15em]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-amber-800">{p2.title}</span>
                </div>
                <span className="text-warm-500 font-normal">{p2.museumNumber}</span>
              </div>
            </motion.div>
          )}

        </div>

        {/* ==================== SPREAD II ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-6">
          
          {/* Work 3: Square Sculpture Study (1/1) */}
          {p3 && (
            <motion.div 
              className="lg:col-span-5 group cursor-pointer"
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveProject(p3)}
            >
              <div className="relative w-full aspect-[1/1] bg-warm-200 overflow-hidden rounded border border-warm-900/10 shadow-lg p-2 bg-white/60">
                <div className="relative w-full h-full overflow-hidden rounded">
                  <motion.img 
                    src={p3.image} 
                    alt={p3.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] group-hover:brightness-105 transition-all duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Minimalist Museum Caption */}
              <div className="mt-3.5 flex justify-between items-baseline font-mono text-[11px] sm:text-xs text-warm-900 uppercase tracking-[0.15em]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-amber-800">{p3.title}</span>
                </div>
                <span className="text-warm-500 font-normal">{p3.museumNumber} • {p3.location}</span>
              </div>
            </motion.div>
          )}

          {/* Work 4: Offset Wide Light Directive (16/10) with Parallax */}
          {p4 && (
            <motion.div 
              style={{ y: parallaxY2 }}
              className="lg:col-span-7 lg:-mt-12 group cursor-pointer"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveProject(p4)}
            >
              <div className="relative w-full aspect-[16/10] bg-warm-200 overflow-hidden rounded border border-warm-900/10 shadow-xl">
                <motion.img 
                  src={p4.image} 
                  alt={p4.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-[1.03] group-hover:brightness-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-white text-[9px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                  <Maximize2 className="w-3 h-3" />
                  <span>INSPECT</span>
                </div>
              </div>

              {/* Minimalist Museum Caption */}
              <div className="mt-3.5 flex justify-between items-baseline font-mono text-[11px] sm:text-xs text-warm-900 uppercase tracking-[0.15em]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-amber-800">{p4.title}</span>
                </div>
                <span className="text-warm-500 font-normal">{p4.museumNumber}</span>
              </div>
            </motion.div>
          )}

        </div>

        {/* ==================== SPREAD III ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pt-6">
          
          {/* Work 6: Panoramic Runway Couture (21/9) */}
          {p6 && (
            <motion.div 
              className="lg:col-span-7 group cursor-pointer"
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveProject(p6)}
            >
              <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] bg-warm-200 overflow-hidden rounded border border-warm-900/10 shadow-xl">
                <motion.img 
                  src={p6.image} 
                  alt={p6.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-[1.03] group-hover:brightness-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-white text-[9px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                  <Maximize2 className="w-3 h-3" />
                  <span>INSPECT</span>
                </div>
              </div>

              {/* Minimalist Museum Caption */}
              <div className="mt-3.5 flex justify-between items-baseline font-mono text-[11px] sm:text-xs text-warm-900 uppercase tracking-[0.15em]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-amber-800">{p6.title}</span>
                </div>
                <span className="text-warm-500 font-normal">{p6.museumNumber} • {p6.location}</span>
              </div>
            </motion.div>
          )}

          {/* Work 5: Portraiture Study (4/5) with Parallax */}
          {p5 && (
            <motion.div 
              style={{ y: parallaxY3 }}
              className="lg:col-span-5 lg:-mt-10 group cursor-pointer"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveProject(p5)}
            >
              <div className="relative w-full aspect-[4/5] bg-warm-200 overflow-hidden rounded border border-warm-900/10 shadow-lg">
                <motion.img 
                  src={p5.image} 
                  alt={p5.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] group-hover:brightness-105 transition-all duration-700 ease-out"
                />
              </div>

              {/* Minimalist Museum Caption */}
              <div className="mt-3.5 flex justify-between items-baseline font-mono text-[11px] sm:text-xs text-warm-900 uppercase tracking-[0.15em]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-amber-800">{p5.title}</span>
                </div>
                <span className="text-warm-500 font-normal">{p5.museumNumber} • {p5.year}</span>
              </div>
            </motion.div>
          )}

        </div>

      </div>

      {/* 3. Contemporary Gallery Exhibition Room View */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/90 via-[#0a0a09] to-[#040404] backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 md:p-10 overflow-hidden select-none"
            onClick={() => setActiveProject(null)}
          >
            {/* Gallery Top Navigation Bar */}
            <div className="w-full flex items-center justify-between font-mono text-[10px] sm:text-xs text-warm-400 uppercase tracking-[0.22em] border-b border-warm-100/10 pb-4 pt-1 z-20">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span className="font-semibold text-warm-200">/ FEATURED COLLECTION</span>
                <span className="text-warm-500 hidden sm:inline">• {activeProject.museumNumber}</span>
              </div>

              <div className="hidden lg:flex items-center gap-2 text-warm-500 text-[10px]">
                <span>DETAILS</span>
                <span>—</span>
                <span className="text-amber-400 font-medium">{activeProject.title}</span>
              </div>

              {/* Close Exhibition Button */}
              <button 
                onClick={() => setActiveProject(null)}
                className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-warm-300 hover:text-white uppercase tracking-widest px-3 py-1.5 rounded border border-warm-100/15 hover:border-amber-500/50 hover:bg-white/5 transition-all cursor-pointer"
                aria-label="Close gallery room"
              >
                <span>CLOSE [ESC]</span>
                <X className="w-3.5 h-3.5 text-amber-500" />
              </button>
            </div>

            {/* Central Focal Work & Curatorial Frame */}
            <div className="flex-1 w-full my-auto flex flex-col items-center justify-center p-2 sm:p-6 md:p-8 relative z-10">
              <motion.div 
                initial={{ scale: 0.93, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.93, opacity: 0, y: 15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-full max-h-full flex flex-col items-center group"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Museum Matting & Framing Container */}
                <div className="relative p-3 sm:p-6 md:p-8 bg-[#121211]/90 border border-neutral-800/80 rounded shadow-[0_30px_90px_rgba(0,0,0,0.95)] max-w-full max-h-[72vh] md:max-h-[76vh] flex flex-col items-center justify-center">
                  
                  {/* Curatorial Corner Registration Marks & Crop Guides */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-amber-500/40" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-amber-500/40" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-amber-500/40" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-amber-500/40" />

                  {/* Micro Registration Header */}
                  <div className="w-full flex justify-between items-center font-mono text-[8px] sm:text-[9px] text-neutral-500 uppercase tracking-widest pb-2 mb-2 border-b border-neutral-800/60">
                    <span className="flex items-center gap-1.5">
                      <span className="text-amber-500/80">+</span>
                      <span>ARCHIVAL SPEC: {activeProject.museumNumber}</span>
                    </span>
                    <span className="hidden sm:inline text-neutral-600">REG. 2026 // AM-STUDIO</span>
                  </div>

                  {/* Primary Artwork Image */}
                  <div className="relative overflow-hidden rounded-sm border border-neutral-800/80 bg-black flex items-center justify-center">
                    <img 
                      src={activeProject.image} 
                      alt={activeProject.title} 
                      referrerPolicy="no-referrer"
                      className="max-h-[58vh] sm:max-h-[62vh] md:max-h-[66vh] w-auto max-w-[85vw] md:max-w-[75vw] object-contain shadow-2xl transition-transform duration-700 ease-out hover:scale-[1.015]"
                    />
                  </div>

                  {/* Micro Calibration Bar at Footer of Frame */}
                  <div className="w-full flex justify-between items-center pt-3 mt-2 border-t border-neutral-800/60 font-mono text-[8px] sm:text-[9px] text-neutral-500 uppercase tracking-widest">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-neutral-900 border border-neutral-700" />
                      <span className="w-1.5 h-1.5 bg-neutral-700" />
                      <span className="w-1.5 h-1.5 bg-amber-700" />
                      <span className="w-1.5 h-1.5 bg-neutral-300" />
                    </div>
                    <span>{activeProject.aspectRatio || '16/9'} • ORIGINAL ASPECT</span>
                  </div>

                </div>

              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

