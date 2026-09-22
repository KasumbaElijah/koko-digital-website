'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  BarChart3,
  TrendingUp,
  Eye,
  Share2,
  Bookmark,
  Calendar,
  Download,
  ExternalLink,
  Sparkles,
  Flame,
  CheckCircle2,
  Layers,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

interface ClientMetric {
  id: string;
  name: string;
  city: string;
  views: string;
  engagement: string;
  topVideoHook: string;
  inquiries: string;
  growth: string;
}

const CLIENT_DATA: ClientMetric[] = [
  {
    id: 'all',
    name: 'All Studio Clients',
    city: 'Kampala & Nairobi',
    views: '6,840,000+',
    engagement: '8.4%',
    topVideoHook: '“We put 3 patties on a flame grill until the cheese cascaded…” (Meat N Bunz)',
    inquiries: '1,420+ Direct Leads',
    growth: '+412% Organic Growth',
  },
  {
    id: 'nevo',
    name: 'Névo Café',
    city: 'Kampala, UG',
    views: '850,000+',
    engagement: '9.2%',
    topVideoHook: '“The secret to Kampala’s smoothest Spanish Latte isn’t on the menu…”',
    inquiries: '480+ Location DMs',
    growth: '+380% Weekend Foot-Traffic',
  },
  {
    id: 'signature',
    name: 'Signature Homes & Toy Jungle',
    city: 'Kampala, UG',
    views: '1,200,000+',
    engagement: '7.8%',
    topVideoHook: '“Would you replace your kitchen for this Nespresso setup? Vote below!”',
    inquiries: '310+ Product Orders',
    growth: 'Sold Out Product Drops',
  },
  {
    id: 'meatnbunz',
    name: 'Meat N Bunz',
    city: 'Kampala, UG',
    views: '2,100,000+',
    engagement: '11.4%',
    topVideoHook: '“We put 3 patties on a flame grill until the cheese cascaded…”',
    inquiries: '540+ Delivery Requests',
    growth: '+520% Weekly Order Surge',
  },
  {
    id: 'safibay',
    name: 'Safi Bay Cleaners',
    city: 'Kampala, UG',
    views: '790,000+',
    engagement: '8.1%',
    topVideoHook: '“Deep steam cleaning a 5-year-old couch until water turns pitch black…”',
    inquiries: '290+ Home Bookings',
    growth: '+310% Booking Volume',
  },
];

