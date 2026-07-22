import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

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

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end items-center gap-5 flex-1 text-warm-900">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5 stroke-[1.5]" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5 stroke-[1.5]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5 stroke-[1.5]" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 stroke-[1.5]" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

