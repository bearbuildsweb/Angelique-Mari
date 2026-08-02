/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleBookClick = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-[#FF6800] overflow-x-hidden selection:bg-[#FF6800] selection:text-black">
      
      {/* 1. Cinematic Film Grain Overlay */}
      <div className="editorial-grain pointer-events-none" />

      {/* 2. Custom trailing interactive cursor */}
      <CustomCursor />

      {/* 3. Contemporary Fashion Exhibition Preloader */}
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader onComplete={() => setLoading(false)} />
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

        {/* Selected Portfolio Exhibition */} 
        <Portfolio /> 

        {/* Services Spread 
        <Services /> */}

        {/* Client Testimonials Carousel */}
        <Testimonials /> 

        {/* Luxury Booking Inquiry Questionnaire */}
        <Booking /> 
        
        {/* Gigantic Branding Footer */}
        <Footer /> 
      </motion.div>

    </div>
  );
}
