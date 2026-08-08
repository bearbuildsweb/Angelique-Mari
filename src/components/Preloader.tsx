import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoPreloader from '../assets/images/logo-preloader-1.png';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    // 1. Hold closed magazine spread with AM logo centered (~1.2s)
    const openTimer = setTimeout(() => {
      setIsOpening(true);
    }, 1200);

    // 2. Complete sequence after 3D page fold reveal completes (~2.2s total)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="preloader-magazine"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[9999] pointer-events-auto select-none overflow-hidden bg-transparent [perspective:1400px]"
      >
        {/* LEFT MAGAZINE PANEL / PAGE */}
        <motion.div
          initial={{ rotateY: 0, x: 0 }}
          animate={
            isOpening
              ? { rotateY: -102, opacity: 0 }
              : { rotateY: 0, opacity: 1 }
          }
          transition={{
            duration: 0.95,
            ease: [0.76, 0, 0.24, 1],
          }}
          style={{ transformOrigin: 'left center' }}
          className="absolute left-0 top-0 w-1/2 h-full bg-white overflow-hidden shadow-[10px_0_30px_rgba(0,0,0,0.15)] border-r border-black/10"
        >
          {/* Spine crease shadow effect */}
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/[0.08] via-black/[0.02] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-[#FF6800]/30 pointer-events-none" />

          {/* Full-width container to align left half of the centered logo */}
          <div className="absolute top-0 left-0 w-[100vw] h-full flex items-center justify-center p-8 sm:p-16">
            <img
              src={logoPreloader}
              alt="AM"
              className="w-auto h-auto max-h-[28vh] sm:max-h-[36vh] md:max-h-[42vh] max-w-[70vw] sm:max-w-[50vw] md:max-w-[38vw] object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/logo-preloader-1.png';
              }}
            />
          </div>

          {/* Shading overlay during 3D fold */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isOpening ? { opacity: 0.4 } : { opacity: 0 }}
            transition={{ duration: 0.95 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/40 pointer-events-none"
          />
        </motion.div>

        {/* RIGHT MAGAZINE PANEL / PAGE */}
        <motion.div
          initial={{ rotateY: 0, x: 0 }}
          animate={
            isOpening
              ? { rotateY: 102, opacity: 0 }
              : { rotateY: 0, opacity: 1 }
          }
          transition={{
            duration: 0.95,
            ease: [0.76, 0, 0.24, 1],
          }}
          style={{ transformOrigin: 'right center' }}
          className="absolute right-0 top-0 w-1/2 h-full bg-white overflow-hidden shadow-[-10px_0_30px_rgba(0,0,0,0.15)] border-l border-black/10"
        >
          {/* Spine crease shadow effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/[0.08] via-black/[0.02] to-transparent pointer-events-none" />

          {/* Full-width container offset to align right half of the centered logo */}
          <div className="absolute top-0 -left-[50vw] w-[100vw] h-full flex items-center justify-center p-8 sm:p-16">
            <img
              src={logoPreloader}
              alt="AM"
              className="w-auto h-auto max-h-[28vh] sm:max-h-[36vh] md:max-h-[42vh] max-w-[70vw] sm:max-w-[50vw] md:max-w-[38vw] object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/logo-preloader-1.png';
              }}
            />
          </div>

          {/* Shading overlay during 3D fold */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isOpening ? { opacity: 0.4 } : { opacity: 0 }}
            transition={{ duration: 0.95 }}
            className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/40 pointer-events-none"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

