import React, { useState } from 'react';
import {
  Ticket,
  Calendar,
  Clock,
  MapPin,
  QrCode,
  Download,
  Share2,
  Search,
  ChevronDown,
  ChevronUp,
  Star,
  Receipt,
  RotateCcw,
  Sparkles,
  Users,
  Compass,
  CheckCircle2,
  FileText
} from 'lucide-react';
import {
  CURRENT_ADMISSIONS,
  PAST_NOCTURNAL_ARCHIVE,
  IMMINENT_PASS
} from '../../data/memberData';

export default function BookingsPage({ onOpenPass, onToast, onOpenBookModal }) {
  const [activeFilterTab, setActiveFilterTab] = useState('active');
  const [searchFilter, setSearchFilter] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(0);

  const filteredAdmissions = CURRENT_ADMISSIONS.filter((item) => {
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.location.toLowerCase().includes(q) ||
      item.ref.toLowerCase().includes(q)
    );
  });

  const faqs = [
    {
      q: 'Do I need to print my passes?',
      a: 'No! All Showora passes feature real-time rotating QR cryptographic tokens and NFC wristband integration. Just show the live pass on your mobile device at Gate A-04.'
    },
    {
      q: 'Can I transfer tickets to a friend?',
      a: 'Yes, VIP passes can be transferred up to 2 hours before gates open using the "Transfer Ticket" button or entering the recipient’s mobile number.'
    },
    {
      q: 'What is the dress code for Nocturne Speakeasies?',
      a: 'Smart nocturnal chic / monochrome rave elegance. Strictly no open slippers or sportswear at speakeasy and backstage lounges.'
    }
  ];

  return (
    <div className="bookings-page">
      {/* ========================================================
          1. HEADER WITH STATS WIDGET
          ======================================================== */}
      <section className="bookings-header-card">
        <div className="bookings-header-content">
          <div className="header-tag">
            <span className="live-dot pulse-pink" />
            <span>GUESTLIST & VAULT • SYNCED WITH CLOUD PASS</span>
          </div>

          <h1 className="bookings-title">
            My Bookings & <span className="font-script gradient-text-pink">Passes</span>
          </h1>

          <p className="bookings-subtitle">
            Manage your active guestlists, festival wristband releases, and past nocturnal experiences across Delhi NCR & beyond.
          </p>
        </div>

        {/* Right Stats Widget Box */}
        <div className="bookings-stats-box">
          <div className="booking-stat-item">
            <div className="stat-icon-square">
              <Ticket size={18} color="#ec4899" />
            </div>
            <div>
              <span className="bstat-label">TOTAL TICKETS</span>
              <span className="bstat-val">5 passes</span>
            </div>
          </div>

          <div className="stat-divider-v" />

          <div className="booking-stat-item">
            <div className="stat-icon-square">
              <Sparkles size={18} color="#c084fc" />
            </div>
            <div>
              <span className="bstat-label">VIP LOUNGE</span>
              <span className="bstat-val">Gold Tier</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. FILTER TABS & SEARCH BAR
          ======================================================== */}
      <div className="bookings-controls-bar">
        <div className="filter-tabs-pills">
          <button
            className={`filter-pill ${activeFilterTab === 'active' ? 'active' : ''}`}
            onClick={() => setActiveFilterTab('active')}
          >
            <span>Active Passes</span>
            <span className="pill-count">3</span>
          </button>
          <button
            className={`filter-pill ${activeFilterTab === 'archived' ? 'active' : ''}`}
            onClick={() => setActiveFilterTab('archived')}
          >
            <span>Archived Experiences</span>
            <span className="pill-count">6</span>
          </button>
          <button
            className={`filter-pill ${activeFilterTab === 'transferred' ? 'active' : ''}`}
            onClick={() => setActiveFilterTab('transferred')}
          >
            <span>Transferred</span>
            <span className="pill-count">1</span>
          </button>
          <button
            className={`filter-pill ${activeFilterTab === 'cancelled' ? 'active' : ''}`}
            onClick={() => setActiveFilterTab('cancelled')}
          >
            <span>Cancelled</span>
            <span className="pill-count">0</span>
          </button>
        </div>

        <div className="search-export-group">
          <div className="filter-search-box">
            <Search size={14} color="#a59db8" />
            <input
              type="text"
              placeholder="Filter by artist, date, venue..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
          </div>

          <button
            className="btn-secondary export-btn"
            onClick={() => onToast?.('Exporting calendar .ICS schedule...')}
          >
            <Calendar size={14} />
            <span>Export .ICS</span>
          </button>
        </div>
      </div>

      {/* ========================================================
          3. CURRENT ADMISSIONS
          ======================================================== */}
      <section className="dashboard-section">
        <div className="section-title-row">
          <div className="section-title-group">
            <h2 className="section-heading">Current Admissions</h2>
            <span className="badge-pink" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>
              REALTIME GATE SCANNER READY
            </span>
          </div>
          <span className="section-tag-subtle">
            Click any card for instant dynamic QR verification
          </span>
        </div>

        <div className="admissions-stack">
          {filteredAdmissions.map((adm) => (
            <div
              key={adm.id}
              className="admission-card"
              onClick={() => onOpenPass(adm)}
            >
              {/* Left Image Side */}
              <div
                className="admission-image-side"
                style={{ backgroundImage: `url(${adm.image})` }}
              >
                <div className="admission-image-overlay" />
                <div className="admission-tags-top">
                  {adm.pill1 && <span className="badge-pink">{adm.pill1}</span>}
                  {adm.pill2 && <span className="badge-dark">{adm.pill2}</span>}
                </div>
                <div className="admission-countdown-bottom">
                  <div className="countdown-text">
                    <Clock size={12} />
                    <span>{adm.doorCountdown}</span>
                  </div>
                  <div className="gate-text">{adm.gate}</div>
                </div>
              </div>

              {/* Right Details Side */}
              <div className="admission-info-side" onClick={(e) => e.stopPropagation()}>
                <div className="admission-top-meta">
                  <div className="adm-status-group">
                    <span className="live-dot" />
                    <span className="adm-status-tag">{adm.statusTag}</span>
                    <span className="adm-ref-mono">• {adm.ref}</span>
                  </div>
                  <span className="tickets-issued-badge">{adm.ticketsIssued}</span>
                </div>

                <h3 className="admission-title">{adm.title}</h3>
                <p className="admission-subhead">{adm.subtitle}</p>

                {/* 3 Detail Columns */}
                <div className="admission-tri-grid">
                  <div className="tri-col">
                    <span className="tri-label">
                      <Calendar size={12} color="#ec4899" />
                      <span>DATE & TIME</span>
                    </span>
                    <span className="tri-val">{adm.dateTime}</span>
                    <span className="tri-sub">{adm.timeSub}</span>
                  </div>

                  <div className="tri-col">
                    <span className="tri-label">
                      <MapPin size={12} color="#ec4899" />
                      <span>LOCATION</span>
                    </span>
                    <span className="tri-val">{adm.location}</span>
                    <span className="tri-sub">{adm.locationSub}</span>
                  </div>

                  <div className="tri-col">
                    <span className="tri-label">
                      <Ticket size={12} color="#ec4899" />
                      <span>TIER / INCLUSION</span>
                    </span>
                    <span className="tri-val">{adm.tier}</span>
                    <span className="tri-sub">{adm.tierSub}</span>
                  </div>
                </div>

                {/* Bottom Actions Row */}
                <div className="admission-actions-row">
                  <button
                    className="btn-primary"
                    style={{ padding: '9px 20px', fontSize: '13px' }}
                    onClick={() => onOpenPass(adm)}
                  >
                    <QrCode size={15} />
                    <span>{adm.primaryBtn}</span>
                  </button>

                  <button
                    className="btn-secondary"
                    style={{ padding: '9px 18px', fontSize: '13px' }}
                    onClick={() => onToast?.(`Added ${adm.title} to Apple/Google Wallet`)}
                  >
                    <span>{adm.secondaryBtn}</span>
                  </button>

                  {adm.link1 && (
                    <button
                      className="link-button"
                      onClick={() => onToast?.(`Transfer portal opened for ${adm.ref}`)}
                    >
                      {adm.link1}
                    </button>
                  )}

                  {adm.link2 && (
                    <button
                      className="link-button"
                      onClick={() => onToast?.('Loading 3D venue map...')}
                    >
                      {adm.link2}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          4. PAST NOCTURNAL ARCHIVE
          ======================================================== */}
      <section className="dashboard-section">
        <div className="section-title-row">
          <div>
            <h2 className="section-heading">
              Past Nocturnal Archive <span className="font-script gradient-text-pink">Memories</span>
            </h2>
            <p className="section-subtext">
              Completed entries, downloaded invoices, and community rating logs.
            </p>
          </div>
          <button
            className="btn-secondary"
            style={{ padding: '8px 16px', fontSize: '12.5px' }}
            onClick={() => onToast?.('Preparing tax invoices ZIP archive...')}
          >
            <Download size={14} />
            <span>Download All Tax Invoices (ZIP)</span>
          </button>
        </div>

        <div className="table-responsive glass-panel">
          <table className="archive-table">
            <thead>
              <tr>
                <th>EVENT & VENUE</th>
                <th>DATE ATTENDED</th>
                <th>TIER / PASS</th>
                <th>PAID AMOUNT</th>
                <th>VIBE RATING</th>
                <th>RECEIPT & REBOOK</th>
              </tr>
            </thead>
            <tbody>
              {PAST_NOCTURNAL_ARCHIVE.map((row) => (
                <tr key={row.id}>
                  <td>
                    <div className="event-venue-cell">
                      <img src={row.image} alt={row.event} className="table-thumb" />
                      <div>
                        <div className="table-event-name">{row.event}</div>
                        <div className="table-venue-name">{row.venue}</div>
                      </div>
                    </div>
                  </td>
                  <td className="table-date-cell">{row.date}</td>
                  <td>
                    <span className="table-tier-pill">{row.tier}</span>
                  </td>
                  <td className="table-amount-cell">{row.amount}</td>
                  <td>
                    <div className="rating-cell">
                      <span className="stars-pink">★★★★★</span>
                      <span className="rating-score">{row.rating}</span>
                    </div>
                  </td>
                  <td>
                    <div className="table-actions-cell">
                      <button
                        className="btn-icon-tiny"
                        title="Download Tax Receipt"
                        onClick={() => onToast?.(`Downloaded receipt for ${row.event}`)}
                      >
                        <Receipt size={14} />
                      </button>
                      <button
                        className="btn-rebook"
                        onClick={() => {
                          if (onOpenBookModal) {
                            onOpenBookModal({
                              id: row.id,
                              title: row.event,
                              location: row.venue,
                              price: row.amount,
                              image: row.image
                            });
                          } else {
                            onToast?.(`Rebooking vibe: ${row.event}`);
                          }
                        }}
                      >
                        Rebook Vibe
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================================
          5. BOTTOM SPLIT: VENUE PREVIEW & ENTRY PROTOCOL FAQ
          ======================================================== */}
      <section className="dashboard-section">
        <div className="dashboard-bottom-grid">
          {/* Venue Preview */}
          <div className="dashboard-subcard">
            <div className="subcard-header-row">
              <span className="badge-pink" style={{ fontSize: '10.5px' }}>NEXT STOP VENUE PREVIEW</span>
              <span className="geo-coordinates">28.5562° N, 77.1200° E</span>
            </div>

            <h3 className="subcard-title" style={{ marginTop: '10px' }}>
              Aerocity Arena — Aerocity Delhi
            </h3>
            <p className="subcard-subtitle">
              Gate A-04 Fast Track entry dedicated for Showora Gold Pass holders.
            </p>

            <div className="venue-map-mockup">
              <div className="map-grid-lines" />
              <div className="map-pin-pill">
                <span className="live-dot pulse-pink" />
                <span>Drop Point: Gate 4 Valet</span>
              </div>
              <div className="map-venue-label">Aerocity Grand Arena</div>
            </div>
          </div>

          {/* Entry Protocol & FAQ Accordion */}
          <div className="dashboard-subcard">
            <div className="subcard-header-row">
              <span className="badge-purple" style={{ fontSize: '10.5px' }}>ENTRY PROTOCOL & FAQ</span>
            </div>

            <h3 className="subcard-title" style={{ marginTop: '10px' }}>
              Nocturne Admissions Policy
            </h3>

            <div className="faq-accordion-stack">
              {faqs.map((faq, idx) => {
                const isOpen = expandedFaq === idx;
                return (
                  <div key={idx} className="faq-item">
                    <button
                      className="faq-question-btn"
                      onClick={() => setExpandedFaq(isOpen ? -1 : idx)}
                    >
                      <span className="faq-q-text">{faq.q}</span>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {isOpen && (
                      <div className="faq-answer-body">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
