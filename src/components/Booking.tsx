import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Editorial Photography',
    preferredDate: '',
    instagram: '',
    vision: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Quick client-side validations
    if (!formData.name.trim() || !formData.email.trim() || !formData.vision.trim()) {
      setErrorMessage('Please provide your name, email, and share your project vision.');
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="booking" className="relative w-full bg-warm-950 text-warm-50 py-24 md:py-36 px-6 md:px-12 z-10 border-t border-white/5">
      
      {/* Absolute Decorative Grid Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title Spreard */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 pb-8 border-b border-white/10">
          <div className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-300 mb-3">/ ACQUISITIONS & PROJECTS</span>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter uppercase font-light leading-none">
              Inquire <span className="font-display font-extrabold italic text-white">Experience</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0 font-mono text-xs text-warm-400 uppercase tracking-widest">
            COUTURE SUBMISSIONS OPEN N. 06
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Side: Editorial context card and contact coordinates */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif uppercase tracking-tight text-white mb-6">
                Book your campaign <br />with uncompromised trust.
              </h3>
              <p className="font-sans text-sm text-warm-300 leading-relaxed max-w-sm mb-10">
                We accept limited commissions each quarter to preserve our bespoke attention to detail. Share your aesthetic, your timeline, and your architectural concept below.
              </p>

              {/* Mini Lookbook Card within booking */}
              <div className="relative w-full max-w-[280px] aspect-[3/4] rounded bg-warm-900 overflow-hidden shadow-2xl group hidden md:block">
                <div className="absolute inset-0 bg-warm-950/10 z-10" />
                <img
                  src="/src/assets/images/fashion_campaign_1784538048818.jpg"
                  alt="Inquiry Campaign Mood"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-90 transition-all duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 font-mono text-[8px] uppercase tracking-widest bg-warm-950/80 backdrop-blur-sm p-3 border border-white/5 rounded">
                  <span>SAMPLE SPACE • CATA.02</span>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 border-t border-white/10 pt-8 flex flex-col font-mono text-[10px] text-warm-400 gap-2 uppercase tracking-wider">
              <span>LAT: 35.6762° N / LNG: 139.6503° E</span>
              <a 
                href="mailto:ambrandcreatives@gmail.com" 
                className="hover:text-amber-300 transition-colors uppercase self-start"
              >
                AMBRANDCREATIVES@GMAIL.COM
              </a>
              <span>+33 1 42 68 53 00</span>
            </div>
          </div>

          {/* Right Side: The Premium Form questionnaire */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  id="booking-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6 md:space-y-8"
                >
                  {errorMessage && (
                    <div className="p-4 bg-red-950/40 border border-red-500/30 text-red-300 font-mono text-[11px] uppercase tracking-wider">
                      Error: {errorMessage}
                    </div>
                  )}

                  {/* Form Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    
                    {/* Name */}
                    <div className="flex flex-col">
                      <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-warm-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Clara Vance"
                        className="w-full border border-white/10 bg-transparent rounded-none px-4 py-3 text-warm-100 placeholder-warm-600 focus:outline-none focus:border-amber-300 focus:ring-0 text-sm transition-colors duration-300"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-warm-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="clara@miss-archive.com"
                        className="w-full border border-white/10 bg-transparent rounded-none px-4 py-3 text-warm-100 placeholder-warm-600 focus:outline-none focus:border-amber-300 focus:ring-0 text-sm transition-colors duration-300"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="font-mono text-[10px] uppercase tracking-widest text-warm-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+33 6 12 34 56 78"
                        className="w-full border border-white/10 bg-transparent rounded-none px-4 py-3 text-warm-100 placeholder-warm-600 focus:outline-none focus:border-amber-300 focus:ring-0 text-sm transition-colors duration-300"
                      />
                    </div>

                    {/* Project Type */}
                    <div className="flex flex-col">
                      <label htmlFor="projectType" className="font-mono text-[10px] uppercase tracking-widest text-warm-400 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full border border-white/10 bg-transparent rounded-none px-4 py-3 text-warm-100 placeholder-warm-600 focus:outline-none focus:border-amber-300 focus:ring-0 text-sm transition-colors duration-300"
                      >
                        <option value="Editorial Photography" className="bg-warm-950 text-white">Editorial Photography</option>
                        <option value="Brand Campaigns" className="bg-warm-950 text-white">Brand Campaigns</option>
                        <option value="Portrait Sessions" className="bg-warm-950 text-white">Portrait Sessions</option>
                        <option value="Creative Direction" className="bg-warm-950 text-white">Creative Direction</option>
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div className="flex flex-col">
                      <label htmlFor="preferredDate" className="font-mono text-[10px] uppercase tracking-widest text-warm-400 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full border border-white/10 bg-transparent rounded-none px-4 py-3 text-warm-100 placeholder-warm-600 focus:outline-none focus:border-amber-300 focus:ring-0 text-sm transition-colors duration-300"
                      />
                    </div>

                    {/* Instagram/Website */}
                    <div className="flex flex-col">
                      <label htmlFor="instagram" className="font-mono text-[10px] uppercase tracking-widest text-warm-400 mb-2">
                        Instagram or Website
                      </label>
                      <input
                        type="text"
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        placeholder="@miss_archive"
                        className="w-full border border-white/10 bg-transparent rounded-none px-4 py-3 text-warm-100 placeholder-warm-600 focus:outline-none focus:border-amber-300 focus:ring-0 text-sm transition-colors duration-300"
                      />
                    </div>

                  </div>

                  {/* Tell me about your vision (Large custom text box) */}
                  <div className="flex flex-col mt-4">
                    <label htmlFor="vision" className="font-mono text-[10px] uppercase tracking-widest text-warm-400 mb-2">
                      Tell me about your vision *
                    </label>
                    <textarea
                      id="vision"
                      name="vision"
                      rows={5}
                      required
                      value={formData.vision}
                      onChange={handleChange}
                      placeholder="Share your aesthetic parameters, desired deliverables, mood references, and core campaign concepts..."
                      className="w-full border border-white/10 bg-transparent rounded-none px-4 py-4 text-warm-100 placeholder-warm-600 focus:outline-none focus:border-amber-300 focus:ring-0 text-sm transition-colors duration-300 resize-none"
                    />
                  </div>

                  {/* Bottom details and submit button */}
                  <div className="pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        className="rounded bg-transparent border-white/20 text-amber-300 focus:ring-0 cursor-pointer"
                      />
                      <label htmlFor="consent" className="font-mono text-[9px] uppercase tracking-widest text-warm-400 cursor-pointer">
                        I accept the bespoke curation specifications *
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative px-8 py-4 overflow-hidden border border-white bg-white text-warm-950 text-xs font-mono uppercase tracking-widest transition-colors duration-500 hover:text-white self-stretch sm:self-auto text-center"
                    >
                      {/* Hover background color slide */}
                      <span className="absolute inset-0 bg-warm-950 translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-y-0" />
                      
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? 'PROCESSING...' : 'Begin the Project'}
                        <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                      </span>
                    </button>
                  </div>

                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center p-8 md:p-16 border border-white/10 bg-white/[0.02] rounded"
                >
                  {/* Submission success check icon */}
                  <div className="w-16 h-16 rounded-full border border-amber-300 flex items-center justify-center mb-8">
                    <span className="text-amber-300 text-2xl font-mono select-none">✓</span>
                  </div>

                  <span className="font-mono text-[9px] text-amber-300 uppercase tracking-widest mb-3">
                    ACQUISITIONS REGISTERED
                  </span>

                  <h3 className="text-3xl md:text-5xl font-serif uppercase tracking-tight text-white mb-6">
                    Thank You, <br />{formData.name}
                  </h3>

                  <p className="font-sans text-sm text-warm-300 max-w-md leading-relaxed mb-8">
                    Your visual concept treatment has been securely archived in our registry directory. Our creative directors will analyze your variables and compile a response dossier within 48 standard business hours.
                  </p>

                  <div className="font-mono text-[10px] text-warm-500 uppercase tracking-widest border-t border-white/10 pt-6 w-full max-w-sm">
                    REFERENCE N. {Math.floor(Math.random() * 90000) + 10000} • {formData.projectType.toUpperCase()}
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: 'Editorial Photography',
                        preferredDate: '',
                        instagram: '',
                        vision: '',
                      });
                    }}
                    className="mt-8 font-mono text-[10px] uppercase tracking-widest text-warm-400 underline hover:text-white transition-colors"
                  >
                    [ Submit Another Inquiry ]
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
