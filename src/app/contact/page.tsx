import React from 'react';
import { Navbar } from '@/components/website/Navbar';
import { ContactSection } from '@/components/website/ContactSection';
import { Footer } from '@/components/website/Footer';

export const metadata = {
  title: 'Contact Us & Book a Discovery Meeting | Koko Digital Studio',
  description:
    'Start your project brief, schedule a 1-on-1 discovery meeting on Calendly, or reach our Kampala and Nairobi production teams directly on WhatsApp (+256 790 654575).',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#151216] text-white selection:bg-red-600 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
