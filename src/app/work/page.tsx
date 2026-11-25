import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/website/Navbar';
import { PortfolioSection } from '@/components/website/PortfolioSection';
import { Footer } from '@/components/website/Footer';
import { ArrowRight, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Client Portfolio & Case Studies | Koko Digital Studio',
  description:
    'Explore viral 9:16 Reels, TikTok campaigns, and commercial results produced by Koko Digital Studio in Kampala and Nairobi.',
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#151216] text-white selection:bg-red-600 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        <PortfolioSection />

        {/* Bottom CTA to Packages & Contact */}
        <section className="py-16 bg-[#151216] border-t border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
              READY TO BE OUR NEXT <span className="text-red-500 italic">VIRAL CASE STUDY?</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Whether you are launching a new product, scaling a hospitality destination, or building a high-ticket brand in Kampala or Nairobi, our production squad is ready.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="https://calendly.com/akankundavannessa7/koko-digital-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-700/35 flex items-center justify-center gap-2 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Discovery Meeting</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/packages"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl text-xs sm:text-sm font-bold text-zinc-200 hover:text-white bg-[#1f1a23] hover:bg-zinc-800 border border-[#362d3a] flex items-center justify-center gap-2 transition-all"
              >
                <span>View Packages &amp; Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
