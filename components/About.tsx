import React from 'react';
import { Target, Lightbulb, Shield, Briefcase, Zap, User, Hexagon } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-warho-yellow text-sm font-bold uppercase tracking-[0.2em] mb-4 block">About WarHo AI Solutions</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            The Full Story.
          </h2>
          <div className="h-1 w-24 bg-warho-purple mx-auto"></div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="p-10 border border-white/10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden group hover:border-warho-purple/50 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target size={120} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Target className="text-warho-purple" /> Our Mission
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To eliminate the fragmentation and vendor lock-in that stalls enterprise digital transformation, providing custom, owned, and integrated AI solutions.
            </p>
          </div>
          <div className="p-10 border border-white/10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden group hover:border-warho-yellow/50 transition-colors">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Lightbulb size={120} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Lightbulb className="text-warho-yellow" /> Our Vision
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the leading strategic partner for C-level executives who require a proprietary, future-proof technological advantage in an AI-driven world.
            </p>
          </div>
        </div>

        {/* Story & Values */}
        <div className="mb-24 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
             <h3 className="text-3xl font-bold text-white mb-6">The WarHo Story</h3>
             <p className="text-gray-400 mb-6 leading-relaxed">
               WarHo AI Solutions was founded on a simple observation: enterprise software was broken. While the consumer world enjoyed seamless AI integration, large organizations were stuck stitching together disparate SaaS tools, facing mounting licensing fees and zero ownership.
             </p>
             <p className="text-gray-400 leading-relaxed">
               Our founders recognized that true competitive advantage doesn't come from renting the same tools as your competitors—it comes from building proprietary intelligence that you own.
             </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="bg-zinc-900 p-6 rounded-xl border-t-4 border-warho-purple shadow-lg">
                <Briefcase className="text-warho-purple mb-4 w-8 h-8" />
                <h4 className="text-xl font-bold text-white mb-2">Strategic Precision</h4>
                <p className="text-sm text-gray-400">Rigorous, data-driven methodology that mitigates risk and aligns with business KPIs.</p>
             </div>
             <div className="bg-zinc-900 p-6 rounded-xl border-t-4 border-warho-yellow shadow-lg">
                <Zap className="text-warho-yellow mb-4 w-8 h-8" />
                <h4 className="text-xl font-bold text-white mb-2">Innovation at Scale</h4>
                <p className="text-sm text-gray-400">Relentless pursuit of cutting-edge, yet practical, AI and integration technology.</p>
             </div>
             <div className="bg-zinc-900 p-6 rounded-xl border-t-4 border-white shadow-lg">
                <Shield className="text-white mb-4 w-8 h-8" />
                <h4 className="text-xl font-bold text-white mb-2">Unwavering Integrity</h4>
                <p className="text-sm text-gray-400">Commitment to ethical AI governance, client data ownership, and radical transparency.</p>
             </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-white mb-10 text-center">Our Structured Methodology</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-4 px-6 text-warho-yellow font-bold uppercase tracking-wider text-sm">Phase</th>
                  <th className="py-4 px-6 text-gray-300 font-bold uppercase tracking-wider text-sm">Description</th>
                  <th className="py-4 px-6 text-white font-bold uppercase tracking-wider text-sm">Client Benefit</th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-6 font-bold text-white">Phase 1: Assess & Roadmap</td>
                  <td className="py-6 px-6">Rigorous AI Opportunity Assessment, data readiness audit, and ROI validation workshops.</td>
                  <td className="py-6 px-6 text-warho-purple font-medium">Clarity: <span className="text-gray-400 font-normal">Get a pragmatic, actionable roadmap, not just theory.</span></td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-6 font-bold text-white">Phase 2: Architect & Build</td>
                  <td className="py-6 px-6">Design and build the custom AI models, CRM integration layers, and white-label core product.</td>
                  <td className="py-6 px-6 text-warho-purple font-medium">Customization: <span className="text-gray-400 font-normal">Solutions are platform-agnostic and tailored to your unique stack.</span></td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-6 font-bold text-white">Phase 3: Deploy & Govern</td>
                  <td className="py-6 px-6">MLOps deployment workflows, security hardening, and establishing GDPR & AI Act compliance frameworks.</td>
                  <td className="py-6 px-6 text-warho-purple font-medium">Trust: <span className="text-gray-400 font-normal">Ensure trusted guardrails and compliant, automated operations.</span></td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-6 px-6 font-bold text-white">Phase 4: Enable & Scale</td>
                  <td className="py-6 px-6">Comprehensive training, change enablement programs, and continuous model monitoring.</td>
                  <td className="py-6 px-6 text-warho-purple font-medium">Longevity: <span className="text-gray-400 font-normal">Build internal capabilities and eliminate dependency on external consultants.</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Humanize Brand - Leadership */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-10 text-center">Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             
             {/* Ray Ho - Updated Profile with Duotone Style */}
             <div className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden group flex flex-col hover:border-warho-purple/50 transition-colors">
                <div className="h-80 relative overflow-hidden bg-gray-800">
                   {/* Duotone Filter via Mix-Blend-Mode + Background Color */}
                   <div className="absolute inset-0 bg-warho-purple mix-blend-overlay z-10 opacity-40 group-hover:opacity-0 transition-opacity duration-500"></div>
                   <img 
                      src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbk5y9N0gK0581335T9y7k-720wB2_K2y9g660k467_479g080k303g00755y7_4413_7k2_7k=w1366-h635" 
                      alt="Ray Ho" 
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0"
                      onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                      }}
                   />
                   {/* Fallback if image fails to load */}
                   <div className="absolute inset-0 hidden flex items-center justify-center bg-zinc-800 text-gray-500">
                      <User size={64} />
                   </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                   <h4 className="text-2xl font-bold text-white mb-1">Ray Ho</h4>
                   <span className="text-warho-purple text-sm font-bold uppercase mb-4 block">CEO & Founder</span>
                   <p className="text-gray-400 text-sm leading-relaxed mb-6">
                     The sales and driving force behind WarHo AI. Backed by a remote and dedicated team of elite engineers hand-picked to consult on your next enterprise AI project. Ray specializes in bridging the gap between complex AI capabilities and practical business revenue.
                   </p>
                </div>
             </div>

             {/* Co-Founder Profile - Abstract Geometric Avatar */}
             <div className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden group flex flex-col hover:border-warho-yellow/50 transition-colors">
                <div className="h-80 bg-zinc-800 relative flex items-center justify-center overflow-hidden">
                    {/* Abstract Geometric Composition */}
                    <div className="relative w-full h-full flex items-center justify-center bg-zinc-900">
                       <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                          <div className="bg-warho-yellow/20"></div>
                          <div className="bg-warho-purple/20"></div>
                          <div className="bg-pink-500/20"></div>
                          <div className="bg-blue-500/20"></div>
                       </div>
                       <Hexagon size={120} className="text-white z-10" strokeWidth={1} />
                       <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-warho-yellow rounded-full mix-blend-multiply opacity-50 blur-xl"></div>
                       <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-warho-purple rounded-full mix-blend-multiply opacity-50 blur-xl"></div>
                    </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                   <h4 className="text-2xl font-bold text-white mb-1">Sarah Chen</h4>
                   <span className="text-warho-yellow text-sm font-bold uppercase mb-4 block">Co-Founder & Head of Strategy</span>
                   <p className="text-gray-400 text-sm leading-relaxed mb-6">
                     Ex-Management Consultant with a decade of experience in digital transformation for B2B enterprises. Expert in aligning complex technical implementations with C-suite business objectives and measurable ROI.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};