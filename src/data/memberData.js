// Member Space Mock Data & Store matching exact Figma specifications
export const MEMBER_PROFILE = {
  firstName: 'Daksh',
  lastName: 'Agarwal',
  fullName: 'Daksh Agarwal',
  email: 'dakshagarwal9311@gmail.com',
  phone: '+91 98201 44820',
  citizenId: '#SHW-8829',
  memberSince: 'Oct 2025',
  tier: 'Gold Pass',
  tierLevel: 'GOLD TIER',
  tierMultiplier: '1.5x Pulse Multiplier',
  points: 2450,
  maxPoints: 3000,
  targetTier: 'Platinum',
  nextTierPoints: 550,
  status: 'NOCTURNE FAST-TRACK CLEARED',
  dob: '18 / 04 / 1998',
  gender: 'He / Him',
  whatsappAlerts: true,
  safetyContactName: 'Rhea Kapoor (Partner)',
  safetyContactPhone: '+91 97112 04981',
  aadhaarLast4: '9201',
  aadhaarStatus: 'Verified via UIDAI DigiLocker',
  aadhaarValid: 'Valid 2028',
  passwordRotated: 'Rotated 3 months ago',
  twoFactorEnabled: true,
  connectedServices: {
    spotify: { name: 'Spotify Music Sync', desc: 'Tailors rave line-ups to top artists', status: 'Connected' },
    google: { name: 'Google SSO', desc: 'dakshagarwal9311@gmail.com', status: 'Linked' },
    apple: { name: 'Apple Sign-In', desc: 'Not connected', status: 'Connect' }
  },
  walletBalance: 4250.00,
  pointsConversionAmount: 2450.00,
  refundBalanceAmount: 1800.00
};

export const MEMBER_STATS = [
  { id: 'passes', label: 'LINE PASSES', value: '03', subtext: 'All wristbands assigned', icon: 'ticket' },
  { id: 'credits', label: 'PULSE CREDITS', value: '2,450 PTS', subtext: '₹2,450 redeemable at bars', icon: 'zap' },
  { id: 'bookmarked', label: 'VIBES BOOKMARKED', value: '14', subtext: '4 secret reveals tonight', icon: 'heart' },
  { id: 'attended', label: 'ATTENDED ACTS', value: '06', subtext: 'Top 5% Delhi Nocturnals', icon: 'sparkles' }
];

export const IMMINENT_PASS = {
  id: 'pass-sunburn-01',
  tag: 'TODAY • 21:00 IST',
  doorsIn: 'DOORS IN 04H 18M',
  tierBadge1: 'VIP ACCESS TIER',
  tierBadge2: 'EXCLUSIVE BACKSTAGE ACCESS',
  title: 'Sunburn Arena ft. Boris Brejcha',
  location: 'Aerocity Grand Arena • Zone A, Private Lounge',
  holder: 'Daksh Agarwal',
  gateZone: 'Gate 04 • Zone A',
  scanCode: 'SRM-992-BBR',
  scanStatus: 'FAST-SCAN READY',
  image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
  perks: [
    '🍸 2 Free Highball Vouchers',
    '🚗 Valet Slot #F4 Reserved'
  ]
};

export const CONCIERGE_ACTIONS = [
  {
    id: 'transfer',
    icon: 'smartphone',
    title: 'Transfer Wristband',
    desc: 'Seamlessly transfer VIP passes to friends via phone number or Showora tag.',
    actionLabel: 'Transfer Pass →'
  },
  {
    id: 'tokens',
    icon: 'wine',
    title: 'Redeem Drink Tokens',
    desc: "You have 2 premium mixology tokens loaded for tonight's VIP lounge area.",
    actionLabel: 'View Bar QR →'
  },
  {
    id: 'concierge',
    icon: 'headphones',
    title: 'Nocturne Concierge',
    desc: 'Instant priority assistance for table upgrades, bottle service & car transfers.',
    actionLabel: 'Chat via WhatsApp →'
  },
  {
    id: 'fastpay',
    icon: 'credit-card',
    title: 'Top Up Fast-Pay',
    desc: 'Add funds to tap your RFID band inside venues. Zero lines, zero cash hassles.',
    actionLabel: 'Recharge Balance →'
  }
];

