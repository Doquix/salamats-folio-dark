
import React from 'react';
import { ChevronDown, User } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative section-padding overflow-hidden">
      {/* Space background with stars */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950">
        {/* Animated stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Larger glowing stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-300 rounded-full animate-glow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Cosmic nebula effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-blue-800/30" />
        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-900/30 via-transparent to-purple-800/20" />
      </div>

      <div className="container-width text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-blue-400 bg-slate-800/80 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-2xl shadow-blue-500/30">
              {/* Placeholder for now - user can replace with actual image */}
              <User className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-blue-400" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white drop-shadow-lg">Luke Akaiza Y.</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Salamat</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Web Developer & IT Student crafting modern digital experiences from the Philippines
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#about"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 backdrop-blur-sm"
            >
              About Me
            </a>
            <a 
              href="#projects"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              View Projects
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-blue-400 drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
