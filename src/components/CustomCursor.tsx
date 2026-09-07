import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const dotInnerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ringInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on fine pointer / non-touch desktop environments
    const isTouch = 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      window.matchMedia('(pointer: coarse)').matches;

    if (isTouch) {
      return;
    }

    setIsVisible(true);
    document.documentElement.classList.add('custom-cursor-active');

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let isClicked = false;
    let isInside = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isInside) {
        isInside = true;
        ringX = mouseX;
        ringY = mouseY;
        updateVisibility(true);
      }

      // Pinpoint dot immediately updates with 0ms latency - strictly no CSS transition on position
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseDown = () => {
      isClicked = true;
      updateVisualState();
    };

    const onMouseUp = () => {
      isClicked = false;
      updateVisualState();
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], label, .cursor-pointer'
      );
      const newHovered = !!interactive;
      if (newHovered !== isHovered) {
        isHovered = newHovered;
        updateVisualState();
      }
    };

    const onMouseLeave = () => {
      isInside = false;
      updateVisibility(false);
    };

    const onMouseEnter = () => {
      isInside = true;
      updateVisibility(true);
    };

    const updateVisibility = (visible: boolean) => {
      const opacity = visible ? '1' : '0';
      if (dotRef.current) dotRef.current.style.opacity = opacity;
      if (ringRef.current) ringRef.current.style.opacity = opacity;
    };

    const updateVisualState = () => {
      if (dotInnerRef.current) {
        dotInnerRef.current.style.transform = isClicked 
          ? 'translate(-50%, -50%) scale(0.7)' 
          : isHovered 
          ? 'translate(-50%, -50%) scale(1.4)' 
          : 'translate(-50%, -50%) scale(1)';
      }

      if (ringInnerRef.current) {
        if (isClicked) {
          ringInnerRef.current.style.transform = 'translate(-50%, -50%) scale(0.85)';
          ringInnerRef.current.style.borderColor = '#FF6800';
          ringInnerRef.current.style.backgroundColor = 'rgba(255, 104, 0, 0.3)';
        } else if (isHovered) {
          ringInnerRef.current.style.transform = 'translate(-50%, -50%) scale(1.65)';
          ringInnerRef.current.style.borderColor = '#FF6800';
          ringInnerRef.current.style.backgroundColor = 'rgba(255, 104, 0, 0.15)';
        } else {
          ringInnerRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
          ringInnerRef.current.style.borderColor = 'rgba(255, 104, 0, 0.7)';
          ringInnerRef.current.style.backgroundColor = 'transparent';
        }
      }
    };

    // Fast, ultra-snappy RAF loop for follower ring (0.35 factor ensures immediate tracking without inertia lag)
    const animate = () => {
      const lerp = 0.35;
      ringX += (mouseX - ringX) * lerp;
      ringY += (mouseY - ringY) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden">
      {/* Outer responsive aura ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
        style={{ opacity: 0 }}
      >
        <div
          ref={ringInnerRef}
          className="w-8 h-8 rounded-full border border-[#FF6800]/70 pointer-events-none transition-[transform,background-color,border-color] duration-150 ease-out"
          style={{
            transform: 'translate(-50%, -50%) scale(1)',
            boxShadow: '0 0 12px rgba(255, 104, 0, 0.25)',
          }}
        />
      </div>

      {/* Immediate zero-latency center precision dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
        style={{ opacity: 0 }}
      >
        <div
          ref={dotInnerRef}
          className="w-1.5 h-1.5 rounded-full bg-[#FF6800] pointer-events-none transition-transform duration-100 ease-out"
          style={{
            transform: 'translate(-50%, -50%) scale(1)',
            boxShadow: '0 0 6px #FF6800',
          }}
        />
      </div>
    </div>
  );
}


