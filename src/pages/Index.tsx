
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import ProjectCarousel from '@/components/ProjectCarousel';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { initGSAPAnimations, animateSkillTags } from '@/utils/gsapAnimations';

const Index = () => {
  useEffect(() => {
    // Initialize GSAP animations after component mounts
    initGSAPAnimations();
    animateSkillTags();
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-dark text-portfolio-text">
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
