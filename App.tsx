
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Blog from './components/Blog';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Reveal animation logic using IntersectionObserver
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#D4E4D4]">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-24">
          <About />
        </section>
        <section id="products" className="py-24 bg-white/30 backdrop-blur-sm">
          <Products />
        </section>
        <section id="blog" className="py-24">
          <Blog />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