export const SONIC_RADAR = [
  {
    id: 'radar-1',
    category: 'WAREHOUSE RAVE',
    match: '98% MATCH',
    date: 'FRI, NOV 14 • 22:00',
    title: 'Sub-Zero Session: Tale of...',
    venue: 'The Dhan Mill Warehouse, Chhatarpur',
    desc: 'Deep progressive resonance, 360-degree holographic visual cage, strictly zero...',
    price: 'FROM ₹2,499',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'radar-2',
    category: 'ROOFTOP SUNSET',
    match: '95% MATCH',
    date: 'SAT, NOV 15 • 18:30',
    title: 'Aura Horizon: Sunset...',
    venue: 'Skyline Pavilion, Horizon Plaza, GGN',
    desc: 'Boutique rooftop acoustic session transitioning into deep melodic beats as...',
    price: 'FROM ₹1,899',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'radar-3',
    category: 'SECRET BUNKER',
    match: '92% MATCH',
    date: 'SUN, NOV 16 • 23:00',
    title: 'Kollektiv Nocturne: Red...',
    venue: 'Secret Vault #09 (Location SMS on Day)',
    desc: 'Berlin-grade acoustic pressure, 138 BPM heavy analog rhythm with live percussion',
    price: 'FROM ₹3,200',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'
  }
];

export const RECENT_ACTIVITY_LOG = [
  {
    id: 'act-1',
    title: 'Tier Bonus Points Credited',
    subtext: 'Gold Multiplier 1.5x on Boris Brejcha Booking • 18 Oct',
    impact: '+450 PTS',
    impactColor: '#ff2e93',
    status: 'Settled',
    icon: 'hexagon'
  },
  {
    id: 'act-2',
    title: 'Entry Validated: Neon Dandiya 2.0',
    subtext: 'JLN Stadium Arena • Fast-track VIP Turnstile 02 • 10 Oct',
    impact: 'Attended',
    impactColor: '#94a3b8',
    status: 'Wristband #108',
    icon: 'check'
  },
  {
    id: 'act-3',
    title: 'Mixology Credit Redeemed',
    subtext: 'Vault Lounge Aerocity • 2x Botanical Gin Cocktails • 03 Oct',
    impact: '-600 PTS',
    impactColor: '#f43f5e',
    status: 'Bar Terminal 1',
    icon: 'wine'
  }
];

export const CURRENT_ADMISSIONS = [
  {
    id: 'adm-1',
    title: 'Sunburn Arena ft. Boris Brejcha',
    subtitle: 'Minimal Techno Showcase • High-Tech High-Key Production by Percept Live',
    statusTag: 'CONFIRMED • QR READY',
    ref: '#SHW-882194',
    ticketsIssued: '2 TICKETS ISSUED',
    pill1: 'VIP FAST-TRACK',
    pill2: 'STAGE-SIDE',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    doorCountdown: 'Doors in 4d 18h',
    gate: 'GATE A-04',
    dateTime: 'Nov 14, 2026',
    timeSub: '08:00 PM onwards',
    location: 'Aerocity Arena',
    locationSub: 'Delhi NCR • Zone C',
    tier: 'Gold VIP Pass',
    tierSub: 'Elevated Viewing Deck',
    primaryBtn: 'View Digital Pass',
    secondaryBtn: 'Add to Wallet',
    link1: '▷ Transfer Ticket',
    link2: 'Arena Map'
  },
  {
    id: 'adm-2',
    title: 'Glow Night Marathon — Nagpur 🏃‍♂️✨',
    subtitle: 'Neon 10K & 5K Route with live DJ sound stages at each hydration station.',
    statusTag: 'CONFIRMED • WRISTBAND AT GATE',
    ref: '#SHW-741902',
    ticketsIssued: '2 PASSES',
    pill1: 'NIGHT ATHLETICS',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80',
    doorCountdown: 'BIB #8812 & #8813',
    gate: '10K NIGHT LOOP',
    dateTime: 'Nov 22, 2026',
    timeSub: '08:00 PM Start',
    location: 'Civil Lines Square',
    locationSub: 'Nagpur City Center',
    tier: 'Glow Runner Pass',
    tierSub: 'LED Headband + Finisher Medal',
    primaryBtn: 'View Ticket',
    secondaryBtn: 'Download PDF',
    link1: 'Kit Pickup Hours'
  },
  {
    id: 'adm-3',
    title: 'Ministry of Beer VIP Speakeasy Session',
    subtitle: 'Curated craft brew cocktails, jazz-house grooves, and private sommelier tasting flight.',
    statusTag: 'TABLE RESERVED • MINIMUM SPEND COVERED',
    ref: '#SHW-492180',
    ticketsIssued: 'COMPLIMENTARY MIXOLOGY',
    pill1: 'EXCLUSIVE CONCIERGE',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    doorCountdown: 'Booth 07 Reserved',
    gate: 'UP TO 6 GUESTS',
    dateTime: 'Dec 02, 2026',
    timeSub: '09:30 PM Nightfall',
    location: 'Connaught Place',
    locationSub: 'Inner Circle, Block M',
    tier: 'Reserved Table',
    tierSub: 'Mixologist Round • Canapés',
    primaryBtn: 'Manage Reservation',
    secondaryBtn: 'Invite Crew (+5)',
    link1: 'Direct Host Contact'
  }
];

