/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Premium loading sequence simulating asset register checks
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 600);
          return 100;
        }
        // Organic irregular jumps for a high-tech/monospaced museum catalogue register feel
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const handleBookClick = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-warm-50 text-warm-950 overflow-x-hidden selection:bg-warm-900 selection:text-warm-50">
      
      {/* 1. Cinematic Film Grain Overlay */}
      <div className="editorial-grain pointer-events-none" />

      {/* 2. Custom trailing interactive cursor */}
      <CustomCursor />

      {/* 3. Preloading Cinematic sequence */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: '-100vh' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-warm-950 text-warm-50 z-[9999] flex flex-col justify-between p-8 md:p-16"
          >
            {/* Top Info */}
            <div className="w-full flex justify-between items-start font-mono text-[9px] uppercase tracking-widest text-warm-500">
              <span>ANGELIQUE-MARI / BRAND CREATIVE</span>
              <span>CURRENT EDITION / 2026</span>
            </div>

            {/* Center: Large brand lettering */}
            <div className="flex flex-col items-center justify-center my-auto">
              <motion.div
                initial={{ opacity: 0, letterSpacing: '0.4em' }}
                animate={{ opacity: 1, letterSpacing: '0.15em' }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="flex flex-col items-center text-center"
              >
                <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-[0.2em] leading-none mb-4">
                  Angelique-Mari
                </h1>
                <span className="font-display font-black text-xs uppercase tracking-[0.4em] text-amber-300">
                  BRAND CREATIVES
                </span>
              </motion.div>
            </div>

            {/* Bottom: Progress bar and status tickers */}
            <div className="w-full flex flex-col gap-4 border-t border-white/10 pt-8">
              <div className="flex justify-between items-end font-mono text-[10px] text-warm-400 uppercase tracking-widest">
                <span>[ BUILDING THE EXHIBITION ]</span>
                <span className="text-amber-300 font-bold">{progress}%</span>
              </div>

              {/* Progress track line */}
              <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-amber-300"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeInOut' }}
                />
              </div>

              <div className="flex justify-between text-[8px] font-mono text-warm-600 uppercase tracking-widest">
                <span>JOHANNESBURG / SOUTH AFRICA</span>
                <span>EXPECT NOTHING ORDINARY</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main site layout (Fades in gently after preload completes) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Hero Banner Section */}
        <Hero onBookClick={handleBookClick} />

        {/* Selected Portfolio Exhibition 
        <Portfolio /> */}

        {/* Services Spread 
        <Services /> */}

        {/* Client Testimonials Carousel 
        <Testimonials /> */}

        {/* Luxury Booking Inquiry Questionnaire 
        <Booking /> */}

        {/* Gigantic Branding Footer 
        <Footer /> */}
      </motion.div>

    </div>
  );
}
