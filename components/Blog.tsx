
import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    { 
      title: 'The Green Science', 
      date: 'October 12, 2023', 
      excerpt: 'How botanical antioxidants from high-altitude flora reverse cellular aging.',
      image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: 'Morning Rituals', 
      date: 'October 05, 2023', 
      excerpt: 'Mindful moments: 5 minutes to transform your morning skin prep into a ritual.',
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: 'Conscious Luxury', 
      date: 'September 28, 2023', 
      excerpt: 'Why our infinitely recyclable glass packaging is the future of sustainable elegance.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal">
        <div>
          <span className="text-xs uppercase tracking-[0.4em] text-[#5A7D5A] mb-4 block">Our Journal</span>
          <h2 className="text-5xl font-light brand-font italic text-[#2D3A2D]">Verdant Narratives</h2>
        </div>
        <button className="mt-6 md:mt-0 text-xs font-bold uppercase tracking-[0.2em] text-[#2D3A2D] opacity-60 hover:opacity-100 transition-opacity">
          View All Stories &rarr;
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {posts.map((post, idx) => (
          <div 
            key={idx} 
            className="reveal group cursor-pointer" 
            style={{ transitionDelay: `${idx * 0.15}s` }}
          >
            <div className="aspect-video bg-[#D4E4D4]/20 rounded-2xl mb-6 overflow-hidden relative shadow-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[#2D3A2D]/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest bg-white/70 backdrop-blur-md px-3 py-1 rounded-full text-[#2D3A2D]">
                    Nature
                </div>
            </div>
            <div className="text-xs text-[#5A7D5A] mb-2 tracking-widest uppercase">{post.date}</div>
            <h3 className="text-2xl font-light mb-3 brand-font text-[#2D3A2D] group-hover:text-[#5A7D5A] transition-colors">{post.title}</h3>
            <p className="text-sm text-[#4A5D4A] leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
            <div className="w-0 group-hover:w-full h-[1px] bg-[#2D3A2D] transition-all duration-700" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
