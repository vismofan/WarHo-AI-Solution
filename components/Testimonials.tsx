import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "WarHo gave me my life back. The automated email system handles 80% of my customer support now.",
    author: "Jessica M.",
    role: "Founder, E-com Boutique"
  },
  {
    quote: "I thought AI was just for big tech companies. WarHo showed me how to use it to double my leads without hiring sales staff.",
    author: "David K.",
    role: "Owner, Local Realty Group"
  },
  {
    quote: "Affordable, fast, and I actually own the code. No more monthly subscription fees for tools I barely use.",
    author: "Sarah J.",
    role: "Managing Director, Logistics Co."
  }
];

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-16 bg-gradient-to-r from-warho-purple/10 to-transparent border-y border-white/5 py-12 relative">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="mb-6 flex justify-center">
          <Quote className="text-warho-purple w-10 h-10 opacity-50" />
        </div>
        
        <div className="min-h-[160px] flex flex-col justify-center animate-in fade-in duration-700 key={current}">
          <p className="text-xl md:text-2xl font-light text-white italic mb-8 leading-relaxed">
            "{TESTIMONIALS[current].quote}"
          </p>
          <div>
            <h4 className="font-bold text-warho-yellow">{TESTIMONIALS[current].author}</h4>
            <p className="text-sm text-gray-500 uppercase tracking-wider">{TESTIMONIALS[current].role}</p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                current === idx ? 'bg-warho-yellow w-6' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};