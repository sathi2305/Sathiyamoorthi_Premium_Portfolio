<div align="center">

# S. Portfolio

### Sathiyamoorthi S — Software × AI × Systems

**A cinematic, interactive developer portfolio — six flagship AI systems, one scroll-driven story.**

[![Live Site](https://img.shields.io/badge/🔴_Live_Site-Online-ff3366?style=for-the-badge)](https://sathiyamoorthipremiumportfolio.vercel.app/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-00c896?style=for-the-badge)](LICENSE)

<br/>

### 🔗 [**⚡ VISIT THE LIVE PORTFOLIO ⚡**](https://sathiyamoorthipremiumportfolio.vercel.app/)

**`https://sathiyamoorthipremiumportfolio.vercel.app/`**

<br/>

[Overview](#-overview) · [Experience Highlights](#-experience-highlights) · [Featured Work](#-featured-work) · [Tech Stack](#-tech-stack) · [Running Locally](#-running-locally) · [Deployment](#️-deployment) · [Version History](#-version-history)

</div>

---

## 📌 Overview

This is the personal portfolio of **Sathiyamoorthi S**, a Computer Science undergraduate building AI-powered, full-stack, and real-world software systems. Rather than a static resume page, it's built as a **scroll-driven, cinematic experience** — a 3D floating device mockup in the hero, fanned architecture cards, glowing tech tiles, and six project case studies that stack and reveal one at a time as you scroll.

Every project featured is a real, working system with its own deployed demo and repository — this portfolio exists to showcase them properly, not just list them.

---

## ✨ Experience Highlights

### 🎬 Cinematic Interaction Design
A custom cursor with contextual hover states, magnetic buttons and navigation, a scroll progress indicator, a loading transition, and a full scroll-reveal animation system set the tone from the first second.

### 🧊 3D & Motion Details
A floating device mockup in the hero, 3D hover tilt on project visuals, fanned architecture cards that spread on hover, tilted certificate cards, and scroll-linked 3D section headings.

### 🗂️ Six Deep-Dive Case Studies
Each flagship project gets its own dedicated case-study page — not just a card — with real tech stacks, project status, and links to both the live deployment and the source repository where available.

### ⌨️ Command Palette & Quick Navigation
A `Ctrl` / `Cmd + K` command palette, active-state navigation, back-to-top control, and toast feedback for a desktop-app-grade browsing feel.

### 📄 Résumé, Reimagined
A résumé redesigned to match the portfolio's visual language — dark theme, photo, real tech logos, timeline layout — opening as an in-page overlay (`Esc` to close) or accessible standalone at `resume.html`, with a clean print layout for PDF export.

### 📬 Terminal-Style Contact Form
A contact form styled as a terminal command (`$ java -jar contact.jar --release`) that opens a prefilled email draft — functional, on-brand, and zero backend required.

### 📱 Fully Responsive
A complete responsive layout from desktop down to mobile, with the same interaction quality preserved across breakpoints.

---

## 🏆 Featured Work

| # | Project | Domain | Status |
|:--:|---|---|---|
| 01 | **Autonomous AI Work Agent** | Agentic AI · Workflow Automation | Prototype / active experimentation |
| 02 | **Self-Evolving Monitoring & Control** (Edge Digital Twin) | Digital Twin · Edge AI | Prototype / deployed architecture |
| 03 | **Water Intelligence & Leakage Prevention** (JalRakshak) | AI Agent · Water Intelligence | Live prototype / experimentation |
| 04 | **Campus Issue Intelligence Platform** (CampusPulse) | Full Stack · Real-Time Analytics | Built / deployed workflow |
| 05 | **AI-Assisted Digital Health Platform** (Pharmora) | Healthcare Technology · Full Stack | Prototype |
| 06 | **Rubric-Based Automated Grading** (Assessment Engine) | NLP · Education Technology | Live deployment |

**More systems in progress:** RakshaNet (AI safety & emergency response), CivicTwin AI (digital twin for smarter cities), Quantum-Shield (AI + post-quantum security), HydroSentinel (water quality monitoring), Skilltrack AI (learning & skill improvement), and GenAI Agent (personal assistant concept).

---

## 💼 Experience Highlights (Career)

| Year | Organization | Role |
|---|---|---|
| 2026 | **CODE TECH** | Full Stack Developer Intern — front-end, back-end integration, testing and debugging |
| 2026 | **CODE TECH** | Java Developer Intern — Java modules, object-oriented design, bug fixing and code review |
| 2025 | **Corizo** | Data Science Intern — data cleaning, exploratory analysis, feature engineering and machine learning |

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| **Markup / Styling** | HTML5, CSS3 (custom, no framework) |
| **Interactivity** | Vanilla JavaScript — scroll reveal, cursor effects, magnetic UI, command palette |
| **Fonts** | Space Grotesk, Inter, DM Mono (Google Fonts) |
| **Project Previews** | GitHub Open Graph image service (live repository preview images) |
| **Deployment** | Vercel (also compatible with GitHub Pages / Netlify) |

Technologies showcased across featured projects: Java, Python, JavaScript, TypeScript, React, Node.js, MongoDB, SQL, FastAPI, Git.

---

## 🚀 Running Locally

This is a static site — no build step, no dependencies.

```bash
# 1. Clone the repository
git clone https://github.com/sathi2305/Sathiyamoorthi_Premium_Portfolio.git
cd Sathiyamoorthi_Premium_Portfolio

# 2. Open directly, or serve locally
python -m http.server 5500
```

Then open **http://localhost:5500**

---

## 🗂️ Project Structure

```
Sathiyamoorthi_Premium_Portfolio/
├── index.html              # Main portfolio page (all sections)
├── resume.html             # Standalone résumé page
├── style.css                # Base styles
├── enhance.css / enhance3.css   # V3 / V3.1 interaction & visual layers
├── resume.css                # Résumé-specific styling
├── script.js                # Core interactivity
├── enhance.js / enhance3.js / enhance4.js  # Layered feature additions
├── assets/
│   ├── me.webp              # Profile photo
│   └── icons/                # Tech stack SVG logos
└── projects/                 # Dedicated case-study pages
    ├── gen-ai.html
    ├── edge-digital-twin.html
    ├── jalrakshak.html
    ├── campuspulse.html
    ├── pharmora.html
    └── assessment-engine.html
```

---

## ☁️ Deployment

Deployed on **Vercel** as a static site. Also compatible with GitHub Pages and Netlify with no configuration changes.

**Live URL:** https://sathiyamoorthipremiumportfolio.vercel.app/

> ℹ️ Project preview images load from GitHub's Open Graph image service at runtime. To use literal application screenshots instead, replace each project's `image` URL in `index.html` and its case-study page.

---

## 📜 Version History

- **V1** — Original portfolio baseline
- **V3** — Repository-linked preview images, six dedicated case-study pages, live-preview links, 3D hover tilt, magnetic buttons, custom cursor, scroll progress, loading transition, scroll reveal system, architecture visualization, responsive layout, résumé page
- **V3.1** — Aurora glow + interactive constellation canvas in hero, typewriter role line, count-up stats, cursor spotlight, scroll-linked 3D headings, active nav state, project filter chips, carousel controls, command palette (`Ctrl`/`Cmd + K`), back-to-top, toast feedback
- **V4** — Profile photo integrated into hero and About section, real tech logos throughout, scroll-stacking project cards with built-in UI mockups, modern gradient theme
- **V4.1** — Résumé redesigned to match the portfolio and opens as an in-page overlay; "Download PDF" via clean browser print layout

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.

---

## 👤 Author

**Sathiyamoorthi S**

[![GitHub](https://img.shields.io/badge/GitHub-sathi2305-181717?style=flat-square&logo=github)](https://github.com/sathi2305)

---

<div align="center">

### ⭐ If you like this portfolio, consider starring the repository.

**[🚀 Visit the Live Portfolio](https://sathiyamoorthipremiumportfolio.vercel.app/)**

*Built, tested, iterated.*

</div>
