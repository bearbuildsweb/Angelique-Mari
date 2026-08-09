import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoPreloader from '../assets/images/logo-preloader-1.png';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  // Phase sequence:
  // 0 = Polaroid photo ejects into frame (overexposed / developing)
  // 1 = Photo develops fully into sharp black contrast
  // 2 = Photo lifts & expands away to reveal site
  const [phase, setPhase] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    // Stage 1: Chemical development snap at 0.4s
    const t1 = setTimeout(() => {
      setPhase(1);
    }, 400);

    // Stage 2: Photo lifts & reveals website at 1.2s
    const t2 = setTimeout(() => {
      setPhase(2);
    }, 1200);

    // Stage 3: Complete preloader and unmount at 1.8s
    const t3 = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="preloader-polaroid"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 2 ? 0 : 1 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[9999] pointer-events-auto select-none overflow-hidden bg-[#0A0A0A] text-white flex items-center justify-center p-6"
      >
        {/* Subtle Darkroom Backdrop Grain & Framing Details */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#FF6800_1px,transparent_1px)] [background-size:32px_32px]" />

        {/* Minimal Corner Contact-Sheet Crop Marks */}
        <div className="absolute top-6 left-6 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6800] animate-ping" />
          <span>INSTANT PRINT // FRAME 01</span>
        </div>
        <div className="absolute bottom-6 right-6 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600">
          AM STUDIO • JOHANNESBURG
        </div>

        {/* Central Polaroid Instant Photograph Print Card */}
        <motion.div
          initial={{ y: 50, scale: 0.9, rotate: -4, opacity: 0 }}
          animate={
            phase === 2
              ? { y: -80, scale: 1.12, rotate: 2, opacity: 0 }
              : { y: 0, scale: 1, rotate: -2, opacity: 1 }
          }
          transition={{
            duration: phase === 2 ? 0.6 : 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative bg-[#FAFAFA] text-black p-4 sm:p-5 md:p-6 pb-12 sm:pb-16 md:pb-18 rounded-sm shadow-[0_30px_70px_rgba(0,0,0,0.85),0_0_1px_rgba(255,255,255,0.2)] max-w-[85vw] sm:max-w-[380px] md:max-w-[420px] w-full border border-neutral-200/60"
        >
          {/* Inner Photo Frame Box (Dark Photo Canvas) */}
          <div className="relative aspect-square w-full bg-[#111111] overflow-hidden flex items-center justify-center p-6 sm:p-8 rounded-[1px] border border-black/10">
            {/* Developing Chemical Tint Overlay */}
            <motion.div
              initial={{ opacity: 0.9 }}
              animate={{ opacity: phase >= 1 ? 0 : 0.8 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-0 bg-[#E8EEF5] mix-blend-color-dodge z-20 pointer-events-none"
            />

            {/* Overexposure Flash Gradient during development */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: phase >= 1 ? 0 : 0.5 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="absolute inset-0 bg-gradient-to-tr from-white via-[#FF6800]/20 to-white/90 z-20 pointer-events-none"
            />

            {/* Developing AM Initials Logo Artwork */}
            <motion.img
              src={logoPreloader}
              alt="AM Photography"
              initial={{ filter: 'blur(16px) contrast(0.2) brightness(1.8)', opacity: 0.1, scale: 1.1 }}
              animate={{
                filter: phase >= 1 ? 'blur(0px) contrast(1.05) brightness(1)' : 'blur(8px) contrast(0.5) brightness(1.4)',
                opacity: phase >= 1 ? 1 : 0.3,
                scale: phase >= 1 ? 1 : 1.05,
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-contain relative z-10 filter drop-shadow-md"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/logo-preloader-1.png';
              }}
            />

            {/* Subtle Photo Emulsion Surface Sheen */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none z-30" />
          </div>

          {/* Polaroid Bottom Border Editorial Caption */}
          <div className="mt-4 sm:mt-5 flex items-center justify-between font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-neutral-500">
            <span className="font-semibold text-neutral-900">AM // PHOTOGRAPHY</span>
            <span className="text-[#FF6800] font-bold">[°◉]</span>
          </div>

          {/* Accent Orange Chemical Indicator Line at bottom edge */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#FF6800]/60 rounded-full" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}



