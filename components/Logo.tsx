import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 md:gap-3 select-none group cursor-pointer transition-all duration-300">
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex-shrink-0 transition-all duration-300">
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full drop-shadow-[0_0_15px_rgba(75,0,130,0.5)] transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d946ef" /> {/* Fuchsia/Pink */}
              <stop offset="1" stopColor="#4b0082" /> {/* WarHo Purple */}
            </linearGradient>
          </defs>
          
          {/* External Network Nodes (Left side) */}
          <circle cx="20" cy="30" r="5" fill="#d946ef" className="animate-pulse" />
          <circle cx="12" cy="50" r="4" fill="#d946ef" opacity="0.8" />
          <circle cx="25" cy="65" r="4" fill="#d946ef" opacity="0.9" />
          <circle cx="35" cy="45" r="5" fill="#4b0082" />

          {/* Connections from network to head */}
          <path d="M20 30 L 35 45" stroke="url(#logo-gradient)" strokeWidth="2" opacity="0.6" />
          <path d="M12 50 L 35 45" stroke="url(#logo-gradient)" strokeWidth="2" opacity="0.6" />
          <path d="M25 65 L 35 45" stroke="url(#logo-gradient)" strokeWidth="2" opacity="0.6" />
          <path d="M35 45 L 55 40" stroke="url(#logo-gradient)" strokeWidth="2" opacity="0.6" />
          <path d="M35 45 L 50 60" stroke="url(#logo-gradient)" strokeWidth="2" opacity="0.6" />

          {/* Abstract Head Profile Outline */}
          <path 
            d="M55 15 C 40 15, 45 35, 45 40 C 45 55, 40 60, 45 70 C 50 80, 45 85, 55 90 C 75 90, 85 70, 85 50 C 85 30, 75 15, 55 15 Z" 
            stroke="url(#logo-gradient)" 
            strokeWidth="3" 
            strokeLinecap="round"
            className="opacity-90"
          />
          
          {/* Internal Brain Nodes (Inside Head) */}
          <circle cx="55" cy="40" r="4" fill="#FFD700" /> {/* Yellow Core Node */}
          <circle cx="70" cy="30" r="3" fill="#4b0082" />
          <circle cx="65" cy="55" r="3" fill="#4b0082" />
          <circle cx="50" cy="60" r="3" fill="#4b0082" />

          {/* Internal Synapses */}
          <path d="M55 40 L 70 30" stroke="#FFD700" strokeWidth="1.5" opacity="0.8" />
          <path d="M55 40 L 65 55" stroke="#FFD700" strokeWidth="1.5" opacity="0.8" />
          <path d="M55 40 L 50 60" stroke="#FFD700" strokeWidth="1.5" opacity="0.8" />
        </svg>
      </div>
      
      <div className="flex flex-col justify-center">
        <h1 className="text-xl md:text-3xl font-black tracking-tighter text-white leading-none transition-all duration-300">
          WARHO AI
        </h1>
        <span className="text-[0.6rem] md:text-xs font-bold tracking-[0.3em] text-warho-yellow uppercase leading-none mt-0.5 md:mt-1 opacity-90 group-hover:opacity-100 transition-opacity pl-0.5">
          Solutions
        </span>
      </div>
    </div>
  );
};