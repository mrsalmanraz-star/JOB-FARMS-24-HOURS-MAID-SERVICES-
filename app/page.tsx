'use client';

import { motion } from 'motion/react';
import { CyberCard } from '@/components/CyberCard';
import { RevenueTicker } from '@/components/RevenueTicker';
import { Shield, Zap, Globe, Cpu, Database, Lock, ArrowRight, BarChart3, Users, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

export default function JobFarmsSaaS() {
  return (
    <main className="min-h-screen bg-[#05010a] text-white selection:bg-[#00ff26]/30">
      <RevenueTicker />

      {/* Hero Section */}
      <div className="relative pt-20 pb-32 px-6 overflow-hidden">
        {/* Cyber Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#00ff2608_0%,transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex items-center gap-2 px-4 py-1 rounded-full border border-[#00ff26]/20 bg-[#00ff26]/5 text-[#00ff26] text-[10px] font-mono tracking-[0.2em] uppercase"
            >
              Sovereign SaaS Infrastructure
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
            >
              OMNIBUILDER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff26] to-[#711c91]">
                360 LEAD SAAS
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 max-w-2xl text-lg font-light mb-12"
            >
              The ultimate CRM, HRM, and Programmatic SEO engine for domestic staffing. 
              Targeting 2,800+ PIN codes with 100% Ranking #1 capability.
            </motion.p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/dashboard">
                <button className="px-8 py-4 bg-[#00ff26] text-black font-bold rounded-lg hover:bg-[#00ff26]/90 transition-all flex items-center gap-2">
                  ENTER DASHBOARD <ArrowRight size={18} />
                </button>
              </Link>
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all">
                VIEW SEO ENGINE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CyberCard title="360 CRM">
            <LayoutDashboard className="text-[#00ff26] mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Lead Management</h3>
            <p className="text-zinc-500 text-sm">End-to-end tracking from acquisition to conversion with automated follow-ups.</p>
          </CyberCard>
          
          <CyberCard title="HRM ENGINE">
            <Users className="text-[#711c91] mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Employee Sovereignty</h3>
            <p className="text-zinc-500 text-sm">Manage agents, managers, and field staff with integrated performance metrics.</p>
          </CyberCard>

          <CyberCard title="SEO NEXUS">
            <Globe className="text-[#00ff26] mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">2,800 PIN Codes</h3>
            <p className="text-zinc-500 text-sm">Programmatic SEO generating unique, high-ranking pages for every Indian PIN code.</p>
          </CyberCard>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded bg-[#00ff26] flex items-center justify-center text-black font-black italic">JF</div>
            <div>
              <div className="font-bold tracking-tight">JOB FARMS INDIA</div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">OmniBuilder SaaS Framework</div>
            </div>
          </div>
          <div className="flex gap-8 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <a href="#" className="hover:text-[#00ff26] transition-colors">Sitemap Index</a>
            <a href="#" className="hover:text-[#00ff26] transition-colors">White Label SEO</a>
            <a href="#" className="hover:text-[#00ff26] transition-colors">API Docs</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
