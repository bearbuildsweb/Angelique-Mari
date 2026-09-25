import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { PROJECTS, WILDCARD_DATA } from '../data';
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  const activeProject = activeProjectIndex !== null ? PROJECTS[activeProjectIndex] : null;

  const handleNextProject = useCallback(() => {
    if (activeProjectIndex === null) return;
    setActiveProjectIndex((prev) => ((prev! + 1) % PROJECTS.length));
  }, [activeProjectIndex]);

  const handlePrevProject = useCallback(() => {
    if (activeProjectIndex === null) return;
    setActiveProjectIndex((prev) => ((prev! - 1 + PROJECTS.length) % PROJECTS.length));
  }, [activeProjectIndex]);

  // Lock body scroll and keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProjectIndex(null);
      if (e.key === 'ArrowRight') handleNextProject();
      if (e.key === 'ArrowLeft') handlePrevProject();
    };

    if (activeProjectIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProjectIndex, handleNextProject, handlePrevProject]);

  const p1 = PROJECTS[0]; // Street Couture and Nightfall
  const p2 = PROJECTS[1]; // Weddings & celebrations
  const p3 = PROJECTS[2]; // BRAND & PRODUCT IMAGERY
  const p4 = PROJECTS[3]; // Family & Little ones
  const p5 = PROJECTS[4]; // Lifestyle

  const truncateWithMore = (text?: string) => {
    if (!text) return '';
    const firstSentence = text.split('. ')[0].replace(/\.+$/, '');
    return `${firstSentence}....`;
  };

  const scrollToBooking = (topic?: string) => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (topic) {
        window.dispatchEvent(new CustomEvent('select-booking-focus', { detail: { topic } }));
      }
    }
  };

  return (
    <section 
      id="portfolio" 
      className="relative w-full bg-black text-[#FF6800] py-24 sm:py-32 md:py-44 px-6 sm:px-10 md:px-16 z-10 border-t border-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-28 sm:space-y-36 md:space-y-48">
        
        {/* ==================================================================== */}
        {/* SPREAD 01: Lead Editorial Feature & Integrated Section Title         */}
        {/* Street Couture and Nightfall + "what i love to photograph"           */}
        {/* ==================================================================== */}
        {p1 && (
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-center">
              
              {/* Left Column: Asymmetric Editorial Masthead Lockup */}
              <motion.div 
                className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Integrated Cursive Title: Intimate, highly legible deconstructed editorial accent */}
                <div className="mb-6 sm:mb-8">
                  <h2
                    className="font-cursive text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05] tracking-normal font-normal select-none drop-shadow-[0_2px_12px_rgba(255,158,74,0.2)]"
                    style={{ 
                      fontFamily: "'Allura', 'Alex Brush', 'Parisienne', cursive",
                      WebkitFontSmoothing: 'antialiased'
                    }}
                  >
                    <span className="flex items-center gap-2.5 sm:gap-3.5 text-white">
                      <span>“what</span>
                      
                      {/* High-Street Punk-Rock Spotlight on 'I' */}
                      <span className="inline-block relative -rotate-3 hover:rotate-0 transition-transform duration-300 mx-1 align-middle not-italic font-sans group select-none">
                        {/* Ambient Direct-Flash Spotlight Halo */}
                        <span 
                          className="absolute -inset-2.5 rounded-sm opacity-60 pointer-events-none blur-sm" 
                          style={{
                            background: 'radial-gradient(circle, rgba(255,158,74,0.35) 0%, transparent 70%)'
                          }}
                        />
                        
                        {/* Raw Angled Punk Badge with Brutalist Offset Shadow */}
                        <span className="relative inline-flex items-center justify-center px-3 sm:px-4 py-1 sm:py-1.5 bg-black border-2 border-[#FF9E4A] shadow-[3px_3px_0px_#FF9E4A] sm:shadow-[4px_4px_0px_#FF9E4A]">
                          {/* Corner Viewfinder / Punk Registration Ticks */}
                          <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#FF9E4A]" />
                          <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#FF9E4A]" />
                          <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#FF9E4A]" />
                          <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-[#FF9E4A]" />

                          {/* The Capitalized 'I' in Light Orange (#FF9E4A) - No underline */}
                          <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FF9E4A] font-extrabold leading-none tracking-normal drop-shadow-[0_0_10px_rgba(255,158,74,0.6)]">
                            I
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="block pl-4 sm:pl-6 text-[#FF9E4A] lowercase">love to</span>
                    <span className="block pl-8 sm:pl-12 text-[#FF9E4A] lowercase">photograph”</span>
                  </h2>
                </div>

                {/* Monumental Architectural Project Title */}
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-white font-bold tracking-tight mb-5 uppercase leading-[1.08] drop-shadow-[0_2px_18px_rgba(255,104,0,0.15)]">
                  {p1.title}
                </h3>

                {/* Truncated, Sharp Supporting Statement with Curatorial Hairline */}
                <div className="relative pl-5 sm:pl-6 border-l-2 border-[#FF6800]/40 mb-8 max-w-lg">
                  <p className="text-neutral-200 text-sm sm:text-base md:text-[17px] leading-[1.7] font-light">
                    {truncateWithMore(p1.description)}
                  </p>
                </div>

                {/* Tactile Architectural Action & Index */}
                <div className="flex items-center gap-6">
                  <button
                    type="button"
                    onClick={() => setActiveProjectIndex(0)}
                    className="group/btn relative inline-flex items-center gap-3 px-6 py-3.5 bg-black/80 hover:bg-[#FF6800] border border-[#FF6800]/50 hover:border-[#FF6800] text-[#FF6800] hover:text-black transition-colors duration-200 cursor-pointer w-fit shadow-[0_4px_20px_rgba(0,0,0,0.8),0_0_15px_rgba(255,104,0,0.12)] hover:shadow-[0_0_30px_rgba(255,104,0,0.4)]"
                  >
                    <span className="absolute -top-[2px] -left-[2px] w-1.5 h-1.5 border-t border-l border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />
                    <span className="absolute -top-[2px] -right-[2px] w-1.5 h-1.5 border-t border-r border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />
                    <span className="absolute -bottom-[2px] -left-[2px] w-1.5 h-1.5 border-b border-l border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />
                    <span className="absolute -bottom-[2px] -right-[2px] w-1.5 h-1.5 border-b border-r border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />

                    <span className="font-sans text-xs uppercase tracking-[0.24em] font-extrabold text-[#FF6800] group-hover/btn:text-black transition-colors duration-200 pointer-events-none select-none">
                      VIEW
                    </span>
                    <span className="w-5 h-5 flex items-center justify-center border border-[#FF6800]/40 group-hover/btn:border-black/40 bg-[#FF6800]/10 group-hover/btn:bg-black/10 transition-colors duration-200 pointer-events-none">
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6800] group-hover/btn:text-black transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 pointer-events-none" />
                    </span>
                  </button>
                  <div className="flex items-center gap-1.5 font-mono text-xs tracking-[0.25em] select-none">
                    <span className="text-[#FF6800] font-bold">01</span>
                    <span className="text-neutral-600 font-light">/</span>
                    <span className="text-neutral-500 font-medium">05</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Expansive Framed Museum Artwork */}
              <motion.div 
                className="lg:col-span-7 group cursor-pointer order-1 lg:order-2"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveProjectIndex(0)}
              >
                <div className="relative">
                  {/* Subtle Archival Corner Brackets (Harmonizing with Hero Piece) */}
                  <div className="absolute -top-2.5 -left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#FF6800] z-30 pointer-events-none transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                  <div className="absolute -top-2.5 -right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#FF6800] z-30 pointer-events-none transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="absolute -bottom-2.5 -left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#FF6800] z-30 pointer-events-none transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />
                  <div className="absolute -bottom-2.5 -right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#FF6800] z-30 pointer-events-none transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />

                  {/* Museum Matting Frame with Direct-Flash Contrast Image */}
                  <div className="relative w-full aspect-[16/10] bg-white p-2.5 sm:p-3.5 border-4 border-white shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                    <div className="relative w-full h-full overflow-hidden bg-black">
                      <motion.img 
                        src={p1.image} 
                        alt={p1.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* SPREAD 02: High-Fashion Asymmetrical Diptych                         */}
        {/* Weddings & celebrations + BRAND & PRODUCT IMAGERY                    */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-20 items-start">
          
          {/* Left Diptych Frame: Weddings & celebrations (Vertical 4:5 portrait) */}
          {p2 && (
            <motion.div 
              className="lg:col-span-5 flex flex-col group/card cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              onClick={() => setActiveProjectIndex(1)}
            >
              <div className="relative">
                {/* Archival Corner Accents */}
                <div className="absolute -top-2 -left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#FF6800]/80 z-20 pointer-events-none" />
                <div className="absolute -bottom-2 -right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#FF6800]/80 z-20 pointer-events-none" />

                <div className="relative w-full aspect-[4/5] bg-white p-2.5 sm:p-3 border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden transition-transform duration-700 ease-out group-hover/card:scale-[1.01]">
                  <div className="relative w-full h-full overflow-hidden bg-black">
                    <motion.img 
                      src={p2.image} 
                      alt={p2.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale brightness-95 group-hover/card:grayscale-0 group-hover/card:scale-[1.03] transition-all duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1.5 font-mono text-xs tracking-[0.25em] select-none">
                    <span className="text-[#FF6800] font-bold">02</span>
                    <span className="text-neutral-600 font-light">/</span>
                    <span className="text-neutral-500 font-medium">05</span>
                  </div>
                  <div className="h-[1px] w-8 bg-gradient-to-r from-[#FF6800]/50 to-transparent" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight mb-4 uppercase drop-shadow-[0_2px_14px_rgba(255,104,0,0.12)]">
                  {p2.title}
                </h3>

                <div className="relative pl-4 border-l-2 border-[#FF6800]/30 mb-6">
                  <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-light">
                    {truncateWithMore(p2.description)}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProjectIndex(1);
                  }}
                  className="group/btn relative inline-flex items-center gap-2.5 px-5 py-3 bg-black/80 hover:bg-[#FF6800] border border-[#FF6800]/50 hover:border-[#FF6800] text-[#FF6800] hover:text-black transition-colors duration-200 cursor-pointer w-fit shadow-[0_4px_20px_rgba(0,0,0,0.8),0_0_15px_rgba(255,104,0,0.12)] hover:shadow-[0_0_25px_rgba(255,104,0,0.4)]"
                >
                  <span className="absolute -top-[2px] -left-[2px] w-1.5 h-1.5 border-t border-l border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />
                  <span className="absolute -top-[2px] -right-[2px] w-1.5 h-1.5 border-t border-r border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />
                  <span className="absolute -bottom-[2px] -left-[2px] w-1.5 h-1.5 border-b border-l border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />
                  <span className="absolute -bottom-[2px] -right-[2px] w-1.5 h-1.5 border-b border-r border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />

                  <span className="font-sans text-xs uppercase tracking-[0.24em] font-extrabold text-[#FF6800] group-hover/btn:text-black transition-colors duration-200 pointer-events-none select-none">
                    VIEW
                  </span>
                  <span className="w-5 h-5 flex items-center justify-center border border-[#FF6800]/40 group-hover/btn:border-black/40 bg-[#FF6800]/10 group-hover/btn:bg-black/10 transition-colors duration-200 pointer-events-none">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6800] group-hover/btn:text-black transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 pointer-events-none" />
                  </span>
                </button>
              </div>
            </motion.div>
          )}

          {/* Right Diptych Frame: BRAND & PRODUCT IMAGERY (Horizontal 16:10 frame offset higher) */}
          {p3 && (
            <motion.div 
              className="lg:col-span-7 flex flex-col group/card cursor-pointer lg:pt-14"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
              onClick={() => setActiveProjectIndex(2)}
            >
              <div className="relative">
                {/* Archival Corner Accents */}
                <div className="absolute -top-2 -right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#FF6800]/80 z-20 pointer-events-none" />
                <div className="absolute -bottom-2 -left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#FF6800]/80 z-20 pointer-events-none" />

                <div className="relative w-full aspect-[16/10] bg-white p-2.5 sm:p-3.5 border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden transition-transform duration-700 ease-out group-hover/card:scale-[1.01]">
                  <div className="relative w-full h-full overflow-hidden bg-black">
                    <motion.img 
                      src={p3.image} 
                      alt={p3.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale brightness-95 group-hover/card:grayscale-0 group-hover/card:scale-[1.03] transition-all duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1.5 font-mono text-xs tracking-[0.25em] select-none">
                    <span className="text-[#FF6800] font-bold">03</span>
                    <span className="text-neutral-600 font-light">/</span>
                    <span className="text-neutral-500 font-medium">05</span>
                  </div>
                  <div className="h-[1px] w-8 bg-gradient-to-r from-[#FF6800]/50 to-transparent" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight mb-4 uppercase drop-shadow-[0_2px_14px_rgba(255,104,0,0.12)]">
                  {p3.title}
                </h3>

                <div className="relative pl-4 border-l-2 border-[#FF6800]/30 mb-6 max-w-xl">
                  <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-light">
                    {truncateWithMore(p3.description)}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProjectIndex(2);
                  }}
                  className="group/btn relative inline-flex items-center gap-2.5 px-5 py-3 bg-black/80 hover:bg-[#FF6800] border border-[#FF6800]/50 hover:border-[#FF6800] text-[#FF6800] hover:text-black transition-colors duration-200 cursor-pointer w-fit shadow-[0_4px_20px_rgba(0,0,0,0.8),0_0_15px_rgba(255,104,0,0.12)] hover:shadow-[0_0_25px_rgba(255,104,0,0.4)]"
                >
                  <span className="absolute -top-[2px] -left-[2px] w-1.5 h-1.5 border-t border-l border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />
                  <span className="absolute -top-[2px] -right-[2px] w-1.5 h-1.5 border-t border-r border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />
                  <span className="absolute -bottom-[2px] -left-[2px] w-1.5 h-1.5 border-b border-l border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />
                  <span className="absolute -bottom-[2px] -right-[2px] w-1.5 h-1.5 border-b border-r border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />

                  <span className="font-sans text-xs uppercase tracking-[0.24em] font-extrabold text-[#FF6800] group-hover/btn:text-black transition-colors duration-200 pointer-events-none select-none">
                    VIEW
                  </span>
                  <span className="w-5 h-5 flex items-center justify-center border border-[#FF6800]/40 group-hover/btn:border-black/40 bg-[#FF6800]/10 group-hover/btn:bg-black/10 transition-colors duration-200 pointer-events-none">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6800] group-hover/btn:text-black transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 pointer-events-none" />
                  </span>
                </button>
              </div>
            </motion.div>
          )}

        </div>

        {/* ==================================================================== */}
        {/* SPREAD 03: The Intimate Offset                                      */}
        {/* Family & Little ones                                                 */}
        {/* ==================================================================== */}
        {p4 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-center">
            
            {/* Text & Narrative Column (Offset on Left) */}
            <motion.div 
              className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1.5 font-mono text-xs tracking-[0.25em] select-none">
                  <span className="text-[#FF6800] font-bold">04</span>
                  <span className="text-neutral-600 font-light">/</span>
                  <span className="text-neutral-500 font-medium">05</span>
                </div>
                <div className="h-[1px] w-12 bg-gradient-to-r from-[#FF6800]/60 to-transparent" />
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-white font-bold tracking-tight mb-5 uppercase leading-[1.08] drop-shadow-[0_2px_18px_rgba(255,104,0,0.15)]">
                {p4.title}
              </h3>

              {/* Truncated, Sharp Supporting Statement with Curatorial Hairline */}
              <div className="relative pl-5 sm:pl-6 border-l-2 border-[#FF6800]/40 mb-8 max-w-lg">
                <p className="text-neutral-200 text-sm sm:text-base md:text-[17px] leading-[1.7] font-light">
                  {truncateWithMore(p4.description)}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveProjectIndex(3)}
                className="group/btn relative inline-flex items-center gap-3 px-6 py-3.5 bg-black/80 hover:bg-[#FF6800] border border-[#FF6800]/50 hover:border-[#FF6800] text-[#FF6800] hover:text-black transition-colors duration-200 cursor-pointer w-fit shadow-[0_4px_20px_rgba(0,0,0,0.8),0_0_15px_rgba(255,104,0,0.12)] hover:shadow-[0_0_30px_rgba(255,104,0,0.4)]"
              >
                <span className="absolute -top-[2px] -left-[2px] w-1.5 h-1.5 border-t border-l border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />
                <span className="absolute -top-[2px] -right-[2px] w-1.5 h-1.5 border-t border-r border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />
                <span className="absolute -bottom-[2px] -left-[2px] w-1.5 h-1.5 border-b border-l border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />
                <span className="absolute -bottom-[2px] -right-[2px] w-1.5 h-1.5 border-b border-r border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />

                <span className="font-sans text-xs uppercase tracking-[0.24em] font-extrabold text-[#FF6800] group-hover/btn:text-black transition-colors duration-200 pointer-events-none select-none">
                  VIEW
                </span>
                <span className="w-5 h-5 flex items-center justify-center border border-[#FF6800]/40 group-hover/btn:border-black/40 bg-[#FF6800]/10 group-hover/btn:bg-black/10 transition-colors duration-200 pointer-events-none">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6800] group-hover/btn:text-black transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 pointer-events-none" />
                </span>
              </button>
            </motion.div>

            {/* Artwork Frame (Warm 4:3 Museum Frame on Right) */}
            <motion.div 
              className="lg:col-span-7 order-1 lg:order-2 group/card cursor-pointer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveProjectIndex(3)}
            >
              <div className="relative">
                <div className="absolute -top-2 -right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#FF6800]/80 z-20 pointer-events-none" />
                <div className="absolute -bottom-2 -left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#FF6800]/80 z-20 pointer-events-none" />

                <div className="relative w-full aspect-[4/3] bg-white p-2.5 sm:p-3.5 border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden transition-transform duration-700 ease-out group-hover/card:scale-[1.01]">
                  <div className="relative w-full h-full overflow-hidden bg-black">
                    <motion.img 
                      src={p4.image} 
                      alt={p4.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale brightness-95 group-hover/card:grayscale-0 group-hover/card:scale-[1.03] transition-all duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        )}

        {/* ==================================================================== */}
        {/* SPREAD 04: The Runway Letterbox                                      */}
        {/* Lifestyle (Panoramic 21:9 Spread)                                    */}
        {/* ==================================================================== */}
        {p5 && (
          <motion.div 
            className="group/card cursor-pointer flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setActiveProjectIndex(4)}
          >
            <div className="relative">
              {/* Corner Accents on Expansive Letterbox Frame */}
              <div className="absolute -top-2.5 -left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#FF6800] z-20 pointer-events-none" />
              <div className="absolute -top-2.5 -right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#FF6800] z-20 pointer-events-none" />
              <div className="absolute -bottom-2.5 -left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#FF6800] z-20 pointer-events-none" />
              <div className="absolute -bottom-2.5 -right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#FF6800] z-20 pointer-events-none" />

              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-white p-2.5 sm:p-4 border-4 border-white shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden transition-transform duration-700 ease-out group-hover/card:scale-[1.01]">
                <div className="relative w-full h-full overflow-hidden bg-black">
                  <motion.img 
                    src={p5.image} 
                    alt={p5.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover/card:grayscale-0 group-hover/card:scale-[1.03] transition-all duration-700 ease-out"
                  />
                </div>
              </div>
            </div>

            {/* Editorial Caption Bar */}
            <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 font-mono text-xs tracking-[0.25em] select-none">
                  <span className="text-[#FF6800] font-bold">05</span>
                  <span className="text-neutral-600 font-light">/</span>
                  <span className="text-neutral-500 font-medium">05</span>
                </div>
                <div className="h-4 w-[1px] bg-[#FF6800]/40" />
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold uppercase tracking-tight drop-shadow-[0_2px_14px_rgba(255,104,0,0.12)]">
                  {p5.title}
                </h3>
              </div>

              <p className="text-neutral-200 text-sm sm:text-base font-light max-w-xl">
                {truncateWithMore(p5.description)}
              </p>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveProjectIndex(4);
                }}
                className="group/btn relative inline-flex items-center gap-2.5 px-5 py-3 bg-black/80 hover:bg-[#FF6800] border border-[#FF6800]/50 hover:border-[#FF6800] text-[#FF6800] hover:text-black transition-colors duration-200 cursor-pointer w-fit shadow-[0_4px_20px_rgba(0,0,0,0.8),0_0_15px_rgba(255,104,0,0.12)] hover:shadow-[0_0_25px_rgba(255,104,0,0.4)]"
              >
                <span className="absolute -top-[2px] -left-[2px] w-1.5 h-1.5 border-t border-l border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />
                <span className="absolute -top-[2px] -right-[2px] w-1.5 h-1.5 border-t border-r border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />
                <span className="absolute -bottom-[2px] -left-[2px] w-1.5 h-1.5 border-b border-l border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />
                <span className="absolute -bottom-[2px] -right-[2px] w-1.5 h-1.5 border-b border-r border-[#FF6800] group-hover/btn:border-black transition-colors duration-200 pointer-events-none" />

                <span className="font-sans text-xs uppercase tracking-[0.24em] font-extrabold text-[#FF6800] group-hover/btn:text-black transition-colors duration-200 pointer-events-none select-none">
                  VIEW
                </span>
                <span className="w-5 h-5 flex items-center justify-center border border-[#FF6800]/40 group-hover/btn:border-black/40 bg-[#FF6800]/10 group-hover/btn:bg-black/10 transition-colors duration-200 pointer-events-none">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6800] group-hover/btn:text-black transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 pointer-events-none" />
                </span>
              </button>
            </div>
          </motion.div>
        )}

        {/* ==================================================================== */}
        {/* SPREAD 05: The Atelier Wildcard / Bespoke Brief                      */}
        {/* Unclassified Commissions & Direct Conversation                       */}
        {/* ==================================================================== */}
        <motion.div
          id="portfolio-wildcard"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="relative w-full py-8 sm:py-14"
        >
          <div className="relative max-w-4xl mx-auto group">
            
            {/* Luminous Ambient Darkroom Aura */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#FF6800]/10 rounded-full blur-[90px] pointer-events-none group-hover:bg-[#FF6800]/15 transition-all duration-700" />

            {/* Architectural Obsidian Exhibition Chamber */}
            <div className="relative bg-gradient-to-b from-[#101013] via-[#0a0a0c] to-[#050507] p-8 sm:p-14 md:p-20 border border-[#FF6800]/30 hover:border-[#FF6800]/50 transition-colors duration-500 shadow-[0_30px_100px_rgba(0,0,0,0.95),0_0_50px_rgba(255,104,0,0.08)] overflow-hidden flex flex-col items-center text-center">
              
              {/* Archival Corner Registration Geometry (Glowing High-Precision Viewfinder Corners) */}
              <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#FF6800] z-20 pointer-events-none drop-shadow-[0_0_10px_rgba(255,104,0,0.6)] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#FF6800] z-20 pointer-events-none drop-shadow-[0_0_10px_rgba(255,104,0,0.6)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              <div className="absolute bottom-3.5 left-3.5 sm:bottom-5 sm:left-5 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#FF6800] z-20 pointer-events-none drop-shadow-[0_0_10px_rgba(255,104,0,0.6)] group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
              <div className="absolute bottom-3.5 right-3.5 sm:bottom-5 sm:right-5 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#FF6800] z-20 pointer-events-none drop-shadow-[0_0_10px_rgba(255,104,0,0.6)] group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />

              {/* Cardinal Darkroom Registration Ticks */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-[#FF6800]/60 pointer-events-none" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-[#FF6800]/60 pointer-events-none" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-[2px] bg-[#FF6800]/60 pointer-events-none" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-[2px] bg-[#FF6800]/60 pointer-events-none" />

              {/* Subtle Archival Optical Grid */}
              <div 
                className="absolute inset-0 opacity-[0.035] pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#FF6800 1.25px, transparent 1.25px)`,
                  backgroundSize: '24px 24px'
                }}
              />

              {/* Section Headline */}
              <h3 className="relative z-10 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white font-extrabold tracking-tight mb-5 sm:mb-7 leading-[1.12] max-w-2xl text-balance drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
                {WILDCARD_DATA.title}
              </h3>

              {/* Supporting Copy */}
              <div className="relative z-10 text-neutral-300 text-base sm:text-lg md:text-xl leading-relaxed font-light mb-10 sm:mb-12 max-w-xl mx-auto">
                <p className="block text-neutral-300">{WILDCARD_DATA.line1}</p>
                <p className="block mt-2 sm:mt-2.5 text-white font-normal">{WILDCARD_DATA.line2}</p>
              </div>

              {/* Bespoke Architectural CTA (Zero-Pill, Razor-Sharp Luxury Button) */}
              <button
                type="button"
                onClick={() => scrollToBooking('Outside The Frame')}
                className="group/btn relative inline-flex items-center gap-3.5 px-9 sm:px-11 py-4 sm:py-4.5 bg-black border-2 border-[#FF6800] hover:bg-[#FF6800] text-[#FF6800] hover:text-black transition-all duration-300 shadow-[0_0_25px_rgba(255,104,0,0.25)] hover:shadow-[0_0_40px_rgba(255,104,0,0.6)] active:scale-[0.98] cursor-pointer"
              >
                {/* Button Viewfinder Registration Corners */}
                <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#FF6800] group-hover/btn:border-black transition-colors duration-300" />
                <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#FF6800] group-hover/btn:border-black transition-colors duration-300" />
                <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[#FF6800] group-hover/btn:border-black transition-colors duration-300" />
                <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#FF6800] group-hover/btn:border-black transition-colors duration-300" />

                <span className="relative z-10 font-sans text-xs sm:text-sm uppercase tracking-[0.24em] font-extrabold transition-colors duration-300">
                  {WILDCARD_DATA.tag}
                </span>
                <ArrowUpRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </button>

            </div>
          </div>
        </motion.div>

      </div>

      {/* ==================================================================== */}
      {/* Lightbox Modal: Interactive Museum Gallery Proof-Sheet               */}
      {/* ==================================================================== */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 md:p-10 select-none"
            onClick={() => setActiveProjectIndex(null)}
          >
            {/* Top Bar: Title, Index & Close */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-[#FF6800]">
                  0{(activeProjectIndex! + 1)} / 0{PROJECTS.length}
                </span>
                <span className="font-serif text-white font-bold text-base sm:text-lg uppercase tracking-wide">
                  {activeProject.title}
                </span>
              </div>

              <button 
                onClick={() => setActiveProjectIndex(null)}
                className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white uppercase tracking-widest transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <span>CLOSE</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Central Artwork with Navigation Chevrons */}
            <div className="flex-1 w-full flex items-center justify-between px-2 sm:px-6 relative" onClick={(e) => e.stopPropagation()}>
              
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrevProject}
                className="p-3 text-neutral-400 hover:text-[#FF6800] transition-colors rounded-full hover:bg-neutral-900/50 cursor-pointer hidden sm:block"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Artwork Container */}
              <div className="relative p-2.5 sm:p-4 bg-white border-4 border-white shadow-2xl max-w-full max-h-[75vh] flex flex-col items-center mx-auto">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  referrerPolicy="no-referrer"
                  className="max-h-[55vh] sm:max-h-[60vh] w-auto max-w-[80vw] object-contain"
                />
                <p className="text-neutral-700 text-xs sm:text-sm text-center mt-3 max-w-lg font-light">
                  {activeProject.description}
                </p>
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNextProject}
                className="p-3 text-neutral-400 hover:text-[#FF6800] transition-colors rounded-full hover:bg-neutral-900/50 cursor-pointer hidden sm:block"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Bottom Keyboard Guide */}
            <div className="w-full flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-3 border-t border-neutral-900">
              <span className="hidden sm:inline">USE ← / → KEYS TO NAVIGATE</span>
              <span className="ml-auto">PRESS ESC TO CLOSE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
