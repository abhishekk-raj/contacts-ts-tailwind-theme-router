import { useEffect, useState } from 'react';

const Header = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const userPreferredTheme = localStorage.getItem('theme');
    if (userPreferredTheme) {
      setIsDark(userPreferredTheme === 'dark');
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  return (
    <header className="header">
      <h1 className="text-xl font-bold">Contact Book</h1>
      <button
        onClick={toggleTheme}
        className="button"
      >
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
