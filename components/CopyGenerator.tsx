import React, { useState } from 'react';
import { CopyVariant, LandingCopy } from '../types';
import { generateLandingCopy } from '../services/aiService';
import { Wand2, RefreshCw } from 'lucide-react';

interface CopyGeneratorProps {
  onUpdateCopy: (newCopy: LandingCopy) => void;
}

export const CopyGenerator: React.FC<CopyGeneratorProps> = ({ onUpdateCopy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeVariant, setActiveVariant] = useState<CopyVariant>(CopyVariant.COMPLEXITY);

  const handleGenerate = async (variant: CopyVariant) => {
    setActiveVariant(variant);
    setLoading(true);
    try {
      const newCopy = await generateLandingCopy(variant);
      onUpdateCopy(newCopy);
    } catch (error) {
      console.error(error);
      alert("Failed to generate copy. Please check API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-zinc-800 hover:bg-zinc-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-105 border border-white/10 opacity-50 hover:opacity-100"
          title="AI Copy Stylist"
        >
          <Wand2 className="w-5 h-5" />
        </button>
      ) : (
        <div className="bg-zinc-900 border border-white/20 rounded-xl p-6 shadow-2xl w-80 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Wand2 size={16} className="text-warho-yellow" />
              AI Copy Stylist
            </h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white">&times;</button>
          </div>
          
          <p className="text-xs text-gray-400 mb-4">
            Regenerate the landing page copy instantly based on strategic focus.
          </p>

          <div className="space-y-2">
            {[
              { id: CopyVariant.COMPLEXITY, label: "Focus: Complexity" },
              { id: CopyVariant.GROWTH, label: "Focus: Growth" },
              { id: CopyVariant.CUSTOM, label: "Focus: Customization" },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleGenerate(opt.id)}
                disabled={loading}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all border ${
                  activeVariant === opt.id 
                    ? 'bg-warho-purple/20 border-warho-purple text-white' 
                    : 'bg-black/40 border-transparent text-gray-400 hover:bg-white/5'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{opt.label}</span>
                  {loading && activeVariant === opt.id && <RefreshCw className="animate-spin w-3 h-3" />}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};