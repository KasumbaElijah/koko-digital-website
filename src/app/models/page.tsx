'use client';

import React from 'react';
import { Navbar } from '@/components/website/Navbar';
import { Footer } from '@/components/website/Footer';
import { Camera, Sparkles, CheckCircle2, ArrowRight, Film, Star, Users, MapPin, Phone } from 'lucide-react';
import { assetPath } from '@/lib/utils';

const CASTING_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScv86tlfXWqADS5NY-IJXTWE_EZoN-HIB6eHq1QHsUBHBENtA/viewform';

const SHOOT_CATEGORIES = [
  {
    title: 'Hospitality, Cafes & Dining',
    description:
      'Aesthetic lifestyle reels for premier cafes, restaurants, lounges, and boutique hotels across Kampala & Nairobi.',
    badge: 'High Frequency',
  },
  {
    title: 'Luxury Retail, Watches & Fashion',
    description:
      'High-concept editorial verticals, lookbooks, and luxury product showcases requiring strong visual poise.',
    badge: 'Editorial & Macro',
  },
  {
    title: 'Real Estate & Modern Living',
    description:
      'Walkthrough hosts and aspirational lifestyle talent for luxury apartments, interiors, and home appliance brands.',
    badge: 'On-Camera Host',
  },
  {
    title: 'Street Culture & Viral Skits',
    description:
      'High-energy creators with natural charisma, expressive reactions, and quick comedic or storytelling timing.',
    badge: 'Personality First',
  },
];

const CASTING_STEPS = [
  {
    step: '01',
    title: 'Submit Your Casting Form',
    description:
      'Complete our official 3-minute Google Form with your contact info, social handles, and recent photos or video links.',
  },
  {
    step: '02',
    title: 'Creative Director Review',
    description:
      'Our production team reviews submissions weekly and categorizes talent by look, energy, and brand fit.',
  },
  {
    step: '03',
    title: 'Get Booked on Client Shoots',
    description:
      'When a matching brand campaign kicks off in Kampala or Nairobi, we reach out directly via WhatsApp with shoot dates and rates.',
  },
];

export default function ModelsPage() {
  return (
    <div className="min-h-screen bg-[#151216] text-white selection:bg-red-600 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Hero Casting Spotlight Card */}
          <div className="rounded-3xl bg-gradient-to-br from-[#2b1522] via-[#1f1622] to-[#17121a] border-2 border-red-600/70 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 right-10 w-80 h-80 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E60039] text-white text-xs font-black uppercase tracking-wider rounded-sm shadow-lg shadow-red-950/60">
                    <Camera className="w-3.5 h-3.5" />
                    <span>OFFICIAL CASTING CALL • OPEN NOW</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-rose-300 bg-rose-950/70 px-3 py-1 rounded-full border border-rose-700/40">
                    Kampala • Nairobi
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-white tracking-tight leading-[1.06]">
                  BECOME THE FACE OF{' '}
                  <span className="text-[#FF1E56] italic">EAST AFRICA’S</span> BOLDEST BRANDS.
                </h1>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
                  Koko Digital Studio is expanding our official roster of models, actors, and on-camera personalities for high-production 9:16 TikToks, Instagram Reels, and commercial brand campaigns.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-zinc-200 bg-[#251b28]/90 px-4 py-3.5 rounded-xl border border-rose-900/40">
                    <CheckCircle2 className="w-4 h-4 text-[#FF1E56] shrink-0" />
                    <span>Paid Commercial Brand Shoots</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-zinc-200 bg-[#251b28]/90 px-4 py-3.5 rounded-xl border border-rose-900/40">
                    <CheckCircle2 className="w-4 h-4 text-[#FF1E56] shrink-0" />
                    <span>Expressive Energy &amp; Camera Presence</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-zinc-200 bg-[#251b28]/90 px-4 py-3.5 rounded-xl border border-rose-900/40">
                    <CheckCircle2 className="w-4 h-4 text-[#FF1E56] shrink-0" />
                    <span>No Prior Modeling Agency Required</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-zinc-200 bg-[#251b28]/90 px-4 py-3.5 rounded-xl border border-rose-900/40">
                    <CheckCircle2 className="w-4 h-4 text-[#FF1E56] shrink-0" />
                    <span>Portfolio &amp; Massive Social Exposure</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="p-8 rounded-3xl bg-[#1c141f]/95 border-2 border-rose-500/50 shadow-2xl space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase font-extrabold tracking-widest text-rose-400">
                        KOKO TALENT ROSTER
                      </p>
                      <h2 className="text-2xl font-bold text-white font-serif mt-1">
                        Apply as a Model
                      </h2>
                    </div>
                    <img
                      src={assetPath('/images/koko-avatar.png')}
                      alt="Koko Digital Studio"
                      className="w-12 h-12 rounded-full border border-white/15 shadow-md"
                    />
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Click below to open our official Google Form and submit your profile, social links, and photos directly to our casting directors.
                  </p>

                  <a
                    href={CASTING_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#E60039] via-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-sm font-extrabold shadow-xl shadow-red-900/50 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-95 group"
                  >
                    <span>Open Official Model Casting Form</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      Kampala &amp; Nairobi
                    </span>
                    <a
                      href="tel:+256790654575"
                      className="flex items-center gap-1 text-zinc-300 hover:text-white font-mono"
                    >
                      <Phone className="w-3 h-3 text-rose-400" />
                      +256 790 654575
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categories We Cast For */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider">
                <Film className="w-3.5 h-3.5" />
                <span>Campaign Categories</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
                WHAT KIND OF SHOOTS <span className="text-red-500 italic">WE CAST FOR</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                We produce diverse vertical cinema every week. Here are the primary categories our casting team matches talent to:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SHOOT_CATEGORIES.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#221d25] border border-[#362d3a] hover:border-red-600/50 transition-all shadow-xl flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-red-950/80 border border-red-800/40 text-[10px] font-bold uppercase tracking-wider text-red-400">
                      {cat.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white font-serif">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <a
                    href={CASTING_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-rose-400 hover:text-rose-300 flex items-center gap-1 pt-2"
                  >
                    <span>Apply for this category</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* 3-Step Casting Process */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#1c1720] border border-[#362d3a] space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
                  HOW THE CASTING PROCESS WORKS
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Simple, transparent, and built for modern creators and models.
                </p>
              </div>
              <a
                href={CASTING_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-extrabold shadow-lg shadow-red-900/40 flex items-center justify-center gap-2 shrink-0 transition-all"
              >
                <span>Submit Your Application Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CASTING_STEPS.map((s) => (
                <div
                  key={s.step}
                  className="p-6 rounded-2xl bg-[#241e29] border border-[#382f40] space-y-2"
                >
                  <span className="text-2xl font-black font-serif text-red-500">
                    {s.step}
                  </span>
                  <h3 className="text-base font-bold text-white font-serif">
                    {s.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
