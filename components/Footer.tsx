
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#F0F7F0] py-20 border-t border-[#D4E4D4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold tracking-widest brand-font uppercase mb-6 text-[#2D3A2D]">Lumière</h2>
            <p className="text-sm text-[#4A5D4A] max-w-sm leading-relaxed mb-8">
              A commitment to botanical elegance, purity, and sustainable luxury. Join our community for exclusive early access to our seasonal harvests.
            </p>
            <div className="flex gap-4">
               {['Instagram', 'Pinterest', 'Ecology'].map(social => (
                 <a key={social} href="#" className="text-[10px] uppercase tracking-widest text-[#5A7D5A] hover:text-[#2D3A2D] transition-colors">{social}</a>
               ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-[#2D3A2D]">Boutique</h4>
            <ul className="space-y-4 text-xs text-[#4A5D4A] tracking-wider">
              <li><a href="#" className="hover:text-[#2D3A2D]">Botanical Oils</a></li>
              <li><a href="#" className="hover:text-[#2D3A2D]">Mineral Balms</a></li>
              <li><a href="#" className="hover:text-[#2D3A2D]">Green Rituals</a></li>
              <li><a href="#" className="hover:text-[#2D3A2D]">Gift Sets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-[#2D3A2D]">Philosophy</h4>
            <ul className="space-y-4 text-xs text-[#4A5D4A] tracking-wider">
              <li><a href="#" className="hover:text-[#2D3A2D]">Sustainability</a></li>
              <li><a href="#" className="hover:text-[#2D3A2D]">Eco-Packaging</a></li>
              <li><a href="#" className="hover:text-[#2D3A2D]">The Lab</a></li>
              <li><a href="#" className="hover:text-[#2D3A2D]">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-[#D4E4D4] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#5A7D5A]">
            &copy; 2024 Lumière Botanical. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-[#5A7D5A] hover:text-[#2D3A2D]">Privacy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-[#5A7D5A] hover:text-[#2D3A2D]">Terms</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-[#5A7D5A] hover:text-[#2D3A2D]">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
