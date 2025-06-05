
import React from 'react';
import { Github, Linkedin, Mail, Heart, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/luke-salamat", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/luke-salamat", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:lukaizas@gmail.com", label: "Email" },
    { icon: <Phone className="w-5 h-5" />, href: "tel:+639368920872", label: "Phone" },
  ];

  return (
    <footer className="bg-white dark:bg-portfolio-dark border-t border-gray-200 dark:border-portfolio-dark-lighter section-padding py-12">
      <div className="container-width">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-xl font-semibold gradient-text mb-4">
              Luke Akaiza Y. Salamat
            </h3>
            <p className="text-gray-600 dark:text-portfolio-text-muted mb-2">
              Full-Stack Web Developer | Laravel & Flask Specialist
            </p>
            <p className="text-gray-600 dark:text-portfolio-text-muted mb-6">
              Cagayan de Oro, Philippines
            </p>
            
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  aria-label={link.label}
                  className="bg-gray-100 dark:bg-portfolio-dark-light border border-gray-200 dark:border-portfolio-dark-lighter p-3 rounded-lg text-gray-600 dark:text-portfolio-text-muted hover:text-portfolio-accent hover:border-portfolio-accent transition-all duration-300 hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-portfolio-dark-lighter pt-8">
            <p className="text-gray-600 dark:text-portfolio-text-muted flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Luke Salamat
            </p>
            <p className="text-gray-600 dark:text-portfolio-text-muted text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
