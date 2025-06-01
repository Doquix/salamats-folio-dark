
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-portfolio-dark-lighter dark:border-portfolio-dark-lighter bg-portfolio-dark-light dark:bg-portfolio-dark-light text-portfolio-text dark:text-portfolio-text hover:border-portfolio-accent transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-portfolio-accent" />
      ) : (
        <Moon className="w-5 h-5 text-portfolio-accent" />
      )}
    </button>
  );
};

export default ThemeToggle;
