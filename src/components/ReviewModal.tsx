import { useState, useEffect, useId, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Copy, CheckCheck, MessageSquare } from 'lucide-react';
import { EmotionalReactionKey, Testimonial } from '../types';

interface ReviewModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onReviewSubmitted?: (newTestimonial: Testimonial) => void;
}

interface EmotionalOption {
  key: EmotionalReactionKey;
  label: string;
  rating: number;
}

const EMOTIONAL_OPTIONS: EmotionalOption[] = [
  {
    key: 'okay',
    label: 'OKAY',
    rating: 3,
  },
  {
    key: 'impressed',
    label: 'IMPRESSED',
    rating: 4,
  },
  {
    key: 'blown-away',
    label: 'BLOWN AWAY',
    rating: 5,
  }
];

/* Refined, Elegant Minimalist Reaction Line Art */
function EmotionIcon({
  reaction,
  selected,
  className = "w-10 h-10"
}: {
  reaction: EmotionalReactionKey;
  selected: boolean;
  className?: string;
}) {
  const activeColor = selected ? "#FF6800" : "#737373";

  switch (reaction) {
    case 'okay':
    case 'satisfied':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <circle cx="24" cy="24" r="21" fill="#0a0a0a" stroke={activeColor} strokeWidth="1.5" />
          {/* Subtle serene eyes */}
          <circle cx="18" cy="22" r="1.75" fill={activeColor} />
          <circle cx="30" cy="22" r="1.75" fill={activeColor} />
          {/* Poised, serene minimal mouth */}
          <path d="M19 31 C22 31 26 31 29 31" fill="none" stroke={activeColor} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'impressed':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <circle cx="24" cy="24" r="21" fill="#0a0a0a" stroke={activeColor} strokeWidth="1.5" />
          {/* Graceful smiling crescent eyes */}
          <path d="M15 22 Q18 18.5 21 22" fill="none" stroke={activeColor} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M27 22 Q30 18.5 33 22" fill="none" stroke={activeColor} strokeWidth="1.5" strokeLinecap="round" />
          {/* Elegant warm crescent smile */}
          <path d="M17 29 Q24 35 31 29" fill="none" stroke={activeColor} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'blown-away':
    default:
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <circle cx="24" cy="24" r="21" fill="#0a0a0a" stroke={activeColor} strokeWidth="1.5" />
          {/* Luminous eyes */}
          <circle cx="17.5" cy="21.5" r="2" fill={activeColor} />
          <circle cx="30.5" cy="21.5" r="2" fill={activeColor} />
          {/* Delicate haute-couture sparkle stars at temples */}
          <path d="M11 13 Q11 15 9.5 15 Q11 15 11 17 Q11 15 12.5 15 Q11 15 11 13 Z" fill={activeColor} />
          <path d="M37 13 Q37 15 35.5 15 Q37 15 37 17 Q37 15 38.5 15 Q37 15 37 13 Z" fill={activeColor} />
          {/* Radiant, elegant open smile curve */}
          <path d="M16 27.5 Q24 37 32 27.5" fill="none" stroke={activeColor} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
}

const DEFAULT_REVIEWS_SHEET_URL = 'https://script.google.com/macros/s/AKfycbxpYscWeC2VOYvio6-W3hyJHCi0_ALtx31kvpyZXo1AuOwmtLfRwv2RxlsZOU3GV5lPow/exec';

export default function ReviewModal({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  onReviewSubmitted
}: ReviewModalProps) {
  // Support hash routing: checks #review (with fallback to #review-freelancer)
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  // Form states: Default to 'impressed'
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionalReactionKey>('impressed');
  const [authorName, setAuthorName] = useState('');
  const [roleAndCompany, setRoleAndCompany] = useState('');
  const [reviewText, setReviewText] = useState('');
  
  // UI states
  const [errors, setErrors] = useState<{ author?: string; role?: string; text?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const authorInputId = useId();
  const roleInputId = useId();
  const reviewTextareaId = useId();

  // Hash route listener: #review (with fallback to #review-freelancer)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#review' || hash === '#review-freelancer' || hash === '#write-review' || hash === '#leave-review') {
        setInternalIsOpen(true);
      } else if (hash === '' || hash === '#portfolio' || hash === '#about' || hash === '#booking') {
        if (controlledIsOpen === undefined) {
          setInternalIsOpen(false);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [controlledIsOpen]);

  // Lock scroll when open & handle Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }

    const currentHash = window.location.hash.toLowerCase();
    if (currentHash === '#review' || currentHash === '#review-freelancer' || currentHash === '#write-review' || currentHash === '#leave-review') {
      history.pushState(null, '', window.location.pathname + window.location.search);
    }

    if (isSuccess) {
      setIsSuccess(false);
      setAuthorName('');
      setRoleAndCompany('');
      setReviewText('');
      setSelectedEmotion('impressed');
    }
  };

  const handleCopyLink = () => {
    const directLink = `${window.location.origin}${window.location.pathname}#review`;
    navigator.clipboard.writeText(directLink).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    });
  };

  const validate = () => {
    const newErrors: { author?: string; role?: string; text?: string } = {};
    if (!authorName.trim()) {
      newErrors.author = 'Client name is required';
    }
    if (!roleAndCompany.trim()) {
      newErrors.role = 'Company or brand is required';
    }
    if (!reviewText.trim()) {
      newErrors.text = 'Please provide details on your experience';
    } else if (reviewText.trim().length < 15) {
      newErrors.text = 'Review should be at least 15 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const emotionConfig = EMOTIONAL_OPTIONS.find((o) => o.key === selectedEmotion) || EMOTIONAL_OPTIONS[1];

    let role = 'Client';
    let company = roleAndCompany.trim() || 'Independent';

    if (roleAndCompany.includes(',')) {
      const parts = roleAndCompany.split(',');
      role = parts[0].trim();
      company = parts.slice(1).join(',').trim();
    }

    const newTestimonial: Testimonial = {
      id: `review-${Date.now()}`,
      author: authorName.trim(),
      role: role,
      company: company,
      quote: reviewText.trim(),
      image: '',
      year: new Date().getFullYear().toString(),
      rating: emotionConfig.rating,
      emotionalReaction: selectedEmotion,
      emotionalLabel: emotionConfig.label,
      date: 'Just now'
    };

    setTimeout(() => {
      try {
        const stored = localStorage.getItem('am_custom_testimonials');
        const list: Testimonial[] = stored ? JSON.parse(stored) : [];
        list.unshift(newTestimonial);
        localStorage.setItem('am_custom_testimonials', JSON.stringify(list));
      } catch (err) {
        console.error('Failed to store testimonial locally', err);
      }

      // Sync to Google Sheet
      const sheetUrl = (import.meta.env.VITE_REVIEWS_SHEET_URL || DEFAULT_REVIEWS_SHEET_URL)?.trim();
      if (sheetUrl) {
        try {
          const payload = {
            clientName: authorName.trim(),
            brandOrCompany: roleAndCompany.trim(),
            rating: `${emotionConfig.rating} / 5 (${emotionConfig.label})`,
            reviewText: reviewText.trim(),
            // Common aliases so any script configuration handles the fields properly
            author: authorName.trim(),
            roleAndCompany: roleAndCompany.trim(),
            quote: reviewText.trim(),
          };

          fetch(sheetUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(payload),
          })
            .then(() => {
              console.log('Review successfully dispatched to Google Sheet webhook.');
            })
            .catch((err) => console.error('Sheet sync network error:', err));
        } catch (err) {
          console.error('Failed to post review to Google Sheet', err);
        }
      }

      onReviewSubmitted?.(newTestimonial);
      window.dispatchEvent(new CustomEvent('new-testimonial-added', { detail: newTestimonial }));

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop with brutalist grain/blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-freelancer-modal"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#0a0a0a] border-2 border-[#FF6800]/50 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_30px_rgba(255,104,0,0.15)] text-[#FF6800] my-auto overflow-hidden z-10"
          >
            {/* Museum matting top accent strip */}
            <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[#FF6800] to-transparent" />

            {/* Clean Modal Top Bar */}
            <div className="px-6 sm:px-8 py-3.5 border-b border-[#FF6800]/20 flex items-center justify-end gap-2 bg-black/60">
              <button
                type="button"
                onClick={handleCopyLink}
                title="Copy direct link to this review modal"
                className="p-2 sm:px-3 sm:py-1.5 rounded-none border border-neutral-800 hover:border-[#FF6800] bg-neutral-900/80 text-neutral-300 hover:text-[#FF6800] transition-colors flex items-center gap-1.5 text-xs font-mono cursor-pointer"
              >
                {copiedLink ? (
                  <>
                    <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="hidden sm:inline text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Share Link</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close modal"
                className="w-9 h-9 border border-neutral-800 hover:border-[#FF6800] bg-neutral-900/80 text-neutral-400 hover:text-white flex items-center justify-center transition-all cursor-pointer group"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Success Celebration View */}
            {isSuccess ? (
              <div className="p-10 sm:p-14 flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="w-20 h-20 rounded-full border-2 border-[#FF6800] bg-[#FF6800]/15 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,104,0,0.4)] text-3xl select-none"
                >
                  🥂
                </motion.div>
                <h3 className="font-serif text-3xl font-bold uppercase text-white mb-2">
                  THE WORD IS OUT.
                </h3>
                <p className="text-sm font-sans text-neutral-300 max-w-md leading-relaxed mb-6">
                  Thank you, <span className="text-[#FF6800] font-medium">{authorName}</span>. Your review has been captured.
                </p>
                <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 bg-black/80 border border-emerald-500/30 px-4 py-2 mb-8">
                  <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ARCHIVED WITH CARE</span>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close"
                  className="w-11 h-11 rounded-full border border-neutral-600 hover:border-[#FF6800] bg-transparent text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer group hover:scale-105"
                >
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            ) : (
              /* Main Form View */
              <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 space-y-6 max-h-[75vh] overflow-y-auto">
                {/* Rating (Limited to 3 emoji cards: OKAY, IMPRESSED, BLOWN AWAY) */}
                <div>
                  <div className="mb-3">
                    <label className="font-mono text-xs uppercase tracking-wider text-[#FF6800] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#FF6800] inline-block" />
                      RATING *
                    </label>
                  </div>

                  {/* 3 Emoji Cards: OKAY, IMPRESSED, BLOWN AWAY */}
                  <div className="grid grid-cols-3 gap-3">
                    {EMOTIONAL_OPTIONS.map((item) => {
                      const isSelected = selectedEmotion === item.key;
                      return (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => setSelectedEmotion(item.key)}
                          className={`group relative flex flex-col items-center justify-between p-4 border transition-all duration-200 cursor-pointer text-center select-none ${
                            isSelected
                              ? 'bg-neutral-950 border-[#FF6800] shadow-[0_0_20px_rgba(255,104,0,0.35)] scale-[1.02]'
                              : 'bg-black/60 border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900/60'
                          }`}
                        >
                          {isSelected && (
                            <>
                              <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-[#FF6800]" />
                              <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-[#FF6800]" />
                              <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-[#FF6800]" />
                              <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-[#FF6800]" />
                            </>
                          )}

                          {/* Face Icon */}
                          <div className="my-1 group-hover:scale-110 transition-transform duration-200">
                            <EmotionIcon reaction={item.key} selected={isSelected} />
                          </div>

                          {/* Label Only (Subtext removed) */}
                          <div className="mt-2.5 w-full">
                            <span
                              className={`block font-serif text-xs sm:text-sm font-bold tracking-tight uppercase leading-tight ${
                                isSelected ? 'text-white' : 'text-neutral-300'
                              }`}
                            >
                              {item.label}
                            </span>
                          </div>

                          {/* Star Score Indicator Kept at Bottom */}
                          <div className="mt-3 flex items-center justify-center gap-0.5">
                            {[...Array(5)].map((_, idx) => (
                              <Star
                                key={idx}
                                className={`w-3 h-3 ${
                                  idx < item.rating
                                    ? isSelected
                                      ? 'fill-[#FF6800] text-[#FF6800]'
                                      : 'fill-neutral-500 text-neutral-500'
                                    : 'text-neutral-800'
                                }`}
                              />
                            ))}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Client Details (Name & Company / Brand) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={authorInputId} className="font-mono text-xs uppercase tracking-wider text-[#FF6800] flex items-center gap-2 mb-1.5">
                      <span className="w-1.5 h-1.5 bg-[#FF6800] inline-block" />
                      YOUR NAME *
                    </label>
                    <input
                      id={authorInputId}
                      type="text"
                      value={authorName}
                      onChange={(e) => {
                        setAuthorName(e.target.value);
                        if (errors.author) setErrors((prev) => ({ ...prev, author: undefined }));
                      }}
                      className={`w-full bg-black border ${
                        errors.author ? 'border-red-500' : 'border-neutral-800'
                      } focus:border-[#FF6800] text-white text-sm px-3.5 py-2.5 font-sans rounded-none outline-none transition-colors`}
                    />
                    {errors.author && <p className="text-red-400 text-xs mt-1 font-mono">{errors.author}</p>}
                  </div>

                  <div>
                    <label htmlFor={roleInputId} className="font-mono text-xs uppercase tracking-wider text-[#FF6800] flex items-center gap-2 mb-1.5">
                      <span className="w-1.5 h-1.5 bg-[#FF6800] inline-block" />
                      COMPANY / BRAND *
                    </label>
                    <input
                      id={roleInputId}
                      type="text"
                      value={roleAndCompany}
                      onChange={(e) => {
                        setRoleAndCompany(e.target.value);
                        if (errors.role) setErrors((prev) => ({ ...prev, role: undefined }));
                      }}
                      className={`w-full bg-black border ${
                        errors.role ? 'border-red-500' : 'border-neutral-800'
                      } focus:border-[#FF6800] text-white text-sm px-3.5 py-2.5 font-sans rounded-none outline-none transition-colors`}
                    />
                    {errors.role && <p className="text-red-400 text-xs mt-1 font-mono">{errors.role}</p>}
                  </div>
                </div>

                {/* Review Textarea */}
                <div>
                  <div className="mb-1.5">
                    <label htmlFor={reviewTextareaId} className="font-mono text-xs uppercase tracking-wider text-[#FF6800] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#FF6800] inline-block" />
                      YOUR EXPERIENCE *
                    </label>
                  </div>
                  <textarea
                    id={reviewTextareaId}
                    rows={4}
                    maxLength={500}
                    value={reviewText}
                    onChange={(e) => {
                      setReviewText(e.target.value);
                      if (errors.text) setErrors((prev) => ({ ...prev, text: undefined }));
                    }}
                    placeholder="Describe working with Angelique-Mari"
                    className={`w-full bg-black border ${
                      errors.text ? 'border-red-500' : 'border-neutral-800'
                    } focus:border-[#FF6800] text-neutral-100 text-sm p-3.5 font-sans rounded-none outline-none transition-colors leading-relaxed`}
                  />
                  <div className="flex items-center justify-between mt-1.5">
                    <div>
                      {errors.text && <p className="text-red-400 text-xs font-mono">{errors.text}</p>}
                    </div>
                    <span className="text-xs font-mono text-neutral-500 ml-auto">
                      {reviewText.length} / 500 characters
                    </span>
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-neutral-800 flex items-center justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF6800] hover:bg-white text-black font-sans text-xs uppercase tracking-[0.2em] font-extrabold px-8 py-3.5 border border-[#FF6800] hover:border-white transition-all shadow-[0_4px_20px_rgba(255,104,0,0.3)] active:scale-[0.98] cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>SUBMITTING...</span>
                    ) : (
                      <>
                        <MessageSquare className="w-4 h-4 fill-current" />
                        <span>SUBMIT REVIEW</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
