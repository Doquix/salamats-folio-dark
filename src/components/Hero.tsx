
import React, { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import ThreeJsBackground from './ThreeJsBackground';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative section-padding">
      <ThreeJsBackground />
      
      <div className="container-width text-center relative z-10">
        <div>
          <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-portfolio-text">Luke Akaiza Y.</span>
            <span className="block gradient-text">Salamat</span>
          </h1>
          
          <p className="hero-subtitle text-xl sm:text-2xl text-portfolio-text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
            Web Developer & IT Student crafting modern digital experiences from the Philippines
          </p>
          
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#about"
              className="bg-portfolio-accent hover:bg-portfolio-accent-light text-portfolio-dark px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-portfolio-accent/30"
            >
              About Me
            </a>
            <a 
              href="#projects"
              className="border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-dark px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-portfolio-accent" />
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/5 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
