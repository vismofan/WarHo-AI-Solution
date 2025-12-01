import React from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { ROICalculator } from './ROICalculator';
import { LandingCopy } from '../types';

interface ValueProps {
  customContent?: LandingCopy['valueSection'];
}

const PiggyBankGraphic = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Background Burst */}
    <g transform="translate(100 100)">
      {[...Array(12)].map((_, i) => (
        <path key={i} d="M0 0 L 100 -20 L 100 20 Z" fill={i % 2 === 0 ? '#4B0082' : '#330066'} transform={`rotate(${i * 30})`} opacity="0.2" />
      ))}
    </g>
    
    {/* Chart Bars Behind */}
    <rect x="20" y="100" width="30" height="60" fill="#4B0082" stroke="black" strokeWidth="2" />
    <rect x="60" y="70" width="30" height="90" fill="#6B21A8" stroke="black" strokeWidth="2" />
    <rect x="100" y="40" width="30" height="120" fill="#9333EA" stroke="black" strokeWidth="2" />
    <path d="M 140 160 L 140 20 L 170 40 L 140 60" fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

    {/* Piggy Bank Body */}
    <path d="M 40 110 C 20 110, 10 140, 20 160 L 30 180 H 50 L 50 160 H 130 L 130 180 H 150 L 160 160 C 180 150, 190 120, 170 100 C 160 90, 150 90, 140 95 L 145 80 L 130 85 C 120 70, 80 70, 60 85 C 50 85, 30 90, 40 110 Z" 
          fill="#FFD700" stroke="black" strokeWidth="4" />
    
    {/* Snout */}
    <ellipse cx="165" cy="115" rx="10" ry="12" fill="#FFAB00" stroke="black" strokeWidth="2" />
    <circle cx="162" cy="112" r="2" fill="black" />
    <circle cx="162" cy="118" r="2" fill="black" />

    {/* Eye */}
    <circle cx="140" cy="100" r="4" fill="black" />
    
    {/* Dollar Sign */}
    <circle cx="95" cy="125" r="20" fill="white" stroke="black" strokeWidth="2" />
    <text x="95" y="135" fontSize="30" fontWeight="900" textAnchor="middle" fill="#000">$</text>

    {/* Coin Drop */}
    <rect x="85" y="40" width="20" height="6" fill="#FFD700" stroke="black" strokeWidth="2" transform="rotate(45 95 43)" />
    <path d="M 95 43 L 95 75" stroke="white" strokeWidth="2" strokeDasharray="4 2" />
  </svg>
);

// --- Custom Methodology Icons (High Fidelity Pop Art) ---

const AssessIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dotPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="#000" opacity="0.1" />
      </pattern>
    </defs>
    
    {/* Main Box */}
    <rect x="5" y="5" width="90" height="90" rx="12" fill="#FFD700" stroke="black" strokeWidth="4" />
    <rect x="5" y="5" width="90" height="90" rx="12" fill="url(#dotPattern)" opacity="0.5" />

    {/* Document/Data Sheet */}
    <rect x="25" y="25" width="50" height="50" fill="white" stroke="black" strokeWidth="3" />
    <line x1="32" y1="35" x2="68" y2="35" stroke="black" strokeWidth="3" strokeLinecap="round" />
    <line x1="32" y1="45" x2="68" y2="45" stroke="black" strokeWidth="3" strokeLinecap="round" />
    <line x1="32" y1="55" x2="55" y2="55" stroke="black" strokeWidth="3" strokeLinecap="round" />
    
    {/* Magnifying Glass */}
    <g transform="translate(45, 45)">
        <circle cx="15" cy="15" r="14" fill="#4B0082" stroke="black" strokeWidth="3" opacity="0.9" />
        <line x1="25" y1="25" x2="38" y2="38" stroke="black" strokeWidth="5" strokeLinecap="round" />
        {/* Glass reflection */}
        <path d="M 8 15 Q 15 8 22 15" fill="none" stroke="white" strokeWidth="2" opacity="0.6" />
    </g>
  </svg>
);

const ArchitectIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="90" height="90" rx="12" fill="#FFD700" stroke="black" strokeWidth="4" />
    
    {/* Blueprint Grid Lines */}
    <path d="M 15 25 H 85 M 15 45 H 85 M 15 65 H 85" stroke="black" strokeWidth="1" opacity="0.2" />
    <path d="M 25 15 V 85 M 45 15 V 85 M 65 15 V 85" stroke="black" strokeWidth="1" opacity="0.2" />
    
    {/* Ruler */}
    <rect x="20" y="70" width="60" height="12" fill="#FFF" stroke="black" strokeWidth="3" transform="rotate(-5 50 76)" />
    <line x1="25" y1="70" x2="25" y2="75" stroke="black" strokeWidth="2" transform="rotate(-5 50 76)" />
    <line x1="35" y1="70" x2="35" y2="75" stroke="black" strokeWidth="2" transform="rotate(-5 50 76)" />
    <line x1="45" y1="70" x2="45" y2="75" stroke="black" strokeWidth="2" transform="rotate(-5 50 76)" />

    {/* Gear */}
    <g transform="translate(50, 40)">
        <circle cx="0" cy="0" r="18" fill="#4B0082" stroke="black" strokeWidth="3" />
        <path d="M -22 0 H -15 M 15 0 H 22 M 0 -22 V -15 M 0 15 V 22" stroke="black" strokeWidth="4" strokeLinecap="round" />
        <path d="M -15 -15 L -11 -11 M 11 11 L 15 15 M 15 -15 L 11 -11 M -11 11 L -15 15" stroke="black" strokeWidth="4" strokeLinecap="round" />
        <circle cx="0" cy="0" r="6" fill="#FFF" stroke="black" strokeWidth="3" />
    </g>
  </svg>
);

const DeployIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="90" height="90" rx="12" fill="#FFD700" stroke="black" strokeWidth="4" />
    
    {/* Rocket */}
    <g transform="translate(50, 45) rotate(45)">
       {/* Body */}
       <path d="M 0 -25 C 0 -25 14 0 14 15 C 14 22 8 28 0 28 C -8 28 -14 22 -14 15 C -14 0 0 -25 0 -25 Z" fill="white" stroke="black" strokeWidth="3" />
       
       {/* Window */}
       <circle cx="0" cy="0" r="5" fill="#4B0082" stroke="black" strokeWidth="2" />
       
       {/* Fins */}
       <path d="M -14 15 L -22 24 L -10 22" fill="#4B0082" stroke="black" strokeWidth="3" strokeLinejoin="round" />
       <path d="M 14 15 L 22 24 L 10 22" fill="#4B0082" stroke="black" strokeWidth="3" strokeLinejoin="round" />
       
       {/* Flame */}
       <path d="M -6 28 Q 0 45 6 28 L 0 32 Z" fill="#FF4500" stroke="black" strokeWidth="2" />
    </g>

    {/* Smoke Clouds */}
    <circle cx="30" cy="75" r="8" fill="white" stroke="black" strokeWidth="2" />
    <circle cx="45" cy="80" r="10" fill="white" stroke="black" strokeWidth="2" />
    <circle cx="60" cy="75" r="7" fill="white" stroke="black" strokeWidth="2" />
    
    {/* Motion lines */}
    <path d="M 20 20 L 30 30" stroke="black" strokeWidth="3" strokeLinecap="round" />
    <path d="M 80 20 L 70 30" stroke="black" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const SecureIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="90" height="90" rx="12" fill="#FFD700" stroke="black" strokeWidth="4" />
    
    {/* Shield */}
    <g transform="translate(50, 50) scale(0.7)">
        <path d="M 0 -45 L 35 -25 V 15 C 35 40 0 55 0 55 C 0 55 -35 40 -35 15 V -25 L 0 -45 Z" fill="#4B0082" stroke="black" strokeWidth="4" strokeLinejoin="round" />
        
        {/* Padlock Body inside Shield */}
        <rect x="-12" y="-5" width="24" height="20" rx="2" fill="white" stroke="black" strokeWidth="3" />
        <path d="M -8 -5 V -12 A 8 8 0 0 1 8 -12 V -5" fill="none" stroke="black" strokeWidth="3" />
        <circle cx="0" cy="5" r="2" fill="black" />
        
        {/* Shine */}
        <path d="M 15 -25 L 25 -20" stroke="white" strokeWidth="2" opacity="0.3" />
    </g>

    {/* Circuit nodes decoration */}
    <circle cx="20" cy="50" r="3" fill="black" />
    <line x1="20" y1="50" x2="35" y2="50" stroke="black" strokeWidth="2" />
    
    <circle cx="80" cy="50" r="3" fill="black" />
    <line x1="80" y1="50" x2="65" y2="50" stroke="black" strokeWidth="2" />
  </svg>
);

const ArrowConnector = () => (
   <div className="hidden md:flex items-center justify-center w-12 text-white z-10 -ml-3 -mr-3">
      <svg viewBox="0 0 60 40" className="w-12 h-12 drop-shadow-lg">
         <line x1="5" y1="20" x2="45" y2="20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
         <polyline points="35,10 50,20 35,30" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
   </div>
);

