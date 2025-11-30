import React from 'react';
import { LandingCopy } from '../types';

interface FeaturesProps {
  advantages: LandingCopy['advantages'];
}

// Custom Icon: Integration (Yellow Arch with Circuit Nodes and Clock)
const IntegrationIcon = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background Pattern */}
    <rect width="200" height="150" fill="#4B0082" />
    <path d="M0 0 L200 150 M200 0 L0 150" stroke="#000" strokeWidth="1" opacity="0.1" />
    
    {/* Server/System Box Left */}
    <rect x="20" y="30" width="60" height="50" fill="#333" stroke="#FFD700" strokeWidth="3" />
    <path d="M30 40 H70 M30 50 H50" stroke="#FFD700" strokeWidth="2" />
    
    {/* Cables */}
    <path d="M80 40 H100 V30 H140" stroke="#FFD700" strokeWidth="4" fill="none" />
    <path d="M80 50 H110 V80 H140" stroke="#FFD700" strokeWidth="4" fill="none" />
    <path d="M80 60 H90 V100 H50" stroke="#FFD700" strokeWidth="4" fill="none" />

    {/* Clock Overlay */}
    <circle cx="140" cy="80" r="35" fill="#4B0082" stroke="#FFD700" strokeWidth="4" />
    <path d="M140 80 L140 55" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
    <path d="M140 80 L160 80" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
    <circle cx="140" cy="80" r="3" fill="#FFD700" />
    
    {/* Pop Art Dots overlay */}
    <circle cx="140" cy="80" r="25" fill="none" stroke="#000" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
  </svg>
);

// Custom Icon: Speed (Lightning + Gauge)
const SpeedIcon = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="150" fill="#4B0082" />
    
    {/* Speed lines */}
    <path d="M20 75 H50 M150 75 H180" stroke="#FFD700" strokeWidth="2" strokeDasharray="4 4" />
    <path d="M30 100 L50 90 M170 100 L150 90" stroke="#FFD700" strokeWidth="2" strokeDasharray="4 4" />

    {/* Gauge */}
    <path d="M50 110 A 50 50 0 0 1 150 110" stroke="#000" strokeWidth="8" strokeLinecap="round" />
    <path d="M50 110 A 50 50 0 0 1 150 110" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" />
    
    {/* Ticks */}
    <path d="M50 110 L60 100 M150 110 L140 100 M100 60 L100 70" stroke="#FFF" strokeWidth="2" />

    {/* Lightning Bolt */}
    <path d="M110 20 L80 80 H110 L90 140 L130 70 H100 L110 20Z" fill="#FFD700" stroke="#000" strokeWidth="3" />
    
    {/* MAX Text */}
    <rect x="130" y="110" width="40" height="20" fill="#FFD700" />
    <text x="150" y="125" textAnchor="middle" fill="#000" fontSize="14" fontWeight="900">MAX</text>
  </svg>
);

// Custom Icon: IP (Head + Brain + Crown)
const IPIcon = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="150" fill="#4B0082" />
    
    {/* Circle Badge */}
    <circle cx="100" cy="85" r="55" stroke="#FFD700" strokeWidth="4" fill="none" />
    
    {/* Head Silhouette */}
    <path d="M70 110 V80 C70 60, 80 50, 100 50 C 120 50, 130 60, 130 80 V110" fill="#FFD700" stroke="#000" strokeWidth="3" />
    <path d="M70 110 H130" stroke="#000" strokeWidth="3" />

    {/* Brain Lines */}
    <path d="M90 65 C90 60, 110 60, 110 65 C115 65, 115 75, 110 75 C105 75, 105 85, 100 85 C95 85, 95 75, 90 75 C85 75, 85 65, 90 65" 
          fill="none" stroke="#4B0082" strokeWidth="2" />

    {/* IP Text */}
    <text x="100" y="105" textAnchor="middle" fill="#4B0082" fontSize="24" fontWeight="900">IP</text>

    {/* Crown */}
    <path d="M85 45 L85 30 L95 40 L100 25 L105 40 L115 30 L115 45" fill="#FFD700" stroke="#000" strokeWidth="2" />
  </svg>
);

export const Features: React.FC<FeaturesProps> = ({ advantages }) => {
  const icons = [IntegrationIcon, SpeedIcon, IPIcon];

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-2">The WarHo Advantage</h3>
          <div className="h-1 w-20 bg-warho-purple"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="bg-zinc-900 border border-white/10 overflow-hidden group hover:border-warho-purple/50 transition-colors">
                <div className="w-full aspect-[4/3] bg-warho-purple border-b border-black relative">
                   <Icon />
                   {/* Half-tone overlay effect */}
                   <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
                </div>
                <div className="p-8">
                    <h4 className="text-xl font-bold text-white mb-3">{adv.title}</h4>
                    <p className="text-gray-400 leading-relaxed text-sm">{adv.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
