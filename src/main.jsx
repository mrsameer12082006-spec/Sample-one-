import React, { useState, useMemo, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  MapPin,
  Search,
  Heart,
  Calendar,
  Clock,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  X,
  Zap,
  ShieldCheck,
  Ticket,
  TrendingUp,
  Star,
  Users,
  Mail,
  CheckCircle2,
  QrCode,
  Sparkles
} from 'lucide-react';
import './styles.css';

// ==========================================
// BRAND ICONS (SVG)
// ==========================================
function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function XIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

// ==========================================
// DATA SPECIFICATIONS (EXACT FIGMA MATCH)
// ==========================================

const INITIAL_EVENTS = [
  {
    id: 'diwali-party',
    title: 'Diwali Party – A Night of Lights, Luxury',
    category: 'Music',
    tagType: 'GENERAL',
    tagColor: 'tag-pink',
    host1: 'Mesh & Houz Presents',
    host2: 'Bla Bli Blu',
    date: 'Sun, Nov 1, 7:00 PM',
    location: 'Aerocity, Delhi',
    price: 'Free',
    numericPrice: 0,
    image: 'https://showora.s3.ap-south-1.amazonaws.com/events/1793063902609-1000075198.jpg',
    description: 'Experience an ultra-luxurious Diwali evening featuring international DJ sets, royal dining, curated cocktail bars, and breathtaking light architecture in the heart of Aerocity.'
  },
  {
    id: 'runaway-rio',
    title: 'Runaway to Rio – A Whole Tropical Vibe',
    category: 'Music',
    tagType: 'GENERAL',
    tagColor: 'tag-blue',
    host1: 'A Whole Tropical Vibe',
    host2: 'Dancers & Drummers',
    date: 'Tue, Oct 20, 7:00 AM',
    location: 'Siri Fort Club',
    price: 'Free',
    numericPrice: 0,
    image: 'https://showora.s3.ap-south-1.amazonaws.com/events/1792501521685-1000072363.jpg',
    description: 'Immerse yourself in authentic Brazilian samba beats, tropical mist lounges, exotic beverages, live percussionists, and carnival dance troupes celebrating the spirit of Rio.'
  },
  {
    id: 'dandiya-night',
    title: 'Dandiya Night 2.0',
    category: 'Music',
    tagType: 'GENERAL',
    tagColor: 'tag-purple',
    host1: 'Vault by Virat Kohli',
    host2: 'The Night is Yours',
    date: 'Sat, Oct 17, 6:00 PM',
    location: 'JLN Stadium Arena',
    price: '₹599',
    numericPrice: 599,
    image: 'https://showora.s3.ap-south-1.amazonaws.com/events/1791978471356-1000070583.jpg',
    description: 'The capital’s biggest high-voltage Garba celebration with live celebrity dhol ensembles, LED stage visuals, authentic Gujarati food bazaars, and best-dressed prizes.'
  },
  {
    id: 'glow-marathon',
    title: 'Glow Night Marathon – Nagpur 🏃‍♂️✨',
    category: 'Sports',
    tagType: 'GENERAL',
    tagColor: 'tag-pink',
    host1: 'Nagpur Special',
    host2: 'Plush Fitness Partner',
    date: 'Thu, Oct 15, 5:00 PM',
    location: 'City Square Center',
    price: 'Free',
    numericPrice: 0,
    image: 'https://showora.s3.ap-south-1.amazonaws.com/events/1792747384067-1000073446.jpg',
    description: 'Light up the streets with thousands of illuminated runners, UV body paints, neon foam tunnels, and an electric finish-line afterparty featuring live bass music.'
  },
  {
    id: 'full-throttle',
    title: 'Full Throttle India – Grand Car Meetup 🏎️',
    category: 'Sports',
    tagType: 'GENERAL',
    tagColor: 'tag-pink',
    host1: 'Coming Soon',
    host2: 'Full Throttle India',
    date: 'Sat, Oct 10, 6:00 PM',
    location: 'Buddh Circuit Grounds',
    price: '₹899',
    numericPrice: 899,
    image: 'https://showora.s3.ap-south-1.amazonaws.com/events/1792500205653-1000072362.jpg',
    description: 'Exclusive assembly of elite hypercars, track-tuned monsters, drift showcases, exhaust rev battles, and VIP pit lane access alongside India’s top automotive creators.'
  },
  {
    id: 'trick-or-treat',
    title: 'Trick or Treat Run – Dehradun 🎃🏃',
    category: 'Sports',
    tagType: 'GENERAL',
    tagColor: 'tag-purple',
    host1: 'Dehradun Edition',
    host2: 'Halloween Special',
    date: 'Sat, Oct 10, 7:00 AM',
    location: 'Rajpur Road Hills',
    price: 'Free',
    numericPrice: 0,
    image: 'https://showora.s3.ap-south-1.amazonaws.com/events/1792901296097-1000074198.jpg',
    description: 'A thrilling 5K & 10K costume marathon winding through the misty Himalayan foothills of Rajpur, featuring spooky obstacle zones, sweet treat stations, and monster awards.'
  }
];

