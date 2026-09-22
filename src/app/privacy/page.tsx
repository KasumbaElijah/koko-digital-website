'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#151216] text-white flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#151216]/95 backdrop-blur-md border-b border-red-950/60 px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs font-bold text-zinc-300 hover:text-white bg-[#1a161e] hover:bg-zinc-800 border border-zinc-800 px-3.5 py-1.5 rounded-xl transition-all group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Agency Website</span>
        </Link>

        <div className="flex items-center gap-2.5">
          <img
            src="/images/koko-avatar.png"
            alt="Koko Digital"
            className="w-7 h-7 rounded-full border border-white/20"
          />
          <span className="text-xs font-serif font-black text-white">KOKO DIGITAL</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 w-full space-y-8">
        <div className="space-y-3 border-b border-zinc-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Trust & Confidentiality</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white font-serif">
            Privacy Policy & Brand Confidentiality
          </h1>
          <p className="text-xs text-zinc-400">
            Last updated: September 2026 • Koko Digital Studio (Kampala & Nairobi)
          </p>
        </div>

        <div className="space-y-6 text-sm text-zinc-300 leading-relaxed">
          <div className="p-6 rounded-2xl bg-[#1c1720] border border-[#2d2432] space-y-2">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-red-400" />
              <span>1. Client Media & Production Confidentiality</span>
            </h2>
            <p className="text-xs text-zinc-300">
              All unreleased brand footage, raw 4K camera captures, unannounced product launches, and client audio assets captured during Koko Digital production shoots remain strictly confidential. No footage is published without explicit brand review and greenlight.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1c1720] border border-[#2d2432] space-y-2">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Eye className="w-4 h-4 text-red-400" />
              <span>2. Project Briefs & WhatsApp Contact Data</span>
            </h2>
            <p className="text-xs text-zinc-300">
              Information submitted through our project brief forms (brand name, email, WhatsApp contact details, budget parameters) is used exclusively by our creative director to formulate campaign roadmaps and respond to your shoot inquiry. We never sell, share, or disclose client contact data to third-party ad networks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1c1720] border border-[#2d2432] space-y-2">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-red-400" />
              <span>3. Analytics & Reporting Telemetry</span>
            </h2>
            <p className="text-xs text-zinc-300">
              Our proprietary client analytics portal aggregates publicly visible engagement metrics (views, retention duration, share ratios) to generate executive PDF audits. Client accounts are protected via authenticated session tokens.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 text-center">
          <p className="text-xs text-zinc-400 mb-4">Have questions about your brand confidentiality?</p>
          <a
            href="mailto:kokodigitalstudios@gmail.com"
            className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold inline-block shadow-md shadow-red-700/40"
          >
            Contact Privacy Officer: kokodigitalstudios@gmail.com
          </a>
        </div>
      </main>

      <footer className="border-t border-zinc-900 py-6 px-4 text-center text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} Koko Digital Studio • Kampala & Nairobi</p>
      </footer>
    </div>
  );
}
