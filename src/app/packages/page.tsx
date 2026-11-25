import React from 'react';
import { Navbar } from '@/components/website/Navbar';
import { PackagesSection } from '@/components/website/PackagesSection';
import { Footer } from '@/components/website/Footer';

export const metadata = {
  title: 'Packages & Pricing | Koko Digital Studio',
  description:
    'Transparent short-form video production packages and monthly social media growth retainers for bold brands across East Africa.',
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-[#151216] text-white selection:bg-red-600 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        <PackagesSection />
      </main>

      <Footer />
    </div>
  );
}
