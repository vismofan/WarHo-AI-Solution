import React, { useState } from 'react';
import { AssessmentData } from '../types';
import { analyzeNeeds } from '../services/aiService';
import { Loader2, CheckCircle2, AlertCircle, ArrowRight, ArrowLeft, Gift, PlayCircle } from 'lucide-react';

interface AssessmentFormProps {
  leadInText: string;
}

export const AssessmentForm: React.FC<AssessmentFormProps> = ({ leadInText }) => {
  const [formData, setFormData] = useState<AssessmentData>({
    companyName: '',
    role: '',
    challenge: '',
    techStack: '',
    industry: '',
    revenue: '',
    primaryGoal: '',
    detailedChallenge: '',
    crmPlatform: '',
    integrations: [],
    dataReadiness: '',
    focusArea: '',
    whiteLabel: '',
    timeline: '',
    contactInfo: ''
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await analyzeNeeds(formData);
      setTimeout(() => {
        setIsSubmitted(true);
        setLoading(false);
      }, 1500);
    } catch (err) {
      setError("Unable to submit assessment. Please try again.");
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
        const checkbox = e.target as HTMLInputElement;
        const currentItems = formData.integrations || [];
        if (checkbox.checked) {
            setFormData({ ...formData, integrations: [...currentItems, value] });
        } else {
            setFormData({ ...formData, integrations: currentItems.filter(item => item !== value) });
        }
    } else {
        setFormData({ ...formData, [name]: value });
    }
  };

  const progressPercentage = ((currentStep - 1) / totalSteps) * 100 + 25;

  return (
    <section id="assessment" className="py-24 bg-warho-dark relative">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col lg:flex-row gap-16">
        
        {/* Left Column: Context */}
        <div className="lg:w-1/3">
          <h2 className="text-4xl font-black text-white mb-6">Unlock Your AI <span className="text-warho-yellow">Roadmap</span></h2>
          <p className="text-gray-400 mb-8 text-lg">
            {leadInText}
          </p>
          <div className="space-y-4">
            {[
                { step: 1, title: "Company Profile", desc: "The Why" },
                { step: 2, title: "Your Tools", desc: "The What" },
                { step: 3, title: "Your Goals", desc: "The Want" },
                { step: 4, title: "Contact", desc: "The Who" },
            ].map((s) => (
                <div key={s.step} className={`flex items-start gap-4 transition-opacity ${currentStep === s.step ? 'opacity-100' : 'opacity-40'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border ${currentStep === s.step ? 'bg-warho-purple/20 border-warho-purple text-warho-purple' : 'bg-transparent border-gray-700 text-gray-500'}`}>
                        <span className="font-bold">{s.step}</span>
                    </div>
                    <div>
                        <h4 className="text-white font-bold">{s.title}</h4>
                        <p className="text-sm text-gray-400">{s.desc}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>

        {/* Right Column: Multi-step Form */}
        <div className="lg:w-2/3">
          {!isSubmitted ? (
            <div className="bg-zinc-900/50 p-8 border border-white/10 rounded-2xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
                <div className="h-full bg-warho-yellow transition-all duration-500 ease-out" style={{ width: `${progressPercentage}%` }}></div>
              </div>
              <div className="mb-6 flex justify-between items-center text-sm text-gray-500">
                <span>Step {currentStep} of {totalSteps}</span>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Step 1: Company Profile */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-in slide-in-from-right fade-in duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Primary Industry</label>
                            <select name="industry" value={formData.industry} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-warho-purple outline-none">
                                <option value="">Select Industry...</option>
                                <option value="Finance">Finance</option>
                                <option value="Manufacturing">Manufacturing</option>
                                <option value="Logistics">Logistics</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Retail">Retail</option>
                                <option value="Services">Professional Services</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Business Size</label>
                            <select name="revenue" value={formData.revenue} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-warho-purple outline-none">
                                <option value="">Select Scale...</option>
                                <option value="Solo">Solo Founder / Freelancer</option>
                                <option value="Small">Small Team (2-10)</option>
                                <option value="Mid">Growing (11-50)</option>
                                <option value="Large">Established (50+)</option>
                            </select>
                        </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">Biggest Business Goal</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {["Grow Revenue", "Save Time / Cut Costs", "New Product Idea", "Better Customer Service"].map((goal) => (
                            <label key={goal} className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${formData.primaryGoal === goal ? 'bg-warho-purple/20 border-warho-purple' : 'bg-black/30 border-white/10 hover:bg-white/5'}`}>
                                <input type="radio" name="primaryGoal" value={goal} checked={formData.primaryGoal === goal} onChange={handleChange} className="mr-3 accent-warho-yellow" />
                                <span className="text-white text-sm">{goal}</span>
                            </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Main Challenge</label>
                      <textarea 
                        name="detailedChallenge"
                        value={formData.detailedChallenge}
                        onChange={handleChange}
                        rows={3}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-warho-purple outline-none"
                        placeholder="What's taking up too much of your time right now?"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Tech Landscape */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-in slide-in-from-right fade-in duration-300">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Current CRM / Sales Tool</label>
                        <select name="crmPlatform" value={formData.crmPlatform} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-warho-purple outline-none">
                            <option value="">Select CRM...</option>
                            <option value="Salesforce">Salesforce</option>
                            <option value="HubSpot">HubSpot</option>
                            <option value="Excel">Excel / Google Sheets</option>
                            <option value="QuickBooks">QuickBooks</option>
                            <option value="Zoho">Zoho</option>
                            <option value="None">I don't use one yet</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">Tools You Use (Check all that apply)</label>
                        <div className="grid grid-cols-2 gap-3">
                            {["Gmail / Outlook", "Excel / Sheets", "QuickBooks / Xero", "Shopify / E-comm", "Slack / Teams", "Instagram / Socials"].map((item) => (
                                <label key={item} className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${formData.integrations?.includes(item) ? 'bg-warho-purple/20 border-warho-purple' : 'bg-black/30 border-white/10 hover:bg-white/5'}`}>
                                    <input 
                                        type="checkbox" 
                                        value={item} 
                                        checked={formData.integrations?.includes(item)} 
                                        onChange={handleChange} 
                                        className="mr-3 accent-warho-yellow w-4 h-4 rounded" 
                                    />
                                    <span className="text-white text-sm">{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">Data Status</label>
                         <div className="space-y-2">
                            {[
                                { val: "Ready", label: "Good (Everything is organized)" },
                                { val: "Cleanup", label: "Okay (I have data but it's messy)" },
                                { val: "Infrastructure", label: "Non-existent (I need help setting it up)" }
                            ].map((opt) => (
                                <label key={opt.val} className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${formData.dataReadiness === opt.val ? 'bg-warho-purple/20 border-warho-purple' : 'bg-black/30 border-white/10 hover:bg-white/5'}`}>
                                    <input type="radio" name="dataReadiness" value={opt.val} checked={formData.dataReadiness === opt.val} onChange={handleChange} className="mr-3 accent-warho-yellow" />
                                    <span className="text-white text-sm">{opt.label}</span>
                                </label>
                            ))}
                         </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Scope */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-in slide-in-from-right fade-in duration-300">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">Where do you need help most?</label>
                        <div className="flex gap-4">
                            <label className={`flex-1 flex items-center justify-center p-4 rounded-lg border cursor-pointer transition-all ${formData.focusArea === 'Internal' ? 'bg-warho-purple/20 border-warho-purple' : 'bg-black/30 border-white/10 hover:bg-white/5'}`}>
                                <input type="radio" name="focusArea" value="Internal" checked={formData.focusArea === 'Internal'} onChange={handleChange} className="mr-3 accent-warho-yellow" />
                                <span className="text-white">Internal Operations (Saving Time)</span>
                            </label>
                            <label className={`flex-1 flex items-center justify-center p-4 rounded-lg border cursor-pointer transition-all ${formData.focusArea === 'Customer' ? 'bg-warho-purple/20 border-warho-purple' : 'bg-black/30 border-white/10 hover:bg-white/5'}`}>
                                <input type="radio" name="focusArea" value="Customer" checked={formData.focusArea === 'Customer'} onChange={handleChange} className="mr-3 accent-warho-yellow" />
                                <span className="text-white">Customer Product (Making Money)</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Do you need a "White-Label" product?</label>
                        <p className="text-xs text-gray-500 mb-3">(This means we build software that you resell as your own.)</p>
                        <div className="flex gap-4">
                            <label className={`flex-1 flex items-center justify-center p-4 rounded-lg border cursor-pointer transition-all ${formData.whiteLabel === 'Yes' ? 'bg-warho-purple/20 border-warho-purple' : 'bg-black/30 border-white/10 hover:bg-white/5'}`}>
                                <input type="radio" name="whiteLabel" value="Yes" checked={formData.whiteLabel === 'Yes'} onChange={handleChange} className="mr-3 accent-warho-yellow" />
                                <span className="text-white">Yes, I want to resell it</span>
                            </label>
                            <label className={`flex-1 flex items-center justify-center p-4 rounded-lg border cursor-pointer transition-all ${formData.whiteLabel === 'No' ? 'bg-warho-purple/20 border-warho-purple' : 'bg-black/30 border-white/10 hover:bg-white/5'}`}>
                                <input type="radio" name="whiteLabel" value="No" checked={formData.whiteLabel === 'No'} onChange={handleChange} className="mr-3 accent-warho-yellow" />
                                <span className="text-white">No, just for my business</span>
                            </label>
                        </div>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">When do you want to start?</label>
                        <select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-warho-purple outline-none">
                            <option value="">Select Timeline...</option>
                            <option value="ASAP">ASAP (I'm ready now)</option>
                            <option value="Short Term">Next few months</option>
                            <option value="Medium Term">6-12 Months</option>
                            <option value="Researching">Just curious for now</option>
                        </select>
                    </div>
                  </div>
                )}

                 {/* Step 4: Contact */}
                 {currentStep === 4 && (
                  <div className="space-y-6 animate-in slide-in-from-right fade-in duration-300">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Your Custom AI Roadmap is Ready.</h3>
                        <p className="text-gray-400 mb-6">Enter your details to finalize the assessment and receive your personalized strategy.</p>
                        <div className="space-y-4">
                             <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                <input required name="companyName" value={formData.companyName} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-warho-purple outline-none" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Job Title / Role</label>
                                <input required name="role" value={formData.role} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-warho-purple outline-none" placeholder="Owner / Founder" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input required type="email" name="contactInfo" value={formData.contactInfo} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-warho-purple outline-none" placeholder="john@company.com" />
                            </div>
                        </div>
                    </div>
                  </div>
                )}

                {error && (
                   <div className="p-4 bg-red-900/20 border border-red-900/50 rounded-lg flex items-center gap-3 text-red-200">
                     <AlertCircle size={20} />
                     <p className="text-sm">{error}</p>
                   </div>
                )}

                <div className="flex gap-4 pt-4 border-t border-white/5">
                  {currentStep > 1 && (
                    <button type="button" onClick={handleBack} className="px-6 py-3 border border-white/10 text-white rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2">
                      <ArrowLeft size={16} /> Back
                    </button>
                  )}
                  {currentStep < totalSteps ? (
                    <button type="button" onClick={handleNext} className="flex-1 bg-warho-purple hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(75,0,130,0.3)]">
                      Next Step <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button type="submit" disabled={loading} className="flex-1 bg-warho-yellow text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                      {loading ? (<><Loader2 className="animate-spin" /> Processing Assessment...</>) : "Get My Free Strategy"}
                    </button>
                  )}
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-zinc-900 to-black p-10 border border-warho-purple/30 rounded-2xl relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700 text-center shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-warho-purple via-warho-yellow to-warho-purple"></div>
              <div className="flex justify-center mb-6">
                 <div className="w-16 h-16 bg-green-900/20 rounded-full flex items-center justify-center border border-green-500/30">
                    <CheckCircle2 className="text-green-400 w-8 h-8" />
                 </div>
              </div>
              <h3 className="text-3xl font-black text-white mb-6 leading-tight">Congratulations! <br/> Your Custom Roadmap is Being Built.</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed text-lg">Thank you for taking the first step. We are analyzing your inputs to find the best low-cost, high-impact AI tools for you.</p>
              <div className="bg-gradient-to-r from-purple-900/40 to-black p-6 rounded-xl border border-purple-500/30 mb-8 flex items-center gap-4 text-left max-w-xl mx-auto hover:border-purple-500/60 transition-colors cursor-pointer group">
                  <div className="bg-warho-purple/20 p-3 rounded-lg group-hover:bg-warho-purple/30 transition-colors">
                     <Gift className="text-warho-yellow w-8 h-8" />
                  </div>
                  <div>
                     <h4 className="text-white font-bold text-lg mb-1 flex items-center gap-2">Instant Bonus Unlocked <span className="bg-warho-yellow text-black text-[10px] px-2 py-0.5 rounded font-black uppercase">Free</span></h4>
                     <p className="text-sm text-gray-300">Access our "Small Business AI Starter Guide" while you wait.</p>
                  </div>
                  <div className="ml-auto">
                     <PlayCircle className="text-white w-6 h-6 group-hover:scale-110 transition-transform" />
                  </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-8 text-left max-w-3xl mx-auto mb-8 border border-white/5">
                 <h4 className="text-warho-yellow font-bold uppercase tracking-widest text-sm mb-6 border-b border-white/10 pb-4">What Happens Now?</h4>
                 <ul className="space-y-6">
                    <li className="flex gap-4 items-start">
                       <div className="w-8 h-8 rounded-full bg-warho-purple flex items-center justify-center shrink-0 font-bold text-white shadow-lg shadow-purple-900/50">1</div>
                       <div>
                          <h5 className="font-bold text-white text-lg mb-1">Analysis</h5>
                          <p className="text-gray-400 text-sm leading-relaxed">We are looking at your current tools (like {formData.crmPlatform}) to see where we can automate tasks.</p>
                       </div>
                    </li>
                    <li className="flex gap-4 items-start">
                       <div className="w-8 h-8 rounded-full bg-warho-purple flex items-center justify-center shrink-0 font-bold text-white shadow-lg shadow-purple-900/50">2</div>
                       <div>
                          <h5 className="font-bold text-white text-lg mb-1">Custom Plan</h5>
                          <p className="text-gray-400 text-sm leading-relaxed">You will receive a simple 1-page PDF plan via email within 48 hours.</p>
                       </div>
                    </li>
                 </ul>
              </div>
              <div className="mt-8">
                 <button onClick={() => { setIsSubmitted(false); setCurrentStep(1); }} className="text-sm text-gray-500 hover:text-white underline transition-colors">Start New Assessment</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};