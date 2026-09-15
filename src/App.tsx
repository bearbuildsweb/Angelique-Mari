/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import ConversationCTA from './components/ConversationCTA';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
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
        <Hero onBookClick={handleBookClick} />

        {/* Stage 2 & 3: Experience & Explore (Selected Archival Works) */} 
        <Portfolio /> 

        {/* Stage 4: Convert (Direct WhatsApp Conversation Initiation) */}
        <ConversationCTA /> 
        
        {/* Editorial Brand Footer */}
        <Footer /> 
      </div>

      {/* Native Brand Floating WhatsApp Widget */}
      <WhatsAppWidget />
    </>
  );
}
