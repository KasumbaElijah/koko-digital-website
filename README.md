<div align="center">

  <img src="public/images/koko-avatar.png" alt="Koko Digital Studio Logo" width="80" height="80" style="border-radius: 50%;" />

  # Koko Digital Studio — Official Agency Website

  **WE MAKE BRANDS IMPOSSIBLE TO IGNORE.**

  East Africa’s premier short-form video production, social media management, and creative storytelling agency — based in **Kampala, Uganda** & **Nairobi, Kenya**.

  [![Deploy Next.js to GitHub Pages](https://github.com/KasumbaElijah/koko-digital-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/KasumbaElijah/koko-digital-website/actions/workflows/deploy.yml)
  [![Live Site](https://img.shields.io/badge/Live%20Website-GitHub%20Pages-ef4444?style=flat&logo=github)](https://kasumbaelijah.github.io/koko-digital-website/)
  [![Next.js](https://img.shields.io/badge/Next.js-14.2.15-black?style=flat&logo=next.js)](https://nextjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.14-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)

  [**🌐 Explore Live Website**](https://kasumbaelijah.github.io/koko-digital-website/) • [**📊 Client Portal Preview**](https://kasumbaelijah.github.io/koko-digital-website/dashboard/) • [**🛡️ Privacy Policy**](https://kasumbaelijah.github.io/koko-digital-website/privacy/)

</div>

---

## 📖 Overview

**Koko Digital Studio** crafts viral 9:16 vertical video content (Instagram Reels & TikToks), high-converting social campaigns, and community movements for modern businesses across East Africa. No corporate filler — only retention-engineered visual storytelling that generates commercial revenue.

This repository houses the official high-energy agency web platform, built with Next.js 14 App Router, modern Tailwind styling, full keyboard accessibility, and automated GitHub Pages static continuous deployment.

---

## ✨ Key Features & Components

* **📱 Interactive 9:16 Phone Simulator** (`HeroSection.tsx`)  
  Simulates live Instagram Reels & TikTok video playback with real-time waveform audio visualizer, client switcher, dynamic engagement metrics, and play/pause controls.
* **🏆 Proven Client Case Studies** (`PortfolioSection.tsx`)  
  Verified campaign breakdowns for **Névo Café**, **Signature Homes & Toy Jungle**, **Meat N Bunz**, **Safi Bay**, **Kampala Running Movement**, and **Rolex Datejust**. Includes deep-dive modals with backdrop dismissal and keyboard navigation.
* **⚡ The Koko Engine Methodology** (`MethodologySection.tsx`)  
  A 4-step framework detailing the science of attention: *The 3-Second Hook*, *Retention Choreography*, *Sound Design & Foley*, and the *Cult-Action Conversion Funnel*.
* **🎬 Full-Suite Creative Capabilities** (`ServicesSection.tsx`)  
  Showcases 9:16 phone videography, full SMM account takeover, multi-city production roadmaps, and creator masterclass training.
* **💼 Transparent Pricing & Add-on Customizer** (`PackagesSection.tsx`)  
  Tiered service packages with an interactive add-on customizer for extra reels, drone footage, and cross-border shoot days.
* **📜 Creative Manifesto & Studio Spotlight** (`AboutSection.tsx`)  
  The story of Koko Digital's Kampala roots and Nairobi expansion, featuring a live career spotlight for talent recruitment.
* **📊 Client Analytics Portal** (`/dashboard`)  
  A dedicated portal page with live KPI summaries (+412% organic growth, 6.8M+ verified impressions), campaign hook retention analytics, and executive PDF audit download simulators.
* **💬 Direct WhatsApp & Interactive Brief Booking** (`ContactSection.tsx`)  
  Direct 1-click WhatsApp chat link (`< 20 min` response time) and an interactive project brief generator.

---

## 🎨 Design System & Branding

* **Typography**: Editorial Serif ([`Playfair Display`](https://fonts.google.com/specimen/Playfair+Display)) paired with clean sans-serif ([`Plus Jakarta Sans`](https://fonts.google.com/specimen/Plus+Jakarta+Sans)).
* **Color Palette**: Dark studio espresso theme (`#151216`, `#110e13`), accented with signature crimson red (`#EF4444`, `#DC2626`).
* **Official Brand Assets** (`public/images/`):
  * `koko-avatar.png` — High-resolution circular brand avatar.
  * `koko-logo-white.png` — White serif typography on alpha transparency for dark themes.
  * `koko-logo-black.png` — Crisp black serif mark for PDF exports and printable client audits.
  * `koko-logo-red.png` — Signature crimson red brand mark.

---

## 🛠️ Tech Stack

| Technology | Role |
| :--- | :--- |
| **Next.js 14** | React Framework with App Router & Static HTML Export (`output: 'export'`) |
| **React 18** | UI component architecture & hooks |
| **TypeScript** | Type safety across case studies, navigation, and metrics |
| **Tailwind CSS** | Custom responsive styling, animations & dark palette |
| **Lucide React** | Lightweight icons |
| **GitHub Actions** | Automated CI/CD pipeline deploying directly to GitHub Pages |

---

## 🚀 Getting Started Locally

### Prerequisites
* **Node.js**: v18.17 or v20+
* **npm**: v9+

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KasumbaElijah/koko-digital-website.git
   cd koko-digital-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   # Run on port 3001 (to prevent conflict if running the analytics backend on port 3000)
   npm run dev -- -p 3001
   ```

4. **Open in browser**:
   Visit [http://localhost:3001](http://localhost:3001).

---

## 📦 Production Build & Export

To test the static production export locally:

```bash
npm run build
```

This generates an optimized static export in the `./out` directory configured with `.nojekyll` and production base paths ready for hosting on GitHub Pages, Vercel, Netlify, or AWS S3.

---

## 🚢 Continuous Deployment (GitHub Pages)

Deployment is completely automated through **GitHub Actions** ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)):

* Every push to `main` triggers an automatic build with `NEXT_PUBLIC_BASE_PATH=/koko-digital-website`.
* The static output `./out` is uploaded and deployed to GitHub Pages without manual intervention.
* Live deployment can be monitored under the **Actions** tab on GitHub.

---

## 🔗 Official Channels & Links

* 🌐 **Live Website**: [https://kasumbaelijah.github.io/koko-digital-website/](https://kasumbaelijah.github.io/koko-digital-website/)
* 📸 **Instagram**: [@koko_digital_studio](https://www.instagram.com/koko_digital_studio/?hl=en)
* 🎵 **TikTok**: [@koko_digital_studios](https://www.tiktok.com/@koko_digital_studios)
* 💼 **LinkedIn**: [Koko Digital Studios](https://www.linkedin.com/company/koko-digital-studios/home/)
* 📧 **Direct Inquiries**: [kokodigitalstudios@gmail.com](mailto:kokodigitalstudios@gmail.com)

---

<div align="center">
  <sub>Built with pride for East Africa’s boldest brands. © 2026 Koko Digital Studio.</sub>
</div>
