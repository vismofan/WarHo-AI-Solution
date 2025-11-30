import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Calendar, User, Send, Loader2, Sparkles, ArrowRight } from 'lucide-react';
import { createChatSession } from '../services/aiService';
import { Chat } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to WarHo AI. I am your WarHo Strategist. How can I assist with your enterprise AI, CRM, or cloud integration questions?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  
  // Ref to hold the chat session instance
  const chatSession = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat session on mount
  useEffect(() => {
    try {
      chatSession.current = createChatSession();
    } catch (e) {
      console.error("Failed to initialize chat session", e);
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || !chatSession.current) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const result = await chatSession.current.sendMessage({ message: userMsg });
      const responseText = result.text;
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I apologize, but I'm having trouble connecting to the strategy server. Please try again or use the Assessment form." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Pre-defined quick prompts
  const quickPrompts = [
    "Do I own the code?",
    "Does it work with Salesforce?",
    "How fast can we deploy?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 pointer-events-none">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white text-black w-[350px] md:w-[400px] h-[500px] rounded-2xl shadow-2xl border border-gray-200 overflow-hidden pointer-events-auto animate-in slide-in-from-bottom-5 fade-in duration-300 flex flex-col">
          
          {/* Header */}
          <div className="bg-warho-dark p-4 flex justify-between items-center text-white shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-warho-purple to-purple-900 flex items-center justify-center border border-white/20 relative">
                <Sparkles size={18} className="text-warho-yellow" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-warho-dark rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bold text-sm">WarHo Strategist AI</h4>
                <span className="text-[10px] text-gray-400 flex items-center gap-1 uppercase tracking-wider">
                  Enterprise Integration Expert
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>
          
          {/* Messages Area */}
          <div className="flex-1 p-4 bg-gray-50 overflow-y-auto space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'model' && (
                  <div className="w-6 h-6 rounded-full bg-warho-purple/10 flex items-center justify-center mr-2 mt-1 shrink-0">
                    <User size={12} className="text-warho-purple" />
                  </div>
                )}
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-warho-purple text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                 <div className="w-6 h-6 rounded-full bg-warho-purple/10 flex items-center justify-center mr-2 mt-1 shrink-0">
                    <User size={12} className="text-warho-purple" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-warho-purple" />
                    <span className="text-xs text-gray-500">Thinking...</span>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts (Only show if few messages) */}
          {messages.length < 4 && (
             <div className="px-4 pb-2 bg-gray-50 flex gap-2 overflow-x-auto no-scrollbar">
                {quickPrompts.map((qp, i) => (
                   <button 
                      key={i} 
                      onClick={() => {
                        setInput(qp); 
                        // Note: User must still click send or press enter, 
                        // this just populates the input for review.
                      }}
                      className="whitespace-nowrap px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-warho-purple font-medium hover:bg-warho-purple hover:text-white transition-colors"
                   >
                      {qp}
                   </button>
                ))}
             </div>
          )}

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
             <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about IP, Integration, or Risk..."
                className="flex-1 bg-gray-100 text-gray-900 text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-warho-purple/50"
             />
             <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="bg-warho-purple text-white p-3 rounded-lg hover:bg-purple-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
             >
                <Send size={18} />
             </button>
          </div>

          {/* Footer CTA */}
          <div className="bg-gray-50 p-2 text-center border-t border-gray-200">
             <button onClick={() => { setIsOpen(false); document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth'}); }} className="text-[10px] text-gray-500 hover:text-warho-purple font-bold uppercase tracking-wider flex items-center justify-center gap-1 w-full">
                Skip Chat & Start Assessment <ArrowRight size={10} />
             </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-warho-yellow text-black hover:bg-yellow-400 p-4 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all hover:scale-110 pointer-events-auto group relative z-50 border-2 border-black"
      >
        {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
        )}
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};