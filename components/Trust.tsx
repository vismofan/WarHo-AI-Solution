import React from 'react';
import { TrendingUp, Users, Award, Briefcase } from 'lucide-react';
import { Testimonials } from './Testimonials';

export const Trust: React.FC = () => {
  return (
    <section className="py-20 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-warho-purple/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Big Business Secrets.
            <br />
            Applied to <span className="text-warho-yellow">Your Growth</span>.
          </h2>
        </div>

        {/* Consolidated Trust Grid: Metrics + Team + Partners */}
        <div className="flex flex-col gap-8">
            
            {/* Success Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-xl hover:border-warho-purple/50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                        <TrendingUp size={20} className="text-green-400" />
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Time Saved</span>
                    </div>
                    <h3 className="text-3xl font-black text-white mb-1">20+ hrs</h3>
                    <p className="text-sm text-gray-400">Average weekly time saved per client.</p>
                </div>

                <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-xl hover:border-warho-purple/50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                        <Briefcase size={20} className="text-blue-400" />
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Cost</span>
                    </div>
                    <h3 className="text-3xl font-black text-white mb-1">1/10th</h3>
                    <p className="text-sm text-gray-400">The cost of hiring a full-time employee.</p>
                </div>

                <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-xl hover:border-warho-purple/50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                        <Award size={20} className="text-purple-400" />
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Growth</span>
                    </div>
                    <h3 className="text-3xl font-black text-white mb-1">3x</h3>
                    <p className="text-sm text-gray-400">Faster scaling with automated systems.</p>
                </div>
            </div>

            {/* Team & Partners Compact Row */}
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-2/3 bg-white/5 rounded-2xl border border-white/10 p-8 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 text-warho-yellow mb-2">
                        <Users size={18} />
                        <span className="font-bold uppercase tracking-wide text-xs">Our Team</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Expert Guidance Without The Agency Fees.</h3>
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                        We are a team of senior engineers who left the corporate world to help small businesses. We act as your fractional technical partner—translating "AI" into "Profit" without the jargon.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">No Jargon</span>
                        <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">Founder Focused</span>
                        <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">Practical Results</span>
                    </div>
                </div>

                <div className="lg:w-1/3 bg-gradient-to-br from-warho-purple/20 to-black rounded-2xl border border-white/10 p-8 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-3 w-full">
                        {['AWS Partner', 'Google', 'Shopify', 'QuickBooks'].map((partner, i) => (
                            <div key={i} className="bg-black/60 backdrop-blur-sm border border-white/10 h-16 flex items-center justify-center rounded-lg transition-transform hover:scale-105">
                                <span className="text-gray-400 font-bold text-xs">{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
        {/* Testimonials integrated closer */}
        <div className="mt-8">
             <Testimonials />
        </div>
      </div>
    </section>
  );
};