export const PAST_NOCTURNAL_ARCHIVE = [
  {
    id: 'past-1',
    event: 'Early Bird Warehouse Techno Presale',
    venue: 'The Granary Okhla • Stage 2',
    date: 'Oct 26, 2026',
    tier: 'Pass x2 • General',
    amount: '₹2,400',
    rating: '5.0',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'past-2',
    event: 'Dandiya Night 2.0',
    venue: 'JLN Stadium Grounds • VIP Enclosure',
    date: 'Oct 17, 2026',
    tier: 'Couple Pass',
    amount: '₹1,198',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'past-3',
    event: 'Full Throttle India — Grand Meetup',
    venue: 'Buddh Circuit Grounds • Pit Lane',
    date: 'Oct 10, 2026',
    tier: 'Paddock Pass',
    amount: '₹899',
    rating: '5.0',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=200&q=80'
  }
];

export const TIER_MILESTONES = [
  {
    id: 'bronze',
    name: 'Bronze',
    points: '0 PTS',
    desc: 'Standard booking access, community radar updates.',
    status: 'Unlocked',
    completed: true,
    active: false
  },
  {
    id: 'silver',
    name: 'Silver',
    points: '1,500 PTS',
    desc: '1.25x point multiplier, 12h early bird access to warehouse raves.',
    status: 'Completed',
    completed: true,
    active: false
  },
  {
    id: 'gold',
    name: 'Gold',
    tierTag: 'CURRENT ACTIVE TIER',
    points: '2,450 / 3,000 PTS',
    desc: 'Fast-track entry, curated lounge access, 1.5x point accelerator.',
    status: 'Active Tier',
    completed: false,
    active: true
  },
  {
    id: 'platinum',
    name: 'Platinum',
    points: '5,000 PTS',
    desc: 'Dedicated 24/7 concierge, artist soundcheck passes, secret villas.',
    status: '550 points to unlock Platinum',
    completed: false,
    active: false
  }
];

export const HOW_TO_EARN = [
  {
    id: 'earn-1',
    title: 'Book a Ticket',
    desc: 'Earn 10 reward points per ₹100 spent across all concerts, nightlife raves, and festivals.',
    boost: '10 pts / ₹100 spent ↑',
    icon: 'ticket'
  },
  {
    id: 'earn-2',
    title: 'Attend Events',
    desc: 'Get 2x bonus points and secret badges when you check in at partner venues.',
    boost: '2x check-in bonus ↑',
    icon: 'compass'
  },
  {
    id: 'earn-3',
    title: 'Refer Friends',
    desc: 'Invite your crew and earn +250 bonus points when they book their first vibe.',
    boost: '+250 pts per referral ↑',
    icon: 'users'
  },
  {
    id: 'earn-4',
    title: 'Reach New Tiers',
    desc: 'Unlock zero booking fees, lounge passes, and priority point drops as your tier grows.',
    boost: 'Up to 1.5x boost ↑',
    icon: 'zap'
  }
];

export const REWARDS_AUDIT_LOG = [
  {
    id: 'rw-1',
    type: 'earned',
    title: 'Sunburn Arena ft. Boris Brejcha VIP Pass',
    ref: 'Ref: #SHW-882194 • 2 Tickets Credited',
    classification: 'CREDITED',
    impact: '+500 pts',
    impactColor: '#ff2e93',
    balance: '2,450 pts'
  },
  {
    id: 'rw-2',
    type: 'earned',
    title: 'Glow Night Marathon VIP Entry',
    ref: 'Ref: #SHW-741902 • Community Run Entry',
    classification: 'CREDITED',
    impact: '+250 pts',
    impactColor: '#ff2e93',
    balance: '1,950 pts'
  },
  {
    id: 'rw-3',
    type: 'bonus',
    title: 'VIP Referral Reward – Friend Joined',
    ref: 'Ref: #REF-20419 • R. Kapoor Joined Showora',
    classification: 'BONUS',
    impact: '+150 pts',
    impactColor: '#c084fc',
    balance: '1,700 pts'
  },
  {
    id: 'rw-4',
    type: 'redeemed',
    title: 'Ministry of Beer Cocktail Lounge Pass',
    ref: 'Ref: #SHW-492180 • VIP Table Tap Off Bar',
    classification: 'REDEEMED',
    impact: '-500 pts',
    impactColor: '#f43f5e',
    balance: '1,550 pts'
  },
  {
    id: 'rw-5',
    type: 'earned',
    title: 'Early Bird Warehouse Techno Presale',
    ref: 'Ref: #SHW-112458 • Tier Presale Ticket',
    classification: 'CREDITED',
    impact: '+250 pts',
    impactColor: '#ff2e93',
    balance: '1,050 pts'
  }
];

