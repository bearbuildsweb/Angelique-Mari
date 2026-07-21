import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function BackgroundParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate organic, randomized floating particles
    const items: Particle[] = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage x
      y: Math.random() * 100, // percentage y
      size: Math.random() * 4 + 2, // 2px to 6px
      duration: Math.random() * 15 + 15, // 15s to 30s
      delay: Math.random() * -20 // start immediately at random state
    }));
    setParticles(items);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Drifting Cinematic Light Leaks */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-amber-500/5 blur-[120px] light-leak-1" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-red-500/3 blur-[150px] light-leak-2" />
      <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-warm-400/5 blur-[120px] light-leak-1" />

      {/* Floating Light Dust Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-warm-500/15"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
          }}
          initial={{ y: '105vh', opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 0.7, 0.7, 0],
            x: [`${p.x}%`, `${p.x + (Math.random() * 10 - 5)}%`, `${p.x}%`]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
