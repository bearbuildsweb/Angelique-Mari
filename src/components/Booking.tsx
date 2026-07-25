import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';

import imageFashionCampaign from '../assets/images/fashion_campaign_1784538048818.jpg';
import imageStreetCouture from '../assets/images/street_couture_maboneng_1784717507856.jpg';
import imageHeroModel from '../assets/images/hero_model_1784538034499.jpg';
import imageUndergroundGallery from '../assets/images/underground_gallery_1784538063523.jpg';

const PROJECT_CATEGORIES = [
  {
    id: 'CAMPAIGNS',
    label: '01.',
    fullTitle: 'CAMPAIGNS',
    helperText: 'CAMPAIGNS — Brand activations & commercial campaigns',
    image: imageFashionCampaign,
    tag: 'BRAND & COMMERCIAL',
    exhibitNo: 'EXHIBIT N° 01',
    note: 'Brand activations & commercial campaigns'
  },
  {
    id: 'EDITORIAL',
    label: '02.',
    fullTitle: 'EDITORIAL',
    helperText: 'EDITORIAL — Fashion, portraits & magazines',
    image: imageStreetCouture,
    tag: 'FASHION & MAGS',
    exhibitNo: 'EXHIBIT N° 02',
    note: 'Fashion, portraits & magazines'
  },
  {
    id: 'CONTENT',
    label: '03.',
    fullTitle: 'CONTENT',
    helperText: 'CONTENT — Social media & digital content',
    image: imageHeroModel,
    tag: 'SOCIAL & DIGITAL',
    exhibitNo: 'EXHIBIT N° 03',
    note: 'Social media & digital content'
  },
  {
    id: 'LIVE',
    label: '04.',
    fullTitle: 'LIVE',
    helperText: 'LIVE — Events, DJs & entertainment',
    image: imageUndergroundGallery,
    tag: 'EVENTS & DJS',
    exhibitNo: 'EXHIBIT N° 04',
    note: 'Events, DJs & entertainment'
  },
];

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'CAMPAIGNS',
    preferredDate: '',
    instagram: '',
    vision: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const activeCategory = PROJECT_CATEGORIES.find(c => c.id === formData.projectType) || PROJECT_CATEGORIES[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const selectCategory = (typeId: string) => {
    setFormData((prev) => ({ ...prev, projectType: typeId }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.preferredDate.trim() || !formData.vision.trim()) {
      setErrorMessage('REQUIRED: NAME, EMAIL, TIMELINE & CONCEPT BRIEF');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1400);
  };

  return (
    <section id="booking" className="relative w-full bg-neutral-950 text-neutral-100 py-20 md:py-32 px-4 sm:px-6 md:px-12 z-10 border-t border-neutral-800">
      
      {/* Background High-Street Punk Grid & Stencil Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Minimal Museum Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-6 border-b border-neutral-800 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2 font-mono text-[10px] sm:text-xs tracking-[0.25em] text-amber-500 uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>[ BOOKING ]</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400 font-normal">BEGIN</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans tracking-tighter uppercase font-black text-neutral-50 leading-none">
              LET'S <span className="font-serif italic font-light text-neutral-400">CREATE</span>
            </h2>
          </div>
          
          <div className="font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-[0.2em] flex items-center gap-4">
            <span className="border border-neutral-800 px-3 py-1 bg-neutral-900/80">JOHANNESBURG • SA</span>
            <span className="hidden sm:inline text-neutral-700">|</span>
            <span>NEW BOOKING</span>
          </div>
        </div>

        {/* Category Image Selector Bar (High-Street Punk Lookbook Strip) */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-3 font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
            <span>// SELECT PROJECT TYPE</span>
            <span>[ {activeCategory.exhibitNo} ]</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {PROJECT_CATEGORIES.map((cat) => {
              const isSelected = formData.projectType === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => selectCategory(cat.id)}
                  className={`group relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden text-left border transition-all duration-300 ${
                    isSelected 
                      ? 'border-amber-500 ring-1 ring-amber-500/50 shadow-lg shadow-amber-500/10 scale-[1.02]' 
                      : 'border-neutral-800 hover:border-neutral-600 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.fullTitle}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isSelected ? 'grayscale-0 contrast-110 scale-105' : 'grayscale contrast-120 group-hover:scale-105'
                    }`}
                  />
                  
                  {/* Punk Tape Tag */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-2 sm:p-3 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className={`font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 font-bold ${
                        isSelected ? 'bg-amber-500 text-black' : 'bg-neutral-900/90 text-neutral-300'
                      }`}>
                        {cat.fullTitle}
                      </span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                      )}
                    </div>

                    <div>
                      <span className="font-mono text-[9px] text-neutral-400 block tracking-widest">{cat.label}</span>
                      <span className="font-sans font-extrabold text-xs sm:text-sm text-white tracking-tight uppercase block leading-tight">
                        {cat.tag}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Layout: Left Image-Heavy Museum Exhibit + Right Minimal Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-x-12 lg:gap-y-6 items-start">
          
          {/* 1. Dynamic Featured Exhibit Image Card (Mobile: 1st, Desktop: Top Left) */}
          <div className="col-span-1 lg:col-span-5 order-1">
            <div className="relative border border-neutral-800 bg-neutral-900 overflow-hidden shadow-2xl group">
              
              {/* Museum Corner Crosshairs */}
              <span className="absolute top-2 left-2 text-[10px] font-mono text-neutral-500 z-20 pointer-events-none">+</span>
              <span className="absolute top-2 right-2 text-[10px] font-mono text-neutral-500 z-20 pointer-events-none">+</span>
              <span className="absolute bottom-2 left-2 text-[10px] font-mono text-neutral-500 z-20 pointer-events-none">+</span>
              <span className="absolute bottom-2 right-2 text-[10px] font-mono text-neutral-500 z-20 pointer-events-none">+</span>

              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeCategory.id}
                    src={activeCategory.image}
                    alt={activeCategory.fullTitle}
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover grayscale contrast-120 hover:grayscale-0 transition-all duration-700"
                  />
                </AnimatePresence>

                {/* Stencil Tape & Museum Label Overlay */}
                <div className="absolute top-4 left-4 z-20 bg-black/90 border border-neutral-700 px-2.5 py-1 text-[9px] font-mono text-amber-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                  <span>{activeCategory.exhibitNo}</span>
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5 z-20">
                  <span className="font-mono text-[9px] text-amber-500 uppercase tracking-widest block mb-1">
                    [ VISUAL CONCEPT REFERENCE ]
                  </span>
                  <h3 className="font-sans font-black text-xl text-white uppercase tracking-tight">
                    {activeCategory.fullTitle}
                  </h3>
                  <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider mt-1">
                    {activeCategory.note}
                  </p>
                </div>
              </div>

              {/* Museum Archive Plaque Sub-strip */}
              <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                <span>AM PHOTOGRAPHY</span>
                <span className="text-neutral-600">//</span>
                <span>CURRENTLY BOOKING</span>
              </div>
            </div>
          </div>

          {/* 2. RIGHT: Minimalist High-Street Museum Questionnaire (Mobile: 2nd, Desktop: Right Column) */}
          <div className="col-span-1 lg:col-span-7 lg:col-start-6 lg:row-span-2 order-2 border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 md:p-10 relative">
            
            {/* Museum Plaque Badge */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-800">
              <span className="font-mono text-[10px] text-amber-500 uppercase tracking-[0.2em] font-semibold">
                // DETAILS
              </span>
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                [ REQUIRED FIELDS * ]
              </span>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  id="booking-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {errorMessage && (
                    <div className="p-3 bg-red-950/60 border border-red-500/50 text-red-300 font-mono text-[10px] uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Form Fields: Minimalist Micro-Labels */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* 01. NAME */}
                    <div className="flex flex-col">
                      <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1.5">
                        01. FULL NAME *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="NAME"
                        className="w-full border border-neutral-800 bg-neutral-950/90 rounded-none px-3.5 py-2.5 text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-500 text-xs font-mono transition-colors duration-200"
                      />
                    </div>

                    {/* 02. EMAIL */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1.5">
                        02. EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="EMAIL@DOMAIN.COM"
                        className="w-full border border-neutral-800 bg-neutral-950/90 rounded-none px-3.5 py-2.5 text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-500 text-xs font-mono transition-colors duration-200"
                      />
                    </div>

                    {/* 03. PHONE */}
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1.5">
                        03. PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+27 82 123 4567"
                        className="w-full border border-neutral-800 bg-neutral-950/90 rounded-none px-3.5 py-2.5 text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-500 text-xs font-mono transition-colors duration-200"
                      />
                    </div>

                    {/* 04. PROJECT TYPE */}
                    <div className="flex flex-col col-span-1 sm:col-span-2">
                      <label htmlFor="projectType" className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1.5">
                        04. PROJECT TYPE *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full border border-neutral-800 bg-neutral-950/90 rounded-none px-3.5 py-2.5 text-neutral-100 focus:outline-none focus:border-amber-500 text-xs font-mono transition-colors duration-200 uppercase cursor-pointer"
                      >
                        {PROJECT_CATEGORIES.map(c => (
                          <option key={c.id} value={c.id} className="bg-neutral-950 text-neutral-200">
                            {c.helperText}
                          </option>
                        ))}
                      </select>
                      <span className="font-mono text-[10px] text-amber-500 uppercase tracking-wider mt-1.5">
                        {activeCategory.helperText}
                      </span>
                    </div>

                    {/* 05. PREFERRED DATE */}
                    <div className="flex flex-col">
                      <label htmlFor="preferredDate" className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1.5">
                        05. TIMELINE / DATE *
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full border border-neutral-800 bg-neutral-950/90 rounded-none px-3.5 py-2.5 text-neutral-100 focus:outline-none focus:border-amber-500 text-xs font-mono transition-colors duration-200"
                      />
                    </div>

                    {/* 06. INSTAGRAM / SITE */}
                    <div className="flex flex-col">
                      <label htmlFor="instagram" className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1.5">
                        06. INSTAGRAM / SITE
                      </label>
                      <input
                        type="text"
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        placeholder="@HANDLE / WEBSITE"
                        className="w-full border border-neutral-800 bg-neutral-950/90 rounded-none px-3.5 py-2.5 text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-500 text-xs font-mono transition-colors duration-200"
                      />
                    </div>

                  </div>

                  {/* 07. CONCEPT BRIEF */}
                  <div className="flex flex-col pt-2">
                    <label htmlFor="vision" className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1.5">
                      07. CONCEPT BRIEF *
                    </label>
                    <textarea
                      id="vision"
                      name="vision"
                      rows={4}
                      required
                      value={formData.vision}
                      onChange={handleChange}
                      placeholder="Tell me about your vision, preferred location, and the kind of images you're looking for..."
                      className="w-full border border-neutral-800 bg-neutral-950/90 rounded-none p-3.5 text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-500 text-xs font-mono transition-colors duration-200 resize-none"
                    />
                  </div>

                  {/* Submission Row */}
                  <div className="pt-4 border-t border-neutral-800 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative border border-amber-500 bg-amber-500 text-neutral-950 px-6 py-3 font-mono text-xs uppercase tracking-widest font-bold hover:bg-neutral-950 hover:text-amber-400 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                      <span>{isSubmitting ? 'SENDING...' : 'SEND'}</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                    </button>
                  </div>

                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center py-12 px-4 border border-amber-500/30 bg-neutral-950"
                >
                  <div className="w-12 h-12 border border-amber-500 bg-amber-500/10 flex items-center justify-center mb-6 text-amber-400">
                    <Check className="w-6 h-6" />
                  </div>

                  <span className="font-mono text-[10px] text-amber-500 uppercase tracking-[0.25em] mb-2 font-semibold">
                    // BRIEF RECEIVED
                  </span>

                  <h3 className="font-sans text-3xl sm:text-4xl font-black uppercase text-white mb-6">
                    THANK YOU
                  </h3>

                  <div className="font-mono text-xs text-neutral-300 max-w-md leading-relaxed space-y-3 mb-6">
                    <p className="text-white font-bold">{formData.name ? `${formData.name},` : 'Eric Thomas,'}</p>
                    <p>
                      Your{' '}
                      <span className="text-amber-400 font-bold">
                        {formData.projectType
                          ? formData.projectType.charAt(0).toUpperCase() + formData.projectType.slice(1).toLowerCase()
                          : 'Campaigns'}
                      </span>{' '}
                      brief has been received.
                    </p>
                    <p className="text-neutral-400">It'll be reviewed shortly.</p>
                  </div>

                  <div className="w-full max-w-xs border-t border-neutral-800 pt-4 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                    REF N° 24840 • ARCHIVE 2026
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: 'CAMPAIGNS',
                        preferredDate: '',
                        instagram: '',
                        vision: '',
                      });
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="mt-6 font-mono text-[10px] uppercase tracking-widest text-amber-500 hover:underline cursor-pointer"
                  >
                    [ DONE ]
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* 3. Direct Minimal Coordinates (Mobile/Tablet: 3rd [below form], Desktop: Left Column) */}
          <div className="col-span-1 lg:col-span-5 lg:col-start-1 order-3 border border-neutral-800 bg-neutral-900/50 p-4 font-mono text-[10px] text-neutral-400 flex flex-col gap-1.5 uppercase tracking-wider">
            <div className="flex justify-between text-neutral-500">
              <span>DIRECT CONTACT</span>
              <span>BASED IN JOHANNESBURG</span>
            </div>
            <a 
              href="mailto:ambrandcreatives@gmail.com" 
              className="text-neutral-200 hover:text-amber-400 transition-colors font-semibold underline underline-offset-4"
            >
              AMBRANDCREATIVES@GMAIL.COM
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