export const CLAIMABLE_PERKS = [
  {
    id: 'perk-1',
    badge: 'COMPLIMENTARY DRINK',
    badgeClass: 'badge-pink',
    expiry: '⏱ 3 Days Left',
    title: 'Mixologist Signature Cocktail',
    desc: 'Valid at Ministry of Beer (Connaught Place) & 14 partner secret speakeasies across Delhi NCR.',
    codeLabel: 'PASS #MX-8828',
    codeValue: 'ONE-TIME USE',
    buttonLabel: 'Show Barcode',
    buttonPrimary: true
  },
  {
    id: 'perk-2',
    badge: 'F&B CREDIT',
    badgeClass: 'badge-purple',
    expiry: 'Sunburn Arena',
    title: '₹500 Festival Food & Beverage',
    desc: 'Redeemable at any official festival lounge bar or food truck cluster at Buddh International Circuit.',
    codeLabel: 'CODE: FEST-BEAT500',
    codeValue: '₹500 OFF',
    buttonLabel: 'Apply to RFID Wristband',
    buttonPrimary: false
  },
  {
    id: 'perk-3',
    badge: 'GOLD PRIVILEGE',
    badgeClass: 'badge-gold',
    expiry: 'Never Expires',
    title: 'Zero Booking Fee Tokens',
    desc: 'Waives 100% of platform convenience fees and Internet handling surcharges on stadium & headline events.',
    codeLabel: 'Remaining Tokens:',
    codeValue: '••• 3 Left',
    subnote: '⚡ Auto-applies at checkout for highest savings',
    buttonPrimary: false
  }
];

export const SAVED_PAYMENT_METHODS = [
  {
    id: 'pay-1',
    name: 'HDFC Bank Regalia',
    type: 'Visa Infinite • Stored',
    number: '•••• •••• •••• 4829',
    expires: 'Expires 08/29',
    holder: 'Daksh Agarwal',
    isDefault: true,
    tag: 'DEFAULT',
    footerLeft: '⚡ Fast Checkout',
    footerAction: 'Edit'
  },
  {
    id: 'pay-2',
    name: 'ICICI Bank Coral',
    type: 'Mastercard • Backup',
    number: '•••• •••• •••• 1092',
    expires: 'Expires 11/27',
    holder: 'Daksh Agarwal',
    isDefault: false,
    tag: 'Set Default',
    footerLeft: 'Verified by 3D Secure',
    footerAction: 'Remove'
  },
  {
    id: 'pay-3',
    name: 'UPI AutoPay / VPA',
    type: 'Instant Mobile UPI',
    number: 'daksh.agarwal@okhdfcbank',
    expires: 'Primary UPI Handle',
    holder: 'Zero Mandate Fee',
    isDefault: false,
    footerLeft: '📱 1-Tap Mobile Push',
    footerAction: 'Unlink'
  }
];

export const BILLING_INVOICES = [
  {
    id: 'inv-1',
    date: 'Feb 24, 2026',
    txnId: 'TXN-8849261A',
    event: 'Sunburn EDM Nights • Early Bird VIP',
    venue: 'JLN Stadium, Delhi NCR • 2x Passes',
    method: '💳 HDFC •• 4820',
    status: 'COMPLETED',
    statusClass: 'status-completed',
    amount: '₹3,499.00'
  },
  {
    id: 'inv-2',
    date: 'Feb 11, 2026',
    txnId: 'TXN-7391845K',
    event: 'Underground Warehouse Techno Rave',
    venue: 'The Granary Okhla • 1x Backstage All-Access',
    method: 'Showora Wallet',
    status: 'SETTLED',
    statusClass: 'status-settled',
    amount: '₹1,200.00'
  },
  {
    id: 'inv-3',
    date: 'Jan 29, 2026',
    txnId: 'TXN-6182844V',
    event: 'Diwali Party • A Night of Lights, Luxury',
    venue: 'Aerocity Ballroom • Couple Pass',
    method: 'UPI AutoPay',
    status: 'COMPLETED',
    statusClass: 'status-completed',
    amount: '₹4,800.00'
  },
  {
    id: 'inv-4',
    date: 'Jan 14, 2026',
    txnId: 'TXN-4962150R',
    event: 'Secret Rooftop Soundscapes (Rain Cancellation)',
    venue: 'Hauz Khas Social • Full Auto-Refund',
    method: 'Wallet Credit',
    status: 'REFUNDED',
    statusClass: 'status-refunded',
    amount: '+₹1,800.00',
    isRefund: true
  }
];
