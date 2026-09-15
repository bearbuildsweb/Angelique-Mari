import { useState } from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';

const WHATSAPP_BASE = 'https://wa.me/27686313538';

const CONVERSATION_TOPICS = [
  {
    label: 'Weddings & Celebrations',
    message: "Hi Angelique-Mari, I'm getting married / celebrating and would love to check your availability and discuss coverage.",
  },
  {
    label: 'Fashion / Brand Campaign',
    message: "Hi Angelique-Mari, I'm looking to collaborate on an editorial fashion shoot / brand campaign.",
  },
  {
    label: 'Street & Lifestyle',
    message: "Hi Angelique-Mari, I'd like to book an unscripted lifestyle / street culture shoot.",
  },
  {
    label: 'Character Portrait',
    message: "Hi Angelique-Mari, I'd like to book an intimate character portrait / artist headshot session.",
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

  const activeMessage = selectedTopic
    ? CONVERSATION_TOPICS.find((t) => t.label === selectedTopic)?.message || ''
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

        {/* Topic Quick-Selection Pills */}
        <div className="w-full max-w-3xl mb-10 flex flex-col items-center">
          {/* Recessed Indent Pill / Tab Header (Informational, non-CTA) */}
          <div className="p-[3px] rounded-2xl sm:rounded-full bg-[#050505] shadow-[0_6px_20px_rgba(0,0,0,0.95),inset_0_4px_12px_rgba(0,0,0,1),inset_0_-1px_1px_rgba(255,255,255,0.1)] border-t border-black border-b border-white/15 mb-6 max-w-[calc(100vw-3rem)] sm:max-w-none inline-block">
            <div className="flex items-center justify-center px-3 py-1.5 sm:px-5 sm:py-2 rounded-2xl sm:rounded-full bg-[#1c1c1e] shadow-[inset_0_5px_12px_rgba(0,0,0,0.95),inset_0_1px_3px_rgba(0,0,0,1),inset_0_-1px_2px_rgba(255,255,255,0.12)] border-t border-black/80 border-b border-white/10 select-none">
              <span className="font-sans text-[8.5px] sm:text-[10px] md:text-[11px] text-[#FF6800] font-bold uppercase tracking-[0.12em] sm:tracking-[0.2em] text-center leading-normal">
                Select a focus to pre-fill your conversation:
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
                  className={`font-sans text-xs uppercase tracking-widest px-4 py-2.5 border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#FF6800] text-black border-[#FF6800] font-bold shadow-[0_0_20px_rgba(255,104,0,0.4)]'
                      : 'bg-black text-white/80 border-[#FF6800]/30 hover:border-[#FF6800] hover:text-white'
                  }`}
                >
                  {topic.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* High-Impact Primary WhatsApp CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            id="main-whatsapp-conversion-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FF6800] hover:bg-white text-black font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-extrabold px-8 sm:px-10 py-4 sm:py-5 border border-[#FF6800] hover:border-white transition-all duration-300 shadow-[0_10px_30px_rgba(255,104,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)] active:scale-[0.98] group"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
            <span>ENTER THE CHAT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Micro Credibility & Social Context */}
        <div className="mt-8 flex justify-center items-center">
          {/* Recessed Indent Pill / Tab with Instagram Icon */}
          <div className="p-[3px] rounded-full bg-[#050505] shadow-[0_6px_20px_rgba(0,0,0,0.95),inset_0_4px_12px_rgba(0,0,0,1),inset_0_-1px_1px_rgba(255,255,255,0.1)] border-t border-black border-b border-white/15">
            <a
              href="https://www.instagram.com/iambrandthecreative"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow AM Studio on Instagram"
              title="Instagram @iambrandthecreative"
              className="group relative inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2 rounded-full bg-[#1c1c1e] hover:bg-[#232326] shadow-[inset_0_5px_12px_rgba(0,0,0,0.95),inset_0_1px_3px_rgba(0,0,0,1),inset_0_-1px_2px_rgba(255,255,255,0.12)] border-t border-black/80 border-b border-white/10 transition-all duration-300 active:scale-[0.96] text-[#FF6800] hover:text-white cursor-pointer"
            >
              <Instagram className="w-4 h-4 stroke-[1.75]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
