import { Instagram, Mail } from "lucide-react";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-warm-50 text-warm-950 py-16 md:py-20 px-6 md:px-12 z-10 border-t border-warm-900/10">
      <div className="max-w-7xl mx-auto flex flex-col justify-between">
        
        {/* Giant display text exactly styled like Tattoo Studio */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 w-full pb-10 md:pb-16 pt-2 border-b border-warm-900/10 select-none overflow-hidden">
          {/* Left copyright with serif elegant font */}
          <div className="font-serif italic text-lg md:text-[2vw] text-warm-500 leading-none whitespace-nowrap self-center md:self-end md:mb-6">
            © {currentYear}
          </div>

          {/* Center Giant Text - Extra Bold, geometric and tight spacing */}
          <h2 className="text-[7.5vw] font-sans font-black tracking-tighter text-warm-900 leading-none uppercase text-center flex-1 px-4 select-none">
            AM photography
          </h2>

          {/* Right graphic copyright */}
          <div className="font-serif text-3xl md:text-[4vw] font-light text-warm-400 leading-none select-none self-center md:self-end md:mb-6">
            ©
          </div>
        </div>

        {/* Top bar replicated from the reference image, without navigation links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 md:pt-14 pb-2 w-full">
          {/* Left Email - Styled elegantly with serif typography & Mail icon */}
          <div className="flex-1 flex justify-center md:justify-start items-center gap-3">
            <Mail className="w-4 h-4 stroke-[1.5] text-amber-700" />
            <a 
              href="mailto:ambrandcreatives@gmail.com" 
              className="font-serif italic lowercase text-sm md:text-base lg:text-lg text-warm-900 hover:text-amber-700 transition-colors underline decoration-warm-300 hover:decoration-amber-700 underline-offset-4 tracking-wide"
            >
              ambrandcreatives@gmail.com
            </a>
          </div>

          {/* Plus separator (Hidden on mobile) */}
          <span className="hidden md:inline font-light text-warm-300 text-xl font-sans" aria-hidden="true">+</span>

          {/* Social Icons: Instagram and WhatsApp */}
          <div className="flex justify-center md:justify-end items-center gap-5 flex-1 text-warm-500">
            <a 
              href="https://www.instagram.com/iambrandthecreative?igsh=OGcwa3Z1M2lndno1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-amber-700 transition-colors p-1" 
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram className="w-5 h-5 stroke-[1.5]" />
            </a>
            <a 
              href="https://wa.me/27686313538" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-amber-700 transition-colors p-1" 
              aria-label="WhatsApp"
              title="WhatsApp: 0686313538"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

