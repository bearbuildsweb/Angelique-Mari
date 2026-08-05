import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, Calendar as CalendarIcon, ChevronLeft, ChevronRight, User, Tag, Sparkles } from 'lucide-react';
import Logo from './Logo';

import imageJoburgWedding from '../assets/images/joburg_wedding_editorial_1785698386628.jpg';
import imageJoburgMaternity from '../assets/images/joburg_maternity_editorial_1785698401776.jpg';
import imageJoburgCakeSmash from '../assets/images/joburg_cakesmash_studio_1785698420504.jpg';
import imageJoburgBirthday from '../assets/images/joburg_birthday_nightlife_1785698434145.jpg';
import imageJoburgLifestyle from '../assets/images/joburg_lifestyle_maboneng_1785698449438.jpg';
import imageJoburgFamily from '../assets/images/joburg_family_contemporary_1785698464551.jpg';

export interface SessionCategory {
  id: string;
  title: string;
  subtitle: string;
  code: string;
  description: string;
  image: string;
}

export const SESSION_CATEGORIES: SessionCategory[] = [
  {
    id: 'wedding',
    title: 'Wedding',
    subtitle: 'LOVE, UNFILTERED',
    code: 'SESSION N° 01',
    description: 'Documentary-style wedding photography in Rosebank & Sandton luxury venues.',
    image: imageJoburgWedding,
  },
  {
    id: 'baby-shower',
    title: 'Baby Shower',
    subtitle: 'GROWING MOMENTS',
    code: 'SESSION N° 02',
    description: 'Refined lifestyle imagery in sunlit studio lofts.',
    image: imageJoburgMaternity,
  },
  {
    id: 'cake-smash',
    title: 'Cake Smash',
    subtitle: 'SMALL CHAOS',
    code: 'SESSION N° 03',
    description: 'Modern studio photography with organic compositions and clean lighting.',
    image: imageJoburgCakeSmash,
  },
  {
    id: 'birthday',
    title: 'Birthday',
    subtitle: 'BORN TO SHINE',
    code: 'SESSION N° 04',
    description: 'High-octane portraiture set in contemporary rooftops and underground spaces.',
    image: imageJoburgBirthday,
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle',
    subtitle: 'IN MOTION',
    code: 'SESSION N° 05',
    description: 'Editorial portraits amidst Johannesburg streets and industrial textures.',
    image: imageJoburgLifestyle,
  },
  {
    id: 'family-session',
    title: 'Family Session',
    subtitle: 'REAL CONNECTION',
    code: 'SESSION N° 06',
    description: 'Modern family portraiture captured in natural light and architectural surroundings.',
    image: imageJoburgFamily,
  },
];

const MONTH_NAMES = [
  'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
  'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
];

const WEEKDAY_NAMES = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

interface DayItem {
  dateNumber: number;
  fullDateStr: string;
  displayDateStr: string;
  dayOfWeekName: string;
  isWeekend: boolean;
  isAvailable: boolean;
  isPast: boolean;
}

