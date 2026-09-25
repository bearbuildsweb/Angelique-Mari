import { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronUp, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const WHATSAPP_BASE = 'https://wa.me/27686313538';

const CONVERSATION_TOPICS = [
  {
    label: 'Street Couture & Nightfall',
    isWildcard: false,
    message: "Hi Angelique-Mari, I'm interested in booking a Street Couture and Nightfall session (art-directed portraiture & direct-flash nocturne).",
  },
  {
    label: 'Weddings & Celebrations',
    isWildcard: false,
    message: "Hi Angelique-Mari, I'm getting married / celebrating and would love to check your availability and discuss coverage.",
  },
  {
    label: 'Brand & Product Imagery',
    isWildcard: false,
    message: "Hi Angelique-Mari, I'm looking to collaborate on striking, purposeful Brand & Product Imagery.",
  },
  {
    label: 'Family & Little Ones',
    isWildcard: false,
    message: "Hi Angelique-Mari, I'd like to book a Family & Little Ones session to document our connection and story.",
  },
  {
    label: 'Lifestyle',
    isWildcard: false,
    message: "Hi Angelique-Mari, I'd like to book a Lifestyle shoot exploring exceptional spaces, architecture, or destinations.",
  },
  {
    label: 'Outside The Frame',
    isWildcard: true,
    message: "Hi Angelique-Mari, I have a vision outside the frame that doesn't fit into a standard category. Let's discuss bringing it to life.",
  },
];

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  );
}

