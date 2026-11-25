import React, { useState, useEffect } from 'react';
import { X, QrCode, ShieldCheck, Download, Share2, CheckCircle2, Sparkles, Smartphone, ArrowRight } from 'lucide-react';

export default function PassModal({ passData, onClose, onToast }) {
  const [secondsLeft, setSecondsLeft] = useState(252); // ~4m 12s

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 1 ? prev - 1 : 300));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!passData) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-dialog pass-modal-dialog" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '440px', padding: '0', overflow: 'hidden', borderRadius: '24px' }}
      >
        <div className="pass-modal-header">
          <div className="pass-modal-tag">
            <span className="live-dot pulse-pink" />
            <span>DYNAMIC GATE KEY • NOCTURNE AES-256</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div className="pass-modal-body">
          {/* Card Top Strip */}
          <div className="pass-card-chip">
            <div className="brand-logo" style={{ fontSize: '24px', letterSpacing: '-0.5px' }}>
              Showora.
            </div>
            <span className="badge-gold">GOLD VIP ACCESS</span>
          </div>

          <h3 className="pass-card-title">{passData.title || 'Sunburn Arena ft. Boris Brejcha'}</h3>
          <p className="pass-card-subtitle">{passData.location || 'Aerocity Grand Arena • Zone A, Private Lounge'}</p>

          {/* QR Code Container */}
          <div className="pass-qr-container">
            <div className="qr-box-inner">
              {/* Dynamic Mock SVG QR Code */}
              <svg viewBox="0 0 160 160" width="160" height="160" className="qr-svg">
                {/* Outer positioning squares */}
                <rect x="10" y="10" width="40" height="40" fill="#000" rx="4"/>
                <rect x="16" y="16" width="28" height="28" fill="#fff" rx="2"/>
                <rect x="22" y="22" width="16" height="16" fill="#000" rx="2"/>

                <rect x="110" y="10" width="40" height="40" fill="#000" rx="4"/>
                <rect x="116" y="16" width="28" height="28" fill="#fff" rx="2"/>
                <rect x="122" y="22" width="16" height="16" fill="#000" rx="2"/>

                <rect x="10" y="110" width="40" height="40" fill="#000" rx="4"/>
                <rect x="16" y="116" width="28" height="28" fill="#fff" rx="2"/>
                <rect x="22" y="122" width="16" height="16" fill="#000" rx="2"/>

                {/* QR Matrix Bits */}
                <rect x="58" y="14" width="8" height="8" fill="#000"/>
                <rect x="70" y="14" width="8" height="8" fill="#000"/>
                <rect x="86" y="14" width="8" height="8" fill="#000"/>
                <rect x="58" y="26" width="8" height="8" fill="#000"/>
                <rect x="74" y="26" width="8" height="8" fill="#000"/>
                <rect x="90" y="26" width="8" height="8" fill="#000"/>
                <rect x="62" y="38" width="8" height="8" fill="#000"/>
                <rect x="78" y="38" width="8" height="8" fill="#000"/>
                
                <rect x="14" y="58" width="8" height="8" fill="#000"/>
                <rect x="26" y="58" width="8" height="8" fill="#000"/>
                <rect x="42" y="58" width="8" height="8" fill="#000"/>
                <rect x="58" y="58" width="8" height="8" fill="#000"/>
                <rect x="74" y="58" width="8" height="8" fill="#000"/>
                <rect x="90" y="58" width="8" height="8" fill="#000"/>
                <rect x="114" y="58" width="8" height="8" fill="#000"/>
                <rect x="130" y="58" width="8" height="8" fill="#000"/>

                <rect x="26" y="74" width="8" height="8" fill="#000"/>
                <rect x="42" y="74" width="8" height="8" fill="#000"/>
                <rect x="66" y="74" width="8" height="8" fill="#000"/>
                <rect x="82" y="74" width="8" height="8" fill="#000"/>
                <rect x="106" y="74" width="8" height="8" fill="#000"/>
                <rect x="122" y="74" width="8" height="8" fill="#000"/>

                <rect x="14" y="90" width="8" height="8" fill="#000"/>
                <rect x="34" y="90" width="8" height="8" fill="#000"/>
                <rect x="50" y="90" width="8" height="8" fill="#000"/>
                <rect x="74" y="90" width="8" height="8" fill="#000"/>
                <rect x="98" y="90" width="8" height="8" fill="#000"/>
                <rect x="138" y="90" width="8" height="8" fill="#000"/>

                <rect x="58" y="110" width="8" height="8" fill="#000"/>
                <rect x="74" y="110" width="8" height="8" fill="#000"/>
                <rect x="94" y="110" width="8" height="8" fill="#000"/>
                <rect x="114" y="110" width="8" height="8" fill="#000"/>
                <rect x="134" y="110" width="8" height="8" fill="#000"/>

                <rect x="66" y="126" width="8" height="8" fill="#000"/>
                <rect x="86" y="126" width="8" height="8" fill="#000"/>
                <rect x="106" y="126" width="8" height="8" fill="#000"/>
                <rect x="126" y="126" width="8" height="8" fill="#000"/>

                <rect x="58" y="138" width="8" height="8" fill="#000"/>
                <rect x="78" y="138" width="8" height="8" fill="#000"/>
                <rect x="98" y="138" width="8" height="8" fill="#000"/>
                <rect x="118" y="138" width="8" height="8" fill="#000"/>
              </svg>
            </div>
            <div className="qr-countdown">
              <span className="live-dot" />
              <span>REFRESHES IN {formatTime(secondsLeft)} • LIVE ROTATING TOKEN</span>
            </div>
            <div className="qr-pass-code">{passData.scanCode || 'SRM-992-BBR'}</div>
          </div>

          {/* Details Grid */}
          <div className="pass-details-grid">
            <div className="pass-detail-cell">
              <span className="cell-label">PASS HOLDER</span>
              <span className="cell-value">{passData.holder || 'Daksh Agarwal'}</span>
            </div>
            <div className="pass-detail-cell">
              <span className="cell-label">GATE & ZONE</span>
              <span className="cell-value">{passData.gateZone || 'Gate 04 • Zone A'}</span>
            </div>
            <div className="pass-detail-cell">
              <span className="cell-label">TIER ACCESS</span>
              <span className="cell-value">Gold VIP Pass</span>
            </div>
            <div className="pass-detail-cell">
              <span className="cell-label">STATUS</span>
              <span className="cell-value text-emerald">
                <CheckCircle2 size={13} style={{ display: 'inline', marginRight: '4px' }} />
                NFC Fast-Scan Ready
              </span>
            </div>
          </div>

          {/* Inclusions */}
          <div className="pass-inclusions-strip">
            <div className="inclusion-pill">🍸 2 Free Highball Vouchers</div>
            <div className="inclusion-pill">🚗 Valet Slot #F4 Reserved</div>
          </div>

          {/* Action Buttons */}
          <div className="pass-modal-actions">
            <button
              className="btn-primary"
              style={{ flex: 1, padding: '12px 18px', fontSize: '13.5px' }}
              onClick={() => {
                onToast?.('Added to Apple / Google Wallet');
                onClose();
              }}
            >
              <Smartphone size={16} /> Add to Apple Wallet
            </button>
            <button
              className="btn-secondary"
              style={{ padding: '12px 18px', fontSize: '13.5px' }}
              onClick={() => {
                navigator.clipboard?.writeText?.(window.location.href);
                onToast?.('Pass secure link copied!');
              }}
            >
              <Share2 size={16} /> Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
