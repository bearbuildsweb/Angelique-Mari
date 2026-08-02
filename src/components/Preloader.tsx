import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Logo from './Logo';

interface PreloaderProps {
  onComplete: () => void;
}

const TYPESET_STEPS = [
  "A",
  "AN",
  "ANG",
  "ANGEL",
  "ANGELIQUE",
  "ANGELIQUE-MARI"
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [typesetIndex, setTypesetIndex] = useState(0);
  const [isTypesetComplete, setIsTypesetComplete] = useState(false);

  useEffect(() => {
    // Typesetting flash sequence (45ms per step)
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < TYPESET_STEPS.length) {
        setTypesetIndex(step);
      } else {
        clearInterval(interval);
        setIsTypesetComplete(true);
      }
    }, 45);

    // Total exhibition opening sequence duration (~1.8s)
    const timer = setTimeout(() => {
      onComplete();
    }, 1850);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 bg-black text-[#FF6800] z-[9999] flex flex-col justify-between p-6 sm:p-10 md:p-16 select-none pointer-events-auto"
    >
      {/* Top Exhibition Catalogue Header with Low-Opacity White Line */}
      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-between items-center text-[10px] sm:text-xs font-sans uppercase tracking-[0.3em] text-[#FF6800]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6800]" />
            <span>EXHIBITION CATALOGUE</span>
          </div>
          <span className="text-white/40 tracking-[0.2em]">N° 001 / 2026</span>
        </div>
        <div className="w-full h-[1px] bg-white/10" />
      </div>

      {/* Center Exhibition Frame: Typesetting & Official Orange Brand Mark */}
      <div className="flex flex-col items-center justify-center my-auto py-8 text-center max-w-4xl mx-auto w-full">
        {/* Editorial Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-xs sm:text-sm font-sans tracking-[0.4em] uppercase text-[#FF6800] mb-4 font-bold"
        >
          FROM THE LENS OF
        </motion.span>

        {/* Typeset Display & Official Logo Reveal */}
        <div className="min-h-[120px] sm:min-h-[160px] flex flex-col items-center justify-center overflow-hidden">
          {!isTypesetComplete ? (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-serif text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-[0.25em] text-[#FF6800] leading-none"
            >
              {TYPESET_STEPS[typesetIndex]}
            </motion.h1>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="py-2"
            >
              <Logo variant="orange" size="xl" ariaLabel="Angelique-Mari Photography Official Logo" />
            </motion.div>
          )}
        </div>

        {/* Minimal Editorial Catalogue Statement */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isTypesetComplete ? 1 : 0, y: isTypesetComplete ? 0 : 10 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="mt-6 flex flex-col items-center gap-3"
        >
          <div className="w-12 h-[1px] bg-white/15" />
          <p className="font-serif italic text-xs sm:text-sm md:text-base text-white/80 tracking-widest max-w-md">
            "For those who'd rather be remembered than seen."
          </p>
        </motion.div>
      </div>

      {/* Bottom Exhibition Footer with Low-Opacity White Line */}
      <div className="w-full flex flex-col gap-4">
        <div className="w-full h-[1px] bg-white/10" />
        <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-sans text-[#FF6800]/80 uppercase tracking-[0.25em]">
          <span>JOHANNESBURG • SA</span>
          <span className="text-white/30 hidden sm:inline">//</span>
          <span className="text-white/60">CONTEMPORARY FASHION GALLERY</span>
        </div>
      </div>
    </motion.div>
  );
}