export default function ConversationCTA() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  // Allow external triggers (e.g. clicking Bring Your Vision on Portfolio Wildcard) to select focus
  useEffect(() => {
    const handleSelectFocus = (e: Event) => {
      const customEvent = e as CustomEvent<{ topic: string }>;
      if (customEvent.detail?.topic) {
        setSelectedTopic(customEvent.detail.topic);
      }
    };
    window.addEventListener('select-booking-focus', handleSelectFocus);
    return () => window.removeEventListener('select-booking-focus', handleSelectFocus);
  }, []);

  const activeTopicObj = selectedTopic ? CONVERSATION_TOPICS.find((t) => t.label === selectedTopic) : null;
  const activeMessage = activeTopicObj
    ? activeTopicObj.message
    : "Hi Angelique-Mari, I'd like to discuss a shoot with AM Photography";

  const whatsappHref = `${WHATSAPP_BASE}?text=${encodeURIComponent(activeMessage)}`;

  return (
    <section
      id="booking"
      className="relative w-full bg-black text-[#FF6800] py-24 md:py-36 px-6 md:px-12 z-10 border-t border-[#FF6800]/20"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Archival Registration Stamp */}
        <div className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#FF6800] border border-[#FF6800]/40 px-3 py-1.5 mb-8 bg-neutral-950">
          <span className="w-2 h-2 rounded-full bg-[#FF6800] animate-pulse" />
          <span>NO FORMS. JUST ACCESS.</span>
        </div>

        {/* Confident Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif uppercase tracking-tight text-white leading-none mb-10 sm:mb-12">
          START HERE.
        </h2>

        {/* Topic Quick-Selection Focus Tabs */}
        <div className="w-full max-w-4xl mb-10 flex flex-col items-center">
          {/* Recessed Indent Pill / Tab Header (Informational, non-CTA) */}
          <div className="p-[3px] rounded-2xl sm:rounded-full bg-[#050505] shadow-[0_6px_20px_rgba(0,0,0,0.95),inset_0_4px_12px_rgba(0,0,0,1),inset_0_-1px_1px_rgba(255,255,255,0.1)] border-t border-black border-b border-white/15 mb-6 max-w-[calc(100vw-3rem)] sm:max-w-none inline-block">
            <div className="flex items-center justify-center px-3 py-1.5 sm:px-5 sm:py-2 rounded-2xl sm:rounded-full bg-[#1c1c1e] shadow-[inset_0_5px_12px_rgba(0,0,0,0.95),inset_0_1px_3px_rgba(0,0,0,1),inset_0_-1px_2px_rgba(255,255,255,0.12)] border-t border-black/80 border-b border-white/10 select-none">
              <span className="font-sans text-[8.5px] sm:text-[10px] md:text-[11px] text-[#FF6800] font-bold uppercase tracking-[0.12em] sm:tracking-[0.2em] text-center leading-normal">
                SELECT A FOCUS TO START CHAT
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {CONVERSATION_TOPICS.map((topic) => {
              const isSelected = selectedTopic === topic.label;
              return (
                <button
                  key={topic.label}
                  onClick={() => setSelectedTopic(isSelected ? null : topic.label)}
                  className={`group relative font-sans text-xs uppercase tracking-widest px-4 py-2.5 border transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#FF6800] text-black border-[#FF6800] font-bold shadow-[0_0_22px_rgba(255,104,0,0.45)] scale-[1.02]'
                      : topic.isWildcard
                      ? 'bg-neutral-950 text-[#FF9E4A] border-[#FF6800]/50 hover:border-[#FF6800] hover:text-white shadow-[0_0_12px_rgba(255,104,0,0.15)]'
                      : 'bg-black text-white/80 border-[#FF6800]/30 hover:border-[#FF6800] hover:text-white'
                  }`}
                >
                  {topic.isWildcard && (
                    <Sparkles className={`w-3 h-3 ${isSelected ? 'text-black' : 'text-[#FF6800]'}`} />
                  )}
                  <span>{topic.label}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Focus Prompt Preview */}
          {selectedTopic && (
            <div className="mt-6 text-xs sm:text-sm font-sans text-neutral-100 max-w-xl mx-auto bg-neutral-950/95 border border-[#FF6800]/40 px-4 sm:px-5 py-3 rounded-md shadow-[0_6px_20px_rgba(0,0,0,0.85)] leading-relaxed text-left flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <span className="shrink-0 inline-flex items-center text-[#FF6800] font-mono font-bold tracking-wider uppercase text-[10px] bg-[#FF6800]/10 border border-[#FF6800]/30 px-2 py-0.5 rounded">
                MESSAGE PREVIEW
              </span>
              <span className="text-neutral-200 font-normal">"{activeMessage}"</span>
            </div>
          )}
        </div>

        {/* High-Impact Primary WhatsApp CTA - Enabled ONLY when a focus is selected */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {selectedTopic ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              id="main-whatsapp-conversion-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FF6800] hover:bg-white text-black font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-extrabold px-8 sm:px-10 py-4 sm:py-5 border border-[#FF6800] hover:border-white transition-all duration-300 shadow-[0_10px_30px_rgba(255,104,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)] active:scale-[0.98] group cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
              <span>START CHAT</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            <button
              type="button"
              disabled
              id="main-whatsapp-conversion-btn"
              aria-disabled="true"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#111111] text-neutral-500 font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-bold px-8 sm:px-10 py-4 sm:py-5 border border-neutral-800/80 cursor-not-allowed opacity-50 select-none transition-all duration-300"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current shrink-0 opacity-40" />
              <span>START CHAT</span>
              <ArrowUpRight className="w-4 h-4 opacity-40" />
            </button>
          )}
        </div>

        {/* Visual Guide / Upward Indicator pointing to the START CHAT CTA */}
        <div className="mt-8 flex justify-center items-center">
          {/* Recessed Indent Pill / Tab with Bouncing Upward Chevron */}
          <div className="p-[3px] rounded-full bg-[#050505] shadow-[0_6px_20px_rgba(0,0,0,0.95),inset_0_4px_12px_rgba(0,0,0,1),inset_0_-1px_1px_rgba(255,255,255,0.1)] border-t border-black border-b border-white/15">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('main-whatsapp-conversion-btn');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              aria-label="Scroll to Start Chat"
              title="Point to Start Chat"
              className="group relative inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2 rounded-full bg-[#1c1c1e] hover:bg-[#232326] shadow-[inset_0_5px_12px_rgba(0,0,0,0.95),inset_0_1px_3px_rgba(0,0,0,1),inset_0_-1px_2px_rgba(255,255,255,0.12)] border-t border-black/80 border-b border-white/10 transition-all duration-300 active:scale-[0.96] text-[#FF6800] hover:text-white cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="flex items-center justify-center"
              >
                <ChevronUp className="w-4 h-4 stroke-[2.5]" />
              </motion.div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}