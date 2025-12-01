import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Trust } from './components/Trust';
import { GoogleIntegration } from './components/GoogleIntegration';
import { Value } from './components/Value';
import { Risk } from './components/Risk';
import { Webinar } from './components/Webinar';
import { GatedContent } from './components/GatedContent';
import { AssessmentForm } from './components/AssessmentForm';
import { CopyGenerator } from './components/CopyGenerator';
import { Logo } from './components/Logo';
import { About } from './components/About';
import { ValuePropBar } from './components/ValuePropBar';
import { ChatWidget } from './components/ChatWidget';
import { ExitIntentPopup } from './components/ExitIntentPopup';
import { LandingCopy } from './types';
import { Mail, Globe, ChevronDown, Menu, X } from 'lucide-react';

// --- DATA: Default Home Copy ---
const DEFAULT_COPY: LandingCopy = {
  heroHeadline: "Big Tech Strategy. Small Business Budget.",
  heroSubheadline: "Expert AI consulting for founders who want to scale. We simplify enterprise-grade technology so you can grow revenue and cut costs—no technical skills needed.",
  ctaText: "See What AI Can Do For You",
  heroBadge: "Enterprise AI for Small Business",
  advantages: [
    {
      title: "Enterprise Strategy, Startup Cost",
      description: "Get the high-level consulting large companies pay millions for, tailored to your budget."
    },
    {
      title: "Simple & Jargon-Free",
      description: "We speak business, not code. We explain exactly how AI helps your specific goals."
    },
    {
      title: "Stop Renting, Start Owning",
      description: "We build systems you own. Stop paying monthly fees for software that traps your data."
    }
  ],
  assessmentLeadIn: "Don't know where to start? Our free assessment finds the hidden opportunities in your business to save time and money right now.",
  valueSection: {
    headline: "Growth Without The Headcount.",
    subheadline: "Growing your business shouldn't mean drowning in work or hiring expensive staff. WarHo builds simple systems that do the work for you.",
    points: [
      "One-time cost, no monthly fees",
      "You own the system (it's your asset)",
      "Automates work 24/7 (like a free employee)",
      "Connects your existing tools (Excel, Gmail)"
    ]
  }
};

// --- DATA: Sales Automation Copy ---
const SALES_COPY: LandingCopy = {
  heroHeadline: "Automate Your Sales. Close Deals Faster.",
  heroSubheadline: "Stop wasting time on data entry. We build AI systems that automatically capture leads, update your CRM, and schedule meetings so you can focus on selling.",
  ctaText: "Automate My Sales",
  heroBadge: "AI for Sales Automation",
  advantages: [
    {
      title: "Zero Manual Data Entry",
      description: "Emails, calls, and leads are automatically logged into your CRM or spreadsheet."
    },
    {
      title: "Instant Lead Response",
      description: "Engage new leads within seconds, 24/7, ensuring you never miss a deal."
    },
    {
      title: "Perfect Follow-Ups",
      description: "AI reminds you exactly when to call and what to say based on previous chats."
    }
  ],
  assessmentLeadIn: "Ready to stop chasing leads manually? Let's find the bottlenecks in your sales process.",
  valueSection: {
    headline: "Close Deals Without The Admin Work.",
    subheadline: "Your best sales people should be selling, not typing data into a CRM. WarHo automates the boring stuff.",
    points: [
      "Syncs Gmail/Outlook to CRM automatically",
      "Qualifies leads before you even talk to them",
      "Generates personalized outreach in seconds",
      "You own the data and the workflow"
    ]
  }
};

