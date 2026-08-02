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
      <div className="flex items-center gap-1 text-[#FF6800]">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="w-3.5 h-3.5 fill-[#FF6800] text-[#FF6800]" />
        ))}
        {hasHalf && (
          <StarHalf key="half" className="w-3.5 h-3.5 fill-[#FF6800] text-[#FF6800]" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="w-3.5 h-3.5 text-neutral-800" />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="relative w-full bg-black text-[#FF6800] py-24 md:py-32 px-6 md:px-12 z-10 border-t border-[#FF6800]/20 overflow-hidden">
      
      {/* Testimonials Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 pb-8 border-b border-[#FF6800]/20">
        <div className="flex flex-col">
          <span className="font-sans text-xs lg:text-sm uppercase tracking-widest text-[#FF6800] mb-3">
            / CLIENT TESTIMONIALS
          </span>
          <h2 className="text-5xl md:text-7xl font-serif tracking-tighter uppercase leading-none text-white">
            Selected <span className="font-serif italic text-[#FF6800]">Voices</span>
          </h2>
        </div>
        
        {/* Navigation & Counter */}
        <div className="mt-6 md:mt-0 flex items-center gap-6">
          <span className="font-sans text-xs lg:text-sm text-[#FF6800]/80 uppercase tracking-widest">
            AFTER THE SHOOT • {activeIndex + 1} / {TESTIMONIALS.length}
          </span>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-none bg-black border border-[#FF6800] flex items-center justify-center text-[#FF6800] hover:bg-[#FF6800] hover:text-black transition-all active:scale-95 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-none bg-black border border-[#FF6800] flex items-center justify-center text-[#FF6800] hover:bg-[#FF6800] hover:text-black transition-all active:scale-95 cursor-pointer"
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
              {/* Top Dark Portrait Image Card with CRISP WHITE MUSEUM FRAME */}
              <div className="relative h-[220px] sm:h-[240px] rounded-none overflow-hidden bg-black p-2 border-4 border-white shadow-xl flex flex-col justify-between group">
                <div className="relative w-full h-full overflow-hidden bg-black p-4 flex flex-col justify-between">
                  {/* Background image overlay */}
                  <img
                    src={item.image}
                    alt={item.author}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

                  {/* Top Row: Stars + Non-link Badge Icon */}
                  <div className="relative z-10 flex items-center justify-between">
                    {renderStars(item.rating)}
                    <div className="w-8 h-8 bg-black/80 border border-[#FF6800]/40 flex items-center justify-center text-[#FF6800]">
                      <Sparkles className="w-3.5 h-3.5 text-[#FF6800]" />
                    </div>
                  </div>

                  {/* Bottom Row: Name & Role/Company */}
                  <div className="relative z-10">
                    <h3 className="font-bold font-serif text-lg text-white tracking-tight">
                      {item.author}
                    </h3>
                    <p className="text-xs font-sans text-[#FF6800] mt-0.5 uppercase tracking-wider">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quote Card */}
              <div className="bg-neutral-950 border border-[#FF6800]/30 rounded-none p-6 shadow-xl flex flex-col justify-between min-h-[150px] hover:border-[#FF6800] transition-colors">
                <div className="w-9 h-9 bg-black border border-[#FF6800]/40 flex items-center justify-center text-[#FF6800] mb-3">
                  <Quote className="w-4 h-4 fill-[#FF6800] text-[#FF6800]" />
                </div>
                <p className="font-sans text-xs md:text-sm text-[#FF6800] leading-relaxed font-medium">
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
