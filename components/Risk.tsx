import React from 'react';
import { Shield, Cloud, Mail, Calendar, ClipboardCheck, Lock, Server } from 'lucide-react';

export const Risk: React.FC = () => {
  return (
    <section className="py-24 bg-warho-dark border-t border-white/5 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-warho-purple/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 animate-pulse-slow"></div>

       <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Shield size={14} className="text-green-400" />
              <span className="text-xs font-bold text-green-400 tracking-wide uppercase">Bank-Grade Security Made Simple</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Secure Your Business. <br/>
              <span className="text-warho-yellow">No IT Team Required.</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              You don't need an expensive IT department to be secure. We handle all the complex data protection and compliance work so you can sleep soundly knowing your business data is safe.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                  <div className="mt-1 bg-warho-purple/20 p-2 rounded text-warho-purple border border-warho-purple/50">
                    <Lock size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Your Data Stays Yours</h4>
                    <p className="text-gray-400 text-sm">We ensure your sensitive business info is never shared or used to train public AI.</p>
                  </div>
              </div>
              <div className="flex items-start gap-4">
                  <div className="mt-1 bg-warho-yellow/20 p-2 rounded text-warho-yellow border border-warho-yellow/50">
                    <Server size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">We Handle The Tech</h4>
                    <p className="text-gray-400 text-sm">We deploy your tools on Google's world-class secure servers. You just log in and use them.</p>
                  </div>
              </div>
            </div>
          </div>

          {/* Pop Art Graphic: G connected to Grid */}
          <div className="lg:w-1/2 w-full order-1 lg:order-2 flex justify-center">
             <div className="relative w-full max-w-lg aspect-video bg-warho-purple border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(255,215,0,1)] p-6 overflow-hidden flex items-center justify-between">
                
                {/* Pop Art Rays Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" 
                     style={{ 
                       background: 'repeating-conic-gradient(from 0deg, #000 0deg 10deg, transparent 10deg 20deg)',
                       mixBlendMode: 'overlay'
                     }}>
                </div>

                {/* Left: G Logo */}
                <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-zinc-900 rounded-full border-[4px] border-warho-yellow flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] shrink-0">
                   <span className="text-7xl font-black text-white">G</span>
                </div>

                {/* Connector Lines */}
                <div className="flex-grow relative h-32 mx-2">
                   {/* Circuit Lines connecting G to Grid */}
                   <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M 0 50 H 100" stroke="#FFD700" strokeWidth="4" fill="none" />
                      <path d="M 50 50 V 20 H 100" stroke="#FFD700" strokeWidth="4" fill="none" strokeDasharray="6 6" className="animate-dash" />
                      <path d="M 50 50 V 80 H 100" stroke="#FFD700" strokeWidth="4" fill="none" strokeDasharray="6 6" className="animate-dash" />
                      
                      {/* Nodes */}
                      <circle cx="0" cy="50" r="4" fill="white" stroke="black" strokeWidth="2" className="animate-pulse" />
                      <circle cx="50" cy="50" r="4" fill="white" stroke="black" strokeWidth="2" className="animate-pulse" />
                   </svg>
                </div>

                {/* Right: The Grid */}
                <div className="relative z-10 grid grid-cols-2 gap-2 bg-black p-2 border-[4px] border-black shrink-0">
                    {/* Cloud */}
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-warho-yellow flex items-center justify-center border-2 border-black">
                       <Cloud size={32} className="text-black fill-current" strokeWidth={2.5} />
                       <div className="absolute ml-4 mt-4 bg-black rounded-full p-0.5 border border-white">
                          <Shield size={10} className="text-white" />
                       </div>
                    </div>
                    {/* Mail */}
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-warho-yellow flex items-center justify-center border-2 border-black">
                       <Mail size={32} className="text-black" strokeWidth={2.5} />
                    </div>
                    {/* Calendar */}
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-warho-yellow flex items-center justify-center border-2 border-black">
                       <Calendar size={32} className="text-black" strokeWidth={2.5} />
                    </div>
                    {/* Checklist */}
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-warho-yellow flex items-center justify-center border-2 border-black">
                       <ClipboardCheck size={32} className="text-black" strokeWidth={2.5} />
                    </div>
                </div>

             </div>
          </div>

        </div>
       </div>
    </section>
  );
};