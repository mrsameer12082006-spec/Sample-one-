import React from 'react';
import {
  Ticket,
  Zap,
  Heart,
  Sparkles,
  Clock,
  MapPin,
  QrCode,
  Smartphone,
  Wine,
  Headphones,
  CreditCard,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Share2,
  Wallet,
  Bookmark,
  Calendar,
  Layers,
  Compass
} from 'lucide-react';
import {
  MEMBER_PROFILE,
  MEMBER_STATS,
  IMMINENT_PASS,
  CONCIERGE_ACTIONS,
  SONIC_RADAR,
  RECENT_ACTIVITY_LOG
} from '../../data/memberData';

export default function OverviewPage({ onOpenPass, onSelectTab, onToast, onOpenBookModal }) {
  return (
    <div className="overview-page">
      {/* ========================================================
          1. HERO / WELCOME BANNER
          ======================================================== */}
      <section className="member-hero-card">
        <div className="member-hero-top-row">
          <div className="member-tier-pill">
            <span className="live-dot pulse-pink" />
            <span>GOLD MEMBER • TIER MULTIPLIER 1.5X ACTIVE</span>
          </div>
          <span className="sanctuary-tag">MEMBER SANCTUARY</span>
        </div>

        <div className="member-hero-main-row">
          <div className="member-hero-text">
            <h1 className="member-welcome-title">
              Welcome back, <span className="font-script gradient-text-pink">{MEMBER_PROFILE.firstName}</span>
            </h1>
            <p className="member-welcome-subtitle">
              Your curations are primed for Delhi NCR after hours. 3 verified passes are live on your keycard for this weekend.
            </p>
          </div>

          <div className="member-hero-actions">
            <button
              className="btn-primary"
              style={{ padding: '12px 22px', fontSize: '13.5px' }}
              onClick={() => onSelectTab('bookings')}
            >
              <Compass size={16} />
              <span>Browse Weekend Lineup</span>
            </button>
            <button
              className="btn-secondary"
              style={{ padding: '12px 20px', fontSize: '13.5px' }}
              onClick={() => onOpenPass(IMMINENT_PASS)}
            >
              <QrCode size={16} color="#c084fc" />
              <span>Citizen Fast-Key</span>
            </button>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="member-stats-row">
          {MEMBER_STATS.map((stat) => (
            <div key={stat.id} className="stat-glass-card">
              <div className="stat-card-header">
                <span className="stat-label">{stat.label}</span>
                {stat.id === 'passes' && <Ticket size={16} color="#ec4899" />}
                {stat.id === 'credits' && <Zap size={16} color="#c084fc" />}
                {stat.id === 'bookmarked' && <Heart size={16} color="#f43f5e" />}
                {stat.id === 'attended' && <Sparkles size={16} color="#38bdf8" />}
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-subtext">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          2. IMMINENT EVENT PASS
          ======================================================== */}
      <section className="dashboard-section">
        <div className="section-title-row">
          <div className="section-title-group">
            <span className="live-dot pulse-pink" />
            <h2 className="section-heading">Imminent Event Pass</h2>
          </div>
          <div className="countdown-pill">
            <Clock size={13} color="#ec4899" />
            <span>{IMMINENT_PASS.doorsIn}</span>
          </div>
        </div>

        <div className="imminent-pass-card">
          {/* Left Column: Visual Banner */}
          <div className="imminent-banner-side" style={{ backgroundImage: `url(${IMMINENT_PASS.image})` }}>
            <div className="imminent-banner-overlay" />
            <div className="imminent-banner-badges">
              <span className="badge-pink">{IMMINENT_PASS.tierBadge1}</span>
              <span className="badge-dark">{IMMINENT_PASS.tierBadge2}</span>
            </div>
            <div className="imminent-banner-bottom">
              <div className="imminent-time-tag">{IMMINENT_PASS.tag}</div>
              <h3 className="imminent-event-name">{IMMINENT_PASS.title}</h3>
              <p className="imminent-venue">
                <MapPin size={14} color="#ec4899" />
                <span>{IMMINENT_PASS.location}</span>
              </p>
            </div>
          </div>

          {/* Right Column: Pass Details & Dynamic QR */}
          <div className="imminent-details-side">
            <div className="imminent-meta-row">
              <div className="meta-cell">
                <span className="meta-label">PASS HOLDER</span>
                <span className="meta-value">{IMMINENT_PASS.holder}</span>
              </div>
              <div className="meta-cell">
                <span className="meta-label">GATE / ZONE</span>
                <span className="meta-value">{IMMINENT_PASS.gateZone}</span>
              </div>
            </div>

            {/* Fast-Scan Ready Box */}
            <div className="fast-scan-box" onClick={() => onOpenPass(IMMINENT_PASS)}>
              <div className="fast-scan-header">
                <div className="scan-status-pill">
                  <span className="live-dot" />
                  <span>{IMMINENT_PASS.scanStatus}</span>
                </div>
                <span className="scan-code-mono">{IMMINENT_PASS.scanCode}</span>
              </div>
              <p className="scan-subtext">Tap Barcode for contactless NFC</p>
              
              <div className="mini-barcode-row">
                <div className="barcode-bars">
                  {[4,2,6,1,3,5,2,4,1,6,3,2,5,4,2,3,6,1,4,2,5,3,2,6,4,1,5,3].map((height, idx) => (
                    <span
                      key={idx}
                      className="barcode-line"
                      style={{ height: `${height * 6 + 10}px`, width: idx % 3 === 0 ? '3px' : '2px' }}
                    />
                  ))}
                </div>
                <div className="mini-qr-box">
                  <QrCode size={40} color="#ffffff" />
                </div>
              </div>
            </div>

            {/* Perks Row */}
            <div className="imminent-perks-row">
              {IMMINENT_PASS.perks.map((perk, i) => (
                <div key={i} className="perk-tag-pill">
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="imminent-actions-row">
              <button
                className="btn-primary"
                style={{ flex: 1, padding: '11px 18px', fontSize: '13.5px' }}
                onClick={() => onOpenPass(IMMINENT_PASS)}
              >
                <span>Display Full Pass</span>
              </button>
              <button
                className="btn-icon-square"
                title="Save to Wallet"
                onClick={() => onToast?.('Pass saved to wallet')}
              >
                <Wallet size={16} />
              </button>
              <button
                className="btn-icon-square"
                title="Share Pass"
                onClick={() => {
                  navigator.clipboard?.writeText?.(window.location.href);
                  onToast?.('Pass link copied to clipboard');
                }}
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. CONCIERGE & PASS CONTROLS
          ======================================================== */}
      <section className="dashboard-section">
        <div className="section-title-row">
          <h2 className="section-heading">Concierge & Pass Controls</h2>
          <span className="section-tag-subtle">INSTANT ACTIONS</span>
        </div>

        <div className="controls-grid">
          {CONCIERGE_ACTIONS.map((action) => {
            return (
              <div key={action.id} className="control-action-card">
                <div className="control-icon-circle">
                  {action.id === 'transfer' && <Smartphone size={18} color="#ec4899" />}
                  {action.id === 'tokens' && <Wine size={18} color="#c084fc" />}
                  {action.id === 'concierge' && <Headphones size={18} color="#38bdf8" />}
                  {action.id === 'fastpay' && <CreditCard size={18} color="#10b981" />}
                </div>
                <h4 className="control-card-title">{action.title}</h4>
                <p className="control-card-desc">{action.desc}</p>
                <button
                  className="control-action-btn"
                  onClick={() => {
                    if (action.id === 'transfer') onToast?.('Opening wristband transfer portal...');
                    else if (action.id === 'tokens') onOpenPass({ ...IMMINENT_PASS, title: 'Mixology Tokens', scanCode: 'TOK-8821' });
                    else if (action.id === 'concierge') onToast?.('Connecting with Nocturne Concierge on WhatsApp...');
                    else if (action.id === 'fastpay') onSelectTab('wallet');
                  }}
                >
                  <span>{action.actionLabel}</span>
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          4. YOUR SONIC RADAR
          ======================================================== */}
      <section className="dashboard-section">
        <div className="section-title-row">
          <div>
            <div className="algorithm-tag">
              <Sparkles size={13} color="#ec4899" />
              <span>TAILORED ALGORITHM</span>
            </div>
            <h2 className="section-heading">Your Sonic Radar</h2>
            <p className="section-subtext">
              Selected based on your affinity for Melodic Techno, Warehouse Soundscapes, and Cyber-Rooftops.
            </p>
          </div>
          <button className="link-button" onClick={() => onToast?.('Viewing all 24 curated radar events')}>
            <span>Explore All 24 Events →</span>
          </button>
        </div>

        <div className="radar-cards-grid">
          {SONIC_RADAR.map((item) => (
            <div key={item.id} className="radar-event-card">
              <div className="radar-card-image-wrap" style={{ backgroundImage: `url(${item.image})` }}>
                <span className="radar-cat-badge">{item.category}</span>
                <button
                  className="radar-bookmark-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToast?.(`Bookmarked ${item.title}`);
                  }}
                >
                  <Bookmark size={14} color="#ffffff" />
                </button>
                <div className="radar-match-badge">{item.match}</div>
              </div>

              <div className="radar-card-body">
                <span className="radar-date">{item.date}</span>
                <h4 className="radar-title">{item.title}</h4>
                <p className="radar-venue">
                  <MapPin size={13} color="#ec4899" />
                  <span>{item.venue}</span>
                </p>
                <p className="radar-desc">{item.desc}</p>

                <div className="radar-card-footer">
                  <div className="radar-price-block">
                    <span className="price-label">FROM</span>
                    <span className="price-val">{item.price.replace('FROM ', '')}</span>
                  </div>
                  <button
                    className="btn-primary"
                    style={{ padding: '8px 18px', fontSize: '12.5px' }}
                    onClick={() => {
                      if (onOpenBookModal) {
                        onOpenBookModal({
                          id: item.id,
                          title: item.title,
                          location: item.venue,
                          price: item.price.replace('FROM ', ''),
                          image: item.image,
                          category: item.category
                        });
                      } else {
                        onToast?.(`Opening checkout for ${item.title}`);
                      }
                    }}
                  >
                    <span>Book Pass</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          5. BOTTOM TWO-COLUMN: RECENT ACTIVITY & TIER PROGRESS
          ======================================================== */}
      <section className="dashboard-section">
        <div className="dashboard-bottom-grid">
          {/* Left: Recent Activity Log */}
          <div className="dashboard-subcard">
            <div className="subcard-header-row">
              <div>
                <h3 className="subcard-title">Recent Activity Log</h3>
                <p className="subcard-subtitle">
                  Scans, rewards minted, and pass status across the Showora ledger.
                </p>
              </div>
              <button
                className="link-button"
                onClick={() => onToast?.('Exporting ledger CSV...')}
              >
                Export Ledger
              </button>
            </div>

            <div className="activity-list">
              {RECENT_ACTIVITY_LOG.map((act) => (
                <div key={act.id} className="activity-item">
                  <div className="activity-icon-box">
                    {act.id === 'act-1' && <Zap size={16} color="#ec4899" />}
                    {act.id === 'act-2' && <CheckCircle2 size={16} color="#10b981" />}
                    {act.id === 'act-3' && <Wine size={16} color="#f43f5e" />}
                  </div>
                  <div className="activity-main">
                    <h5 className="activity-title">{act.title}</h5>
                    <p className="activity-meta">{act.subtext}</p>
                  </div>
                  <div className="activity-status-side">
                    <span className="activity-impact" style={{ color: act.impactColor }}>
                      {act.impact}
                    </span>
                    <span className="activity-status-sub">{act.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tier Progress Gold Pass */}
          <div className="dashboard-subcard">
            <div className="subcard-header-row">
              <span className="badge-pink">PRESTIGE JOURNEY</span>
              <span className="tier-next-badge">NEXT: OBSIDIAN BLACK</span>
            </div>

            <h3 className="subcard-title" style={{ marginTop: '12px' }}>
              Tier Progress: Gold Pass
            </h3>
            <p className="subcard-subtitle">
              Attend 2 more experiences or earn 550 pulse points to unlock complimentary table allocations and backstage escort passes.
            </p>

            {/* Progress Bar */}
            <div className="tier-progress-box">
              <div className="progress-labels">
                <span className="progress-cur">2,450 / 3,000 Points</span>
                <span className="progress-pct">81% Complete</span>
              </div>
              <div className="progress-bar-track">
                <div className="progress-bar-fill" style={{ width: '81%' }} />
              </div>
              <div className="progress-sublabels">
                <span>Gold Tier Active</span>
                <span>550 PTS to Obsidian Black</span>
              </div>
            </div>

            {/* Obsidian Perks List */}
            <div className="perks-list-box">
              <span className="perks-list-heading">OBSIDIAN PERKS INCOMING:</span>
              <ul className="perks-checklist">
                <li>
                  <CheckCircle2 size={14} color="#ec4899" />
                  <span>2.0x points on all tickets and festival concessions</span>
                </li>
                <li>
                  <CheckCircle2 size={14} color="#ec4899" />
                  <span>Guaranteed backstage access to artist lounges</span>
                </li>
                <li>
                  <CheckCircle2 size={14} color="#ec4899" />
                  <span>Zero cancellation fees up to 2 hours before show</span>
                </li>
              </ul>
            </div>

            <button
              className="btn-secondary"
              style={{ width: '100%', padding: '12px', fontSize: '13.5px', marginTop: '16px' }}
              onClick={() => onSelectTab('rewards')}
            >
              Explore All Tier Benefits
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