export default function ClientDashboardPage() {
  const [selectedClient, setSelectedClient] = useState<string>('all');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const activeData =
    CLIENT_DATA.find((c) => c.id === selectedClient) || CLIENT_DATA[0];

  const handleSimulateDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#110e13] text-white flex flex-col font-sans">
      {/* Top Portal Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#151216]/95 backdrop-blur-md border-b border-red-950/60 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-bold text-zinc-300 hover:text-white bg-[#1a161e] hover:bg-zinc-800 border border-zinc-800 px-3.5 py-1.5 rounded-xl transition-all group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Agency Website</span>
          </Link>

          <div className="h-4 w-px bg-zinc-800 hidden sm:block" />

          <div className="flex items-center gap-2.5">
            <img
              src="/images/koko-avatar.png"
              alt="Koko Digital"
              className="w-7 h-7 rounded-full border border-white/20"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-black font-serif tracking-tight text-white leading-none">
                KOKO ANALYTICS
              </span>
              <span className="text-[8px] font-mono text-red-400 tracking-widest uppercase mt-0.5">
                Client Intelligence Portal
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-[11px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            <span>Live Data Sync</span>
          </span>

          <a
            href="http://localhost:3000/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-md shadow-red-700/30 transition-all"
            title="Open Dedicated Full Analytics Suite"
          >
            <span>Open Full Suite (Port 3000)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8">
        
        {/* Welcome Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/60 via-[#1f1a23] to-[#161217] border border-red-900/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>Studio Performance Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white font-serif tracking-tight">
              Executive Social Analytics & Content ROI
            </h1>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed">
              Real-time transparency into how Koko Digital’s short-form video campaigns, viral retention scripts, and attention funnels translate into verifiable business growth.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleSimulateDownload}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2a2430] hover:bg-zinc-800 border border-[#3e3445] text-xs font-bold text-zinc-200 hover:text-white transition-all shadow-sm"
            >
              <Download className="w-4 h-4 text-red-400" />
              <span>{downloadSuccess ? 'Generating PDF...' : 'Download Executive Report (PDF)'}</span>
            </button>
          </div>
        </div>

        {/* Client Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {CLIENT_DATA.map((client) => {
            const isSelected = selectedClient === client.id;
            return (
              <button
                key={client.id}
                onClick={() => setSelectedClient(client.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                  isSelected
                    ? 'bg-red-600 text-white shadow-lg shadow-red-700/40 scale-102'
                    : 'bg-[#1a161e] text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800'
                }`}
              >
                <span>{client.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${isSelected ? 'bg-black/30 text-white' : 'bg-zinc-800 text-zinc-400'}`}>
                  {client.city}
                </span>
              </button>
            );
          })}
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-6 rounded-3xl bg-[#1c1720] border border-[#2e2634] shadow-lg space-y-2">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-xs font-semibold">Total Verified Views</span>
              <Eye className="w-4 h-4 text-red-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-white font-serif">{activeData.views}</p>
            <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              <span>100% Organic without paid ads</span>
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#1c1720] border border-[#2e2634] shadow-lg space-y-2">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-xs font-semibold">Average Engagement Rate</span>
              <Flame className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-white font-serif">{activeData.engagement}</p>
            <p className="text-[11px] text-zinc-400 font-medium">
              Industry benchmark: 2.1% (3.9x higher)
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#1c1720] border border-[#2e2634] shadow-lg space-y-2">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-xs font-semibold">Commercial Conversion</span>
              <CheckCircle2 className="w-4 h-4 text-red-500" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-red-400 font-serif">{activeData.growth}</p>
            <p className="text-[11px] text-zinc-400 font-medium">
              Direct store & venue foot-traffic
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#1c1720] border border-[#2e2634] shadow-lg space-y-2">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-xs font-semibold">Direct Customer Inquiries</span>
              <BarChart3 className="w-4 h-4 text-red-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-white font-serif">{activeData.inquiries}</p>
            <p className="text-[11px] text-emerald-400 font-medium">
              Generated via call-to-action funnels
            </p>
          </div>
        </div>

        {/* Content Performance & Format Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Top Performing Video Hook Breakdown */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#1a161e] border border-[#302837] shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white font-serif">
                  Top-Performing Creative Hook
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Algorithm breakdown for {activeData.name}
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-red-950 text-red-400 text-[10px] font-bold border border-red-800/40">
                9:16 Vertical Reel
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#221c25] border border-[#3a3040] space-y-2">
              <p className="text-xs font-bold text-red-400 uppercase tracking-wider">
                First 3-Second Visual & Spoken Hook:
              </p>
              <blockquote className="text-sm text-zinc-200 italic leading-relaxed">
                {activeData.topVideoHook}
              </blockquote>
            </div>

            {/* Retention Bar Breakdown */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-300 font-medium">3-Second Hook Retention</span>
                <span className="font-bold text-emerald-400">76.4% (Viral Tier)</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-zinc-800 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-red-600 to-emerald-500 w-[76.4%]" />
              </div>

              <div className="flex justify-between text-xs pt-2">
                <span className="text-zinc-300 font-medium">Full Video Completion Rate</span>
                <span className="font-bold text-white">44.8% (Benchmark: 18%)</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-zinc-800 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-red-600 to-amber-500 w-[44.8%]" />
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
              <span>Audience Origin: Uganda & Kenya</span>
              <span className="text-red-400 font-bold">Audio: East African Trending Foley</span>
            </div>
          </div>

          {/* Right: Deliverables & Monthly PDF Archive */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#1a161e] border border-[#302837] shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-red-400" />
                <h3 className="text-lg font-bold text-white font-serif">
                  Monthly Performance Audits
                </h3>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Every month, Koko Digital provides a vector-crisp executive PDF report with full campaign retrospectives, post breakdowns, and growth roadmaps.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#221c25] border border-[#382e3e] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/koko-logo-black.png"
                      alt="PDF"
                      className="w-8 h-8 rounded-xl bg-white p-1 object-contain shrink-0"
                    />
                    <div>
                      <p className="text-xs font-bold text-white">Q3 Studio Performance Audit</p>
                      <p className="text-[10px] text-zinc-400">PDF • 14 Pages • Verified KPIs</p>
                    </div>
                  </div>
                  <button
                    onClick={handleSimulateDownload}
                    className="p-2 rounded-xl bg-zinc-800 hover:bg-red-600 hover:text-white text-zinc-300 transition-all"
                    title="Download Report"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#221c25] border border-[#382e3e] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/koko-logo-black.png"
                      alt="PDF"
                      className="w-8 h-8 rounded-xl bg-white p-1 object-contain shrink-0"
                    />
                    <div>
                      <p className="text-xs font-bold text-white">9:16 Video Retention Blueprint</p>
                      <p className="text-[10px] text-zinc-400">PDF • Masterclass Curriculum</p>
                    </div>
                  </div>
                  <button
                    onClick={handleSimulateDownload}
                    className="p-2 rounded-xl bg-zinc-800 hover:bg-red-600 hover:text-white text-zinc-300 transition-all"
                    title="Download Curriculum"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Launch Full Platform Callout */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/70 to-[#2b1f2b] border border-red-800/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Running Separate Platform?</span>
                <span className="text-[10px] font-mono text-emerald-400">Port 3000 Ready</span>
              </div>
              <p className="text-[11px] text-zinc-300 leading-relaxed">
                If your dedicated Analytics Platform microservice is running on port 3000, launch the live database reporting dashboard with full OAuth integration.
              </p>
              <a
                href="http://localhost:3000/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-red-700/40"
              >
                <span>Launch http://localhost:3000/dashboard</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-6 px-4 text-center text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} Koko Digital Studio • Proprietary Analytics Suite • Kampala & Nairobi</p>
      </footer>
    </div>
  );
}