const SPOTLIGHT_SLIDES = [
  {
    badgeLeft: 'FESTIVAL SPOTLIGHT',
    badgeRight: 'SPONSORED',
    title: 'Sunburn-style EDM Nights, Early Bird Tickets Live',
    description: 'Experience unmatched acoustic euphoria with world-class headliners. Exclusive VIP stage passes and lounge backstage wristbands available now.',
    limitNotice: 'Limited 200 early passes',
    bgImage: 'https://showora.s3.ap-south-1.amazonaws.com/events/1793063902609-1000075198.jpg',
    price: '₹1,499'
  },
  {
    badgeLeft: 'ARENA CONCERT',
    badgeRight: 'FEATURED',
    title: 'Echoes of the Night – World Symphony Tour',
    description: 'A mind-bending fusion of classical grand orchestra and modern electronic synthscapes performed live in a 360-degree acoustic dome.',
    limitNotice: 'Selling out fast — Tier 2 open',
    bgImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80',
    price: '₹1,999'
  },
  {
    badgeLeft: 'COMEDY SPECIAL',
    badgeRight: 'EXCLUSIVE',
    title: 'Midnight Laughs Riot with Top Headliners',
    description: 'An unfiltered, rib-tickling standup marathon featuring the country’s sharpest comedic minds under the starry Delhi skyline.',
    limitNotice: 'VIP front row tables remaining',
    bgImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80',
    price: '₹799'
  }
];

const CATEGORIES = [
  { name: 'MUSIC', colorClass: 'dot-pink' },
  { name: 'COMEDY', colorClass: 'dot-purple' },
  { name: 'MOVIES', colorClass: 'dot-cyan' },
  { name: 'THEATRE', colorClass: 'dot-indigo' },
  { name: 'SPORTS', colorClass: 'dot-amber' }
];

const LOCATIONS = [
  'New Delhi & NCR',
  'Mumbai',
  'Bengaluru',
  'Goa',
  'Pune',
  'Nagpur',
  'Dehradun'
];

