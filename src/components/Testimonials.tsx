import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="relative w-full bg-warm-50 text-warm-950 py-24 md:py-36 px-6 md:px-12 z-10 border-t border-warm-900/10">
      
      {/* Testimonials Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 pb-8 border-b border-warm-900/10">
        <div className="flex flex-col">
          <span className="font-mono text-xs lg:text-sm uppercase tracking-widest text-warm-500 mb-3">/ CLIENT TESTIMONIALS</span>
          <h2 className="text-5xl md:text-7xl font-serif tracking-tighter uppercase font-light leading-none">
            Selected <span className="font-display font-extrabold italic text-warm-900">Voices</span>
          </h2>
        </div>
        <div className="mt-6 md:mt-0 font-mono text-xs lg:text-sm text-warm-500 uppercase tracking-widest">
          AESTHETIC SYNERGY • {currentIndex + 1} / {TESTIMONIALS.length}
        </div>
      </div>

      {/* Luxury Lookbook Carousel Split Screen */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Large Portrait with Luxury Border Frame */}
        <div className="col-span-1 lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[340px] md:max-w-[380px] aspect-square bg-warm-200 overflow-hidden shadow-xl rounded group">
            {/* Soft tint and contrast overlay */}
            <div className="absolute inset-0 bg-warm-900/10 z-10 pointer-events-none mix-blend-overlay" />
            
            {/* Museum fine-line framing */}
            <div className="absolute inset-3 border border-white/20 z-10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.img
                key={currentTestimonial.id}
                src={currentTestimonial.image}
                alt={currentTestimonial.author}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>

            {/* Micro Year Stamp */}
            <div className="absolute bottom-4 right-4 bg-warm-900 text-warm-50 font-mono text-[8px] lg:text-[10px] uppercase tracking-widest py-1 px-2.5 rounded z-20">
              STAMPED: {currentTestimonial.year}
            </div>
          </div>
        </div>

        {/* Right Side: Oversized Editorial Quotation block */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              {/* Huge stylistic open quote mark */}
              <span className="font-serif text-[10rem] text-warm-200 leading-[0] h-[30px] select-none pl-1">
                “
              </span>

              {/* Quotation text */}
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-900 leading-snug tracking-tight italic mb-8 select-none">
                {currentTestimonial.quote}
              </p>

              {/* Author details with thin separator line */}
              <div className="flex flex-col pt-6 border-t border-warm-900/10">
                <span className="font-display font-extrabold text-lg uppercase text-warm-950">
                  {currentTestimonial.author}
                </span>
                <span className="font-mono text-xs lg:text-sm uppercase tracking-widest text-warm-500 mt-1">
                  {currentTestimonial.role} — {currentTestimonial.company}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Luxury Slider Navigation Controls */}
          <div className="mt-12 flex items-center gap-12">
            <div className="flex items-center gap-4">
              <button
                id="testimonial-prev-btn"
                onClick={prevSlide}
                className="group flex items-center justify-center font-mono text-xs lg:text-sm uppercase tracking-widest text-warm-900 hover:text-warm-500 transition-colors py-2"
              >
                <span className="mr-2 group-hover:-translate-x-1 transition-transform">[</span>
                <span>BACK</span>
                <span className="ml-2 group-hover:-translate-x-1 transition-transform">]</span>
              </button>

              <button
                id="testimonial-next-btn"
                onClick={nextSlide}
                className="group flex items-center justify-center font-mono text-xs lg:text-sm uppercase tracking-widest text-warm-900 hover:text-warm-500 transition-colors py-2"
              >
                <span className="mr-2 group-hover:translate-x-1 transition-transform">[</span>
                <span>NEXT</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">]</span>
              </button>
            </div>

            {/* Slider visual dot indicator */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1 cursor-pointer transition-all duration-500 ${currentIndex === idx ? 'w-10 bg-warm-900' : 'w-2 bg-warm-300 hover:bg-warm-400'}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
