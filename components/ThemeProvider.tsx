'use client';

import React, { useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize theme on client-side only
    function getInitialTheme(): Theme {
      try {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
          return savedTheme;
        }
      } catch (e) {
        console.warn('Could not access localStorage:', e);
      }
      return 'system';
    }

    function applyTheme(theme: Theme) {
      const root = document.documentElement;
      
      if (theme === 'system') {
        root.classList.remove('light', 'dark');
        // Apply system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          root.classList.add('dark');
        } else {
          root.classList.add('light');
        }
      } else {
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
      }
    }

    // Apply initial theme
    const theme = getInitialTheme();
    applyTheme(theme);

    // Listen for system theme changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        const currentTheme = getInitialTheme();
        if (currentTheme === 'system') {
          applyTheme('system');
        }
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  return <>{children}</>;
};

export default ThemeProvider; 