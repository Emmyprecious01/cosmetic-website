
import React from 'react';

interface CosmeticBottleProps {
  variant: 'tall' | 'jar';
  color: string;
  label: string;
}

const CosmeticBottle: React.FC<CosmeticBottleProps> = ({ variant, color, label }) => {
  if (variant === 'tall') {
    return (
      <div className="relative group perspective-1000">
        <div className="w-32 h-64 relative rounded-2xl shadow-2xl overflow-hidden transition-transform duration-700 group-hover:rotate-y-12" 
             style={{ background: `linear-gradient(135deg, ${color} 0%, #FFF 100%)` }}>
          {/* Cap */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-6 bg-[#D4AF37]/80 backdrop-blur-sm border-b border-black/10" />
          {/* Liquid highlight */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/30 skew-x-12 translate-x-1/2" />
          {/* Label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 py-2 border-y border-[#4A3E3E]/20 text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] font-light text-[#4A3E3E]">{label}</span>
          </div>
        </div>
        {/* Shadow floor */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/5 blur-lg rounded-full" />
      </div>
    );
  }

  return (
    <div className="relative group">
      <div className="w-40 h-32 relative rounded-xl shadow-2xl overflow-hidden" 
           style={{ background: `linear-gradient(to bottom, ${color} 0%, #E8D3D3 100%)` }}>
        {/* Cap */}
        <div className="absolute top-0 left-0 w-full h-8 bg-white/60 backdrop-blur-md border-b border-black/5" />
        {/* Highlight */}
        <div className="absolute top-1/2 left-4 w-4 h-1/2 bg-white/40 blur-sm rounded-full" />
        {/* Label */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center w-full">
            <span className="text-[8px] uppercase tracking-[0.5em] text-[#4A3E3E] font-medium opacity-60">LUMIÈRE</span>
            <div className="mt-1 text-[10px] uppercase tracking-[0.2em] font-light">{label}</div>
        </div>
      </div>
      {/* Shadow floor */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/5 blur-md rounded-full" />
    </div>
  );
};

export default CosmeticBottle;
