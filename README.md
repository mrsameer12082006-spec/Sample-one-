# Showora 🎟️✨

> **"You Book the Vibe, We Handle the Rest"**  
> *A high-fidelity, frontend-only recreation of the Showora live event discovery & ticketing platform, crafted to 1:1 precision with the official Figma prototype design.*

---

## 🌟 Overview

**Showora** is a sleek, modern web platform designed for discovering and booking live music festivals, comedy nights, arena concerts, movies, sports marathons, and theatre experiences. The interface features a dark cosmic visual language infused with authentic glassmorphism, glowing typography, smooth section transitions, and responsive controls.

---

## 🚀 Key Features & Highlights

- **Celestial Hero Section**:
  - Exact Figma cosmic background asset featuring twinkling starry nebulae, a glowing purple moon, and concert crowds.
  - Symmetrical header spacing with smooth edge alignment.
  - Tagline with Google Dancing Script cursive accents and neon specular glow.
  - Category selector pills (`ALL`, `MUSIC`, `COMEDY`, `MOVIES`, `THEATRE`, `SPORTS`).

- **Glassmorphic Navigation Bar**:
  - Sticky glass header with `backdrop-filter: blur(20px)` and subtle rim highlight.
  - Location badge pill with city selector.
  - Real-time event search input with clear trigger.
  - Custom dark plum translucent `JOIN` capsule button with specular rim lighting matching the Figma design.

- **Festival Spotlight Carousel**:
  - Borderless hero card with smooth dark vignette overlay.
  - Top-right corner upward `SPONSORED` glass badge.
  - Interactive next/prev navigation arrows and pagination dot indicator.

- **Trending City Beats & Events Grid**:
  - Event cards featuring real live production poster art.
  - Categorized tag pills (`GENERAL`, `PREMIUM`, `EARLY BIRD`).
  - Event details (dates, venues, hosts, pricing chips).
  - In-place wishlist heart toggles with animated states.

- **Platform Architecture & Trust**:
  - *Why Choose Showora?* 4-card feature breakdown (Instant Booking, Bank-grade Security, Digital Tickets, 24/7 Concierge Support).
  - *How It Works* 3-step timeline with glowing gradient step badges.
  - *Loved by the Community* authentic testimonial review cards with 5-star ratings.

- **Interactive Smooth Scrolling & Static Control**:
  - Navigation links (`Events`, `Movies`, `Showora` brand logo, `Explore Events`, `Browse Movies`, `Get Started Now`) execute smooth in-page scrolling.
  - Footer `› Movies` and `› Events` links automatically scroll to the events section and set the active category filter.
  - Action buttons (`JOIN`, `Book Now`, etc.) are configured as clean, non-disruptive static triggers ready for future backend/routing integrations.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler & Build Tool**: [Vite 5](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/) + Lightweight inline SVG brand icons
- **Typography**: [Google Fonts](https://fonts.google.com/) (*Poppins* 300–900 & *Dancing Script* 400, 700)
- **Styling**: Modular CSS3 with CSS Custom Properties, multi-layer backdrop filters, glassmorphic specular insets, and responsive Flexbox/Grid layouts.

---

## 📁 Directory Structure

```
Showora/
├── public/
│   ├── hero-bg.jpg              # Exact Figma hero background asset
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── hero-bg.jpg
│   ├── main.jsx                 # Core application component & data structures
│   └── styles.css               # Design system, glassmorphism, & responsive styles
├── index.html                   # HTML entry point with Google Fonts preconnect
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite React configuration
├── .gitignore                   # Ignored files (node_modules, dist, logs, etc.)
└── README.md                    # Project documentation
```

---

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.0.0 or higher recommended)
- `npm` or `pnpm`

### Installation

```bash
# Navigate to the project directory
cd Showora

# Install dependencies
npm install
```

### Development Server

Start the local development server with hot-module replacement (HMR):

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Production Build

Compile and optimize the frontend for production:

```bash
npm run build
```

The production assets will be generated in the `dist/` directory.

### Preview Production Build

Serve the built production assets locally:

```bash
npm run preview
```

---

## 🎨 Design Tokens

| Token | Value | Description |
|---|---|---|
| `--bg-dark` | `#070214` | Deep midnight canvas background |
| `--bg-card` | `#0f0524` | Solid glass-tinted card surface |
| `--bg-pill` | `#150930` | Category & filter pill background |
| `--accent-pink` | `#ff007a` | Primary brand neon magenta |
| `--accent-purple`| `#a855f7` | Secondary electric violet |
| `--font-sans` | `'Poppins', sans-serif` | Clean geometric body & headings |
| `--font-script` | `'Dancing Script', cursive`| Brand signature & live glow accents |

---

## 📄 License

This project is created for demonstration and portfolio purposes. All event artwork and brand identifiers belong to their respective copyright holders.