export const Value: React.FC<ValueProps> = ({ customContent }) => {
  const scrollToCalculator = () => {
    document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const headline = customContent?.headline || <>Growth Without The <span className="text-warho-purple">Headcount.</span></>;
  const subheadline = customContent?.subheadline || "Growing your business shouldn't mean drowning in work or hiring expensive staff. WarHo builds simple systems that do the work for you.";

  // Default points if not customized
  const points = customContent?.points || [
    "One-time cost, no monthly fees",
    "You own the system (it's your asset)",
    "Automates work 24/7 (like a free employee)",
    "Connects your existing tools (Excel, Gmail)"
  ];

  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        
        {/* TCO / Value Prop */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              {headline}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {subheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch mb-24">
            {/* The Old Way */}
            <div className="p-8 border border-white/10 rounded-2xl bg-zinc-900/30 grayscale opacity-70 hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-bold text-gray-400 mb-6">The "Old Way" Trap</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="text-red-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">Hiring expensive staff for repetitive tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="text-red-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">Monthly software fees that eat your margin</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="text-red-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">Founder burnout from doing everything manually</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="text-red-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">Confusion about which tech tools to buy</span>
                </li>
              </ul>
            </div>

            {/* The WarHo Way */}
            <div className="p-8 border-2 border-warho-yellow/50 rounded-2xl bg-warho-purple/5 relative shadow-[0_0_50px_rgba(255,215,0,0.05)] flex flex-col">
              <div className="absolute top-0 right-0 bg-warho-yellow text-black text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Founder Friendly
              </div>
              <h3 className="text-xl font-bold text-white mb-6">The WarHo Growth Model</h3>
              <ul className="space-y-4 mb-8">
                {points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-warho-yellow w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-white">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-white/10">
                <h4 className="flex items-center gap-2 font-bold text-warho-yellow mb-2">
                   🔒 Build Wealth, Not Overhead
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Every system we build increases the value of your business. Stop renting success and start owning your growth engine.
                </p>
              </div>
            </div>
          </div>

          {/* New Quantify Your AI Advantage Section */}
          <div id="roi-calculator" className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden mb-32 scroll-mt-24">
             {/* Background glow */}
             <div className="absolute top-1/2 left-0 w-96 h-96 bg-warho-purple/10 rounded-full blur-[100px] transform -translate-y-1/2 pointer-events-none"></div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                   <div className="mb-6 flex items-center gap-4">
                      {/* POP ART PIGGY BANK ICON */}
                      <div className="w-24 h-24 md:w-32 md:h-32 shrink-0">
                         <PiggyBankGraphic />
                      </div>
                      <div>
                         <span className="text-warho-yellow font-bold uppercase tracking-wider text-sm mb-2 block">Founders: Check Your Numbers</span>
                         <h2 className="text-3xl md:text-4xl font-black text-white leading-none">
                            How Much Is "Busy Work" <br/> Costing You?
                         </h2>
                      </div>
                   </div>
                   
                   <h3 className="text-xl text-gray-300 mb-6 font-medium">
                     Your time is your most expensive asset.
                   </h3>
                   <p className="text-gray-400 mb-8 leading-relaxed">
                     Before you hire another assistant or buy more software, calculate the impact of automation. Our calculator uses your real numbers to show how much profit you're losing to manual tasks.
                   </p>
                   
                   <button 
                    onClick={() => document.getElementById('roi-input-start')?.focus()}
                    className="inline-flex items-center text-warho-yellow font-bold border-b-2 border-warho-yellow pb-1 hover:text-white hover:border-white transition-colors"
                   >
                     Calculate My Savings <ArrowRight className="ml-2 w-4 h-4" />
                   </button>
                </div>
                <div>
                   <ROICalculator />
                </div>
             </div>
          </div>
        </div>

        {/* The WarHo Methodology */}
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center group w-full md:w-1/4">
               <div className="w-28 h-28 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 relative z-20">
                  <AssessIcon />
               </div>
               <h3 className="text-xl font-bold text-white mt-5 mb-2">1. Audit</h3>
               <p className="text-gray-400 text-sm text-center max-w-[180px]">We find the wasted time in your current process.</p>
            </div>

            <ArrowConnector />

            {/* Step 2 */}
            <div className="flex flex-col items-center group w-full md:w-1/4">
               <div className="w-28 h-28 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 relative z-20">
                  <ArchitectIcon />
               </div>
               <h3 className="text-xl font-bold text-white mt-5 mb-2">2. Design</h3>
               <p className="text-gray-400 text-sm text-center max-w-[180px]">We create a simple plan that fits your budget.</p>
            </div>

            <ArrowConnector />

            {/* Step 3 */}
            <div className="flex flex-col items-center group w-full md:w-1/4">
               <div className="w-28 h-28 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 relative z-20">
                  <DeployIcon />
               </div>
               <h3 className="text-xl font-bold text-white mt-5 mb-2">3. Build</h3>
               <p className="text-gray-400 text-sm text-center max-w-[180px]">We build it, test it, and hand you the keys.</p>
            </div>

            <ArrowConnector />

            {/* Step 4 */}
            <div className="flex flex-col items-center group w-full md:w-1/4">
               <div className="w-28 h-28 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 relative z-20">
                  <SecureIcon />
               </div>
               <h3 className="text-xl font-bold text-white mt-5 mb-2">4. Grow</h3>
               <p className="text-gray-400 text-sm text-center max-w-[180px]">You scale faster with a system that runs itself.</p>
            </div>
            
          </div>
          
          <div className="mt-16 text-center">
             <div className="inline-block border-4 border-black bg-warho-purple px-10 py-4 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] transform -rotate-1 hover:rotate-0 transition-transform">
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest">
                   The Simple Process
                </h2>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};