// ==========================================
// MAIN APP COMPONENT
// ==========================================
function App() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentCity, setCurrentCity] = useState('New Delhi');
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [likedEvents, setLikedEvents] = useState(new Set());
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  
  // Modals state
  const [selectedEventForBooking, setSelectedEventForBooking] = useState(null);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Toast auto-dismiss
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Toggle Like
  const toggleLike = (e, eventId) => {
    e.stopPropagation();
    setLikedEvents((prev) => {
      const next = new Set(prev);
      if (next.has(eventId)) {
        next.delete(eventId);
        showToast('Removed from your liked events');
      } else {
        next.add(eventId);
        showToast('Added to your liked events ❤️');
      }
      return next;
    });
  };

  // Filtered Events
  const filteredEvents = useMemo(() => {
    return INITIAL_EVENTS.filter((ev) => {
      const matchesCat = activeCategory === 'ALL' || ev.category.toUpperCase() === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        ev.title.toLowerCase().includes(q) ||
        ev.location.toLowerCase().includes(q) ||
        ev.host1.toLowerCase().includes(q) ||
        ev.host2.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Spotlight Next / Prev
  const nextSpotlight = () => {
    setSpotlightIndex((prev) => (prev + 1) % SPOTLIGHT_SLIDES.length);
  };
  const prevSpotlight = () => {
    setSpotlightIndex((prev) => (prev - 1 + SPOTLIGHT_SLIDES.length) % SPOTLIGHT_SLIDES.length);
  };

  // Auto rotate spotlight
  useEffect(() => {
    const timer = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % SPOTLIGHT_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const openBooking = (event) => {
    setSelectedEventForBooking(event);
    setTicketQuantity(1);
    setBookingSuccess(false);
  };

  return (
    <div className="site-wrapper">
      {/* ========================================================
          1. NAVIGATION BAR
          ======================================================== */}
      <header className="navbar">
        <div className="nav-left">
          <a href="#" className="brand-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            Showora
          </a>
          <nav>
            <ul className="nav-menu">
              <li>
                <a href="#events" className="nav-link active">
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#movies"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveCategory('MOVIES');
                    const el = document.getElementById('events');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Movies
                </a>
              </li>
              <li>
                <a
                  href="#likes"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    showToast(`You have ${likedEvents.size} liked events`);
                  }}
                >
                  <Heart size={15} color={likedEvents.size > 0 ? '#ff007a' : 'currentColor'} fill={likedEvents.size > 0 ? '#ff007a' : 'none'} />
                  Likes {likedEvents.size > 0 && `(${likedEvents.size})`}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="nav-right">
          <button
            className="location-picker"
            onClick={(e) => e.preventDefault()}
            title="Location"
          >
            <MapPin size={16} color="#ff3399" />
            <span>{currentCity}</span>
          </button>

          <div className="search-input-pill">
            <Search size={16} color="#c084fc" />
            <input
              type="text"
              placeholder="Search events, movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <X size={14} style={{ cursor: 'pointer' }} onClick={() => setSearchQuery('')} />
            )}
          </div>

          <button className="btn-join" onClick={(e) => e.preventDefault()}>
            JOIN
          </button>
        </div>
      </header>

      <main>
        {/* ========================================================
            2. HERO SECTION
            ======================================================== */}
        <section className="hero-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-white">Everything</span>
              <span className="title-live">live!</span>
            </h1>

            <p className="hero-tagline">
              You Book the Vibe, We Handle the Rest
            </p>

            <p className="hero-subtext">
              Book live events, movies, workshops and online experiences — all in one place.
            </p>

            <div className="hero-cta-group">
              <a href="#events" className="btn-primary">
                Explore Events <ChevronRight size={18} />
              </a>
              <button
                className="btn-secondary"
                onClick={() => {
                  setActiveCategory('MOVIES');
                  const el = document.getElementById('events');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Browse Movies 🍿
              </button>
            </div>

            {/* Category Filter Pills Row */}
            <div className="category-pills-row">
              <button
                className={`cat-pill ${activeCategory === 'ALL' ? 'active' : ''}`}
                onClick={() => setActiveCategory('ALL')}
              >
                <span className="dot-indicator dot-pink" />
                ALL
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.name}
                  className={`cat-pill ${activeCategory === cat.name ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.name)}
                >
                  <span className={`dot-indicator ${cat.colorClass}`} />
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. WHY CHOOSE SHOWORA SECTION
            ======================================================== */}
        <section className="section-container">
          <div className="section-header-center">
            <h2 className="section-title">
              Why Choose <span className="gradient-text-pink">Showora?</span>
            </h2>
            <p className="section-subtitle">
              Your one-stop platform for discovering and booking amazing experiences
            </p>
          </div>

          <div className="benefit-grid">
            <article className="glass-panel benefit-card">
              <div className="benefit-icon-wrapper">
                <Zap size={26} />
              </div>
              <h3 className="benefit-title">Instant Booking</h3>
              <p className="benefit-desc">
                Book tickets instantly with just a few clicks. No hassle, no delays.
              </p>
            </article>

            <article className="glass-panel benefit-card">
              <div className="benefit-icon-wrapper" style={{ color: '#a855f7', borderColor: 'rgba(168, 85, 247, 0.4)', background: 'rgba(168, 85, 247, 0.1)' }}>
                <ShieldCheck size={26} />
              </div>
              <h3 className="benefit-title">Secure Payments</h3>
              <p className="benefit-desc">
                Your transactions are protected with bank-grade security.
              </p>
            </article>

            <article className="glass-panel benefit-card">
              <div className="benefit-icon-wrapper">
                <Ticket size={26} />
              </div>
              <h3 className="benefit-title">Digital Tickets</h3>
              <p className="benefit-desc">
                Access your tickets anytime on your phone. No printing needed.
              </p>
            </article>

            <article className="glass-panel benefit-card">
              <div className="benefit-icon-wrapper" style={{ color: '#a855f7', borderColor: 'rgba(168, 85, 247, 0.4)', background: 'rgba(168, 85, 247, 0.1)' }}>
                <Clock size={26} />
              </div>
              <h3 className="benefit-title">24/7 Support</h3>
              <p className="benefit-desc">
                Our team is always here to help with any questions or issues.
              </p>
            </article>
          </div>

          {/* ========================================================
              4. FESTIVAL SPOTLIGHT / SPONSORED BANNER
              ======================================================== */}
          <div className="spotlight-banner-wrapper">
            {SPOTLIGHT_SLIDES.map((slide, idx) => {
              if (idx !== spotlightIndex) return null;
              return (
                <div
                  key={slide.title}
                  className="spotlight-banner"
                  style={{ backgroundImage: `url(${slide.bgImage})` }}
                >
                  <div className="spotlight-overlay" />
                  
                  {/* Extreme Right Corner Upward Sponsored Badge */}
                  <span className="badge-sponsored">{slide.badgeRight}</span>

                  <div className="spotlight-content">
                    <div className="spotlight-badges">
                      <span className="badge-festival">{slide.badgeLeft}</span>
                    </div>

                    <h2 className="spotlight-title">{slide.title}</h2>
                    <p className="spotlight-desc">{slide.description}</p>

                    <div className="spotlight-actions">
                      <button
                        className="btn-primary"
                        onClick={(e) => e.preventDefault()}
                      >
                        Book Now <ArrowRight size={16} />
                      </button>
                      <span className="spotlight-limit">{slide.limitNotice}</span>
                    </div>
                  </div>

                  <div className="carousel-controls">
                    <div className="carousel-dots">
                      {SPOTLIGHT_SLIDES.map((_, dotIdx) => (
                        <div
                          key={dotIdx}
                          className={`carousel-dot ${dotIdx === spotlightIndex ? 'active' : ''}`}
                          onClick={() => setSpotlightIndex(dotIdx)}
                        />
                      ))}
                    </div>
                    <button className="carousel-arrow" onClick={prevSpotlight} aria-label="Previous Spotlight">
                      <ChevronLeft size={18} />
                    </button>
                    <button className="carousel-arrow" onClick={nextSpotlight} aria-label="Next Spotlight">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ========================================================
              5. POPULAR EVENTS SECTION
              ======================================================== */}
          <section id="events" style={{ scrollMarginTop: '100px' }}>
            <div className="events-section-header">
              <div>
                <span className="eyebrow-tag">
                  <TrendingUp size={14} /> TRENDING CITY BEATS
                </span>
                <h2 className="events-title">
                  Popular <span className="script-events">events</span>
                </h2>
                <p className="section-subtitle" style={{ margin: '6px 0 0', textAlign: 'left' }}>
                  Discover trending experiences happening now in {currentCity}
                </p>
              </div>

              <button
                className="glass-pill"
                style={{ padding: '10px 24px', fontSize: '13.5px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                onClick={() => {
                  setActiveCategory('ALL');
                  setSearchQuery('');
                  showToast('Showing all available events');
                }}
              >
                View All Events <ArrowRight size={15} />
              </button>
            </div>

            {filteredEvents.length === 0 ? (
              <div className="glass-panel" style={{ padding: '60px 24px', textAlign: 'center', margin: '30px 0' }}>
                <Sparkles size={40} color="#ff007a" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>
                  {activeCategory === 'MOVIES' ? 'No Movies Currently Listed' : 'No Events Found'}
                </h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                  {activeCategory === 'MOVIES'
                    ? 'Cinema premieres and film screenings for your city will be listed soon.'
                    : `We couldn't find any events matching your selection.`}
                </p>
                <button
                  className="btn-primary"
                  style={{ padding: '8px 24px' }}
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('ALL');
                  }}
                >
                  View All Events
                </button>
              </div>
            ) : (
              <div className="events-grid">
                {filteredEvents.map((event) => {
                  const isLiked = likedEvents.has(event.id);
                  return (
                    <article className="event-card" key={event.id}>
                      <div className="card-media-wrap">
                        <img src={event.image} alt={event.title} loading="lazy" />
                        <div className="card-overlay-gradient" />
                        
                        <span className={`card-tag-general ${event.tagColor}`}>
                          {event.tagType}
                        </span>

                        <button
                          className={`card-like-btn ${isLiked ? 'liked' : ''}`}
                          onClick={(e) => toggleLike(e, event.id)}
                          aria-label="Add to favorites"
                        >
                          <Heart size={16} fill={isLiked ? '#ff007a' : 'none'} color={isLiked ? '#ff007a' : '#ffffff'} />
                        </button>

                        <div className="card-host-pills">
                          <span className="host-badge">{event.host1}</span>
                          <span className="host-badge">{event.host2}</span>
                        </div>
                      </div>

                      <div className="card-content">
                        <h3 className="card-title">{event.title}</h3>

                        <div className="card-meta-row">
                          <Calendar size={14} color="#ff3399" />
                          <span>{event.date}</span>
                          <span>•</span>
                          <MapPin size={14} color="#a855f7" />
                          <span>{event.location}</span>
                        </div>

                        <div className="card-footer-row">
                          <div className="price-block">
                            <span className="price-label">PRICE</span>
                            <span className="price-value">{event.price}</span>
                          </div>

                          <button
                            className="btn-book-card"
                            onClick={(e) => e.preventDefault()}
                          >
                            Book Now <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        </section>

        {/* ========================================================
            6. HOW IT WORKS SECTION
            ======================================================== */}
        <section className="how-it-works-section">
          <div className="section-header-center">
            <h2 className="section-title">
              How It <span className="font-script gradient-text-pink neon-glow-pink">Works</span>
            </h2>
            <p className="section-subtitle">
              Getting started is easy — just three simple steps
            </p>
          </div>

          <div className="steps-timeline-container">
            <div className="step-card">
              <div className="step-circle circle-1">1</div>
              <h3 className="step-title">Browse Events</h3>
              <p className="step-desc">
                Explore thousands of events, movies, and experiences happening around you.
              </p>
            </div>

            <div className="step-card">
              <div className="step-circle circle-2">2</div>
              <h3 className="step-title">Book Tickets</h3>
              <p className="step-desc">
                Select your preferred date, seats, and complete the secure payment process.
              </p>
            </div>

            <div className="step-card">
              <div className="step-circle circle-3">3</div>
              <h3 className="step-title">Enjoy the Show</h3>
              <p className="step-desc">
                Show your digital ticket and immerse yourself in an unforgettable experience.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            7. CALL TO ACTION BANNER
            ======================================================== */}
        <section className="cta-banner-container">
          <div className="glass-panel cta-banner">
            <h2 className="cta-title">
              Ready to Experience
              <span className="cta-cursive">Something Amazing?</span>
            </h2>
            <p className="cta-subtitle">
              Join thousands of people discovering and booking incredible events every day
            </p>
            <div className="cta-actions">
              <a
                href="#events"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('events');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started Now <ChevronRight size={18} />
              </a>
              <button
                className="btn-secondary"
                onClick={(e) => e.preventDefault()}
              >
                I'm a Vendor 👥
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================
            8. LOVED BY THE COMMUNITY (TESTIMONIALS)
            ======================================================== */}
        <section className="community-section">
          <div className="section-header-center">
            <h2 className="section-title">
              Loved by the <span className="font-script gradient-text-pink neon-glow-pink">Community</span>
            </h2>
            <p className="section-subtitle">
              Real stories from people who booked their vibe with Showora
            </p>
          </div>

          <div className="testimonial-grid">
            <article className="glass-panel testimonial-card">
              <div className="star-rating-row">
                <Star size={16} fill="#ff007a" color="#ff007a" />
                <Star size={16} fill="#ff007a" color="#ff007a" />
                <Star size={16} fill="#ff007a" color="#ff007a" />
                <Star size={16} fill="#ff007a" color="#ff007a" />
                <Star size={16} fill="#ff007a" color="#ff007a" />
              </div>
              <p className="testimonial-quote">
                “Showora made booking a 20-person festival crew absurdly smooth. Digital QR codes meant zero chaos at entry gates.”
              </p>
              <div className="author-block">
                <div className="author-avatar avatar-pink">A</div>
                <div className="author-info">
                  <span className="author-name">Aarav S.</span>
                  <span className="author-event">Attended Diwali Party</span>
                </div>
              </div>
            </article>

            <article className="glass-panel testimonial-card">
              <div className="star-rating-row">
                <Star size={16} fill="#ff007a" color="#ff007a" />
                <Star size={16} fill="#ff007a" color="#ff007a" />
                <Star size={16} fill="#ff007a" color="#ff007a" />
                <Star size={16} fill="#ff007a" color="#ff007a" />
                <Star size={16} fill="#ff007a" color="#ff007a" />
              </div>
              <p className="testimonial-quote">
                “Found Dandiya Night 2.0 within seconds and the seat selection was completely frictionless. Best ticketing UX in Delhi NCR.”
              </p>
              <div className="author-block">
                <div className="author-avatar avatar-purple">P</div>
                <div className="author-info">
                  <span className="author-name">Priya M.</span>
                  <span className="author-event">Attended Dandiya Night 2.0</span>
                </div>
              </div>
            </article>

            <article className="glass-panel testimonial-card">
              <div className="star-rating-row">
                <Star size={16} fill="#ff007a" color="#ff007a" />
                <Star size={16} fill="#ff007a" color="#ff007a" />
                <Star size={16} fill="#ff007a" color="#ff007a" />
                <Star size={16} fill="#ff007a" color="#ff007a" />
                <Star size={16} fill="#ff007a" color="#ff007a" />
              </div>
              <p className="testimonial-quote">
                “The offline digital ticket feature saved me at the venue when cell network was patchy. Absolute lifesaver for crowded midnight runs.”
              </p>
              <div className="author-block">
                <div className="author-avatar avatar-magenta">R</div>
                <div className="author-info">
                  <span className="author-name">Rohan K.</span>
                  <span className="author-event">Attended Glow Night Marathon</span>
                </div>
              </div>
            </article>
          </div>

          <div className="community-rating-bar">
            <strong>4.8★</strong> average rating across 50,000+ verified ticket bookings
          </div>
        </section>
      </main>

      {/* ========================================================
          9. FOOTER SECTION
          ======================================================== */}
      <footer className="footer-wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-logo">Showora</span>
            <div className="brand-motto">BOOK THE VIBE.</div>
            <p className="brand-desc">
              Your premier platform for discovering and booking the most exciting live events, movies, and experiences in your city.
            </p>
            <div className="social-links">
              <a href="#" className="social-pill" aria-label="Instagram" onClick={(e) => { e.preventDefault(); showToast('Instagram @showora'); }}>
                <InstagramIcon size={17} />
              </a>
              <a href="#" className="social-pill" aria-label="X Twitter" onClick={(e) => { e.preventDefault(); showToast('Twitter @showora'); }}>
                <XIcon size={15} />
              </a>
              <a href="#" className="social-pill" aria-label="LinkedIn" onClick={(e) => { e.preventDefault(); showToast('LinkedIn Showora Studio'); }}>
                <LinkedinIcon size={17} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>DISCOVER</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="#events"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveCategory('ALL');
                    setSearchQuery('');
                    const el = document.getElementById('events');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  › Events
                </a>
              </li>
              <li>
                <a
                  href="#movies"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveCategory('MOVIES');
                    setSearchQuery('');
                    const el = document.getElementById('events');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  › Movies
                </a>
              </li>
              <li><a href="#venues" onClick={(e) => e.preventDefault()}>› Venues</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>COMPANY</h4>
            <ul className="footer-links">
              <li><a href="#about" onClick={(e) => e.preventDefault()}>› About Us</a></li>
              <li><a href="#contact" onClick={(e) => e.preventDefault()}>› Contact Us</a></li>
              <li><a href="#post" onClick={(e) => e.preventDefault()}>› Post Event</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>NEED HELP?</h4>
            <div className="contact-item">
              <Mail size={18} className="contact-icon" />
              <div>
                <div className="contact-label">SUPPORT EMAIL</div>
                <a href="mailto:hi@showora.in" className="contact-val" style={{ textDecoration: 'none' }}>
                  hi@showora.in
                </a>
              </div>
            </div>
            <div className="contact-item">
              <MapPin size={18} className="contact-icon" />
              <div>
                <div className="contact-label">HEADQUARTERS</div>
                <div className="contact-val">New Delhi, India</div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Showora Studio. All rights reserved.</div>
          <div className="footer-legal-links">
            <a href="#privacy" onClick={(e) => e.preventDefault()}>PRIVACY POLICY</a>
            <a href="#terms" onClick={(e) => e.preventDefault()}>TERMS</a>
            <a href="#copyright" onClick={(e) => e.preventDefault()}>COPYRIGHT</a>
            <a href="#refund" onClick={(e) => e.preventDefault()}>REFUND POLICY</a>
          </div>
        </div>
      </footer>

      {/* ========================================================
          10. INTERACTIVE BOOKING MODAL
          ======================================================== */}
      {selectedEventForBooking && (
        <div className="modal-backdrop" onClick={() => setSelectedEventForBooking(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedEventForBooking(null)}>
              <X size={18} />
            </button>

            {!bookingSuccess ? (
              <div>
                <span className="eyebrow-tag" style={{ color: '#ff3399' }}>
                  <Ticket size={14} /> BOOK YOUR VIBE
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '8px 0 14px', color: '#ffffff' }}>
                  {selectedEventForBooking.title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-muted)', fontSize: '13.5px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={15} color="#ff007a" />
                    <span>{selectedEventForBooking.date}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={15} color="#a855f7" />
                    <span>{selectedEventForBooking.location}</span>
                  </div>
                </div>

                <p style={{ fontSize: '13.5px', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '24px' }}>
                  {selectedEventForBooking.description}
                </p>

                {/* Ticket Counter */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '24px' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px' }}>General Admission Pass</div>
                    <div style={{ fontSize: '12px', color: '#ff3399', fontWeight: 600 }}>
                      {selectedEventForBooking.price} / ticket
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <button
                      className="glass-pill"
                      style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                      onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
                    >
                      -
                    </button>
                    <span style={{ fontWeight: 700, fontSize: '16px', minWidth: '16px', textAlign: 'center' }}>
                      {ticketQuantity}
                    </span>
                    <button
                      className="glass-pill"
                      style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                      onClick={() => setTicketQuantity(Math.min(10, ticketQuantity + 1))}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total & Action */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Total Amount:</span>
                  <span style={{ fontSize: '22px', fontWeight: 800, color: '#ff007a' }}>
                    {selectedEventForBooking.numericPrice === 0
                      ? 'Free'
                      : `₹${selectedEventForBooking.numericPrice * ticketQuantity}`}
                  </span>
                </div>

                <button
                  className="btn-primary"
                  style={{ width: '100%', padding: '14px', fontSize: '15px' }}
                  onClick={() => {
                    setBookingSuccess(true);
                  }}
                >
                  Confirm & Reserve Tickets
                </button>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <CheckCircle2 size={56} color="#10b981" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
                  You're Going! 🎉
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
                  {ticketQuantity} ticket{ticketQuantity > 1 ? 's' : ''} reserved for <strong style={{ color: '#fff' }}>{selectedEventForBooking.title}</strong>
                </p>

                <div style={{ background: '#ffffff', padding: '20px', borderRadius: '16px', display: 'inline-block', marginBottom: '20px', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}>
                  <QrCode size={130} color="#070214" />
                  <div style={{ color: '#070214', fontWeight: 700, fontSize: '11px', letterSpacing: '0.1em', marginTop: '8px' }}>
                    SHOWORA-PASS-{Math.floor(100000 + Math.random() * 900000)}
                  </div>
                </div>

                <p style={{ fontSize: '12px', color: 'var(--text-subtle)', marginBottom: '24px' }}>
                  Digital pass saved to your Showora device wallet. Show QR at gate.
                </p>

                <button
                  className="btn-primary"
                  style={{ width: '100%', padding: '12px' }}
                  onClick={() => setSelectedEventForBooking(null)}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================
          11. LOCATION PICKER MODAL
          ======================================================== */}
      {showLocationModal && (
        <div className="modal-backdrop" onClick={() => setShowLocationModal(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '420px' }}>
            <button className="modal-close-btn" onClick={() => setShowLocationModal(false)}>
              <X size={18} />
            </button>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={20} color="#ff007a" /> Select City
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Choose your city to explore tailored events and live vibe scenes:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {LOCATIONS.map((loc) => (
                <button
                  key={loc}
                  className="glass-panel"
                  style={{
                    padding: '12px 18px',
                    textAlign: 'left',
                    color: currentCity === loc ? '#ff007a' : '#ffffff',
                    borderColor: currentCity === loc ? '#ff007a' : 'rgba(168, 85, 247, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 500
                  }}
                  onClick={() => {
                    setCurrentCity(loc);
                    setShowLocationModal(false);
                    showToast(`Location set to ${loc}`);
                  }}
                >
                  <span>{loc}</span>
                  {currentCity === loc && <CheckCircle2 size={16} color="#ff007a" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          12. JOIN / SIGN IN MODAL
          ======================================================== */}
      {showJoinModal && (
        <div className="modal-backdrop" onClick={() => setShowJoinModal(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '440px', textAlign: 'center' }}>
            <button className="modal-close-btn" onClick={() => setShowJoinModal(false)}>
              <X size={18} />
            </button>
            <span className="brand-logo" style={{ fontSize: '38px', marginBottom: '8px', display: 'inline-block' }}>
              Showora
            </span>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '6px' }}>
              Welcome to the Vibe
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Sign in or create an account to unlock offline tickets, exclusive early birds, and bookmark your favourite artists.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                className="btn-secondary"
                style={{ padding: '12px', fontSize: '14px', justifyContent: 'center' }}
                onClick={() => {
                  setShowJoinModal(false);
                  showToast('Signed in with Google');
                }}
              >
                Continue with Google
              </button>

              <button
                className="btn-secondary"
                style={{ padding: '12px', fontSize: '14px', justifyContent: 'center' }}
                onClick={() => {
                  setShowJoinModal(false);
                  showToast('Signed in with Apple');
                }}
              >
                Continue with Apple
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '8px 0', color: 'var(--text-subtle)', fontSize: '12px' }}>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />
                <span>OR</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />
              </div>

              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  padding: '12px 18px',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  outline: 'none',
                  fontSize: '13.5px',
                  fontFamily: 'inherit'
                }}
              />

              <button
                className="btn-primary"
                style={{ padding: '12px', fontSize: '14px' }}
                onClick={() => {
                  setShowJoinModal(false);
                  showToast('Magic link sent to your email!');
                }}
              >
                Send Magic Link
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          13. TOAST NOTIFICATION
          ======================================================== */}
      {toastMessage && (
        <div className="toast-notification">
          <Sparkles size={18} color="#ff007a" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
