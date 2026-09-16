/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import ConversationCTA from './components/ConversationCTA';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bioModalOpen, setBioModalOpen] = useState(false);

  const handleBookClick = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="relative min-h-screen bg-black text-[#FF6800] overflow-x-hidden selection:bg-[#FF6800] selection:text-black">
        {/* Stage 1: Arrive (Cinematic, focused Hero) */}
        <Hero
          onBookClick={handleBookClick}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        {/* Stage 2 & 3: Experience & Explore (Selected Archival Works) */} 
        <Portfolio /> 

        {/* Stage 3.5: About Me (Editorial Artist Profile inspired by reference) */}
        <AboutMe onBioModalToggle={setBioModalOpen} />

        {/* Stage 4: Convert (Direct WhatsApp Conversation Initiation) */}
        <ConversationCTA /> 
        
        {/* Editorial Brand Footer */}
        <Footer /> 
      </div>

      {/* Native Brand Floating WhatsApp Widget (hidden when collapsible nav menu or bio modal is open) */}
      <WhatsAppWidget isHidden={menuOpen || bioModalOpen} />
    </>
  );
}
