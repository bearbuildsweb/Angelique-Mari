import { useRef, useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, StarHalf, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 360;
      const scrollAmount = direction === 'left' ? -(cardWidth + 24) : (cardWidth + 24);
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 360;
      const index = Math.round(scrollLeft / (cardWidth + 24));
      setActiveIndex(Math.min(Math.max(index, 0), TESTIMONIALS.length - 1));
    }
  };

  const renderStars = (rating: number = 5) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    return (
      <div className="flex items-center gap-1 text-amber-400">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        ))}
        {hasHalf && (
          <StarHalf key="half" className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="w-3.5 h-3.5 text-neutral-600/60" />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="relative w-full bg-warm-50 text-warm-950 py-24 md:py-32 px-6 md:px-12 z-10 border-t border-warm-900/10 overflow-hidden">
      
      {/* Testimonials Header (Kept intact as requested) */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 pb-8 border-b border-warm-900/10">
        <div className="flex flex-col">
          <span className="font-mono text-xs lg:text-sm uppercase tracking-widest text-warm-500 mb-3">
            / CLIENT TESTIMONIALS
          </span>
          <h2 className="text-5xl md:text-7xl font-serif tracking-tighter uppercase font-light leading-none">
            Selected <span className="font-display font-extrabold italic text-warm-900">Voices</span>
          </h2>
        </div>
        
        {/* Navigation & Counter */}
        <div className="mt-6 md:mt-0 flex items-center gap-6">
          <span className="font-mono text-xs lg:text-sm text-warm-500 uppercase tracking-widest">
            AFTER THE SHOOT • {activeIndex + 1} / {TESTIMONIALS.length}
          </span>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-white border border-warm-900/15 flex items-center justify-center text-warm-900 hover:bg-warm-900 hover:text-white transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-white border border-warm-900/15 flex items-center justify-center text-warm-900 hover:bg-warm-900 hover:text-white transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3 Testimonials Horizontal Carousel */}
      <div className="max-w-7xl mx-auto relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-2 px-1 -mx-1 transition-all"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-3 min-w-[300px] sm:min-w-[340px] md:min-w-[380px] lg:min-w-[400px] flex-1 snap-start"
            >
              {/* Top Dark Portrait Image Card */}
              <div className="relative h-[220px] sm:h-[240px] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between group shadow-md">
                {/* Background image overlay */}
                <img
                  src={item.image}
                  alt={item.author}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-black/20" />

                {/* Top Row: Stars + Non-link Badge Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  {renderStars(item.rating)}
                  <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90">
                    <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                  </div>
                </div>

                {/* Bottom Row: Name & Role/Company */}
                <div className="relative z-10">
                  <h3 className="font-bold text-base md:text-lg text-white tracking-tight">
                    {item.author}
                  </h3>
                  <p className="text-xs font-mono text-neutral-300 mt-0.5">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>

              {/* Bottom Quote Card */}
              <div className="bg-white/95 backdrop-blur-sm border border-warm-900/10 rounded-2xl p-6 shadow-xs flex flex-col justify-between min-h-[150px] hover:border-warm-900/20 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-warm-100/90 border border-warm-200/80 flex items-center justify-center text-warm-800 mb-3">
                  <Quote className="w-4 h-4 fill-warm-200 text-warm-800" />
                </div>
                <p className="font-sans text-xs md:text-sm text-neutral-700 leading-relaxed font-medium">
                  "{item.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
