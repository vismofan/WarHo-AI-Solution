import React from 'react';
import { Cloud, Shield, Database, Layers } from 'lucide-react';

// Custom Pop Art Icons based on provided image
const PopArtDocIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="#5D2C9D" /> {/* Purple Background */}
    
    {/* Yellow Paper */}
    <path d="M25 15 H65 L80 30 V85 H25 V15 Z" fill="#FFD700" stroke="black" strokeWidth="3" strokeLinejoin="round" />
    <path d="M65 15 V30 H80" fill="#FFD700" stroke="black" strokeWidth="3" strokeLinejoin="round" />
    
    {/* Content Lines */}
    <line x1="35" y1="40" x2="70" y2="40" stroke="black" strokeWidth="3" strokeLinecap="round" />
    
    {/* Bullets */}
    <circle cx="35" cy="55" r="2.5" fill="none" stroke="black" strokeWidth="2.5" />
    <line x1="45" y1="55" x2="70" y2="55" stroke="black" strokeWidth="3" strokeLinecap="round" />
    
    <circle cx="35" cy="70" r="2.5" fill="none" stroke="black" strokeWidth="2.5" />
    <line x1="45" y1="70" x2="70" y2="70" stroke="black" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const PopArtCalendarIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="#5D2C9D" />
    
    {/* Yellow Calendar Body */}
    <rect x="20" y="20" width="60" height="60" rx="2" fill="#FFD700" stroke="black" strokeWidth="3" />
    
    {/* Header Line */}
    <line x1="20" y1="35" x2="80" y2="35" stroke="black" strokeWidth="3" />
    
    {/* Center Circle */}
    <circle cx="50" cy="58" r="10" fill="none" stroke="black" strokeWidth="3" />
    
    {/* Rings */}
    <line x1="35" y1="15" x2="35" y2="25" stroke="black" strokeWidth="3" strokeLinecap="round" />
    <line x1="65" y1="15" x2="65" y2="25" stroke="black" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const PopArtEmailIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="#5D2C9D" />
    
    {/* Envelope Body */}
    <rect x="15" y="25" width="70" height="50" fill="#FFD700" stroke="black" strokeWidth="3" />
    
    {/* Envelope Flap Lines */}
    <path d="M15 25 L 50 55 L 85 25" fill="none" stroke="black" strokeWidth="3" strokeLinejoin="round" />
    
    {/* @ Symbol */}
    <g transform="translate(50, 60)">
       <path d="M0 -8 A 8 8 0 1 0 0 8 A 8 8 0 0 0 3 -4" fill="none" stroke="black" strokeWidth="2.5" />
       <circle cx="0" cy="0" r="3" fill="none" stroke="black" strokeWidth="2.5" />
    </g>
  </svg>
);

