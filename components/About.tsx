
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div className="reveal">
        <h2 className="text-5xl font-light mb-8 brand-font italic text-[#2D3A2D]">The Essence of Purity</h2>
        <p className="text-[#4A5D4A] leading-relaxed mb-6">
          Founded in the heart of the Riviera, Lumière was born from a desire to combine the scientific rigor of dermatology with the untamed beauty of nature.
        </p>
        <p className="text-[#4A5D4A] leading-relaxed mb-8">
          Every product is handcrafted in small batches using sustainably sourced pearls, botanical extracts, and rare alpine flora. We believe that true beauty is light reflected from within, nurtured by the earth.
        </p>
        <button className="text-xs font-bold uppercase tracking-[0.3em] border-b-2 border-[#D4E4D4] pb-2 hover:border-[#2D3A2D] transition-colors text-[#2D3A2D]">
          Our Philosophy
        </button>
      </div>

      <div className="relative reveal" style={{ transitionDelay: '0.2s' }}>
        <div className="aspect-[4/5] bg-[#D4E4D4]/30 rounded-3xl overflow-hidden relative group shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop" 
            alt="Natural skincare aesthetic"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A2D]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center p-8">
             <div className="text-center relative z-10 p-8 border border-white/30 backdrop-blur-md rounded-2xl bg-white/10">
                <p className="text-sm italic tracking-widest text-white">"Botanical wisdom for the modern soul."</p>
             </div>
          </div>
        </div>
        {/* Decor shapes */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F7FBF7] rounded-full border border-[#D4E4D4] -z-10 shadow-sm" />
      </div>
    </div>
  );
};

export default About;
