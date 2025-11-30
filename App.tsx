import React, { useState } from 'react';
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
import { ArrowLeft, Mail, Globe } from 'lucide-react';

const DEFAULT_COPY: LandingCopy = {
  heroHeadline: "Big Tech Strategy. Small Business Budget.",
  heroSubheadline: "Expert AI consulting for founders who want to scale. We simplify enterprise-grade technology so you can grow revenue and cut costs—no technical skills needed.",
  ctaText: "See What AI Can Do For You",
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
  assessmentLeadIn: "Don't know where to start? Our free assessment finds the hidden opportunities in your business to save time and money right now."
};

const App: React.FC = () => {
  const [landingCopy, setLandingCopy] = useState<LandingCopy>(DEFAULT_COPY);
  const [currentView, setCurrentView] = useState<'home' | 'about'>('home');

  const scrollToSection = (id: string) => {
    // If on About page and trying to scroll to section on Home, switch view first
    if (currentView === 'about' && id !== 'about') {
        setCurrentView('home');
        // Small timeout to allow render
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-warho-purple selection:text-white pt-8">
      {/* Top Value Bar */}
      <div className="fixed top-0 w-full z-50">
        <ValuePropBar />
      </div>

      {/* Navbar */}
      <nav className="fixed top-8 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div onClick={() => setCurrentView('home')} className="cursor-pointer">
             <Logo />
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setCurrentView(currentView === 'home' ? 'about' : 'home')}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors hidden md:flex items-center gap-2"
            >
              {currentView === 'about' ? <><ArrowLeft size={16}/> Back to Home</> : 'Who We Are'}
            </button>
            <button 
              onClick={() => scrollToSection('assessment')}
              className="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-wide border border-transparent hover:border-warho-yellow/50 px-4 py-2 rounded"
            >
              Get Free Strategy
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mt-8">
        {currentView === 'home' ? (
            <>
                <Hero copy={landingCopy} onCtaClick={() => scrollToSection('assessment')} />
                
                {/* PROMOTED: Value & ROI Calculator moved up for immediate engagement */}
                <Value />
                
                <Trust />
                <Features advantages={landingCopy.advantages} />
                <GoogleIntegration />
                <Risk />
                <Webinar />
                <GatedContent />
                <AssessmentForm leadInText={landingCopy.assessmentLeadIn} />
            </>
        ) : (
            <div className="animate-in fade-in slide-in-from-right duration-500">
                <About />
                {/* CTA at bottom of About page */}
                <div className="py-24 bg-zinc-950 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to scale your business?</h2>
                    <button 
                        onClick={() => scrollToSection('assessment')}
                        className="bg-warho-yellow text-black font-bold px-8 py-4 rounded-lg hover:bg-yellow-300 transition-colors"
                    >
                        Start Free Assessment
                    </button>
                </div>
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
        <p className="text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} WarHo AI Solutions. All rights reserved.
        </p>
      </footer>

      {/* Interactive Elements */}
      <ChatWidget />
      <ExitIntentPopup />
      {currentView === 'home' && <CopyGenerator onUpdateCopy={setLandingCopy} />}
    </div>
  );
};

export default App;