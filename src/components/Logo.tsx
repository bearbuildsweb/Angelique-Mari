import React from 'react';

export interface LogoProps {
  /**
   * Logo mode:
   * - 'full': Complete formal lockup (ANGELIQUE-MARI + AM monogram + PHOTOGRAPHY)
   * - 'monogram': ONLY the iconic AM monogram (used in navigation header for high-impact luxury presence)
   */
  mode?: 'full' | 'monogram';
  /**
   * Theme variant of the logo:
   * - 'black': Pure black logo (for light backgrounds)
   * - 'white': Pure white logo (for dark backgrounds)
   * - 'orange': Brand accent orange #FF6800 (for deliberate brand moments)
   * - 'auto': Uses text-current to inherit color from parent element
   */
  variant?: 'black' | 'white' | 'orange' | 'auto';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  ariaLabel?: string;
}

export default function Logo({
  mode = 'full',
  variant = 'auto',
  className = '',
  size = 'md',
  ariaLabel = 'Angelique-Mari Photography Logo'
}: LogoProps) {
  // Determine color styling
  let colorClass = 'text-current';
  if (variant === 'black') colorClass = 'text-black';
  if (variant === 'white') colorClass = 'text-white';
  if (variant === 'orange') colorClass = 'text-[#FF6800]';

  // Responsive size defaults
  const sizeClasses = mode === 'monogram'
    ? {
        sm: 'h-8 sm:h-10',
        md: 'h-11 sm:h-13 md:h-15',
        lg: 'h-14 sm:h-16 md:h-20',
        xl: 'h-20 sm:h-24 md:h-32',
        custom: ''
      }
    : {
        sm: 'h-9 sm:h-10',
        md: 'h-12 sm:h-14',
        lg: 'h-16 sm:h-20 md:h-24',
        xl: 'h-24 sm:h-32 md:h-40',
        custom: ''
      };

  const selectedSize = sizeClasses[size] || sizeClasses.md;

  if (mode === 'monogram') {
    return (
      <div className={`inline-flex items-center justify-center shrink-0 ${selectedSize} ${className}`}>
        <svg
          viewBox="60 115 390 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-auto h-full max-w-full ${colorClass} transition-colors duration-300 ease-out`}
          aria-label={ariaLabel}
          role="img"
        >
          {/* MONOGRAM 'AM' WITH OFFICIAL CALLIGRAPHIC FLOURISH */}
          <g fill="currentColor">
            {/* 'A' Right Thick Stem and Bottom Serif */}
            <path d="M 198 125 L 244 282 L 266 282 L 266 294 L 204 294 L 204 282 L 222 282 L 186 155 Z" />

            {/* 'M' Left Vertical Stem & Serifs */}
            <path d="M 270 125 L 302 125 L 302 137 L 290 137 L 290 282 L 302 282 L 302 294 L 270 294 L 270 282 L 282 282 L 282 137 L 270 137 Z" />
            
            {/* 'M' Diagonals and Right Vertical Stem */}
            <path d="M 284 125 L 344 270 L 354 270 L 410 125 L 424 125 L 424 137 L 412 137 L 412 282 L 424 282 L 424 294 L 392 294 L 392 282 L 404 282 L 404 155 L 350 294 L 334 294 L 284 125 Z" />
          </g>

          {/* 'A' Calligraphic Flourish (Matches client image: sweeping teardrop loop & interior S-loop crossbar) */}
          <path
            d="M 196 125 C 168 160 138 196 118 232 C 96 262 90 286 116 292 C 146 298 174 274 188 244 C 168 214 130 208 116 228 C 104 245 116 264 135 264 C 160 264 182 238 232 238"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center justify-center shrink-0 ${selectedSize} ${className}`}>
      <svg
        viewBox="0 0 520 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-auto h-full max-w-full ${colorClass} transition-colors duration-300 ease-out`}
        aria-label={ariaLabel}
        role="img"
      >
        {/* TOP BRANDING: ANGELIQUE - MARI */}
        <text
          x="260"
          y="72"
          textAnchor="middle"
          fill="currentColor"
          style={{
            fontFamily: "'Cinzel', 'Playfair Display', 'Plus Jakarta Sans', serif",
            fontSize: '16px',
            fontWeight: 400,
            letterSpacing: '0.55em'
          }}
        >
          ANGELIQUE - MARI
        </text>

        {/* CENTER MONOGRAM: AM */}
        <g fill="currentColor">
          {/* 'A' Right Thick Stem and Bottom Serif */}
          <path d="M 198 125 L 244 282 L 266 282 L 266 294 L 204 294 L 204 282 L 222 282 L 186 155 Z" />

          {/* 'M' Left Vertical Stem & Serifs */}
          <path d="M 270 125 L 302 125 L 302 137 L 290 137 L 290 282 L 302 282 L 302 294 L 270 294 L 270 282 L 282 282 L 282 137 L 270 137 Z" />
          
          {/* 'M' Diagonals and Right Vertical Stem */}
          <path d="M 284 125 L 344 270 L 354 270 L 410 125 L 424 125 L 424 137 L 412 137 L 412 282 L 424 282 L 424 294 L 392 294 L 392 282 L 404 282 L 404 155 L 350 294 L 334 294 L 284 125 Z" />
        </g>

        {/* 'A' Calligraphic Flourish (Matches client image: sweeping teardrop loop & interior S-loop crossbar) */}
        <path
          d="M 196 125 C 168 160 138 196 118 232 C 96 262 90 286 116 292 C 146 298 174 274 188 244 C 168 214 130 208 116 228 C 104 245 116 264 135 264 C 160 264 182 238 232 238"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* BOTTOM SUBTITLE: PHOTOGRAPHY */}
        <text
          x="260"
          y="350"
          textAnchor="middle"
          fill="currentColor"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '15px',
            fontWeight: 400,
            letterSpacing: '0.65em'
          }}
        >
          PHOTOGRAPHY
        </text>
      </svg>
    </div>
  );
}
