import { useEffect, useState } from 'react';
import {MoonIcon, SunIcon} from "@heroicons/react/16/solid";

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
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? (
          <SunIcon className="w-6 h-6 text-yellow-400"/>
        ) : (
          <MoonIcon className="w-6 h-6 text-gray-800"/>
        )}
      </button>
    </header>
  );
};

export default Header;
