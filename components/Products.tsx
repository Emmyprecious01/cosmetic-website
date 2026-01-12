
import React from 'react';
import CosmeticBottle from './CosmeticBottle';

const productList = [
  { name: 'Sage Essence', category: 'Radiance', price: '$85', color: '#E8F3E8' },
  { name: 'Forest Dew Cream', category: 'Hydration', price: '$120', color: '#D4E4D4' },
  { name: 'Alpine Recovery', category: 'Recovery', price: '$95', color: '#F0F7F0' },
  { name: 'Verdant Elixir', category: 'Brightening', price: '$110', color: '#E2EEE2' },
];

const Products: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20 reveal">
        <span className="text-xs uppercase tracking-[0.4em] text-[#5A7D5A] mb-4 block">Nature's Lab</span>
        <h2 className="text-5xl font-light brand-font italic text-[#2D3A2D]">Botanical Collections</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {productList.map((product, idx) => (
          <div 
            key={idx} 
            className="reveal bg-white/40 backdrop-blur-md border border-[#D4E4D4]/50 p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            style={{ transitionDelay: `${idx * 0.1}s` }}
          >
            <div className="flex justify-center mb-8 h-48 items-center">
                <div className="scale-75 group-hover:scale-90 transition-transform duration-700">
                    <CosmeticBottle 
                      variant={idx % 2 === 0 ? 'tall' : 'jar'} 
                      color={product.color} 
                      label={product.category} 
                    />
                </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-medium mb-2 brand-font text-[#2D3A2D]">{product.name}</h3>
              <p className="text-xs uppercase tracking-widest text-[#5A7D5A] mb-4">{product.category}</p>
              <div className="text-lg font-light text-[#2D3A2D]">{product.price}</div>
              
              <button className="mt-6 w-full py-3 bg-transparent border border-[#2D3A2D] text-[#2D3A2D] text-[10px] uppercase tracking-widest rounded-full hover:bg-[#2D3A2D] hover:text-white transition-all">
                Add to Bag
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
