import React from 'react';
import { Navbar } from '@/components/website/Navbar';
import { ServicesSection } from '@/components/website/ServicesSection';
import { MethodologySection } from '@/components/website/MethodologySection';
import { SectionDivider } from '@/components/website/SectionDivider';
import { Footer } from '@/components/website/Footer';

export const metadata = {
  title: 'Creative Services & The Koko Engine | Koko Digital Studio',
  description:
    '9:16 short-form video production, full-stack social media management, brand docu-series, creator masterclasses, and proprietary analytics in Kampala & Nairobi.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#151216] text-white selection:bg-red-600 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        <ServicesSection />
        <SectionDivider label="The Koko Framework" />
        <MethodologySection />
      </main>

      <Footer />
    </div>
  );
}
