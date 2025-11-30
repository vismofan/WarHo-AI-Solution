import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, TrendingUp } from 'lucide-react';

export const ROICalculator: React.FC = () => {
  // Default values based on the example scenario provided
  const [hourlyCost, setHourlyCost] = useState(40);
  const [weeklyHours, setWeeklyHours] = useState(20);
  const [newRevenue, setNewRevenue] = useState(50000);

  // Calculation Logic
  // Automation Savings (S) = A * B * 52
  const hoursSavedAnnual = weeklyHours * 52;
  const operationalSavings = hourlyCost * weeklyHours * 52;
  
  // Total Potential ROI (R) = S + C
  const totalROI = operationalSavings + newRevenue;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm shadow-xl relative overflow-hidden group">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-warho-yellow/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-warho-yellow/10 transition-colors"></div>

      <div className="flex items-center gap-3 mb-8 relative z-10">
        <div className="p-3 bg-warho-yellow rounded-lg text-black shadow-lg shadow-yellow-500/20">
          <Calculator size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">ROI & Value Estimator</h3>
          <p className="text-xs text-gray-400">Calculate efficiency gains + revenue growth</p>
        </div>
      </div>

      <div className="space-y-8 relative z-10">
        {/* INPUTS */}
        <div className="space-y-5">
          {/* Input A: Hourly Cost */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <label className="font-medium text-gray-300">Avg. Employee Cost / Hour</label>
              <span className="text-warho-yellow font-bold">${hourlyCost}</span>
            </div>
            <input 
              type="range" 
              min="15" 
              max="150" 
              step="5" 
              value={hourlyCost} 
              onChange={(e) => setHourlyCost(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-warho-purple"
            />
            <p className="text-[10px] text-gray-500 mt-1">Include salary, taxes, and benefits</p>
          </div>

          {/* Input B: Weekly Hours */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <label className="font-medium text-gray-300">Admin Hours / Week</label>
              <span className="text-warho-yellow font-bold">{weeklyHours} hrs</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="80" 
              step="1" 
              value={weeklyHours} 
              onChange={(e) => setWeeklyHours(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-warho-purple"
            />
            <p className="text-[10px] text-gray-500 mt-1">Time spent on repetitive tasks</p>
          </div>

          {/* Input C: New Revenue */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <label className="font-medium text-gray-300">Potential New Revenue</label>
              <span className="text-warho-yellow font-bold">${(newRevenue / 1000).toFixed(0)}k</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="500000" 
              step="5000" 
              value={newRevenue} 
              onChange={(e) => setNewRevenue(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-warho-yellow"
            />
            <p className="text-[10px] text-gray-500 mt-1">Est. value from freeing up your time</p>
          </div>
        </div>

        {/* OUTPUTS */}
        <div className="bg-black/40 rounded-xl p-6 border border-white/5 space-y-4">
          
          {/* Row 1: Time Saved */}
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wide">
              <Clock size={14} className="text-blue-400" />
              Hours Saved
            </div>
            <span className="text-white font-bold">{hoursSavedAnnual.toLocaleString()} hrs/yr</span>
          </div>

          {/* Row 2: Operational Savings */}
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
             <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wide">
              <DollarSign size={14} className="text-green-400" />
              Cash Savings
            </div>
            <span className="text-white font-bold">${operationalSavings.toLocaleString()}</span>
          </div>

          {/* Row 3: Total ROI */}
          <div className="pt-2">
            <div className="flex items-center gap-2 text-warho-yellow text-xs font-bold uppercase tracking-wider mb-1">
              <TrendingUp size={14} />
              Total Annual Value
            </div>
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-warho-yellow to-yellow-200">
              ${totalROI.toLocaleString()}
            </div>
            <p className="text-[10px] text-gray-500 mt-2 italic">
              *The value you unlock by automating.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};