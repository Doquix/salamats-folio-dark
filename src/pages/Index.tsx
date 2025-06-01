
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
    <div className="min-h-screen bg-white dark:bg-portfolio-dark text-gray-900 dark:text-portfolio-text transition-colors duration-300">
      <Navigation />
      <main>
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
