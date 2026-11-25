'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/website/Navbar';
import { Footer } from '@/components/website/Footer';
import { Lock, ArrowLeft } from 'lucide-react';

export default function ClientDashboardDisabledPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/');
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-[#151216] text-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 pt-24 pb-16">
        <div className="max-w-md w-full p-8 rounded-3xl bg-[#221d25] border border-[#362d3a] text-center space-y-5 shadow-2xl">
          <div className="w-12 h-12 rounded-2xl bg-red-600/15 border border-red-500/30 text-red-500 flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold font-serif text-white">
            Client Portal Currently Offline
          </h1>
          <p className="text-xs text-zinc-400 leading-relaxed">
            The public Client Portal has been disabled on the agency website. Redirecting you to the Koko Digital Studio homepage...
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
