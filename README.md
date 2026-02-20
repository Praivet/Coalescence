<div align="center">

<br />

# ◈ COALESCENCE

### Next-Generation Intelligence Platform

*Bridging human intuition with artificial cognition.*

<br />

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Flexbox%20%2B%20Grid-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

<br />

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Pages Overview](#pages-overview)
- [Third-Party Components](#third-party-components)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Responsive Design](#responsive-design)
- [Naming Conventions](#naming-conventions)
- [Design Inspiration](#design-inspiration)
- [Tutorials & References](#tutorials--references)
- [License](#license)

---

## 🧠 About The Project

**COALESCENCE** is a futuristic AI platform landing page built with **React + Vite**. The project showcases a complete multi-page web application with a dark, high-contrast aesthetic — black backgrounds, orange (`#ed6a2d`) accents, and custom typography (`Coolvetica` + `Induction`).

The site presents a fictional next-generation intelligence company with sections covering its AI models, research publications, company history, and future vision.

**Key design principles:**
- Retro-futuristic dark aesthetic
- Parallax scroll effects on the hero section
- Fully responsive layout using Flexbox and CSS Media Queries
- Reusable `Header` and `Footer` components shared across all pages

---

## 📄 Pages Overview

### `/` and `/home` — Home
The main landing page. Features a full-screen hero with a tablet mockup and parallax effect, an animated rotating text headline, a spotlight card carousel, a scroll-velocity text strip, a stats section (array of JSON objects rendered dynamically), and an "About" section with company description and navigation CTAs.

### `/ai` — AI
Presents the three core AI models (NEXUS CORE, APEX VISION, SYNAPSE NET) in a card grid rendered from a data array. Includes an animated hero orb, model stats, and a capabilities section with SVG icons.

### `/research` — Research
Lists published research papers filterable by category using interactive tab buttons. Includes a stats banner (papers, researchers, partner universities, citations) and a chronological paper list rendered from a data array.

### `/history` — History
Tells the company story through a vertical CSS timeline rendered from a data array of events. Includes a founding quote section and a two-column narrative layout.

### `/tomorrow` — The Tomorrow
Full-screen hero section with the company vision, a three-pillar philosophy grid, a four-phase product roadmap, and a final CTA section with links to join the team.

---

## 📦 Third-Party Components

| Component | Description | Link |
|-----------|-------------|------|
| **React Router DOM v6** | Client-side routing between all pages | [npmjs.com/package/react-router-dom](https://www.npmjs.com/package/react-router-dom) |
| **BackgroundBeams** | Animated beam background for the hero section | [ui.aceternity.com/components/background-beams](https://ui.aceternity.com/components/background-beams) |
| **ScrollVelocity** | Horizontally scrolling velocity text strip | [motion.dev](https://motion.dev) |
| **RotatingText** | Animated word cycling in the hero headline | Custom component using [Framer Motion](https://www.framer.com/motion/) |
| **Carousel / SpotlightCard** | Interactive spotlight-effect card carousel | [ui.aceternity.com](https://ui.aceternity.com) |

---

## 🗂 Project Structure

```
COALESCENCE/
└── src/
    ├── assets/
    │   ├── fonts/
    │   │   ├── Coolvetica Rg.otf
    │   │   └── Induction.otf
    │   └── images/
    ├── components/
    │   ├── footer/
    │   │   ├── Footer.jsx
    │   │   └── Footer.css
    │   ├── header/
    │   │   ├── Header.jsx
    │   │   └── Header.css
    │   └── ui/
    │       ├── background-beams/
    │       ├── carousel/
    │       ├── rotating-text/
    │       └── scroll-velocity/
    ├── lib/
    │   └── utils.js
    ├── pages/
    │   ├── home/
    │   │   ├── Home.jsx
    │   │   └── Home.css
    │   ├── ai/
    │   │   ├── Ai.jsx
    │   │   └── Ai.css
    │   ├── research/
    │   │   ├── Research.jsx
    │   │   └── Research.css
    │   ├── history/
    │   │   ├── History.jsx
    │   │   └── History.css
    │   └── tomorrow/
    │       ├── Tomorrow.jsx
    │       └── Tomorrow.css
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    └── index.css
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18.x`
- npm `>= 9.x`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/COALESCENCE.git

# 2. Navigate into the project
cd COALESCENCE

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at:
- **`http://localhost:5173`** — Home page
- **`http://localhost:5173/home`** — Redirects to `/`
- **`http://localhost:5173/ai`** — AI page
- **`http://localhost:5173/research`** — Research page
- **`http://localhost:5173/history`** — History page
- **`http://localhost:5173/tomorrow`** — The Tomorrow page

---

## 📱 Responsive Design

The layout is fully responsive using **CSS Flexbox**, **CSS Grid**, and **Media Queries**. Breakpoints used:

| Breakpoint | Target |
|------------|--------|
| `max-width: 1400px` | Large desktops |
| `max-width: 1024px` | Tablets landscape |
| `max-width: 768px` | Tablets portrait / large phones |
| `max-width: 480px` | Small phones |

On mobile, multi-column grids collapse to single columns, the visual orb in the About section is hidden, and font sizes are scaled down progressively.

---

## 🏷 Naming Conventions

This project follows a strict set of naming conventions for consistency:

| Element | Convention | Example |
|---------|-----------|---------|
| Folders | `kebab-case` | `background-beams/` |
| Component files | `PascalCase` | `Header.jsx`, `Footer.css` |
| CSS files | `PascalCase` | `Home.css` |
| CSS classes / ids | `kebab-case` | `.home-stat-item` |
| JS variables | `camelCase` | `scrollY`, `parallaxOffset` |
| Boolean variables | `is` / `has` prefix | `isActive`, `hasError` |
| JS utility files | `kebab-case` | `utils.js` |
| Routes | `kebab-case` | `/the-tomorrow` |

---

## 🎨 Design Inspiration

The visual design was inspired by futuristic UI/UX concepts for AI and tech platforms.

- **Figma Design Reference:** [Add your Figma link here]
- **Color Palette:** `#000000` background · `#ed6a2d` accent · `#ffffff` text
- **Typography:** `Coolvetica` (display headings) + `Induction` (labels, UI elements)

---

## 📚 Tutorials & References

- [React Router DOM — Official Docs](https://reactrouter.com/en/main)
- [Framer Motion — Animation Library](https://www.framer.com/motion/)
- [Aceternity UI — Component Inspiration](https://ui.aceternity.com)
- [Best README Template by othneildrew](https://github.com/othneildrew/Best-README-Template)
- [Shopify — Web Image Optimization Guide](https://www.shopify.com/es/blog/imagenes-para-web-tamano)
- [CSS Flexbox Guide — CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Clean Code Principles](https://www.hostgator.mx/blog/clean-code-codigo-limpio/)

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">

Made with ◈ by **COALESCENCE**

</div>
