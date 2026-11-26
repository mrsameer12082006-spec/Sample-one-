import React, { useEffect, useRef } from 'react';
import './AuthBackground.css';
import { initAuthBackground } from './authBackground';

// 16 thin-outline floating SVG icons (ticket, music note, sparkle, mic, heart)
const FLOATING_ICONS = [
  { id: 1, type: 'ticket', left: '6%', size: 28, color: '#ff2d8f', opacity: 0.28, duration: 25, delay: -4, anim: 'floatUp1', topFixed: '15%' },
  { id: 2, type: 'sparkle', left: '13%', size: 22, color: '#ffd873', opacity: 0.35, duration: 32, delay: -18, anim: 'floatUp2', topFixed: '40%' },
  { id: 3, type: 'music', left: '20%', size: 36, color: '#a855f7', opacity: 0.22, duration: 22, delay: -9, anim: 'floatUp3', topFixed: '68%' },
  { id: 4, type: 'mic', left: '27%', size: 26, color: '#f472b6', opacity: 0.25, duration: 36, delay: -27, anim: 'floatUp4', topFixed: '22%' },
  { id: 5, type: 'heart', left: '35%', size: 32, color: '#ff2d8f', opacity: 0.30, duration: 28, delay: -12, anim: 'floatUp1', topFixed: '52%' },
  { id: 6, type: 'sparkle', left: '42%', size: 44, color: '#ffd873', opacity: 0.20, duration: 38, delay: -31, anim: 'floatUp2', topFixed: '80%' },
  { id: 7, type: 'ticket', left: '49%', size: 20, color: '#a855f7', opacity: 0.32, duration: 24, delay: -15, anim: 'floatUp3', topFixed: '32%' },
  { id: 8, type: 'music', left: '56%', size: 40, color: '#ff2d8f', opacity: 0.18, duration: 30, delay: -6, anim: 'floatUp4', topFixed: '62%' },
  { id: 9, type: 'heart', left: '63%', size: 24, color: '#f472b6', opacity: 0.34, duration: 21, delay: -19, anim: 'floatUp1', topFixed: '18%' },
  { id: 10, type: 'mic', left: '70%', size: 38, color: '#a855f7', opacity: 0.22, duration: 34, delay: -24, anim: 'floatUp2', topFixed: '45%' },
  { id: 11, type: 'sparkle', left: '77%', size: 18, color: '#ffd873', opacity: 0.38, duration: 20, delay: -8, anim: 'floatUp3', topFixed: '74%' },
  { id: 12, type: 'ticket', left: '84%', size: 46, color: '#ff2d8f', opacity: 0.16, duration: 37, delay: -33, anim: 'floatUp4', topFixed: '28%' },
  { id: 13, type: 'music', left: '91%', size: 26, color: '#f472b6', opacity: 0.28, duration: 26, delay: -14, anim: 'floatUp1', topFixed: '58%' },
  { id: 14, type: 'heart', left: '10%', size: 34, color: '#a855f7', opacity: 0.24, duration: 31, delay: -22, anim: 'floatUp2', topFixed: '85%' },
  { id: 15, type: 'sparkle', left: '47%', size: 30, color: '#ffd873', opacity: 0.32, duration: 27, delay: -2, anim: 'floatUp3', topFixed: '12%' },
  { id: 16, type: 'mic', left: '88%', size: 24, color: '#ff2d8f', opacity: 0.26, duration: 35, delay: -17, anim: 'floatUp4', topFixed: '70%' },
];

function renderIconPath(type) {
  switch (type) {
    case 'ticket':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
          <path d="M13 5v2" />
          <path d="M13 17v2" />
          <path d="M13 11v2" />
        </svg>
      );
    case 'music':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );
    case 'sparkle':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
        </svg>
      );
    case 'mic':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" x2="12" y1="19" y2="22" />
        </svg>
      );
    case 'heart':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function AuthBackground() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const cleanup = initAuthBackground(rootRef.current);
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div ref={rootRef} className="auth-bg-root" aria-hidden="true">
      {/* LAYER 2: AURORA DRIFTING BLOBS */}
      <div className="auth-bg-aurora">
        <div className="auth-bg-blob auth-bg-blob-pink" />
        <div className="auth-bg-blob auth-bg-blob-violet" />
        <div className="auth-bg-blob auth-bg-blob-indigo" />
      </div>

      {/* LAYER 3: 5 SWEEPING LASER BEAMS */}
      <div className="auth-bg-lasers">
        <div className="auth-bg-beam auth-bg-beam-1" />
        <div className="auth-bg-beam auth-bg-beam-2" />
        <div className="auth-bg-beam auth-bg-beam-3" />
        <div className="auth-bg-beam auth-bg-beam-4" />
        <div className="auth-bg-beam auth-bg-beam-5" />
      </div>

      {/* LAYER 4: CANVAS (Starfield, Bokeh Orbs, Stardust, Shooting Star, Cursor Glow) */}
      <canvas className="auth-bg-canvas" />

      {/* LAYER 5: NEON STAGE PERSPECTIVE FLOOR GRID */}
      <div className="auth-bg-grid" />

      {/* LAYER 6: 16 FLOATING NEON ICONS */}
      <div className="auth-bg-icons">
        {FLOATING_ICONS.map((icon) => (
          <div
            key={icon.id}
            className="auth-bg-icon"
            style={{
              left: icon.left,
              width: `${icon.size}px`,
              height: `${icon.size}px`,
              color: icon.color,
              animation: `${icon.anim} ${icon.duration}s linear infinite`,
              animationDelay: `${icon.delay}s`,
              '--target-opacity': icon.opacity,
              '--reduced-top': icon.topFixed
            }}
          >
            {renderIconPath(icon.type)}
          </div>
        ))}
      </div>

      {/* LAYER 7: VIGNETTE & BOTTOM ATMOSPHERIC GLOW */}
      <div className="auth-bg-vignette" />
    </div>
  );
}
