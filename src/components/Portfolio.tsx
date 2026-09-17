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
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-bold tracking-tight mb-4 uppercase leading-tight">
                  {p1.title}
                </h3>

                {/* Truncated, Sharp Supporting Statement */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-md">
                  {p1.description}
                </p>

                {/* Tactile Editorial Action */}
                <div className="flex items-center gap-6">
                  <button
                    type="button"
                    onClick={() => setActiveProjectIndex(0)}
                    className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#FF6800] hover:text-white transition-colors font-bold cursor-pointer w-fit"
                  >
                    <span>EXPLORE EXHIBIT</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <span className="text-neutral-600 text-xs font-mono select-none">01 / 05</span>
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
              className="lg:col-span-5 flex flex-col group cursor-pointer"
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

                <div className="relative w-full aspect-[4/5] bg-white p-2.5 sm:p-3 border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                  <div className="relative w-full h-full overflow-hidden bg-black">
                    <motion.img 
                      src={p2.image} 
                      alt={p2.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-7">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-neutral-500 text-xs font-mono select-none">02 / 05</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight mb-3 uppercase">
                  {p2.title}
                </h3>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light mb-5">
                  {p2.description}
                </p>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProjectIndex(1);
                  }}
                  className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-[#FF6800] hover:text-white transition-colors font-bold cursor-pointer"
                >
                  <span>VIEW</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Right Diptych Frame: BRAND & PRODUCT IMAGERY (Horizontal 16:10 frame offset higher) */}
          {p3 && (
            <motion.div 
              className="lg:col-span-7 flex flex-col group cursor-pointer lg:pt-14"
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

                <div className="relative w-full aspect-[16/10] bg-white p-2.5 sm:p-3.5 border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                  <div className="relative w-full h-full overflow-hidden bg-black">
                    <motion.img 
                      src={p3.image} 
                      alt={p3.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-7">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-neutral-500 text-xs font-mono select-none">03 / 05</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight mb-3 uppercase">
                  {p3.title}
                </h3>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light mb-5 max-w-xl">
                  {p3.description}
                </p>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProjectIndex(2);
                  }}
                  className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-[#FF6800] hover:text-white transition-colors font-bold cursor-pointer"
                >
                  <span>VIEW</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
              <div className="flex items-center gap-3 mb-3">
                <span className="text-neutral-500 text-xs font-mono select-none">04 / 05</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-bold tracking-tight mb-4 uppercase leading-tight">
                {p4.title}
              </h3>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-md">
                {p4.description}
              </p>

              <button
                type="button"
                onClick={() => setActiveProjectIndex(3)}
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#FF6800] hover:text-white transition-colors font-bold cursor-pointer w-fit"
              >
                <span>EXPLORE EXHIBIT</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>

            {/* Artwork Frame (Warm 4:3 Museum Frame on Right) */}
            <motion.div 
              className="lg:col-span-7 order-1 lg:order-2 group cursor-pointer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveProjectIndex(3)}
            >
              <div className="relative">
                <div className="absolute -top-2 -right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#FF6800]/80 z-20 pointer-events-none" />
                <div className="absolute -bottom-2 -left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#FF6800]/80 z-20 pointer-events-none" />

                <div className="relative w-full aspect-[4/3] bg-white p-2.5 sm:p-3.5 border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                  <div className="relative w-full h-full overflow-hidden bg-black">
                    <motion.img 
                      src={p4.image} 
                      alt={p4.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
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
            className="group cursor-pointer flex flex-col"
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

              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-white p-2.5 sm:p-4 border-4 border-white shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                <div className="relative w-full h-full overflow-hidden bg-black">
                  <motion.img 
                    src={p5.image} 
                    alt={p5.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  />
                </div>
              </div>
            </div>

            {/* Editorial Caption Bar */}
            <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2">
              <div className="flex items-baseline gap-4">
                <span className="text-neutral-500 text-xs font-mono select-none">05 / 05</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold uppercase tracking-tight">
                  {p5.title}
                </h3>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base font-light max-w-xl">
                {p5.description}
              </p>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveProjectIndex(4);
                }}
                className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-[#FF6800] hover:text-white transition-colors font-bold cursor-pointer"
              >
                <span>VIEW</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
          className="relative w-full py-8 sm:py-12"
        >
          <div className="relative max-w-4xl mx-auto">
            
            {/* Outer Dimensional Plate Rim (Architectural Indent & Bevel) */}
            <div className="relative p-[3px] sm:p-[4px] rounded-2xl bg-[#060608] shadow-[0_24px_60px_rgba(0,0,0,0.95),inset_0_6px_18px_rgba(0,0,0,1),inset_0_-1px_1.5px_rgba(255,255,255,0.1)] border-t border-black border-b border-white/12">
              
              {/* Inner Recessed Chamber with Deep Inset Shadow & Dark Bevel */}
              <div className="relative rounded-[14px] bg-gradient-to-b from-[#0c0c0f] via-[#09090b] to-[#070709] px-6 py-14 sm:px-12 sm:py-20 md:px-16 md:py-24 border border-neutral-800/70 shadow-[inset_0_8px_30px_rgba(0,0,0,0.95),inset_0_2px_4px_rgba(0,0,0,1),inset_0_-1px_2px_rgba(255,255,255,0.06)] overflow-hidden flex flex-col items-center text-center">
                
                {/* Archival Corner Registration Geometry (Iconic Orange Corner Accents) */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-l-2 border-[#FF6800] z-20 pointer-events-none" />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-r-2 border-[#FF6800] z-20 pointer-events-none" />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-4 h-4 sm:w-5 sm:h-5 border-b-2 border-l-2 border-[#FF6800] z-20 pointer-events-none" />
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-4 h-4 sm:w-5 sm:h-5 border-b-2 border-r-2 border-[#FF6800] z-20 pointer-events-none" />

                {/* Center Cardinal Registration Crosshairs */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-[1px] bg-[#FF6800]/40 pointer-events-none" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[1px] bg-[#FF6800]/40 pointer-events-none" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[1px] bg-[#FF6800]/40 pointer-events-none" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-6 w-[1px] bg-[#FF6800]/40 pointer-events-none" />

                {/* Subtle Archival Grid Underlay */}
                <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#FF6800 1px, transparent 1px)`,
                    backgroundSize: '28px 28px'
                  }}
                />

                {/* Section Headline */}
                <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight mb-4 sm:mb-6 leading-snug max-w-2xl">
                  {WILDCARD_DATA.title}
                </h3>

                {/* Supporting Copy */}
                <p className="text-neutral-300 text-base sm:text-lg md:text-xl leading-relaxed font-light mb-10 sm:mb-12 max-w-xl">
                  <span className="block">{WILDCARD_DATA.line1}</span>
                  <span className="block mt-2 sm:mt-2.5 text-neutral-200">{WILDCARD_DATA.line2}</span>
                </p>

                {/* Recessed Pill Depression / Cavity ("Hole in the wall" depth matching Hero CTA) */}
                <div className="p-[3px] rounded-full bg-[#050505] shadow-[0_6px_20px_rgba(0,0,0,0.95),inset_0_4px_12px_rgba(0,0,0,1),inset_0_-1px_1px_rgba(255,255,255,0.1)] border-t border-black border-b border-white/15">
                  <button
                    type="button"
                    onClick={() => scrollToBooking('Outside The Frame')}
                    className="group relative inline-flex items-center gap-3 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-[#1c1c1e] hover:bg-[#232326] shadow-[inset_0_5px_12px_rgba(0,0,0,0.95),inset_0_1px_3px_rgba(0,0,0,1),inset_0_-1px_2px_rgba(255,255,255,0.12)] border-t border-black/80 border-b border-white/10 transition-all duration-300 active:scale-[0.98] cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm uppercase tracking-[0.22em] font-extrabold text-[#FF6800] group-hover:text-white transition-colors">
                      OUTSIDE THE FRAME
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#FF6800] group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

              </div>
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
