export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-warm-50 text-warm-950 py-16 md:py-24 px-6 md:px-12 z-10 border-t border-warm-900/10">
      <div className="max-w-7xl mx-auto flex flex-col justify-between">
        
        {/* Upper footer links and social navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 md:pb-20 border-b border-warm-900/10">
          
          {/* Logo Brand info */}
          <div className="col-span-2 md:col-span-1 flex flex-col">
            <span className="font-display font-black text-xl tracking-tighter leading-none">AM</span>
            <span className="font-mono text-[9px] lg:text-[11px] uppercase tracking-widest text-warm-500 mt-1">BRAND CREATIVES</span>
            <p className="font-serif text-sm italic text-warm-400 mt-4 max-w-[180px]">
              "Uncompromising visual curation bridging fine art and luxury brand campaign environments."
            </p>
          </div>

          {/* Directory Links */}
          <div className="flex flex-col">
            <span className="font-mono text-[10px] lg:text-[12px] uppercase tracking-widest text-warm-400 mb-4">/ DIRECTORY</span>
            <div className="flex flex-col gap-2 font-mono text-[11px] lg:text-[13px] uppercase tracking-wider text-warm-900">
              <a href="#portfolio" className="hover:text-warm-500 transition-colors">Curated Portfolio</a>
              <a href="#services" className="hover:text-warm-500 transition-colors">Services Spread</a>
              <a href="#testimonials" className="hover:text-warm-500 transition-colors">Client Voices</a>
              <a href="#booking" className="hover:text-warm-500 transition-colors">Inquire Experience</a>
            </div>
          </div>

          {/* Connect Links */}
          <div className="flex flex-col">
            <span className="font-mono text-[10px] lg:text-[12px] uppercase tracking-widest text-warm-400 mb-4">/ CONNECT</span>
            <div className="flex flex-col gap-2 font-mono text-[11px] lg:text-[13px] uppercase tracking-wider text-warm-900">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-warm-500 transition-colors">Instagram</a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-warm-500 transition-colors">Behance</a>
              <a href="mailto:ambrandcreatives@gmail.com" className="underline hover:text-warm-500 transition-colors">Email</a>
            </div>
          </div>

          {/* Coordinates and Location list */}
          <div className="flex flex-col">
            <span className="font-mono text-[10px] lg:text-[12px] uppercase tracking-widest text-warm-400 mb-4">/ OFFICES</span>
            <div className="flex flex-col gap-2 font-mono text-[11px] lg:text-[13px] text-warm-500 uppercase tracking-wider">
              <span>Tokyo — Minami-Aoyama</span>
              <span>Milan — Brera District</span>
              <span>Paris — Place des Vosges</span>
            </div>
          </div>

        </div>

        {/* Gigantic Oversized Footprint Display text (Replicating the Tattoo Studio layout) */}
        <div className="py-8 md:py-16 select-none overflow-hidden flex justify-center items-center">
          <h2 className="text-[12vw] font-serif font-semibold tracking-tighter text-warm-900 leading-none uppercase text-center w-full flex items-center justify-center gap-4">
            <span className="font-light text-[5vw] tracking-normal italic text-warm-300">©</span>
            Brand Creatives
            <span className="font-light text-[5vw] tracking-normal italic text-warm-300">©</span>
          </h2>
        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 border-t border-warm-900/10 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] lg:text-[12px] text-warm-400 uppercase tracking-widest">
          <span>© {currentYear} Angelique-Mari Brand Creatives. ALL RIGHTS RESERVED.</span>
          <span>EST. 2026 • PARIS — MILAN — TOKYO</span>
        </div>

      </div>
    </footer>
  );
}
