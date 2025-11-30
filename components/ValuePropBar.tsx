import React, { useState, useEffect } from 'react';
import { ShieldCheck, Clock, Award } from 'lucide-react';

const MESSAGES = [
  { text: "Guaranteed IP Ownership on All Custom Code", icon: ShieldCheck },
  { text: "90-Day Deployment Guarantee or Service Credits", icon: Clock },
  { text: "Certified Enterprise Security (SOC 2 Ready)", icon: Award },
];

export const ValuePropBar: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activeMsg = MESSAGES[index];
  const Icon = activeMsg.icon;

  return (
    <div className="bg-warho-purple text-white text-xs md:text-sm font-bold py-2 px-4 text-center relative z-50 overflow-hidden">
      <div className="flex items-center justify-center gap-2 animate-in slide-in-from-top duration-500 key={index}">
        <Icon size={16} className="text-warho-yellow" />
        <span>{activeMsg.text}</span>
      </div>
    </div>
  );
};