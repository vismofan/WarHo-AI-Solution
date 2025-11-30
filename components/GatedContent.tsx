import React, { useState } from 'react';
import { FileCheck, Calculator, BarChart3, Download, X, CheckCircle } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  desc: string;
  icon: React.ElementType;
}

const RESOURCES: Resource[] = [
  {
    id: 'risk-checklist',
    title: "Small Business AI Risk Guide",
    desc: "Simple checklist to ensure you use AI safely without exposing your customer data.",
    icon: FileCheck
  },
  {
    id: 'tco-calculator',
    title: "Subscription vs. Ownership Calculator",
    desc: "See how much you save by owning your software instead of paying monthly fees forever.",
    icon: Calculator
  },
  {
    id: 'cio-guide',
    title: "The Founder's Guide to AI Metrics",
    desc: "7 simple numbers to track to ensure your new AI tools are actually making you money.",
    icon: BarChart3
  }
];

export const GatedContent: React.FC = () => {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [coreSystem, setCoreSystem] = useState('');

  const handleDownloadClick = (res: Resource) => {
    setSelectedResource(res);
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section className="py-24 bg-warho-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-white mb-4">
            Free Guides for <span className="text-warho-purple">Business Owners</span>
          </h2>
          <p className="text-gray-400">Download our simple frameworks and calculators to help you decide.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESOURCES.map((res) => (
            <div key={res.id} className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all group flex flex-col">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-warho-purple/20 transition-colors">
                <res.icon className="text-white w-6 h-6 group-hover:text-warho-purple" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 min-h-[56px]">{res.title}</h3>
              <p className="text-gray-400 text-sm mb-8 flex-grow">{res.desc}</p>
              <button 
                onClick={() => handleDownloadClick(res)}
                className="w-full border border-white/20 text-white font-bold py-3 rounded-lg hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
              >
                <Download size={16} /> Download Guide
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedResource && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
           <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedResource(null)}></div>
           <div className="bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-md relative overflow-hidden animate-in fade-in zoom-in-95 shadow-2xl">
              <button onClick={() => setSelectedResource(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                <X size={20} />
              </button>
              
              {!isSubmitted ? (
                <div className="p-8">
                   <h3 className="text-xl font-bold text-white mb-2">Download Your Free Guide</h3>
                   <p className="text-sm text-gray-400 mb-6">{selectedResource.title}</p>
                   
                   <form onSubmit={handleSubmit} className="space-y-4">
                     <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Email</label>
                        <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:border-warho-purple outline-none" placeholder="name@company.com" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Role / Job Title</label>
                        <input required type="text" value={jobTitle} onChange={e => setJobTitle(e.target.value)} className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:border-warho-purple outline-none" placeholder="Founder" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-1">What's your main tool right now?</label>
                        <select required value={coreSystem} onChange={e => setCoreSystem(e.target.value)} className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:border-warho-purple outline-none appearance-none">
                           <option value="">Select...</option>
                           <option value="Excel">Excel / Google Sheets</option>
                           <option value="QuickBooks">QuickBooks / Accounting</option>
                           <option value="CRM">Salesforce / HubSpot</option>
                           <option value="Email">Just Email</option>
                        </select>
                     </div>
                     <button type="submit" className="w-full bg-warho-yellow text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition-colors mt-2">
                       Download Now
                     </button>
                   </form>
                </div>
              ) : (
                <div className="p-10 text-center flex flex-col items-center justify-center min-h-[350px]">
                   <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="text-green-400 w-8 h-8" />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">Check Your Inbox</h3>
                   <p className="text-gray-400 text-sm mb-6">
                     We've sent <strong>{selectedResource.title}</strong> to {email}.
                   </p>
                   <button onClick={() => setSelectedResource(null)} className="text-white hover:text-warho-yellow underline text-sm">
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