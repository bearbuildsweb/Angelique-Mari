import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';

export default function Services() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

  const currentService = SERVICES[selectedServiceIndex];

  return (
    <section id="services" className="relative w-full bg-warm-950 text-warm-50 py-24 md:py-36 px-6 md:px-12 z-10">
      
      {/* Editorial Spread Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 pb-8 border-b border-white/10">
        <div className="flex flex-col">
          <span className="font-mono text-xs lg:text-sm uppercase tracking-widest text-warm-400 mb-3">/ SERVICES SPREAD</span>
          <h2 className="text-5xl md:text-7xl font-serif tracking-tighter uppercase font-light leading-none">
            Creative <span className="font-display font-extrabold italic text-amber-300">Directives</span>
          </h2>
        </div>
        <div className="mt-6 md:mt-0 max-w-sm font-mono text-xs lg:text-sm text-warm-300 leading-relaxed uppercase">
          [ CATALOGUE INDEX N. 02 ]
          <br />
          We collaborate with luxury labels, independent designers, and contemporary artists who appreciate uncompromising visual curation.
        </div>
      </div>

      {/* Main Spread Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
        
        {/* Left Side: Services Navigation Spread */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-between">
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {SERVICES.map((service, index) => {
              const isSelected = selectedServiceIndex === index;
              return (
                <div
                  key={service.id}
                  className="group py-8 cursor-pointer flex flex-col justify-start relative transition-colors duration-500"
                  onMouseEnter={() => setSelectedServiceIndex(index)}
                  onClick={() => setSelectedServiceIndex(index)}
                >
                  {/* Hover background highlight */}
                  <div className={`absolute inset-y-0 left-[-24px] right-[-24px] bg-white/[0.02] scale-x-95 opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100 ${isSelected ? 'scale-x-100 opacity-100 bg-white/[0.04]' : ''}`} />

                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex gap-4 md:gap-8 items-start">
                      {/* Service Number */}
                      <span className={`font-mono text-xs uppercase tracking-widest ${isSelected ? 'text-amber-300' : 'text-warm-500 group-hover:text-warm-300'} transition-colors duration-300 mt-1`}>
                        {service.number}
                      </span>
                      
                      {/* Service Title */}
                      <div className="flex flex-col">
                        <h3 className={`text-2xl md:text-4xl font-serif uppercase tracking-tight transition-colors duration-500 ${isSelected ? 'text-white' : 'text-warm-400 group-hover:text-warm-200'}`}>
                          {service.title}
                        </h3>
                        <span className={`font-mono text-[10px] lg:text-xs uppercase tracking-widest mt-1 transition-colors duration-500 ${isSelected ? 'text-amber-300/80' : 'text-warm-500 group-hover:text-warm-400'}`}>
                          {service.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Simple Right Arrow Indicator */}
                    <div className="flex items-center">
                      <span className={`font-mono text-xs uppercase tracking-widest transition-all duration-500 ${isSelected ? 'text-amber-300 translate-x-0' : 'text-transparent -translate-x-2'}`}>
                        [ SELECT ]
                      </span>
                    </div>
                  </div>

                  {/* Supporting service details block, visible when active */}
                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden relative z-10"
                      >
                        <div className="pl-8 md:pl-16 pr-4 pt-6 pb-2">
                          <p className="font-sans text-sm text-warm-300 leading-relaxed mb-6 max-w-xl">
                            {service.copy}
                          </p>
                          
                          {/* Bullet Points */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                            {service.details.map((detail, idx) => (
                              <div key={idx} className="flex items-center gap-2 font-mono text-[10px] lg:text-xs text-warm-400 uppercase tracking-wider">
                                <span className="w-1 h-1 rounded-full bg-amber-300" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Spread Metadata footer */}
          <div className="mt-12 hidden lg:flex items-center gap-4 font-mono text-[10px] lg:text-xs text-warm-500 uppercase tracking-widest">
            <span>ANGELIQUE-MARI BRANDS INC.</span>
            <span>•</span>
            <span>ALL CAMPAIGNS RESERVED</span>
            <span>•</span>
            <span>MUSEUM DIRECTIVE</span>
          </div>
        </div>

        {/* Right Side: Massive Immersive Image Frame */}
        <div className="col-span-1 lg:col-span-5 flex items-center justify-center relative min-h-[400px] lg:min-h-0">
          <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none" />
          
          <div className="w-full h-full max-w-[420px] aspect-[3/4] bg-warm-900 overflow-hidden relative shadow-2xl group rounded">
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-warm-950 via-transparent to-transparent opacity-60 z-10" />
            
            {/* Elegant luxury framing lines */}
            <div className="absolute inset-4 border border-white/10 z-10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.img
                key={currentService.id}
                src={currentService.image}
                alt={currentService.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>

            {/* Service Caption Overlay (Museum Card Style) */}
            <div className="absolute bottom-8 left-8 right-8 z-20 bg-warm-950/80 backdrop-blur-md p-5 border border-white/10 rounded">
              <span className="font-mono text-[9px] lg:text-[11px] text-amber-300 uppercase tracking-widest block mb-1">
                PREVIEW DIRECTIVE • 0{selectedServiceIndex + 1}
              </span>
              <h4 className="text-xl font-serif text-white uppercase tracking-tight leading-none">
                {currentService.title}
              </h4>
              <span className="font-mono text-[9px] lg:text-[11px] text-warm-400 uppercase tracking-wider block mt-2">
                STUDIO CATALOGUE N. 02
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
