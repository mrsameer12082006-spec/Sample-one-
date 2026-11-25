import React, { useState } from 'react';
import {
  Award,
  Zap,
  CheckCircle2,
  Lock,
  QrCode,
  Download,
  Share2,
  Sparkles,
  Ticket,
  Users,
  Compass,
  ArrowRight,
  ExternalLink,
  Edit3,
  Wine,
  ShieldCheck,
  Star
} from 'lucide-react';
import {
  MEMBER_PROFILE,
  TIER_MILESTONES,
  HOW_TO_EARN,
  REWARDS_AUDIT_LOG
} from '../../data/memberData';

export default function RewardsPage({ onOpenPass, onSelectTab, onToast }) {
  const [activeAuditFilter, setActiveAuditFilter] = useState('all');

  const filteredAudit = REWARDS_AUDIT_LOG.filter((item) => {
    if (activeAuditFilter === 'all') return true;
    return item.type === activeAuditFilter;
  });

  return (
    <div className="rewards-page">
      {/* ========================================================
          1. BREADCRUMB & CITIZEN PROFILE HEADER
          ======================================================== */}
      <section className="rewards-citizen-card">
        <div className="citizen-breadcrumb-row">
          <span className="breadcrumb-path">SHOWORA CITIZEN / REWARDS & TIERS HUB</span>
          <div className="multiplier-badge">
            <span className="live-dot pulse-pink" />
            <span>TIER MULTIPLIER: 1.5X SYNCHRONIZED</span>
          </div>
        </div>

        <div className="citizen-banner-main">
          <div className="citizen-avatar-block">
            <div className="citizen-avatar-ring">
              <span className="avatar-letter">D</span>
            </div>
            <div className="citizen-info">
              <div className="citizen-name-row">
                <h2 className="citizen-name">{MEMBER_PROFILE.fullName}</h2>
                <span className="badge-pink">VERIFIED CITIZEN</span>
              </div>
              <div className="citizen-contact-row">
                <span>{MEMBER_PROFILE.email}</span>
                <span className="sep">•</span>
                <span>{MEMBER_PROFILE.phone}</span>
              </div>
              <div className="citizen-tag-row">
                <span className="badge-gold">GOLD MEMBER</span>
                <span className="citizen-since">Member since {MEMBER_PROFILE.memberSince}</span>
              </div>
            </div>
          </div>

          <div className="citizen-actions-block">
            <button
              className="btn-secondary"
              style={{ padding: '9px 18px', fontSize: '13px' }}
              onClick={() => onSelectTab('profile')}
            >
              <Edit3 size={14} />
              <span>Edit Profile</span>
            </button>
            <button
              className="btn-secondary"
              style={{ padding: '9px 18px', fontSize: '13px' }}
              onClick={() => {
                navigator.clipboard?.writeText?.(window.location.href);
                onToast?.('Vibe card link copied to clipboard');
              }}
            >
              <Share2 size={14} />
              <span>Share Vibe Card</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. YOUR REWARDS & VAULT (TWO COLUMNS)
          ======================================================== */}
      <section className="dashboard-section">
        <div className="rewards-vault-grid">
          {/* Left: Points & Balance */}
          <div className="rewards-stats-card">
            <div className="card-tag-row">
              <span className="badge-purple">YOUR REWARDS & VAULT</span>
            </div>

            <div className="points-display-block">
              <div className="points-number-row">
                <span className="points-giant">{MEMBER_PROFILE.points.toLocaleString()}</span>
                <span className="points-label gradient-text-pink">Reward Points</span>
              </div>
              <p className="points-equiv">
                = ₹2,450 Event & VIP Pass Credit <span className="sep">•</span>{' '}
                <span className="text-pink">550 points away from Platinum</span>
              </p>
            </div>

            <div className="tier-progress-box" style={{ margin: '18px 0' }}>
              <div className="progress-labels">
                <span className="progress-cur">Current: 2,450 Pts</span>
                <span className="progress-pct">Gold Target: 3,000 Pts</span>
              </div>
              <div className="progress-bar-track">
                <div className="progress-bar-fill" style={{ width: '81%' }} />
              </div>
            </div>

            <p className="rewards-policy-note">
              Earn points automatically every time you reserve warehouse raves, secret gigs, VIP suites, or curated boutique escapes. Points never expire for active citizens.
            </p>

            <div className="rewards-buttons-row">
              <button
                className="btn-primary"
                style={{ padding: '10px 22px', fontSize: '13.5px' }}
                onClick={() => onToast?.('Points redemption catalog opened')}
              >
                <span>Redeem Rewards →</span>
              </button>
              <button
                className="btn-secondary"
                style={{ padding: '10px 18px', fontSize: '13.5px' }}
                onClick={() => onToast?.('Opening points transfer module')}
              >
                <span>Transfer Points</span>
              </button>
              <button
                className="btn-secondary"
                style={{ padding: '10px 18px', fontSize: '13.5px' }}
                onClick={() => onToast?.('Viewing participating venue partners')}
              >
                <span>Partner Perks ↗</span>
              </button>
            </div>
          </div>

          {/* Right: Nocturne VIP Digital Card */}
          <div className="nocturne-vip-card">
            <div className="vip-card-glow" />
            <div className="vip-card-inner">
              <div className="vip-card-top">
                <div className="brand-logo" style={{ fontSize: '24px' }}>
                  Showora
                </div>
                <span className="vip-badge-pill">GOLD PASS</span>
              </div>

              <div className="vip-card-chip-graphic">
                <div className="gold-chip" />
                <div className="contactless-icon">
                  <div className="wave w1" />
                  <div className="wave w2" />
                  <div className="wave w3" />
                </div>
              </div>

              <div className="vip-card-bottom">
                <div className="vip-holder-name">DAKSH AGARWAL</div>
                <div className="vip-card-num">**9920</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. TIER MILESTONES & PRIVILEGES
          ======================================================== */}
      <section className="dashboard-section">
        <div className="section-title-row">
          <div>
            <span className="badge-purple" style={{ fontSize: '11px' }}>MEMBERSHIP PROGRESSION SYSTEM</span>
            <h2 className="section-heading" style={{ marginTop: '6px' }}>Tier Milestones & Privileges</h2>
          </div>
          <span className="section-tag-subtle">
            550 pts remaining to unlock Platinum Elite status
          </span>
        </div>

        <div className="tier-milestones-grid">
          {TIER_MILESTONES.map((tier) => (
            <div
              key={tier.id}
              className={`tier-card ${tier.active ? 'active-tier' : ''}`}
            >
              {tier.tierTag && <div className="tier-cur-tag">{tier.tierTag}</div>}
              <div className="tier-header-row">
                <h4 className="tier-name">{tier.name}</h4>
                {tier.completed ? (
                  <CheckCircle2 size={16} color="#ec4899" />
                ) : tier.active ? (
                  <Star size={16} color="#ec4899" fill="#ec4899" />
                ) : (
                  <Lock size={15} color="#736987" />
                )}
              </div>
              <div className="tier-pts">{tier.points}</div>
              <p className="tier-desc">{tier.desc}</p>
              <div className="tier-status-footer">
                <span className={tier.active ? 'text-pink bold' : 'text-muted'}>
                  {tier.active ? '★ ' : tier.completed ? '✓ ' : ''}
                  {tier.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          4. MY QR CODE (CITIZEN KEY)
          ======================================================== */}
      <section className="dashboard-section">
        <div className="qr-pass-showcase-panel">
          <div className="section-title-row" style={{ marginBottom: '18px' }}>
            <div>
              <span className="badge-pink" style={{ fontSize: '11px' }}>DIGITAL CITIZEN PASS & REWARDS KEY</span>
              <h2 className="section-heading" style={{ marginTop: '6px' }}>My QR Code</h2>
              <p className="section-subtext">Scan this QR code to quickly access your profile and rewards.</p>
            </div>
            <span className="geo-coordinates">AES-256 ENCRYPTION : ACTIVE</span>
          </div>

          <div className="qr-showcase-grid">
            {/* Left: Explanation & Quick Metadata */}
            <div className="qr-explain-col">
              <h3 className="citizen-key-title">YOUR CITIZEN KEY.</h3>
              <p className="citizen-key-desc">
                Your personal cryptographic QR code gives you instantaneous access to your SHOWORA profile, fast-track venue check-in, and offline reward redemptions.
              </p>

              <div className="venue-sync-banner">
                <div className="sync-icon-circle">
                  <Sparkles size={16} color="#ec4899" />
                </div>
                <div>
                  <h5 className="sync-title">Instant Venue & Vault Sync</h5>
                  <p className="sync-desc">
                    Show your QR code at participating events to collect or redeem rewards on-site. Valid across all SHOWORA Partner venues, underground raves, and VIP speakeasies.
                  </p>
                </div>
              </div>

              <div className="key-meta-pills-row">
                <div className="key-meta-box">
                  <span className="kmeta-label">MEMBER ID</span>
                  <span className="kmeta-val">#SHW-8829</span>
                </div>
                <div className="key-meta-box">
                  <span className="kmeta-label">REWARD BALANCE</span>
                  <span className="kmeta-val">2,450 PTS</span>
                </div>
                <div className="key-meta-box">
                  <span className="kmeta-label">CURRENT STATUS</span>
                  <span className="kmeta-val text-gold">Gold Pass</span>
                </div>
              </div>

              <div className="qr-actions-row">
                <button
                  className="btn-primary"
                  style={{ padding: '10px 22px', fontSize: '13px' }}
                  onClick={() => onToast?.('Citizen QR image downloaded')}
                >
                  <Download size={14} />
                  <span>Download QR</span>
                </button>
                <button
                  className="btn-secondary"
                  style={{ padding: '10px 18px', fontSize: '13px' }}
                  onClick={() => {
                    navigator.clipboard?.writeText?.('showora.me/c/daksh');
                    onToast?.('Copied link: showora.me/c/daksh');
                  }}
                >
                  <Share2 size={14} />
                  <span>Share QR</span>
                </button>
                <span className="url-slug-pill">showora.me/c/daksh</span>
              </div>
            </div>

            {/* Right: Dynamic Digital Pass Visual */}
            <div className="qr-card-col">
              <div className="united-dynamic-card">
                <div className="dynamic-card-top">
                  <span className="dynamic-tag">UNITED DYNAMIC PASS</span>
                  <span className="pass-no-sub">NO 7930 • V.02</span>
                </div>

                <div className="dynamic-qr-box">
                  <svg viewBox="0 0 160 160" width="170" height="170" className="qr-svg">
                    <rect x="10" y="10" width="40" height="40" fill="#000" rx="4"/>
                    <rect x="16" y="16" width="28" height="28" fill="#fff" rx="2"/>
                    <rect x="22" y="22" width="16" height="16" fill="#000" rx="2"/>

                    <rect x="110" y="10" width="40" height="40" fill="#000" rx="4"/>
                    <rect x="116" y="16" width="28" height="28" fill="#fff" rx="2"/>
                    <rect x="122" y="22" width="16" height="16" fill="#000" rx="2"/>

                    <rect x="10" y="110" width="40" height="40" fill="#000" rx="4"/>
                    <rect x="16" y="116" width="28" height="28" fill="#fff" rx="2"/>
                    <rect x="22" y="122" width="16" height="16" fill="#000" rx="2"/>

                    <rect x="58" y="14" width="8" height="8" fill="#000"/>
                    <rect x="74" y="14" width="8" height="8" fill="#000"/>
                    <rect x="90" y="14" width="8" height="8" fill="#000"/>
                    <rect x="62" y="30" width="8" height="8" fill="#000"/>
                    <rect x="82" y="30" width="8" height="8" fill="#000"/>

                    <rect x="14" y="58" width="8" height="8" fill="#000"/>
                    <rect x="34" y="58" width="8" height="8" fill="#000"/>
                    <rect x="54" y="58" width="8" height="8" fill="#000"/>
                    <rect x="74" y="58" width="8" height="8" fill="#000"/>
                    <rect x="94" y="58" width="8" height="8" fill="#000"/>
                    <rect x="114" y="58" width="8" height="8" fill="#000"/>
                    <rect x="134" y="58" width="8" height="8" fill="#000"/>

                    <rect x="24" y="76" width="8" height="8" fill="#000"/>
                    <rect x="44" y="76" width="8" height="8" fill="#000"/>
                    <rect x="64" y="76" width="8" height="8" fill="#000"/>
                    <rect x="84" y="76" width="8" height="8" fill="#000"/>
                    <rect x="104" y="76" width="8" height="8" fill="#000"/>
                    <rect x="124" y="76" width="8" height="8" fill="#000"/>

                    <rect x="60" y="110" width="8" height="8" fill="#000"/>
                    <rect x="80" y="110" width="8" height="8" fill="#000"/>
                    <rect x="100" y="110" width="8" height="8" fill="#000"/>
                    <rect x="120" y="110" width="8" height="8" fill="#000"/>
                  </svg>
                </div>

                <div className="dynamic-countdown-pill">
                  <span className="live-dot" />
                  <span>REFRESHES IN 4:12 • LIVE TOKEN</span>
                </div>

                <div className="dynamic-card-bottom">
                  <div className="card-name-bold">Daksh Agarwal</div>
                  <div className="card-tier-sub">Gold Member • 2,450 Points</div>
                  <div className="card-nfc-sub">NFC Enabled • Fast-Track Gate Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. HOW TO EARN MORE REWARDS
          ======================================================== */}
      <section className="dashboard-section">
        <div className="section-title-row">
          <div>
            <span className="badge-purple" style={{ fontSize: '11px' }}>POINTS ACCELERATION</span>
            <h2 className="section-heading" style={{ marginTop: '6px' }}>How to Earn More Rewards</h2>
          </div>
          <span className="section-tag-subtle">ALWAYS ACTIVE</span>
        </div>

        <div className="earn-cards-grid">
          {HOW_TO_EARN.map((card) => (
            <div key={card.id} className="earn-card">
              <div className="earn-icon-circle">
                {card.id === 'earn-1' && <Ticket size={18} color="#ec4899" />}
                {card.id === 'earn-2' && <Compass size={18} color="#c084fc" />}
                {card.id === 'earn-3' && <Users size={18} color="#38bdf8" />}
                {card.id === 'earn-4' && <Zap size={18} color="#f59e0b" />}
              </div>
              <h4 className="earn-title">{card.title}</h4>
              <p className="earn-desc">{card.desc}</p>
              <div className="earn-boost-badge">{card.boost}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          6. RECENT REWARDS ACTIVITY (AUDIT TRAIL)
          ======================================================== */}
      <section className="dashboard-section">
        <div className="section-title-row">
          <div>
            <span className="badge-pink" style={{ fontSize: '11px' }}>AUDIT TRAIL</span>
            <h2 className="section-heading" style={{ marginTop: '6px' }}>Recent Rewards Activity</h2>
            <p className="section-subtext">Real-time cryptographic audit trail of points accrual and redemptions.</p>
          </div>

          <div className="filter-tabs-pills" style={{ marginBottom: 0 }}>
            {['all', 'earned', 'redeemed', 'bonus'].map((filter) => (
              <button
                key={filter}
                className={`filter-pill ${activeAuditFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveAuditFilter(filter)}
                style={{ padding: '6px 14px', fontSize: '12px', textTransform: 'capitalize' }}
              >
                {filter === 'all' ? 'All Activity' : filter}
              </button>
            ))}
          </div>
        </div>

        <div className="table-responsive glass-panel">
          <table className="archive-table">
            <thead>
              <tr>
                <th>DATE / DETAILS</th>
                <th>CLASSIFICATION</th>
                <th>POINTS IMPACT</th>
                <th>RUNNING BALANCE</th>
              </tr>
            </thead>
            <tbody>
              {filteredAudit.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div>
                      <div className="table-event-name">{item.title}</div>
                      <div className="table-venue-name">{item.ref}</div>
                    </div>
                  </td>
                  <td>
                    <span className={`table-tier-pill ${item.classification === 'BONUS' ? 'badge-bonus' : item.classification === 'REDEEMED' ? 'badge-redeem' : 'badge-credit'}`}>
                      {item.classification}
                    </span>
                  </td>
                  <td style={{ color: item.impactColor, fontWeight: 700 }}>
                    {item.impact}
                  </td>
                  <td className="table-amount-cell">{item.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer-row">
          <span className="subcard-subtitle" style={{ margin: 0 }}>
            Displaying 5 most recent transactions • Synchronized with Showora Vault
          </span>
          <button
            className="link-button"
            onClick={() => onToast?.('Preparing Rewards Statement PDF...')}
          >
            Download Rewards Statement (PDF / CSV)
          </button>
        </div>
      </section>

      {/* ========================================================
          7. PARTNER LOUNGE PRIVILEGES BANNER
          ======================================================== */}
      <section className="partner-lounge-banner">
        <div className="lounge-banner-left">
          <div className="lounge-icon-box">
            <Wine size={22} color="#ec4899" />
          </div>
          <div>
            <h4 className="lounge-title">Partner Lounge Privileges Ready</h4>
            <p className="lounge-subtext">
              You have 1 complimentary cocktail voucher waiting at participating speakeasy lounges in Delhi NCR & Mumbai.
            </p>
          </div>
        </div>

        <button
          className="btn-primary"
          style={{ padding: '11px 22px', fontSize: '13.5px' }}
          onClick={() => onToast?.('Voucher #MX-8828 activated for partner speakeasies!')}
        >
          <span>Claim Lounge Pass</span>
        </button>
      </section>
    </div>
  );
}