export default function Booking() {
  // Calendar Month State (Defaults to current date or August 2026)
  const today = new Date();
  const initialYear = today.getFullYear() < 2026 ? 2026 : today.getFullYear();
  const initialMonth = today.getFullYear() < 2026 ? 7 : today.getMonth(); // 7 = August

  const [currentYear, setCurrentYear] = useState<number>(initialYear);
  const [currentMonth, setCurrentMonth] = useState<number>(initialMonth);

  // Progressive Form State
  const [selectedDate, setSelectedDate] = useState<DayItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<SessionCategory | null>(null);
  
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [sessionNotes, setSessionNotes] = useState('');

  // Active Progressive Step (1: Date, 2: Category, 3: Visitor Details)
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Generate Calendar Days for currentYear & currentMonth
  const generateDays = (): (DayItem | null)[] => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);

    // Get starting day of week (MON = 0, TUE = 1, ..., SUN = 6)
    let startingDay = firstDay.getDay() - 1;
    if (startingDay < 0) startingDay = 6;

    const daysInMonth = lastDay.getDate();
    const days: (DayItem | null)[] = [];

    // Empty padding cells for preceding month
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }

    const checkDate = new Date();
    checkDate.setHours(0, 0, 0, 0);

    for (let d = 1; d <= daysInMonth; d++) {
      const dateObj = new Date(currentYear, currentMonth, d);
      const dayOfWeek = dateObj.getDay(); // 0 = Sun, 6 = Sat
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const isPast = dateObj < checkDate;

      const dayName = WEEKDAY_NAMES[dayOfWeek === 0 ? 6 : dayOfWeek - 1];
      const monthStr = MONTH_NAMES[currentMonth].slice(0, 3);

      days.push({
        dateNumber: d,
        fullDateStr: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`,
        displayDateStr: `${d} ${monthStr} ${currentYear}`,
        dayOfWeekName: dayOfWeek === 0 ? 'SUNDAY' : dayOfWeek === 6 ? 'SATURDAY' : dayName,
        isWeekend,
        isAvailable: isWeekend && !isPast,
        isPast,
      });
    }

    return days;
  };

  const calendarDays = generateDays();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const handleDateSelect = (day: DayItem) => {
    if (!day.isAvailable) return;
    setSelectedDate(day);
    setErrorMessage('');
    // Auto-advance to Step 2 smoothly
    setActiveStep(2);
  };

  const handleCategorySelect = (category: SessionCategory) => {
    setSelectedCategory(category);
    setErrorMessage('');
    // Auto-advance to Step 3 smoothly
    setActiveStep(3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!selectedDate) {
      setErrorMessage('PLEASE SELECT AN AVAILABLE DATE IN STEP 1');
      setActiveStep(1);
      return;
    }
    if (!selectedCategory) {
      setErrorMessage('PLEASE SELECT A SESSION TYPE IN STEP 2');
      setActiveStep(2);
      return;
    }
    if (!visitorName.trim()) {
      setErrorMessage('PLEASE ENTER YOUR NAME TO CONTINUE');
      return;
    }

    setIsSubmitting(true);

    const dateStr = typeof selectedDate === 'string'
      ? selectedDate
      : selectedDate?.displayDateStr || selectedDate?.fullDateStr || '';

    const categoryStr = typeof selectedCategory === 'string'
      ? selectedCategory
      : selectedCategory?.title || '';

    const payload = {
      // Primary & Alias Name fields
      name: visitorName,
      visitorName: visitorName,
      client_name: visitorName,
      visitor_name: visitorName,
      clientName: visitorName,

      // Primary & Alias Email fields
      email: visitorEmail,
      visitorEmail: visitorEmail,
      client_email: visitorEmail,
      visitor_email: visitorEmail,
      clientEmail: visitorEmail,

      // Primary & Alias Phone / Contact fields
      phone: visitorPhone,
      visitorPhone: visitorPhone,
      contact_number: visitorPhone,
      phone_number: visitorPhone,
      visitor_phone: visitorPhone,
      contactNumber: visitorPhone,

      // Primary & Alias Date fields
      date: dateStr,
      selectedDate: dateStr,
      requested_date: dateStr,
      requestedDate: dateStr,
      date_string: dateStr,

      // Primary & Alias Category fields
      category: categoryStr,
      selectedCategory: categoryStr,
      session_category: categoryStr,
      service: categoryStr,
      session_type: categoryStr,

      // Primary & Alias Notes / Vision fields
      notes: sessionNotes,
      sessionNotes: sessionNotes,
      vision: sessionNotes,
      session_notes: sessionNotes,
      vision_notes: sessionNotes,
    };

    console.log('[Booking Form] Submitting payload:', payload);

    try {
      const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || 'https://kjwbwfizbbfzfvvlltea.supabase.co';
      const supabaseAnonKey =
        (import.meta as any).env?.VITE_SUPABASE_ANON_KEY ||
        (import.meta as any).env?.VITE_SUPABASE_PUBLISHABLE_KEY ||
        'anon';

      const edgeFunctionUrl =
        (import.meta as any).env?.VITE_SUPABASE_FUNCTION_URL ||
        (import.meta as any).env?.VITE_EDGE_FUNCTION_URL ||
        `${supabaseUrl.replace(/\/$/, '')}/functions/v1/send-email`;

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'apikey': supabaseAnonKey,
      };

      console.log('[Booking Form] Invoking edge function at:', edgeFunctionUrl);

      const res = await fetch(edgeFunctionUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      });

      const responseData = await res.json().catch(() => ({}));
      console.log('[Booking Form] Edge function response:', res.status, responseData);

      if (!res.ok) {
        const errorText = responseData?.error || responseData?.message || `Server returned status ${res.status}`;
        console.error('[Booking Form] Error response from send-email:', errorText);
        setErrorMessage(`Submitting inquiry failed: ${errorText}`);
        return;
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('[Booking Form] Error submitting to edge function:', err);
      setErrorMessage(`Network error submitting form: ${err.message || 'Please check your connection and try again.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSelectedDate(null);
    setSelectedCategory(null);
    setVisitorName('');
    setVisitorEmail('');
    setVisitorPhone('');
    setSessionNotes('');
    setActiveStep(1);
  };

  const handleDone = () => {
    handleReset();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="booking" className="relative w-full bg-[#000000] text-[#FF6800] py-20 md:py-32 px-4 sm:px-6 md:px-12 z-10 border-t border-[#FF6800]/20">
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF680008_1px,transparent_1px),linear-gradient(to_bottom,#FF680008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-6 border-b border-[#FF6800]/20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3 font-sans text-xs tracking-[0.3em] text-[#FF6800] uppercase font-bold">
              <span className="w-2 h-2 rounded-full bg-[#FF6800] animate-pulse" />
              <span>// START</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight uppercase font-extrabold text-white leading-none">
              BOOK A <span className="font-serif italic font-light text-[#FF6800]">SESSION</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-sans tracking-[0.2em] uppercase text-[#FF6800]">
            <span className="border border-[#FF6800]/40 px-3.5 py-1.5 bg-[#000000] text-white font-bold">
              JOHANNESBURG • SA
            </span>
            <span className="text-[#FF6800]/40">•</span>
            <span className="text-[#FF6800] font-bold">WEEKEND SESSIONS ONLY</span>
          </div>
        </div>

        {/* Progressive Step Controller Indicator Bar */}
        <div className="flex flex-row w-full gap-2 sm:grid sm:grid-cols-3 sm:gap-4 mb-10">
          
          {/* Step 1 Indicator */}
          <button
            type="button"
            onClick={() => setActiveStep(1)}
            className={`group text-left p-2.5 sm:p-5 border transition-all duration-300 relative ${
              activeStep === 1
                ? 'flex-[1.8] sm:flex-1 border-white bg-[#000000] text-[#FF6800] ring-1 ring-[#FF6800]'
                : selectedDate
                ? 'flex-1 border-[#FF6800]/40 bg-[#000000]/60 text-white hover:border-[#FF6800]'
                : 'flex-1 border-white/20 bg-[#000000]/30 text-white/50 hover:border-white/50'
            }`}
          >
            <div className="flex justify-between items-center mb-0.5 sm:mb-1">
              <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-bold text-[#FF6800] whitespace-nowrap">
                01. DATE
              </span>
              {selectedDate && (
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FF6800]" />
              )}
            </div>
            <div className={`font-serif text-xs sm:text-base text-white font-bold ${
              activeStep === 1 ? 'whitespace-nowrap sm:truncate' : 'truncate'
            }`}>
              {selectedDate ? selectedDate.displayDateStr : 'Choose a weekend'}
            </div>
            {activeStep === 1 && (
              <motion.div layoutId="stepIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6800]" />
            )}
          </button>

          {/* Step 2 Indicator */}
          <button
            type="button"
            onClick={() => selectedDate && setActiveStep(2)}
            disabled={!selectedDate}
            className={`group text-left p-2.5 sm:p-5 border transition-all duration-300 relative ${
              !selectedDate ? 'flex-1 cursor-not-allowed opacity-40 border-white/10 bg-[#000000]' :
              activeStep === 2
                ? 'flex-[1.8] sm:flex-1 border-white bg-[#000000] text-[#FF6800] ring-1 ring-[#FF6800]'
                : selectedCategory
                ? 'flex-1 border-[#FF6800]/40 bg-[#000000]/60 text-white hover:border-[#FF6800]'
                : 'flex-1 border-white/20 bg-[#000000]/30 text-white/50 hover:border-white/50'
            }`}
          >
            <div className="flex justify-between items-center mb-0.5 sm:mb-1">
              <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-bold text-[#FF6800] whitespace-nowrap">
                02. SHOOT
              </span>
              {selectedCategory && (
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FF6800]" />
              )}
            </div>
            <div className={`font-serif text-xs sm:text-base text-white font-bold ${
              activeStep === 2 ? 'whitespace-nowrap sm:truncate' : 'truncate'
            }`}>
              {selectedCategory ? selectedCategory.title : 'Choose a session'}
            </div>
            {activeStep === 2 && (
              <motion.div layoutId="stepIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6800]" />
            )}
          </button>

          {/* Step 3 Indicator */}
          <button
            type="button"
            onClick={() => selectedDate && selectedCategory && setActiveStep(3)}
            disabled={!selectedDate || !selectedCategory}
            className={`group text-left p-2.5 sm:p-5 border transition-all duration-300 relative ${
              (!selectedDate || !selectedCategory) ? 'flex-1 cursor-not-allowed opacity-40 border-white/10 bg-[#000000]' :
              activeStep === 3
                ? 'flex-[1.8] sm:flex-1 border-white bg-[#000000] text-[#FF6800] ring-1 ring-[#FF6800]'
                : visitorName
                ? 'flex-1 border-[#FF6800]/40 bg-[#000000]/60 text-white hover:border-[#FF6800]'
                : 'flex-1 border-white/20 bg-[#000000]/30 text-white/50 hover:border-white/50'
            }`}
          >
            <div className="flex justify-between items-center mb-0.5 sm:mb-1">
              <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-bold text-[#FF6800] whitespace-nowrap">
                03. DETAILS
              </span>
              {visitorName && (
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FF6800]" />
              )}
            </div>
            <div className={`font-serif text-xs sm:text-base text-white font-bold ${
              activeStep === 3 ? 'whitespace-nowrap sm:truncate' : 'truncate'
            }`}>
              {visitorName ? visitorName : 'Your details'}
            </div>
            {activeStep === 3 && (
              <motion.div layoutId="stepIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6800]" />
            )}
          </button>

        </div>

        {/* Global Error Banner if needed */}
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-red-950/90 border border-red-500 text-red-200 font-sans text-xs uppercase tracking-widest flex items-center justify-between font-bold"
          >
            <span>{errorMessage}</span>
            <button onClick={() => setErrorMessage('')} className="text-white hover:text-red-400">✕</button>
          </motion.div>
        )}

        {/* MAIN PROGRESSIVE VIEW CONTAINER */}
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <div key="form-container">
              
              {/* STEP 1: ELEGANT INTEGRATED AVAILABILITY CALENDAR */}
              {activeStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  
                  {/* Left Column: Studio Guidance */}
                  <div className="hidden lg:flex col-span-1 lg:col-span-5 border border-white/20 bg-[#000000] p-6 sm:p-8 flex-col justify-between h-full">
                    <div>
                      <div className="font-sans text-[10px] text-[#FF6800] uppercase tracking-[0.25em] font-bold mb-2 flex items-center gap-2">
                        <CalendarIcon className="w-3.5 h-3.5 stroke-[2]" />
                        <span>AVAILABLE DATES</span>
                      </div>

                      <h3 className="font-serif text-3xl sm:text-4xl text-white font-black uppercase tracking-tight mb-4">
                        AVAILABLE <br />
                        <span className="font-serif italic font-light text-[#FF6800]">DATES</span>
                      </h3>

                      <div className="space-y-3 pt-4 border-t border-white/10 font-sans text-xs text-neutral-400">
                        <div className="flex items-center gap-3">
                          <span className="w-3 h-3 rounded-full bg-[#FF6800] border border-white" />
                          <span className="text-white font-bold">Orange Highlighted</span>
                          <span>— Available</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-3 h-3 rounded-full bg-neutral-800 border border-neutral-700 opacity-40" />
                          <span className="text-neutral-500 line-through">Muted Weekday</span>
                          <span>— Unavailable</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                      <Logo variant="orange" size="sm" />
                      <span className="font-sans text-[10px] text-white/60 tracking-widest uppercase">
                        ANGELIQUE-MARI
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Custom Calendar Component */}
                  <div className="col-span-1 lg:col-span-7 border border-[#FF6800]/30 bg-[#000000] p-6 sm:p-8 relative shadow-2xl">
                    
                    {/* Month Nav Header */}
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#FF6800]/20">
                      <button
                        type="button"
                        onClick={handlePrevMonth}
                        className="p-2 border border-[#FF6800]/30 text-[#FF6800] hover:text-white hover:border-white transition-all flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-widest"
                        aria-label="Previous Month"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">PREV</span>
                      </button>

                      <div className="text-center">
                        <span className="font-serif text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wider block">
                          {MONTH_NAMES[currentMonth]}
                        </span>
                        <span className="font-sans text-[10px] text-[#FF6800] uppercase tracking-[0.3em] font-bold">
                          {currentYear} • BOOKING CALENDAR
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={handleNextMonth}
                        className="p-2 border border-[#FF6800]/30 text-[#FF6800] hover:text-white hover:border-white transition-all flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-widest"
                        aria-label="Next Month"
                      >
                        <span className="hidden sm:inline">NEXT</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Weekday Labels Grid */}
                    <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-3 text-center">
                      {WEEKDAY_NAMES.map((w, idx) => {
                        const isWeekendHeader = idx === 5 || idx === 6;
                        return (
                          <div
                            key={w}
                            className={`font-sans text-[10px] sm:text-xs tracking-widest uppercase py-1 font-bold ${
                              isWeekendHeader ? 'text-[#FF6800]' : 'text-neutral-600'
                            }`}
                          >
                            {w}
                          </div>
                        );
                      })}
                    </div>

                    {/* Calendar Days Grid */}
                    <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                      {calendarDays.map((day, idx) => {
                        if (!day) {
                          return <div key={`empty-${idx}`} className="aspect-square bg-transparent" />;
                        }

                        const isSelected = selectedDate?.fullDateStr === day.fullDateStr;

                        if (!day.isAvailable) {
                          return (
                            <div
                              key={day.fullDateStr}
                              className="aspect-square border border-neutral-900 bg-neutral-950/40 p-1 sm:p-2 flex flex-col justify-between items-center opacity-30 cursor-not-allowed select-none"
                              aria-disabled="true"
                            >
                              <span className="font-sans text-xs sm:text-sm text-neutral-600 line-through">
                                {day.dateNumber}
                              </span>
                              <span className="font-sans text-[8px] text-neutral-700 tracking-tighter uppercase hidden sm:inline">
                                OFF
                              </span>
                            </div>
                          );
                        }

                        return (
                          <button
                            key={day.fullDateStr}
                            type="button"
                            onClick={() => handleDateSelect(day)}
                            className={`group aspect-square p-1 sm:p-2 flex flex-col justify-between items-center transition-all duration-300 relative cursor-pointer ${
                              isSelected
                                ? 'border-2 border-white bg-[#FF6800] text-black font-black scale-105 shadow-[0_0_20px_rgba(255,104,0,0.6)] z-10'
                                : 'border border-[#FF6800]/40 bg-[#000000] text-[#FF6800] hover:border-white hover:bg-[#FF6800]/10 hover:scale-[1.03]'
                            }`}
                          >
                            <span className={`font-sans text-xs sm:text-base font-bold ${isSelected ? 'text-black' : 'text-[#FF6800]'}`}>
                              {day.dateNumber}
                            </span>

                            <div className="flex items-center gap-1">
                              <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-black' : 'bg-[#FF6800] animate-pulse'}`} />
                              <span className={`font-sans text-[8px] uppercase tracking-tighter hidden sm:inline font-bold ${isSelected ? 'text-black' : 'text-white'}`}>
                                OPEN
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Bottom Action Row */}
                    <div className="mt-8 pt-4 border-t border-[#FF6800]/20 flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div className="font-sans text-xs text-[#FF6800]">
                        {selectedDate ? (
                          <span className="text-white font-bold">
                            SELECTED: <span className="text-[#FF6800]">{selectedDate.dayOfWeekName}, {selectedDate.displayDateStr}</span>
                          </span>
                        ) : (
                          <span className="text-neutral-400">Choose a date to continue.</span>
                        )}
                      </div>

                      <button
                        type="button"
                        disabled={!selectedDate}
                        onClick={() => setActiveStep(2)}
                        className={`px-6 py-3 font-sans text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all ${
                          selectedDate
                            ? 'bg-[#FF6800] text-black border border-[#FF6800] hover:bg-white hover:text-black cursor-pointer'
                            : 'bg-neutral-900 text-neutral-600 border border-neutral-800 cursor-not-allowed'
                        }`}
                      >
                        <span>CONTINUE →</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                </motion.div>
              )}

              {/* STEP 2: REFINED SESSION CATEGORY SELECTOR */}
              {activeStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end pb-4 border-b border-[#FF6800]/20 gap-2">
                    <div>
                      <span className="font-sans text-[10px] text-[#FF6800] uppercase tracking-[0.25em] font-bold block mb-1">
                        STEP 02 OF 03 // CHOOSE A SESSION
                      </span>
                      <h3 className="font-serif text-3xl sm:text-5xl font-black uppercase text-white">
                        CHOOSE A <span className="font-serif italic font-light text-[#FF6800]">SESSION</span>
                      </h3>
                    </div>
                    
                    <span className="font-sans text-xs text-neutral-400">
                      Chosen Date: <strong className="text-white font-bold">{selectedDate?.displayDateStr}</strong>
                    </span>
                  </div>

                  {/* Editorial Category Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
                    {SESSION_CATEGORIES.map((cat) => {
                      const isSelected = selectedCategory?.id === cat.id;

                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => handleCategorySelect(cat)}
                          className={`group text-left p-3 sm:p-5 bg-[#000000] border transition-all duration-300 relative flex flex-col justify-between cursor-pointer ${
                            isSelected
                              ? 'border-2 border-white ring-2 ring-[#FF6800] bg-neutral-950 scale-[1.01] sm:scale-[1.02] shadow-[0_10px_30px_rgba(255,104,0,0.25)]'
                              : 'border-white/20 hover:border-[#FF6800] hover:bg-neutral-950/80'
                          }`}
                        >
                          {/* Image Frame with White Matting (#FFFFFF) */}
                          <div className="relative aspect-[21/9] sm:aspect-[16/10] w-full overflow-hidden bg-white p-0.5 sm:p-1 mb-2.5 sm:mb-4 border border-white">
                            <div className="relative w-full h-full overflow-hidden bg-black">
                              <img
                                src={cat.image}
                                alt={cat.title}
                                referrerPolicy="no-referrer"
                                className={`w-full h-full object-cover transition-all duration-700 ${
                                  isSelected ? 'scale-105 contrast-110 grayscale-0' : 'grayscale contrast-120 group-hover:scale-105 group-hover:grayscale-0'
                                }`}
                              />
                              
                              <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-black/90 px-1.5 sm:px-2 py-0.5 border border-[#FF6800]/40 font-sans text-[8px] sm:text-[9px] text-[#FF6800] uppercase tracking-widest font-bold">
                                {cat.code}
                              </div>

                              {isSelected && (
                                <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 bg-[#FF6800] text-black p-0.5 sm:p-1">
                                  <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 stroke-[3]" />
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Category Title & Subtitle */}
                          <div>
                            <div className="flex items-center justify-between">
                              <h4 className={`font-serif text-lg sm:text-2xl font-bold uppercase tracking-tight transition-colors ${
                                isSelected ? 'text-white' : 'text-white group-hover:text-[#FF6800]'
                              }`}>
                                {cat.title}
                              </h4>
                              {isSelected && (
                                <span className="font-sans text-[9px] sm:text-[10px] bg-[#FF6800] text-black px-1.5 sm:px-2 py-0.5 font-bold uppercase tracking-wider">
                                  SELECTED
                                </span>
                              )}
                            </div>

                            <div className="font-sans text-[10px] text-[#FF6800] uppercase tracking-widest font-bold hidden sm:block mt-1">
                              {cat.subtitle}
                            </div>
                          </div>

                          {/* Bottom Indicator */}
                          <div className="mt-2.5 pt-2 sm:mt-4 sm:pt-3 border-t border-white/10 flex justify-between items-center font-sans text-[9px] sm:text-[10px] text-neutral-500 uppercase tracking-widest">
                            <span className="group-hover:text-[#FF6800] transition-colors">
                              <span className="sm:hidden">[ TAP TO SELECT ]</span>
                              <span className="hidden sm:inline">[ CLICK TO SELECT ]</span>
                            </span>
                            <ArrowUpRight className={`w-3 sm:w-3.5 h-3 sm:h-3.5 transition-transform ${isSelected ? 'text-[#FF6800] translate-x-0.5 -translate-y-0.5' : 'group-hover:text-white'}`} />
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="pt-6 border-t border-[#FF6800]/20 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setActiveStep(1)}
                      className="px-6 py-3 border border-white/30 text-white font-sans text-xs uppercase tracking-widest font-bold hover:border-white hover:bg-white hover:text-black transition-all"
                    >
                      ← BACK
                    </button>

                    <button
                      type="button"
                      disabled={!selectedCategory}
                      onClick={() => setActiveStep(3)}
                      className={`px-6 py-3 font-sans text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all ${
                        selectedCategory
                          ? 'bg-[#FF6800] text-black border border-[#FF6800] hover:bg-white hover:text-black cursor-pointer'
                          : 'bg-neutral-900 text-neutral-600 border border-neutral-800 cursor-not-allowed'
                      }`}
                    >
                      <span>CONTINUE →</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                </motion.div>
              )}

              {/* STEP 3: DETAILS & CONCEPT BRIEF */}
              {activeStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  
                  {/* Summary Preview Box */}
                  <div className="col-span-1 lg:col-span-4 border border-[#FF6800]/40 bg-[#000000] p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="font-sans text-[10px] text-[#FF6800] uppercase tracking-[0.25em] font-bold mb-4 pb-2 border-b border-[#FF6800]/20">
                        // BOOKING SUMMARY
                      </div>

                      {/* Date Badge */}
                      <div className="mb-6">
                        <span className="font-sans text-[9px] text-neutral-400 uppercase tracking-widest block mb-1">
                          SELECTED DATE
                        </span>
                        <div className="font-serif text-2xl text-white font-bold uppercase">
                          {selectedDate?.displayDateStr}
                        </div>
                        <span className="font-sans text-[10px] text-[#FF6800] uppercase tracking-widest font-bold">
                          {selectedDate?.dayOfWeekName}
                        </span>
                      </div>

                      {/* Category Badge */}
                      <div className="mb-6">
                        <span className="font-sans text-[9px] text-neutral-400 uppercase tracking-widest block mb-1">
                          SHOOT CATEGORY
                        </span>
                        <div className="font-serif text-2xl text-white font-bold uppercase">
                          {selectedCategory?.title}
                        </div>
                        <span className="font-sans text-[10px] text-[#FF6800] uppercase tracking-widest font-bold">
                          {selectedCategory?.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/10 flex justify-end items-center">
                      <span className="w-2 h-2 rounded-full bg-neutral-600 inline-block" />
                    </div>
                  </div>

                  {/* Form Input Fields */}
                  <div className="col-span-1 lg:col-span-8 border border-[#FF6800]/30 bg-[#000000] p-6 sm:p-10 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      
                      <div className="pb-4 border-b border-[#FF6800]/20 flex justify-between items-end">
                        <div>
                          <span className="font-sans text-[10px] text-[#FF6800] uppercase tracking-[0.25em] font-bold block mb-1">
                            STEP 03 OF 03 // YOUR DETAILS
                          </span>
                          <h3 className="font-serif text-3xl sm:text-4xl font-black uppercase text-white">
                            YOUR <span className="font-serif italic font-light text-[#FF6800]">DETAILS</span>
                          </h3>
                        </div>
                        <span className="font-sans text-[10px] text-white/60 uppercase tracking-widest font-bold">
                          [ * REQUIRED ]
                        </span>
                      </div>

                      <div className="space-y-6">
                        
                        {/* 01. Full Name */}
                        <div className="flex flex-col">
                          <label htmlFor="visitorName" className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#FF6800] mb-2 font-bold">
                            01. FULL NAME *
                          </label>
                          <input
                            type="text"
                            id="visitorName"
                            required
                            value={visitorName}
                            onChange={(e) => setVisitorName(e.target.value)}
                            placeholder="Your name"
                            className="w-full bg-transparent border-b border-[#FF6800]/40 focus:border-[#FF6800] text-white placeholder-[#FF6800]/40 font-sans text-base py-2.5 focus:outline-none focus:ring-0 transition-colors duration-200"
                          />
                        </div>

                        {/* 02. Email Address */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="flex flex-col">
                            <label htmlFor="visitorEmail" className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#FF6800] mb-2 font-bold">
                              02. EMAIL ADDRESS *
                            </label>
                            <input
                              type="email"
                              id="visitorEmail"
                              required
                              value={visitorEmail}
                              onChange={(e) => setVisitorEmail(e.target.value)}
                              placeholder="Your email address"
                              className="w-full bg-transparent border-b border-[#FF6800]/40 focus:border-[#FF6800] text-white placeholder-[#FF6800]/40 font-sans text-base py-2.5 focus:outline-none focus:ring-0 transition-colors duration-200"
                            />
                          </div>

                          {/* 03. Phone / Instagram Handle */}
                          <div className="flex flex-col">
                            <label htmlFor="visitorPhone" className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#FF6800] mb-2 font-bold">
                              03. INSTAGRAM / PHONE
                            </label>
                            <input
                              type="text"
                              id="visitorPhone"
                              value={visitorPhone}
                              onChange={(e) => setVisitorPhone(e.target.value)}
                              placeholder="@handle or phone number"
                              className="w-full bg-transparent border-b border-[#FF6800]/40 focus:border-[#FF6800] text-white placeholder-[#FF6800]/40 font-sans text-base py-2.5 focus:outline-none focus:ring-0 transition-colors duration-200"
                            />
                          </div>
                        </div>

                        {/* 04. Notes & Vision */}
                        <div className="flex flex-col pt-2">
                          <label htmlFor="sessionNotes" className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#FF6800] mb-2 font-bold">
                            04. NOTES & VISION
                          </label>
                          <textarea
                            id="sessionNotes"
                            rows={3}
                            value={sessionNotes}
                            onChange={(e) => setSessionNotes(e.target.value)}
                            placeholder="Tell me about your session vision, location ideas, or notes..."
                            className="w-full bg-transparent border-b border-[#FF6800]/40 focus:border-[#FF6800] text-white placeholder-[#FF6800]/40 font-sans text-sm py-2.5 focus:outline-none focus:ring-0 transition-colors duration-200 resize-none"
                          />
                        </div>

                      </div>

                      {/* Submission Actions */}
                      <div className="pt-6 border-t border-[#FF6800]/20 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setActiveStep(2)}
                          className="px-6 py-3 border border-white/30 text-white font-sans text-xs uppercase tracking-widest font-bold hover:border-white hover:bg-white hover:text-black transition-all w-full sm:w-auto"
                        >
                          ← BACK
                        </button>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto border border-[#FF6800] bg-[#FF6800] text-black px-8 py-3.5 font-sans text-xs uppercase tracking-widest font-extrabold hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,104,0,0.4)]"
                        >
                          <span>{isSubmitting ? 'SENDING BOOKING...' : 'BOOK SESSION'}</span>
                          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                        </button>
                      </div>

                    </form>
                  </div>

                </motion.div>
              )}

            </div>
          ) : (
            /* CONFIRMATION CARD */
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto border-2 border-white bg-[#000000] p-8 sm:p-12 text-center relative shadow-2xl"
            >
              {/* Corner crosshairs */}
              <span className="absolute top-3 left-3 text-xs font-sans text-[#FF6800]">+</span>
              <span className="absolute top-3 right-3 text-xs font-sans text-[#FF6800]">+</span>
              <span className="absolute bottom-3 left-3 text-xs font-sans text-[#FF6800]">+</span>
              <span className="absolute bottom-3 right-3 text-xs font-sans text-[#FF6800]">+</span>

              <div className="w-16 h-16 border border-[#FF6800] bg-[#FF6800]/10 flex items-center justify-center mx-auto mb-6 text-[#FF6800]">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <span className="font-sans text-xs text-[#FF6800] uppercase tracking-[0.3em] font-bold block mb-2">
                // BOOKING CONFIRMED
              </span>

              <h3 className="font-serif text-3xl sm:text-5xl font-black uppercase text-white mb-6">
                BOOKING <span className="font-serif italic font-light text-[#FF6800]">RECEIVED</span>
              </h3>

              <div className="p-6 border border-white/20 bg-neutral-950 max-w-xl mx-auto text-left space-y-4 mb-8">
                <div className="flex justify-between items-center pb-3 border-b border-white/10 font-sans text-xs">
                  <span className="text-neutral-400">NAME:</span>
                  <span className="text-white font-bold">{visitorName || 'Client'}</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-white/10 font-sans text-xs">
                  <span className="text-neutral-400">DATE:</span>
                  <span className="text-[#FF6800] font-bold">{selectedDate?.dayOfWeekName}, {selectedDate?.displayDateStr}</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-white/10 font-sans text-xs">
                  <span className="text-neutral-400">SESSION:</span>
                  <span className="text-white font-bold">{selectedCategory?.title}</span>
                </div>

                <p className="font-sans text-xs text-neutral-300 leading-relaxed pt-2">
                  Thank you, <strong className="text-white">{visitorName}</strong>. Your session request has been received. You will receive a direct response within 24 hours to confirm details.
                </p>
              </div>

              <button
                type="button"
                onClick={handleDone}
                className="border border-[#FF6800] bg-[#FF6800] text-black px-8 py-3.5 font-sans text-xs uppercase tracking-widest font-extrabold hover:bg-white hover:text-black transition-all cursor-pointer"
              >
                [ DONE ]
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
