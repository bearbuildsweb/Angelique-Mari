import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { PROJECTS } from '../data';

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="relative w-full bg-warm-100 text-warm-950 py-24 md:py-36 px-6 md:px-12 z-10 border-t border-warm-900/10">
      
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 pb-8 border-b border-warm-900/10">
        <div className="flex flex-col">
          <span className="font-mono text-xs uppercase tracking-widest text-warm-500 mb-3">/ CURATED PORTFOLIO</span>
          <h2 className="text-5xl md:text-7xl font-serif tracking-tighter uppercase font-light leading-none">
            Selected <span className="font-display font-extrabold italic text-warm-900">Campaigns</span>
          </h2>
        </div>
        <div className="mt-6 md:mt-0 max-w-sm font-mono text-xs text-warm-500 leading-relaxed uppercase">
          A collection of uncompromised visual directives. Blending editorial couture, high-contrast structural portraits, and ambient underground narratives.
        </div>
      </div>

      {/* Main Exhibition Catalog Items */}
      <div className="max-w-7xl mx-auto space-y-36 md:space-y-56">
        {PROJECTS.map((project, index) => {
          
          {/* RENDER BASED ON CUSTOM EDITORIAL LAYOUT TYPE */}
          if (project.layoutType === 'overlapping') {
            return (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
                
                {/* Museum Index Badge */}
                <div className="absolute top-0 left-0 font-mono text-[9px] uppercase tracking-widest text-warm-400">
                  {project.museumNumber} • CATA.2026
                </div>

                {/* Left side: descriptions with deep negative space */}
                <div className="col-span-1 lg:col-span-5 flex flex-col pt-8 lg:pr-12">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-warm-500 mb-2">
                    {project.category}
                  </span>
                  
                  <h3 className="text-4xl md:text-5xl font-serif text-warm-900 leading-none uppercase tracking-tight mb-6">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-warm-500 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="border-t border-warm-900/10 pt-4 flex flex-col font-mono text-[10px] text-warm-400 gap-1 uppercase">
                    <span>Location: {project.location}</span>
                    <span>{project.credits}</span>
                    <span>Year: {project.year}</span>
                  </div>

                  {/* Interactive Note Button */}
                  <div className="mt-8">
                    <button 
                      id={`p-note-btn-${project.id}`}
                      onClick={() => setActiveProject(activeProject?.id === project.id ? null : project)}
                      className="font-mono text-[10px] uppercase tracking-wider text-warm-900 underline hover:text-warm-500 transition-colors"
                    >
                      {activeProject?.id === project.id ? '[ Close Catalog Notes ]' : '[ Open Director Notes ]'}
                    </button>
                  </div>
                </div>

                {/* Right side: overlapping layered images */}
                <div className="col-span-1 lg:col-span-7 relative flex justify-center items-center">
                  <div className="relative w-full max-w-[500px] aspect-[4/5] bg-warm-200 overflow-hidden group">
                    <div className="absolute inset-0 bg-warm-900/5 group-hover:bg-transparent transition-all duration-700 z-10" />
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                      whileInView={{ scale: [1.05, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                  
                  {/* Overlapping small detail photo */}
                  <motion.div 
                    className="absolute -bottom-10 -left-6 md:-left-12 w-1/2 max-w-[240px] aspect-[3/4] bg-warm-300 shadow-2xl overflow-hidden border border-warm-100/30 hidden sm:block z-20 group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} detail`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover scale-150 grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 text-white text-[8px] font-mono rounded">
                      MACRO 1.5X
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          }

          if (project.layoutType === 'asymmetric-left') {
            return (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left: Oversized Image with full-bleed feel */}
                <div className="col-span-1 lg:col-span-8 relative">
                  <div className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-widest text-warm-50 z-20 bg-warm-900 px-2 py-1">
                    {project.museumNumber} / COLL
                  </div>

                  <div className="w-full aspect-[4/3] md:aspect-[16/10] bg-warm-200 overflow-hidden group relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-warm-950/20 to-transparent z-10" />
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                      whileInView={{ scale: [1.08, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8 }}
                    />
                  </div>
                </div>

                {/* Right: Asymmetrical text offset */}
                <div className="col-span-1 lg:col-span-4 flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-warm-500 mb-2">
                    {project.category}
                  </span>
                  
                  <h3 className="text-4xl font-serif text-warm-900 leading-none uppercase mb-6">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-warm-500 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="border-t border-warm-900/10 pt-4 flex flex-col font-mono text-[10px] text-warm-400 gap-1 uppercase">
                    <span>Location: {project.location}</span>
                    <span>{project.credits}</span>
                    <span>Year: {project.year}</span>
                  </div>

                  {/* Interactive Button */}
                  <div className="mt-6">
                    <button 
                      id={`p-note-btn-${project.id}`}
                      onClick={() => setActiveProject(activeProject?.id === project.id ? null : project)}
                      className="font-mono text-[10px] uppercase tracking-wider text-warm-900 underline hover:text-warm-500 transition-colors"
                    >
                      {activeProject?.id === project.id ? '[ Close Notes ]' : '[ Directives ]'}
                    </button>
                  </div>
                </div>

              </div>
            );
          }

          if (project.layoutType === 'asymmetric-right') {
            return (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left: Asymmetrical text offset */}
                <div className="col-span-1 lg:col-span-4 order-2 lg:order-1 flex flex-col lg:pl-12">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-warm-500 mb-2">
                    {project.category}
                  </span>
                  
                  <h3 className="text-4xl font-serif text-warm-900 leading-none uppercase mb-6">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-warm-500 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="border-t border-warm-900/10 pt-4 flex flex-col font-mono text-[10px] text-warm-400 gap-1 uppercase">
                    <span>Location: {project.location}</span>
                    <span>{project.credits}</span>
                    <span>Year: {project.year}</span>
                  </div>

                  {/* Interactive Button */}
                  <div className="mt-6">
                    <button 
                      id={`p-note-btn-${project.id}`}
                      onClick={() => setActiveProject(activeProject?.id === project.id ? null : project)}
                      className="font-mono text-[10px] uppercase tracking-wider text-warm-900 underline hover:text-warm-500 transition-colors"
                    >
                      {activeProject?.id === project.id ? '[ Close Notes ]' : '[ Inquire Notes ]'}
                    </button>
                  </div>
                </div>

                {/* Right: Oversized Image with full-bleed feel */}
                <div className="col-span-1 lg:col-span-8 order-1 lg:order-2 relative">
                  <div className="absolute top-4 right-4 font-mono text-[9px] uppercase tracking-widest text-warm-900 z-20 bg-white px-2 py-1">
                    {project.museumNumber} / CATA
                  </div>

                  <div className="w-full aspect-[4/5] md:aspect-[16/11] bg-warm-200 overflow-hidden group relative">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                      whileInView={{ scale: [1.05, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                </div>

              </div>
            );
          }

          {/* Full bleed artwork banner style */}
          return (
            <div key={project.id} className="relative w-full overflow-hidden border border-warm-900/10 bg-warm-950 text-warm-50 p-6 md:p-16 rounded-lg shadow-2xl">
              
              <div className="absolute top-6 left-6 font-mono text-[9px] text-warm-400 uppercase tracking-widest z-20">
                {project.museumNumber} • GLOBAL EXHIBITION
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-12">
                <div className="col-span-1 lg:col-span-6">
                  <span className="font-mono text-[10px] text-amber-300 uppercase tracking-widest mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-serif leading-none uppercase mb-6 tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-warm-300 max-w-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="col-span-1 lg:col-span-6 flex flex-col items-start lg:items-end font-mono text-[10px] text-warm-400 gap-1 uppercase">
                  <span>Location: {project.location}</span>
                  <span>{project.credits}</span>
                  <button 
                    id={`p-note-btn-${project.id}`}
                    onClick={() => setActiveProject(activeProject?.id === project.id ? null : project)}
                    className="font-mono text-[10px] uppercase tracking-wider text-amber-300 underline mt-4 hover:text-white transition-colors"
                  >
                    {activeProject?.id === project.id ? '[ Hide Specifications ]' : '[ Read Project Concept Specifications ]'}
                  </button>
                </div>
              </div>

              {/* Parallax full-bleed background inside a contained aspect box */}
              <div className="mt-12 w-full aspect-[16/9] bg-warm-900 overflow-hidden relative rounded">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                  whileInView={{ scale: [1.1, 1], y: [-20, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Drawer / Modal overlay for Director Notes (Cinema catalogue detail) */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-warm-950/90 z-50 flex items-center justify-center p-6 backdrop-blur-md"
            onClick={() => setActiveProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-warm-50 text-warm-950 w-full max-w-2xl border border-warm-900 p-8 md:p-12 shadow-2xl rounded relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close x */}
              <button 
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 font-mono text-xs uppercase text-warm-500 hover:text-warm-950 transition-colors"
              >
                [ Close ]
              </button>

              <span className="font-mono text-[9px] uppercase tracking-widest text-warm-400">
                {activeProject.museumNumber} • Creative Directives • {activeProject.year}
              </span>
              
              <h4 className="text-3xl font-serif uppercase tracking-tight text-warm-900 mt-2 mb-6">
                {activeProject.title} / Concept notes
              </h4>

              <div className="space-y-6 text-sm font-sans text-warm-800 leading-relaxed">
                <p>
                  <strong>Creative Director Vision Statement:</strong>
                  <br />
                  "The composition seeks to dissect negative space as an active protagonist. Instead of merely containing the subject, the empty room shapes the garments. We deliberately minimized key lighting and relied on secondary structural rays to evoke a feeling similar to an empty high-fashion art vault."
                </p>
                <p>
                  <strong>Composition Parameters:</strong>
                  <br />
                  - Camera: Hasselblad H6D-100c medium format.
                  <br />
                  - Film Archetype: Custom desaturated monochrome with organic grain multipliers.
                  <br />
                  - Lighting: Single linear high-angle beam, zero ambient bounce.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-warm-900/10 flex justify-between items-center">
                <span className="font-mono text-[10px] text-warm-500">ANGELIQUE-MARI STUDIO</span>
                <button 
                  onClick={() => setActiveProject(null)}
                  className="bg-warm-900 text-warm-50 font-mono text-[10px] uppercase tracking-widest px-6 py-2.5 hover:bg-warm-500 transition-colors"
                >
                  Confirm Entry
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
