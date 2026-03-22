'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const RevenueTicker = () => {
  const [revenue, setRevenue] = useState(78429102);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => prev + Math.floor(Math.random() * 1000));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/80 border-y border-[#00ff26]/20 py-2 overflow-hidden whitespace-nowrap">
      <div className="flex items-center gap-8 animate-marquee">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="text-[#00ff26] font-mono text-xs tracking-widest uppercase">Live Revenue Flow:</span>
            <span className="text-white font-mono text-xs">₹{revenue.toLocaleString()}</span>
            <span className="w-1 h-1 bg-zinc-700 rounded-full" />
            <span className="text-[#711c91] font-mono text-xs tracking-widest uppercase">System Load:</span>
            <span className="text-white font-mono text-xs">0.04ms</span>
          </div>
        ))}
      </div>
    </div>
  );
};
