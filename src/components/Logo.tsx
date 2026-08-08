import React from 'react';
import logoMain from '../assets/images/logo-main.png';

export interface LogoProps {
  /**
   * Logo mode:
   * - 'full': Complete formal lockup (ANGELIQUE-MARI + AM monogram + PHOTOGRAPHY)
   * - 'monogram': Monogram or logo brand mark
   */
  mode?: 'full' | 'monogram';
  /**
   * Theme variant of the logo
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
  // Responsive size defaults
  const sizeClasses = {
    sm: 'h-12 sm:h-14 md:h-16',
    md: 'h-20 sm:h-28 md:h-36 lg:h-40',
    lg: 'h-28 sm:h-36 md:h-44 lg:h-52',
    xl: 'h-36 sm:h-48 md:h-64',
    custom: ''
  };

  const selectedSize = size === 'custom' ? '' : (sizeClasses[size] || sizeClasses.md);

  return (
    <div className={`inline-flex items-center justify-center shrink-0 ${selectedSize} ${className}`}>
      <img
        src={logoMain}
        alt={ariaLabel}
        className="w-auto h-full max-h-full object-contain mix-blend-screen"
        referrerPolicy="no-referrer"
        onError={(e) => {
          // Fallback to public path if bundler import fails
          (e.currentTarget as HTMLImageElement).src = '/assets/logo-main.png';
        }}
      />
    </div>
  );
}

