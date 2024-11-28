import React, { createContext, useState, useEffect } from 'react';

// Initialize context with default values
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => null,
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      const savedTheme = window.localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      window.localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  };

  const value = {
    theme,
    toggleTheme,
  };

  // Don't render context provider until after mounting to prevent hydration issues
  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
