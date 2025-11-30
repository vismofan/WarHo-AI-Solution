import React, { useState, useEffect } from 'react';
import { X, Calendar } from 'lucide-react';

export const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsVisible(false)}></div>
      <div className="bg-zinc-900 border border-warho-purple/50 rounded-2xl w-full max-w-md relative overflow-hidden animate-in fade-in zoom-in-95 shadow-[0_0_50px_rgba(75,0,130,0.3)]">
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20"
        >
          <X size={20} />
        </button>

        <div className="p-8 text-center">
            <div className="w-16 h-16 bg-warho-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-warho-yellow w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-white mb-2">Wait! Don't leave empty handed.</h3>
            <p className="text-gray-300 mb-8">
                Enterprise integration is complex. Skip the research and ask a Senior Architect directly.
            </p>

            <button className="w-full bg-warho-yellow text-black font-bold py-4 rounded-lg hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 mb-3">
                <Calendar size={18} />
                Schedule Free 15-Min Strategy Call
            </button>
            
            <button onClick={() => setIsVisible(false)} className="text-sm text-gray-500 hover:text-white underline">
                No thanks, I'll keep browsing
            </button>
        </div>
      </div>
    </div>
  );
};