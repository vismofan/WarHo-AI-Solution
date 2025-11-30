import React, { useState } from 'react';
import { Video, Calendar, ArrowRight, CheckCircle, FileText, X, ShieldCheck, TrendingUp, Clock, Lock } from 'lucide-react';

export const Webinar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    email: '',
    companySize: '',
    techFocus: '',
    optIn: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
        setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warho-purple/20 border border-warho-purple/50 mb-6">
              <Video size={14} className="text-white" />
              <span className="text-xs font-bold text-white tracking-wide uppercase">Founder Masterclass Series</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Free Workshop: <br/><span className="text-warho-yellow">AI for Small Business Growth</span>
            </h2>
        </div>

        {/* Featured Webinar Card */}
        <div className="max-w-6xl mx-auto bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            
            {/* Left Content */}
            <div className="p-10 lg:p-14 lg:w-2/3 flex flex-col">
                <h3 className="text-3xl font-black text-white mb-4 leading-tight">
                    Scale Without Hiring: The Founder's Guide
                </h3>
                <p className="text-xl text-gray-300 mb-8 font-light">
                    How to automate your busiest tasks, reclaim 20 hours a week, and boost profit margins using simple AI tools.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-4">
                        <div className="flex gap-3">
                            <ShieldCheck className="text-warho-yellow shrink-0" />
                            <div>
                                <h4 className="text-white font-bold text-sm uppercase">Own Your Assets</h4>
                                <p className="text-gray-400 text-sm">Stop renting expensive SaaS. Build simple tools you own forever.</p>
                            </div>
                        </div>
                         <div className="flex gap-3">
                            <Lock className="text-warho-yellow shrink-0" />
                            <div>
                                <h4 className="text-white font-bold text-sm uppercase">Secure & Simple</h4>
                                <p className="text-gray-400 text-sm">How to use enterprise-grade security without needing an IT team.</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-3">
                            <TrendingUp className="text-warho-yellow shrink-0" />
                            <div>
                                <h4 className="text-white font-bold text-sm uppercase">Profit First</h4>
                                <p className="text-gray-400 text-sm">Identify the "low hanging fruit" tasks that save you the most money immediately.</p>
                            </div>
                        </div>
                         <div className="flex gap-3">
                            <Clock className="text-warho-yellow shrink-0" />
                            <div>
                                <h4 className="text-white font-bold text-sm uppercase">Fast Results</h4>
                                <p className="text-gray-400 text-sm">Get up and running in weeks, not months. Practical steps only.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-auto pt-8 border-t border-white/10 flex flex-col md:flex-row gap-6 items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden border-2 border-warho-purple">
                           {/* Ray Ho Photo with Duotone Filter */}
                           <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbk5y9N0gK0581335T9y7k-720wB2_K2y9g660k467_479g080k303g00755y7_4413_7k2_7k=w1366-h635" alt="Ray Ho" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" />
                        </div>
                        <div>
                            <span className="text-xs text-gray-500 uppercase font-bold block">Host Spotlight</span>
                            <span className="text-white font-bold">Ray Ho, Founder & CEO</span>
                        </div>
                     </div>
                     
                     <button 
                        onClick={() => setIsModalOpen(true)}
                        className="bg-warho-purple hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-purple-900/50 flex items-center gap-2 group whitespace-nowrap"
                    >
                        Save My Seat <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Right Sidebar / Pop-Art Visual "Live Stream" Poster */}
            <div className="lg:w-1/3 bg-[#4B0082] border-l border-white/10 flex flex-col items-center justify-between p-10 relative overflow-hidden">
                
                {/* Text Shadow CSS for specific look */}
                <style>{`
                    .text-stroke-black {
                        -webkit-text-stroke: 2px black;
                        text-shadow: 4px 4px 0 #000;
                    }
                `}</style>

                {/* Top Text */}
                <h2 className="text-5xl lg:text-6xl font-black text-[#FFD700] uppercase tracking-tighter text-center leading-none text-stroke-black mb-8 relative z-10">
                    LIVE STREAM
                </h2>

                {/* Graphic Icon */}
                <div className="w-64 h-64 relative flex items-center justify-center mb-8">
                    <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible drop-shadow-2xl">
                        {/* Black Cross lines */}
                        <line x1="20" y1="40" x2="180" y2="160" stroke="black" strokeWidth="8" strokeLinecap="square" />
                        <line x1="180" y1="40" x2="20" y2="160" stroke="black" strokeWidth="8" strokeLinecap="square" />

                        {/* Waves Left */}
                        <path d="M 70 60 A 50 50 0 0 0 70 140" fill="none" stroke="#FFD700" strokeWidth="12" />
                        <path d="M 50 45 A 75 75 0 0 0 50 155" fill="none" stroke="#FFD700" strokeWidth="12" />
                        
                        {/* Waves Right */}
                        <path d="M 130 60 A 50 50 0 0 1 130 140" fill="none" stroke="#FFD700" strokeWidth="12" />
                        <path d="M 150 45 A 75 75 0 0 1 150 155" fill="none" stroke="#FFD700" strokeWidth="12" />

                        {/* Center Circle */}
                        <circle cx="100" cy="100" r="45" fill="#FFD700" stroke="black" strokeWidth="5" />
                        
                        {/* Play Triangle */}
                        <path d="M 85 75 L 125 100 L 85 125 Z" fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* Bottom Boxes */}
                <div className="w-full space-y-4 relative z-10">
                    <div className="bg-[#FFD700] py-2 px-2 text-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                        <h3 className="text-black font-black text-lg lg:text-xl uppercase tracking-wide leading-none">WarHo AI Solutions</h3>
                    </div>
                    <div className="bg-[#FFD700] py-2 px-2 text-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                        <h4 className="text-black font-bold text-base lg:text-lg uppercase tracking-wide leading-none">Founder's Workshop</h4>
                    </div>
                </div>
            </div>
        </div>

      </div>

      {/* REGISTRATION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
            <div className="bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-lg relative overflow-hidden animate-in fade-in zoom-in-95 duration-200 shadow-2xl">
                
                <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20"
                >
                    <X size={24} />
                </button>

                {!isSubmitted ? (
                    <div className="p-8">
                        <div className="mb-6">
                            <span className="text-warho-yellow text-xs font-bold uppercase tracking-wider">Webinar Registration</span>
                            <h3 className="text-2xl font-black text-white mt-1 mb-2">Secure Your Spot</h3>
                            <p className="text-gray-400 text-sm">
                                AI for Small Business Growth: Scale Without Hiring
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Full Name</label>
                                <input required name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:border-warho-purple outline-none transition-colors" placeholder="Jane Doe" />
                            </div>
                            
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Role</label>
                                <input required name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:border-warho-purple outline-none transition-colors" placeholder="Founder / Owner / CEO" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Work Email</label>
                                <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:border-warho-purple outline-none transition-colors" placeholder="jane@company.com" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Business Size</label>
                                    <select required name="companySize" value={formData.companySize} onChange={handleInputChange} className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:border-warho-purple outline-none transition-colors appearance-none">
                                        <option value="">Select Size...</option>
                                        <option value="1-10">1 - 10 Employees</option>
                                        <option value="11-50">11 - 50 Employees</option>
                                        <option value="50-200">50 - 200 Employees</option>
                                        <option value="200+">200+ Employees</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Primary Goal</label>
                                    <div className="relative">
                                        <select required name="techFocus" value={formData.techFocus} onChange={handleInputChange} className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:border-warho-purple outline-none transition-colors appearance-none text-sm">
                                            <option value="">Select Goal...</option>
                                            <option value="Save Time">Save Time / Efficiency</option>
                                            <option value="Increase Sales">Increase Sales</option>
                                            <option value="Cut Costs">Cut Costs</option>
                                            <option value="Scale">Scale Operations</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-2">
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" name="optIn" checked={formData.optIn} onChange={handleInputChange} className="peer sr-only" />
                                        <div className="w-5 h-5 border-2 border-gray-500 rounded peer-checked:bg-warho-yellow peer-checked:border-warho-yellow transition-all"></div>
                                        <CheckCircle className="absolute w-5 h-5 text-black opacity-0 peer-checked:opacity-100 transition-opacity" size={16} />
                                    </div>
                                    <span className="text-xs text-gray-400 group-hover:text-gray-300">
                                        Send me the recording and related resources if I can't make it live.
                                    </span>
                                </label>
                            </div>

                            <button type="submit" className="w-full bg-warho-yellow hover:bg-yellow-400 text-black font-bold py-3 rounded-lg transition-colors shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                                Complete Registration
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="p-10 text-center flex flex-col items-center justify-center min-h-[400px]">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-300">
                            <CheckCircle className="text-green-400 w-10 h-10" />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-2">You're In!</h3>
                        <p className="text-gray-400 mb-8">We've sent a calendar invite to <strong>{formData.email}</strong>.</p>
                        
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10 w-full mb-6 text-left">
                            <div className="flex items-start gap-3">
                                <FileText className="text-warho-yellow mt-1 shrink-0" size={20} />
                                <div>
                                    <h4 className="text-white font-bold text-sm">Pre-Webinar Bonus</h4>
                                    <p className="text-xs text-gray-400 mt-1">Check your email for our "Top 5 Automation Tools for 2024" PDF guide.</p>
                                </div>
                            </div>
                        </div>

                        <button onClick={() => setIsModalOpen(false)} className="text-sm text-gray-500 hover:text-white underline">
                            Close Window
                        </button>
                    </div>
                )}
            </div>
        </div>
      )}
    </section>
  );
};