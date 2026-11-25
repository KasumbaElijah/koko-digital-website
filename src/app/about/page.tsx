import React from 'react';
import { Navbar } from '@/components/website/Navbar';
import { AboutSection } from '@/components/website/AboutSection';
import { Footer } from '@/components/website/Footer';

export const metadata = {
  title: 'About Us, Manifesto & Careers | Koko Digital Studio',
  description:
    'Born in Kampala and scaling East Africa’s boldest brands across Uganda and Kenya. Read our creative manifesto and explore open career opportunities.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#151216] text-white selection:bg-red-600 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}
