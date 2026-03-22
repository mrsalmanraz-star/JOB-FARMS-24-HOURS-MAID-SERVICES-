'use client';

import { motion } from 'motion/react';

interface CyberCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const CyberCard = ({ children, title, className = "" }: CyberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`
        relative group
        bg-[#0a0212] border border-[#00ff26]/20
        rounded-xl overflow-hidden
        hover:border-[#00ff26]/50 transition-all duration-500
        ${className}
      `}
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Neon Glow */}
      <div className="absolute -inset-px bg-gradient-to-r from-[#00ff26]/0 via-[#00ff26]/10 to-[#00ff26]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6 z-10">
        {title && (
          <h3 className="text-[#00ff26] font-mono text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#00ff26] rounded-full animate-pulse" />
            {title}
          </h3>
        )}
        {children}
      </div>
    </motion.div>
  );
};
