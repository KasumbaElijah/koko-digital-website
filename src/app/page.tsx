import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/website/Navbar';
import { HeroSection } from '@/components/website/HeroSection';
import { MethodologySection } from '@/components/website/MethodologySection';
import { SectionDivider } from '@/components/website/SectionDivider';
import { Footer } from '@/components/website/Footer';
import {
  Film,
  Sparkles,
  Layers,
  Camera,
  Compass,
  MessageSquare,
  ArrowRight,
  Calendar,
  Phone,
} from 'lucide-react';

export const metadata = {
  title: 'Koko Digital Studio | We Make Brands Impossible to Ignore',
  description:
    'East Africa’s premier short-form video production and social media management agency. We craft viral 9:16 reels, TikToks, and value-first creative strategies that scale brands across Uganda and Kenya.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '256x256' },
      { url: '/images/koko-avatar.png', type: 'image/png', sizes: '256x256' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Koko Digital Studio | We Make Brands Impossible to Ignore',
    description:
      'Short-form video production, social media management, brand storytelling, and creator masterclasses in Kampala and Nairobi.',
    url: 'https://kokodigitalstudio.com',
    siteName: 'Koko Digital Studio',
    type: 'website',
  },
};

const AGENCY_PAGES = [
  {
    href: '/work',
    badge: '6+ Viral Case Studies',
    title: 'Client Portfolio & Results',
    description:
      'See how we generated millions of organic views and sold-out product drops for Névo Café, Signature Homes, Meat N Bunz, Rolex Datejust & more.',
    cta: 'Explore Client Work',
    icon: Film,
    accent: 'from-red-950/60 via-[#221d25] to-[#1a161d] border-red-700/50',
  },
  {
    href: '/services',
    badge: 'Full-Stack Production',
    title: 'Creative Services & Capabilities',
    description:
      '9:16 short-form video production, end-to-end social media management, brand docu-series, phone videography masterclasses & live analytics.',
    cta: 'View All Services',
    icon: Layers,
    accent: 'from-[#241d29] to-[#1a161d] border-[#362d3a]',
  },
  {
    href: '/packages',
    badge: 'Transparent ROI',
    title: 'Packages & Monthly Retainers',
    description:
      'Compare our Content Sprint, Growth Engine, and Studio Custom retainers, or bundle 4K drone & multi-city shoots with our interactive customizer.',
    cta: 'Compare Packages',
    icon: Sparkles,
    accent: 'from-[#241d29] to-[#1a161d] border-[#362d3a]',
  },
  {
    href: '/models',
    badge: 'Casting Call Open',
    title: 'Models & On-Camera Talent',
    description:
      'We are casting models, creators, and actors in Kampala & Nairobi for paid commercial reels and lifestyle brand shoots. Apply via our official form.',
    cta: 'Apply as a Model',
    icon: Camera,
    accent: 'from-rose-950/60 via-[#241a24] to-[#1a161d] border-rose-600/50',
  },
  {
    href: '/about',
    badge: 'Kampala • Nairobi',
    title: 'Our Story, Manifesto & Careers',
    description:
      'Discover how Koko Digital grew from Kampala into a cross-border creative engine, read our creative manifesto, and apply for open studio roles.',
    cta: 'Read Our Story',
    icon: Compass,
    accent: 'from-[#241d29] to-[#1a161d] border-[#362d3a]',
  },
  {
    href: '/contact',
    badge: 'Fast-Track Booking',
    title: 'Book a Shoot or Discovery Call',
    description:
      'Schedule a 1-on-1 discovery meeting on Calendly, submit an interactive project brief, or chat directly with our studio on WhatsApp.',
    cta: 'Start Your Project',
    icon: MessageSquare,
    accent: 'from-[#241d29] to-[#1a161d] border-[#362d3a]',
  },
];

export default function AgencyHomePage() {
  return (
    <div className="min-h-screen bg-[#151216] text-white selection:bg-red-600 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section with Interactive 9:16 Video Simulator */}
        <HeroSection />

        <SectionDivider label="Explore Koko Digital" />

        {/* 2. Multi-Page Agency Hub */}
        <section className="py-24 bg-[#151216] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Inside The Studio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-serif tracking-tight">
                BUILT TO SCALE{' '}
                <span className="text-red-500 italic font-medium">
                  EVERY DIMENSION
                </span>{' '}
                OF YOUR BRAND.
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Navigate through our dedicated studio pages to explore client case studies, production packages, open model casting, and direct campaign booking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {AGENCY_PAGES.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group rounded-3xl p-7 bg-gradient-to-br ${item.accent} border hover:border-red-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-950/40 hover:-translate-y-1.5 flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:bg-red-600 group-hover:text-white transition-all">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-red-300">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white font-serif mb-2.5 group-hover:text-red-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-extrabold text-red-400 group-hover:text-red-300">
                      <span>{item.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <SectionDivider label="The Koko Framework" />

        {/* 3. The Koko Engine (4-Step Attention & Conversion Methodology) */}
        <MethodologySection />

        {/* 4. Bottom Conversion Section */}
        <section className="py-20 bg-[#151216] border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-red-950/70 via-[#221a24] to-[#17131a] border-2 border-red-600/50 shadow-2xl text-center space-y-6">
              <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
                READY TO MAKE YOUR BRAND{' '}
                <span className="text-red-500 italic">UNMISSABLE?</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
                Schedule a 1-on-1 discovery consultation on Calendly, fill out our project brief, or call our studio line directly at +256 790 654575.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a
                  href="https://calendly.com/akankundavannessa7/koko-digital-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-700/40 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Discovery Meeting</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl text-xs sm:text-sm font-bold text-zinc-200 hover:text-white bg-[#241e28] hover:bg-zinc-800 border border-[#3a3040] flex items-center justify-center gap-2 transition-all"
                >
                  <span>Open Project Brief &amp; Contacts</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+256790654575"
                  className="w-full sm:w-auto px-5 py-4 rounded-2xl text-xs sm:text-sm font-bold font-mono text-zinc-200 hover:text-red-400 bg-[#19151c] border border-zinc-800 flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>+256 790 654575</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
