'use client';

import { motion } from 'motion/react';
import { CyberCard } from '@/components/CyberCard';
import { 
  Users, 
  TrendingUp, 
  Search, 
  Settings, 
  LayoutDashboard, 
  Briefcase, 
  MessageSquare,
  BarChart3,
  Globe,
  ShieldCheck
} from 'lucide-react';
import { RevenueTicker } from '@/components/RevenueTicker';

export default function OmniBuilderDashboard() {
  return (
    <div className="min-h-screen bg-[#05010a] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-black/40 flex flex-col">
        <div className="p-6 border-bottom border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#00ff26] flex items-center justify-center text-black font-black italic">JF</div>
            <div className="font-bold text-sm tracking-tight">OMNIBUILDER</div>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {[
            { icon: LayoutDashboard, label: "360 Dashboard", active: true },
            { icon: TrendingUp, label: "Lead Management" },
            { icon: Users, label: "HRM / Employees" },
            { icon: Briefcase, label: "Worker CRM" },
            { icon: Globe, label: "SEO Engine" },
            { icon: BarChart3, label: "Analytics" },
            { icon: MessageSquare, label: "Communications" },
            { icon: ShieldCheck, label: "Compliance" },
            { icon: Settings, label: "System Config" },
          ].map((item, i) => (
            <button 
              key={i}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                item.active ? 'bg-[#00ff26]/10 text-[#00ff26] border border-[#00ff26]/20' : 'text-zinc-500 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="bg-[#711c91]/10 border border-[#711c91]/20 p-4 rounded-xl">
            <div className="text-[10px] font-mono text-[#711c91] uppercase mb-1">Sovereign Node</div>
            <div className="text-xs font-bold">GENESIS_INF_V3</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <RevenueTicker />
        
        <header className="p-8 flex justify-between items-center border-b border-white/5">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">360 LEAD MANAGEMENT</h1>
            <p className="text-zinc-500 text-sm">SaaS Control Center for 24hoursmaidservices.in</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <Search size={16} className="text-zinc-500" />
              <input className="bg-transparent border-none focus:outline-none text-sm" placeholder="Search Leads..." />
            </div>
            <button className="px-4 py-2 bg-[#00ff26] text-black font-bold rounded-lg text-sm">
              NEW LEAD +
            </button>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: "Total Leads", value: "12,842", trend: "+12%", color: "#00ff26" },
              { label: "Conversion Rate", value: "24.8%", trend: "+2.4%", color: "#711c91" },
              { label: "Active Workers", value: "2,840", trend: "+54", color: "#00ff26" },
              { label: "SEO Ranking #1", value: "482/500", trend: "96.4%", color: "#00ff26" },
            ].map((stat, i) => (
              <CyberCard key={i} className="p-0">
                <div className="p-6">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">{stat.label}</div>
                  <div className="text-2xl font-black" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-[10px] font-mono text-zinc-500 mt-2">{stat.trend} from last month</div>
                </div>
              </CyberCard>
            ))}
          </div>

          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Recent Leads Table */}
            <div className="lg:col-span-8">
              <CyberCard title="Live Lead Stream">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/5">
                        <th className="py-4 text-[10px] font-mono text-zinc-500 uppercase">Lead Name</th>
                        <th className="py-4 text-[10px] font-mono text-zinc-500 uppercase">Service</th>
                        <th className="py-4 text-[10px] font-mono text-zinc-500 uppercase">Location</th>
                        <th className="py-4 text-[10px] font-mono text-zinc-500 uppercase">Status</th>
                        <th className="py-4 text-[10px] font-mono text-zinc-500 uppercase">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { name: "Rahul Sharma", service: "24h Maid", loc: "Delhi (110001)", status: "NEW" },
                        { name: "Priya Gupta", service: "Cook", loc: "Noida (201301)", status: "CONTACTED" },
                        { name: "Amit Verma", service: "Nanny", loc: "Gurgaon (122001)", status: "QUALIFIED" },
                        { name: "Sneha Reddy", service: "Elderly Care", loc: "Delhi (110048)", status: "NEW" },
                      ].map((lead, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                          <td className="py-4 font-medium">{lead.name}</td>
                          <td className="py-4 text-zinc-400">{lead.service}</td>
                          <td className="py-4 text-zinc-400 font-mono text-xs">{lead.loc}</td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded text-[10px] font-mono ${
                              lead.status === 'NEW' ? 'bg-[#00ff26]/10 text-[#00ff26]' : 'bg-[#711c91]/10 text-[#711c91]'
                            }`}>
                              {lead.status}
                            </span>
                          </td>
                          <td className="py-4">
                            <button className="text-[10px] font-mono text-zinc-500 hover:text-white uppercase">Manage</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CyberCard>
            </div>

            {/* SEO Engine Status */}
            <div className="lg:col-span-4 space-y-8">
              <CyberCard title="SEO Engine V3">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-[10px] font-mono text-zinc-500 mb-2">
                      <span>PINCODE INDEXING</span>
                      <span>2,800 / 2,800</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-[#00ff26]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-mono text-zinc-500 mb-2">
                      <span>KEYWORD RANKING #1</span>
                      <span>482 / 500</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-[#00ff26] to-[#711c91] w-[96%]" />
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-white/5 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-500">White Label SEO:</span>
                      <span className="text-[#00ff26]">ENABLED</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-500">Programmatic Gen:</span>
                      <span className="text-[#00ff26]">ACTIVE</span>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard title="HRM Overview">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#711c91]/20 flex items-center justify-center text-[#711c91]">
                      <Users size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold">12 Active Agents</div>
                      <div className="text-[10px] text-zinc-500 uppercase font-mono">Lead Management Team</div>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono uppercase tracking-widest hover:bg-white/10 transition-all">
                    Manage Employees
                  </button>
                </div>
              </CyberCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
