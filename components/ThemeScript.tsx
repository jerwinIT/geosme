import React from 'react';

const ThemeScript: React.FC = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            function getInitialTheme() {
              const savedTheme = localStorage.getItem('theme');
              if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
                return savedTheme;
              }
              return 'system';
            }

            function applyTheme(theme) {
              const root = document.documentElement;
              
              if (theme === 'system') {
                root.classList.remove('light', 'dark');
              } else {
                root.classList.remove('light', 'dark');
                root.classList.add(theme);
              }
            }

            const theme = getInitialTheme();
            applyTheme(theme);
          })();
        `,
      }}
    />
  );
};

export default ThemeScript; 