
import React, { useState, useEffect } from 'react';
import CosmeticBottle from './CosmeticBottle';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Foreground Parallax calculations
  const leftX = Math.min(scrollY * 0.5, 300) - 200;
  const rightX = -Math.min(scrollY * 0.5, 300) + 200;
  const opacity = Math.max(0, 1 - scrollY / 600);
  const scale = 1 + scrollY * 0.0005;

  // Background Parallax factors
  const bgMove1 = scrollY * 0.15;
  const bgMove2 = scrollY * 0.08;

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ perspective: '1000px' }}
    >
      {/* Parallax Background Elements (Light Green Theme) */}
      <div 
        className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-[#D4E4D4]/30 rounded-full blur-[140px] -z-20 transition-transform duration-100 ease-out"
        style={{ 
          transform: `translate3d(-50%, calc(-50% + ${bgMove1}px), -200px)`,
        }} 
      />
      
      <div 
        className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#E8F3E8]/40 rounded-full blur-[100px] -z-10 transition-transform duration-150 ease-out"
        style={{ 
          transform: `translate3d(0, ${bgMove2}px, -100px)`,
        }} 
      />

      <div 
        className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-[#F7FBF7]/50 rounded-full blur-[120px] -z-10 transition-transform duration-200 ease-out"
        style={{ 
          transform: `translate3d(0, ${-bgMove2 * 0.5}px, -150px)`,
        }} 
      />
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" style={{ opacity }}>
        <h1 className="text-6xl md:text-8xl font-light mb-6 leading-tight tracking-tight text-[#2D3A2D]">
          Discover Your <br />
          <span className="italic">Inner Radiance</span>
        </h1>
        <p className="text-lg md:text-xl font-light text-[#4A5D4A] mb-10 tracking-wide max-w-xl mx-auto">
          Luxury skin care formulated with rare botanical extracts for a timeless, natural glow.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#products" 
            className="inline-block px-10 py-4 bg-[#2D3A2D] text-white text-xs font-medium uppercase tracking-[0.3em] rounded-full hover:bg-[#3D4D3D] transition-all transform hover:scale-105 active:scale-95 shadow-xl"
          >
            Explore Products
          </a>
        </div>
      </div>

      {/* Foreground Floating Products */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${leftX}px, -50%, 50px) scale(${scale})` }}
      >
        <div className="floating">
          <CosmeticBottle variant="tall" color="#E8F3E8" label="Botanical" />
        </div>
      </div>

      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${rightX}px, -50%, 50px) scale(${scale})` }}
      >
        <div className="floating" style={{ animationDelay: '1s' }}>
          <CosmeticBottle variant="jar" color="#F0F7F0" label="Verdana" />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-[0.5em] mb-4 opacity-50">Scroll Down</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#2D3A2D] to-transparent" />
      </div>
    </div>
  );
};

export default Hero;
