import React from 'react';
import { LandingCopy } from '../types';
import { ArrowRight, CircuitBoard } from 'lucide-react';

interface HeroProps {
  copy: LandingCopy;
  onCtaClick: () => void;
}

const CircuitPattern = () => (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
                {/* Dark Purple Background for Pattern */}
                <rect width="100" height="100" fill="#2E0249" opacity="0.4" />
                {/* Circuit Lines */}
                <path d="M10 10 H30 V30 H10 Z" fill="none" stroke="#6D28D9" strokeWidth="1" />
                
                {/* Animated Flowing Line */}
                <path d="M30 30 H50 V50" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.5" strokeDasharray="4 4" className="animate-dash" />
                
                <path d="M70 10 V40 H90" fill="none" stroke="#6D28D9" strokeWidth="1" />
                <path d="M10 70 H40 V90" fill="none" stroke="#6D28D9" strokeWidth="1" />
                
                {/* Faint pulsing box */}
                <path d="M60 60 H90 V90 H60 Z" fill="none" stroke="#4B0082" strokeWidth="2" opacity="0.5" className="animate-pulse" />
                
                {/* Pulsing Nodes */}
                <circle cx="30" cy="30" r="2" fill="#FFD700" opacity="0.8" className="animate-pulse" />
                <circle cx="70" cy="40" r="2" fill="#6D28D9" className="animate-pulse" style={{ animationDelay: '1s' }} />
                <circle cx="40" cy="90" r="2" fill="#6D28D9" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
);

export const Hero: React.FC<HeroProps> = ({ copy, onCtaClick }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-warho-dark pt-20">
      {/* Warhol-Style Abstract Circuit Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
         <CircuitPattern />
         <div className="absolute inset-0 bg-gradient-to-t from-warho-dark via-transparent to-transparent"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-warho-dark/80 via-transparent to-warho-dark"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm animate-in fade-in slide-in-from-top-4 duration-700 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <CircuitBoard size={16} className="text-warho-yellow" />
          <span className="text-sm font-bold text-white tracking-wide uppercase">Enterprise AI for Small Business</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight max-w-5xl mx-auto animate-in fade-in zoom-in-95 duration-700 delay-100 drop-shadow-2xl">
          {copy.heroHeadline.split(' ').map((word, i) => {
             const isHighlight = i % 3 === 1 || word.length > 9;
             return (
                <span key={i} className={isHighlight ? "text-warho-yellow" : "text-white"}>
                  {word}{' '}
                </span>
             );
          })}
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          {copy.heroSubheadline}
        </p>

        <button 
          onClick={onCtaClick}
          className="group relative inline-flex items-center justify-center px-10 py-5 font-black text-black transition-all duration-200 bg-warho-yellow rounded-lg hover:bg-yellow-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-gray-900 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 text-lg"
        >
          <span>{copy.ctaText}</span>
          <ArrowRight className="w-6 h-6 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};