// --- DATA: Customer Support Copy ---
const SUPPORT_COPY: LandingCopy = {
  heroHeadline: "24/7 Support. Happy Customers. Zero Burnout.",
  heroSubheadline: "Provide enterprise-level support with a small team. Our AI agents answer common questions instantly and route complex issues to you, keeping customers happy around the clock.",
  ctaText: "Upgrade My Support",
  heroBadge: "AI for Customer Support",
  advantages: [
    {
      title: "Instant Answers, 24/7",
      description: "Customers get immediate help at 2 AM without you waking up."
    },
    {
      title: "Smart Triage",
      description: "AI handles the simple FAQs and only alerts you for important issues."
    },
    {
      title: "Consistent Quality",
      description: "Ensure every customer gets a polite, accurate response every time."
    }
  ],
  assessmentLeadIn: "Overwhelmed by support tickets? Let's see how much time we can save you this week.",
  valueSection: {
    headline: "World-Class Support on a Budget.",
    subheadline: "You don't need to a call center to provide 5-star service. You just need a smarter system.",
    points: [
      "Deflects 80% of repetitive questions",
      "Drafts responses for your review",
      "Integrates with your existing email helpdesk",
      "Scales instantly during busy seasons"
    ]
  }
};

const App: React.FC = () => {
  const [landingCopy, setLandingCopy] = useState<LandingCopy>(DEFAULT_COPY);
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'sales' | 'support'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- HASH ROUTING LOGIC ---
  useEffect(() => {
    // Function to handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (hash === 'sales') {
        setCurrentView('sales');
        setLandingCopy(SALES_COPY);
      } else if (hash === 'support') {
        setCurrentView('support');
        setLandingCopy(SUPPORT_COPY);
      } else if (hash === 'about') {
        setCurrentView('about');
        // About page doesn't need copy update as it renders a different component
      } else {
        setCurrentView('home');
        setLandingCopy(DEFAULT_COPY);
      }
      
      // Only scroll to top if we are not just initializing
      // We don't want to jump if the user refreshed the page and the browser restores scroll
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Check hash on initial load
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Function to update hash (triggers the effect above)
  const navigateTo = (view: 'home' | 'about' | 'sales' | 'support') => {
    if (view === 'home') {
        // Clear the hash
        window.history.pushState("", document.title, window.location.pathname + window.location.search);
        setCurrentView('home');
        setLandingCopy(DEFAULT_COPY);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        window.location.hash = `#${view}`;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    
    // If element not found (e.g. we are on About page), go home then scroll
    if (currentView === 'about') {
        navigateTo('home');
        // Wait a tick for the home view to render before scrolling
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 300);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-warho-purple selection:text-white pt-8">
      {/* Top Value Bar */}
      <div className="fixed top-0 w-full z-[60]">
        <ValuePropBar />
      </div>

      {/* Navbar */}
      <nav className="fixed top-8 w-full z-[50] bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div onClick={() => navigateTo('home')} className="cursor-pointer z-50 relative">
               <Logo />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
                {/* Solutions Dropdown */}
                <div className="relative group">
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-white transition-colors py-2 focus:outline-none">
                    Solutions <ChevronDown size={14} />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-zinc-900 border border-white/10 rounded-xl shadow-xl overflow-hidden invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all transform origin-top duration-200">
                    <button 
                      onClick={() => navigateTo('sales')}
                      className={`block w-full text-left px-4 py-3 text-sm transition-colors ${currentView === 'sales' ? 'bg-white/10 text-warho-yellow' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                    >
                      AI for Sales
                    </button>
                    <button 
                      onClick={() => navigateTo('support')}
                      className={`block w-full text-left px-4 py-3 text-sm transition-colors ${currentView === 'support' ? 'bg-white/10 text-warho-yellow' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                    >
                      AI for Support
                    </button>
                    <button 
                      onClick={() => navigateTo('home')}
                      className={`block w-full text-left px-4 py-3 text-sm transition-colors border-t border-white/5 ${currentView === 'home' ? 'bg-white/10 text-warho-yellow' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                    >
                      General Consulting
                    </button>
                  </div>
                </div>

                <button 
                  onClick={() => navigateTo('about')}
                  className={`text-sm font-medium transition-colors ${currentView === 'about' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  Who We Are
                </button>

                <button 
                  onClick={() => scrollToSection('assessment')}
                  className="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-wide border border-transparent hover:border-warho-yellow/50 px-4 py-2 rounded"
                >
                  Get Free Strategy
                </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden relative z-50 text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="md:hidden fixed top-20 left-0 w-full bg-zinc-950 border-b border-white/10 shadow-2xl animate-in slide-in-from-top-2 z-[45]">
              <div className="p-6 flex flex-col gap-4">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest px-2">Solutions</span>
                <button 
                  onClick={() => navigateTo('sales')}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium hover:bg-white/10 ${currentView === 'sales' ? 'bg-white/10 text-warho-yellow' : 'bg-white/5 text-white'}`}
                >
                  AI for Sales
                </button>
                <button 
                  onClick={() => navigateTo('support')}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium hover:bg-white/10 ${currentView === 'support' ? 'bg-white/10 text-warho-yellow' : 'bg-white/5 text-white'}`}
                >
                  AI for Support
                </button>
                
                <div className="h-px bg-white/10 my-1"></div>
                
                <button 
                  onClick={() => navigateTo('about')}
                  className={`w-full text-left px-4 py-2 hover:text-white ${currentView === 'about' ? 'text-white' : 'text-gray-300'}`}
                >
                  Who We Are
                </button>
                <button 
                  onClick={() => scrollToSection('assessment')}
                  className="w-full bg-warho-yellow text-black font-bold py-3 rounded-lg text-center mt-2"
                >
                  Get Free Strategy
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="mt-8">
        {currentView === 'about' ? (
            <div className="animate-in fade-in slide-in-from-right duration-500">
                <About />
                {/* CTA at bottom of About page */}
                <div className="py-24 bg-zinc-950 text-center border-t border-white/5">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to scale your business?</h2>
                    <button 
                        onClick={() => scrollToSection('assessment')}
                        className="bg-warho-yellow text-black font-bold px-8 py-4 rounded-lg hover:bg-yellow-300 transition-colors shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                    >
                        Start Free Assessment
                    </button>
                </div>
            </div>
        ) : (
            <div className="animate-in fade-in duration-500">
                {/* Dynamic Hero based on hash state */}
                <Hero copy={landingCopy} onCtaClick={() => scrollToSection('assessment')} />
                
                {/* Dynamic Value Section */}
                <Value customContent={landingCopy.valueSection} />
                
                <Trust />
                <Features advantages={landingCopy.advantages} />
                <GoogleIntegration />
                <Risk />
                <Webinar />
                <GatedContent />
                <AssessmentForm leadInText={landingCopy.assessmentLeadIn} />
            </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10 flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6 text-sm font-medium text-gray-400">
             <a href="mailto:warhoai@gmail.com" className="hover:text-warho-yellow transition-colors flex items-center gap-2">
                <Mail size={16} />
                <span>warhoai@gmail.com</span>
             </a>
             <span className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></span>
             <a href="https://www.warhoai.com" target="_blank" rel="noopener noreferrer" className="hover:text-warho-yellow transition-colors flex items-center gap-2">
                <Globe size={16} />
                <span>www.warhoai.com</span>
             </a>
        </div>
        
        {/* Quick Links Footer */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-600">
           <button onClick={() => navigateTo('sales')} className="hover:text-gray-400">Sales AI</button>
           <button onClick={() => navigateTo('support')} className="hover:text-gray-400">Support AI</button>
           <button onClick={() => navigateTo('about')} className="hover:text-gray-400">About Us</button>
        </div>

        <p className="text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} WarHo AI Solutions. All rights reserved.
        </p>
      </footer>

      {/* Interactive Elements */}
      <ChatWidget />
      <ExitIntentPopup />
      
      {/* 
        Copy Generator: Only shown on Home view to avoid conflict with static sales/support copy.
        Allows dynamic AI generation of new angles for the main page.
      */}
      {currentView === 'home' && <CopyGenerator onUpdateCopy={setLandingCopy} />}
    </div>
  );
};

export default App;