export const GoogleIntegration: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-900/30 border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-warho-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Header - GCP Focus */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <Cloud size={14} className="text-blue-400" />
            <span className="text-xs font-bold text-gray-300 tracking-wide uppercase">Built on Google Cloud</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Integrate AI Where Your Business Lives: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-warho-purple">Google Cloud & Workspace.</span>
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed">
            WarHo AI Solutions is architected cloud-natively on the principles of GCP. This foundation ensures that every AI integration and white-label deployment meets the highest standards for security, compliance, and limitless scalability.
          </p>
        </div>

        {/* Workspace Automation Cards */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px bg-white/10 flex-1"></div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Layers size={20} className="text-warho-yellow" />
              The Workspace Advantage
            </h3>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Google Forms / Doc */}
            <div className="p-8 bg-black/40 border border-white/10 rounded-2xl hover:border-warho-purple/50 transition-colors group">
              <div className="w-20 h-20 mb-6 group-hover:scale-105 transition-transform duration-300">
                <PopArtDocIcon />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Google Forms Automation</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                We transform data capture from static forms into dynamic workflows. Automatically validate form submissions against existing CRM records and trigger immediate follow-up actions.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-warho-purple rounded-full"></div> Instant routing</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-warho-purple rounded-full"></div> Zero manual entry</li>
              </ul>
            </div>

            {/* Google Calendar */}
            <div className="p-8 bg-black/40 border border-white/10 rounded-2xl hover:border-warho-yellow/50 transition-colors group">
              <div className="w-20 h-20 mb-6 group-hover:scale-105 transition-transform duration-300">
                <PopArtCalendarIcon />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Calendar Optimization</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Our custom AI resolves complex enterprise scheduling headaches. Intelligently manage conflicting availability and automatically generate meeting summaries based on linked documents.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-warho-yellow rounded-full"></div> Smart conflict resolution</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-warho-yellow rounded-full"></div> Auto-agendas</li>
              </ul>
            </div>

            {/* Gmail */}
            <div className="p-8 bg-black/40 border border-white/10 rounded-2xl hover:border-pink-500/50 transition-colors group">
              <div className="w-20 h-20 mb-6 group-hover:scale-105 transition-transform duration-300">
                <PopArtEmailIcon />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Gmail Triage & Response</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Integrate personalized AI directly into your enterprise inbox. Automatically classify high-priority emails, extract crucial data points to update your CRM, and generate draft responses.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div> CRM Sync extraction</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div> Personalized drafts</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center max-w-2xl mx-auto mt-10">
            <p className="text-white font-medium border-l-4 border-warho-yellow pl-4 italic">
              "By integrating Forms, Calendar, and Gmail, WarHo AI Solutions creates a singular, intelligent workflow that maximizes team efficiency and drives measurable returns from every corner of your Google Workspace investment."
            </p>
          </div>
        </div>

        {/* GCP Core Features - Horizontal List */}
        <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Built for the Cloud Native Enterprise</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-500/20 p-2 rounded text-blue-400 h-fit">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Unmatched Security</h4>
                    <p className="text-gray-400 text-sm">Custom white-label products built on GCP for global scalability and enterprise-grade compliance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-green-500/20 p-2 rounded text-green-400 h-fit">
                    <Database size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">BigQuery Intelligence</h4>
                    <p className="text-gray-400 text-sm">Leverage petabytes of data in BigQuery with custom AI models for hyper-targeted customer campaigns.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Cloud AI Pop Art Graphic (Replaces Quad-Panel Cloud) */}
            <div className="bg-[#4B0082] border-2 border-black rounded-xl p-8 flex flex-col justify-center items-center text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] min-h-[300px]">
               {/* SVG Graphic */}
               <svg viewBox="0 0 200 180" className="w-56 h-56 drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
                  {/* Cloud Shape */}
                  <path id="cloud" d="M 140 120 H 60 C 35 120 15 100 15 75 C 15 55 28 38 45 32 C 50 10 70 -5 95 -5 C 120 -5 140 10 150 32 C 170 35 185 55 185 75 C 185 100 165 120 140 120 Z" transform="translate(0, 15)" fill="#FFD700" stroke="black" strokeWidth="6" />
                  
                  {/* Circuit Lines Mask */}
                  <mask id="circuitMask">
                    <path d="M 140 120 H 60 C 35 120 15 100 15 75 C 15 55 28 38 45 32 C 50 10 70 -5 95 -5 C 120 -5 140 10 150 32 C 170 35 185 55 185 75 C 185 100 165 120 140 120 Z" transform="translate(0, 15)" fill="white" />
                  </mask>
                  
                  <g mask="url(#circuitMask)" transform="translate(0, 15)">
                     {/* Circuit Paths */}
                     <g stroke="#5B21B6" strokeWidth="3" fill="none" strokeLinecap="round">
                        {/* Top inputs */}
                        <path d="M 95 10 V 40" />
                        <path d="M 70 20 L 85 45" />
                        <path d="M 120 20 L 105 45" />
                        
                        {/* Horizontal busses */}
                        <path d="M 40 75 H 70" />
                        <path d="M 160 75 H 120" />
                        <path d="M 50 90 H 80" />
                        
                        {/* Connections */}
                        <path d="M 95 40 L 70 75" />
                        <path d="M 95 40 L 120 75" />
                        <path d="M 70 75 L 80 90" />
                        
                        {/* Bottom outputs */}
                        <path d="M 60 120 V 90" />
                        <path d="M 140 120 V 90" />
                     </g>
                     
                     {/* Nodes */}
                     <g stroke="none">
                        <circle cx="95" cy="40" r="4" fill="#DC2626" />
                        <circle cx="85" cy="45" r="4" fill="#16A34A" />
                        <circle cx="105" cy="45" r="4" fill="#2563EB" />
                        
                        <circle cx="70" cy="75" r="4" fill="#D97706" />
                        <circle cx="120" cy="75" r="4" fill="#9333EA" />
                        
                        <circle cx="80" cy="90" r="4" fill="#DC2626" />
                     </g>
                  </g>

                  {/* Redraw Outline */}
                   <path d="M 140 120 H 60 C 35 120 15 100 15 75 C 15 55 28 38 45 32 C 50 10 70 -5 95 -5 C 120 -5 140 10 150 32 C 170 35 185 55 185 75 C 185 100 165 120 140 120 Z" transform="translate(0, 15)" fill="none" stroke="black" strokeWidth="6" />

               </svg>
               <h3 className="text-3xl font-black text-black uppercase tracking-tighter mt-4" style={{ textShadow: '2px 2px 0px rgba(255,255,255,0.2)' }}>
                  GOOGLE CLOUD AI
               </h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};