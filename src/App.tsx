/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import ReviewModal from './components/ReviewModal';
import ConversationCTA from './components/ConversationCTA';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bioModalOpen, setBioModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  // Hash-based routing synchronization for #review (with fallback to #review-freelancer)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#review' || hash === '#review-freelancer' || hash === '#write-review') {
        setReviewModalOpen(true);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleBookClick = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenReviewModal = () => {
    window.location.hash = '#review';
    setReviewModalOpen(true);
  };

  const handleCloseReviewModal = () => {
    setReviewModalOpen(false);
    const hash = window.location.hash.toLowerCase();
    if (hash === '#review' || hash === '#review-freelancer' || hash === '#write-review') {
      history.pushState(null, '', window.location.pathname + window.location.search);
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
          onReviewClick={handleOpenReviewModal}
        />

        {/* Stage 2 & 3: Experience & Explore (Selected Archival Works) */} 
        <Portfolio /> 

        {/* Stage 3.5: About Me (Editorial Artist Profile inspired by reference) */}
        <AboutMe onBioModalToggle={setBioModalOpen} />

        {/* Stage 4: Convert (Direct WhatsApp Conversation Initiation) */}
        <ConversationCTA /> 
        
        {/* Editorial Brand Footer */}
        <Footer onReviewClick={handleOpenReviewModal} /> 
      </div>

      {/* Review Freelancer Modal with Hash Routing (#review) */}
      <ReviewModal
        isOpen={reviewModalOpen}
        onClose={handleCloseReviewModal}
      />

      {/* Native Brand Floating WhatsApp Widget (hidden when modal/drawer is open) */}
      <WhatsAppWidget isHidden={menuOpen || bioModalOpen || reviewModalOpen} />
    </>
  );
}
