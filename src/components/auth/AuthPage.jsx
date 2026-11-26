import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { MEMBER_PROFILE } from '../../data/memberData';

/* ========================================================
   HIGH-FIDELITY VECTOR ILLUSTRATION OF VIP HOST & PORTAL
   (Matching exact Figma screenshot)
   ======================================================== */
function VipHostIllustration({ authMode = 'signup' }) {
  return (
    <div className="vip-host-illustration-container">
      <svg
        viewBox="0 0 570 540"
        className="vip-host-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Neon portal glow */}
          <filter id="neonDoorGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" result="blur1" />
            <feGaussianBlur stdDeviation="22" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gold metallic gradient for stanchions */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="35%" stopColor="#eab308" />
            <stop offset="70%" stopColor="#ca8a04" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>

          {/* Velvet rope gradient */}
          <linearGradient id="velvetRope" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9f1239" />
            <stop offset="25%" stopColor="#e11d48" />
            <stop offset="50%" stopColor="#f43f5e" />
            <stop offset="75%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#881337" />
          </linearGradient>

          {/* Door inside gradient */}
          <linearGradient id="doorBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e0938" />
            <stop offset="100%" stopColor="#0d041a" />
          </linearGradient>
        </defs>

        {/* ========================================================
            1. BACKGROUND AMBIENT ARCHES & STARS
            ======================================================== */}
        <circle cx="90" cy="140" r="1.5" fill="#ffffff" opacity="0.4" />
        <circle cx="430" cy="120" r="1.8" fill="#ec4899" opacity="0.6" />
        <circle cx="470" cy="220" r="1.2" fill="#ffffff" opacity="0.5" />
        <circle cx="70" cy="380" r="1.5" fill="#a855f7" opacity="0.5" />
        <circle cx="460" cy="390" r="2" fill="#ffffff" opacity="0.3" />

        {/* ========================================================
            2. GLOWING VIP ARCHED DOORWAY
            ======================================================== */}
        <g filter="url(#neonDoorGlow)">
          {/* Outer glowing neon arch border */}
          <path
            d="M 180 500 L 180 230 A 85 85 0 0 1 350 230 L 350 500"
            stroke="#c084fc"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
          />
        </g>

        {/* Arch interior */}
        <path
          d="M 183 500 L 183 232 A 82 82 0 0 1 347 232 L 347 500 Z"
          fill="url(#doorBg)"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="1.5"
        />

        {/* Double door center seam */}
        <line x1="265" y1="160" x2="265" y2="500" stroke="#2a124a" strokeWidth="2.5" />

        {/* Inner door panel accents */}
        <rect x="200" y="270" width="50" height="100" rx="4" stroke="#2d1350" strokeWidth="1.5" fill="none" />
        <rect x="280" y="270" width="50" height="100" rx="4" stroke="#2d1350" strokeWidth="1.5" fill="none" />
        <rect x="200" y="390" width="50" height="80" rx="4" stroke="#2d1350" strokeWidth="1.5" fill="none" />
        <rect x="280" y="390" width="50" height="80" rx="4" stroke="#2d1350" strokeWidth="1.5" fill="none" />

        {/* Gold vertical door handles */}
        <rect x="256" y="340" width="3.5" height="26" rx="1.5" fill="url(#goldGradient)" />
        <rect x="270" y="340" width="3.5" height="26" rx="1.5" fill="url(#goldGradient)" />

        {/* Arch top oval VIP crest */}
        <g>
          <ellipse cx="265" cy="180" rx="22" ry="12" fill="#140626" stroke="#c084fc" strokeWidth="1.5" />
          <text
            x="265"
            y="184"
            fill="#e2e8f0"
            fontSize="9"
            fontWeight="800"
            textAnchor="middle"
            letterSpacing="1.5"
          >
            VIP
          </text>
        </g>

        {/* ========================================================
            3. THE VIP HOST / BUTLER CHARACTER
            ======================================================== */}
        <g className="vip-host-character">
          {/* Body / Tuxedo Torso */}
          <path
            d="M 215 500 L 210 375 Q 212 335 240 330 L 265 330 L 290 330 Q 318 335 320 375 L 315 500 Z"
            fill="#121118"
          />

          {/* White dress shirt V-shape */}
          <path d="M 248 330 L 265 390 L 282 330 Z" fill="#ffffff" />

          {/* Black bowtie */}
          <path d="M 252 338 L 265 344 L 252 350 Z" fill="#1c1924" />
          <path d="M 278 338 L 265 344 L 278 350 Z" fill="#1c1924" />
          <circle cx="265" cy="344" r="3" fill="#09080c" />

          {/* Tuxedo lapels */}
          <path d="M 235 332 L 254 395 L 244 430 L 225 365 Z" fill="#1e1c24" stroke="#2d2a38" strokeWidth="1" />
          <path d="M 295 332 L 276 395 L 286 430 L 305 365 Z" fill="#1e1c24" stroke="#2d2a38" strokeWidth="1" />

          {/* Gold VIP Name Badge on chest */}
          <rect x="282" y="375" width="16" height="5" rx="1.5" fill="url(#goldGradient)" />

          {/* Suit buttons */}
          <circle cx="265" cy="415" r="2.5" fill="#f8fafc" opacity="0.9" />
          <circle cx="265" cy="445" r="2.5" fill="#f8fafc" opacity="0.9" />
          <circle cx="265" cy="475" r="2.5" fill="#f8fafc" opacity="0.9" />

          {/* White gloved hands resting in front */}
          <ellipse cx="230" cy="410" rx="9" ry="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <ellipse cx="300" cy="410" rx="9" ry="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />

          {/* Head & Neck */}
          <rect x="257" y="318" width="16" height="15" rx="2" fill="#c68a62" />

          {/* Face base */}
          <ellipse cx="265" cy="285" rx="28" ry="34" fill="#d9996e" />

          {/* Ears */}
          <circle cx="235" cy="285" r="7" fill="#c68a62" />
          <circle cx="295" cy="285" r="7" fill="#c68a62" />

          {/* Hair */}
          <path
            d="M 235 275 C 235 240 250 240 265 240 C 280 240 297 240 297 275 C 292 260 280 254 265 254 C 250 254 238 260 235 275 Z"
            fill="#121118"
          />
          {/* Hair volume/quiff top */}
          <path
            d="M 240 250 Q 255 235 275 238 Q 295 242 292 258 Q 280 248 262 248 Q 248 248 240 250 Z"
            fill="#1c1924"
          />

          {/* Dark sunglasses */}
          <g>
            {/* Bridge */}
            <rect x="258" y="276" width="14" height="3" fill="#09080c" />
            {/* Left lens */}
            <rect x="240" y="271" width="22" height="15" rx="4" fill="#09080c" />
            <path d="M 243 274 L 257 283" stroke="#c084fc" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
            {/* Right lens */}
            <rect x="268" y="271" width="22" height="15" rx="4" fill="#09080c" />
            <path d="M 271 274 L 285 283" stroke="#c084fc" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
          </g>

          {/* Mustache */}
          <path
            d="M 252 300 Q 265 304 278 300 Q 265 308 252 300 Z"
            fill="#121118"
          />

          {/* Warm smile & teeth */}
          <path
            d="M 254 306 Q 265 318 276 306 Z"
            fill="#121118"
          />
          <path
            d="M 256 307 Q 265 312 274 307 Z"
            fill="#ffffff"
          />
        </g>

        {/* ========================================================
            4. GOLD STANCHIONS & RED VELVET ROPE
            ======================================================== */}
        {/* Left Stanchion */}
        <g>
          {/* Base */}
          <ellipse cx="145" cy="495" rx="18" ry="6" fill="url(#goldGradient)" />
          {/* Shaft */}
          <rect x="142" y="380" width="6" height="115" rx="2" fill="url(#goldGradient)" />
          {/* Collar ring */}
          <rect x="139" y="385" width="12" height="4" rx="1.5" fill="url(#goldGradient)" />
          {/* Top ball finial */}
          <circle cx="145" cy="376" r="8" fill="url(#goldGradient)" />
        </g>

        {/* Right Stanchion */}
        <g>
          {/* Base */}
          <ellipse cx="385" cy="495" rx="18" ry="6" fill="url(#goldGradient)" />
          {/* Shaft */}
          <rect x="382" y="380" width="6" height="115" rx="2" fill="url(#goldGradient)" />
          {/* Collar ring */}
          <rect x="379" y="385" width="12" height="4" rx="1.5" fill="url(#goldGradient)" />
          {/* Top ball finial */}
          <circle cx="385" cy="376" r="8" fill="url(#goldGradient)" />
        </g>

        {/* Draped Red Velvet Rope hanging in front of the character */}
        <path
          d="M 145 385 Q 265 470 385 385"
          stroke="url(#velvetRope)"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
        />
        {/* Rope highlight shine */}
        <path
          d="M 145 383 Q 265 466 385 383"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* ========================================================
            5. VIP HOST SPEECH BUBBLE
            ======================================================== */}
        <g className="vip-speech-bubble-group">
          {/* Bubble tail pointing toward the host */}
          <path d="M 324 268 L 306 285 L 338 268 Z" fill="#160829" stroke="rgba(236, 72, 153, 0.35)" strokeWidth="1" />

          {/* Rounded bubble box with generous width */}
          <rect
            x="305"
            y="212"
            width="248"
            height="56"
            rx="13"
            fill="#160829"
            stroke="rgba(236, 72, 153, 0.35)"
            strokeWidth="1"
            filter="drop-shadow(0 4px 14px rgba(0, 0, 0, 0.5))"
          />

          {/* Small top tag: YOUR VIP HOST */}
          <text
            x="324"
            y="233"
            fill="#f472b6"
            fontSize="8.5"
            fontWeight="800"
            letterSpacing="1.2"
          >
            YOUR VIP HOST
          </text>

          {/* Speech text: dynamic based on auth mode with full width */}
          <text
            x="324"
            y="251"
            fill="#ffffff"
            fontSize="10.5"
            fontWeight="600"
          >
            {authMode === 'signup' ? 'Good evening. May I see your pass?' : 'Welcome back! Good to see you.'}
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ========================================================
   MAIN VIP AUTHENTICATION PAGE
   ======================================================== */
export default function AuthPage({ onLoginSuccess, onCancel, onToast }) {
  const [authMode, setAuthMode] = useState('signup'); // Default to 'signup' (Create account) matching Image 1
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form input states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      onToast?.('Please enter your email address to enter');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      onToast?.('Please enter a valid email address');
      return;
    }

    if (!password) {
      onToast?.('Please enter your password to enter');
      return;
    }

    if (password.length < 6) {
      onToast?.('Password must be at least 6 characters');
      return;
    }

    if (authMode === 'signup') {
      if (!confirmPassword) {
        onToast?.('Please confirm your password');
        return;
      }
      if (password !== confirmPassword) {
        onToast?.('Passwords do not match');
        return;
      }
    }

    // Process user identity from entered credentials
    const enteredName = fullName.trim() || trimmedEmail.split('@')[0];
    const words = enteredName.split(/\s+/);
    const firstName = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    const formattedFullName = fullName.trim()
      ? fullName.trim()
      : `${firstName} (VIP)`;
    
    const initials = words.length > 1
      ? (words[0][0] + words[1][0]).toUpperCase()
      : firstName.slice(0, 2).toUpperCase();

    const userData = {
      ...MEMBER_PROFILE,
      fullName: formattedFullName,
      firstName: firstName,
      email: trimmedEmail,
      initials: initials
    };

    onToast?.(
      authMode === 'signup'
        ? `VIP Pass created! Welcome, ${userData.firstName}!`
        : `Welcome back, ${userData.firstName}! VIP Pass verified.`
    );
    onLoginSuccess(userData);
  };

  const handleSocialGoogle = () => {
    onToast?.('Signed in with Google! Activating your VIP pass...');
    onLoginSuccess(MEMBER_PROFILE);
  };

  return (
    <div className="vip-auth-page-wrapper">
      {/* Background ambient nocturnal glow (clipped safely inside container) */}
      <div className="vip-auth-glow-container">
        <div className="vip-auth-bg-glow glow-top-left" />
        <div className="vip-auth-bg-glow glow-bottom-right" />
      </div>

      {/* Top back navigation */}
      <div className="vip-auth-nav-bar">
        <button className="vip-back-home-btn" onClick={onCancel} type="button">
          <ArrowLeft size={16} />
          <span>Back to Showora</span>
        </button>
      </div>

      {/* ========================================================
          SPLIT TWO-COLUMN HERO CONTAINER
          ======================================================== */}
      <div className="vip-auth-split-layout">
        {/* LEFT COLUMN: VIP Host Illustration & Stanchions */}
        <div className="vip-auth-left-col">
          <VipHostIllustration authMode={authMode} />
        </div>

        {/* RIGHT COLUMN: VIP PASS TICKET CARD */}
        <div className="vip-auth-right-col">
          <div className="vip-ticket-card">
            {/* Top Barcode Header */}
            <div className="vip-ticket-top-header">
              {/* Barcode Graphic */}
              <div className="vip-barcode-strip">
                <span className="b-bar b-1" />
                <span className="b-bar b-3" />
                <span className="b-bar b-1" />
                <span className="b-bar b-2" />
                <span className="b-bar b-4" />
                <span className="b-bar b-1" />
                <span className="b-bar b-2" />
                <span className="b-bar b-1" />
                <span className="b-bar b-3" />
                <span className="b-bar b-2" />
                <span className="b-bar b-1" />
                <span className="b-bar b-4" />
                <span className="b-bar b-2" />
                <span className="b-bar b-1" />
                <span className="b-bar b-3" />
                <span className="b-bar b-1" />
                <span className="b-bar b-2" />
              </div>

              <h2 className="vip-ticket-brand">Showora</h2>
              <span className="vip-ticket-subtitle">THE VIP PASS</span>
            </div>

            {/* Ticket Notches & Perforation */}
            <div className="vip-ticket-perforation-row">
              <span className="notch notch-left" />
              <div className="perforation-dashed-line" />
              <span className="notch notch-right" />
            </div>

            {/* Ticket Body Content */}
            <div className="vip-ticket-body">
              {/* Tab Switcher: Sign in | Create account with liquid sliding background pill */}
              <div className="vip-auth-toggle-pill" role="tablist">
                <div
                  className={`vip-tab-slider ${authMode === 'signup' ? 'slider-signup' : 'slider-signin'}`}
                  aria-hidden="true"
                />
                <button
                  type="button"
                  role="tab"
                  aria-selected={authMode === 'signin'}
                  className={`vip-tab-pill-btn ${authMode === 'signin' ? 'active' : ''}`}
                  onClick={() => setAuthMode('signin')}
                >
                  Sign in
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={authMode === 'signup'}
                  className={`vip-tab-pill-btn ${authMode === 'signup' ? 'active' : ''}`}
                  onClick={() => setAuthMode('signup')}
                >
                  Create account
                </button>
              </div>

              {/* Title & Subtitle with smooth cross-fade */}
              <div className="vip-ticket-title-block">
                <h3 className="vip-ticket-heading">
                  Your night <span className="pink-highlight">awaits.</span>
                </h3>
                <div className="vip-subtext-container">
                  <p className={`vip-ticket-subtext ${authMode === 'signup' ? 'active' : 'inactive'}`}>
                    Create your account and unlock the experience.
                  </p>
                  <p className={`vip-ticket-subtext ${authMode === 'signin' ? 'active' : 'inactive'}`}>
                    Sign in to access your verified passes and perks.
                  </p>
                </div>
              </div>

              {/* Form with liquid collapsible rows */}
              <form onSubmit={handleSubmit} className="vip-auth-form">
                {/* Full name field (collapsible) */}
                <div className={`vip-field-collapsible ${authMode === 'signup' ? 'expanded' : 'collapsed'}`}>
                  <div className="vip-field-collapsible-inner">
                    <div className="vip-field-group">
                      <label className="vip-field-label">Full name</label>
                      <input
                        type="text"
                        className="vip-field-input"
                        placeholder="Your name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        tabIndex={authMode === 'signup' ? 0 : -1}
                      />
                    </div>
                  </div>
                </div>

                <div className="vip-field-group">
                  <label className="vip-field-label">Email address</label>
                  <input
                    type="email"
                    className="vip-field-input"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="vip-field-group">
                  <label className="vip-field-label">Password</label>
                  <div className="vip-input-wrap">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="vip-field-input has-action"
                      placeholder={authMode === 'signup' ? 'At least 8 characters' : 'Enter your password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="vip-show-toggle-btn"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>

                {/* Confirm password field (collapsible) */}
                <div className={`vip-field-collapsible ${authMode === 'signup' ? 'expanded' : 'collapsed'}`}>
                  <div className="vip-field-collapsible-inner">
                    <div className="vip-field-group">
                      <label className="vip-field-label">Confirm password</label>
                      <div className="vip-input-wrap">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          className="vip-field-input has-action"
                          placeholder="Repeat your password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required={authMode === 'signup'}
                          tabIndex={authMode === 'signup' ? 0 : -1}
                        />
                        <button
                          type="button"
                          className="vip-show-toggle-btn"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          tabIndex={authMode === 'signup' ? 0 : -1}
                        >
                          {showConfirmPassword ? 'Hide' : 'Show'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Primary Action Button with ticker-style text animation */}
                <button type="submit" className="vip-submit-cta-btn">
                  <span className="vip-cta-content-slider">
                    <span className={`vip-cta-text ${authMode === 'signup' ? 'active' : 'inactive-left'}`}>
                      Create my VIP pass →
                    </span>
                    <span className={`vip-cta-text ${authMode === 'signin' ? 'active' : 'inactive-right'}`}>
                      Enter the Night →
                    </span>
                  </span>
                </button>
              </form>

              {/* Social Login Section */}
              <div className="vip-social-section">
                <div className="vip-social-divider">
                  <span>or continue with</span>
                </div>

                <button
                  type="button"
                  className="vip-google-btn"
                  onClick={handleSocialGoogle}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.37 7.34 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.25 2.63 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
