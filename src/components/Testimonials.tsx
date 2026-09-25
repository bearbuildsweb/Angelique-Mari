import { useRef, useState, useEffect, MouseEvent } from 'react';
import { TESTIMONIALS } from '../data';
import { Testimonial, EmotionalReactionKey } from '../types';
import { Star, StarHalf, Quote, ChevronLeft, ChevronRight, Sparkles, MessageSquarePlus, Share2, Check } from 'lucide-react';

interface TestimonialsProps {
  onOpenReviewModal?: () => void;
}

export default function Testimonials({ onOpenReviewModal }: TestimonialsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [allTestimonials, setAllTestimonials] = useState<Testimonial[]>(TESTIMONIALS);
  const [activeFilter, setActiveFilter] = useState<'all' | 'blown-away' | 'impressed'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Load custom testimonials from localStorage & listen for new ones
  useEffect(() => {
    const loadStoredTestimonials = () => {
      try {
        const stored = localStorage.getItem('am_custom_testimonials');
        if (stored) {
          const customList: Testimonial[] = JSON.parse(stored);
          // Prepend custom reviews before default ones, avoiding duplicates
          const customIds = new Set(customList.map((t) => t.id));
          const filteredDefaults = TESTIMONIALS.filter((t) => !customIds.has(t.id));
          setAllTestimonials([...customList, ...filteredDefaults]);
        }
      } catch (err) {
        console.error('Failed to load custom testimonials', err);
      }
    };

    loadStoredTestimonials();

    const handleNewTestimonial = (e: Event) => {
      const customEvent = e as CustomEvent<Testimonial>;
      if (customEvent.detail) {
        setAllTestimonials((prev) => [customEvent.detail, ...prev.filter((t) => t.id !== customEvent.detail.id)]);
        setActiveIndex(0);
        if (scrollRef.current) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('new-testimonial-added', handleNewTestimonial);
    return () => window.removeEventListener('new-testimonial-added', handleNewTestimonial);
  }, []);

  const displayedTestimonials = allTestimonials.filter((item) => {
    if (activeFilter === 'blown-away') return item.emotionalReaction === 'blown-away' || (item.rating && item.rating >= 5);
    if (activeFilter === 'impressed') return item.emotionalReaction === 'impressed' || (item.rating && item.rating >= 4);
    return true;
  });

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
      setActiveIndex(Math.min(Math.max(index, 0), displayedTestimonials.length - 1));
    }
  };

  const handleOpenReview = (e?: MouseEvent) => {
    e?.preventDefault();
    if (onOpenReviewModal) {
      onOpenReviewModal();
    } else {
      window.location.hash = '#review-freelancer';
    }
  };

  const handleShareTestimonial = (id: string, author: string) => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#testimonials`;
    navigator.clipboard.writeText(`${author}'s review on Angelique-Mari Photography: ${shareUrl}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
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

  const getEmotionalBadge = (reaction?: EmotionalReactionKey, label?: string) => {
    switch (reaction) {
      case 'blown-away':
        return { text: label || 'Blown Away', icon: '🔥', accent: 'bg-[#FF6800]/20 text-[#FF6800] border-[#FF6800]/40' };
      case 'impressed':
        return { text: label || 'Impressed', icon: '✨', accent: 'bg-amber-500/20 text-amber-400 border-amber-500/40' };
      case 'satisfied':
        return { text: label || 'Satisfied', icon: '✦', accent: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40' };
      case 'underwhelmed':
        return { text: label || 'Underwhelmed', icon: '—', accent: 'bg-neutral-800 text-neutral-400 border-neutral-700' };
      case 'disappointed':
        return { text: label || 'Disappointed', icon: '•', accent: 'bg-red-950/40 text-red-400 border-red-800/40' };
      default:
        return { text: 'Verified Client', icon: '★', accent: 'bg-[#FF6800]/15 text-[#FF6800] border-[#FF6800]/30' };
    }
  };

  return (
    <section id="testimonials" className="relative w-full bg-black text-[#FF6800] py-24 md:py-32 px-6 md:px-12 z-10 border-t border-[#FF6800]/20 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF6800]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Testimonials Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 pb-8 border-b border-[#FF6800]/20">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF6800] bg-[#FF6800]/10 border border-[#FF6800]/30 px-2 py-0.5">
              / CLIENT TESTIMONIALS & REVIEWS
            </span>
            <span className="font-mono text-xs text-neutral-400 hidden sm:inline">
              MUSEUM ARCHIVE
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif tracking-tighter uppercase leading-none text-white">
            Selected <span className="font-serif italic text-[#FF6800]">Voices</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-2.5 max-w-md">
            Unfiltered feedback, emotional reaction ratings, and documented impressions from patrons and creative collaborators.
          </p>
        </div>
        
        {/* Actions, Counter & Review Freelancer CTA */}
        <div className="mt-8 md:mt-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full md:w-auto justify-between md:justify-end">
          
          {/* Review Freelancer Trigger Button */}
          <a
            href="#review-freelancer"
            onClick={handleOpenReview}
            id="leave-review-modal-cta"
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#FF6800] hover:bg-white text-black font-sans text-xs font-extrabold uppercase tracking-widest border border-[#FF6800] hover:border-white transition-all shadow-[0_4px_20px_rgba(255,104,0,0.3)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.2)] active:scale-95 cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4 stroke-[2.2] group-hover:scale-110 transition-transform" />
            <span>REVIEW FREELANCER</span>
          </a>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[#FF6800]/80 uppercase tracking-widest whitespace-nowrap">
              {activeIndex + 1} / {displayedTestimonials.length}
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
      </div>

      {/* Filter Tabs & Trust Metric */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 text-xs font-mono">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-neutral-500 uppercase tracking-wider pr-1">Filter:</span>
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1 border transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#FF6800] text-black border-[#FF6800] font-bold'
                : 'bg-black text-neutral-300 border-neutral-800 hover:border-neutral-600'
            }`}
          >
            ALL REVIEWS ({allTestimonials.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('blown-away')}
            className={`px-3 py-1 border transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'blown-away'
                ? 'bg-[#FF6800] text-black border-[#FF6800] font-bold'
                : 'bg-black text-neutral-300 border-neutral-800 hover:border-neutral-600'
            }`}
          >
            <span>🔥 BLOWN AWAY</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('impressed')}
            className={`px-3 py-1 border transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'impressed'
                ? 'bg-[#FF6800] text-black border-[#FF6800] font-bold'
                : 'bg-black text-neutral-300 border-neutral-800 hover:border-neutral-600'
            }`}
          >
            <span>✨ IMPRESSED</span>
          </button>
        </div>

        {/* Direct Hash link hint */}
        <div className="flex items-center gap-2 text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Atelier Satisfaction: 100% Recommended</span>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div className="max-w-7xl mx-auto relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-2 px-1 -mx-1 transition-all"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayedTestimonials.map((item) => {
            const badge = getEmotionalBadge(item.emotionalReaction, item.emotionalLabel);
            return (
              <div
                key={item.id}
                className="flex flex-col gap-3 min-w-[300px] sm:min-w-[340px] md:min-w-[380px] lg:min-w-[400px] flex-1 snap-start"
              >
                {/* Top Dark Portrait Image Card with CRISP WHITE MUSEUM FRAME */}
                <div className="relative h-[230px] sm:h-[250px] rounded-none overflow-hidden bg-black p-2 border-4 border-white shadow-xl flex flex-col justify-between group">
                  <div className="relative w-full h-full overflow-hidden bg-black p-4 flex flex-col justify-between">
                    {/* Background image overlay or Initial Monogram */}
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.author}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity grayscale"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                        <span className="font-serif text-7xl font-bold text-neutral-800 select-none">
                          {item.author.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

                    {/* Top Row: Stars + Emotional Reaction Pill */}
                    <div className="relative z-10 flex items-center justify-between gap-2">
                      {renderStars(item.rating)}
                      
                      {/* Emotional Reaction Pill */}
                      <span className={`inline-flex items-center gap-1 font-mono text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 border ${badge.accent}`}>
                        <span>{badge.icon}</span>
                        <span>{badge.text}</span>
                      </span>
                    </div>

                    {/* Bottom Row: Name, Role, & Share */}
                    <div className="relative z-10 flex items-end justify-between">
                      <div>
                        {item.projectType && (
                          <span className="block text-[10px] font-mono uppercase text-[#FF6800]/80 tracking-widest mb-1">
                            / {item.projectType}
                          </span>
                        )}
                        <h3 className="font-bold font-serif text-lg text-white tracking-tight leading-tight">
                          {item.author}
                        </h3>
                        <p className="text-xs font-sans text-neutral-300 mt-0.5 tracking-wide">
                          {item.role}, <span className="text-[#FF6800]">{item.company}</span>
                        </p>
                      </div>

                      {/* Quick Share action button */}
                      <button
                        type="button"
                        onClick={() => handleShareTestimonial(item.id, item.author)}
                        title="Share this testimonial"
                        className="w-7 h-7 bg-black/80 border border-neutral-700 hover:border-[#FF6800] text-neutral-400 hover:text-[#FF6800] flex items-center justify-center transition-colors cursor-pointer"
                      >
                        {copiedId === item.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Share2 className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Quote Card */}
                <div className="bg-neutral-950 border border-[#FF6800]/30 rounded-none p-6 shadow-xl flex flex-col justify-between min-h-[160px] hover:border-[#FF6800] transition-colors relative group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 bg-black border border-[#FF6800]/40 flex items-center justify-center text-[#FF6800]">
                        <Quote className="w-4 h-4 fill-[#FF6800] text-[#FF6800]" />
                      </div>
                      <span className="font-mono text-[10px] text-neutral-400 tracking-wider">
                        {item.year || '2026'}
                      </span>
                    </div>
                    <p className="font-sans text-xs md:text-sm text-neutral-200 leading-relaxed font-normal">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Tiny subtle footer badge */}
                  <div className="mt-4 pt-3 border-t border-neutral-900 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span>AUTHENTIC COLLABORATION</span>
                    <span className="text-[#FF6800]/70">VERIFIED VOICE</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
