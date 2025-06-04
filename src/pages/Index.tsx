
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import ProjectCarousel from '@/components/ProjectCarousel';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-slate-100 transition-colors duration-300 relative overflow-x-hidden">
      {/* Background space elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Moving animated stars */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${0.5 + Math.random() * 1}s infinite ${Math.random() * 1}s, float ${2 + Math.random() * 2}s infinite linear ${Math.random() * 1}s`
              }}
            />
          ))}
        </div>

        {/* Larger glowing moving stars */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-300/70 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `glow ${1 + Math.random() * 1}s infinite ${Math.random() * 1}s, drift ${3 + Math.random() * 2}s infinite linear ${Math.random() * 1}s`
              }}
            />
          ))}
        </div>

        {/* Shooting stars */}
        <div className="absolute inset-0">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `shoot ${1 + Math.random() * 1}s infinite ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <ProjectCarousel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
